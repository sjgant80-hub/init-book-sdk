# @ai-native-solutions/init-book-sdk

Sovereign SDK for **INIT — the framework book**. Nine chapters. Runs on your device. Nothing leaves it.

The SDK exposes the same 9-chapter reader logic, chapter progress tracker (IndexedDB), theme toggle, print export, and inline SVG diagram generators that power the INIT browser book. Use it to embed the framework book in any web app, Electron shell, or Node service.

> **Private layer stays private.** The doctrine is Simon's estate; the engineering layer (this SDK) ships MIT.

## Install

```bash
npm install @ai-native-solutions/init-book-sdk
```

## Quick start

```js
import { createReader } from '@ai-native-solutions/init-book-sdk';

const reader = await createReader({ useIDB: true }); // browser
const ch = await reader.open(1);
console.log(ch.title);                // "The Beginning"
console.log(ch.content);              // full HTML body
console.log(ch.callout);              // "go check yourself" prompt

console.log(await reader.progress()); // { read: 1, total: 9, percent: 11.1, readChapters: [1] }

const svg = reader.diagram('bloom-radial', {
  bloom: [4, 7, 7, 6, 5, 4, 3],
  label: 'me'
});
document.getElementById('mount').innerHTML = svg;
```

## Full API surface

### Chapters (`/chapters`)

- `CHAPTERS` — array of 9 chapter meta records `{ n, id, title, blurb }`
- `CHAPTER_BODIES` — full HTML body per chapter, keyed by number
- `CHAPTER_CALLOUTS` — "go check yourself" callout per chapter
- `getChapter(index)` → `{ index, id, title, blurb, content, callout, next, prev }`
- `tableOfContents()` → 9 chapter meta records

### Progress (`/progress`) — IndexedDB

- `openDB()` — open/create the `initbook` DB (v1, store: `progress`)
- `put(db, key, val)` / `get(db, key)` / `getAll(db)` / `clearAll(db)`
- `markRead(db, chapter, position?)` → `{ saved, chapter, position }`
- `readProgress(db)` → `{ read, total: 9, percent, readChapters }`
- `setLastPage(db, id)` / `getLastPage(db)`
- `setTheme(db, theme)` / `getTheme(db)`
- `createMemoryStore()` — Node/SSR fallback

### Diagrams (`/diagrams`) — inline SVG generators

- `bloomSpine()` — Chapter 2 · 7 concentric prime rings
- `torus()` — Chapter 3 · 9-axis femto (double cube + θ)
- `bloomRadial(bloom, label)` — Chapter 4 · your bloom vector
- `kappaGradient()` — Chapter 5 · 5 witness stages
- `twinPrimes()` — Chapter 6 · {3,5} · 7 orphan · {11,13} · 17
- `meshGraph()` — Chapter 7 · dyad + peers + WebRTC
- `diagram(name, opts?)` — dispatch by kebab-case name
- `DIAGRAM_NAMES` — the six names

### Reader helper

- `createReader({ useIDB })` — stateful wrapper
  - `.toc()` / `.chapter(i)` / `.diagram(name, opts)` / `.diagramNames()`
  - `.open(i)` — load chapter + mark read + remember last
  - `.saveProgress(chapter, position?)`
  - `.progress()`
  - `.reset()`
  - `.setLast/.getLast/.setTheme/.getTheme`

## The nine chapters

1. **The Beginning** — what this is
2. **The Seven Primes** — Konomi spine
3. **The Nine Axes** — adding θ and ◊
4. **Your Profile** — finding your bloom
5. **The Silent Witness** — five stages
6. **Origami Mathematics** — 紙·折·言
7. **The Mesh** — you are not alone
8. **The Six Operations** — the assembly language
9. **Next Steps** — the estate

## Companion packages

- **init-book-mcp** — MCP server exposing `initbook_get_chapter`, `initbook_progress`, `initbook_toc`, `initbook_diagram`
- **init-book-api** — HTTP proxy: `/chapter/:index`, `/progress`, `/toc`, `/diagram/:name`

## Playground

Live demo: <https://sjgant80-hub.github.io/init-book-sdk/>

Loads a sample chapter, renders all six diagrams, tracks progress in IDB.

## License

MIT · © 2026 AI-Native Solutions
