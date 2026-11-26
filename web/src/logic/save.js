// Versioned save data with validation, a backup slot and corruption fallback. storage = { get(k), set(k,v), remove(k) }.
import { PERCEPTION_MAX } from './perception.js';

export const SAVE_VERSION = 1;
export const KEY_MAIN = 'unseen_save_v1';
export const KEY_BACKUP = 'unseen_save_v1_bak';
export const SCENES = ['apartment', 'basement'];
const MAX_PHOTOS = 24; // photos are stored inline as small JPEGs; keeps the save well under browser storage limits

export function newSave() {
  return {
    version: SAVE_VERSION, scene: 'apartment', hasPosition: false, position: { x: 0, y: 0, z: 0 }, yaw: 0,
    perception: PERCEPTION_MAX, chapter: 1, objective: '', flags: [], journal: [],
    items: {}, documents: [], photos: [], savedAt: '',
  };
}

/** Repairs what it can; returns null when the data is unusable (wrong type or unknown version). */
export function validateSave(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) return null;
  if (!(d.version >= 1 && d.version <= SAVE_VERSION)) return null;
  const s = Object.assign(newSave(), d);
  if (!SCENES.includes(s.scene)) s.scene = 'apartment';
  s.flags = Array.isArray(s.flags) ? [...new Set(s.flags.filter(f => typeof f === 'string' && f))] : [];
  s.journal = Array.isArray(s.journal) ? s.journal.filter(j => typeof j === 'string').slice(-200) : [];
  s.documents = Array.isArray(s.documents) ? [...new Set(s.documents.filter(x => typeof x === 'string'))] : [];
  s.photos = Array.isArray(s.photos) ? s.photos.filter(p => p && typeof p.src === 'string').slice(-MAX_PHOTOS) : [];
  const items = {};
  if (s.items && typeof s.items === 'object') for (const [k, v] of Object.entries(s.items)) if (Number.isFinite(v) && v > 0) items[k] = Math.floor(v);
  s.items = items;
  s.perception = Number.isFinite(s.perception) ? Math.max(0, Math.min(PERCEPTION_MAX, s.perception)) : PERCEPTION_MAX;
  s.chapter = Number.isInteger(s.chapter) && s.chapter >= 1 && s.chapter <= 5 ? s.chapter : 1;
  const p = s.position;
  if (!p || ![p.x, p.y, p.z].every(Number.isFinite)) { s.hasPosition = false; s.position = { x: 0, y: 0, z: 0 }; }
  if (!Number.isFinite(s.yaw)) s.yaw = 0;
  return s;
}

export function parseSave(json) {
  if (typeof json !== 'string' || !json.trim()) return null;
  try { return validateSave(JSON.parse(json)); } catch { return null; }
}

export const trimPhotos = d => { if (d.photos.length > MAX_PHOTOS) d.photos.splice(0, d.photos.length - MAX_PHOTOS); };

export class SaveStore {
  constructor(storage) { this.storage = storage; this.wasCorrupted = false; }
  get hasSave() { return !!(this.storage.get(KEY_MAIN) || this.storage.get(KEY_BACKUP)); }
  write(d) {
    d.version = SAVE_VERSION;
    d.savedAt = new Date().toISOString();
    trimPhotos(d);
    try {
      const prev = this.storage.get(KEY_MAIN);
      if (prev && parseSave(prev)) this.storage.set(KEY_BACKUP, prev); // only back up a good save
      this.storage.set(KEY_MAIN, JSON.stringify(d));
      return true;
    } catch (e) {
      // Out of space: drop photos (oldest first) rather than lose progress.
      try { d.photos = d.photos.slice(-4); this.storage.set(KEY_MAIN, JSON.stringify(d)); return true; } catch { return false; }
    }
  }
  load() {
    this.wasCorrupted = false;
    for (const k of [KEY_MAIN, KEY_BACKUP]) {
      const raw = this.storage.get(k);
      if (!raw) continue;
      const d = parseSave(raw);
      if (d) return d;
      this.wasCorrupted = true;
    }
    return null;
  }
  clear() { this.storage.remove(KEY_MAIN); this.storage.remove(KEY_BACKUP); }
}

/** localStorage wrapper that never throws (private windows, blocked storage). Falls back to memory. */
export function browserStorage() {
  const mem = new Map();
  const ls = (() => { try { const s = globalThis.localStorage; s.setItem('__t', '1'); s.removeItem('__t'); return s; } catch { return null; } })();
  return {
    persistent: !!ls,
    get: k => { try { return ls ? ls.getItem(k) : mem.get(k) ?? null; } catch { return mem.get(k) ?? null; } },
    set: (k, v) => { if (ls) ls.setItem(k, v); else mem.set(k, v); },
    remove: k => { try { ls ? ls.removeItem(k) : mem.delete(k); } catch { mem.delete(k); } },
  };
}
