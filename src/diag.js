// Overlay crash breadcrumbs: the overlay POSTs a small JSON every 30 s and when the page is hidden or closed, so after
// a phone test the Render logs show how far it got (mode, sizes, memory estimate, last events, the previous session's
// last report if it died without saying goodbye). Only whitelisted fields are logged, numbers and short strings: never
// URLs, keys, names or comments.
const NUM = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 100) / 100 : undefined);
const STR = (v, n = 40) => (typeof v === 'string' ? v.replace(/[^\w .:;/()+,=#@-]/g, '').slice(0, n) : undefined);
const BOOL = (v) => (typeof v === 'boolean' ? v : undefined);
const prune = (o) => { for (const k of Object.keys(o)) if (o[k] === undefined || (o[k] && typeof o[k] === 'object' && !Object.keys(o[k]).length)) delete o[k]; return o; };
const nums = (o, keys) => prune(Object.fromEntries(keys.map((k) => [k, NUM(o?.[k])])));

/** Keeps only known fields with safe values. */
export function sanitizeDiag(d) {
  if (!d || typeof d !== 'object') return null;
  const one = (x) => prune({
    id: STR(x.id, 12), reason: STR(x.reason, 20), up: NUM(x.up), ua: STR(x.ua, 160),
    mode: prune({ phone: BOOL(x.mode?.phone), lite: BOOL(x.mode?.lite), ios: BOOL(x.mode?.ios), kind: STR(x.mode?.kind, 12), game: STR(x.mode?.game, 8), v: NUM(x.mode?.v), q: NUM(x.mode?.q), fps: NUM(x.mode?.fps), cap: NUM(x.mode?.cap) }),
    gl: nums(x.gl, ['calls', 'tris', 'tex', 'geo', 'lost', 'restored', 'chars', 'parts']),
    scr: nums(x.scr, ['w', 'h', 'dpr']), cv: nums(x.cv, ['w', 'h']), mem: nums(x.mem, ['img', 'heap', 'heapMax']),
    dom: nums(x.dom, ['nodes', 'imgs', 'canvases', 'videos']), n: nums(x.n, ['say', 'lips', 'lost', 'ws', 'err', 'snaps', 'ev']),
    last: Array.isArray(x.last) ? x.last.slice(-8).map((e) => STR(e, 24)).filter(Boolean) : undefined,
    errs: Array.isArray(x.errs) ? x.errs.slice(-3).map((e) => STR(e, 120)).filter(Boolean) : undefined,
    vis: STR(x.vis, 10), audio: prune({ unlocked: BOOL(x.audio?.unlocked), owner: BOOL(x.audio?.owner), ctx: STR(x.audio?.ctx, 12), played: NUM(x.audio?.played), fails: NUM(x.audio?.fails) }),
  });
  const out = one(d);
  if (d.prev && typeof d.prev === 'object') out.prev = one(d.prev);
  return out;
}

/** Express handler (text/plain body so sendBeacon needs no CORS preflight). At most 20 reports a minute per address. */
export function diagRoute({ log = (s) => console.log(s), now = () => Date.now() } = {}) {
  const seen = new Map();
  return (req, res) => {
    const ip = String(req.ip || req.socket?.remoteAddress || '?'), t = now();
    const r = seen.get(ip) || { t, n: 0 }; if (t - r.t > 60e3) { r.t = t; r.n = 0; } r.n++; seen.set(ip, r);
    if (seen.size > 2000) seen.clear();
    if (r.n > 20) return res.status(429).end();
    let d = null; try { d = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch {}
    const s = sanitizeDiag(d); if (!s) return res.status(400).end();
    log('[diag] ' + JSON.stringify(s).slice(0, 1800));
    res.status(204).end();
  };
}
