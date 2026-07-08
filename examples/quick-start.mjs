// examples/quick-start.mjs · node examples/quick-start.mjs
// Uses the in-memory fallback so it runs outside a browser.

import { createReader, tableOfContents, getChapter, diagram, DIAGRAM_NAMES } from '../src/index.js';

console.log('◊ init-book-sdk · quick-start\n');

console.log('Table of contents:');
for (const c of tableOfContents()) {
  console.log(`  ${c.index}. ${c.title} · ${c.blurb}`);
}
console.log();

const ch = getChapter(3);
console.log(`Chapter ${ch.index}: ${ch.title}`);
console.log(`Blurb: ${ch.blurb}`);
console.log(`Content length: ${ch.content.length} chars`);
console.log(`Next: ${ch.next} · Prev: ${ch.prev}\n`);

console.log('Available diagrams:', DIAGRAM_NAMES.join(', '));
console.log('kappa-gradient SVG length:', diagram('kappa-gradient').length, 'chars\n');

const reader = await createReader({ useIDB: false });
await reader.open(1);
await reader.open(2);
await reader.open(3);
console.log('After opening chapters 1-3:', await reader.progress());
