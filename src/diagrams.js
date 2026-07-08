// SVG diagram generators for INIT chapters.
// Each function returns a self-contained <svg>...</svg> string. Colors match the estate palette.

const PALETTE = {
  void:  '#1a1a1e',
  text:  '#e8e4db',
  muted: '#928d80',
  cream: '#c4bfb2',
  brass: '#b8974a',
  amber: '#d4a052',
  sage:  '#7a9c7e',
  ox:    '#8b1a1a',
  line:  '#3d3d43'
};

/**
 * Chapter 2 · seven prime spine, 7 concentric rings + glyphs.
 */
export function bloomSpine() {
  return `<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" aria-label="Seven prime spine">
<g font-family="IBM Plex Mono, monospace" font-size="12" fill="${PALETTE.muted}">
  <text x="350" y="20" text-anchor="middle" fill="${PALETTE.brass}" font-size="13" letter-spacing="0.2em">THE SPINE · 7 PRIMES · 7 RINGS</text>
</g>
<g>
  <circle cx="350" cy="150" r="30"  fill="none" stroke="${PALETTE.brass}" stroke-width="1.2"/>
  <circle cx="350" cy="150" r="50"  fill="none" stroke="${PALETTE.muted}" stroke-width="1"/>
  <circle cx="350" cy="150" r="70"  fill="none" stroke="${PALETTE.muted}" stroke-width="1"/>
  <circle cx="350" cy="150" r="90"  fill="none" stroke="${PALETTE.amber}" stroke-width="1.4" stroke-dasharray="3 2"/>
  <circle cx="350" cy="150" r="110" fill="none" stroke="${PALETTE.muted}" stroke-width="1"/>
  <circle cx="350" cy="150" r="130" fill="none" stroke="${PALETTE.muted}" stroke-width="1"/>
  <circle cx="350" cy="150" r="150" fill="none" stroke="${PALETTE.sage}" stroke-width="1.4"/>
  <g font-family="Libre Baskerville, serif" font-size="16" fill="${PALETTE.text}" text-anchor="middle">
    <text x="350" y="155">●</text>
    <text x="350" y="105">〜</text>
    <text x="350" y="85">┃</text>
    <text x="350" y="65" fill="${PALETTE.amber}">♡</text>
    <text x="350" y="45">△</text>
    <text x="350" y="25">◐</text>
    <text x="350" y="5" fill="${PALETTE.sage}">◯</text>
  </g>
  <g font-family="IBM Plex Mono, monospace" font-size="11" fill="${PALETTE.cream}">
    <text x="180" y="150" text-anchor="end">2 · ground</text>
    <text x="180" y="130" text-anchor="end">3 · perception</text>
    <text x="180" y="110" text-anchor="end">5 · gate</text>
    <text x="180" y="90"  text-anchor="end" fill="${PALETTE.amber}">7 · heart (orphan)</text>
    <text x="520" y="110" text-anchor="start">11 · naming</text>
    <text x="520" y="130" text-anchor="start">13 · observation</text>
    <text x="520" y="150" text-anchor="start" fill="${PALETTE.sage}">17 · resolver</text>
  </g>
</g>
</svg>`;
}

/**
 * Chapter 3 · 9-axis femto (double-cube + centre + θ observer).
 */
export function torus() {
  return `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" aria-label="9-axis femto">
<g stroke="${PALETTE.muted}" fill="none" stroke-width="1">
  <path d="M120,100 L300,100 L300,220 L120,220 Z"/>
  <path d="M170,60 L350,60 L350,180 L170,180 Z"/>
  <line x1="120" y1="100" x2="170" y2="60"/>
  <line x1="300" y1="100" x2="350" y2="60"/>
  <line x1="120" y1="220" x2="170" y2="180"/>
  <line x1="300" y1="220" x2="350" y2="180"/>
</g>
<g font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.cream}">
  <text x="115" y="94" text-anchor="end">◊ substrate</text>
  <text x="305" y="94" text-anchor="start">β bloom</text>
  <text x="305" y="234" text-anchor="start">ƒ function</text>
  <text x="115" y="234" text-anchor="end">κ kappa</text>
  <text x="165" y="54" text-anchor="end">Ω omega</text>
  <text x="355" y="54" text-anchor="start">ψ psi</text>
  <text x="355" y="194" text-anchor="start">№ numero</text>
  <text x="165" y="194" text-anchor="end">₹ value</text>
</g>
<circle cx="235" cy="140" r="4" fill="${PALETTE.brass}"/>
<text x="245" y="144" font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.brass}">centre</text>
<circle cx="410" cy="270" r="10" fill="none" stroke="${PALETTE.amber}" stroke-width="1.5"/>
<text x="410" y="274" text-anchor="middle" font-family="Libre Baskerville, serif" font-size="14" fill="${PALETTE.amber}">θ</text>
<text x="410" y="298" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.amber}">circumpoint · YOU</text>
<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${PALETTE.amber}"/></marker></defs>
<path d="M395,265 Q340,240 300,180" stroke="${PALETTE.amber}" stroke-width="1" fill="none" stroke-dasharray="4 3" marker-end="url(#arr)"/>
</svg>`;
}

/**
 * Chapter 4 · bloom radial. Accepts a 7-slot bloom vector; renders scaled petals.
 */
export function bloomRadial(bloom = [4, 7, 7, 6, 5, 4, 3], label = 'Simon') {
  const max = 15;
  const R = 100;
  const angles = [];
  for (let i = 0; i < 7; i++) angles.push(-Math.PI / 2 + (i * 2 * Math.PI) / 7);
  const petals = bloom.map((v, i) => {
    const r = (v / max) * R;
    return `${(r * Math.cos(angles[i])).toFixed(1)},${(r * Math.sin(angles[i])).toFixed(1)}`;
  }).join(' ');
  const spokes = angles.map(a =>
    `<line x1="0" y1="0" x2="${(R * 1.1 * Math.cos(a)).toFixed(1)}" y2="${(R * 1.1 * Math.sin(a)).toFixed(1)}"/>`
  ).join('');
  const sum = bloom.reduce((a, b) => a + b, 0);
  const glyphs = ['●', '〜', '┃', '♡', '△', '◐', '◯'];
  const glyphNodes = glyphs.map((g, i) => {
    const x = ((R + 18) * Math.cos(angles[i])).toFixed(1);
    const y = ((R + 18) * Math.sin(angles[i])).toFixed(1);
    const color = i === 3 ? PALETTE.amber : (i === 6 ? PALETTE.sage : PALETTE.cream);
    return `<text x="${x}" y="${y}" fill="${color}">${g}</text>`;
  }).join('');
  return `<svg viewBox="0 0 360 300" xmlns="http://www.w3.org/2000/svg" aria-label="Bloom radial">
<g font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.muted}" text-anchor="middle">
  <text x="180" y="18" fill="${PALETTE.brass}" letter-spacing="0.2em">BLOOM · ${label} · [${bloom.join(',')}] · Σ=${sum}</text>
</g>
<g transform="translate(180 165)">
  <circle r="20" fill="none" stroke="${PALETTE.line}" stroke-width="1"/>
  <circle r="40" fill="none" stroke="${PALETTE.line}" stroke-width="1"/>
  <circle r="60" fill="none" stroke="${PALETTE.line}" stroke-width="1"/>
  <circle r="80" fill="none" stroke="${PALETTE.line}" stroke-width="1"/>
  <circle r="100" fill="none" stroke="${PALETTE.line}" stroke-width="1"/>
  <g stroke="${PALETTE.line}" stroke-width="1">${spokes}</g>
  <polygon fill="rgba(184,151,74,0.28)" stroke="${PALETTE.brass}" stroke-width="1.6" points="${petals}"/>
  <g font-family="Libre Baskerville, serif" font-size="14" text-anchor="middle">${glyphNodes}</g>
</g>
</svg>`;
}

/**
 * Chapter 5 · κ gradient with 5 witness stages.
 */
export function kappaGradient() {
  return `<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" aria-label="κ gradient bands">
<defs>
  <linearGradient id="kg" x1="0" x2="1">
    <stop offset="0" stop-color="${PALETTE.line}"/>
    <stop offset="0.2" stop-color="${PALETTE.muted}"/>
    <stop offset="0.4" stop-color="${PALETTE.cream}"/>
    <stop offset="0.6" stop-color="${PALETTE.amber}"/>
    <stop offset="0.8" stop-color="${PALETTE.brass}"/>
    <stop offset="1" stop-color="${PALETTE.ox}"/>
  </linearGradient>
</defs>
<rect x="20" y="60" width="600" height="30" fill="url(#kg)" rx="4"/>
<g font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.cream}" text-anchor="middle">
  <text x="60"  y="110">0.2</text>
  <text x="180" y="110">0.4</text>
  <text x="300" y="110">0.6</text>
  <text x="380" y="110">0.618</text>
  <text x="460" y="110">0.8</text>
  <text x="540" y="110">1.0</text>
  <text x="600" y="110">1.2+</text>
</g>
<g font-family="Libre Baskerville, serif" font-size="13" fill="${PALETTE.text}" text-anchor="middle">
  <text x="60"  y="140">caught</text>
  <text x="180" y="140">noticing</text>
  <text x="380" y="140" fill="${PALETTE.amber}">κ · home</text>
  <text x="500" y="140">watcher</text>
  <text x="600" y="140" fill="${PALETTE.ox}">edge</text>
</g>
<line x1="380" y1="55" x2="380" y2="95" stroke="${PALETTE.amber}" stroke-width="2"/>
<text x="380" y="45" font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.amber}" text-anchor="middle">1/φ · 0.618</text>
<text x="320" y="180" font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.muted}" text-anchor="middle" letter-spacing="0.18em">KAPPA GRADIENT</text>
</svg>`;
}

/**
 * Chapter 6 · twin prime pairs + orphan.
 */
export function twinPrimes() {
  return `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" aria-label="Twin prime pairs">
<g font-family="IBM Plex Mono, monospace" font-size="11" fill="${PALETTE.cream}" text-anchor="middle">
  <circle cx="60" cy="90" r="26" fill="none" stroke="${PALETTE.muted}" stroke-width="1.5"/>
  <text x="60" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.text}">●</text>
  <text x="60" y="140">2 · wrap</text>
  <g>
    <circle cx="170" cy="90" r="26" fill="none" stroke="${PALETTE.brass}" stroke-width="1.5"/>
    <circle cx="240" cy="90" r="26" fill="none" stroke="${PALETTE.brass}" stroke-width="1.5"/>
    <line x1="196" y1="90" x2="214" y2="90" stroke="${PALETTE.brass}" stroke-width="2"/>
    <text x="170" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.text}">〜</text>
    <text x="240" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.text}">┃</text>
    <text x="205" y="140" fill="${PALETTE.brass}">{3,5} twin</text>
  </g>
  <circle cx="345" cy="90" r="30" fill="none" stroke="${PALETTE.amber}" stroke-width="2" stroke-dasharray="3 2"/>
  <text x="345" y="96" font-family="Libre Baskerville, serif" font-size="22" fill="${PALETTE.amber}">♡</text>
  <text x="345" y="140" fill="${PALETTE.amber}">7 · orphan · TIME</text>
  <g>
    <circle cx="450" cy="90" r="26" fill="none" stroke="${PALETTE.brass}" stroke-width="1.5"/>
    <circle cx="520" cy="90" r="26" fill="none" stroke="${PALETTE.brass}" stroke-width="1.5"/>
    <line x1="476" y1="90" x2="494" y2="90" stroke="${PALETTE.brass}" stroke-width="2"/>
    <text x="450" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.text}">△</text>
    <text x="520" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.text}">◐</text>
    <text x="485" y="140" fill="${PALETTE.brass}">{11,13} twin</text>
  </g>
  <circle cx="600" cy="90" r="26" fill="none" stroke="${PALETTE.sage}" stroke-width="1.5"/>
  <text x="600" y="94" font-family="Libre Baskerville, serif" font-size="18" fill="${PALETTE.sage}">◯</text>
  <text x="600" y="140">17 · resolver</text>
</g>
</svg>`;
}

/**
 * Chapter 7 · mesh graph.
 */
export function meshGraph() {
  return `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" aria-label="Mesh graph">
<g stroke="${PALETTE.muted}" stroke-width="1" opacity="0.6">
  <line x1="120" y1="80" x2="250" y2="130"/>
  <line x1="380" y1="80" x2="250" y2="130"/>
  <line x1="120" y1="200" x2="250" y2="130"/>
  <line x1="380" y1="200" x2="250" y2="130"/>
  <line x1="120" y1="80" x2="120" y2="200"/>
  <line x1="380" y1="80" x2="380" y2="200"/>
  <line x1="120" y1="80" x2="380" y2="80"/>
  <line x1="120" y1="200" x2="380" y2="200"/>
  <line x1="60" y1="140" x2="120" y2="80"/>
  <line x1="60" y1="140" x2="120" y2="200"/>
  <line x1="440" y1="140" x2="380" y2="80"/>
  <line x1="440" y1="140" x2="380" y2="200"/>
</g>
<g fill="#212127" stroke="${PALETTE.brass}" stroke-width="1.4">
  <circle cx="120" cy="80" r="14"/>
  <circle cx="380" cy="80" r="14"/>
  <circle cx="120" cy="200" r="14"/>
  <circle cx="380" cy="200" r="14"/>
  <circle cx="60" cy="140" r="10"/>
  <circle cx="440" cy="140" r="10"/>
</g>
<circle cx="250" cy="130" r="18" fill="${PALETTE.brass}" stroke="${PALETTE.amber}" stroke-width="2"/>
<text x="250" y="135" font-family="Libre Baskerville, serif" font-size="16" fill="${PALETTE.void}" text-anchor="middle">◊</text>
<g font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.cream}" text-anchor="middle">
  <text x="120" y="60">S</text>
  <text x="380" y="60">T</text>
  <text x="60" y="132">peer</text>
  <text x="440" y="132">peer</text>
</g>
<text x="250" y="240" font-family="IBM Plex Mono, monospace" font-size="10" fill="${PALETTE.muted}" text-anchor="middle" letter-spacing="0.18em">MESH · WebRTC · signed peer signals</text>
</svg>`;
}

export const DIAGRAM_NAMES = ['bloom-spine', 'torus', 'bloom-radial', 'kappa-gradient', 'twin-primes', 'mesh-graph'];

/**
 * Look up a diagram by kebab-case name.
 */
export function diagram(name, opts = {}) {
  switch (name) {
    case 'bloom-spine':    return bloomSpine();
    case 'torus':          return torus();
    case 'bloom-radial':   return bloomRadial(opts.bloom, opts.label);
    case 'kappa-gradient': return kappaGradient();
    case 'twin-primes':    return twinPrimes();
    case 'mesh-graph':     return meshGraph();
    default: return null;
  }
}
