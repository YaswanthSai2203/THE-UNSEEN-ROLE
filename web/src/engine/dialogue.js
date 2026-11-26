import * as THREE from 'three';
import { G } from '../game.js';
import { S } from '../logic/content.js';

/** Pitch and line quality per speaker: the voice follows who is talking, not which device plays it. */
function voiceFor(speaker, device) {
  const phone = device === 'phone' || device === 'radio' || device === 'tape';
  switch (speaker) {
    case S.Child: return { pitch: 255, phone: device === 'phone' || device === 'tape' };
    case S.Woman: return { pitch: 190, phone };
    case S.Radio: return { pitch: 128, phone: true };
    case S.Tv: return { pitch: 120, phone: true };
    case S.Man: return { pitch: 112, phone };
    default: return { pitch: 92, phone: true };
  }
}

/** Plays lines with a synthesized voice (positioned at its source) and subtitles; everything goes to the journal. */
export class Dialogue {
  constructor() { this.queue = []; this.current = null; this.lineEnd = 0; this.subtitle = null; this.speaker = ''; }
  get busy() { return !!this.current || this.queue.length > 0; }
  /** device: 'phone' | 'radio' | 'tape' | 'thought'. source: Object3D the voice comes from (optional). */
  play(lines, device = 'thought', source = null, done = null) {
    if (!lines?.length) { done?.(); return; }
    // A new inner thought supersedes thoughts still waiting, so a hurried player never gets a stale backlog.
    if (device === 'thought') this.queue = this.queue.filter(r => r.device !== 'thought' || r.done);
    this.queue.push({ lines, device, source, done, i: 0 });
  }
  thought(text) { this.play([{ speaker: '', text }], 'thought'); }
  stopAll() { this.queue = []; this.current = null; this.subtitle = null; if (this.playing) { try { this.playing.src.stop(); } catch { /* ignore */ } } }
  update() {
    if (G.state === 'paused') return; // G.time stands still while paused
    if (this.current && G.time < this.lineEnd) return;
    if (this.current) {
      this.current.i++;
      if (this.current.i >= this.current.lines.length) { const d = this.current.done; this.current = null; this.subtitle = null; d?.(); }
    }
    if (!this.current) { if (!this.queue.length) return; this.current = this.queue.shift(); }
    const r = this.current, line = r.lines[r.i];
    this.speaker = line.speaker; this.subtitle = line.text;
    let dur = 1.4 + line.text.length * 0.055;
    if (r.device !== 'thought' && line.speaker) {
      const v = voiceFor(line.speaker, r.device), b = G.audio.voiceBuffer(line.text, v.pitch, v.phone);
      const pos = r.source ? r.source.getWorldPosition(new THREE.Vector3()) : null;
      this.playing = G.audio.playBuffer(b, pos, 0.9, 1, 'voice', 8);
      if (b) dur = Math.max(dur, b.duration + 0.3);
    }
    this.lineEnd = G.time + dur;
    G.story.journal(line.speaker ? `${line.speaker}: ${line.text}` : `(${line.text})`);
  }
}
