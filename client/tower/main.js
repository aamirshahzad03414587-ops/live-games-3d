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
  { pr: 1.5, maxW: 780, labels: 22, particles: 1, dust: true, props: true },
  { pr: 1.25, maxW: 700, labels: 16, particles: 0.75, dust: true, props: true },
  { pr: 1.0, maxW: 600, labels: 12, particles: 0.5, dust: false, props: true },
  { pr: 0.8, maxW: 480, labels: 9, particles: 0.35, dust: false, props: false },
] : [
  { pr: 2, maxW: Number(qs.get('maxw')) || 1080, labels: 28, particles: 1, dust: true, props: true },
  { pr: 1.5, maxW: 900, labels: 22, particles: 1, dust: true, props: true },
  { pr: 1.0, maxW: 700, labels: 16, particles: 0.6, dust: false, props: true },
  { pr: 0.8, maxW: 540, labels: 11, particles: 0.4, dust: false, props: false },
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
  showNotice('Graphics reset… recovering');
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
  ws.onclose = () => { ws = null; mark('ws-close'); setTimeout(connect, wsWait); wsWait = Math.min(10000, wsWait * 1.7); if (N.ws) showNotice('Reconnecting…'); };
  ws.onerror = () => {};
}
function onMsg(d) {
  switch (d.t) {
    case 'hello': roster.clear(); applyRoster(d.roster); snaps = []; offset = null; tiers = d.tiers || tiers; renderGifts(); onBoard(d); pushSnap(d.snap); break;
    case 'roster': applyRoster(d.add, d.del); break;
    case 's': pushSnap(d); break;
    case 'say': say(d.text, d.url, d.dur); break;
    case 'banner': banner(d.text); break;
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
  if (l.banner) banner(l.banner);
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
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const NB = (id) => `<span style="color:${colorOf(id)}">${esc(nameOf(id))}</span>`;
const dmgNums = [];
let voteSqueakT = 0, hitSfxT = 0, solved = null;
function handleEvent(e, stale) {
  N.ev++;
  if (!stale && view && !paused) try { view.fx(e, world); } catch (err) { N.err++; }
  const S = (k, v) => { if (!stale) audio.sfx(k, audio.now(), v); };
  switch (e.k) {
    case 'gather': S('wind'); $('feed').innerHTML = ''; solved = null; break;
    case 'floor': S(e.boss ? 'bell' : 'creak'); if (e.boss) S('organ'); solved = null; break;
    case 'vote':
      if (e.start) S('chime');
      else if (clockNow() - voteSqueakT > 0.12) { voteSqueakT = clockNow(); S('squeak', 0.35); }
      break;
    case 'prophecy': S('chime'); toast('prophecy', `🔮 Door ${e.door + 1} is SAFE`, e.banked ? 'Mira kept a prophecy for you' : 'the cards have spoken'); break;
    case 'reveal': S('creak'); S(({ treasure: 'coin', trap: 'trap', monster: 'roar', riddle: 'organ' })[e.kinds[e.door]] || 'creak'); break;
    case 'treasure': S('coin'); S('fanfare', 0.5); break;
    case 'trap': S('trap'); if (e.trap === 'shards' || e.trap === 'chandelier') S('shatter'); if (e.blocked) S('shield'); break;
    case 'fall': S('ghost', 0.6); if (!stale) feed('fall', `👻 ${NB(e.id)} fell`); break;
    case 'rise': S('heal', 0.6); if (!stale) feed('rise', `✨ ${NB(e.id)} rises again`); break;
    case 'monster': S('roar'); S(e.boss ? 'organ' : 'heart'); break;
    case 'hit': {
      if (clockNow() - hitSfxT > 0.06) { hitSfxT = clockNow(); S(e.c ? 'crit' : 'punch', 0.55); }
      if (!stale && dmgNums.length < 28) dmgNums.push({ v: e.d, c: e.c, t0: clockNow(), j: (Math.random() - 0.5) * 2 });
      break;
    }
    case 'matk': S(e.slam ? 'boom' : 'roar', e.slam ? 1 : 0.5); break;
    case 'mwin': S('fanfare'); S('cheer'); if (!stale && e.top) feed('win', `⚔️ ${NB(e.top)} struck hardest`); break;
    case 'mlose': S('trap'); S('ghost'); break;
    case 'riddle': S('organ'); S('chime'); break;
    case 'rwin': S('fanfare'); S('coin'); solved = { id: e.id, a: e.a }; if (!stale) feed('win', `❓ ${NB(e.id)} solved it: <b>${esc(e.a)}</b>`); break;
    case 'rfail': S('ghost'); solved = { id: 0, a: e.a }; break;
    case 'climb': S(e.lift ? 'power' : 'creak', 0.6); break;
    case 'gift': S('coin'); giftToast(e); break;
    case 'summon': S('bell'); S('organ'); break;
    case 'follow': S('power'); toast('perk', `➕ ${esc(nameOf(e.id))} followed`, '→ spare life'); break;
    case 'share': S('power'); toast('perk', `🔁 ${esc(nameOf(e.id))} shared`, '→ spare life + oil'); break;
    case 'blaze': S('heal'); S('cheer'); toast('perk', '❤️ LANTERNS BLAZE!', e.rescued ? `${esc(nameOf(e.rescued))} rises + full glow` : 'oil refilled'); break;
    case 'lowfuel': S('heart'); break;
    case 'end': S(e.reason === 'top' ? 'fanfare' : 'bell'); if (e.reason === 'top') S('cheer'); showEnd(e); break;
  }
  if (e.k !== 'hit' && e.k !== 'vote') mark(e.k);
}
function giftToast(e) {
  const t = tiers.find((x) => x.id === e.tier) || {};
  let sub = `→ ${t.label || e.tier}`;
  if (e.tier === 'prophecy') sub = e.door !== undefined ? `→ 🔮 door ${e.door + 1} is safe` : e.banked ? '→ 🔮 prophecy saved for the next vote' : '→ 🔮 + lantern oil';
  if (e.tier === 'shield') sub = `→ 🛡️ shield ×${e.shields}`;
  if (e.tier === 'rescue') sub = `→ 💖 ${e.n || 0} fallen rise + oil`;
  if (e.tier === 'skip') sub = e.hitBoss ? '→ 🪄 massive hit!' : e.blessing ? '→ 🪄 blessing: oil + rescues' : '→ 🪄 Mira\'s lift: skip a floor';
  if (e.tier === 'boss') sub = e.hitBoss ? '→ 👻 crushing blow!' : e.blessing ? '→ 👻 blessing: all fallen rise' : '→ 👻 GHOST BOSS incoming';
  toast(e.tier, `${t.icon || '🎁'} ${esc(nameOf(e.id))} sent ${esc(e.giftName || 'a gift')}`, sub);
}
function clockNow() { return RENDER ? vclock : performance.now() / 1000; }
function feed(cls, html) {
  const el = document.createElement('div'); el.className = 'k ' + cls; el.innerHTML = html;
  const f = $('feed'); f.prepend(el); while (f.children.length > 3) f.lastChild.remove();
}
function toast(kind, title, sub) {
  const el = document.createElement('div'); el.className = 't ' + kind; el.innerHTML = `${title}<small>${sub}</small>`;
  const t = $('toasts'); t.prepend(el); while (t.children.length > 2) t.lastChild.remove();
  later(() => el.remove(), 3800);
}
let bannerT = 0;
function banner(text) {
  const b = $('banner'); b.hidden = false; b.classList.remove('show'); void b.offsetWidth; b.textContent = text; b.classList.add('show');
  clearTimeout(bannerT); bannerT = later(() => { b.hidden = true; }, 1650);
}
function flash(op = 0.7) { const f = $('flash'); f.style.transition = 'none'; f.style.opacity = String(op); void f.offsetWidth; f.style.transition = 'opacity 0.9s ease-out'; f.style.opacity = '0'; }
let sayT = 0;
function say(text, url, dur) {
  N.say++;
  const el = $('say'); el.hidden = false; el.className = 'mira';
  el.innerHTML = `<img src="/assets/mira-face.jpg" alt=""><div class="txt"><span class="who">🔮 MYSTIC MIRA</span>${esc(text)}</div>`;
  const ms = Math.max(1800, (dur || 2) * 1000 + 600);
  view && view.speaking(true);
  clearTimeout(sayT); sayT = later(() => { el.hidden = true; view && view.speaking(false); }, ms);
  if (url) audio.voice(url, dur);
}
function showEnd(e) {
  const w = $('winner');
  $('winTitle').textContent = e.reason === 'top' ? '👑 THE TOP OF THE TOWER!' : e.reason === 'dark' ? `🕯️ LIGHTS OUT · FLOOR ${e.floor}` : `👻 ALL FALLEN · FLOOR ${e.floor}`;
  const top = (e.top || []).filter((id) => roster.has(id));
  if (top.length) { $('winName').textContent = nameOf(top[0]); $('winName').style.color = colorOf(top[0]); $('winSub').textContent = (top.length > 1 ? `with ${top.slice(1, 3).map(nameOf).join(' & ')} · ` : '') + (roster.get(top[0])?.bot ? 'bots led the climb – comment to beat them!' : 'top climber! 🎉'); }
  else { $('winName').textContent = 'The tower wins'; $('winName').style.color = '#d08cff'; $('winSub').textContent = 'comment to start a new climb'; }
  w.hidden = false; w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
}
function renderGifts() {
  $('gifts').innerHTML = [...tiers].reverse().map((t) => `<div><span>${t.icon} ${esc(t.label)}</span><b>${t.min}🪙</b></div>`).join('');
}
function onBoard(d) {
  if (!d || (!d.session && !d.all)) return;
  board = d;
  if (d.signed) try { localStorage.setItem('lg_towerBoard', JSON.stringify(d.signed)); } catch {}
}
let boardMode = 0, boardFlip = 0;
function renderBoard(now) {
  const show = ['gather', 'end', 'climb', 'treasure'].includes(world.phase);
  const el = $('board'); el.hidden = !show; if (!show || !board) return;
  if (now - boardFlip > 7) { boardFlip = now; boardMode ^= 1; }
  const useAll = boardMode && board.all && board.all.length;
  const list = (useAll ? board.all : board.session) || [];
  const best = useAll ? board.bestFloor : board.sessionBest;
  const title = (useAll ? '👑 ALL-TIME CLIMBERS' : "🏰 TODAY'S CLIMBERS") + (best ? ` · best F${best}` : '');
  const html = list.length ? list.slice(0, 5).map((p) => `<li><span class="nm">${esc(p.name)}</span><span class="sc">${p.pts}✨${(p.best || p.floors) ? ' F' + (p.best || p.floors) : ''}</span></li>`).join('') : '';
  const key = title + html;
  if (el.__k === key) return; el.__k = key;
  $('boardTitle').textContent = title;
  $('boardList').innerHTML = html || '<div class="empty">No climbers yet – comment to grab a lantern! 🏮</div>';
}

// ------------------------------------------------------------------ HUD canvas: names, door votes, damage numbers
function drawHud(now) {
  const pr = hud.__pr || 1, u = cssW / 100;
  hg.setTransform(1, 0, 0, 1, 0, 0); hg.clearRect(0, 0, hud.width, hud.height); hg.setTransform(pr, 0, 0, pr, 0, 0);
  if (!view || paused) return;
  const w = world, q = QL[level];
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.lineJoin = 'round';
  const F = (wt, px) => `${wt} ${px}px -apple-system, "Segoe UI", Roboto, sans-serif`;
  // door plaques: live vote counts + bars, the 🔮 SAFE marker, and the outcome icons after the reveal
  if (w.nd && ['vote', 'reveal', 'treasure', 'trap', 'monster', 'riddle', 'victory', 'enter'].includes(w.phase)) {
    const tot = (w.vc || []).reduce((a, b) => a + b, 0) || 1;
    for (let i = 0; i < w.nd; i++) {
      const p = view.doorTop(i); if (!p || !p.vis) continue;
      const y = Math.max(cssH * 0.37, Math.min(cssH * 0.62, p.y));
      if (w.phase === 'vote' || w.phase === 'enter') {
        const c = w.vc ? w.vc[i] || 0 : 0, lead = c > 0 && c === Math.max(...w.vc);
        const bw = u * 15, bh = u * 7.2;
        hg.fillStyle = lead ? 'rgba(120,50,200,0.92)' : 'rgba(20,8,40,0.82)'; rr(p.x - bw / 2, y - bh, bw, bh, u * 2); hg.fill();
        hg.strokeStyle = lead ? '#ffd36a' : 'rgba(255,255,255,0.35)'; hg.lineWidth = u * 0.5; hg.stroke();
        hg.fillStyle = '#ffd36a'; hg.font = F(900, u * 4.6); hg.fillText(String(i + 1), p.x - bw * 0.24, y - bh * 0.52);
        hg.fillStyle = '#fff'; hg.font = F(900, u * 3.6); hg.fillText(String(c), p.x + bw * 0.2, y - bh * 0.52);
        hg.fillStyle = 'rgba(255,255,255,0.18)'; rr(p.x - bw / 2 + u, y - u * 1.6, bw - u * 2, u * 0.9, u * 0.45); hg.fill();
        hg.fillStyle = '#ffd36a'; rr(p.x - bw / 2 + u, y - u * 1.6, (bw - u * 2) * (c / tot), u * 0.9, u * 0.45); hg.fill();
        if (w.pr === i) { const pulse = 1 + Math.sin(now * 6) * 0.06; hg.font = F(900, u * 3.6 * pulse); hg.lineWidth = u * 0.9; hg.strokeStyle = '#2a0050'; hg.strokeText('🔮 SAFE', p.x, y - bh - u * 3); hg.fillStyle = '#e8c8ff'; hg.fillText('🔮 SAFE', p.x, y - bh - u * 3); }
      } else if (w.kinds && w.kinds[i]) {
        const chosen = w.ch === i;
        hg.globalAlpha = chosen ? 1 : 0.6;
        hg.font = F(900, u * (chosen ? 8 : 5.5)); hg.fillText(KIND_ICON[w.kinds[i]] || '', p.x, y - u * 3.5);
        hg.globalAlpha = 1;
      }
    }
  }
  // name tags (priority: active commenters, crown, humans); ghosts are not drawn here (they float in the 3D view)
  const drawn = (view.drawn() || []).filter((d) => !d.ghost);
  const cand = drawn.map((f) => ({ f, s: (f.flags & TFLAG.cmd ? 8 : 0) + (f.flags & TFLAG.crown ? 6 : 0) + (f.flags & TFLAG.gift ? 5 : 0) + (f.flags & TFLAG.bot ? 0 : 3) + (w.pdc === f.id ? 9 : 0) }));
  cand.sort((a, b) => b.s - a.s);
  const fs = Math.round(u * (cand.length > 14 ? 2.5 : 2.9));
  const placed = [];
  for (const { f } of cand.slice(0, q.labels)) {
    const p = view.project(f.x, f.y, f.z); if (!p.vis) continue;
    if (p.x < -40 || p.x > cssW + 40 || p.y < cssH * 0.3 || p.y > cssH * 0.9) continue;
    if (placed.some((o) => Math.abs(o.x - p.x) < u * 9 && Math.abs(o.y - p.y) < u * 3.6)) continue;
    placed.push(p);
    const info = f.info || {}, bot = f.flags & TFLAG.bot, doom = w.pdc === f.id;
    const vd = (f.flags >> DOOR_SHIFT) & 3;
    const name = (doom ? (w.pk === 'fall' ? '💀 ' : '💰 ') : bot ? '🤖 ' : f.flags & TFLAG.crown ? '👑 ' : '') + info.name + (f.flags & TFLAG.life ? ' ❤️' : '') + (vd && w.phase === 'vote' ? ` →${vd}` : '');
    hg.font = F(800, fs);
    const tw = Math.min(hg.measureText(name).width, u * 30), h = fs * 1.35, y = p.y - h * 0.6;
    hg.fillStyle = doom ? 'rgba(90,0,60,0.85)' : bot ? 'rgba(40,40,60,0.7)' : 'rgba(14,6,34,0.78)';
    rr(p.x - tw / 2 - u * 1.3, y - h / 2, tw + u * 2.6, h, h / 2); hg.fill();
    hg.fillStyle = '#' + ((info.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
    rr(p.x - tw / 2 - u * 1.3, y - h / 2, u * 0.9, h, u * 0.45); hg.fill();
    hg.fillStyle = bot ? '#c8c8d8' : '#fff';
    hg.fillText(name, p.x + u * 0.2, y + 1, u * 30);
  }
  // damage numbers pop out of the monster
  const mt = view.monsterTop && view.monsterTop();
  for (let i = dmgNums.length - 1; i >= 0; i--) {
    const d = dmgNums[i], k = (now - d.t0) / 0.8;
    if (k >= 1 || k < 0 || !mt) { dmgNums.splice(i, 1); continue; }
    const pop = 1 + 0.9 * Math.pow(Math.max(0, 1 - k * 4), 2);
    const size = u * (d.c ? 6.4 : 4.2) * pop;
    hg.font = F(900, size); hg.globalAlpha = Math.min(1, (1 - k) * 2.2);
    const x = mt.x + d.j * u * 9, y = mt.y + u * 6 - k * u * 10;
    const t = d.c ? d.v + '!' : String(d.v);
    hg.lineWidth = size * 0.18; hg.strokeStyle = 'rgba(40,0,40,0.85)'; hg.strokeText(t, x, y);
    hg.fillStyle = d.c ? '#ffe03a' : '#ffffff'; hg.fillText(t, x, y);
  }
  hg.globalAlpha = 1;
}
function rr(x, y, w, h, r) { hg.beginPath(); hg.moveTo(x + r, y); hg.arcTo(x + w, y, x + w, y + h, r); hg.arcTo(x + w, y + h, x, y + h, r); hg.arcTo(x, y + h, x, y, r); hg.arcTo(x, y, x + w, y, r); hg.closePath(); }

// ------------------------------------------------------------------ DOM HUD (4x a second)
const themeName = (w) => (w.th === -2 ? BOSS_THEME.name : w.th === -1 ? GATE_THEME.name : (THEMES[w.th] || GATE_THEME).name);
let lastCount = -1;
function setText(id, t) { const el = $(id); if (el.__t !== t) { el.__t = t; el.textContent = t; } }
function domHud(now) {
  const w = world, body = document.body;
  const fight = w.phase === 'monster' || w.phase === 'boss', rid = w.phase === 'riddle' && w.ri >= 0;
  // how-to banner follows the phase
  let title = '❤️ LIKES KEEP THE LANTERNS LIT!', cls = '';
  if (w.phase === 'gather') title = '🏮 COMMENT TO JOIN THE CLIMB!';
  else if (w.phase === 'vote' || w.phase === 'enter') { title = w.nd === 2 ? '🚪 COMMENT 1 (LEFT) OR 2 (RIGHT)!' : '🚪 COMMENT 1 · 2 · 3 TO PICK A DOOR!'; cls = 'vote'; }
  else if (fight) { title = w.phase === 'boss' ? '👻 BOSS! SPAM CHAT TO FIGHT!' : '⚔️ SPAM CHAT TO FIGHT!'; cls = 'fight'; }
  else if (rid) { title = '❓ ANSWER THE RIDDLE IN CHAT!'; cls = 'riddle'; }
  else if (w.phase === 'end') title = '🏮 COMMENT TO JOIN THE NEXT CLIMB!';
  setText('howTitle', title); $('howTitle').className = 'title' + (cls ? ' ' + cls : '');
  // pill
  let txt;
  const fl = w.floor ? `FLOOR ${w.floor}` : 'THE GATE';
  if (w.phase === 'gather') txt = `🏮 CLIMB #${w.run + 1} IN ${Math.ceil(w.tl)}s · ${w.n} climbers`;
  else if (w.phase === 'end') txt = `🏰 CLIMB OVER · ${fl}${w.best ? ' · best ' + w.best : ''}`;
  else if (w.phase === 'climb') txt = `🪜 CLIMBING${w.lift ? ' · MIRA\'S LIFT ✨' : '…'} · 👥 ${w.n}`;
  else txt = `${fl} · ${themeName(w).toUpperCase()}${['vote', 'monster', 'boss', 'riddle'].includes(w.phase) ? ` · ⏳${Math.ceil(w.tl)}s` : ''} · 👥 ${w.n}${w.gh ? ' 👻 ' + w.gh : ''}`;
  setText('pillTxt', txt);
  $('pill').className = w.phase === 'boss' || w.th === -2 ? 'boss' : w.phase === 'end' ? 'end' : w.phase;
  // lantern oil
  const fuel = Math.max(0, Math.min(100, w.fuel));
  $('fuelBar').style.width = fuel.toFixed(1) + '%'; setText('fuelN', Math.round(fuel) + '%');
  setText('shields', w.sh ? '🛡️×' + w.sh : '');
  $('fuel').className = fuel < 25 && w.phase !== 'gather' && w.phase !== 'end' ? 'low' : '';
  body.classList.toggle('dark', fuel < 20 && w.phase !== 'gather');
  // boss / monster bar
  const bb = $('bossbar'); bb.hidden = !(fight && w.mo);
  if (!bb.hidden) { setText('bossName', `${w.mo.b ? '👻' : w.mo.k === 'spider' ? '🕷️' : w.mo.k === 'mimic' ? '📦' : '👻'} ${w.mo.n.toUpperCase()} · ${Math.max(0, Math.ceil(w.mo.hp))}`); $('bossHp').style.width = Math.max(0, (w.mo.hp / w.mo.max) * 100).toFixed(1) + '%'; }
  // riddle card
  const rc = $('riddle'); rc.hidden = !rid;
  if (rid) {
    setText('riddleQ', RIDDLES[w.ri] ? RIDDLES[w.ri][0] : '');
    const s = solved || (w.rs ? { id: w.rs > 0 ? w.rs : 0, a: RIDDLES[w.ri][1][0] } : null);
    rc.classList.toggle('solved', !!(s && s.id));
    setText('riddleA', s ? (s.id ? `✅ ${nameOf(s.id)}: ${s.a.toUpperCase()}` : `❌ It was: ${s.a.toUpperCase()}`) : `✍️ First to comment the answer wins! ⏳${Math.ceil(w.tl)}s`);
  }
  body.classList.toggle('fighting', fight && !!w.mo); body.classList.toggle('riddling', rid);
  // likes
  setText('likeN', String(w.hype || 0)); $('likeBar').style.width = Math.min(100, ((w.hype || 0) / 300) * 100) + '%';
  // big countdown: the last 5 s of a vote (with heartbeats) and of the gathering
  const c = $('count');
  if ((w.phase === 'vote' || w.phase === 'gather') && w.tl <= 5.0 && w.tl > 0 && !(w.phase === 'gather' && w.n < 1)) {
    const n = Math.ceil(w.tl);
    if (n !== lastCount) { lastCount = n; c.hidden = false; c.textContent = n; c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick'); audio.sfx(w.phase === 'vote' && n <= 3 ? 'heart' : 'beep'); }
  } else { if (!c.hidden) c.hidden = true; lastCount = -1; }
  if (w.phase !== 'end') $('winner').hidden = true;
  renderBoard(now);
}

// ------------------------------------------------------------------ timers that follow the virtual clock in render mode
const timers = [];
function later(fn, ms) { if (!RENDER) return setTimeout(fn, ms); const t = { at: vclock + ms / 1000, fn }; timers.push(t); return t; }
function runTimers() { for (let i = timers.length - 1; i >= 0; i--) if (timers[i].at <= vclock) { const t = timers.splice(i, 1)[0]; t.fn(); } }
function showNotice(t) { const n = $('notice'); n.textContent = t; n.hidden = false; }
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
renderGifts();
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
