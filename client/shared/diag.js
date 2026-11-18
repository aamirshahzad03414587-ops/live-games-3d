// Crash breadcrumbs: a small JSON to /diag every 30 s, when the page is hidden and on pagehide. If Safari kills the tab
// (memory), the next start sends the previous session's last report, so the Render logs show how far it got.
// Only numbers and short labels: no URLs, keys, names or comments. ?diag=0 turns it off.
export function startDiag(get, { off = false } = {}) {
  const id = Math.random().toString(36).slice(2, 8), t0 = performance.now(), errs = [];
  addEventListener('error', (e) => { errs.push(String(e.message || 'error').slice(0, 110)); if (errs.length > 3) errs.shift(); });
  addEventListener('unhandledrejection', (e) => { errs.push(('rej ' + (e.reason && e.reason.message || e.reason)).slice(0, 110)); if (errs.length > 3) errs.shift(); });
  const report = (reason) => {
    const d = get();
    return { id, reason, up: (performance.now() - t0) / 1000, ua: navigator.userAgent.slice(0, 160), scr: { w: screen.width, h: screen.height, dpr: devicePixelRatio }, vis: document.visibilityState, errs: errs.slice(), ...d,
      mem: { ...(d.mem || {}), heap: performance.memory ? performance.memory.usedJSHeapSize / 1048576 : undefined } };
  };
  const send = (reason) => {
    if (off) return;
    const r = report(reason); let body = JSON.stringify(r);
    if (reason === 'start') { try { const p = JSON.parse(localStorage.getItem('lg_diagLast') || 'null'); if (p && p.reason !== 'pagehide') body = JSON.stringify({ ...r, prev: p }); } catch {} }
    try { localStorage.setItem('lg_diagLast', JSON.stringify(r)); } catch {}
    try { if (!(navigator.sendBeacon && navigator.sendBeacon('/diag', new Blob([body], { type: 'text/plain' })))) fetch('/diag', { method: 'POST', body, keepalive: true }).catch(() => {}); } catch {}
  };
  setTimeout(() => send('start'), 4000);
  setInterval(() => send('tick'), 30000);
  document.addEventListener('visibilitychange', () => { if (document.hidden) send('hidden'); });
  addEventListener('pagehide', () => send('pagehide'));
  return { send, errs };
}
