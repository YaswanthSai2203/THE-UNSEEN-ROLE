import * as THREE from 'three';

// Procedural textures: everything is painted on canvases at runtime (no image assets).
const S = 256;

function hash(x, y, s) { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
function smooth(t) { return t * t * (3 - 2 * t); }
/** Tileable value noise with integer period p. */
function vnoise(x, y, p, s = 0) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = smooth(x - xi), yf = smooth(y - yi);
  const m = v => ((v % p) + p) % p;
  const a = hash(m(xi), m(yi), s), b = hash(m(xi + 1), m(yi), s), c = hash(m(xi), m(yi + 1), s), d = hash(m(xi + 1), m(yi + 1), s);
  return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
}
export function fbm(x, y, p, oct = 4, s = 0) {
  let v = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { v += vnoise(x * f, y * f, p * f, s + i) * a; a *= 0.5; f *= 2; }
  return v;
}

export function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

/** Fill a texture pixel by pixel: f(x, y) returns [r, g, b] in 0..1. */
function paint(f, size = S) {
  const c = canvas(size, size), ctx = c.getContext('2d'), img = ctx.createImageData(size, size), d = img.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const [r, g, b] = f(x, y); const i = (y * size + x) * 4;
    d[i] = Math.max(0, Math.min(255, r * 255)); d[i + 1] = Math.max(0, Math.min(255, g * 255)); d[i + 2] = Math.max(0, Math.min(255, b * 255)); d[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

export function toTexture(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 4;
  return t;
}

const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const mul = (a, k) => a.map(v => v * k);

export const gen = {
  wallpaper(a, b, pattern) {
    return paint((x, y) => {
      const n = fbm(x / 64, y / 64, 4);
      let s;
      if (pattern === 0) s = Math.sin((x / S) * Math.PI * 16) > 0.6 ? 1 : 0;
      else if (pattern === 1) { const dx = (x % 32) - 16, dy = (y % 40) - 20; s = dx * dx / 30 + dy * dy / 70 < 1 ? 1 : 0; }
      else if (pattern === 3) { const dx = (x % 64) - 32, dy = ((y + Math.floor(x / 64) * 32) % 64) - 32; s = Math.abs(dx) + Math.abs(dy) < 7 ? 1 : 0; }
      else s = x % 64 < 3 || x % 64 > 61 ? 1 : 0;
      let c = mix(a, b, s * 0.6);
      c = mul(c, 0.85 + 0.2 * n);
      return mix(c, [0.45, 0.4, 0.3], Math.min(1, (y / S) * 0.4 + n * 0.3) * 0.25);
    });
  },
  stained(c) {
    const ctx = c.getContext('2d'), img = ctx.getImageData(0, 0, c.width, c.height), d = img.data;
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
      const st = Math.max(0, Math.min(1, (fbm(x / 96, y / 96, c.width / 96, 4, 7) - 0.55) * 6)) * 0.7;
      const i = (y * c.width + x) * 4;
      d[i] *= 1 - st * 0.38; d[i + 1] *= 1 - st * 0.45; d[i + 2] *= 1 - st * 0.58;
    }
    ctx.putImageData(img, 0, 0); return c;
  },
  grain(base, amount, scale) { return paint((x, y) => mul(base, 1 - amount + fbm(x / (S / scale), y / (S / scale), scale) * amount * 2)); },
  tiles(tile, grout, per, diag = false) {
    const cell = S / per;
    return paint((x, y) => {
      const g = x % cell < 2 || y % cell < 2;
      if (g) return grout;
      const idx = Math.floor(x / cell) + Math.floor(y / cell) * 7;
      let c = mul(tile, 0.92 + ((idx * 37) % 11) / 11 * 0.08 + fbm(x / 40, y / 40, S / 40) * 0.1);
      if (diag && (Math.floor(x / cell) + Math.floor(y / cell)) % 2 === 0) c = mul(c, 0.9);
      return c;
    });
  },
  planks(base) {
    return paint((x, y) => {
      const plank = Math.floor(x / 32), yy = (y + (plank * 97) % S) % S;
      const seam = x % 32 < 1 || yy % 128 < 1;
      const grain = fbm(x / 6 + plank * 13, yy / 60, 64) * 0.5 + Math.sin((x + fbm(yy / 20, plank, 16) * 20) * 0.6) * 0.08;
      const c = mul(base, 0.8 + grain * 0.5 + ((plank * 29) % 7) * 0.025);
      return seam ? mul(c, 0.45) : c;
    });
  },
  wood(base) { return paint((x, y) => mul(base, 0.85 + (Math.sin(y * 0.08 + fbm(x / 40, y / 40, S / 40) * 8) * 0.5 + 0.5) * 0.3)); },
  rug() {
    return paint((x, y) => {
      const cx = Math.abs(x - S / 2) / (S / 2), cy = Math.abs(y - S / 2) / (S / 2), b = Math.max(cx, cy);
      let c = [0.42, 0.16, 0.13];
      if (b > 0.85) c = [0.25, 0.22, 0.2]; else if (b > 0.78) c = [0.6, 0.5, 0.35]; else if (Math.abs(cx - cy) < 0.05) c = [0.55, 0.45, 0.3];
      return mul(c, 0.8 + fbm(x / 4, y / 4, 64) * 0.3);
    });
  },
  folds() { return paint((x, y) => { const f = Math.sin((x / S) * Math.PI * 12 + fbm(x / 80, y / 80, 4) * 3) * 0.5 + 0.5; return [0.75 + f * 0.3, 0.75 + f * 0.3, 0.75 + f * 0.3]; }); },
  nightSky() {
    return paint((x, y) => {
      const h = 1 - y / S;
      let c = mix([0.02, 0.025, 0.04], [0.09, 0.1, 0.14], h);
      if (h < 0.55 && (Math.floor(x / 18) * 31 + Math.floor(y / 22) * 17) % 23 === 0 && x % 18 > 6 && y % 22 > 9) c = [0.35, 0.28, 0.15];
      return c;
    });
  },
  static() {
    const c = canvas(128, 128), ctx = c.getContext('2d'), img = ctx.createImageData(128, 128);
    for (let i = 0; i < img.data.length; i += 4) { const v = Math.random() ** 2 * 255; img.data[i] = img.data[i + 1] = v; img.data[i + 2] = v * 1.05; img.data[i + 3] = 255; }
    ctx.putImageData(img, 0, 0); return c;
  },
};

// ---------------------------------------------------------------- drawn content
export const HAND = '"Segoe Print", "Bradley Hand", "Comic Sans MS", "Chalkboard SE", cursive';
export const TYPE = '"Courier New", Courier, monospace';

export function drawSymbol(ctx, sym, cx, cy, r, w, color) {
  ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath();
  if (sym === 'circle') ctx.arc(cx, cy, r, 0, Math.PI * 2);
  else if (sym === 'triangle') { ctx.moveTo(cx, cy - r); ctx.lineTo(cx + r * 0.95, cy + r * 0.75); ctx.lineTo(cx - r * 0.95, cy + r * 0.75); ctx.closePath(); }
  else if (sym === 'square') ctx.rect(cx - r * 0.8, cy - r * 0.8, r * 1.6, r * 1.6);
  else { ctx.moveTo(cx - r * 0.8, cy - r * 0.8); ctx.lineTo(cx + r * 0.8, cy + r * 0.8); ctx.moveTo(cx + r * 0.8, cy - r * 0.8); ctx.lineTo(cx - r * 0.8, cy + r * 0.8); }
  ctx.stroke();
}

/** Multi-line text centred on a canvas; scrawl jitters each line like handwriting. */
export function writing(text, w, h, px, ink, bg, font = HAND, scrawl = true) {
  const c = canvas(w, h), ctx = c.getContext('2d');
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); }
  ctx.fillStyle = ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = `${px}px ${font}`;
  const lines = text.split('\n'), lh = px * 1.25;
  lines.forEach((l, i) => {
    ctx.save();
    ctx.translate(w / 2 + (scrawl ? (Math.random() - 0.5) * px * 0.3 : 0), h / 2 + (i - (lines.length - 1) / 2) * lh);
    if (scrawl) ctx.rotate((Math.random() - 0.5) * 0.06);
    ctx.fillText(l, 0, 0); ctx.restore();
  });
  return c;
}

export function symbolCard(sym, text, ink, bg, w = 256, h = 128) {
  const c = canvas(w, h), ctx = c.getContext('2d');
  if (bg) { ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h); }
  drawSymbol(ctx, sym, h / 2, h / 2, h * 0.3, h * 0.06, ink);
  ctx.fillStyle = ink; ctx.font = `${h * 0.4}px ${HAND}`; ctx.textBaseline = 'middle'; ctx.fillText(text, h * 1.0, h / 2);
  return c;
}

/** The family photograph; withChild=false draws the version with the empty space. */
export function familyPhoto(withChild) {
  const c = canvas(256, 192), ctx = c.getContext('2d');
  ctx.fillStyle = '#ebe6d6'; ctx.fillRect(0, 0, 256, 192);
  const g = ctx.createLinearGradient(0, 10, 0, 182); g.addColorStop(0, '#9ea89e'); g.addColorStop(0.6, '#8c9682'); g.addColorStop(1, '#737f52');
  ctx.fillStyle = g; ctx.fillRect(10, 10, 236, 172);
  const ell = (x, y, rx, ry, col) => { ctx.fillStyle = col; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill(); };
  ctx.fillStyle = '#474d59'; ctx.fillRect(52, 70, 46, 112); ell(75, 52, 15, 19, '#b8947a'); ell(75, 38, 15, 8, '#33241a');
  ctx.fillStyle = '#8c524d'; ctx.fillRect(158, 78, 42, 104); ell(179, 60, 14, 18, '#b8947a'); ell(179, 50, 17, 13, '#59381f');
  ctx.strokeStyle = '#474d59'; ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(98, 100); ctx.lineTo(118, 128); ctx.stroke();
  if (withChild) { ctx.fillStyle = '#ccb34d'; ctx.fillRect(110, 122, 34, 60); ell(127, 108, 12, 14, '#b8947a'); ell(127, 99, 13, 8, '#40291a'); }
  grainOver(ctx, 256, 192, 14);
  return c;
}

export function grainOver(ctx, w, h, amt) {
  const img = ctx.getImageData(0, 0, w, h), d = img.data;
  for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - 0.5) * amt; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
  ctx.putImageData(img, 0, 0);
}

export function crop(src, x, y, w, h) { const c = canvas(w, h); c.getContext('2d').drawImage(src, x, y, w, h, 0, 0, w, h); return c; }

export function childDrawing() {
  const c = canvas(256, 192), ctx = c.getContext('2d');
  ctx.fillStyle = '#ebe6d6'; ctx.fillRect(0, 0, 256, 192);
  const line = (pts, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.lineCap = 'round'; ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.stroke(); };
  const red = '#b3261a', grey = '#595961', blue = '#334db3';
  line([[20, 30], [236, 30], [236, 140], [20, 140], [20, 30]], 2, red); line([[128, 30], [128, 140]], 2, red); line([[20, 85], [236, 85]], 2, red);
  for (let i = 0; i < 4; i++) { const x = 60 + (i % 2) * 108, y = 40 + Math.floor(i / 2) * 55; line([[x, y], [x, y + 38]], 4, grey); ctx.fillStyle = grey; ctx.beginPath(); ctx.arc(x, y - 3, 5, 0, 7); ctx.fill(); }
  ctx.fillStyle = blue; ctx.beginPath(); ctx.ellipse(180, 128, 26, 7, 0, 0, 7); ctx.fill();
  ctx.fillStyle = red; ctx.font = `15px ${HAND}`; ctx.textAlign = 'center'; ctx.fillText('DADDY DONT LOOK AWAY', 128, 170);
  return c;
}

export function stickFamily(variant) {
  const c = canvas(128, 96), ctx = c.getContext('2d');
  ctx.fillStyle = '#ebe6d6'; ctx.fillRect(0, 0, 128, 96);
  const fig = (x, h, col) => { ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, 80 - h); ctx.lineTo(x, 80); ctx.stroke(); ctx.beginPath(); ctx.arc(x, 72 - h, 7, 0, 7); ctx.fill(); };
  fig(30, 48, '#4d4d59'); fig(98, 44, '#334db3'); fig(64, 26, '#d9b333');
  if (variant % 3 === 0) { ctx.fillStyle = '#b3261a'; ctx.font = `14px ${HAND}`; ctx.fillText('LOOK', 8, 92); }
  return c;
}
