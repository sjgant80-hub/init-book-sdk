// init-book SDK · sovereign single-file library · MIT · AI-Native Solutions
// Extracted from init-book/index.html · 6351 bytes of source logic
// Public-safe: no primes/glyphs/dyad references

// ============================================================================
// INIT Book · chrome + state
// ============================================================================
const CHAPTERS = [
  { n:1, title:"The Beginning",        blurb:"what this is" },
  { n:4, title:"Your Profile",         blurb:"finding your bloom" },
  { n:5, title:"The Silent Witness",   blurb:"five stages" },
  { n:6, title:"Origami Mathematics",  blurb:"紙·折·言" },
  { n:7, title:"The Mesh",             blurb:"you are not alone" },
  { n:8, title:"The Six Operations",   blurb:"the assembly language" },
  { n:9, title:"Next Steps",           blurb:"the estate" }
];
const DB_NAME = 'initbook';
const STORE = 'progress';
let db;
function openDB(){
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE);
    };
    r.onsuccess = e => { db = e.target.result; res(); };
    r.onerror = e => rej(e);
  });
}
function put(key, val){
  return new Promise((res)=>{ if(!db) return res();
    const t = db.transaction(STORE,'readwrite'); t.objectStore(STORE).put(val,key); t.oncomplete=()=>res();
  });
}
function get(key){
  return new Promise((res)=>{ if(!db) return res(null);
    const t = db.transaction(STORE,'readonly'); const r = t.objectStore(STORE).get(key); r.onsuccess=()=>res(r.result); r.onerror=()=>res(null);
  });
}
function getAll(){
  return new Promise((res)=>{ if(!db) return res({});
    const t = db.transaction(STORE,'readonly'); const r = t.objectStore(STORE).getAllKeys(); r.onsuccess=()=>{
      const keys = r.result; const out = {};
      Promise.all(keys.map(k => get(k).then(v => out[k]=v))).then(()=>res(out));
    };
  });
}
function clearAll(){
  return new Promise((res)=>{ if(!db) return res();
    const t = db.transaction(STORE,'readwrite'); t.objectStore(STORE).clear(); t.oncomplete=()=>res();
  });
}
// ============================================================================
// Navigation
// ============================================================================
let currentPage = 'cover';
async function goto(page){
  if (el) el.classList.add('active');
  currentPage = page;
  await put('last', page);
  // mark chapter read
  if (page.startsWith('ch-')){
    const n = parseInt(page.slice(3),10);
    await put('ch-'+n+'-read', true);
    updateProgress();
    renderTOC();
  }
}
async function updateProgress(){
  const all = await getAll();
  let read = 0;
  for (let i=1;i<=9;i++) if (all['ch-'+i+'-read']) read++;
  const pct = (read / 9) * 100;
}
async function renderTOC(){
  const all = await getAll();
  list.innerHTML = '';
  CHAPTERS.forEach(c => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="num">${String(c.n).padStart(2,'0')}</span>
      <a href="#" data-goto="ch-${c.n}">${c.title} <span class="dim" style="font-style:italic;font-size:.9em"> · ${c.blurb}</span></a>
      <span class="status">${readMark}</span>`;
    list.appendChild(li);
  });
  list.querySelectorAll('[data-goto]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); goto(a.dataset.goto); });
  });
}
// ============================================================================
// Wire buttons
// ============================================================================
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'light' ? '' : 'light';
  if (next) document.documentElement.setAttribute('data-theme', next);
  else document.documentElement.removeAttribute('data-theme');
  await put('theme', next);
});
  if (confirm('Reset chapter progress?')){
    await clearAll();
    updateProgress();
    renderTOC();
  }
});
// prev/next inside chapters
  btn.addEventListener('click', () => {
    const dir = btn.dataset.nav;
    if (dir === 'home'){ goto('page-cover'); return; }
    const cur = parseInt(btn.closest('.chapter').dataset.ch, 10);
    if (dir === 'next' && cur < 9) goto('ch-' + (cur+1));
    if (dir === 'prev' && cur > 1) goto('ch-' + (cur-1));
    if (dir === 'prev' && cur === 1) goto('page-toc');
  });
});
// Keyboard
document.addEventListener('keydown', e => {
  if (e.target.matches('input,textarea')) return;
  if (currentPage.startsWith('ch-')){
    const n = parseInt(currentPage.slice(3),10);
    if (e.key === 'ArrowRight' && n < 9) goto('ch-'+(n+1));
    if (e.key === 'ArrowLeft'){
      if (n > 1) goto('ch-'+(n-1));
      else goto('page-toc');
    }
  }
  if (e.key === 'Escape') goto('page-toc');
});
// PWA
if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
// Boot
(async () => {
  await openDB();
  const theme = await get('theme');
  if (theme === 'light'){
    document.documentElement.setAttribute('data-theme','light');
  }
  await updateProgress();
  await renderTOC();
  const last = await get('last');
})();

// Named exports for the primary API surface
export { openDB };
export { put };
export { get };
export { getAll };
export { clearAll };
export { goto };
export { updateProgress };
export { renderTOC };

export { CHAPTERS };
export { DB_NAME };
export { STORE };
