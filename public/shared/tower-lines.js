// Mystic Mira narrates the Haunted Tower: events -> short spoken lines (+ an optional big banner word).
// Shared by the server (LIVE) and the overlay's local/demo mode. Priorities let the voice skip stale chatter.
import { THEMES, BOSS_THEME, RIDDLES } from './tower-data.js';
const pick = (arr, rng) => arr[Math.floor(rng() * arr.length) % arr.length];
const NUM = ['one', 'two', 'three'];

const INTRO = {
  library: ['The books are whispering your names...', 'Shh. The books are listening.'],
  crypt: ['Mind the bones, darlings. Some of them still move.', 'Cold, is it not? The dead like it that way.'],
  mirror: ['Do not trust your reflection in here.', 'So many of you... and so many mirrors.'],
  clock: ['Tick, tock. Time is not on your side.', 'Every gear in here wants a finger.'],
  attic: ['Something with too many legs lives up here.', 'Watch the webs, little lanterns.'],
  lab: ['Do not drink anything green.', 'Bubbling potions, and bubbling trouble.'],
  ballroom: ['The ghosts are still dancing. Do not cut in.', 'One last waltz for the dead.'],
};

export function makeTowerLines({ nameOf, rng = Math.random }) {
  const joins = []; let joinAt = 0;
  const L = (text, pri, banner, extra = {}) => ({ text, pri, banner: banner || null, ...extra });
  const list = (ids) => { const n = ids.map(nameOf).filter(Boolean); if (!n.length) return ''; const s = n.slice(0, 3); const more = n.length - s.length; return (s.length === 1 ? s[0] : s.slice(0, -1).join(', ') + ' and ' + s[s.length - 1]) + (more > 0 ? ` and ${more} more` : ''); };
  return {
    lines(events, t) {
      const out = [];
      for (const e of events) {
        const N = e.id ? nameOf(e.id) : null;
        switch (e.k) {
          case 'gather': out.push(L(pick(['Gather, climbers! Comment anything to take a lantern. The tower is waiting.', 'A new climb begins. Comment to join the party, my darlings.'], rng), 6, 'NEW CLIMB')); break;
          case 'floor': {
            const th = e.boss ? BOSS_THEME : THEMES[e.th];
            if (e.boss) { out.push(L(`Floor ${e.n}. The bell tower. Can you hear it? Something is coming.`, 8, `FLOOR ${e.n} · BOSS`)); break; }
            let s = `Floor ${e.n}. ${th.name}. ${pick(INTRO[th.id] || [''], rng)}`;
            const P = e.predict ? nameOf(e.predict.id) : null;
            if (P) s += e.predict.kind === 'fall' ? ` I foresee... ${P} will fall.` : ` I foresee gold in ${P}'s future.`;
            out.push(L(s, 7, `FLOOR ${e.n}`));
            break;
          }
          case 'vote': if (e.start) out.push(L(e.doors === 2 ? 'Left or right? Comment one or two!' : 'Choose a door. Comment one, two, or three!', 6, 'VOTE!')); break;
          case 'prophecy': out.push(L(`The cards have spoken. Door ${NUM[e.door]} is safe.`, 8)); break;
          case 'reveal': {
            const k = e.kinds[e.door];
            const pre = e.none ? 'Nobody chose? Then I choose for you. ' : '';
            out.push(L(pre + { treasure: pick(['Treasure! The spirits smile on you.', 'Gold! Lovely, lovely gold.'], rng), trap: pick(['A trap! Run, little lanterns!', 'Oh dear. A trap.'], rng), monster: pick(['Something hungry wakes up...', 'A monster! Fight it! Spam the chat!'], rng), riddle: 'A riddle blocks the way.' }[k], 7, { treasure: 'TREASURE!', trap: 'TRAP!', monster: 'MONSTER!', riddle: 'RIDDLE!' }[k]));
            break;
          }
          case 'treasure': if (e.lucky) out.push(L(`Just as I foresaw. ${nameOf(e.lucky)} grabs the biggest jewel.`, 6)); break;
          case 'trap': case 'mlose': {
            if (e.k === 'mlose') out.push(L(e.boss ? `${e.name} wins this time... the lanterns flicker.` : `The beast was too strong.`, 7));
            if (e.blocked) { out.push(L('The shield holds! Nobody falls.', 7, 'BLOCKED!')); break; }
            if (e.foretold) out.push(L(`Just as I foresaw. Poor ${nameOf(e.foretold)}.`, 8, 'FORETOLD'));
            const rest = e.fell.filter((id) => id !== e.foretold);
            if (rest.length) out.push(L(`${list(rest)} ${rest.length > 1 ? 'fall' : 'falls'} into the dark.`, 6));
            if (e.saved && e.saved.length) out.push(L(`${list(e.saved)} ${e.saved.length > 1 ? 'were' : 'was'} saved by a spare life!`, 5));
            break;
          }
          case 'monster':
            if (e.boss) out.push(L(e.summoned ? `${e.name} has been summoned! Fight, all of you! Spam the chat!` : `${e.name} rises! Spam the chat to fight! Likes hurt it too!`, 9, e.summoned ? 'GHOST BOSS!' : 'BOSS FIGHT!'));
            else out.push(L(`It is ${e.name}! Comment anything to hit it!`, 7));
            break;
          case 'mwin': {
            const T = e.top ? nameOf(e.top) : null;
            if (e.boss) out.push(L(`${e.name} is banished!${T ? ` ${T} struck hardest!` : ''}${e.rescued ? ' The fallen rise again!' : ''}`, 9, 'BOSS DOWN!'));
            else out.push(L(`Banished!${T ? ` ${T} struck hardest.` : ''}`, 6, 'VICTORY!'));
            break;
          }
          case 'matk': if (e.slam) out.push(L(e.blocked ? 'The boss slams down! The shield holds!' : 'The boss slams the floor!', 5)); break;
          case 'riddle': out.push(L(`Answer me this. ${RIDDLES[e.i][0]} First to comment the answer wins!`, 9, 'RIDDLE!', { riddle: 1 })); break;
          case 'rwin': out.push(L(e.bot ? `${N} solved it. The answer was ${e.a}. Come on chat, beat the bots!` : `${N} has it! The answer was ${e.a}. Clever soul!`, 9, e.bot ? null : 'SOLVED!', { win: 1 })); break;
          case 'rfail': out.push(L(`Nobody? The answer was ${e.a}. The tower takes some of your light.`, 7)); break;
          case 'climb': out.push(L(e.lift ? 'Into my lift, darlings! We rise past a floor!' : pick(['Up the stairs we go.', 'Onward. Upward.', 'Keep climbing. Keep your lanterns lit.'], rng), e.lift ? 7 : 3, e.lift ? "MIRA'S LIFT" : null)); break;
          case 'gift': {
            const by = {
              prophecy: e.banked ? `${N} lights a candle. I will reveal the next safe door.` : `${N} asks the cards. Look, the safe door glows!`,
              shield: `${N} casts a shield over the party!`,
              rescue: e.n ? `${N} rescues the fallen! Rise, little ghosts!` : `${N} fills the lanterns! Thank you!`,
              skip: e.blessing ? `${N} blesses the party! Thank you!` : e.hitBoss ? `${N} strikes with magic!` : `${N} calls my lift!`,
              boss: e.blessing ? `${N} blesses the whole tower! The fallen rise!` : e.hitBoss ? `${N} hurls a ghost bomb at the boss!` : `${N} summons a ghost boss! Brave... or foolish.`,
            }[e.tier];
            if (by) out.push(L(by, { prophecy: 6, shield: 7, rescue: 8, skip: 8, boss: 9 }[e.tier], { prophecy: e.banked ? null : 'PROPHECY', shield: 'SHIELD!', rescue: 'RESCUE!', skip: e.blessing ? 'BLESSING' : "MIRA'S LIFT", boss: e.blessing ? 'BLESSING' : 'GHOST BOSS!' }[e.tier], { gift: e.tier }));
            break;
          }
          case 'follow': out.push(L(`Thank you for the follow, ${N}. A spare life for you.`, 4)); break;
          case 'share': out.push(L(`${N} shared the tower! A spare life, and more oil.`, 4)); break;
          case 'blaze': out.push(L(e.rescued ? `The lanterns blaze! Thank you for the likes! ${nameOf(e.rescued)} rises again!` : 'The lanterns blaze! Thank you for the likes!', 5, 'LANTERNS BLAZE')); break;
          case 'lowfuel': out.push(L('Your lanterns are fading! Tap the screen, send likes, keep them lit!', 7, 'LOW OIL!')); break;
          case 'join': if (!e.bot) joins.push(e.id); break;
          case 'end': {
            const T = e.top && e.top.length ? nameOf(e.top[0]) : null;
            const why = e.reason === 'top' ? `You reached the top of my tower! Floor ${e.floor}!` : e.reason === 'dark' ? `The lanterns go dark on floor ${e.floor}.` : `Everyone has fallen on floor ${e.floor}.`;
            out.push(L(`${why}${T ? ` Top climber: ${T}! Shoutout to ${T}!` : ''} A new climb begins soon.`, 10, e.reason === 'top' ? 'THE TOP!' : `FLOOR ${e.floor}`, { win: 1 }));
            break;
          }
        }
      }
      if (joins.length && t - joinAt > 6) {
        joinAt = t;
        const ids = joins.splice(0, 60);
        out.push(L(pick([`Welcome ${list(ids)}. Take a lantern.`, `${list(ids)} joined the climb.`], rng), 2));
      }
      return out;
    },
  };
}
