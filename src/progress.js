// Progress tracker · IndexedDB persistence for chapter reading state
// Mirrors the storage layer inside init-book/index.html but exposed as a reusable module.

export const DB_NAME = 'initbook';
export const DB_VERSION = 1;
export const STORE = 'progress';

/**
 * Open (or create) the initbook IndexedDB. Browser only.
 * @returns {Promise<IDBDatabase>}
 */
export function openDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB not available (Node environment). Use the SDK in a browser or pass an in-memory store.'));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE);
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e);
  });
}

function txStore(db, mode) {
  return db.transaction(STORE, mode).objectStore(STORE);
}

export function put(db, key, val) {
  return new Promise(res => {
    const s = txStore(db, 'readwrite');
    s.put(val, key);
    s.transaction.oncomplete = () => res();
  });
}

export function get(db, key) {
  return new Promise(res => {
    const req = txStore(db, 'readonly').get(key);
    req.onsuccess = () => res(req.result);
    req.onerror = () => res(null);
  });
}

export function getAll(db) {
  return new Promise(res => {
    const s = txStore(db, 'readonly');
    const req = s.getAllKeys();
    req.onsuccess = async () => {
      const keys = req.result;
      const out = {};
      await Promise.all(keys.map(k => get(db, k).then(v => (out[k] = v))));
      res(out);
    };
  });
}

export function clearAll(db) {
  return new Promise(res => {
    const s = txStore(db, 'readwrite');
    s.clear();
    s.transaction.oncomplete = () => res();
  });
}

/**
 * Mark a chapter as read.
 * @param {IDBDatabase} db
 * @param {number} chapter 1..9
 * @param {number} [position] optional scroll/word position
 */
export async function markRead(db, chapter, position) {
  await put(db, `ch-${chapter}-read`, true);
  if (typeof position === 'number') await put(db, `ch-${chapter}-pos`, position);
  return { saved: true, chapter, position: position ?? null };
}

/**
 * Compute % read across the 9-chapter book.
 * @param {IDBDatabase} db
 * @returns {Promise<{read:number,total:9,percent:number,readChapters:number[]}>}
 */
export async function readProgress(db) {
  const all = await getAll(db);
  let read = 0;
  const readChapters = [];
  for (let i = 1; i <= 9; i++) {
    if (all[`ch-${i}-read`]) {
      read++;
      readChapters.push(i);
    }
  }
  return { read, total: 9, percent: (read / 9) * 100, readChapters };
}

/**
 * Store the last-visited page id (e.g. "ch-3" or "page-toc").
 */
export function setLastPage(db, pageId) { return put(db, 'last', pageId); }
export function getLastPage(db) { return get(db, 'last'); }

export function setTheme(db, theme) { return put(db, 'theme', theme); }
export function getTheme(db) { return get(db, 'theme'); }

/**
 * In-memory fallback store, for Node / SSR usage.
 */
export function createMemoryStore() {
  const map = new Map();
  return {
    openDB: () => Promise.resolve(null),
    put: (_db, k, v) => { map.set(k, v); return Promise.resolve(); },
    get: (_db, k) => Promise.resolve(map.get(k) ?? null),
    getAll: () => Promise.resolve(Object.fromEntries(map)),
    clearAll: () => { map.clear(); return Promise.resolve(); }
  };
}
