import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { G } from './game.js';
import { SaveStore, browserStorage } from './logic/save.js';
import { loadSettings } from './engine/settings.js';
import { Input } from './engine/input.js';
import { Physics } from './engine/physics.js';
import { ObservationManager } from './engine/observation.js';
import { AudioManager } from './engine/audio.js';
import { Dialogue } from './engine/dialogue.js';
import { PhotoCamera } from './engine/photo.js';
import { Player } from './engine/player.js';
import { UI } from './ui/ui.js';
import { ApartmentBuilder } from './world/apartment.js';
import { BasementBuilder } from './world/basement.js';
import { MenuBuilder } from './world/menu.js';
import { Ending } from './logic/flags.js';

const PIXEL_RATIO = { low: 0.6, medium: 0.85, high: 1 };

function boot() {
  const app = document.getElementById('app');
  const canvas = document.createElement('canvas');
  canvas.id = 'view';
  app.prepend(canvas);

  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); }
  catch (e) { document.getElementById('nogl').hidden = false; return; }
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  G.storage = browserStorage();
  G.saves = new SaveStore(G.storage);
  G.settings = loadSettings(G.storage);
  try { G.endingsSeen = new Set(JSON.parse(G.storage.get('unseen_endings') || '[]')); } catch { G.endingsSeen = new Set(); }
  G.renderer = renderer;
  G.scene = new THREE.Scene();
  G.camera = new THREE.PerspectiveCamera(70, 16 / 9, 0.03, 60);
  G.scene.add(G.camera);
  G.ambient = new THREE.AmbientLight(0xffffff, 1);
  G.scene.add(G.ambient);
  G.input = new Input(canvas);
  G.audio = new AudioManager();
  G.dialogue = new Dialogue();
  G.observation = new ObservationManager();
  G.ui = new UI(document.getElementById('ui'));
  G.mirrors = []; G.tvs = []; G.reveals = [];
  G.photo = null;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(G.scene, G.camera));
  const after = new AfterimagePass(0.72);
  composer.addPass(after);
  composer.addPass(new OutputPass());

  const grain = document.getElementById('grain'), gctx = grain.getContext('2d'), gimg = gctx.createImageData(160, 90);
  let grainT = 0, lastFilter = '';

  G.applySettings = () => {
    const s = G.settings;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2) * PIXEL_RATIO[s.quality]);
    resize();
    applyBrightness();
  };
  const applyBrightness = () => { G.ambient.intensity = (G.baseAmbient ?? 1) * (0.55 + G.settings.brightness * 1.35); };
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false); composer.setSize(w, h);
    G.camera.aspect = w / h; G.camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize);

  /** Build the world for a scene; worlds are rebuilt from the story flags every time. */
  G.buildWorld = (name, spawnId) => {
    if (G.worldRoot) disposeWorld(G.worldRoot);
    G.director.clear(); G.observation.clear();
    G.mirrors = []; G.tvs = []; G.reveals = [];
    G.player = null;
    const root = new THREE.Group(); root.name = 'World';
    G.scene.add(root); G.worldRoot = root;
    G.physics = new Physics(root);
    G.worldName = name;
    const W = name === 'apartment' ? ApartmentBuilder : name === 'basement' ? BasementBuilder : MenuBuilder;
    G.world = new W(root);
    G.world.build();
    if (G.world.hasPlayer) {
      const s = G.world.getSpawn(spawnId || 'default');
      let pos = s.pos, yaw = s.yaw;
      if (!spawnId && G.data.hasPosition && G.data.scene === name) { pos = new THREE.Vector3(G.data.position.x, 0, G.data.position.z); yaw = G.data.yaw; }
      G.player = new Player(pos, yaw, root);
      if (!G.photo) G.photo = new PhotoCamera();
    }
    G.shadowsDirty = true;
    applyBrightness();
  };

  function disposeWorld(root) {
    root.traverse(o => {
      if (o.isMesh || o.isPoints) {
        if (o.geometry && !o.geometry.userData.shared && o.geometry.type === 'PlaneGeometry') o.geometry.dispose();
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of ms) if (m && !m.name) { m.map?.isCanvasTexture && m.map.dispose(); m.dispose(); }
      }
      if (o.isLight && o.shadow?.map) o.shadow.map.dispose();
    });
    for (const m of G.mirrors) m.rt.dispose();
    for (const t of G.tvs) t.rt.dispose();
    G.camera.children.filter(c => c.isSpotLight).forEach(c => { c.removeFromParent(); c.target.removeFromParent(); });
    root.removeFromParent();
  }

  // ------------------------------------------------------------------ start screen (audio needs a click)
  const start = document.getElementById('start');
  G.state = 'boot';
  G.applySettings();
  G.buildWorld('menu');
  G.state = 'menu-idle';
  start.hidden = false;
  start.addEventListener('click', () => {
    G.audio.init();
    start.hidden = true;
    G.state = 'menu';
    G.ui.renderScreen();
    G.ui.fade(0, 1.5);
  }, { once: true });
  G.ui.fade(0, 2);

  // ------------------------------------------------------------------ loop
  let last = performance.now(), prevState = '';
  function frame(now) {
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (G.state !== 'paused') G.time += dt;
    if (G.state !== prevState) { prevState = G.state; G.ui.renderScreen(); }

    if (G.player && G.state !== 'paused') G.player.update(dt);
    G.photo?.update();
    G.observation.update(dt);
    G.perception.update(dt);
    G.director.update(dt);
    if (G.state !== 'paused') { G.dialogue.update(); G.world?.update(dt); }
    G.hints.update(G.state === 'paused' ? 0 : dt);
    G.audio.update(dt);
    G.ui.update();

    // shadows of static lights are only redrawn when something moved
    if (G.shadowsDirty) { G.worldRoot?.traverse(o => { if (o.isPointLight && o.castShadow) o.shadow.needsUpdate = true; }); G.shadowsDirty = false; }
    for (const m of G.mirrors) m.render();
    for (const t of G.tvs) t.render();

    // post effects: restrained grade, vignette and grain; stronger only at low perception
    const d = G.state === 'playing' || G.state === 'paused' ? G.perception.distortion : 0, rm = G.settings.reducedMotion;
    const wobble = !rm && d > 0.7 ? Math.sin(G.time * 1.3) * (d - 0.7) * 1.2 : 0;
    const filter = `saturate(${(0.8 - d * 0.35).toFixed(2)}) contrast(1.06) brightness(${(0.9 + G.settings.brightness * 0.25).toFixed(2)})${wobble ? ` blur(${Math.abs(wobble).toFixed(2)}px)` : ''}`;
    if (filter !== lastFilter) { canvas.style.filter = filter; lastFilter = filter; }
    document.getElementById('vignette').style.opacity = (0.55 + d * 0.4).toFixed(2);
    grainT += dt;
    if (grainT > 1 / 24) {
      grainT = 0;
      for (let i = 0; i < gimg.data.length; i += 4) { const v = Math.random() * 255; gimg.data[i] = gimg.data[i + 1] = gimg.data[i + 2] = v; gimg.data[i + 3] = 255; }
      gctx.putImageData(gimg, 0, 0);
      grain.style.opacity = (0.05 + d * 0.12).toFixed(3);
    }
    if (G.settings.motionBlur && !rm) composer.render(); else renderer.render(G.scene, G.camera);
    G.input.endFrame();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // Exposed for automated tests and debugging.
  window.__unseen = { G, Ending };
}

boot();
