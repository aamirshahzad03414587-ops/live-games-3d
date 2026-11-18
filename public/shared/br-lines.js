// Announcer: turns Battle Royale events into short hype lines spoken by the free TTS voice. Nothing is written on
// screen any more, so the voice also explains how to play and what every gift does (rotating tips in quiet moments).
// Shared by the server (LIVE) and the overlay's local/demo mode. Every line has a priority; the caller keeps at most a
// few pending lines and drops stale low-priority ones, so the voice never lags behind the action.
const pick = (arr, rng = Math.random) => arr[Math.floor(rng() * arr.length) % arr.length];

export function makeAnnouncer({ nameOf, rng = Math.random }) {
  const joins = []; let joinAt = 0; let lastLeft = 99;
  // how-to + gift guide, spoken in turn whenever nothing else was said for a while
  const TIPS = {
    lobby: [
      'To play, just comment anything. You drop into the arena with your own fighter.',
      'Gifts give powers! A rose is a speed boost. Five coins calls meteors. Thirty coins makes you a giant.',
      'A one hundred coin gift revives you. Five hundred coins nukes the storm!',
      'Follow for extra armor. Share the live for rage mode, double damage!',
    ],
    battle: [
      'Comment attack and a name to hunt someone down!',
      'Type shield to block, or dash to charge!',
      'Likes heal everybody! Keep tapping that screen!',
      'Comment revenge to go after whoever knocked you out last time!',
      'Send a gift for a power up right now!',
    ],
  };
  let phase = 'lobby', lastSaid = -99, tipAt = 0, tipN = { lobby: 0, battle: 0 };
  const L = (text, pri, banner, extra = {}) => ({ text, pri, banner: banner || null, ...extra });
  return {
    /** events -> lines [{ text, pri, banner }] (banner = big on-screen word, optional) */
    lines(events, t) {
      const out = [];
      for (const e of events) {
        const A = e.a ? nameOf(e.a) : null, B = e.b ? nameOf(e.b) : null;
        switch (e.k) {
          case 'phase':
            phase = e.ph;
            if (e.ph === 'lobby') { lastLeft = 99; tipN.lobby = 0; out.push(L(pick(['New round! Comment anything to drop into the arena!', 'Lobby is open! Comment anything to jump in!', 'Next battle starting soon. Comment to join the fight!'], rng), 5)); }
            if (e.ph === 'battle') out.push(L(pick([`Fight! ${e.n} fighters, only one survives!`, `Let the battle begin! ${e.n} fighters enter, one walks out!`, `Go go go! ${e.n} fighters in the arena!`], rng), 7, 'FIGHT!'));
            break;
          case 'storm':
            if (e.msg === 'closing') out.push(L(pick(['The storm is closing in!', 'Watch out, the storm is moving!'], rng), 4, 'STORM CLOSING'));
            if (e.msg === 'half') out.push(L('Half the arena is gone!', 3));
            if (e.msg === 'sudden') out.push(L('Sudden death! The storm swallows everything!', 7, 'SUDDEN DEATH'));
            break;
          case 'ko': {
            if (e.left === 1) break;   // the win line covers it
            if (e.first && A) out.push(L(`First blood! ${A} takes out ${B}!`, 6, 'FIRST BLOOD'));
            else if (e.multi && A) out.push(L(`${A}, ${e.multi.toLowerCase()}!`, 6, e.multi));
            else if (e.streak && A) out.push(L(`${A} is ${e.streak.toLowerCase()}!`, 6, e.streak));
            else if (e.giant && A) out.push(L(`${A} took down a giant!`, 6, 'GIANT SLAYER'));
            else if (e.s && !A && B && e.left <= 6) out.push(L(`${B} got swallowed by the storm!`, 3));
            if (e.left === 2) {
              out.push(L(`Final two! Who takes the crown?`, 7, 'FINAL 2'));
            } else if ((e.left === 3 || e.left === 5 || e.left === 10) && e.left < lastLeft) {
              lastLeft = e.left;
              out.push(L(e.left === 3 ? 'Final three!' : `Only ${e.left} left!`, 5, e.left === 3 ? 'FINAL 3' : `${e.left} LEFT`));
            }
            break;
          }
          case 'gift': {
            const N = e.n;
            const by = { speed: [`${N} sent a ${e.g}! Speed boost!`, `Speed boost for ${N}! Thank you for the ${e.g}!`],
              meteor: [`Meteor strike from ${N}! Take cover!`, `${N} calls down the meteors!`],
              giant: [`${N} goes giant!`, `Uh oh, ${N} just went giant mode!`],
              revive: [`${N} with the revive! Thank you!`, `${N} rises again! Huge thanks!`],
              nuke: [`Storm nuke by ${N}! The storm gets blown away!`, `${N} nuked the storm! Everyone run!`] }[e.tier];
            if (by) out.push(L(pick(by, rng), { speed: 4, meteor: 7, giant: 7, revive: 8, nuke: 9 }[e.tier], { speed: null, meteor: 'METEOR STRIKE', giant: 'GIANT MODE', revive: 'REVIVE', nuke: 'STORM NUKE' }[e.tier], { gift: e.tier }));
            break;
          }
          case 'bank': break;
          case 'perk':
            if (e.perk === 'follow') out.push(L(`Thanks for the follow, ${e.n}! Extra armor for you!`, 5));
            if (e.perk === 'share') out.push(L(`${e.n} shared the live! Rage mode, double damage!`, 5));
            break;
          case 'hype': out.push(L('Like rain! Every viewer fighter heals up!', 4, 'LIKE RAIN')); break;
          case 'revive': break;
          case 'join': if (!e.vip) joins.push(e.n); break;
          case 'win':
            if (e.a > 0) {
              const W = A, bot = !!e.bot;
              out.push(L(bot ? `${W} wins this time! Comment now and take the crown back!` : pick([`Winner winner! ${W} wins with ${e.kills} kills! Huge shoutout to ${W}!`, `${W} is the last one standing! What a champion!`, `Victory for ${W}! Everybody show ${W} some love!`], rng), 10, 'WINNER', { win: 1 }));
            } else out.push(L('Nobody survived the storm! Next round!', 10));
            break;
        }
      }
      // greet joiners in small batches, not one by one
      if (joins.length && t - joinAt > 5) {
        joinAt = t;
        const names = joins.splice(0, 50);
        const shown = names.slice(0, 3);
        const more = names.length - shown.length;
        const list = shown.length === 1 ? shown[0] : shown.slice(0, -1).join(', ') + ' and ' + shown[shown.length - 1];
        out.push(L(more > 0 ? `Welcome ${shown.join(', ')} and ${more} more! Get ready to fight!` : pick([`Welcome ${list}! You are in the arena!`, `${list} just dropped in!`], rng), 3));
      }
      if (out.length) lastSaid = t;
      // quiet for a while: one short tip (how to play / what gifts do)
      const list = TIPS[phase];
      if (list && !out.length && t - lastSaid > (phase === 'lobby' ? 5 : 11) && t - tipAt > (phase === 'lobby' ? 6 : 16)) {
        tipAt = t; lastSaid = t;
        out.push(L(list[tipN[phase]++ % list.length], 2, null, { tip: 1 }));
      }
      return out;
    },
  };
}
