// Cat Dance Party overlay — iPhone Safari first. Song is the soundtrack; clip videos are muted.
import { SONG, CATS, CAT_IDS, GROUP_GIFT, CLIP, clipFor, nextBeat } from '/shared/cats-data.js';

const params = new URLSearchParams(location.search);
const MUTE = params.get('mute') === '1';
const game = 'cats';
const $ = (id) => document.getElementById(id);
const grid = $('grid'), groupEl = $('group'), groupVid = $('groupVid'), groupName = $('groupName');
const song = $('song'), chip = $('soundChip');
song.setAttribute('playsinline', '');
song.setAttribute('webkit-playsinline', '');
try { song.playsInline = true; } catch {}

let meta = { cats: CATS, song: SONG, groupGift: GROUP_GIFT, settings: { likesPerDance: 50, voice: false } };
let snap = null;
let unlocked = false;
const tiles = {}; // id -> { el, a, b, showing, want, gifterEl }
const pending = { /* id -> move or 'idle' */ };
let groupWant = null;

function wsUrl() {
  const u = new URL('/ws', location.href);
  u.protocol = u.protocol === 'https:' ? 'wss:' : 'ws:';
  u.searchParams.set('game', game);
  const key = params.get('key'); if (key) u.searchParams.set('key', key);
  return u;
}

function kick(v) { if (v && v.src) v.play().catch(() => {}); }
function makeVideo() {
  const v = document.createElement('video');
  v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
  v.setAttribute('playsinline', ''); v.setAttribute('webkit-playsinline', ''); v.setAttribute('muted', '');
  v.preload = 'auto'; v.setAttribute('muted', 'true'); v.setAttribute('autoplay', '');
  v.addEventListener('canplay', () => kick(v));
  v.addEventListener('loadeddata', () => kick(v));
  return v;
}

function build() {
  grid.innerHTML = '';
  for (const c of meta.cats) {
    const el = document.createElement('div');
    el.className = 'tile ' + c.frame;
    el.dataset.id = c.id;
    const a = makeVideo(), b = makeVideo();
    a.className = ''; b.className = 'off';
    a.src = c.idle; a.loop = true;
    const icon = document.createElement('img');
    icon.className = 'icon'; icon.src = c.icon; icon.alt = c.giftName; icon.draggable = false;
    const name = document.createElement('div');
    name.className = 'name';
    el.append(a, b, icon, name);
    grid.append(el);
    tiles[c.id] = { el, a, b, showing: 'a', want: 'idle', cur: 'idle', name };
    try { a.play().catch(() => {}); } catch {}
  }
}

function unlock() {
  if (unlocked) return;
  const act = () => {
    if (!MUTE) {
      if (!song.src) song.src = (meta.song && meta.song.url) || '/cats/media/rannat-al-khalkhal.mp3';
      song.play().then(() => { unlocked = true; chip.hidden = true; }).catch(() => { chip.hidden = false; });
    } else { unlocked = true; chip.hidden = true; }
    try { const AC = window.AudioContext || window.webkitAudioContext; if (AC) { const c = new AC(); c.resume(); } } catch {}
  };
  act();
}
chip.onclick = unlock;
['pointerdown', 'touchstart', 'click', 'keydown'].forEach((ev) => addEventListener(ev, unlock, { passive: true }));
if (MUTE) chip.hidden = true;
else { chip.hidden = false; }

function beatWait(cb) {
  const bpm = (meta.song && meta.song.bpm) || SONG.bpm;
  const now = (song && !song.paused && isFinite(song.currentTime)) ? song.currentTime : 0;
  const target = nextBeat(now, bpm, 0.04);
  const delay = Math.max(0, Math.min(700, (target - now) * 1000));
  setTimeout(cb, delay);
}

function swapTile(id, move) {
  const t = tiles[id]; if (!t) return;
  const src = clipFor(id, move);
  if (t.cur === move && t[t.showing].src && t[t.showing].src.endsWith(src.replace(/^\//, '')) || t.cur === move) {
    return;
  }
  const next = t.showing === 'a' ? 'b' : 'a';
  const nv = t[next], ov = t[t.showing];
  if (nv.src !== new URL(src, location.href).href) nv.src = src;
  nv.loop = move === 'idle';
  nv.currentTime = 0;
  const play = () => {
    nv.classList.remove('off');
    ov.classList.add('off');
    t.showing = next;
    t.cur = move;
    nv.play().catch(() => {});
    if (move === 'idle') ov.pause();
  };
  const go = () => { if (nv.readyState >= 2) play(); else nv.addEventListener('loadeddata', play, { once: true }); };
  beatWait(go);
}

function applySnap(s) {
  snap = s;
  const groupOn = !!(s.group && s.group.on);
  grid.classList.toggle('group-on', groupOn);
  groupEl.hidden = !groupOn;
  if (groupOn) {
    const src = clipFor('group', s.group.clip || 'dabke-line');
    if (groupWant !== s.group.clip) {
      groupWant = s.group.clip;
      beatWait(() => {
        if (groupVid.src !== new URL(src, location.href).href) groupVid.src = src;
        groupVid.loop = true;
        groupVid.play().catch(() => {});
      });
    }
    groupName.textContent = s.group.gifter || '';
  } else {
    groupWant = null;
    groupVid.pause();
    groupName.textContent = '';
  }

  let spot = null;
  if (!groupOn) {
    const dancing = CAT_IDS.filter((id) => s.cats && s.cats[id] && s.cats[id].clip !== 'idle');
    if (dancing.length === 1) spot = dancing[0];
  }
  grid.classList.remove('spot-maine', 'spot-bengal', 'spot-persian', 'spot-siamese');
  if (spot) grid.classList.add('spot-' + spot);

  for (const id of CAT_IDS) {
    const st = s.cats && s.cats[id]; if (!st || !tiles[id]) continue;
    tiles[id].el.classList.toggle('on', st.clip !== 'idle');
    tiles[id].name.textContent = st.gifter || '';
    tiles[id].name.classList.toggle('on', !!(st.gifter && st.clip !== 'idle'));
    if (st.clip !== tiles[id].cur) swapTile(id, st.clip);
  }
  if (s.hearts) burstHearts();
}

let lastHearts = 0;
function burstHearts() {
  if (Date.now() - lastHearts < 400) return;
  lastHearts = Date.now();
  const box = $('hearts');
  for (let i = 0; i < 10; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = ['❤', '♥', '💖'][i % 3];
    h.style.left = (12 + Math.random() * 76) + '%';
    h.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
    h.style.animationDelay = (Math.random() * 0.3) + 's';
    box.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}

let voiceAudio = null;
function onSay(m) {
  if (MUTE || !m || !m.url) return;
  if (!voiceAudio) { voiceAudio = new Audio(); voiceAudio.setAttribute('playsinline', ''); }
  voiceAudio.src = m.url;
  voiceAudio.volume = 0.7;
  song.volume = 0.45;
  voiceAudio.play().catch(() => {});
  voiceAudio.onended = () => { song.volume = 1; };
}

function connect() {
  const ws = new WebSocket(wsUrl());
  ws.onmessage = (ev) => {
    let m; try { m = JSON.parse(ev.data); } catch { return; }
    if (m.t === 'hello') {
      if (m.lineup) meta.cats = m.lineup; else if (Array.isArray(m.cats)) meta.cats = m.cats;
      if (m.song) meta.song = m.song;
      if (m.groupGift) meta.groupGift = m.groupGift;
      if (m.settings) meta.settings = m.settings;
      if (!grid.children.length) build();
      applySnap(m);
    } else if (m.t === 's') applySnap(m);
    else if (m.t === 'say') onSay(m);
  };
  ws.onclose = () => setTimeout(connect, 1200);
  N.ws = ws;
}

const N = { ev: 0, err: 0, snaps: 0, ws: null };
window.__catsUI = {
  view: { kind: 'video' },
  world: { phase: 'dance' },
  level: 1,
  fps: 30,
  stats() { return { ev: N.ev, snaps: N.snaps }; },
  N,
  snap: () => snap,
  unlocked: () => unlocked,
};
const _apply = applySnap;
applySnap = (s) => { N.snaps++; _apply(s); };

build();
connect();
// keep the service awake while the overlay is open
setInterval(() => fetch('/healthz').catch(() => {}), 25000);
