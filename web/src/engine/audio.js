import * as THREE from 'three';
import { G } from '../game.js';
import { SOUNDS, voice, RATE } from './synth.js';

const CATS = ['sfx', 'ambience', 'music', 'voice', 'unseen'];

/**
 * Web Audio manager: 3D one-shots and loops (HRTF panning), category volumes, sounds that are only audible
 * with closed eyes ('unseen'), and distortion of the whole mix at low perception.
 */
export class AudioManager {
  constructor() { this.ctx = null; this.buffers = new Map(); this.voices = new Map(); this.loops = []; this.oneShots = []; this.eyes = 0; }

  /** Must be called from a user gesture (browsers block audio before one). */
  init() {
    if (this.ctx) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const c = this.ctx;
    this.master = c.createGain();
    this.shaper = c.createWaveShaper(); this.setDistortion(0);
    this.filter = c.createBiquadFilter(); this.filter.type = 'lowpass'; this.filter.frequency.value = 22000;
    this.master.connect(this.shaper).connect(this.filter).connect(c.destination);
    this.cats = {};
    for (const k of CATS) { this.cats[k] = c.createGain(); this.cats[k].connect(this.master); }
    for (const l of this.loops) if (l.wanted) l.play(); // loops created before audio was allowed
  }

  setDistortion(k) {
    if (this._dist === k) return; this._dist = k;
    const n = 512, curve = new Float32Array(n), amt = k * 40;
    for (let i = 0; i < n; i++) { const x = (i * 2) / n - 1; curve[i] = amt ? ((1 + amt) * x) / (1 + amt * Math.abs(x)) : x; }
    this.shaper.curve = curve;
  }

  buffer(name) {
    if (!this.ctx) return null;
    let b = this.buffers.get(name);
    if (!b) {
      const data = SOUNDS[name]?.();
      if (!data) return null;
      b = this.ctx.createBuffer(1, data.length, RATE); b.copyToChannel(data, 0); this.buffers.set(name, b);
    }
    return b;
  }
  voiceBuffer(text, pitch, phone) {
    if (!this.ctx) return null;
    const key = `${pitch}|${phone}|${text}`; // cached: replays cost nothing and memory stays bounded
    let b = this.voices.get(key);
    if (!b) { let h = 0; for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) | 0; const d = voice(text, pitch, phone, h); b = this.ctx.createBuffer(1, d.length, RATE); b.copyToChannel(d, 0); this.voices.set(key, b); }
    return b;
  }

  chain(volume, cat, pos, maxDist) {
    const c = this.ctx, g = c.createGain(); g.gain.value = volume;
    if (pos) {
      const p = c.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 0.8; p.maxDistance = maxDist; p.rolloffFactor = 1.2;
      p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z;
      g.connect(p).connect(this.cats[cat]); return { g, p };
    }
    g.connect(this.cats[cat]); return { g, p: null };
  }

  playBuffer(b, pos, volume = 1, pitch = 1, cat = 'sfx', maxDist = 14) {
    if (!this.ctx || !b) return null;
    const src = this.ctx.createBufferSource(); src.buffer = b; src.playbackRate.value = pitch;
    const { g, p } = this.chain(volume, cat, pos, maxDist);
    src.connect(g); src.start();
    const h = { src, g, p, ended: false }; src.onended = () => (h.ended = true);
    this.oneShots.push(h);
    if (this.oneShots.length > 40) { const old = this.oneShots.shift(); try { old.src.stop(); } catch { /* already stopped */ } }
    return h;
  }
  playAt(name, pos, volume = 1, pitch = 1, cat = 'sfx', maxDist = 14) { return this.playBuffer(this.buffer(name), pos, volume, pitch, cat, maxDist); }
  play2D(name, volume = 1, cat = 'sfx', pitch = 1) { return this.playBuffer(this.buffer(name), null, volume, pitch, cat); }

  /** A looping source that follows an Object3D (or a fixed point). It is cleaned up with the world. */
  loop(name, follow, volume, cat, maxDist = 10, play = true) {
    const self = this;
    const h = {
      name, follow, volume, cat, maxDist, src: null, g: null, p: null, pitch: 1,
      get isPlaying() { return !!this.src; },
      play() {
        this.wanted = true;
        if (this.src || !self.ctx) return;
        const b = self.buffer(this.name); if (!b) return;
        const pos = this.position();
        const { g, p } = self.chain(this.volume, this.cat, pos, this.maxDist);
        const s = self.ctx.createBufferSource(); s.buffer = b; s.loop = true; s.playbackRate.value = this.pitch; s.connect(g);
        s.start(0, Math.random() * b.duration * 0.9);
        this.src = s; this.g = g; this.p = p;
      },
      stop() { this.wanted = false; if (this.src) { try { this.src.stop(); } catch { /* ignore */ } this.src.disconnect(); this.g.disconnect(); this.src = null; } },
      position() { return this.follow instanceof THREE.Object3D ? this.follow.getWorldPosition(new THREE.Vector3()) : this.follow; },
      setVolume(v) { this.volume = v; if (this.g) this.g.gain.value = v; },
    };
    this.loops.push(h);
    if (play) h.play();
    return h;
  }

  stopAll() {
    for (const h of this.oneShots) { try { h.src.stop(); } catch { /* ignore */ } }
    this.oneShots = [];
    for (const l of this.loops) l.stop();
    this.loops = [];
  }
  setPaused(p) { if (this.ctx) p ? this.ctx.suspend() : this.ctx.resume(); }

  update(dt) {
    if (!this.ctx) return;
    const s = G.settings, ending = G.state === 'ending';
    const eyesClosed = !!G.player && G.player.eyesClosed && G.state === 'playing';
    this.eyes = Math.max(0, Math.min(1, this.eyes + (eyesClosed ? 2.5 : -2.5) * dt));
    const sfx = s.sfxVolume, set = (k, v) => this.cats[k].gain.setTargetAtTime(v, this.ctx.currentTime, 0.05);
    set('music', s.musicVolume);
    set('voice', Math.max(sfx, 0.6));
    set('sfx', ending ? 0 : sfx * (1 + 0.2 * this.eyes));
    set('ambience', ending ? 0 : sfx * (1 - 0.45 * this.eyes));
    set('unseen', ending ? 0 : sfx * this.eyes);
    this.master.gain.setTargetAtTime(s.masterVolume, this.ctx.currentTime, 0.05);
    const d = G.state === 'playing' ? G.perception.distortion : 0, k = Math.max(0, Math.min(1, (d - 0.65) / 0.35));
    this.setDistortion(Math.round(k * 10) / 10 * 0.35);
    this.filter.frequency.setTargetAtTime(22000 - 19800 * k * 0.6, this.ctx.currentTime, 0.1);
    // listener follows the camera
    const L = this.ctx.listener, cam = G.camera, p = cam.getWorldPosition(new THREE.Vector3()), f = cam.getWorldDirection(new THREE.Vector3()), u = new THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
    if (L.positionX) {
      L.positionX.value = p.x; L.positionY.value = p.y; L.positionZ.value = p.z;
      L.forwardX.value = f.x; L.forwardY.value = f.y; L.forwardZ.value = f.z; L.upX.value = u.x; L.upY.value = u.y; L.upZ.value = u.z;
    } else { L.setPosition(p.x, p.y, p.z); L.setOrientation(f.x, f.y, f.z, u.x, u.y, u.z); }
    for (const l of this.loops) if (l.p && l.follow instanceof THREE.Object3D) { const q = l.position(); l.p.positionX.value = q.x; l.p.positionY.value = q.y; l.p.positionZ.value = q.z; }
    this.oneShots = this.oneShots.filter(h => !h.ended);
  }
}
