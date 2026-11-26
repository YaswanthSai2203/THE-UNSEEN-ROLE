import * as THREE from 'three';
import { gen, toTexture, canvas } from './textures.js';

// Named materials in a grounded, desaturated palette. Cached; textures tile once per metre.
const cache = new Map();
const lit = (color, map = null, rough = 0.85, metal = 0) => new THREE.MeshStandardMaterial({ color, map, roughness: rough, metalness: metal });
const tex = c => toTexture(c);

export function emissive(color, emissiveColor, intensity = 1) {
  return new THREE.MeshStandardMaterial({ color, emissive: emissiveColor, emissiveIntensity: intensity, roughness: 0.5 });
}
export const unlit = (color, map = null) => new THREE.MeshBasicMaterial({ color, map });
export function cutout(map, color = 0xffffff, isUnlit = false) {
  const m = isUnlit ? new THREE.MeshBasicMaterial({ map, color }) : new THREE.MeshStandardMaterial({ map, color, roughness: 0.9 });
  m.alphaTest = 0.5; m.transparent = false;
  return m;
}
export const fromCanvas = (c, rough = 0.8) => lit(0xffffff, toTexture(c, false), rough);

const C = (r, g, b) => new THREE.Color().setRGB(r, g, b, THREE.SRGBColorSpace);

function create(name) {
  switch (name) {
    case 'wallpaper_living': return lit(0xffffff, tex(gen.wallpaper([0.55, 0.5, 0.4], [0.46, 0.42, 0.33], 0)), 0.95);
    case 'wallpaper_bed': return lit(0xffffff, tex(gen.wallpaper([0.42, 0.47, 0.42], [0.36, 0.4, 0.35], 1)), 0.95);
    case 'wallpaper_hall': return lit(0xffffff, tex(gen.wallpaper([0.5, 0.46, 0.39], [0.4, 0.37, 0.31], 2)), 0.95);
    case 'wallpaper_child': return lit(0xffffff, tex(gen.wallpaper([0.55, 0.48, 0.5], [0.6, 0.56, 0.5], 3)), 0.95);
    case 'wallpaper_stained': return lit(0xffffff, tex(gen.stained(gen.wallpaper([0.48, 0.44, 0.36], [0.38, 0.34, 0.28], 2))), 0.95);
    case 'plaster': return lit(C(0.62, 0.6, 0.56), tex(gen.grain([0.9, 0.9, 0.88], 0.08, 6)), 0.95);
    case 'ceiling': return lit(C(0.55, 0.54, 0.5), tex(gen.stained(gen.grain([0.9, 0.9, 0.87], 0.06, 3))), 0.98);
    case 'tile_bath': return lit(0xffffff, tex(gen.tiles([0.62, 0.68, 0.66], [0.35, 0.37, 0.35], 6)), 0.35);
    case 'tile_kitchen': return lit(0xffffff, tex(gen.tiles([0.6, 0.58, 0.5], [0.3, 0.28, 0.25], 4, true)), 0.5);
    case 'floor_wood': return lit(0xffffff, tex(gen.planks([0.36, 0.25, 0.17])), 0.65);
    case 'floor_tile': return lit(0xffffff, tex(gen.tiles([0.45, 0.45, 0.43], [0.22, 0.22, 0.21], 3)), 0.7);
    case 'carpet': return lit(C(0.36, 0.3, 0.28), tex(gen.grain([1, 1, 1], 0.18, 40)), 1);
    case 'rug': return lit(0xffffff, tex(gen.rug()), 1);
    case 'concrete': return lit(C(0.42, 0.42, 0.4), tex(gen.stained(gen.grain([1, 1, 1], 0.16, 5))), 0.9);
    case 'concrete_wall': return lit(C(0.45, 0.44, 0.41), tex(gen.stained(gen.grain([1, 1, 1], 0.12, 3))), 0.95);
    case 'wood_dark': return lit(0xffffff, tex(gen.wood([0.24, 0.16, 0.11])), 0.6);
    case 'wood_light': return lit(0xffffff, tex(gen.wood([0.5, 0.38, 0.26])), 0.65);
    case 'wood_painted': return lit(C(0.72, 0.7, 0.63), tex(gen.grain([1, 1, 1], 0.06, 8)), 0.7);
    case 'door': return lit(C(0.62, 0.58, 0.5), tex(gen.grain([1, 1, 1], 0.07, 10)), 0.7);
    case 'door_front': return lit(0xffffff, tex(gen.wood([0.3, 0.2, 0.14])), 0.55);
    case 'fabric_sofa': return lit(C(0.33, 0.36, 0.3), tex(gen.grain([1, 1, 1], 0.15, 30)), 1);
    case 'fabric_bed': return lit(C(0.62, 0.6, 0.55), tex(gen.grain([1, 1, 1], 0.1, 25)), 1);
    case 'fabric_child': return lit(C(0.75, 0.6, 0.62), tex(gen.grain([1, 1, 1], 0.1, 25)), 1);
    case 'curtain': return lit(C(0.35, 0.28, 0.22), tex(gen.folds()), 1);
    case 'sheet': return lit(C(0.7, 0.7, 0.66), tex(gen.folds()), 1);
    case 'metal': return lit(C(0.45, 0.45, 0.43), tex(gen.grain([1, 1, 1], 0.1, 20)), 0.5, 0.7);
    case 'chrome': return lit(C(0.75, 0.75, 0.75), null, 0.15, 1);
    case 'brass': return lit(C(0.7, 0.55, 0.25), null, 0.3, 1);
    case 'porcelain': return lit(C(0.85, 0.85, 0.82), null, 0.25);
    case 'appliance': return lit(C(0.78, 0.76, 0.7), tex(gen.grain([1, 1, 1], 0.04, 4)), 0.5);
    case 'plastic_dark': return lit(C(0.12, 0.11, 0.1), null, 0.6);
    case 'plastic_beige': return lit(C(0.68, 0.63, 0.52), null, 0.6);
    case 'plastic_red': return lit(C(0.55, 0.08, 0.07), null, 0.6);
    case 'screen_off': return lit(C(0.03, 0.04, 0.04), null, 0.1);
    case 'window_night': return unlit(0xffffff, tex(gen.nightSky()));
    case 'cardboard': return lit(C(0.5, 0.4, 0.27), tex(gen.grain([1, 1, 1], 0.12, 12)), 1);
    case 'paper': return lit(C(0.85, 0.83, 0.76), null, 0.9);
    case 'black': return lit(C(0.02, 0.02, 0.02), null, 0.9);
    case 'figure': return lit(C(0.015, 0.015, 0.018), null, 1);
    case 'clothes': return lit(C(0.24, 0.26, 0.3), tex(gen.grain([1, 1, 1], 0.1, 30)), 1);
    case 'trousers': return lit(C(0.16, 0.15, 0.14), null, 1);
    case 'skin': return lit(C(0.62, 0.5, 0.42), null, 0.75);
    case 'hair': return lit(C(0.12, 0.09, 0.07), null, 0.8);
    case 'child_clothes': return lit(C(0.75, 0.65, 0.3), null, 1);
    case 'red_shoe': return lit(C(0.6, 0.07, 0.06), null, 0.4);
    case 'rabbit': return lit(C(0.75, 0.72, 0.66), tex(gen.grain([1, 1, 1], 0.15, 30)), 1);
    case 'bulb': return emissive(C(1, 0.92, 0.75), C(1, 0.85, 0.6), 1.6);
    case 'bulb_off': return lit(C(0.25, 0.24, 0.22), null, 0.5);
    case 'lampshade': return lit(C(0.75, 0.62, 0.42), tex(gen.grain([1, 1, 1], 0.08, 20)), 1);
    case 'water': return lit(C(0.15, 0.2, 0.22), null, 0.05);
    case 'dust': return new THREE.PointsMaterial({ color: 0xbfb8a3, size: 0.012, transparent: true, opacity: 0.45, depthWrite: false });
  }
  console.warn('Unknown material', name);
  return lit(0xff00ff);
}

export function mat(name) {
  let m = cache.get(name);
  if (!m) { m = create(name); m.name = name; cache.set(name, m); }
  return m;
}

let staticTex;
export function staticTexture() {
  if (!staticTex) { staticTex = toTexture(gen.static()); staticTex.magFilter = THREE.NearestFilter; }
  return staticTex;
}

export { canvas };
