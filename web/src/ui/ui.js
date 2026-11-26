import { G, busy } from '../game.js';
import { CHAPTER_TITLES, chapterLabel, itemName, itemDescription, docTitle, docBody, ENDINGS, CREDITS, S } from '../logic/content.js';
import { FRAGMENTS } from '../logic/flags.js';
import { familyPhoto, crop, drawSymbol, canvas } from '../engine/textures.js';
import { ACTION_LABELS, DEFAULT_KEYS, keyName, saveSettings } from '../engine/settings.js';

const $ = (sel, el = document) => el.querySelector(sel);
const h = (tag, attrs = {}, ...kids) => {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else if (v !== false && v != null) e.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k != null) e.append(k.nodeType ? k : document.createTextNode(k));
  return e;
};
const wait = s => new Promise(r => setTimeout(r, s * 1000));
const SYMBOLS = ['circle', 'triangle', 'square', 'cross'];

/** All interface: HTML overlays over the WebGL canvas. */
export class UI {
  constructor(root) {
    this.root = root; this.modal = null; this.lastModalClosed = 0; this.page = 'main'; this.fadeValue = 1;
    root.innerHTML = `
      <div id="hud" hidden>
        <div id="crosshair"></div><div id="prompt"></div>
        <ul id="notes"></ul>
        <div id="objective"><span class="label">Objective</span><span id="objText"></span></div>
        <div id="hint"></div>
        <div id="subtitle"></div>
        <div id="meter" hidden><span class="label">perception</span><div class="bar"><i></i></div></div>
        <div id="film" class="label" hidden></div>
        <div id="savingNote" class="label">saving…</div>
        <figure id="preview" hidden><img alt=""></figure>
        <button id="resume" hidden>Click to look around</button>
      </div>
      <div id="eyes"></div><div id="vignette"></div><canvas id="grain" width="160" height="90"></canvas>
      <div id="screen"></div>
      <div id="card"><small></small><strong></strong></div>
      <div id="fade"></div><div id="flash"></div>
      <div id="ending" hidden><p id="endLine"></p><div id="endTitle"><strong></strong><em></em></div><pre id="endCredits"></pre></div>
      <div id="message" hidden><div class="panel"><p></p><button>OK</button></div></div>`;
    $('#message button').onclick = () => ($('#message').hidden = true);
    $('#resume').onclick = () => G.input.lock();
    this.notes = [];
    this.fragTex = null;
    G.input.onKey(e => this.key(e));
  }

  // ---------------------------------------------------------------- small API
  get modalOpen() { return !!this.modal; }
  notify(text) { this.notes.push({ text, t: performance.now() }); if (this.notes.length > 5) this.notes.shift(); this.renderNotes(); }
  showObjective() { this.objUntil = performance.now() + 7000; }
  showHint(text) { const e = $('#hint'); e.textContent = text; e.classList.add('show'); clearTimeout(this.hintT); this.hintT = setTimeout(() => e.classList.remove('show'), 12000); }
  saving() { const e = $('#savingNote'); e.classList.add('show'); clearTimeout(this.saveT); this.saveT = setTimeout(() => e.classList.remove('show'), 1600); }
  message(text) { $('#message p').textContent = text; $('#message').hidden = false; }
  flash() { const f = $('#flash'); f.style.transition = 'none'; f.style.opacity = 0.85; requestAnimationFrame(() => { f.style.transition = 'opacity .45s'; f.style.opacity = 0; }); }
  latestPhoto(p) { const f = $('#preview'); $('img', f).src = p.src; f.hidden = false; clearTimeout(this.prevT); this.prevT = setTimeout(() => (f.hidden = true), 3500); }
  chapterCard(ch) {
    const c = $('#card'); $('small', c).textContent = chapterLabel(ch); $('strong', c).textContent = CHAPTER_TITLES[ch];
    c.classList.remove('show'); void c.offsetWidth; c.classList.add('show');
    G.audio.play2D('drone', 0.35, 'music');
  }
  fade(target, dur) {
    return new Promise(res => {
      const e = $('#fade'), start = this.fadeValue, t0 = performance.now();
      const step = () => {
        const k = Math.min(1, (performance.now() - t0) / (dur * 1000));
        this.fadeValue = start + (target - start) * (k * k * (3 - 2 * k));
        e.style.opacity = this.fadeValue;
        k < 1 ? requestAnimationFrame(step) : res();
      };
      step();
    });
  }
  renderNotes() {
    const now = performance.now();
    this.notes = this.notes.filter(n => now - n.t < 5000);
    $('#notes').replaceChildren(...this.notes.map(n => h('li', {}, n.text)));
  }

  // ---------------------------------------------------------------- per frame
  update() {
    const st = G.state, inGame = ['playing', 'paused', 'cutscene'].includes(st) && G.player;
    $('#hud').hidden = !inGame || st === 'paused';
    $('#eyes').style.opacity = inGame ? Math.pow(G.player.eyesAmount, 0.7) : 0;
    if (!inGame) return;
    const now = performance.now();
    $('#prompt').textContent = this.modal || G.player.eyesClosed ? '' : G.player.promptText();
    $('#crosshair').classList.toggle('active', !!G.player.current);
    const showObj = now < (this.objUntil || 0) || this.modal === 'inventory';
    $('#objective').classList.toggle('show', showObj);
    $('#objText').textContent = G.story.objectiveText;
    const sub = $('#subtitle'), d = G.dialogue;
    if (G.settings.subtitles && d.subtitle) {
      sub.replaceChildren(...(d.speaker ? [h('b', {}, d.speaker + ': '), d.subtitle] : [h('i', {}, d.subtitle)]));
      sub.classList.add('show');
    } else sub.classList.remove('show');
    const m = $('#meter'); m.hidden = !G.perception.meterVisible;
    const v = G.perception.value / 100; $('i', m).style.width = (v * 100).toFixed(1) + '%'; m.classList.toggle('low', v < 0.35);
    const film = $('#film'); film.hidden = !G.inventory.has('instant_camera'); film.textContent = 'film ' + G.inventory.count('film');
    if (this.notes.length && now - this.notes[0].t > 5000) this.renderNotes();
    $('#resume').hidden = !(st === 'playing' && !this.modal && !G.input.locked && !G.input.lockFailed);
  }

  // ---------------------------------------------------------------- keys
  key(e) {
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (e.code === 'KeyP' && (G.state !== 'playing' && G.state !== 'paused')) return;
      // The same Esc press that released the mouse already paused the game; don't let it unpause too.
      if (e.code === 'Escape' && performance.now() - (G.input.pausedByUnlockAt || 0) < 400) return;
      if (this.handleEscape()) return;
      if (G.state === 'playing') G.setPaused(true); else if (G.state === 'paused') G.setPaused(false);
      return;
    }
    if (G.state !== 'playing') return;
    if (e.code === G.settings.keys.inventory) {
      if (this.modal === 'inventory') this.closeModals();
      else if (!this.modal) this.openInventory();
    } else if (this.modal === 'document' && e.code === G.settings.keys.interact && performance.now() - this.modalOpenedAt > 300) this.closeModals();
  }
  handleEscape() {
    if (!$('#message').hidden) { $('#message').hidden = true; return true; }
    if (this.modal) { this.closeModals(); return true; }
    if ((G.state === 'menu' || G.state === 'paused') && this.page !== 'main') { this.page = 'main'; saveSettings(G.storage, G.settings); this.renderScreen(); return true; }
    return G.state === 'ending' || G.state === 'loading';
  }

  // ---------------------------------------------------------------- modals
  openModal(kind, el) {
    this.modal = kind; this.modalOpenedAt = performance.now();
    G.input.unlock();
    const s = $('#screen'); s.replaceChildren(el); s.className = 'modal ' + kind;
  }
  closeModals() {
    if (this.modal) this.lastModalClosed = performance.now();
    const wasGame = this.modal && G.state === 'playing';
    this.modal = null; this.confirmYes = null;
    if (G.state === 'playing' || G.state === 'cutscene') { $('#screen').replaceChildren(); $('#screen').className = ''; }
    if (wasGame) G.input.lock();
  }
  confirm(text, yes) {
    const el = h('div', { class: 'panel confirm' }, h('p', {}, text),
      h('div', { class: 'row' }, h('button', { onclick: () => { this.closeModals(); this.renderScreen(); yes(); } }, 'Yes'),
        h('button', { onclick: () => { this.closeModals(); this.renderScreen(); } }, 'No')));
    if (G.state === 'playing') this.openModal('confirm', el);
    else { const s = $('#screen'); s.replaceChildren(el); s.className = 'modal confirm'; }
  }

  showDocument(id) {
    this.openModal('document', h('article', { class: 'paper' }, h('h2', {}, docTitle(id)), h('div', { class: 'body' }, docBody(id)),
      h('p', { class: 'close-hint' }, `[${keyName(G.settings.keys.interact)}] or [Esc] to close`)));
  }

  fragTextures() {
    if (!this.fragTex) { const p = familyPhoto(true); this.fragTex = [crop(p, 0, 0, 128, 96), crop(p, 128, 0, 128, 96), crop(p, 0, 96, 128, 96), crop(p, 128, 96, 128, 96)].map(c => c.toDataURL()); }
    return this.fragTex;
  }

  openInventory(tab = 0) {
    const d = G.data, tabs = ['Items', 'Documents', 'Photographs', 'Journal'];
    const detail = h('div', { class: 'detail' }), list = h('div', { class: 'list' });
    const select = (rows, render) => {
      list.replaceChildren(...rows.map((r, i) => h('button', { class: 'row-btn', onclick: ev => { list.querySelectorAll('.sel').forEach(x => x.classList.remove('sel')); ev.currentTarget.classList.add('sel'); detail.replaceChildren(...render(i)); } }, r)));
      if (!rows.length) list.replaceChildren(h('p', { class: 'muted' }, 'Nothing yet.'));
    };
    const show = t => {
      tabBar.querySelectorAll('button').forEach((b, i) => b.classList.toggle('on', i === t));
      detail.replaceChildren(); list.hidden = false; detail.className = 'detail';
      if (t === 0) {
        const ids = Object.keys(d.items);
        select(ids.map(id => d.items[id] > 1 ? `${itemName(id)}  ×${d.items[id]}` : itemName(id)), i => {
          const id = ids[i], fi = FRAGMENTS.indexOf(id);
          return [h('h3', {}, itemName(id)), h('p', {}, itemDescription(id)), fi >= 0 ? h('img', { class: 'frag', src: this.fragTextures()[fi], alt: itemName(id) }) : null];
        });
      } else if (t === 1) select(d.documents.map(docTitle), i => [h('article', { class: 'paper inline' }, h('h2', {}, docTitle(d.documents[i])), h('div', { class: 'body' }, docBody(d.documents[i])))]);
      else if (t === 2) {
        list.hidden = true; detail.className = 'detail photos';
        if (!d.photos.length) detail.append(h('p', { class: 'muted' }, 'No photographs yet.'));
        d.photos.forEach(p => detail.append(h('button', { class: 'polaroid', onclick: () => {
          detail.replaceChildren(h('figure', { class: 'big' }, h('img', { src: p.src, alt: 'Photograph' }), h('figcaption', {}, p.caption)), h('button', { onclick: () => show(2) }, 'Back'));
        } }, h('img', { src: p.src, alt: 'Photograph taken at ' + p.takenAt }), h('span', {}, p.takenAt))));
      } else {
        list.hidden = true; detail.className = 'detail journal';
        detail.append(...(d.journal.length ? [...d.journal].reverse().map((j, i) => h('p', { class: i ? '' : 'latest' }, j)) : [h('p', { class: 'muted' }, 'Nothing yet.')]));
      }
    };
    const tabBar = h('nav', { class: 'tabs' }, tabs.map((t, i) => h('button', { onclick: () => show(i) }, t)));
    this.openModal('inventory', h('div', { class: 'panel inv' }, tabBar,
      h('p', { class: 'obj' }, h('span', { class: 'label' }, 'Objective'), ' ', G.story.objectiveText, h('span', { class: 'chapter' }, `${chapterLabel(G.story.chapter)} · ${CHAPTER_TITLES[G.story.chapter]}`)),
      h('div', { class: 'cols' }, list, detail),
      h('p', { class: 'close-hint' }, `[${keyName(G.settings.keys.inventory)}] or [Esc] to close`)));
    show(tab);
  }

  openPadlock(lock, solved) {
    const digits = SYMBOLS.map((sym, i) => {
      const c = canvas(64, 64); drawSymbol(c.getContext('2d'), sym, 32, 32, 22, 5, '#dbd4c4');
      const val = h('output', {}, String(lock.digits[i]));
      const stepBy = dlt => { lock.step(i, dlt); val.textContent = lock.digits[i]; G.audio.play2D('switch', 0.3, 'sfx', 0.7); };
      return h('div', { class: 'dial' }, h('img', { src: c.toDataURL(), alt: sym }), h('button', { 'aria-label': `${sym} up`, onclick: () => stepBy(1) }, '▲'), val, h('button', { 'aria-label': `${sym} down`, onclick: () => stepBy(-1) }, '▼'));
    });
    this.openModal('padlock', h('div', { class: 'panel padlock' }, h('p', {}, 'A heavy padlock. Four dials, each engraved with a symbol.'), h('div', { class: 'dials' }, digits),
      h('div', { class: 'row' }, h('button', { onclick: () => { if (lock.isOpen) { this.closeModals(); solved(); } else { G.audio.play2D('locked', 0.8); G.notify('It doesn\'t open.'); } } }, 'Pull the shackle'),
        h('button', { onclick: () => this.closeModals() }, 'Leave'))));
  }

  openChannels(current, onTune) {
    const out = h('output', {}, 'CH ' + String(current).padStart(2, '0'));
    const btns = Array.from({ length: 12 }, (_, i) => h('button', { onclick: () => { out.textContent = 'CH ' + String(i + 1).padStart(2, '0'); G.audio.play2D('switch', 0.6, 'sfx', 0.6); onTune(i + 1); } }, String(i + 1)));
    this.openModal('channels', h('div', { class: 'panel channels' }, h('p', {}, 'The channel dial clicks stiffly.'), out, h('div', { class: 'grid' }, btns), h('button', { onclick: () => this.closeModals() }, 'Leave')));
  }

  openFragments(puzzle, solved) {
    const tex = this.fragTextures();
    let selected = -1, done = false;
    const slots = h('div', { class: 'frame' }), pieces = h('div', { class: 'pieces' }), note = h('p', { class: 'muted' }, 'Select a piece, then a corner. Select a placed piece to remove it.');
    const render = () => {
      slots.replaceChildren(...[0, 1, 2, 3].map(s => h('button', { class: 'slot', 'aria-label': 'Corner ' + (s + 1), onclick: () => {
        if (done) return;
        if (selected >= 0) { puzzle.place(selected, s); selected = -1; G.audio.play2D('paper', 0.5); } else if (puzzle.slots[s] >= 0) puzzle.clear(s);
        if (puzzle.isSolved) {
          done = true; G.audio.play2D('musicBox', 0.4, 'music');
          note.textContent = 'A man, a woman, and between them, a small girl in yellow.';
          setTimeout(() => { this.closeModals(); solved(); }, 3500);
        }
        render();
      } }, puzzle.slots[s] >= 0 ? h('img', { src: tex[puzzle.slots[s]], alt: '' }) : null)));
      pieces.replaceChildren(...[0, 1, 2, 3].filter(i => G.story.has(FRAGMENTS[i]) && !puzzle.isPlaced(i)).map(i =>
        h('button', { class: 'piece' + (selected === i ? ' sel' : ''), 'aria-label': 'Piece ' + (i + 1), onclick: () => { selected = selected === i ? -1 : i; render(); } }, h('img', { src: tex[i], alt: '' }))));
    };
    render();
    this.openModal('fragments', h('div', { class: 'panel fragments' }, h('p', {}, 'The frame is empty except for torn edges. Put the pieces back where they belong.'),
      h('div', { class: 'cols' }, slots, pieces), note, h('button', { onclick: () => this.closeModals() }, 'Leave')));
  }

  // ---------------------------------------------------------------- full screens
  renderScreen() {
    const s = $('#screen');
    if (G.state === 'menu') { s.className = 'menu'; s.replaceChildren(this.page === 'settings' ? this.settingsView() : this.page === 'credits' ? this.creditsView() : this.menuView()); }
    else if (G.state === 'paused') { s.className = 'menu paused'; s.replaceChildren(this.page === 'settings' ? this.settingsView() : this.pauseView()); }
    else if (!this.modal) { s.className = ''; s.replaceChildren(); }
  }
  menuView() {
    const n = G.endingsSeen.size, go = p => () => { this.page = p; this.renderScreen(); };
    return h('div', { class: 'menu-col' },
      h('h1', {}, 'THE UNSEEN'), h('p', { class: 'tag' }, 'You can only see what you are willing to forget.'),
      h('nav', {}, h('button', { disabled: !G.canContinue(), onclick: () => G.continueGame() }, 'Continue'),
        h('button', { onclick: () => (G.canContinue() ? this.confirm('Start a new game? Your saved progress will be lost.', () => G.newGame()) : G.newGame()) }, 'New Game'),
        h('button', { onclick: go('settings') }, 'Settings'), h('button', { onclick: go('credits') }, 'Credits')),
      h('p', { class: 'foot' }, n ? `Endings found: ${n} / 3` : 'Headphones recommended. Play in the dark.'),
      h('p', { class: 'foot' }, 'Contains themes of grief, child death and self-harm.'),
      G.storage.persistent ? null : h('p', { class: 'foot warn' }, 'This browser is blocking storage: progress will not be saved after you close the page.'));
  }
  pauseView() {
    return h('div', { class: 'menu-col' }, h('h2', {}, 'Paused'), h('p', { class: 'tag' }, `${chapterLabel(G.story.chapter)} · ${G.story.objectiveText}`),
      h('nav', {}, h('button', { onclick: () => G.setPaused(false) }, 'Resume'),
        h('button', { onclick: () => { this.page = 'settings'; this.renderScreen(); } }, 'Settings'),
        h('button', { onclick: () => this.confirm('Return to the last checkpoint? Progress since then will be lost.', () => { G.setPaused(false); G.restartCheckpoint(); }) }, 'Restart checkpoint'),
        h('button', { onclick: () => G.toMenu() }, 'Main menu')));
  }
  creditsView() {
    return h('div', { class: 'menu-col credits' }, h('pre', {}, CREDITS), h('button', { onclick: () => { this.page = 'main'; this.renderScreen(); } }, 'Back'));
  }
  settingsView() {
    const s = G.settings, apply = () => { saveSettings(G.storage, s); G.applySettings(); };
    const slider = (label, key, min, max, step, fmt) => {
      const out = h('output', {}, fmt(s[key]));
      return h('label', { class: 'set' }, h('span', {}, label), h('input', { type: 'range', min, max, step, value: s[key], oninput: e => { s[key] = +e.target.value; out.textContent = fmt(s[key]); apply(); } }), out);
    };
    const toggle = (label, key) => h('label', { class: 'set' }, h('span', {}, label), h('input', { type: 'checkbox', checked: s[key], onchange: e => { s[key] = e.target.checked; apply(); } }));
    const pct = v => Math.round(v * 100) + '%';
    const keys = Object.keys(DEFAULT_KEYS).map(a => {
      const b = h('button', { onclick: () => { b.textContent = 'press a key…'; G.input.captureNext = code => { if (code !== 'Escape') s.keys[a] = code; b.textContent = keyName(s.keys[a]); apply(); }; } }, keyName(s.keys[a]));
      return h('div', { class: 'set' }, h('span', {}, ACTION_LABELS[a]), b);
    });
    const quality = h('select', { onchange: e => { s.quality = e.target.value; apply(); } }, ['low', 'medium', 'high'].map(q => h('option', { value: q, selected: s.quality === q }, q[0].toUpperCase() + q.slice(1))));
    return h('div', { class: 'settings' }, h('h2', {}, 'Settings'),
      h('section', {}, h('h3', {}, 'Audio'), slider('Master volume', 'masterVolume', 0, 1, 0.01, pct), slider('Music volume', 'musicVolume', 0, 1, 0.01, pct), slider('Sound effects volume', 'sfxVolume', 0, 1, 0.01, pct)),
      h('section', {}, h('h3', {}, 'Video'), h('label', { class: 'set' }, h('span', {}, 'Graphics quality (resolution)'), quality),
        toggle('Shadows (applies on next room load)', 'shadows'), slider('Field of view', 'fov', 55, 95, 1, v => v + '°'), slider('Brightness', 'brightness', 0, 1, 0.01, pct), toggle('Motion blur', 'motionBlur'),
        h('div', { class: 'set' }, h('span', {}, 'Fullscreen'), h('button', { onclick: () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.().catch(() => G.notify('Fullscreen is not available here.'))) }, 'Toggle')),
        h('p', { class: 'muted' }, 'VSync is handled by your browser.')),
      h('section', {}, h('h3', {}, 'Accessibility'), toggle('Subtitles', 'subtitles'), toggle('Camera shake', 'cameraShake'), toggle('Head bob', 'headBob'), toggle('Reduced motion (no shake, bob or lens effects)', 'reducedMotion')),
      h('section', {}, h('h3', {}, 'Controls'), slider('Mouse sensitivity', 'sensitivity', 0.1, 4, 0.05, v => v.toFixed(2)), toggle('Invert mouse Y', 'invertY'), ...keys,
        h('button', { onclick: () => { s.keys = { ...DEFAULT_KEYS }; apply(); this.renderScreen(); } }, 'Reset controls'), h('p', { class: 'muted' }, 'Esc (or P) pauses and goes back.')),
      h('button', { class: 'back', onclick: () => { this.page = 'main'; apply(); this.renderScreen(); } }, 'Back'));
  }

  // ---------------------------------------------------------------- endings
  async playEnding(ending) {
    const e = ENDINGS[ending], box = $('#ending'), line = $('#endLine'), title = $('#endTitle'), credits = $('#endCredits');
    $('#screen').replaceChildren(); box.hidden = false; title.classList.remove('show'); credits.classList.remove('roll');
    G.audio.play2D(e.music, 0.5, 'music');
    for (const l of e.lines) {
      line.replaceChildren(...(l.speaker ? [h('b', {}, l.speaker + ': '), l.text] : [l.text]));
      if (l.speaker) G.audio.playBuffer(G.audio.voiceBuffer(l.text, l.speaker === S.Child ? 255 : 92, true), null, 0.8, 1, 'voice');
      G.story.journal(l.text);
      line.classList.add('show'); await wait(Math.max(3.5, 2 + l.text.length * 0.06)); line.classList.remove('show'); await wait(0.9);
    }
    $('strong', title).textContent = e.title; $('em', title).textContent = e.epigraph;
    title.classList.add('show'); await wait(6); title.classList.remove('show'); await wait(1.5);
    credits.textContent = CREDITS; credits.classList.add('roll');
    await Promise.race([wait(32), new Promise(r => setTimeout(() => addEventListener('keydown', r, { once: true }), 3000))]);
    credits.classList.remove('roll'); box.hidden = true;
  }
}
