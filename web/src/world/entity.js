import * as THREE from 'three';
import { G } from '../game.js';
import { Observable } from '../engine/observation.js';

/**
 * The presence. It moves only while unobserved (or while your eyes are closed), along a line-of-sight
 * waypoint graph so it never passes through walls. Watching it drains perception; if it reaches you, you
 * black out and lose time, never progress.
 */
export class UnseenEntity {
  constructor(root, nodes, home, active) {
    this.root = root; this.nodes = nodes; this.home = home.clone(); this.active = active;
    this.speed = 1.5; this.closedSpeed = 2.6; this.target = home.clone(); this.repath = 0; this.stepDist = 0; this.since = G.time;
    this.links = nodes.map((a, i) => nodes.map((b, j) => (i !== j && this.clear(a, b) ? j : -1)).filter(j => j >= 0));
    this.obs = new Observable(root, { canMove: false, checkOccupancy: false,
      whileObserved: () => G.perception.drain(4 * (1 + Math.max(0, 1 - this.dist() / 8))) });
    this.heart = G.audio.loop('heartbeat', root, 0, 'sfx', 6);
  }
  clear(a, b) { return G.physics.lineOfSight(a.clone().setY(1), b.clone().setY(1), null); }
  dist() { return G.player ? Math.hypot(G.player.position.x - this.root.position.x, G.player.position.z - this.root.position.z) : 99; }
  resetHome() { this.root.position.copy(this.home); this.since = G.time; }
  remove() { this.heart.stop(); this.obs.destroy(); this.root.removeFromParent(); }

  update(dt) {
    const p = G.player, on = this.active();
    this.heart.setVolume(on ? Math.max(0, 1 - this.dist() / 6) * 0.7 : 0);
    if (!on || !p || G.state !== 'playing' || G.time - this.since < 5) return;
    const to = p.position.clone().sub(this.root.position).setY(0);
    if (to.lengthSq() > 0.01) this.root.rotation.y = Math.atan2(to.x, to.z); // turning in place never reads as movement
    if (this.dist() < 0.85) {
      G.audio.play2D('stinger', 0.7); p.shake(0.05, 0.6); G.perception.hit(30);
      G.blackout('It touched me. It was so cold.');
      return;
    }
    if (this.obs.observed || G.observation.isBoxObserved(this.obs.bounds(), this.root)) return; // frozen while watched
    this.repath -= dt;
    if (this.repath <= 0) { this.repath = 0.4; this.target = this.nextPoint(p.position); }
    const before = this.root.position.clone(), d = this.target.clone().setY(0).sub(before.clone().setY(0)), len = d.length();
    if (len < 0.01) return;
    const step = Math.min(len, (p.eyesClosed ? this.closedSpeed : this.speed) * dt);
    this.root.position.addScaledVector(d, step / len);
    this.root.updateMatrixWorld(true);
    // never step into view: undo the step if it would be seen
    if (G.observation.isBoxObserved(this.obs.bounds(), this.root)) { this.root.position.copy(before); return; }
    this.stepDist += step;
    if (this.stepDist > 0.7) { this.stepDist = 0; G.audio.playAt('stepHeavy', this.root.position, 0.45, 0.7 + Math.random() * 0.15, 'sfx', 12); }
  }

  /** BFS from nodes that see the player back to a node this entity can see. */
  nextPoint(target) {
    const me = this.root.position;
    if (this.clear(me, target)) return target.clone();
    const n = this.nodes.length, dist = new Array(n).fill(-1), q = [];
    this.nodes.forEach((nd, i) => { if (this.clear(nd, target)) { dist[i] = 0; q.push(i); } });
    while (q.length) { const c = q.shift(); for (const k of this.links[c]) if (dist[k] < 0) { dist[k] = dist[c] + 1; q.push(k); } }
    let best = -1, score = Infinity;
    this.nodes.forEach((nd, i) => { if (dist[i] >= 0 && this.clear(me, nd)) { const s = dist[i] * 10 + me.distanceTo(nd); if (s < score) { score = s; best = i; } } });
    return best >= 0 ? this.nodes[best].clone() : me.clone();
  }
}
