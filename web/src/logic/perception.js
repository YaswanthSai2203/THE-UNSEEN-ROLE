// Perception meter: 100 = lucid, 0 = the player can no longer tell what is real.
export const PERCEPTION_MAX = 100;
export const PASSIVE_CAP = 55;
export const PASSIVE_RATE = 0.6;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export class PerceptionModel {
  constructor() { this.value = PERCEPTION_MAX; }
  get distortion() { return 1 - clamp(this.value / PERCEPTION_MAX, 0, 1); }
  get depleted() { return this.value <= 0; }
  get level() { return this.value >= 60 ? 'stable' : this.value >= 35 ? 'uneasy' : this.value >= 15 ? 'unstable' : 'breaking'; }
  /** Any drain suppresses recovery for that step. Passive recovery stops at PASSIVE_CAP. */
  tick(dt, drain, recover) {
    if (dt <= 0) return this.value;
    if (drain > 0) this.value -= drain * dt;
    else {
      const rate = recover + (this.value < PASSIVE_CAP ? PASSIVE_RATE : 0);
      const limit = recover > 0 ? PERCEPTION_MAX : PASSIVE_CAP;
      if (this.value < limit) this.value = Math.min(limit, this.value + rate * dt);
    }
    this.value = clamp(this.value, 0, PERCEPTION_MAX);
    return this.value;
  }
  hit(a) { if (a > 0) this.value = clamp(this.value - a, 0, PERCEPTION_MAX); }
  restore(a) { if (a > 0) this.value = clamp(this.value + a, 0, PERCEPTION_MAX); }
  set(v) { this.value = clamp(v, 0, PERCEPTION_MAX); }
}
