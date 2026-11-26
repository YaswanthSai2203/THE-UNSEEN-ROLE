import * as THREE from 'three';
import { G } from '../game.js';

/**
 * Invisible small footsteps that lead the player. They only advance while the spot they occupy is not
 * being looked at and the player is close enough to follow; looking at them makes them stop.
 */
export class FootstepsGuide {
  constructor(builder, start, path, onArrived) { this.pos = start.clone(); this.path = path; this.i = 0; this.onArrived = onArrived; this.stepDist = 0; this.idle = 0; this.done = false; }
  update(dt) {
    if (this.done || !G.player || G.state !== 'playing') return;
    const head = this.pos.clone().setY(0.3);
    if (G.observation.isPointObserved(head)) {
      G.perception.drain(1.5);
      this.idle += dt; if (this.idle > 3) { this.idle = 0; G.audio.playAt('step', this.pos, 0.12, 1.5); }
      return;
    }
    this.idle = 0;
    if (G.player.position.distanceTo(this.pos) > 4.5) return;
    const target = this.path[this.i], before = this.pos.clone(), d = target.clone().sub(this.pos), len = d.length(), step = 0.8 * dt;
    if (len <= step) this.pos.copy(target); else this.pos.addScaledVector(d, step / len);
    this.stepDist += before.distanceTo(this.pos);
    if (this.stepDist > 0.45) { this.stepDist = 0; G.audio.playAt('step', this.pos, 0.3, 1.35 + Math.random() * 0.2, 'sfx', 10); }
    if (this.pos.distanceToSquared(target) < 0.0004 && ++this.i >= this.path.length) { this.done = true; this.onArrived(); }
  }
}
