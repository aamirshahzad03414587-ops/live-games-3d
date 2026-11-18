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
  { pr: 1.5, maxW: 780, maxChars: 56, labels: 24, particles: 1, halos: true, stars: true },
  { pr: 1.25, maxW: 700, maxChars: 44, labels: 18, particles: 0.75, halos: true, stars: true },
  { pr: 1.0, maxW: 600, maxChars: 34, labels: 14, particles: 0.5, halos: true, stars: false },
  { pr: 0.8, maxW: 480, maxChars: 26, labels: 10, particles: 0.35, halos: false, stars: false },
] : [
  { pr: 2, maxW: Number(qs.get('maxw')) || 1080, maxChars: 64, labels: 30, particles: 1, halos: true, stars: true },
  { pr: 1.5, maxW: 900, maxChars: 56, labels: 24, particles: 1, halos: true, stars: true },
  { pr: 1.0, maxW: 700, maxChars: 40, labels: 16, particles: 0.6, halos: true, stars: false },
  { pr: 0.8, maxW: 540, maxChars: 28, labels: 12, particles: 0.4, halos: false, stars: false },
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
      view = createView3D(canvas, { maxChars: QL[0].maxChars, particles: PHONE ? 800 : 1200, aa: !PHONE || IOS, preserve: RENDER, floorSize: PHONE ? 512 : 1024, platform: 20 });
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
  if (offset === null || off < offset || Math.abs(off - offset) > 2) offset = off; else offset += (off - offset) * 0.02;   // min-ish filter, follows drift slowly
  if (snaps.length && s.tm < snaps[snaps.length - 1].tm - 1) { snaps = []; offset = off; }   // the server restarted the game
  snaps.push({ tm: s.tm, s, done: false });
  if (snaps.length > 40) snaps.shift();
}
const DELAY = 0.16;
function netWorld(now) {
  if (!snaps.length) return world;
  const t = now - offset - DELAY;
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
  if (l.banner) banner(l.banner);
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
const dmgNums = [];
function handleEvent(e, stale) {
  N.ev++;
  if (!stale && view && !paused) try { view.fx(e, world); } catch (err) { N.err++; }
  const S = (k, v) => { if (!stale) audio.sfx(k, audio.now(), v); };
  switch (e.k) {
    case 'hit': {
      S(e.c ? 'crit' : 'punch', e.s ? 0.5 : 1);
      if (!stale && dmgNums.length < 32) { const f = world.fighters.find((x) => x.id === e.b); if (f) dmgNums.push({ x: f.x, y: f.y, z: f.z, v: e.d, c: e.c, s: e.s, t0: clockNow() }); }
      break;
    }
    case 'block': S('block'); break;
    case 'ko': S('ko'); feed(e); break;
    case 'dash': S('dash'); break;
    case 'shield': S('shield'); break;
    case 'spin': S('spin'); break;
    case 'heal': S('heal'); break;
    case 'land': S('land', 0.6); break;
    case 'meteor': S('whistle'); break;
    case 'boom': S('boom'); break;
    case 'nuke': S('nuke'); flash(); break;
    case 'power': case 'revive': S('power'); break;
    case 'gift': S('coin'); toast(e.tier, `${tierIcon(e.tier)} ${esc(e.n)} sent ${esc(e.g)}`, `→ ${tierLabel(e.tier)}${world.phase !== 'battle' ? ' ⏳' : ''}`); break;
    case 'perk': S('power'); toast('perk', e.perk === 'follow' ? `➕ ${esc(e.n)} followed` : `🔁 ${esc(e.n)} shared`, e.perk === 'follow' ? '→ +30 armor' : '→ RAGE MODE'); break;
    case 'hype': S('heal'); S('cheer'); toast('perk', '❤️ LIKE RAIN!', 'every viewer fighter heals'); break;
    case 'phase':
      if (e.ph === 'battle') { S('go'); $('feed').innerHTML = ''; }
      if (e.ph === 'lobby') { $('winner').hidden = true; }
      break;
    case 'win': S('fanfare'); showWinner(e); break;
    case 'join': if (e.vip && !stale) toast('perk', `⭐ ${esc(e.n)} VIP drop-in!`, 'gifts skip the queue'); break;
  }
  if (e.k !== 'hit' && e.k !== 'atk') mark(e.k);
}
function clockNow() { return RENDER ? vclock : performance.now() / 1000; }
const tierIcon = (id) => (tiers.find((t) => t.id === id) || {}).icon || '🎁';
const tierLabel = (id) => (tiers.find((t) => t.id === id) || {}).label || id;
function feed(e) {
  const el = document.createElement('div'); el.className = 'k';
  const B = `<span style="color:${colorOf(e.b)}">${esc(nameOf(e.b))}</span>`;
  el.innerHTML = e.a ? `<span style="color:${colorOf(e.a)}">${esc(nameOf(e.a))}</span> ${e.m ? '☄️' : '🥊'} ${B}${e.multi ? ' <b>×' + e.multi.split(' ')[0] + '</b>' : ''}` : `🌀 ${B}`;
  const f = $('feed'); f.prepend(el); while (f.children.length > 3) f.lastChild.remove();
}
function toast(kind, title, sub) {
  const el = document.createElement('div'); el.className = 't ' + kind; el.innerHTML = `${title}<small>${sub}</small>`;
  const t = $('toasts'); t.prepend(el); while (t.children.length > 2) t.lastChild.remove();
  later(() => el.remove(), 3600);
}
let bannerT = 0;
function banner(text) {
  const b = $('banner'); b.hidden = false; b.classList.remove('show'); void b.offsetWidth; b.textContent = text; b.classList.add('show');
  clearTimeout(bannerT); bannerT = later(() => { b.hidden = true; }, 1650);
}
function flash() { const f = $('flash'); f.style.transition = 'none'; f.style.opacity = '0.85'; void f.offsetWidth; f.style.transition = 'opacity 0.8s ease-out'; f.style.opacity = '0'; }
let sayT = 0;
function say(text, url, dur) {
  N.say++;
  const el = $('say'); el.hidden = false; el.innerHTML = `<span>${esc(text)}</span>`;
  clearTimeout(sayT); sayT = later(() => { el.hidden = true; }, Math.max(1800, (dur || 2) * 1000 + 600));
  if (url) audio.voice(url, dur);
}
function showWinner(e) {
  const w = $('winner');
  if (e.a > 0) { $('winName').textContent = nameOf(e.a); $('winName').style.color = colorOf(e.a); $('winSub').textContent = `${e.kills} kill${e.kills === 1 ? '' : 's'} · ${roster.get(e.a)?.bot ? 'bots win this time – comment to take it back!' : 'GG! Shoutout! 🎉'}`; }
  else { $('winName').textContent = 'The storm'; $('winName').style.color = '#d08cff'; $('winSub').textContent = 'nobody survived!'; }
  w.hidden = false; w.style.animation = 'none'; void w.offsetWidth; w.style.animation = '';
}
function renderGifts() {
  $('gifts').innerHTML = [...tiers].reverse().map((t) => `<div><span>${t.icon} ${esc(t.label.replace('STORM ', '').replace(' STRIKE', '').replace(' MODE', '').replace(' BOOST', ''))}</span><b>${t.min}🪙</b></div>`).join('');
}
function onBoard(d) {
  if (!d || (!d.session && !d.all)) return;
  board = d;
  if (d.signed) try { localStorage.setItem('lg_brBoard', JSON.stringify(d.signed)); } catch {}
}
let boardMode = 0, boardFlip = 0;
function renderBoard(now) {
  const show = world.phase !== 'battle';
  const el = $('board'); el.hidden = !show; if (!show || !board) return;
  if (now - boardFlip > 7) { boardFlip = now; boardMode ^= 1; }
  const list = (boardMode && board.all && board.all.length ? board.all : board.session) || [];
  const title = boardMode && board.all && board.all.length ? '👑 ALL-TIME LEGENDS' : "🏆 TODAY'S CHAMPS";
  const html = list.length ? list.slice(0, 5).map((p) => `<li><span class="nm">${esc(p.name)}</span><span class="sc">${p.wins}🏆 ${p.kills}⚔️</span></li>`).join('') : '';
  const key = title + html;
  if (el.__k === key) return; el.__k = key;
  $('boardTitle').textContent = title;
  $('boardList').innerHTML = html || '<div class="empty">No winners yet – comment to be the first! 👑</div>';
}

// ------------------------------------------------------------------ HUD canvas: names, HP bars, damage numbers
function drawHud(now) {
  const pr = hud.__pr || 1, u = cssW / 100;
  hg.setTransform(1, 0, 0, 1, 0, 0); hg.clearRect(0, 0, hud.width, hud.height); hg.setTransform(pr, 0, 0, pr, 0, 0);
  if (!view || paused) return;
  const drawn = view.drawn() || world.fighters;
  const q = QL[level];
  const cand = drawn.filter((f) => f.flags & FLAG.alive).map((f) => ({ f, s: (f.flags & FLAG.cmd ? 8 : 0) + (f.flags & FLAG.crown ? 6 : 0) + (f.flags & FLAG.giant ? 4 : 0) + (f.flags & FLAG.bot ? 0 : 3) + (100 - f.hp) * 0.01 }));
  cand.sort((a, b) => b.s - a.s);
  const many = cand.length > 16;
  const fs = Math.round(u * (many ? 2.7 : 3.1));
  hg.textAlign = 'center'; hg.textBaseline = 'middle'; hg.lineJoin = 'round';
  const placed = [];
  for (const { f } of cand.slice(0, q.labels)) {
    const p = view.project(f.x, f.y + view.headY(f), f.z); if (!p.ok) continue;
    if (p.x < -40 || p.x > cssW + 40 || p.y < 0 || p.y > cssH) continue;
    // skip labels that would sit on top of one already placed (crowds)
    if (placed.some((o) => Math.abs(o.x - p.x) < u * 9 && Math.abs(o.y - p.y) < u * 4)) continue;
    placed.push(p);
    const info = f.info || {}, bot = f.flags & FLAG.bot;
    const name = (bot ? '🤖 ' : f.flags & FLAG.crown ? '👑 ' : '') + info.name;
    hg.font = `800 ${fs}px -apple-system, "Segoe UI", Roboto, sans-serif`;
    const tw = Math.min(hg.measureText(name).width, u * 30), h = fs * 1.35, y = p.y - h * 0.9;
    hg.fillStyle = bot ? 'rgba(40,40,60,0.72)' : 'rgba(14,6,34,0.78)';
    rr(p.x - tw / 2 - u * 1.4, y - h / 2, tw + u * 2.8, h, h / 2); hg.fill();
    hg.fillStyle = '#' + ((info.color ?? 0xffffff) >>> 0).toString(16).padStart(6, '0');
    rr(p.x - tw / 2 - u * 1.4, y - h / 2, u * 0.9, h, u * 0.45); hg.fill();
    hg.fillStyle = bot ? '#c8c8d8' : '#fff';
    hg.fillText(name, p.x + u * 0.2, y + 1, u * 30);
    // HP bar
    const bw = Math.max(u * 9, tw * 0.8), bh = u * 1.0, by = y + h / 2 + u * 0.5;
    hg.fillStyle = 'rgba(0,0,0,0.6)'; rr(p.x - bw / 2 - 1, by - 1, bw + 2, bh + 2, bh); hg.fill();
    hg.fillStyle = f.hp > 55 ? '#3ee07a' : f.hp > 28 ? '#ffd23f' : '#ff4d5e'; rr(p.x - bw / 2, by, (bw * Math.max(0, f.hp)) / 100, bh, bh / 2); hg.fill();
    if (f.charge > 0) { hg.fillStyle = '#ffcf3a'; hg.fillRect(p.x - bw / 2, by + bh + 1.5, (bw * f.charge) / 100, u * 0.45); }
  }
  // damage numbers
  for (let i = dmgNums.length - 1; i >= 0; i--) {
    const d = dmgNums[i], k = (now - d.t0) / 0.85;
    if (k >= 1 || k < 0) { dmgNums.splice(i, 1); continue; }
    const p = view.project(d.x, d.y + 1.2, d.z); if (!p.ok) continue;
    const pop = 1 + 0.9 * Math.pow(Math.max(0, 1 - k * 4), 2);
    const size = u * (d.c ? 6.2 : d.s ? 3 : 4.2) * pop;
    hg.font = `900 ${size}px -apple-system, "Segoe UI", Roboto, sans-serif`;
    hg.globalAlpha = Math.min(1, (1 - k) * 2.2);
    const y = p.y - k * u * 9, x = p.x + (d.c ? 0 : ((d.v * 7) % 5 - 2) * u);
    hg.lineWidth = size * 0.18; hg.strokeStyle = 'rgba(40,0,40,0.85)'; hg.strokeText((d.c ? d.v + '!' : d.v), x, y);
    hg.fillStyle = d.c ? '#ffe03a' : d.s ? '#d59bff' : '#ffffff'; hg.fillText((d.c ? d.v + '!' : d.v), x, y);
  }
  hg.globalAlpha = 1;
}
function rr(x, y, w, h, r) { hg.beginPath(); hg.moveTo(x + r, y); hg.arcTo(x + w, y, x + w, y + h, r); hg.arcTo(x + w, y + h, x, y + h, r); hg.arcTo(x, y + h, x, y, r); hg.arcTo(x, y, x + w, y, r); hg.closePath(); }

// ------------------------------------------------------------------ DOM HUD (4x a second)
let lastCount = -1;
function domHud(now) {
  const w = world, pill = $('pill');
  let txt = '';
  if (w.phase === 'lobby') txt = `ROUND ${w.round} · STARTS IN ${Math.ceil(w.tl)}s · ${w.fighters.length} IN`;
  else if (w.phase === 'battle') txt = `⚔️ ${w.n} ALIVE · ${w.tl > 0 ? 'storm in ' + Math.ceil(w.tl) + 's' : '🌀 STORM CLOSING'}`;
  else txt = `🏆 ROUND ${w.round} WINNER`;
  if (pill.__t !== txt) { $('pillTxt').textContent = txt; pill.__t = txt; }
  pill.className = w.phase;
  const qe = $('queue'); qe.hidden = !(w.q > 0); if (w.q > 0) qe.textContent = `+${w.q} waiting for the next round`;
  $('likeN').textContent = w.hype || 0; $('likeBar').style.width = Math.min(100, ((w.hype || 0) / 300) * 100) + '%';
  // last 5 seconds of the lobby: big countdown
  const c = $('count');
  if (w.phase === 'lobby' && w.tl <= 5.0 && w.tl > 0) { const n = Math.ceil(w.tl); if (n !== lastCount) { lastCount = n; c.hidden = false; c.textContent = n; c.classList.remove('tick'); void c.offsetWidth; c.classList.add('tick'); audio.sfx('beep'); } }
  else { if (!c.hidden) c.hidden = true; lastCount = -1; }
  if (w.phase !== 'ceremony') $('winner').hidden = true;
  renderBoard(now);
}

// ------------------------------------------------------------------ timers that follow the virtual clock in render mode
const timers = [];
function later(fn, ms) { if (!RENDER) return setTimeout(fn, ms); const t = { at: vclock + ms / 1000, fn }; timers.push(t); return t; }
function runTimers() { for (let i = timers.length - 1; i >= 0; i--) if (timers[i].at <= vclock) { const t = timers.splice(i, 1)[0]; t.fn(); } }
function showNotice(t) { const n = $('notice'); n.textContent = t; n.hidden = false; }
function hideNotice() { $('notice').hidden = true; }

// ------------------------------------------------------------------ main loop + auto quality
let lastFrame = 0, frames = 0, fpsT = 0, fps = 0, lowWin = 0, highWin = 0, domT = 0;
const banned = new Map();
function tick(dt, now) {
  if (LOCAL) world = localWorld(dt, now); else world = netWorld(now);
  if (LOCAL) pumpLocalSay(now);
  if (view && !paused) { try { view.frame(world, dt, now); } catch (e) { N.err++; mark('frame-err'); if (N.err > 30) to2D(); } }
  drawHud(now);
  if (now - domT > 0.25) { domT = now; domHud(now); }
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
renderGifts();
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
