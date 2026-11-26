// Pacing for horror events: story beats run when eligible; ambient events are spaced out, never overlap,
// never repeat back to back. ctx = { time, chapter, has(flag), playerPos, isObserved(point), random() }.
export class HorrorScheduler {
  constructor() { this.events = []; this.active = null; this.activeStart = 0; this.lastAmbientEnd = -Infinity; this.lastAmbientId = null; this.ambientGap = 18; }

  register(e) {
    this.events.push(Object.assign({ story: false, oneShot: true, minChapter: 1, maxChapter: 5, cooldown: 60, probability: 1,
      minDist: 0, maxDist: Infinity, visibility: 'any', timeout: 40, lastRun: -Infinity, runs: 0, done: false }, e));
  }
  clear() { this.events = []; this.active = null; }

  eligible(e, ctx) {
    if (e.done) return false;
    if (ctx.chapter < e.minChapter || ctx.chapter > e.maxChapter) return false;
    if (e.requires && !ctx.has(e.requires)) return false;
    if (e.blockedBy && ctx.has(e.blockedBy)) return false;
    if (ctx.time - e.lastRun < e.cooldown) return false;
    if (e.anchor) {
      const p = ctx.playerPos, a = e.anchor;
      const d = Math.hypot(p.x - a.x, p.y - a.y, p.z - a.z);
      if (d < e.minDist || d > e.maxDist) return false;
      if (e.visibility === 'unobserved' && ctx.isObserved(a)) return false;
      if (e.visibility === 'observed' && !ctx.isObserved(a)) return false;
    }
    return !e.condition || e.condition();
  }

  tick(ctx) {
    if (this.active) {
      const a = this.active;
      const finished = !a.completion || a.completion() || ctx.time - this.activeStart > a.timeout;
      if (!finished) return null;
      if (!a.story) this.lastAmbientEnd = ctx.time;
      this.active = null;
    }
    for (const e of this.events) if (e.story && this.eligible(e, ctx)) return this.begin(e, ctx);
    if (ctx.time - this.lastAmbientEnd < this.ambientGap) return null;
    let c = this.events.filter(e => !e.story && this.eligible(e, ctx));
    if (c.length > 1) c = c.filter(e => e.id !== this.lastAmbientId);
    if (!c.length) return null;
    const start = Math.floor(ctx.random() * c.length) % c.length;
    for (let i = 0; i < c.length; i++) {
      const e = c[(start + i) % c.length];
      if (ctx.random() < e.probability) return this.begin(e, ctx);
    }
    return null;
  }

  begin(e, ctx) {
    e.lastRun = ctx.time; e.runs++;
    if (e.oneShot) e.done = true;
    if (!e.story) this.lastAmbientId = e.id;
    e.start?.();
    if (e.completion) { this.active = e; this.activeStart = ctx.time; }
    else if (!e.story) this.lastAmbientEnd = ctx.time;
    return e;
  }
}
