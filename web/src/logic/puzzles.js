import { F } from './flags.js';

/** Basement padlock: four symbol dials (circle, triangle, square, cross). */
export class CombinationLock {
  constructor(code) { this.code = code; this.digits = new Array(code.length).fill(0); }
  step(dial, delta) { this.digits[dial] = (((this.digits[dial] + delta) % 10) + 10) % 10; }
  get current() { return this.digits.join(''); }
  get isOpen() { return this.current === this.code; }
}

/** Television: tuning the right channels in order plays the hidden broadcast. */
export class ChannelSequence {
  constructor(...expected) { this.expected = expected; this.history = []; }
  push(ch) {
    this.history.push(ch);
    if (this.history.length > this.expected.length) this.history.shift();
    return this.history.length === this.expected.length && this.history.every((v, i) => v === this.expected[i]);
  }
}

/** Family photograph: four torn quarters; fragment i belongs in slot i. */
export class FragmentPuzzle {
  constructor() { this.slots = [-1, -1, -1, -1]; }
  place(fragment, slot) { this.slots = this.slots.map(s => (s === fragment ? -1 : s)); this.slots[slot] = fragment; }
  clear(slot) { this.slots[slot] = -1; }
  isPlaced(f) { return this.slots.includes(f); }
  get isSolved() { return this.slots.every((s, i) => s === i); }
}

export const PUZZLES = [
  { id: 'fuse', name: 'Restore the hallway fuse', flag: F.FuseInstalled },
  { id: 'camera_key', name: 'Photograph what cannot be seen', flag: F.GotBrassKey },
  { id: 'mirror', name: 'Writing in the dark mirror', flag: F.MirrorMsg },
  { id: 'tv', name: 'Television channel sequence', flag: F.TvSolved },
  { id: 'footsteps', name: 'Follow the footsteps without looking', flag: F.ClosetFound },
  { id: 'music_box', name: 'Find the music box by sound alone', flag: F.MusicBoxFound },
  { id: 'padlock', name: 'Symbol padlock (clues from four rooms)', flag: F.BasementUnlocked },
  { id: 'breakers', name: 'Restore basement power while watched', flag: F.PowerOn },
  { id: 'photo', name: 'Reconstruct the family photograph', flag: F.PhotoRestored },
  { id: 'memories', name: 'Final memory and observation puzzle', flag: F.MemoriesDone },
];
