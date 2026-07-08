// @ai-native-solutions/init-book-sdk · main entrypoint
// Re-exports every subsystem plus a stateful reader helper.

export * from './chapters.js';
export * from './progress.js';
export * from './diagrams.js';

import { CHAPTERS, getChapter, tableOfContents } from './chapters.js';
import {
  openDB, put, get, getAll, clearAll,
  markRead, readProgress,
  setLastPage, getLastPage,
  setTheme, getTheme,
  createMemoryStore
} from './progress.js';
import { diagram, DIAGRAM_NAMES } from './diagrams.js';

/**
 * createReader({ store? }) → a stateful reader that binds chapters + progress.
 * If no store is provided, an in-memory store is used (Node/SSR friendly).
 */
export async function createReader({ useIDB = false } = {}) {
  let db = null;
  let mem = null;
  if (useIDB && typeof indexedDB !== 'undefined') {
    db = await openDB();
  } else {
    mem = createMemoryStore();
  }

  async function _put(k, v)   { return db ? put(db, k, v)     : mem.put(null, k, v); }
  async function _get(k)      { return db ? get(db, k)        : mem.get(null, k); }
  async function _getAll()    { return db ? getAll(db)        : mem.getAll(); }
  async function _clear()     { return db ? clearAll(db)      : mem.clearAll(); }

  return {
    toc: tableOfContents,
    chapter: (i) => getChapter(i),
    diagram: (name, opts) => diagram(name, opts),
    diagramNames: () => DIAGRAM_NAMES.slice(),

    async open(index) {
      const c = getChapter(index);
      if (!c) return null;
      await _put(`ch-${index}-read`, true);
      await _put('last', c.id);
      return c;
    },

    async saveProgress(chapter, position) {
      await _put(`ch-${chapter}-read`, true);
      if (typeof position === 'number') await _put(`ch-${chapter}-pos`, position);
      return { saved: true, chapter, position: position ?? null };
    },

    async progress() {
      const all = await _getAll();
      let read = 0;
      const readChapters = [];
      for (let i = 1; i <= 9; i++) {
        if (all[`ch-${i}-read`]) { read++; readChapters.push(i); }
      }
      return { read, total: 9, percent: (read / 9) * 100, readChapters };
    },

    async reset() { await _clear(); return { cleared: true }; },

    async setLast(pageId) { return _put('last', pageId); },
    async getLast()       { return _get('last'); },
    async setTheme(t)     { return _put('theme', t); },
    async getTheme()      { return _get('theme'); }
  };
}

export const VERSION = '1.0.0';
export const CHAPTER_COUNT = CHAPTERS.length;
