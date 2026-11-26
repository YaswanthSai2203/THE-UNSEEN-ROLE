import { G } from '../game.js';

// Keyboard state, mouse look (pointer lock, with click-and-drag fallback where pointer lock is unavailable).
export class Input {
  constructor(canvas) {
    this.canvas = canvas; this.down = new Set(); this.pressed = new Set(); this.dx = 0; this.dy = 0;
    this.dragging = false; this.lockFailed = false; this.listeners = [];
    addEventListener('keydown', e => {
      if (this.captureNext) { e.preventDefault(); const cb = this.captureNext; this.captureNext = null; cb(e.code); return; }
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown'].includes(e.code) || (G.state === 'playing' && e.code !== 'F11' && e.code !== 'F12')) e.preventDefault();
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
      for (const l of this.listeners) l(e);
    });
    addEventListener('keyup', e => this.down.delete(e.code));
    addEventListener('blur', () => this.down.clear());
    addEventListener('mousemove', e => {
      if (this.locked || this.dragging) { this.dx += e.movementX; this.dy += e.movementY; }
    });
    canvas.addEventListener('mousedown', e => {
      if (G.state !== 'playing' || G.ui.modalOpen) return;
      if (!this.locked) { this.lock(); this.dragging = this.lockFailed; }
      e.preventDefault();
    });
    addEventListener('mouseup', () => (this.dragging = false));
    document.addEventListener('pointerlockchange', () => {
      // Esc releases pointer lock in every browser: treat it as "pause".
      if (!this.locked && G.state === 'playing' && !G.ui.modalOpen && !this.releasing) { G.setPaused(true); this.pausedByUnlockAt = performance.now(); }
      this.releasing = false;
    });
    document.addEventListener('pointerlockerror', () => (this.lockFailed = true));
  }
  get locked() { return document.pointerLockElement === this.canvas; }
  lock() {
    if (this.locked || this.lockFailed) return;
    try { const p = this.canvas.requestPointerLock?.(); p?.catch?.(() => (this.lockFailed = true)); } catch { this.lockFailed = true; }
  }
  unlock() { if (this.locked) { this.releasing = true; document.exitPointerLock?.(); } }
  held(action) { return this.down.has(G.settings.keys[action]); }
  hit(action) { return this.pressed.has(G.settings.keys[action]); }
  hitCode(code) { return this.pressed.has(code); }
  takeMouse() { const d = [this.dx, this.dy]; this.dx = this.dy = 0; return d; }
  endFrame() { this.pressed.clear(); }
  onKey(fn) { this.listeners.push(fn); }
}
