// Every sound is synthesized here as raw samples: no recorded or licensed audio.
export const RATE = 22050;
let seed = 19;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
const N = () => rnd() * 2 - 1;
const TAU = Math.PI * 2;
const lp = fc => 1 - Math.exp((-TAU * fc) / RATE);
const buf = s => new Float32Array(Math.max(1, Math.floor(s * RATE)));
const clamp01 = v => Math.max(0, Math.min(1, v));

function mix(a, b, off) { const o = new Float32Array(Math.max(a.length, b.length + off)); o.set(a); for (let i = 0; i < b.length; i++) o[i + off] += b[i]; return o; }
function loopable(d, fade) {
  const f = Math.min(Math.floor(fade * RATE), Math.floor(d.length / 3)), o = d.slice(0, d.length - f);
  for (let i = 0; i < f; i++) { const t = i / f; o[i] = d[i] * t + d[o.length + i] * (1 - t); }
  return o;
}
function click(len, freq) { const d = buf(len); for (let i = 0; i < d.length; i++) { const t = i / RATE; d[i] = (N() * 0.6 + Math.sin(TAU * freq * t) * 0.5) * Math.exp(-t * 180) * 0.8; } return d; }
function thump(freq, len, amp) {
  const d = buf(len); let l = 0; const a = lp(400);
  for (let i = 0; i < d.length; i++) { const t = i / RATE; l += a * (N() - l); const f = freq * (1 + 0.6 * Math.exp(-t * 30)); d[i] = (Math.sin(TAU * f * t) * 0.9 + l * 0.6) * Math.exp((-t * 9) / len) * amp; }
  return d;
}
function ring() {
  const d = buf(6);
  for (let i = 0; i < 2 * RATE; i++) {
    const t = i / RATE, strike = Math.exp(-((t * 20) % 1) * 4);
    const tone = Math.sin(TAU * 880 * t) * 0.5 + Math.sin(TAU * 1320 * t) * 0.25 + Math.sin(TAU * 2205 * t) * 0.1;
    d[i] = tone * strike * clamp01(t * 30) * clamp01((2 - t) * 30) * 0.5;
  }
  return d;
}
function staticNoise() { const d = buf(2); let l = 0; const a = lp(5000); for (let i = 0; i < d.length; i++) { l += a * (N() - l); d[i] = (l * 0.5 + (rnd() < 0.0015 ? N() * 2 : 0)) * 0.5; } return d; }
function hum(f, len, noise) {
  const d = buf(len); let l = 0; const a = lp(200);
  for (let i = 0; i < d.length; i++) { const t = i / RATE; l += a * (N() - l); d[i] = (Math.sin(TAU * f * t) * 0.5 + Math.sin(TAU * f * 2 * t) * 0.3 + Math.sin(TAU * f * 3 * t) * 0.12 + l * noise) * 0.4; }
  return d;
}
function buzz() { const d = hum(50, 2, 0.1); for (let i = 0; i < d.length; i++) { const t = i / RATE; d[i] = d[i] * 0.6 + Math.sign(Math.sin(TAU * 100 * t)) * 0.08 + (rnd() < 0.0008 ? N() * 0.6 : 0); } return d; }
function fridge() { const d = buf(4); let l = 0; const a = lp(120); for (let i = 0; i < d.length; i++) { const t = i / RATE; l += a * (N() - l); d[i] = (Math.sin(TAU * 50 * t) * 0.35 + Math.sin(TAU * 150 * t) * 0.1 + l * 1.5) * (0.9 + 0.1 * Math.sin(TAU * 0.5 * t)) * 0.35; } return d; }
function tick() { const d = buf(2), a = click(0.03, 2600), b = click(0.03, 1900); d.set(a, 0); for (let i = 0; i < b.length; i++) d[RATE + i] += b[i] * 0.8; return d; }
function step(bright) {
  const d = buf(0.28); let l = 0; const a = lp(900 * bright);
  for (let i = 0; i < d.length; i++) { const t = i / RATE; l += a * (N() - l); const heel = Math.exp(-t * 35), body = t > 0.05 ? Math.exp(-(t - 0.05) * 25) : 0; d[i] = (Math.sin(TAU * 85 * t) * heel * 0.8 + l * (heel + body * 0.7) * 1.4) * 0.7; }
  return d;
}
function creak(len) {
  const d = buf(len); let ph = 0, l = 0; const a = lp(1800), w = rnd() * 6;
  for (let i = 0; i < d.length; i++) {
    const t = i / RATE, f = 95 + 45 * Math.sin(t * 2.3 + w) + 25 * Math.sin(t * 7.1); ph += f / RATE;
    const saw = (ph % 1) * 2 - 1, grain = Math.max(0, Math.sin(TAU * (18 + 8 * Math.sin(t * 3)) * t)) ** 6;
    l += a * (saw * grain - l); d[i] = l * Math.sin(Math.PI * clamp01(t / len)) * 0.9;
  }
  return d;
}
function scrape() {
  const d = buf(0.9); let l = 0, l2 = 0; const a = lp(700), a2 = lp(150);
  for (let i = 0; i < d.length; i++) { const t = i / RATE; l += a * (N() - l); l2 += a2 * (l - l2); const rough = 0.6 + 0.4 * Math.sin(TAU * 31 * t + Math.sin(TAU * 3 * t) * 4); d[i] = (l - l2) * rough * clamp01(t * 12) * clamp01((0.9 - t) * 6) * 2.2; }
  return d;
}
function drip() { const d = buf(0.25); for (let i = 0; i < d.length; i++) { const t = i / RATE; d[i] = Math.sin(TAU * (700 + 1200 * clamp01(t / 0.03)) * t) * Math.exp(-t * 40) * 0.6; } return d; }
function breath() {
  const d = buf(3.6); let lo = 0, hi = 0; const aL = lp(250), aH = lp(1400);
  for (let i = 0; i < d.length; i++) {
    const t = i / RATE, n = N(); lo += aL * (n - lo); hi += aH * (n - hi);
    const inh = t < 1.3 ? Math.sin((Math.PI * t) / 1.3) : 0, exh = t > 1.6 && t < 3.4 ? Math.sin((Math.PI * (t - 1.6)) / 1.8) * 1.2 : 0;
    d[i] = (hi - lo) * (inh * 0.7 + exh) * 1.6;
  }
  return d;
}
function whisper() {
  const d = buf(3); let lo = 0, hi = 0, env = 0, target = 0; const aL = lp(1800), aH = lp(6000);
  for (let i = 0; i < d.length; i++) {
    const t = i / RATE; if (i % Math.floor(RATE / 6) === 0) target = rnd() < 0.7 ? rnd() : 0;
    env += (target - env) * 0.0015; const n = N(); lo += aL * (n - lo); hi += aH * (n - hi);
    d[i] = (hi - lo) * env * clamp01(t * 3) * clamp01((3 - t) * 3) * 2.2;
  }
  return d;
}
function wind() {
  const d = buf(9); let br = 0, l = 0;
  for (let i = 0; i < d.length; i++) {
    const t = i / RATE; br = Math.max(-1, Math.min(1, br + N() * 0.02)) * 0.999;
    const gust = 0.5 + 0.35 * Math.sin(TAU * 0.11 * t) + 0.15 * Math.sin(TAU * 0.37 * t + 1);
    l += lp(300 + 500 * gust) * (N() - l); d[i] = (br * 0.8 + l * 0.5) * gust * 0.6;
  }
  return d;
}
const NOTES = [76, 79, 81, 79, 76, 74, 76, -1, 72, 74, 76, 74, 71, 69, -1, -1]; // an original melody in A minor
function melody(beat, amp, box) {
  const nl = 0.42 * beat, d = buf(nl * NOTES.length + 1.5);
  NOTES.forEach((note, n) => {
    if (note < 0) return;
    const f = 440 * 2 ** ((note - 69) / 12), start = Math.floor(n * nl * RATE), len = Math.floor((box ? 1.4 : 2.2) * RATE);
    for (let i = 0; i < len && start + i < d.length; i++) {
      const t = i / RATE, env = box ? Math.exp(-t * 3.2) : clamp01(t * 6) * Math.exp(-t * 1.6);
      const v = Math.sin(TAU * f * t) + (box ? 0.35 * Math.sin(TAU * f * 3.01 * t) * Math.exp(-t * 9) : 0.2 * Math.sin(TAU * f * 0.5 * t));
      d[start + i] += v * env * amp * 0.5;
    }
  });
  return d;
}
function knocks() { const d = buf(1.4); for (let k = 0; k < 3; k++) { const t = thump(110, 0.18, 1), off = Math.floor((k * 0.32 + (k === 2 ? 0.1 : 0)) * RATE); for (let i = 0; i < t.length && off + i < d.length; i++) d[off + i] += t[i]; } return d; }
function shutter() {
  const a = mix(click(0.02, 3500), click(0.03, 2000), Math.floor(0.06 * RATE)), w = buf(0.6); let l = 0;
  for (let i = 0; i < w.length; i++) { const t = i / RATE; l += lp(1200 + t * 2000) * (N() - l); w[i] = (l * 0.4 + Math.sin(TAU * (300 + t * 400) * t) * 0.08) * Math.sin((Math.PI * t) / 0.6); }
  return mix(a, w, Math.floor(0.12 * RATE));
}
function rustle(len) { const d = buf(len); let h = 0; for (let i = 0; i < d.length; i++) { const t = i / RATE, n = N(); h += lp(800) * (n - h); d[i] = (n - h) * (0.25 + (rnd() < 0.004 ? 1 : 0)) * Math.sin((Math.PI * t) / len) * 0.5; } return d; }
function water() {
  const d = buf(3.4); let l = 0; const a = lp(2500);
  for (let i = 0; i < d.length; i++) { l += a * (N() - l); d[i] = l * 0.45; }
  for (let k = 0; k < 40; k++) { const dr = drip(), off = Math.floor(rnd() * (d.length - dr.length)); for (let i = 0; i < dr.length; i++) d[off + i] += dr[i] * 0.25; }
  return loopable(d, 0.3);
}
function heartbeat() { return mix(mix(buf(1.1), thump(55, 0.15, 1), 0), thump(50, 0.18, 0.7), Math.floor(0.28 * RATE)); }
function drone() {
  const d = buf(10); let l = 0; const a = lp(160);
  for (let i = 0; i < d.length; i++) {
    const t = i / RATE; l += a * (N() - l);
    d[i] = (Math.sin(TAU * 55 * t) * 0.3 + Math.sin(TAU * 58.27 * t) * 0.25 + Math.sin(TAU * 110.6 * t) * 0.12 + Math.sin(TAU * 164.8 * t) * 0.05 * (0.5 + 0.5 * Math.sin(TAU * 0.07 * t)) + l * 1.2) * 0.45;
  }
  return loopable(d, 0.8);
}
function roomTone() { const d = buf(5); let b = 0; for (let i = 0; i < d.length; i++) { b = Math.max(-1, Math.min(1, b + N() * 0.015)) * 0.998; d[i] = b * 0.3; } return loopable(d, 0.5); }
function stinger() {
  const d = buf(2.6); let l = 0;
  for (let i = 0; i < d.length; i++) { const t = i / RATE; l += lp(200 + t * 1500) * (N() - l); d[i] = (l + Math.sin(TAU * 73 * t) * 0.4 + Math.sin(TAU * 77.8 * t) * 0.4) * (t / 2.6) ** 2.5 * 0.6; }
  return d;
}

export const SOUNDS = {
  ring, static: staticNoise, hum: () => hum(50, 2, 0.25), buzz, fridge, tick, step: () => step(1), stepHeavy: () => step(0.6),
  creak: () => creak(1.3), doorOpen: () => mix(creak(0.9), click(0.02, 1800), 0), doorClose: () => mix(thump(70, 0.25, 0.9), click(0.02, 1400), 0),
  locked: () => mix(click(0.03, 900), click(0.03, 1100), Math.floor(0.09 * RATE)), scrape, drip, breath, whisper, wind: () => loopable(wind(), 0.6),
  musicBox: () => melody(1, 0.55, true), lullaby: () => melody(1.6, 0.35, false), knock: knocks, switch: () => click(0.015, 2500), shutter,
  pickup: () => rustle(0.25), paper: () => rustle(0.5), water, heartbeat, drone, thud: () => thump(45, 0.5, 1),
  unlock: () => mix(click(0.02, 3000), click(0.03, 2200), Math.floor(0.12 * RATE)), breaker: () => mix(thump(60, 0.3, 1), click(0.05, 3200), 0),
  roomTone, stinger, phonePickup: () => mix(click(0.03, 700), rustle(0.15), 0),
};

const VOWELS = [[750, 1200], [450, 1900], [320, 2250], [520, 900], [370, 850]];
const sq = x => x * x;

/** Garbled formant speech whose length follows the text: a voice on a bad line. Subtitles carry the words. */
export function voice(text, pitch, phone, seedValue) {
  let s = seedValue >>> 0 || 1;
  const r = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const syl = Math.max(2, Math.floor(text.length / 3)), sylLen = 0.17, d = buf(syl * sylLen + 0.4);
  let lpN = 0;
  for (let k = 0; k < syl; k++) {
    const v = VOWELS[Math.floor(r() * VOWELS.length)], start = Math.floor(k * sylLen * RATE), len = Math.floor(sylLen * (0.8 + 0.4 * r()) * RATE);
    const pause = r() < 0.08, fric = r() < 0.35, f0 = pitch * (1.1 - 0.25 * (k / syl)) * (0.95 + 0.1 * r());
    const H = Math.max(1, Math.floor(3200 / f0)), gains = new Float32Array(H + 1);
    for (let h = 1; h <= H; h++) { const fk = h * f0; gains[h] = Math.exp(-sq((fk - v[0]) / 110)) + 0.6 * Math.exp(-sq((fk - v[1]) / 160)) + 0.08 / h; }
    for (let i = 0; i < len && start + i < d.length; i++) {
      const u = i / len; let env = Math.sin(Math.PI * u); if (pause) env *= 0.05;
      const ph = (TAU * f0 * (start + i)) / RATE; let smp = 0;
      for (let h = 1; h <= H; h++) if (gains[h] > 0.02) smp += Math.sin(ph * h) * gains[h];
      if (fric && u < 0.25) { const n = r() * 2 - 1; lpN += lp(3000) * (n - lpN); smp += (n - lpN) * 1.5 * (1 - u * 4); }
      d[start + i] += smp * env * 0.22;
    }
  }
  if (phone) {
    let l = 0, h = 0;
    for (let i = 0; i < d.length; i++) { l += lp(3000) * (d[i] - l); h += lp(350) * (l - h); d[i] = Math.tanh((l - h) * 2.2 + (r() * 2 - 1) * 0.015) * 0.6; }
  }
  return d;
}
