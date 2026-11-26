// Smooth 1D noise in 0..1, for flicker and drift.
const h = i => { let x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
export function noise1(t) { const i = Math.floor(t), f = t - i, s = f * f * (3 - 2 * f); return h(i) + (h(i + 1) - h(i)) * s; }
