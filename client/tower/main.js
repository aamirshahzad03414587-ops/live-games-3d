// Mira's Haunted Tower overlay: network + interpolation, renderer choice (3D, or 2D fallback), auto quality, HUD,
// Mira's voice, sound and crash breadcrumbs. iPhone Safari is the main target. Same foundation as the Battle Royale.
import { createTowerView } from './view3d.js';
import { createTowerView2D } from './view2d.js';
import { createAudio } from '../shared/audio.js';
import { startDiag } from '../shared/diag.js';
import { Tower, TFLAG, DOOR_SHIFT } from '../../public/shared/tower-sim.js';
import { makeTowerLines } from '../../public/shared/tower-lines.js';
import { THEMES, BOSS_THEME, GATE_THEME, RIDDLES, TOWER_GIFTS, KIND_ICON } from '../../public/shared/tower-data.js';
import { crowd } from '../../public/shared/crowd.js';

const qs = new URLSearchParams(location.search);
const $ = (id) => document.getElementById(id);
const IOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const PHONE = qs.get('mode') === 'phone' || (qs.get('mode') !== 'pc' && (IOS || /Android|Mobile/.test(navigator.userAgent)));
const RENDER = qs.get('render') === '1';
const LOCAL = RENDER || qs.get('local') === '1';
const KEY = qs.get('key') || '';
let fpsCap = Number(qs.get('fps')) || (PHONE ? 30 : 60);
const MUTE = qs.get('mute') === '1';
if (qs.get('clean') === '1') document.body.classList.add('clean');

// ------------------------------------------------------------------ quality levels (auto by measured FPS)
const QL = PHONE ? [
  { pr: 1.5, maxW: 780, labels: 12, particles: 1, dust: true, props: true, maxChars: 36, animLod: 1 },
  { pr: 1.25, maxW: 700, labels: 10, particles: 0.75, dust: true, props: true, maxChars: 30, animLod: 1 },
  { pr: 1.0, maxW: 600, labels: 8, particles: 0.5, dust: false, props: true, maxChars: 24, animLod: 2 },
  { pr: 0.8, maxW: 480, labels: 6, particles: 0.35, dust: false, props: false, maxChars: 16, animLod: 2 },
] : [
  { pr: 2, maxW: Number(qs.get('maxw')) || 1080, labels: 14, particles: 1, dust: true, props: true, maxChars: 60, animLod: 1 },
  { pr: 1.5, maxW: 900, labels: 12, particles: 1, dust: true, props: true, maxChars: 48, animLod: 1 },
  { pr: 1.0, maxW: 700, labels: 10, particles: 0.6, dust: false, props: true, maxChars: 36, animLod: 2 },
  { pr: 0.8, maxW: 540, labels: 8, particles: 0.4, dust: false, props: false, maxChars: 24, animLod: 2 },
];
let level = qs.has('q') ? Math.max(0, Math.min(3, Number(qs.get('q')))) : 0;
const fixedQ = qs.has('q');

// ------------------------------------------------------------------ renderer (3D first, 2D fallback)
let canvas = $('gl'), view = null, lost = 0, restored = 0, lostTimes = [], paused = false;
const hud = $('hud'), hg = hud.getContext('2d');
function makeView() {
  const want2d = qs.get('view') === '2d' || localStorage.getItem('lg_force2d') === '1';
  if (!want2d) {
    try {
      view = createTowerView(canvas, { maxChars: 60, particles: PHONE ? 700 : 1100, aa: !PHONE || IOS, preserve: RENDER });
      view.ready && view.ready.catch(() => mark('models-fail'));   // keeps the procedural look if the models can't load
      canvas.addEventListener('webglcontextlost', onLost, false);
      canvas.addEventListener('webglcontextrestored', onRestored, false);
      return;
    } catch (e) { mark('gl-fail'); }
  }
  to2D();
}
function to2D() {
  if (view && view.kind === '2d') return;
  try { view && view.dispose(); view && view.loseContext && view.loseContext(); } catch {}
  const c = document.createElement('canvas'); c.id = 'gl'; canvas.replaceWith(c); canvas = c;
  view = createTowerView2D(canvas, {}); mark('view-2d'); resize();
}
function onLost(e) {
  e.preventDefault(); lost++; paused = true; mark('ctx-lost');
  lostTimes.push(performance.now()); lostTimes = lostTimes.filter((t) => performance.now() - t < 120e3);
  showNotice();
  clearTimeout(onLost.t); onLost.t = setTimeout(() => { if (paused) { localStorage.setItem('lg_force2d', '1'); to2D(); paused = false; hideNotice(); } }, 4000);
  diag && diag.send('ctxlost');
}
function onRestored() {
  clearTimeout(onLost.t); restored++; mark('ctx-restored');
  if (lostTimes.length >= 3) { localStorage.setItem('lg_force2d', '1'); to2D(); paused = false; hideNotice(); return; }
  try { view.dispose(); } catch {}
  canvas.removeEventListener('webglcontextlost', onLost); canvas.removeEventListener('webglcontextrestored', onRestored);
  view = null; makeView(); level = Math.min(3, level + 1); resize(); paused = false; hideNotice();
}

// ------------------------------------------------------------------ layout
let cssW = 390, cssH = 844;
function resize() {
  const vw = window.innerWidth, vh = window.innerHeight, st = $('stage');
  let w = vw, h = vh;
  if (vw / vh > 0.7) { w = Math.round(Math.min(vw, vh * 9 / 16)); h = Math.round(Math.min(vh, w * 16 / 9)); }
  st.style.width = w + 'px'; st.style.height = h + 'px';
  cssW = w; cssH = h;
  document.documentElement.style.setProperty('--u', (w / 100).toFixed(3) + 'px');
  const q = QL[level], dpr = window.devicePixelRatio || 1;
  const pr = Math.min(dpr, q.pr, q.maxW / w);
  if (view) { view.resize(w, h, pr); view.setQuality(q); }
  const hp = Math.min(dpr, 2, 900 / w);
  hud.width = Math.round(w * hp); hud.height = Math.round(h * hp); hud.__pr = hp;
}
addEventListener('resize', () => { clearTimeout(resize.t); resize.t = setTimeout(resize, 120); });

// ------------------------------------------------------------------ sound
const audio = createAudio({ record: RENDER });
audio.muted = MUTE;
const chip = $('soundChip');
function tapUnlock() { audio.unlock(); setTimeout(() => { if (audio.state() === 'running') chip.hidden = true; }, 200); }
['pointerdown', 'touchstart', 'click', 'keydown'].forEach((ev) => addEventListener(ev, tapUnlock, { passive: true }));
document.addEventListener('visibilitychange', () => { if (!document.hidden) audio.resume(); });
if (!RENDER && !MUTE) { audio.unlock(); setTimeout(() => { if (audio.state() !== 'running') chip.hidden = false; }, 700); }

// ------------------------------------------------------------------ state
const roster = new Map();   // climber id -> { name, color, bot }
const lastEv = []; const mark = (s) => { lastEv.push(s); if (lastEv.length > 8) lastEv.shift(); };
const N = { ws: 0, snaps: 0, ev: 0, err: 0, say: 0 };
let snaps = [];
let offset = null, phaseStart = 0, curPhase = '', tiers = TOWER_GIFTS, board = null, tiktokState = '';
let world = { phase: 'gather', members: [], ghosts: [], tl: 0, pd: 1, floor: 0, th: -1, nd: 3, vc: [0, 0, 0], pr: -1, ch: -1, kinds: null, fuel: 100, sh: 0, mo: null, lift: 0, nth: -9, n: 0, gh: 0, hype: 0, run: 0, best: 0, ri: -1, rs: 0 };

function applyRoster(add = [], del = []) { for (const id of del) roster.delete(id); for (const r of add) roster.set(r.id, r); }

// ------------------------------------------------------------------ network (server mode)
let ws = null, wsWait = 1000;
function connect() {
  const url = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws?game=tower' + (KEY ? '&key=' + encodeURIComponent(KEY) : '');
  try { ws = new WebSocket(url); } catch { return setTimeout(connect, wsWait); }
  ws.onopen = () => {
    N.ws++; wsWait = 1000; mark('ws-open'); hideNotice();
    try { const b = JSON.parse(localStorage.getItem('lg_towerBoard') || 'null'); if (b && b.json && b.sig) ws.send(JSON.stringify({ t: 'restore', json: b.json, sig: b.sig })); } catch {}
  };
  ws.onmessage = (m) => { let d; try { d = JSON.parse(m.data); } catch { return; } onMsg(d); };
  ws.onclose = () => { ws = null; mark('ws-close'); setTimeout(connect, wsWait); wsWait = Math.min(10000, wsWait * 1.7); if (N.ws) showNotice(); };
  ws.onerror = () => {};
}
function onMsg(d) {
  switch (d.t) {
    case 'hello': roster.clear(); applyRoster(d.roster); snaps = []; offset = null; tiers = d.tiers || tiers; onBoard(d); pushSnap(d.snap); break;
    case 'roster': applyRoster(d.add, d.del); break;
    case 's': pushSnap(d); break;
    case 'say': say(d.text, d.url, d.dur); break;
    case 'banner': break;   // big words are spoken now, not shown
    case 'board': onBoard(d); break;
    case 'status': tiktokState = d.tiktok?.state || ''; $('conn').className = tiktokState === 'connected' ? 'connected' : /wait|connecting|reconnect/.test(tiktokState) ? 'waiting' : tiktokState === 'error' ? 'error' : ''; maybeTikFinity(d.tiktok); break;
  }
}
function pushSnap(s) {
  if (!s) return;
  N.snaps++;
  const at = performance.now() / 1000;
  const off = at - s.tm;
  if (offset === null || off < offset || Math.abs(off - offset) > 2) offset = off; else offset += (off - offset) * 0.02;
  if (snaps.length && s.tm < snaps[snaps.length - 1].tm - 1) { snaps = []; offset = off; }
  snaps.push({ tm: s.tm, s, done: false });
  if (snaps.length > 40) snaps.shift();
}
const DELAY = 0.16;
function netWorld(now) {
  if (!snaps.length) return world;
  const t = now - offset - DELAY;
  for (const sn of snaps) if (!sn.done && sn.tm <= t) { sn.done = true; const stale = t - sn.tm > 1.2; for (const e of sn.s.ev || []) handleEvent(e, stale); }
  let a = snaps[0], b = null;
  for (let i = 0; i < snaps.length; i++) { if (snaps[i].tm <= t) a = snaps[i]; else { b = snaps[i]; break; } }
  if (!b || b === a) return buildWorld(a.s, null, 0);
  const k = Math.max(0, Math.min(1, (t - a.tm) / Math.max(1e-3, b.tm - a.tm)));
  return buildWorld(a.s, b.s, k);
}
const pool = [], gpool = [];
function buildWorld(A, B, k) {
  // a floor change snaps (positions jump to the new room): never blend across it
  if (B && B.fl !== A.fl) B = null;
  const ms = [], gs = [];
  const bi = new Map();
  if (B) for (let i = 0; i < B.f.length; i += 6) bi.set(B.f[i], i);
  let j = 0, g = 0;
  for (let i = 0; i < A.f.length; i += 6) {
    const id = A.f[i], fl = A.f[i + 5];
    if (fl & TFLAG.ghost) { const o = gpool[g] || (gpool[g] = {}); g++; o.id = id; o.flags = fl; o.info = roster.get(id) || { name: '?', color: 0xffffff }; gs.push(o); continue; }
    const o = pool[j] || (pool[j] = {}); j++;
    o.id = id; o.x = A.f[i + 1]; o.y = A.f[i + 2]; o.z = A.f[i + 3]; o.face = A.f[i + 4]; o.flags = fl;
    const q = bi.get(id);
    if (q !== undefined && B && !(B.f[q + 5] & TFLAG.ghost)) {
      const Bf = B.f;
      o.x += (Bf[q + 1] - o.x) * k; o.y += (Bf[q + 2] - o.y) * k; o.z += (Bf[q + 3] - o.z) * k;
      let df = Bf[q + 4] - o.face; df = Math.atan2(Math.sin(df), Math.cos(df)); o.face += df * k;
    }
    o.info = roster.get(id) || { name: '?', color: 0xffffff };
    ms.push(o);
  }
  const S = B && k > 0.5 ? B : A;
  if (S.ph !== curPhase) { curPhase = S.ph; phaseStart = clockNow(); }
  let mo = S.mo;
  if (mo && B && A.mo && B.mo) mo = { ...S.mo, hp: A.mo.hp + (B.mo.hp - A.mo.hp) * k };
  world = { phase: S.ph, members: ms, ghosts: gs, tl: S.tl, pd: S.pd, floor: S.fl, th: S.th, nd: S.nd, vc: S.vc, pr: S.pr, ch: S.ch, kinds: S.kinds, fuel: B ? A.fuel + (B.fuel - A.fuel) * k : A.fuel, sh: S.sh, mo, lift: S.lift, nth: S.nth, n: S.n, gh: S.gh, hype: S.hype, run: S.run, best: S.best, ri: S.ri, rs: S.rs, pdc: S.pdc, pk: S.pk, phaseStart };
  return world;
}

// ------------------------------------------------------------------ local mode (?local=1, demo renders)
let sim = null, localCrowd = null, ann = null;
const sayQ = [];
let sayBusyUntil = 0, sayPending = 0;
function startLocal() {
  const o = {};
  for (const k of ['gatherSeconds', 'enterSeconds', 'voteSeconds', 'revealSeconds', 'treasureSeconds', 'trapSeconds', 'monsterSeconds', 'riddleSeconds', 'bossSeconds', 'victorySeconds', 'climbSeconds', 'endSeconds', 'minParty', 'startFloor', 'bossEvery', 'fuelDrain', 'monsterHpMul', 'dmgMul', 'topFloor']) if (qs.has(k)) o[k] = Number(qs.get(k));
  if (qs.get('forceKind')) o.forceKind = String(qs.get('forceKind')).slice(0, 12);
  if (qs.get('forceTheme')) o.forceTheme = String(qs.get('forceTheme')).slice(0, 12);
  if (qs.get('bots') === '0') o.bots = false;
  let seed = Number(qs.get('seed') || 7);
  const rng = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  sim = new Tower(o, RENDER ? rng : Math.random);
  ann = makeTowerLines({ nameOf: (id) => sim.byId.get(id)?.name || null, rng: RENDER ? rng : Math.random });
  if (qs.get('crowd')) localCrowd = crowd(qs.get('crowd'), RENDER ? rng : Math.random);
  window.__input = (ev) => sim.input(ev);
  window.__tower = sim;
}
let localAcc = 0;
function localWorld(dt, now) {
  if (localCrowd) for (const ev of localCrowd.tick(dt)) sim.input(ev);
  localAcc += dt;
  while (localAcc >= 0.05) { localAcc -= 0.05; sim.step(0.05); }
  const r = sim.drainRoster(); applyRoster(r.add, r.del);
  const ev = sim.drain();
  for (const l of ann.lines(ev, sim.t)) localSay(l, now);
  const s = sim.snapshot();
  for (const e of ev) handleEvent(e, false);
  if (ev.some((e) => e.k === 'end' || e.k === 'rwin' || e.k === 'mwin')) board = { session: sim.board(8), all: [], sessionBest: sim.sessionBest };
  return buildWorld(s, null, 0);
}
function localSay(l, now) {
  const item = { ...l, at: now, p: null };
  item.p = fetch('/api/say?voice=mira&text=' + encodeURIComponent(l.text)).then((r) => r.json()).catch(() => ({ url: null }));
  sayPending++; item.p.finally(() => sayPending--);
  sayQ.push(item); sayQ.sort((a, b) => b.pri - a.pri || a.at - b.at);
  while (sayQ.length > 3) sayQ.pop();
}
async function pumpLocalSay(now) {
  if (now < sayBusyUntil || !sayQ.length || pumpLocalSay.busy) return;
  const it = sayQ.shift();
  if (!it.win && !it.riddle && now - it.at > (it.pri >= 7 ? 9 : 6)) return;
  pumpLocalSay.busy = true;
  const r = await it.p; pumpLocalSay.busy = false;
  const t = clockNow();
  const dur = r.dur || Math.min(6, 0.9 + it.text.length / 15);
  say(it.text, r.url, dur); sayBusyUntil = t + dur + 0.25;
}

// ------------------------------------------------------------------ events -> juice, sound, HUD
const nameOf = (id) => roster.get(id)?.name || '?';
const colorOf = (id) => '#' + ((roster.get(id)?.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
let voteSqueakT = 0, hitSfxT = 0, solved = null;
function handleEvent(e, stale) {
  N.ev++;
  if (!stale && view && !paused) try { view.fx(e, world); } catch (err) { N.err++; }
  const S = (k, v) => { if (!stale) audio.sfx(k, audio.now(), v); };
  switch (e.k) {
    case 'gather': S('wind'); solved = null; break;
    case 'floor': S(e.boss ? 'bell' : 'creak'); if (e.boss) S('organ'); solved = null; break;
    case 'vote':
      if (e.start) S('chime');
      else if (clockNow() - voteSqueakT > 0.12) { voteSqueakT = clockNow(); S('squeak', 0.35); }
      break;
    case 'prophecy': S('chime'); break;
    case 'reveal': S('creak'); S(({ treasure: 'coin', trap: 'trap', monster: 'roar', riddle: 'organ' })[e.kinds[e.door]] || 'creak'); break;
    case 'treasure': S('coin'); S('fanfare', 0.5); break;
    case 'trap': S('trap'); if (e.trap === 'shards' || e.trap === 'chandelier') S('shatter'); if (e.blocked) S('shield'); break;
    case 'fall': S('ghost', 0.6); break;
    case 'rise': S('heal', 0.6); break;
    case 'monster': S('roar'); S(e.boss ? 'organ' : 'heart'); break;
    case 'hit': {
      if (clockNow() - hitSfxT > 0.06) { hitSfxT = clockNow(); S(e.c ? 'crit' : 'punch', 0.55); }
      break;
    }
    case 'matk': S(e.slam ? 'boom' : 'roar', e.slam ? 1 : 0.5); break;
    case 'mwin': S('fanfare'); S('cheer'); break;
    case 'mlose': S('trap'); S('ghost'); break;
    case 'riddle': S('organ'); S('chime'); break;
    case 'rwin': S('fanfare'); S('coin'); solved = { id: e.id, a: e.a }; break;
    case 'rfail': S('ghost'); solved = { id: 0, a: e.a }; break;
    case 'climb': S(e.lift ? 'power' : 'creak', 0.6); break;
    case 'gift': S('coin'); break;   // gifts are shown as VFX in the 3D view and thanked by the voice
    case 'summon': S('bell'); S('organ'); break;
    case 'follow': S('power'); break;
    case 'share': S('power'); break;
    case 'blaze': S('heal'); S('cheer'); break;
    case 'lowfuel': S('heart'); break;
    case 'end': S(e.reason === 'top' ? 'fanfare' : 'bell'); if (e.reason === 'top') S('cheer'); showEnd(e); break;
  }
  if (e.k !== 'hit' && e.k !== 'vote') mark(e.k);
}
function clockNow() { return RENDER ? vclock : performance.now() / 1000; }
function flash(op = 0.7) { const f = $('flash'); f.style.transition = 'none'; f.style.opacity = String(op); void f.offsetWidth; f.style.transition = 'opacity 0.9s ease-out'; f.style.opacity = '0'; }
// Mira speaks; nothing is written on screen (her billboard glows while she talks)
let sayT = 0;
function say(text, url, dur) {
  N.say++;
  const ms = Math.max(1800, (dur || 2) * 1000 + 600);
  view && view.speaking(true);
  clearTimeout(sayT); sayT = later(() => { view && view.speaking(false); }, ms);
  if (url) audio.voice(url, dur);
}
const shortName = (n, max = 10) => { n = String(n || '?').replace(/\s+/g, ' ').trim(); return [...n].length > max ? [...n].slice(0, max - 1).join('') + '…' : n; };
// the end card: only the top climber's name (Mira says the rest)
function showEnd(e) {
  const top = (e.top || []).filter((id) => roster.has(id));
  if (!top.length) return;
  $('winName').textContent = shortName(nameOf(top[0]), 18); $('winName').style.color = colorOf(top[0]);
  const w = $('winner'); w.hidden = false; w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
}
function onBoard(d) {
  if (!d || (!d.session && !d.all)) return;
  board = d;
  if (d.signed) try { localStorage.setItem('lg_towerBoard', JSON.stringify(d.signed)); } catch {}
}

// ------------------------------------------------------------------ HUD canvas: almost no words. Short name tags, a vote bar + icon
// under each door (the number itself is carved above the door in 3D), and one small ring: time left + lantern oil.
let ringPhase = '', ringMax = {};
function drawHud(now) {
  const pr = hud.__pr || 1, u = cssW / 100;
  hg.setTransform(1, 0, 0, 1, 0, 0); hg.clearRect(0, 0, hud.width, hud.height); hg.setTransform(pr, 0, 0, pr, 0, 0);
  if (!view || paused) return;
  const w = world, q = QL[level];
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.lineJoin = 'round';
  const F = (wt, px) => `${wt} ${px}px -apple-system, "Segoe UI", Roboto, sans-serif`;
  if (w.nd && ['vote', 'reveal', 'treasure', 'trap', 'monster', 'riddle', 'victory', 'enter'].includes(w.phase)) {
    const tot = (w.vc || []).reduce((a, b) => a + b, 0) || 1, mx = Math.max(0, ...(w.vc || [0]));
    for (let i = 0; i < w.nd; i++) {
      const p = view.doorTop(i); if (!p || !p.vis) continue;
      const y = Math.max(cssH * 0.3, Math.min(cssH * 0.55, p.y - u * 3));
      if (w.phase === 'vote' || w.phase === 'enter') {
        const c = w.vc ? w.vc[i] || 0 : 0, lead = c > 0 && c === mx, bw = u * 13;
        hg.fillStyle = 'rgba(10,4,24,0.55)'; rr(p.x - bw / 2, y, bw, u * 1.3, u * 0.65); hg.fill();
        hg.fillStyle = lead ? '#ffd36a' : 'rgba(255,230,170,0.75)'; rr(p.x - bw / 2, y, Math.max(u * 1.3, bw * (c / tot)), u * 1.3, u * 0.65); if (c) hg.fill();
        if (w.pr === i) { const pulse = 1 + Math.sin(now * 6) * 0.08; hg.font = F(900, u * 7 * pulse); hg.fillText('🔮', p.x, y - u * 5); }
      } else if (w.kinds && w.kinds[i]) {
        const chosen = w.ch === i;
        hg.globalAlpha = chosen ? 1 : 0.5;
        hg.font = F(900, u * (chosen ? 8 : 5)); hg.fillText(KIND_ICON[w.kinds[i]] || '', p.x, y - u * 2);
        hg.globalAlpha = 1;
      }
    }
  }
  drawTags(now, u, q, F);
  drawRing(now, u);
  hg.globalAlpha = 1;
}
function drawTags(now, u, q, F) {
  const w = world;
  const drawn = (view.drawn() || []).filter((d) => !d.ghost);
  const cand = drawn.map((f) => ({ f, s: (f.flags & TFLAG.cmd ? 8 : 0) + (f.flags & TFLAG.crown ? 6 : 0) + (f.flags & TFLAG.gift ? 5 : 0) + (f.flags & TFLAG.bot ? 0 : 3) + (w.pdc === f.id ? 9 : 0) }));
  cand.sort((a, b) => b.s - a.s);
  const crowded = cand.length > 10;
  const fs = Math.round(u * (crowded ? 2.3 : 2.6));
  const placed = [];
  let shown = 0;
  for (const { f } of cand) {
    if (shown >= q.labels) break;
    const p = view.project(f.x, f.y, f.z); if (!p.vis) continue;
    if (p.x < u * 4 || p.x > cssW - u * 4 || p.y < cssH * 0.24 || p.y > cssH * 0.8) continue;
    if (placed.some((o) => Math.abs(o.x - p.x) < u * 10 && Math.abs(o.y - p.y) < u * 3.4)) continue;
    placed.push(p); shown++;
    const info = f.info || {}, bot = f.flags & TFLAG.bot;
    const name = (f.flags & TFLAG.crown ? '👑' : '') + shortName(bot ? String(info.name || '').replace(/^Bot\s+/i, '') : info.name, crowded ? 8 : 10) + (f.flags & TFLAG.life ? '♥' : '');
    // the later a tag is in priority order, the fainter it is (crowds fade into the scene)
    const alpha = (bot ? 0.55 : 0.92) * (1 - Math.min(0.5, shown / (q.labels * 2)));
    hg.globalAlpha = alpha;
    hg.font = F(700, fs);
    const tw = Math.min(hg.measureText(name).width, u * 22), h = fs * 1.3, y = p.y - h * 0.4;
    hg.fillStyle = 'rgba(8,4,20,0.5)'; rr(p.x - tw / 2 - u, y - h / 2, tw + u * 2, h, h / 2); hg.fill();
    hg.fillStyle = '#' + ((info.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
    hg.fillText(name, p.x, y + 1, u * 22);
  }
  hg.globalAlpha = 1;
}
// top-centre ring: the arc is time left in this phase, the outer amber arc is lantern oil; the centre is an icon
// (or the last-five-seconds countdown). A thin bar under it is the monster's health.
function drawRing(now, u) {
  const w = world, ph = w.phase;
  if (ph !== ringPhase) { ringPhase = ph; ringMax[ph] = Math.max(1, w.tl || 1); }
  if (w.tl > ringMax[ph]) ringMax[ph] = w.tl;
  const cx = cssW / 2, cy = cssH * 0.135, r = u * 4.6;
  const timed = ['gather', 'vote', 'monster', 'boss', 'riddle'].includes(ph) && w.tl > 0;
  const k = timed ? Math.max(0, Math.min(1, w.tl / (ringMax[ph] || 1))) : 1;
  const fuel = Math.max(0, Math.min(100, w.fuel || 0)) / 100;
  const urgent = timed && (ph === 'vote' || ph === 'gather') && w.tl <= 5 && !(ph === 'gather' && w.n < 1);
  const fight = (ph === 'monster' || ph === 'boss') && w.mo;
  const col = fight ? '#ff6b8b' : ph === 'riddle' ? '#c77dff' : ph === 'vote' ? '#ffd36a' : '#7ee0ff';
  const pulse = urgent ? 1 + 0.12 * Math.max(0, Math.sin((w.tl % 1) * Math.PI)) : 1;
  hg.save(); hg.translate(cx, cy); hg.scale(pulse, pulse);
  hg.fillStyle = 'rgba(10,6,24,0.55)'; hg.beginPath(); hg.arc(0, 0, r + u * 2.1, 0, Math.PI * 2); hg.fill();
  hg.lineCap = 'round';
  hg.lineWidth = u * 1.1;
  hg.strokeStyle = 'rgba(255,255,255,0.16)'; hg.beginPath(); hg.arc(0, 0, r, 0, Math.PI * 2); hg.stroke();
  hg.strokeStyle = col; hg.beginPath(); hg.arc(0, 0, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * k); hg.stroke();
  // lantern oil (flickers red when low)
  const low = fuel < 0.25 && ph !== 'gather' && ph !== 'end';
  hg.lineWidth = u * 0.7;
  hg.strokeStyle = 'rgba(255,180,90,0.18)'; hg.beginPath(); hg.arc(0, 0, r + u * 1.35, 0, Math.PI * 2); hg.stroke();
  hg.strokeStyle = low ? (Math.sin(now * 10) > 0 ? '#ff4a4a' : '#ffb36b') : '#ffb36b';
  if (fuel > 0) { hg.beginPath(); hg.arc(0, 0, r + u * 1.35, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * fuel); hg.stroke(); }
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.fillStyle = '#fff';
  if (urgent) { hg.font = `900 ${Math.round(u * 4.4)}px -apple-system, "Segoe UI", Roboto, sans-serif`; hg.fillText(String(Math.ceil(w.tl)), 0, u * 0.3); }
  else { hg.font = `${Math.round(u * 4)}px sans-serif`; hg.fillText(ph === 'riddle' ? '❓' : fight ? (w.mo.b ? '👻' : w.mo.k === 'spider' ? '🕷️' : w.mo.k === 'mimic' ? '📦' : '👻') : ph === 'end' ? '👑' : '🏮', 0, u * 0.3); }
  hg.restore();
  // shields: one small icon per charge beside the ring
  if (w.sh) { hg.font = `${Math.round(u * 3.2)}px sans-serif`; for (let i = 0; i < Math.min(3, w.sh); i++) hg.fillText('🛡️', cx + r + u * (5 + i * 3.6), cy); }
  if (fight) {
    const bw = u * 26, f2 = Math.max(0, Math.min(1, w.mo.hp / w.mo.max)), y = cy + r + u * 4;
    hg.fillStyle = 'rgba(10,6,24,0.6)'; rr(cx - bw / 2, y, bw, u * 1.4, u * 0.7); hg.fill();
    hg.fillStyle = w.mo.b ? '#c77dff' : '#ff4a6a'; if (f2 > 0) { rr(cx - bw / 2, y, bw * f2, u * 1.4, u * 0.7); hg.fill(); }
  }
}
function rr(x, y, w, h, r) { hg.beginPath(); hg.moveTo(x + r, y); hg.arcTo(x + w, y, x + w, y + h, r); hg.arcTo(x + w, y + h, x, y + h, r); hg.arcTo(x, y + h, x, y, r); hg.arcTo(x, y, x + w, y, r); hg.closePath(); }

// ------------------------------------------------------------------ DOM HUD (4x a second): sounds + body classes only
let lastCount = -1;
function domHud(now) {
  const w = world, body = document.body;
  const fight = w.phase === 'monster' || w.phase === 'boss', rid = w.phase === 'riddle' && w.ri >= 0;
  const fuel = Math.max(0, Math.min(100, w.fuel));
  body.classList.toggle('dark', fuel < 20 && w.phase !== 'gather');
  body.classList.toggle('voting', ['enter', 'vote', 'reveal'].includes(w.phase));
  body.classList.toggle('fighting', fight && !!w.mo); body.classList.toggle('riddling', rid);
  // countdown sounds for the last 5 s of a vote (heartbeats) and of the gathering; the ring shows the number
  if ((w.phase === 'vote' || w.phase === 'gather') && w.tl <= 5.0 && w.tl > 0 && !(w.phase === 'gather' && w.n < 1)) {
    const n = Math.ceil(w.tl);
    if (n !== lastCount) { lastCount = n; audio.sfx(w.phase === 'vote' && n <= 3 ? 'heart' : 'beep'); }
  } else lastCount = -1;
  if (w.phase !== 'end') $('winner').hidden = true;
}

// ------------------------------------------------------------------ timers that follow the virtual clock in render mode
const timers = [];
function later(fn, ms) { if (!RENDER) return setTimeout(fn, ms); const t = { at: vclock + ms / 1000, fn }; timers.push(t); return t; }
function runTimers() { for (let i = timers.length - 1; i >= 0; i--) if (timers[i].at <= vclock) { const t = timers.splice(i, 1)[0]; t.fn(); } }
function showNotice() { $('notice').hidden = false; }   // a small spinner icon, no words
function hideNotice() { $('notice').hidden = true; }

// ------------------------------------------------------------------ main loop + auto quality
let lastFrame = 0, frames = 0, fpsT = 0, fps = 0, lowWin = 0, highWin = 0, domT = 0, windT = 6;
const banned = new Map();
function tick(dt, now) {
  if (LOCAL) world = localWorld(dt, now); else world = netWorld(now);
  if (LOCAL) pumpLocalSay(now);
  if (view && !paused) { try { view.frame(world, dt, now); } catch (e) { N.err++; mark('frame-err'); if (N.err > 30) to2D(); } }
  if (view && view.thunder()) { audio.sfx('thunder'); flash(0.35); }
  if (now > windT) { windT = now + 11 + Math.random() * 9; if (world.phase !== 'monster' && world.phase !== 'boss') audio.sfx('wind', audio.now(), 0.5); }
  drawHud(now);
  if (now - domT > 0.25) { domT = now; domHud(now); }
}
function autoQuality(now) {
  frames++;
  if (now - fpsT < 2) return;
  fps = frames / (now - fpsT); frames = 0; fpsT = now;
  if (fixedQ || RENDER || document.hidden) return;
  if (now < 6) return;
  if (fps < fpsCap * 0.8 && level < 3) { if (++lowWin >= 2) { banned.set(level, (banned.get(level) || 0) + 1); level++; lowWin = 0; highWin = 0; resize(); mark('q' + level); } }
  else { lowWin = 0; if (fps >= fpsCap * 0.95 && level > 0 && (banned.get(level - 1) || 0) < 2) { if (++highWin >= 6) { level--; highWin = 0; resize(); mark('q' + level); } } else highWin = 0; }
}
function loop(ts) {
  requestAnimationFrame(loop);
  if (document.hidden) return;
  const now = ts / 1000;
  if (lastFrame && now - lastFrame < 1 / fpsCap - 0.004) return;
  const dt = Math.min(0.1, lastFrame ? now - lastFrame : 1 / fpsCap); lastFrame = now;
  tick(dt, now);
  autoQuality(now);
}

// render mode: the demo tool drives a virtual clock frame by frame
let vclock = 0;
if (RENDER) {
  audio.clock = () => vclock;
  window.__render = {
    async frame(dt) {
      vclock += dt; runTimers();
      if (view && view.ready && !view.loaded && !view.error) await view.ready.catch(() => {});
      for (let i = 0; i < 100 && (pumpLocalSay.busy || (sayQ.length && sayQ[0].p && sayPending)); i++) await new Promise((r) => setTimeout(r, 30));
      tick(dt, vclock);
      return { phase: world.phase, n: world.n, floor: world.floor, fuel: world.fuel };
    },
    mix: (sec) => audio.mix(sec),
    stats: () => view.stats(),
  };
}

// TikFinity (PC + LIVE Studio only; never on iPhone): forwards events through the server when the URL has the key
let tfOn = false;
function maybeTikFinity(t) {
  if (tfOn || IOS || LOCAL || !KEY || !t || !/tikfinity|both/.test(t.source || '')) return;
  tfOn = true;
  const s = document.createElement('script'); s.src = '/shared/tikfinity.js';
  s.onload = () => { const TF = window.TikFinity; TF.setSink((ev) => { if (!ws || ws.readyState !== 1) return; if (ev.type === 'status') ws.send(JSON.stringify({ t: 'tf-status', state: ev.mode === 'live' ? 'connected' : 'waiting', message: ev.message })); else ws.send(JSON.stringify({ t: 'tf', ev })); }); TF.connect(); };
  document.head.appendChild(s);
}

// ------------------------------------------------------------------ boot
let diag = null;
makeView();
resize();

if (LOCAL) { startLocal(); board = { session: [], all: [] }; } else connect();
if (!RENDER) {
  requestAnimationFrame(loop);
  setInterval(() => { if (!document.hidden && !LOCAL) fetch('/healthz?overlay=1', { cache: 'no-store' }).catch(() => {}); }, 4 * 60e3);
  diag = startDiag(() => ({
    mode: { phone: PHONE, ios: IOS, kind: view ? view.kind : 'none', game: 'tower', q: level, fps: Math.round(fps * 10) / 10, cap: fpsCap },
    cv: { w: canvas.width, h: canvas.height }, gl: { ...(view ? view.stats() : {}), lost, restored },
    n: { ...N }, last: lastEv.slice(), audio: { unlocked: audio.state() === 'running', ctx: audio.state(), played: audio.played, fails: audio.fails },
  }), { off: qs.get('diag') === '0' || LOCAL });
}
window.__towerUI = { get world() { return world; }, get level() { return level; }, get fps() { return fps; }, get view() { return view; }, stats: () => (view ? view.stats() : null), N, audio, roster };
