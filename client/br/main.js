// Viewer Battle Royale overlay: network + interpolation, renderer choice (3D, or 2D fallback), auto quality, HUD,
// sound and crash breadcrumbs. iPhone Safari is the main target.
import { createView3D } from './view3d.js';
import { createView2D } from './view2d.js';
import { createAudio } from '../shared/audio.js';
import { startDiag } from '../shared/diag.js';
import { BattleRoyale, FLAG } from '../../public/shared/br-sim.js';
import { makeAnnouncer } from '../../public/shared/br-lines.js';
import { crowd } from '../../public/shared/crowd.js';
import { GIFT_TIERS } from '../../public/shared/commands.js';

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
  // animated characters are the main cost: cap how many are drawn, and animate far ones at a lower rate
  { pr: 1.5, maxW: 780, maxChars: 40, labels: 14, particles: 1, halos: true, animLod: 1 },
  { pr: 1.25, maxW: 700, maxChars: 32, labels: 12, particles: 0.75, halos: true, animLod: 1 },
  { pr: 1.0, maxW: 600, maxChars: 24, labels: 10, particles: 0.5, halos: true, animLod: 2 },
  { pr: 0.8, maxW: 480, maxChars: 16, labels: 8, particles: 0.35, halos: false, animLod: 2 },
] : [
  { pr: 2, maxW: Number(qs.get('maxw')) || 1080, maxChars: 60, labels: 18, particles: 1, halos: true, animLod: 1 },
  { pr: 1.5, maxW: 900, maxChars: 48, labels: 16, particles: 1, halos: true, animLod: 1 },
  { pr: 1.0, maxW: 700, maxChars: 36, labels: 12, particles: 0.6, halos: true, animLod: 2 },
  { pr: 0.8, maxW: 540, maxChars: 24, labels: 10, particles: 0.4, halos: false, animLod: 2 },
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
      view = createView3D(canvas, { maxChars: QL[0].maxChars, particles: PHONE ? 800 : 1200, aa: !PHONE || IOS, preserve: RENDER, platform: 20 });
      view.ready.catch(() => { mark('assets-fail'); to2D(); });   // models failed to load: the 2D view still works
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
  view = createView2D(canvas, { platform: 20 }); mark('view-2d'); resize();
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
  if (lostTimes.length >= 3) { localStorage.setItem('lg_force2d', '1'); to2D(); paused = false; hideNotice(); return; }   // keeps crashing: stay safe
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
const roster = new Map();   // fighter id -> { name, color, bot }
const lastEv = []; const mark = (s) => { lastEv.push(s); if (lastEv.length > 8) lastEv.shift(); };
const N = { ws: 0, snaps: 0, ev: 0, err: 0, say: 0 };
let snaps = [];             // [{ tm, at, s }]
let offset = null, phaseStart = 0, curPhase = '', lastSnap = null, tiers = GIFT_TIERS, board = null, tiktokState = '';
let world = { phase: 'lobby', fighters: [], r: 18, rt: 18, tl: 0, n: 0, q: 0, round: 0 };

function applyRoster(add = [], del = []) { for (const id of del) roster.delete(id); for (const r of add) roster.set(r.id, r); }

// ------------------------------------------------------------------ network (server mode)
let ws = null, wsWait = 1000;
function connect() {
  const url = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws?game=br' + (KEY ? '&key=' + encodeURIComponent(KEY) : '');
  try { ws = new WebSocket(url); } catch { return setTimeout(connect, wsWait); }
  ws.onopen = () => {
    N.ws++; wsWait = 1000; mark('ws-open'); hideNotice();
    try { const b = JSON.parse(localStorage.getItem('lg_brBoard') || 'null'); if (b && b.json && b.sig) ws.send(JSON.stringify({ t: 'restore', json: b.json, sig: b.sig })); } catch {}
  };
  ws.onmessage = (m) => { let d; try { d = JSON.parse(m.data); } catch { return; } onMsg(d); };
  ws.onclose = () => { ws = null; mark('ws-close'); setTimeout(connect, wsWait); wsWait = Math.min(10000, wsWait * 1.7); if (N.ws) showNotice('Reconnecting…'); };
  ws.onerror = () => {};
}
function onMsg(d) {
  switch (d.t) {
    case 'hello': roster.clear(); applyRoster(d.roster); snaps = []; offset = null; tiers = d.tiers || tiers; onBoard(d); pushSnap(d.snap); break;
    case 'roster': applyRoster(d.add, d.del); break;
    case 's': pushSnap(d); break;
    case 'say': say(d.text, d.url, d.dur); break;
    case 'banner': break;   // no on-screen words: the voice says it
    case 'board': onBoard(d); break;
    case 'status': tiktokState = d.tiktok?.state || ''; $('conn').className = tiktokState === 'connected' ? 'connected' : /wait|connecting|reconnect/.test(tiktokState) ? 'waiting' : tiktokState === 'error' ? 'error' : ''; maybeTikFinity(d.tiktok); break;
  }
}
function pushSnap(s) {
  if (!s) return;
  N.snaps++;
  const at = performance.now() / 1000;
  const off = at - s.tm;
  if (offset === null || off < offset || Math.abs(off - offset) > 2) offset = off; else offset += (off - offset) * 0.02;   // min-ish filter, follows drift slowly
  if (snaps.length && s.tm < snaps[snaps.length - 1].tm - 1) { snaps = []; offset = off; }   // the server restarted the game
  snaps.push({ tm: s.tm, s, done: false });
  if (snaps.length > 40) snaps.shift();
}
const DELAY = 0.16;
// slow motion: playback runs slower for a moment (final takedown, multi-kills), then catches up with the live feed
let slowUntil = 0, slowRate = 1, playT = null, lastNow = 0;
function slowmo(dur, rate) { const n = clockNow(); if (n + dur > slowUntil) { slowUntil = n + dur; slowRate = Math.min(rate, slowUntil > n ? slowRate : 1); } N.slow = (N.slow || 0) + 1; }
function timeScale(now) { if (now < slowUntil) return slowRate; slowRate = 1; return 1; }
function netWorld(now) {
  if (!snaps.length) return world;
  const live = now - offset - DELAY, step = Math.max(0, Math.min(0.2, now - (lastNow || now))); lastNow = now;
  if (playT === null || Math.abs(live - playT) > 3) playT = live;
  else { const ts = timeScale(now); playT += step * (ts < 1 ? ts : playT < live - 0.02 ? 1.35 : 1); if (playT > live) playT = live; }
  const t = playT;
  // dispatch events of every snapshot whose time has come (stale ones only update the HUD)
  for (const sn of snaps) if (!sn.done && sn.tm <= t) { sn.done = true; const stale = t - sn.tm > 1.2; for (const e of sn.s.ev || []) handleEvent(e, stale); }
  let a = snaps[0], b = null;
  for (let i = 0; i < snaps.length; i++) { if (snaps[i].tm <= t) a = snaps[i]; else { b = snaps[i]; break; } }
  if (!b || b === a) return buildWorld(a.s, null, 0);
  const k = Math.max(0, Math.min(1, (t - a.tm) / Math.max(1e-3, b.tm - a.tm)));
  return buildWorld(a.s, b.s, k);
}
const pool = [];
function buildWorld(A, B, k) {
  const fs = [];
  const bi = new Map();
  if (B) for (let i = 0; i < B.f.length; i += 8) bi.set(B.f[i], i);
  let j = 0;
  for (let i = 0; i < A.f.length; i += 8) {
    const id = A.f[i];
    const o = pool[j] || (pool[j] = {}); j++;
    o.id = id; o.x = A.f[i + 1]; o.y = A.f[i + 2]; o.z = A.f[i + 3]; o.face = A.f[i + 4]; o.hp = A.f[i + 5]; o.flags = A.f[i + 6]; o.charge = A.f[i + 7];
    const q = bi.get(id);
    if (q !== undefined && B) {
      const Bf = B.f;
      o.x += (Bf[q + 1] - o.x) * k; o.y += (Bf[q + 2] - o.y) * k; o.z += (Bf[q + 3] - o.z) * k;
      let df = Bf[q + 4] - o.face; df = Math.atan2(Math.sin(df), Math.cos(df)); o.face += df * k;
    }
    o.info = roster.get(id) || { name: '?', color: 0xffffff };
    fs.push(o);
  }
  const S = B && k > 0.5 ? B : A;
  if (S.ph !== curPhase) { curPhase = S.ph; phaseStart = performance.now() / 1000; }
  world = { phase: S.ph, fighters: fs, r: B ? A.r + (B.r - A.r) * k : A.r, rt: S.rt, tl: S.tl, n: S.n, q: S.q, h: S.h, round: S.round, hype: S.hype, podium: S.podium, phaseStart };
  lastSnap = S;
  return world;
}

// ------------------------------------------------------------------ local mode (?local=1, demo renders)
let sim = null, localCrowd = null, ann = null;
const sayQ = [];
let sayBusyUntil = 0, sayPending = 0;
function startLocal() {
  const o = {};
  for (const k of ['lobbySeconds', 'minFighters', 'arenaCap', 'ceremonySeconds', 'damageMul', 'shrinkSeconds']) if (qs.has(k)) o[k] = Number(qs.get(k));
  let seed = Number(qs.get('seed') || 7);
  const rng = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  sim = new BattleRoyale(o, RENDER ? rng : Math.random);
  ann = makeAnnouncer({ nameOf: (id) => sim.fighters.get(id)?.name || null, rng: RENDER ? rng : Math.random });
  if (qs.get('crowd')) localCrowd = crowd(qs.get('crowd'), RENDER ? rng : Math.random);
  window.__input = (ev) => sim.input(ev);
}
let localAcc = 0;
function localWorld(dt, now) {
  dt *= timeScale(now);
  if (localCrowd) for (const ev of localCrowd.tick(dt)) sim.input(ev);
  localAcc += dt;
  while (localAcc >= 0.05) { localAcc -= 0.05; sim.step(0.05); }
  const r = sim.drainRoster(); applyRoster(r.add, r.del);
  const ev = sim.drain();
  for (const l of ann.lines(ev, sim.t)) localSay(l, now);
  const s = sim.snapshot();
  for (const e of ev) handleEvent(e, false);
  return buildWorld(s, null, 0);
}
function localSay(l, now) {
  const item = { ...l, at: now, p: null };
  item.p = fetch('/api/say?text=' + encodeURIComponent(l.text)).then((r) => r.json()).catch(() => ({ url: null }));
  sayPending++; item.p.finally(() => sayPending--);
  sayQ.push(item); sayQ.sort((a, b) => b.pri - a.pri || a.at - b.at);
  while (sayQ.length > 3) sayQ.pop();
}
async function pumpLocalSay(now) {
  if (now < sayBusyUntil || !sayQ.length || pumpLocalSay.busy) return;
  const it = sayQ.shift();
  if (!it.win && now - it.at > (it.pri >= 7 ? 9 : 6)) return;
  pumpLocalSay.busy = true;
  const r = await it.p; pumpLocalSay.busy = false;
  const t = RENDER ? vclock : performance.now() / 1000;
  const dur = r.dur || Math.min(4, 0.9 + it.text.length / 16);
  say(it.text, r.url, dur); sayBusyUntil = t + dur + 0.25;
}

// ------------------------------------------------------------------ events -> juice, sound, HUD
const nameOf = (id) => roster.get(id)?.name || '?';
const colorOf = (id) => '#' + ((roster.get(id)?.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function handleEvent(e, stale) {
  N.ev++;
  if (!stale && view && !paused) try { view.fx(e, world); } catch (err) { N.err++; }
  const S = (k, v) => { if (!stale) audio.sfx(k, audio.now(), v); };
  switch (e.k) {
    case 'hit': {
      S(e.c ? 'crit' : 'punch', e.s ? 0.5 : 1);
      break;
    }
    case 'block': S('block'); break;
    case 'ko': {
      S('ko');
      if (e.a) kills.set(e.a, e.n || (kills.get(e.a) || 0) + 1);
      if (!stale) { if (e.left > 0 && e.left <= 1) slowmo(1.6, 0.25); else if (e.multi || e.streak || (e.left > 0 && e.left <= 3)) slowmo(0.55, 0.4); }
      break;
    }
    case 'dash': S('dash'); break;
    case 'shield': S('shield'); break;
    case 'spin': S('spin'); break;
    case 'heal': S('heal'); break;
    case 'land': S('land', 0.6); break;
    case 'meteor': S('whistle'); break;
    case 'boom': S('boom'); break;
    case 'nuke': S('nuke'); flash(); break;
    case 'power': case 'revive': S('power'); break;
    case 'gift': S('coin'); break;   // the gift's power is shown as VFX on the giver's fighter and spoken
    case 'perk': S('power'); break;
    case 'hype': S('heal'); S('cheer'); break;
    case 'phase':
      if (e.ph === 'battle') S('go');
      if (e.ph === 'lobby') { $('winner').hidden = true; kills.clear(); }
      break;
    case 'win': S('fanfare'); showWinner(e); break;
    case 'join': break;
  }
  if (e.k !== 'hit' && e.k !== 'atk') mark(e.k);
}
function clockNow() { return RENDER ? vclock : performance.now() / 1000; }
function flash() { const f = $('flash'); f.style.transition = 'none'; f.style.opacity = '0.85'; void f.offsetWidth; f.style.transition = 'opacity 0.8s ease-out'; f.style.opacity = '0'; }
let sayT = 0;
function say(text, url, dur) {
  N.say++;
  if (url) audio.voice(url, dur);   // spoken only: nothing is written on screen
}
function showWinner(e) {
  // the only words on screen: the champion's name (the rest is spoken)
  const w = $('winner');
  if (e.a > 0) { $('winName').textContent = shortName(nameOf(e.a), 18); $('winName').style.color = colorOf(e.a); }
  else { $('winName').textContent = '🌀'; $('winName').style.color = '#d08cff'; }
  w.hidden = false; w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
}
const shortName = (n, max = 10) => { n = String(n || '?').replace(/\s+/g, ' ').trim(); return [...n].length > max ? [...n].slice(0, max - 1).join('') + '…' : n; };
function onBoard(d) {
  if (!d || (!d.session && !d.all)) return;
  board = d;
  if (d.signed) try { localStorage.setItem('lg_brBoard', JSON.stringify(d.signed)); } catch {}
}
// ------------------------------------------------------------------ HUD canvas: names, HP bars, damage numbers
function drawHud(now) {
  const pr = hud.__pr || 1, u = cssW / 100;
  hg.setTransform(1, 0, 0, 1, 0, 0); hg.clearRect(0, 0, hud.width, hud.height); hg.setTransform(pr, 0, 0, pr, 0, 0);
  if (!view || paused) return;
  drawTags(now, u);
  drawRing(now, u);
}
// small name tags (shortened); in crowds they shrink and fade instead of stacking up
const tagAlpha = new Map();
const kills = new Map();   // fighter id -> takedowns this round (shown as small skull pips, a flame from 3)
function drawTags(now, u) {
  const drawn = view.drawn() || world.fighters;
  const q = QL[level];
  const cand = drawn.filter((f) => f.flags & FLAG.alive).map((f) => ({ f, s: (f.flags & FLAG.cmd ? 8 : 0) + (f.flags & FLAG.crown ? 6 : 0) + (f.flags & FLAG.giant ? 4 : 0) + (f.flags & FLAG.bot ? -4 : 3) }));
  cand.sort((a, b) => b.s - a.s);
  const crowded = cand.length > 14;
  const fsz = Math.round(u * (crowded ? 2.3 : 2.7));
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.lineJoin = 'round';
  hg.font = `800 ${fsz}px -apple-system, "Segoe UI", Roboto, sans-serif`;
  const placed = []; const seen = new Set();
  for (const { f } of cand.slice(0, q.labels)) {
    const p = view.project(f.x, f.y + view.headY(f), f.z); if (!p.ok) continue;
    if (p.x < -40 || p.x > cssW + 40 || p.y < cssH * 0.1 || p.y > cssH * 0.8) continue;
    if (p.y < cssH * 0.2 && Math.abs(p.x - cssW / 2) < u * 12) continue;   // keep the timer ring clear
    // overlapping a tag already placed -> fade this one out (smoothly), never stack
    const hidden = placed.some((o) => Math.abs(o.x - p.x) < u * 11 && Math.abs(o.y - p.y) < u * 3.6);
    const key = f.id; seen.add(key);
    const target = hidden ? 0 : crowded && f.flags & FLAG.bot ? 0.45 : 0.92;
    const a = (tagAlpha.get(key) ?? 0) + (target - (tagAlpha.get(key) ?? 0)) * 0.25; tagAlpha.set(key, a);
    if (a < 0.04) continue;
    if (!hidden) placed.push(p);
    const info = f.info || {};
    const name = (f.flags & FLAG.crown ? '👑' : '') + shortName(f.flags & FLAG.bot ? String(info.name || '').replace(/^Bot\s+/i, '') : info.name, crowded ? 8 : 10);
    const tw = hg.measureText(name).width, h = fsz * 1.3, y = p.y - h * 0.6;
    hg.globalAlpha = a;
    hg.fillStyle = 'rgba(10,6,24,0.55)'; rr(p.x - tw / 2 - u, y - h / 2, tw + u * 2, h, h / 2); hg.fill();
    hg.fillStyle = '#' + ((info.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
    hg.fillText(name, p.x, y + 1);
    const kc = kills.get(f.id) || 0;
    if (kc > 0) { const pips = (kc >= 3 ? '🔥' : '') + '💀'.repeat(Math.min(kc, 3)); const ps = Math.round(fsz * 0.8); hg.font = `800 ${ps}px -apple-system, "Segoe UI", Roboto, sans-serif`; hg.fillText(pips, p.x, y - h * 0.95); hg.font = `800 ${fsz}px -apple-system, "Segoe UI", Roboto, sans-serif`; }
    // a hairline health bar only once hurt (no numbers)
    if (f.hp < 99) { const bw = Math.max(u * 6, tw * 0.7), by = y + h / 2 + u * 0.35; hg.fillStyle = 'rgba(0,0,0,0.5)'; hg.fillRect(p.x - bw / 2, by, bw, u * 0.55); hg.fillStyle = f.hp > 55 ? '#3ee07a' : f.hp > 28 ? '#ffd23f' : '#ff4d5e'; hg.fillRect(p.x - bw / 2, by, (bw * Math.max(0, f.hp)) / 100, u * 0.55); }
  }
  hg.globalAlpha = 1;
  if (tagAlpha.size > 200) for (const k of tagAlpha.keys()) if (!seen.has(k)) tagAlpha.delete(k);
}
// the one HUD element: a small timer ring (lobby countdown / storm timer) with the fighters-left count inside
let ringMax = { lobby: 20, battle: 30 }, ringPhase = '';
function drawRing(now, u) {
  const w = world, ph = w.phase;
  if (ph !== ringPhase) { ringPhase = ph; ringMax[ph] = Math.max(1, w.tl || 1); }
  if (w.tl > ringMax[ph]) ringMax[ph] = w.tl;
  const cx = cssW / 2, cy = cssH * 0.135, r = u * 4.6;
  const k = ph === 'ceremony' ? 1 : Math.max(0, Math.min(1, (w.tl || 0) / (ringMax[ph] || 1)));
  const col = ph === 'battle' ? (w.tl > 0 ? '#ff6b8b' : '#c77dff') : ph === 'ceremony' ? '#ffd34d' : '#7ee0ff';
  const urgent = ph === 'lobby' && w.tl > 0 && w.tl <= 5;
  const pulse = urgent ? 1 + 0.12 * Math.max(0, Math.sin((w.tl % 1) * Math.PI)) : 1;
  hg.save(); hg.translate(cx, cy); hg.scale(pulse, pulse);
  hg.fillStyle = 'rgba(10,6,24,0.55)'; hg.beginPath(); hg.arc(0, 0, r + u * 0.9, 0, Math.PI * 2); hg.fill();
  hg.lineWidth = u * 1.1; hg.lineCap = 'round';
  hg.strokeStyle = 'rgba(255,255,255,0.18)'; hg.beginPath(); hg.arc(0, 0, r, 0, Math.PI * 2); hg.stroke();
  hg.strokeStyle = urgent ? '#ffd34d' : col; hg.beginPath(); hg.arc(0, 0, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * k); hg.stroke();
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.fillStyle = '#fff';
  if (ph === 'ceremony') { hg.font = `${Math.round(u * 4.2)}px sans-serif`; hg.fillText('👑', 0, u * 0.2); }
  else { hg.font = `900 ${Math.round(u * (urgent ? 4.4 : 3.6))}px -apple-system, "Segoe UI", Roboto, sans-serif`; hg.fillText(String(urgent ? Math.ceil(w.tl) : ph === 'battle' ? w.n : w.fighters.length), 0, u * 0.3); }
  hg.restore();
}
function rr(x, y, w, h, r) { hg.beginPath(); hg.moveTo(x + r, y); hg.arcTo(x + w, y, x + w, y + h, r); hg.arcTo(x + w, y + h, x, y + h, r); hg.arcTo(x, y + h, x, y, r); hg.arcTo(x, y, x + w, y, r); hg.closePath(); }

// ------------------------------------------------------------------ DOM HUD (4x a second)
let lastCount = -1;
function domHud() {
  const w = world;
  // countdown beeps for the last 5 seconds of the lobby (the ring shows the number)
  if (w.phase === 'lobby' && w.tl <= 5.0 && w.tl > 0) { const n = Math.ceil(w.tl); if (n !== lastCount) { lastCount = n; audio.sfx('beep'); } } else lastCount = -1;
  if (w.phase !== 'ceremony') $('winner').hidden = true;
}

// ------------------------------------------------------------------ timers that follow the virtual clock in render mode
const timers = [];
function later(fn, ms) { if (!RENDER) return setTimeout(fn, ms); const t = { at: vclock + ms / 1000, fn }; timers.push(t); return t; }
function runTimers() { for (let i = timers.length - 1; i >= 0; i--) if (timers[i].at <= vclock) { const t = timers.splice(i, 1)[0]; t.fn(); } }
function showNotice() { $('notice').hidden = false; }   // a small spinner icon, no words
function hideNotice() { $('notice').hidden = true; }

// ------------------------------------------------------------------ main loop + auto quality
let lastFrame = 0, frames = 0, fpsT = 0, fps = 0, lowWin = 0, highWin = 0, domT = 0;
const banned = new Map();
function tick(dt, now) {
  if (LOCAL) world = localWorld(dt, now); else world = netWorld(now);
  if (LOCAL) pumpLocalSay(now);
  if (view && !paused) { try { view.frame(world, dt * timeScale(now), now); } catch (e) { N.err++; mark('frame-err'); if (N.err > 30) to2D(); } }
  drawHud(now);
  if (now - domT > 0.25) { domT = now; domHud(); }
}
function autoQuality(now) {
  frames++;
  if (now - fpsT < 2) return;
  fps = frames / (now - fpsT); frames = 0; fpsT = now;
  if (fixedQ || RENDER || document.hidden) return;
  if (now < 6) return;   // loading hiccups don't count
  // down after 2 slow windows (4 s); back up after 12 s of full speed, but a level that was too slow twice stays off
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
      if (view && view.ready && !view.loaded && !view.error) await view.ready.catch(() => {});
      vclock += dt; runTimers();
      // a voice line being made pauses the clock (so the voice lands exactly where it would live)
      for (let i = 0; i < 100 && (pumpLocalSay.busy || (sayQ.length && sayQ[0].p && sayPending)); i++) await new Promise((r) => setTimeout(r, 30));
      tick(dt, vclock);
      return { phase: world.phase, n: world.n, fighters: world.fighters.length };
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
  // keep the free server awake while the overlay is open (it sleeps after 15 min without HTTP requests)
  setInterval(() => { if (!document.hidden && !LOCAL) fetch('/healthz?overlay=1', { cache: 'no-store' }).catch(() => {}); }, 4 * 60e3);
  diag = startDiag(() => ({
    mode: { phone: PHONE, ios: IOS, kind: view ? view.kind : 'none', game: 'br', q: level, fps: Math.round(fps * 10) / 10, cap: fpsCap },
    cv: { w: canvas.width, h: canvas.height }, gl: { ...(view ? view.stats() : {}), lost, restored },
    n: { ...N }, last: lastEv.slice(), audio: { unlocked: audio.state() === 'running', ctx: audio.state(), played: audio.played, fails: audio.fails },
  }), { off: qs.get('diag') === '0' || LOCAL });
}
window.__br = { get world() { return world; }, get level() { return level; }, get fps() { return fps; }, get view() { return view; }, stats: () => (view ? view.stats() : null), N, audio, roster };
