// Type declarations for @ai-native-solutions/init-book-sdk

export interface ChapterMeta { n: number; id: string; title: string; blurb: string; }
export interface Chapter {
  index: number;
  id: string;
  title: string;
  blurb: string;
  content: string;
  callout: string;
  next: number | null;
  prev: number | null;
}

export const CHAPTERS: ChapterMeta[];
export const CHAPTER_BODIES: Record<number, string>;
export const CHAPTER_CALLOUTS: Record<number, string>;
export function getChapter(index: number): Chapter | null;
export function tableOfContents(): Array<{ index: number; id: string; title: string; blurb: string }>;

export const DB_NAME: string;
export const DB_VERSION: number;
export const STORE: string;

export function openDB(): Promise<IDBDatabase>;
export function put(db: IDBDatabase, key: string, val: unknown): Promise<void>;
export function get<T = unknown>(db: IDBDatabase, key: string): Promise<T | null>;
export function getAll(db: IDBDatabase): Promise<Record<string, unknown>>;
export function clearAll(db: IDBDatabase): Promise<void>;
export function markRead(db: IDBDatabase, chapter: number, position?: number): Promise<{ saved: boolean; chapter: number; position: number | null }>;
export function readProgress(db: IDBDatabase): Promise<{ read: number; total: 9; percent: number; readChapters: number[] }>;
export function setLastPage(db: IDBDatabase, pageId: string): Promise<void>;
export function getLastPage(db: IDBDatabase): Promise<string | null>;
export function setTheme(db: IDBDatabase, theme: string): Promise<void>;
export function getTheme(db: IDBDatabase): Promise<string | null>;
export function createMemoryStore(): {
  openDB(): Promise<null>;
  put(db: null, key: string, val: unknown): Promise<void>;
  get<T = unknown>(db: null, key: string): Promise<T | null>;
  getAll(db: null): Promise<Record<string, unknown>>;
  clearAll(db: null): Promise<void>;
};

export type DiagramName = 'bloom-spine' | 'torus' | 'bloom-radial' | 'kappa-gradient' | 'twin-primes' | 'mesh-graph';
export const DIAGRAM_NAMES: DiagramName[];
export function bloomSpine(): string;
export function torus(): string;
export function bloomRadial(bloom?: number[], label?: string): string;
export function kappaGradient(): string;
export function twinPrimes(): string;
export function meshGraph(): string;
export function diagram(name: DiagramName, opts?: { bloom?: number[]; label?: string }): string | null;

export interface Reader {
  toc(): Array<{ index: number; id: string; title: string; blurb: string }>;
  chapter(index: number): Chapter | null;
  diagram(name: DiagramName, opts?: { bloom?: number[]; label?: string }): string | null;
  diagramNames(): DiagramName[];
  open(index: number): Promise<Chapter | null>;
  saveProgress(chapter: number, position?: number): Promise<{ saved: boolean; chapter: number; position: number | null }>;
  progress(): Promise<{ read: number; total: 9; percent: number; readChapters: number[] }>;
  reset(): Promise<{ cleared: true }>;
  setLast(pageId: string): Promise<void>;
  getLast(): Promise<string | null>;
  setTheme(t: string): Promise<void>;
  getTheme(): Promise<string | null>;
}
export function createReader(opts?: { useIDB?: boolean }): Promise<Reader>;

export const VERSION: string;
export const CHAPTER_COUNT: number;
