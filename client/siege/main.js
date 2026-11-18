// Dark Dimension Siege overlay: network + interpolation, renderer choice (3D, or 2D fallback), auto quality, HUD,
// the Narrator's voice, sound and crash breadcrumbs. iPhone Safari is the main target. Same foundation as the other games.
import { createSiegeView } from './view3d.js';
import { createSiegeView2D } from './view2d.js';
import { createAudio } from '../shared/audio.js';
import { startDiag } from '../shared/diag.js';
import { Siege, SFLAG, FSHIFT } from '../../public/shared/siege-sim.js';
import { makeSiegeLines, spoken } from '../../public/shared/siege-lines.js';
import { CLASSES, CHAPTERS, CHOICES, EFFECTS, ENDINGS, LORE, SIEGE_GIFTS, SURVIVORS, fmt } from '../../public/shared/siege-data.js';
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
  { pr: 1.5, maxW: 780, labels: 16, particles: 1, dust: true, props: true },
  { pr: 1.25, maxW: 700, labels: 12, particles: 0.75, dust: true, props: true },
  { pr: 1.0, maxW: 600, labels: 9, particles: 0.5, dust: false, props: true },
  { pr: 0.8, maxW: 480, labels: 7, particles: 0.35, dust: false, props: false },
] : [
  { pr: 2, maxW: Number(qs.get('maxw')) || 1080, labels: 20, particles: 1, dust: true, props: true },
  { pr: 1.5, maxW: 900, labels: 16, particles: 1, dust: true, props: true },
  { pr: 1.0, maxW: 700, labels: 12, particles: 0.6, dust: false, props: true },
  { pr: 0.8, maxW: 540, labels: 9, particles: 0.4, dust: false, props: false },
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
      view = createSiegeView(canvas, { maxChars: 70, particles: PHONE ? 800 : 1200, aa: !PHONE || IOS, preserve: RENDER });
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
  view = createSiegeView2D(canvas, {}); mark('view-2d'); resize();
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
const roster = new Map();   // defender id -> { name, color, bot }
const lastEv = []; const mark = (s) => { lastEv.push(s); if (lastEv.length > 8) lastEv.shift(); };
const N = { ws: 0, snaps: 0, ev: 0, err: 0, say: 0 };
let snaps = [];
let offset = null, phaseStart = 0, curPhase = '', tiers = SIEGE_GIFTS, board = null, tiktokState = '';
let world = { phase: 'intro', members: [], enemies: [], allies: [], tl: 0, pd: 1, ch: 1, wv: 0, wi: 0, sv: SURVIVORS, bar: 0, hype: 0, vi: -1, vc: [0, 0], cho: [], left: 0, n: 0, run: 0, bo: null, best: 0, saves: 0 };
let loreIdx = -1, loreT = 0, ending = null, lastChoice = null;

function applyRoster(add = [], del = []) { for (const id of del) roster.delete(id); for (const r of add) roster.set(r.id, r); }

// ------------------------------------------------------------------ network (server mode)
let ws = null, wsWait = 1000;
function connect() {
  const url = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws?game=siege' + (KEY ? '&key=' + encodeURIComponent(KEY) : '');
  try { ws = new WebSocket(url); } catch { return setTimeout(connect, wsWait); }
  ws.onopen = () => {
    N.ws++; wsWait = 1000; mark('ws-open'); hideNotice();
    try { const b = JSON.parse(localStorage.getItem('lg_siegeBoard') || 'null'); if (b && b.json && b.sig) ws.send(JSON.stringify({ t: 'restore', json: b.json, sig: b.sig })); } catch {}
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
const fpool = [], epool = [], apool = [];
const NOINFO = { name: '?', color: 0xffffff };
function lerpList(A, B, k, stride, pool, fill) {
  const out = [];
  const bi = new Map();
  if (B) for (let i = 0; i < B.length; i += stride) bi.set(B[i], i);
  let j = 0;
  for (let i = 0; i < A.length; i += stride) {
    const o = pool[j] || (pool[j] = {}); j++;
    const q = B ? bi.get(A[i]) : undefined;
    fill(o, A, i, q !== undefined ? B : null, q, k);
    out.push(o);
  }
  return out;
}
function buildWorld(A, B, k) {
  const members = lerpList(A.f, B && B.f, k, 5, fpool, (o, a, i, b, q, kk) => {
    o.id = a[i]; o.x = a[i + 1]; o.z = a[i + 2]; o.cls = a[i + 3] & 3; o.flags = a[i + 3] >> FSHIFT; o.hp = a[i + 4];
    if (b) { const dx = b[q + 1] - o.x, dz = b[q + 2] - o.z; if (Math.abs(dx) + Math.abs(dz) < 4) { o.x += dx * kk; o.z += dz * kk; } }
    o.info = roster.get(o.id) || NOINFO;
  });
  const enemies = lerpList(A.e, B && B.e, k, 5, epool, (o, a, i, b, q, kk) => {
    o.id = a[i]; o.k = a[i + 1]; o.x = a[i + 2]; o.z = a[i + 3]; o.hp = a[i + 4];
    if (b) { o.x += (b[q + 2] - o.x) * kk; o.z += (b[q + 3] - o.z) * kk; }
  });
  const allies = lerpList(A.al, B && B.al, k, 4, apool, (o, a, i, b, q, kk) => {
    o.id = a[i]; o.k = a[i + 1]; o.x = a[i + 2]; o.z = a[i + 3];
    if (b) { o.x += (b[q + 2] - o.x) * kk; o.z += (b[q + 3] - o.z) * kk; }
  });
  const S = B && k > 0.5 ? B : A;
  if (S.ph !== curPhase) { curPhase = S.ph; phaseStart = clockNow(); }
  let bo = S.bo;
  if (bo && B && A.bo && B.bo) bo = { ...S.bo, hp: A.bo.hp + (B.bo.hp - A.bo.hp) * k };
  world = { phase: S.ph, members, enemies, allies, tl: S.tl, pd: S.pd, ch: S.ch, wv: S.wv, wi: S.wi, sv: S.sv, bar: B ? A.bar + (B.bar - A.bar) * k : A.bar, hype: S.hype, vi: S.vi, vc: S.vc, cho: S.cho, left: S.left, n: S.n, run: S.run, bo, best: S.best, saves: S.saves, phaseStart };
  return world;
}

// ------------------------------------------------------------------ local mode (?local=1, demo renders)
let sim = null, localCrowd = null, ann = null;
const sayQ = [];
let sayBusyUntil = 0, sayPending = 0;
function startLocal() {
  const o = {};
  for (const k of ['introSeconds', 'gatherSeconds', 'chapterSeconds', 'breakSeconds', 'victorySeconds', 'voteSeconds', 'choiceSeconds', 'endingSeconds', 'minDefenders', 'spawnMul', 'enemyHpMul', 'dmgMul', 'startChapter', 'waveCap', 'bossCap']) if (qs.has(k)) o[k] = Number(qs.get(k));
  if (qs.get('bots') === '0') o.bots = false;
  let seed = Number(qs.get('seed') || 7);
  const rng = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  sim = new Siege(o, RENDER ? rng : Math.random);
  ann = makeSiegeLines({ nameOf: (id) => sim.byId.get(id)?.name || null, rng: RENDER ? rng : Math.random, survivors: () => sim.survivors });
  if (qs.get('crowd')) localCrowd = crowd(qs.get('crowd'), RENDER ? rng : Math.random);
  window.__input = (ev) => sim.input(ev);
  window.__siege = sim;
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
  if (ev.some((e) => e.k === 'end' || e.k === 'bossdown')) board = { session: sim.board(8), all: [], saves: sim.saves };
  return buildWorld(s, null, 0);
}
function localSay(l, now) {
  if (l.banner) banner(l.banner);
  const item = { ...l, at: now, p: null };
  item.p = fetch('/api/say?voice=narrator&text=' + encodeURIComponent(l.text)).then((r) => r.json()).catch(() => ({ url: null }));
  sayPending++; item.p.finally(() => sayPending--);
  sayQ.push(item); sayQ.sort((a, b) => b.pri - a.pri || a.at - b.at);
  while (sayQ.length > 4) sayQ.pop();
}
async function pumpLocalSay(now) {
  if (now < sayBusyUntil || !sayQ.length || pumpLocalSay.busy) return;
  const it = sayQ.shift();
  if (!it.win && now - it.at > (it.pri >= 7 ? 9 : 6)) return;
  pumpLocalSay.busy = true;
  const r = await it.p; pumpLocalSay.busy = false;
  const t = clockNow();
  const dur = r.dur || Math.min(7, 0.9 + it.text.length / 14);
  say(it.text, r.url, dur); sayBusyUntil = t + dur + 0.25;
}

// ------------------------------------------------------------------ events -> juice, sound, HUD
const nameOf = (id) => roster.get(id)?.name || '?';
const colorOf = (id) => '#' + ((roster.get(id)?.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const NB = (id) => `<span style="color:${colorOf(id)}">${esc(nameOf(id))}</span>`;
const dmgNums = [];
const lastPos = new Map();   // enemy id -> last projected position (pops outlive their creature)
let shotSfxT = 0, hitSfxT = 0, voteSfxT = 0, killSfxT = 0;
function handleEvent(e, stale) {
  N.ev++;
  if (!stale && view && !paused) try { view.fx(e, world); } catch (err) { N.err++; }
  const S = (k, v) => { if (!stale) audio.sfx(k, audio.now(), v); };
  const now = clockNow();
  switch (e.k) {
    case 'intro': S('wind'); S('organ', 0.6); $('feed').innerHTML = ''; ending = null; lastChoice = null; showLore(-1); document.body.classList.add('cine'); break;
    case 'lore': S('bell', 0.5); S('whistle', 0.3); showLore(e.i, e.sec); break;
    case 'gather': S('go'); showLore(-1); document.body.classList.remove('cine'); break;
    case 'chapter': S('bell'); S('organ'); chapterCard(e.n, e.title); break;
    case 'wave': S('roar', 0.6); S('heart', 0.6); break;
    case 'clear': S('chime'); S('cheer', 0.5); break;
    case 'boss': S('roar'); S('organ'); S('thunder'); break;
    case 'bossatk': S(e.kind === 'summon' ? 'roar' : 'boom', e.blocked ? 0.6 : 1); if (e.blocked) S('shield'); if (!e.blocked && e.kind !== 'summon') flash(0.35); break;
    case 'bossdown': S('nuke'); S('fanfare'); S('cheer'); flash(0.8); if (!stale && e.by) feed('win', `⚔️ ${NB(e.by)} landed the final blow!`); break;
    case 'retreat': S('ghost'); S('thunder'); flash(0.4); break;
    case 'victory': break;
    case 'vote': if (e.start) { S('chime'); S('organ', 0.5); } else if (now - voteSfxT > 0.12) { voteSfxT = now; S('squeak', 0.35); } break;
    case 'choice': S('fanfare', 0.7); S('bell'); lastChoice = e; break;
    case 'shot':
      if (now - shotSfxT > 0.07) { shotSfxT = now; S(e.c === 'a' ? 'dash' : e.c === 'w' || e.c === 'g' ? 'punch' : e.c === 'h' ? 'heal' : 'pop', e.c === 'a' ? 0.25 : 0.35); }
      break;
    case 'dmg': {
      if (e.c && now - hitSfxT > 0.06) { hitSfxT = now; S(e.c === 2 ? 'crit' : 'punch', e.c === 2 ? 0.8 : 0.4); }
      if (!stale && dmgNums.length < 34 && (e.c || dmgNums.length < 22)) dmgNums.push({ id: e.e, v: e.d, c: e.c, t0: now, j: (Math.random() - 0.5) * 2 });
      break;
    }
    case 'kill': if (now - killSfxT > 0.09) { killSfxT = now; S(e.q === 1 ? 'boom' : 'pop', e.q === 1 ? 0.7 : 0.4); } break;
    case 'wallhit': S('boom', 0.5); S('shatter', 0.3); break;
    case 'block': S('shield', 0.4); break;
    case 'toll': S('trap'); S('ghost'); flash(0.5); break;
    case 'down': S('ko', 0.4); break;
    case 'rise': S('heal', 0.4); break;
    case 'heal': break;
    case 'gift': S('coin'); S(e.tier === 'dragon' ? 'roar' : e.tier === 'awaken' ? 'nuke' : e.tier === 'guardian' ? 'land' : 'power', e.tier === 'volley' ? 0.5 : 1); giftToast(e); if (e.tier === 'awaken' || e.tier === 'dragon') flash(0.6); break;
    case 'ult': S('nuke'); flash(0.5); break;
    case 'pulse': S('shield'); S('cheer', 0.5); toast('perk', '❤️ ASCENSION PULSE!', 'likes charged the barrier'); break;
    case 'bless': S('power', 0.7); toast('perk', e.why === 'follow' ? `➕ ${esc(nameOf(e.id))} followed` : `🔁 ${esc(nameOf(e.id))} shared`, e.why === 'follow' ? '→ blessed ×1.2 + barrier' : '→ the fallen rise + barrier'); break;
    case 'class': if (!stale && !roster.get(e.id)?.bot) feed('cls', `${CLASSES[e.c].icon} ${NB(e.id)} is now ${CLASSES[e.c].label}`); break;
    case 'ally': break;
    case 'end': S(e.saved ? 'fanfare' : 'thunder'); S(e.saved ? 'cheer' : 'ghost'); if (e.saved) S('bell'); flash(0.9); ending = e; showEnd(e); break;
  }
  if (!['shot', 'dmg', 'kill', 'vote', 'heal'].includes(e.k)) mark(e.k);
}
function giftToast(e) {
  const t = tiers.find((x) => x.id === e.tier) || {};
  let sub = `→ ${t.label || e.tier}`;
  if (e.tier === 'volley') sub = '→ ✨ spell volley';
  if (e.tier === 'rune') sub = '→ 🔷 barrier + volley';
  if (e.tier === 'guardian') sub = e.extended ? '→ 🛡️ guardian renewed' : '→ 🛡️ GUARDIAN HERO joins';
  if (e.tier === 'awaken') sub = e.cool ? '→ ⚡ ascended ×3 power' : '→ ⚡ ASCENSION ULTIMATE!';
  if (e.tier === 'dragon') sub = e.judgment ? '→ 🐉 JUDGMENT: −25% boss life' : '→ 🐉 DRAGON burns the field';
  toast(e.tier, `${t.icon || '🎁'} ${esc(nameOf(e.id))} sent ${esc(e.giftName || 'a gift')}`, sub);
}
function clockNow() { return RENDER ? vclock : performance.now() / 1000; }
function feed(cls, html) {
  const el = document.createElement('div'); el.className = 'k ' + cls; el.innerHTML = html;
  const f = $('feed'); f.prepend(el); while (f.children.length > 2) f.lastChild.remove();
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
  const el = $('say'); el.hidden = false; el.className = 'narr';
  el.innerHTML = `<div class="txt"><span class="who">📜 THE NARRATOR</span>${esc(text)}</div>`;
  const ms = Math.max(1800, (dur || 2) * 1000 + 600);
  clearTimeout(sayT); sayT = later(() => { el.hidden = true; }, ms);
  if (url) audio.voice(url, dur);
}
// anime cold-open cards
const LORE_ART = { rift: '🌀', scientist: '🧪', book: '📖', souls: '👻', lord: '👑', citadel: '🏰' };
function showLore(i, sec = 5) {
  const el = $('lore');
  if (i < 0) { el.hidden = true; loreIdx = -1; return; }
  const L = LORE[i]; loreIdx = i; loreT = clockNow();
  el.hidden = false; el.className = 'art-' + L.art; el.style.setProperty('--sec', sec + 's');
  $('loreArt').style.backgroundImage = `url(/siege/lore-${L.art}.jpg), radial-gradient(circle at 50% 45%, #6a20b0, #1a0630 70%)`;
  $('loreIcon').textContent = LORE_ART[L.art] || '✦';
  $('loreTitle').textContent = L.title; $('loreText').textContent = L.text;
  $('loreNum').textContent = `${String(i + 1).padStart(2, '0')} / ${String(LORE.length).padStart(2, '0')}`;
  el.classList.remove('play'); void el.offsetWidth; el.classList.add('play');
}
function chapterCard(n, title) {
  const el = $('chapter'); $('chN').textContent = `CHAPTER ${n}`; $('chT').textContent = title;
  $('chB').textContent = CHAPTERS[n - 1] ? `BOSS: ${CHAPTERS[n - 1].boss.name.toUpperCase()}` : '';
  el.hidden = false; el.classList.remove('play'); void el.offsetWidth; el.classList.add('play');
  later(() => { el.hidden = true; }, 3800);
}
function showEnd(e) {
  const w = $('winner');
  w.className = e.saved ? 'saved' : 'fell';
  $('winTitle').textContent = e.saved ? '🌅 EARTH SAVED' : '🌑 EARTH FELL';
  $('winSurv').textContent = e.saved ? `${fmt(e.survivors)} survivors live on` : `the Dark Dimension took them all · wave ${e.wave}`;
  const top = (e.top || []).filter((id) => roster.has(id));
  if (top.length) { $('winName').textContent = nameOf(top[0]); $('winName').style.color = colorOf(top[0]); $('winSub').textContent = (top.length > 1 ? `with ${top.slice(1, 3).map(nameOf).join(' & ')} · ` : '') + (roster.get(top[0])?.bot ? 'bots led the defense – comment to beat them!' : 'TOP DEFENDER 🏆'); }
  else { $('winName').textContent = ''; $('winSub').textContent = 'comment to defend the next siege'; }
  const story = (e.choices || []).map((k) => { const C = CHOICES.find((c) => c.a.key === k || c.b.key === k); const o = C && (C.a.key === k ? C.a : C.b); return o ? `${o.icon} ${o.label}` : ''; }).filter(Boolean).join('  ·  ');
  $('winStory').textContent = story;
  w.hidden = false; w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
}
function renderGifts() {
  $('gifts').innerHTML = [...tiers].reverse().map((t) => `<div><span>${t.icon} ${esc(t.label)}</span><b>${t.min}🪙</b></div>`).join('');
}
function onBoard(d) {
  if (!d || (!d.session && !d.all)) return;
  board = d;
  if (d.signed) try { localStorage.setItem('lg_siegeBoard', JSON.stringify(d.signed)); } catch {}
}
let boardMode = 0, boardFlip = 0;
function renderBoard(now) {
  const show = ['gather', 'ending', 'break', 'choice', 'chapter'].includes(world.phase);
  const el = $('board'); el.hidden = !show; if (!show || !board) return;
  if (now - boardFlip > 7) { boardFlip = now; boardMode ^= 1; }
  const useAll = boardMode && board.all && board.all.length;
  const list = (useAll ? board.all : board.session) || [];
  const title = useAll ? `👑 ALL-TIME DEFENDERS${board.saves ? ` · 🌍×${board.saves}` : ''}` : "🛡️ TODAY'S DEFENDERS";
  const html = list.length ? list.slice(0, 5).map((p) => `<li><span class="nm">${esc(p.name)}</span><span class="sc">${p.pts}⚔️${p.kills ? ' · ' + p.kills + '💀' : ''}</span></li>`).join('') : '';
  const key = title + html;
  if (el.__k === key) return; el.__k = key;
  $('boardTitle').textContent = title;
  $('boardList').innerHTML = html || '<div class="empty">No defenders yet – comment to take the wall! 🏰</div>';
}

// ------------------------------------------------------------------ HUD canvas: name tags + anime damage pops
const CLS_ICON = CLASSES.map((c) => c.icon);
function drawHud(now) {
  const pr = hud.__pr || 1, u = cssW / 100;
  hg.setTransform(1, 0, 0, 1, 0, 0); hg.clearRect(0, 0, hud.width, hud.height); hg.setTransform(pr, 0, 0, pr, 0, 0);
  if (!view || paused) return;
  const w = world, q = QL[level];
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.lineJoin = 'round';
  const F = (wt, px) => `${wt} ${px}px -apple-system, "Segoe UI", Roboto, sans-serif`;
  // name tags (priority: active commenters, crown, gifters, humans); bots only when there is room
  if (w.phase !== 'intro') {
    const drawn = view.drawn() || [];
    const cand = drawn.map((f) => ({ f, s: (f.flags & SFLAG.cmd ? 8 : 0) + (f.flags & SFLAG.crown ? 7 : 0) + (f.flags & SFLAG.gift ? 6 : 0) + (f.flags & SFLAG.asc ? 5 : 0) + (f.flags & SFLAG.bot ? 0 : 3) }));
    cand.sort((a, b) => b.s - a.s);
    const fs = Math.round(u * (cand.length > 14 ? 2.4 : 2.8));
    const placed = [];
    for (const { f } of cand.slice(0, q.labels)) {
      const p = view.project(f.x, f.y, f.z); if (!p.vis) continue;
      if (p.x < -40 || p.x > cssW + 40 || p.y < cssH * 0.3 || p.y > cssH * 0.92) continue;
      if (placed.some((o) => Math.abs(o.x - p.x) < u * 10 && Math.abs(o.y - p.y) < u * 3.6)) continue;
      placed.push(p);
      const info = f.info || {}, bot = f.flags & SFLAG.bot, down = f.flags & SFLAG.down;
      const name = (f.flags & SFLAG.crown ? '👑 ' : bot ? '🤖 ' : '') + (CLS_ICON[f.cls] || '') + ' ' + info.name + (f.flags & SFLAG.asc ? ' ⚡' : '') + (f.flags & SFLAG.bless ? ' ✨' : '');
      hg.font = F(800, fs);
      const tw = Math.min(hg.measureText(name).width, u * 30), h = fs * 1.35, y = p.y - h * 0.6;
      hg.globalAlpha = down ? 0.55 : 1;
      hg.fillStyle = f.flags & SFLAG.asc ? 'rgba(120,80,0,0.85)' : bot ? 'rgba(40,40,60,0.7)' : 'rgba(14,6,34,0.8)';
      rr(p.x - tw / 2 - u * 1.3, y - h / 2, tw + u * 2.6, h, h / 2); hg.fill();
      hg.fillStyle = '#' + ((info.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
      rr(p.x - tw / 2 - u * 1.3, y - h / 2, u * 0.9, h, u * 0.45); hg.fill();
      hg.fillStyle = bot ? '#c8c8d8' : '#fff';
      hg.fillText(name, p.x + u * 0.2, y + 1, u * 30);
      if (f.cls === 1 && f.hp < 100 && !down) { hg.fillStyle = 'rgba(0,0,0,0.6)'; hg.fillRect(p.x - u * 4, y + h * 0.62, u * 8, u * 0.8); hg.fillStyle = f.hp > 40 ? '#5dff9a' : '#ff5a5a'; hg.fillRect(p.x - u * 4, y + h * 0.62, u * 8 * Math.max(0, f.hp) / 100, u * 0.8); }
      hg.globalAlpha = 1;
    }
  }
  // anime damage pops: punchy scale-in, crits get a starburst + "CRIT!"
  for (let i = dmgNums.length - 1; i >= 0; i--) {
    const d = dmgNums[i], k = (now - d.t0) / (d.c === 2 ? 0.95 : 0.7);
    let p = view.enemyTop(d.id);
    if (p) lastPos.set(d.id, p); else p = lastPos.get(d.id);
    if (k >= 1 || k < 0 || !p) { dmgNums.splice(i, 1); continue; }
    const pop = 1 + (d.c === 2 ? 1.3 : 0.7) * Math.pow(Math.max(0, 1 - k * 5), 2);
    const size = u * (d.c === 2 ? 6.8 : d.c === 1 ? 4.6 : 3.4) * pop;
    const x = p.x + d.j * u * 7, y = p.y - u * 2 - k * u * (d.c === 2 ? 9 : 7);
    hg.globalAlpha = Math.min(1, (1 - k) * 2.4);
    if (d.c === 2) {
      hg.save(); hg.translate(x, y); hg.rotate(-0.12); hg.fillStyle = 'rgba(255,60,40,0.9)'; hg.beginPath();
      for (let s = 0; s < 16; s++) { const a = s / 16 * Math.PI * 2, r = (s % 2 ? 0.55 : 1) * size * 1.05; hg.lineTo(Math.cos(a) * r * 1.35, Math.sin(a) * r * 0.8); }
      hg.closePath(); hg.fill(); hg.restore();
    }
    const t = String(d.v) + (d.c === 2 ? '!' : '');
    hg.font = `italic ${F(900, size)}`;
    hg.lineWidth = size * 0.22; hg.strokeStyle = d.c === 2 ? '#3a0000' : 'rgba(30,0,40,0.9)'; hg.strokeText(t, x, y);
    hg.fillStyle = d.c === 2 ? '#fff23a' : d.c === 1 ? '#ffb03a' : '#ffffff'; hg.fillText(t, x, y);
    if (d.c === 2 && k < 0.6) { hg.font = `italic ${F(900, u * 2.6)}`; hg.lineWidth = u * 0.6; hg.strokeStyle = '#3a0000'; hg.strokeText('CRIT', x, y - size * 0.75); hg.fillStyle = '#fff'; hg.fillText('CRIT', x, y - size * 0.75); }
  }
  if (lastPos.size > 200) lastPos.clear();
  hg.globalAlpha = 1;
}
function rr(x, y, w, h, r) { hg.beginPath(); hg.moveTo(x + r, y); hg.arcTo(x + w, y, x + w, y + h, r); hg.arcTo(x + w, y + h, x, y + h, r); hg.arcTo(x, y + h, x, y, r); hg.arcTo(x, y, x + w, y, r); hg.closePath(); }

// ------------------------------------------------------------------ DOM HUD (4x a second; the survivor counter rolls every frame)
let lastCount = -1, svShown = SURVIVORS, svTarget = SURVIVORS, svDropAcc = 0, svDropT = 0, lastSv = SURVIVORS;
function setText(id, t) { const el = $(id); if (el.__t !== t) { el.__t = t; el.textContent = t; } }
function rollCounter(dt, now) {
  svTarget = Math.max(0, world.sv ?? SURVIVORS);
  if (svTarget < lastSv - 1) { svDropAcc += lastSv - svTarget; if (now - svDropT > 0.6) { showDrop(svDropAcc); svDropAcc = 0; svDropT = now; } }
  if (svTarget > lastSv + 1e6 || svTarget >= SURVIVORS - 1) svShown = Math.min(svShown, SURVIVORS);
  lastSv = svTarget;
  svShown += (svTarget - svShown) * Math.min(1, dt * 6);
  if (Math.abs(svTarget - svShown) < 1000) svShown = svTarget;
  setText('svN', fmt(svShown));
  const frac = svShown / SURVIVORS, el = $('surv');
  el.classList.toggle('low', frac < 0.35); el.classList.toggle('mid', frac >= 0.35 && frac < 0.7);
  $('svBar').style.width = (frac * 100).toFixed(2) + '%';
}
function showDrop(n) {
  if (n < 2e5) return;
  const el = document.createElement('div'); el.className = 'drop'; el.textContent = '−' + fmt(n);
  $('surv').appendChild(el); later(() => el.remove(), 1300);
  const s = $('surv'); s.classList.remove('hit'); void s.offsetWidth; s.classList.add('hit');
}
function domHud(now) {
  const w = world, body = document.body;
  const fight = ['wave', 'boss', 'break', 'victory'].includes(w.phase);
  const cine = w.phase === 'intro';
  body.classList.toggle('cine', cine);
  // how-to banner follows the phase
  let title = '💬 COMMENT TO DEFEND!', cls = '', chips = ['🔮 mage · ⚔️ warrior · 🏹 archer · 💚 healer', '❤️ likes = barrier', '🎁 gifts = spells'];
  if (w.phase === 'gather' || w.phase === 'ending' || cine) { title = '🏰 COMMENT TO JOIN!'; cls = 'join'; chips = ['type mage · warrior · archer · healer', '❤️ likes = barrier', '➕ follow = blessing']; }
  else if (w.phase === 'vote') { title = '🗳️ COMMENT 1 OR 2!'; cls = 'vote'; chips = ['the story changes for good']; }
  else if (w.phase === 'boss') { title = '💥 BOSS! SPAM CHAT!'; cls = 'fight'; chips = ['💬 comments = haste', '⚡ 100🪙 = ultimate', '🐉 500🪙 = judgment']; }
  else if (fight) { title = '💬 CHAT = FASTER ATTACKS'; cls = 'fight'; chips = ['🔮 mage · ⚔️ warrior · 🏹 archer · 💚 healer', '❤️ likes = barrier']; }
  const ck = chips.join('|'); if ($('howChips').__k !== ck) { $('howChips').__k = ck; $('howChips').innerHTML = chips.map((c) => `<span>${esc(c)}</span>`).join(''); }
  setText('howTitle', title); $('howTitle').className = 'title' + (cls ? ' ' + cls : '');
  // pill
  let txt;
  const C = CHAPTERS[(w.ch || 1) - 1];
  if (w.phase === 'gather') txt = `🏰 SIEGE #${w.run} IN ${Math.ceil(w.tl)}s · 👥 ${w.n} defenders`;
  else if (w.phase === 'intro') txt = '🌌 THE DARK DIMENSION';
  else if (w.phase === 'ending') txt = ending && ending.saved ? '🌅 EARTH SAVED · a new siege soon' : '🌑 EARTH FELL · a new siege soon';
  else if (w.phase === 'vote' || w.phase === 'choice') txt = `🗳️ THE STORY CHOICE · ⏳${Math.ceil(w.tl)}s`;
  else if (w.phase === 'boss') txt = `CH ${w.ch} · 💀 BOSS · ⏳${Math.ceil(w.tl)}s · 👥 ${w.n}`;
  else txt = `CH ${w.ch} · WAVE ${w.wv}${w.left ? ` · 👹 ${w.left}` : ''} · 👥 ${w.n}`;
  setText('pillTxt', txt);
  $('pill').className = w.phase === 'boss' ? 'boss' : w.phase === 'ending' ? 'end' : w.phase;
  // barrier
  const bar = Math.max(0, Math.min(100, w.bar || 0));
  $('barBar').style.width = bar.toFixed(1) + '%'; setText('barN', Math.round(bar) + '%');
  $('barrier').className = bar < 15 && fight ? 'low' : '';
  setText('likeN', String(w.hype || 0)); $('likeBar').style.width = Math.min(100, ((w.hype || 0) / 500) * 100) + '%';
  // boss bar
  const bb = $('bossbar'); bb.hidden = !(w.bo && fight);
  if (!bb.hidden) { setText('bossName', `💀 ${w.bo.n.toUpperCase()}`); setText('bossHpN', fmt(Math.max(0, Math.ceil(w.bo.hp)))); $('bossHp').style.width = Math.max(0, (w.bo.hp / w.bo.max) * 100).toFixed(1) + '%'; }
  body.classList.toggle('bossing', !bb.hidden);
  // story vote card
  const vc = $('vote'), voting = w.phase === 'vote' || w.phase === 'choice';
  vc.hidden = !voting || w.vi < 0;
  if (!vc.hidden) {
    const Cq = CHOICES[w.vi], tot = (w.vc[0] || 0) + (w.vc[1] || 0) || 1;
    setText('voteQ', Cq.q);
    const picked = w.phase === 'choice' && lastChoice ? lastChoice.key : null;
    [['a', 0], ['b', 1]].forEach(([s, i]) => {
      const o = Cq[s], el = $('vo' + i);
      setText('voL' + i, `${o.icon} ${o.label}`); setText('voN' + i, String(w.vc[i] || 0));
      $('voB' + i).style.width = ((w.vc[i] || 0) / tot * 100).toFixed(1) + '%';
      el.classList.toggle('lead', !picked && (w.vc[i] || 0) > (w.vc[1 - i] || 0));
      el.classList.toggle('picked', picked === o.key); el.classList.toggle('lost', !!picked && picked !== o.key);
    });
    setText('voteT', picked ? EFFECTS[picked].text : `comment 1 or 2 · ⏳${Math.ceil(w.tl)}s`);
  }
  body.classList.toggle('voting', voting);
  // big countdown: the last 5 s of a vote and of the muster
  const c = $('count');
  if ((w.phase === 'vote' || w.phase === 'gather') && w.tl <= 5.0 && w.tl > 0 && !(w.phase === 'gather' && w.n < 1)) {
    const n = Math.ceil(w.tl);
    if (n !== lastCount) { lastCount = n; c.hidden = false; c.textContent = n; c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick'); audio.sfx(w.phase === 'vote' && n <= 3 ? 'heart' : 'beep'); }
  } else { if (!c.hidden) c.hidden = true; lastCount = -1; }
  if (w.phase !== 'ending') $('winner').hidden = true;
  if (w.phase !== 'intro' && !$('lore').hidden) showLore(-1);
  renderBoard(now);
}

// ------------------------------------------------------------------ timers that follow the virtual clock in render mode
const timers = [];
function later(fn, ms) { if (!RENDER) return setTimeout(fn, ms); const t = { at: vclock + ms / 1000, fn }; timers.push(t); return t; }
function runTimers() { for (let i = timers.length - 1; i >= 0; i--) if (timers[i].at <= vclock) { const t = timers.splice(i, 1)[0]; t.fn(); } }
function showNotice(t) { const n = $('notice'); n.textContent = t; n.hidden = false; }
function hideNotice() { $('notice').hidden = true; }

// ------------------------------------------------------------------ main loop + auto quality
let lastFrame = 0, frames = 0, fpsT = 0, fps = 0, lowWin = 0, highWin = 0, domT = 0, windT = 8;
const banned = new Map();
function tick(dt, now) {
  if (LOCAL) world = localWorld(dt, now); else world = netWorld(now);
  if (LOCAL) pumpLocalSay(now);
  if (view && !paused) { try { view.frame(world, dt, now); } catch (e) { N.err++; mark('frame-err'); if (N.err > 30) to2D(); } }
  if (now > windT) { windT = now + 12 + Math.random() * 10; if (!['boss', 'wave'].includes(world.phase)) audio.sfx('wind', audio.now(), 0.45); }
  drawHud(now);
  rollCounter(dt, now);
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
      return { phase: world.phase, n: world.n, ch: world.ch, wave: world.wv, sv: world.sv };
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
    mode: { phone: PHONE, ios: IOS, kind: view ? view.kind : 'none', game: 'siege', q: level, fps: Math.round(fps * 10) / 10, cap: fpsCap },
    cv: { w: canvas.width, h: canvas.height }, gl: { ...(view ? view.stats() : {}), lost, restored },
    n: { ...N }, last: lastEv.slice(), audio: { unlocked: audio.state() === 'running', ctx: audio.state(), played: audio.played, fails: audio.fails },
  }), { off: qs.get('diag') === '0' || LOCAL });
}
window.__siegeUI = { get world() { return world; }, get members() { return world.members; }, get level() { return level; }, get fps() { return fps; }, get view() { return view; }, stats: () => (view ? view.stats() : null), N, audio, roster };

// preload the lore art so the intro cards never pop in blank
try { for (const L of LORE) { const im = new Image(); im.decoding = 'async'; im.src = `/siege/lore-${L.art}.jpg`; } } catch {}
