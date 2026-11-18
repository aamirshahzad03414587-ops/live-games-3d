// The Narrator of Dark Dimension Siege: events -> short spoken lines (+ an optional big banner word).
// A deep, calm, anime-trailer voice. Shared by the server (LIVE) and the overlay's local/demo mode.
import { LORE, CHAPTERS, CHOICES, EFFECTS, ENDINGS, CLASSES } from './siege-data.js';
const pick = (arr, rng) => arr[Math.floor(rng() * arr.length) % arr.length];
/** 1234567890 -> "1.23 billion" / "640 million" (spoken) */
export const spoken = (n) => (n >= 1e9 ? `${(Math.floor(n / 1e7) / 100).toString()} billion` : n >= 1e6 ? `${Math.round(n / 1e6)} million` : `${Math.max(0, Math.round(n)).toLocaleString('en-US')}`);
const cap = (s) => (s.charAt(0) + s.slice(1).toLowerCase()).replace('mastermind', 'Mastermind');
const MILESTONES = [1.25e9, 1e9, 7.5e8, 5e8, 2.5e8, 1e8];

const BOSS_INTRO = {
  scientist: 'He was a father once. Now the book speaks through him. The Corrupted Scientist... walks out of the rift!',
  scientist2: 'The stone has fused with his heart. The Scientist... unbound! Hit him with everything!',
  mastermind: 'At last. The one who stole five billion souls. The Mastermind... steps into the light!',
};
const BOSS_DOWN = {
  scientist: 'The Corrupted Scientist falls back into the dark. For a moment... he remembers his daughter.',
  scientist2: 'The Scientist is broken! The stone cracks... and the rift screams.',
  mastermind: 'The Mastermind is destroyed!',
};

export function makeSiegeLines({ nameOf, rng = Math.random, survivors = () => 1.5e9 }) {
  const joins = []; let joinAt = 0, ms = 0;
  const L = (text, pri, banner, extra = {}) => ({ text, pri, banner: banner || null, ...extra });
  const list = (ids) => { const n = ids.map(nameOf).filter(Boolean); if (!n.length) return ''; const s = n.slice(0, 3); const more = n.length - s.length; return (s.length === 1 ? s[0] : s.slice(0, -1).join(', ') + ' and ' + s[s.length - 1]) + (more > 0 ? ` and ${more} more` : ''); };
  return {
    lines(events, t) {
      const out = [];
      for (const e of events) {
        const N = e.id ? nameOf(e.id) : null;
        switch (e.k) {
          case 'intro': ms = 0; break;
          case 'lore': out.push(L(LORE[e.i].say, 10, null, { win: 1, lore: e.i })); break;
          case 'gather': out.push(L(pick(['Survivors, to the wall! Comment mage, warrior, archer or healer to take your post.', 'The citadel needs you. Comment to join the defense. Pick a class: mage, warrior, archer, healer.'], rng), 8, 'TO THE WALL!', { win: 1 })); break;
          case 'chapter': out.push(L(`Chapter ${e.n}. ${e.title.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase())}.`, 9, `CHAPTER ${e.n}`, { win: 1 })); break;
          case 'wave': out.push(L(e.i === 1 ? pick(['They are coming. Hold the wall!', 'The rift opens wide. Here they come!'], rng) : pick([`Wave ${e.n}. Stronger. Hungrier.`, `Wave ${e.n}! Keep firing!`, `Another wave pours out of the rift.`], rng), 5, `WAVE ${e.n}`)); break;
          case 'clear': out.push(L(pick(['The field is clear. Breathe.', 'Wave broken. Well fought, survivors.', 'They fall back. Ready yourselves.'], rng), 4, 'WAVE CLEARED')); break;
          case 'boss': out.push(L(BOSS_INTRO[e.id] || `${e.name} has come!`, 10, 'BOSS!', { win: 1 })); break;
          case 'bossatk': if (e.kind === 'summon') out.push(L('He calls more creatures from the rift!', 5)); else if (e.downed && e.downed.length > 2) out.push(L(e.blocked ? 'The barrier holds against the blast!' : 'A dark blast hits the wall! Healers, raise them!', 6)); break;
          case 'bossdown': { const B = e.by ? nameOf(e.by) : null; out.push(L(`${BOSS_DOWN[e.id] || `${e.name} is defeated!`}${B ? ` Final blow: ${B}!` : ''}`, 10, 'BOSS DEFEATED!', { win: 1 })); break; }
          case 'retreat': out.push(L(`${e.name} retreats into the rift... and drags souls with him.`, 9, 'SOULS TAKEN')); break;
          case 'toll': out.push(L(`${spoken(e.n)} souls taken.`, 6)); break;
          case 'vote': if (e.start) { const C = CHOICES[e.i]; out.push(L(`${cap(C.q)}. ${cap(C.a.label)}? Comment one. Or ${C.b.label.toLowerCase()}? Comment two. Choose!`, 10, 'VOTE!', { win: 1 })); } break;
          case 'choice': { const C = CHOICES[e.i], o = C[e.key === C.a.key ? 'a' : 'b']; out.push(L(`${e.none ? 'Nobody chose. Fate decides. ' : 'The survivors have chosen. '}${cap(o.label)}. ${EFFECTS[e.key].text}`, 10, o.label, { win: 1 })); break; }
          case 'end': {
            const top = (e.top || []).map(nameOf).filter(Boolean);
            const ending = e.saved ? (ENDINGS[(e.choices || []).join('-')] || 'Earth is saved. {n} survivors live on.').replace('{n}', spoken(e.survivors)) : `The last light goes out. Earth has fallen... on wave ${e.wave}.`;
            out.push(L(`${e.saved ? 'Earth is saved! ' : ''}${ending}${top.length ? ` Top defender: ${top[0]}! Shoutout to ${top[0]}!` : ''} ${e.saved ? 'The Ascension System remembers you.' : 'But the Ascension System will rise again.'}`, 10, e.saved ? 'EARTH SAVED' : 'EARTH FELL', { win: 1 }));
            break;
          }
          case 'gift': {
            const by = {
              volley: e.coins >= 2 ? `${N} unleashes a spell volley!` : null,
              rune: `${N} carves a shield rune into the wall!`,
              guardian: e.extended ? `${N} renews a guardian's oath!` : `${N} summons a guardian hero to the gate!`,
              awaken: e.cool ? `${N} ascends! Power times three!` : `${N} awakens the Ascension System! Ultimate!`,
              dragon: e.judgment ? `${N} calls the dragon! Judgment on the boss!` : `${N} summons a dragon! Burn them all!`,
            }[e.tier];
            if (by) out.push(L(by, { volley: 4, rune: 6, guardian: 8, awaken: 9, dragon: 10 }[e.tier], { volley: null, rune: 'SHIELD RUNE', guardian: 'GUARDIAN!', awaken: 'ASCENSION!', dragon: e.judgment ? 'JUDGMENT!' : 'DRAGON!' }[e.tier], { gift: e.tier }));
            break;
          }
          case 'bless': out.push(L(e.why === 'follow' ? `${N} follows. A blessing of light upon you.` : `${N} shares the signal! The fallen rise and the barrier glows!`, 4)); break;
          case 'pulse': out.push(L('The likes charge the barrier! Ascension pulse!', 7, 'ASCENSION PULSE')); break;
          case 'class': if (!e.bot && N && rng() < 0.35) out.push(L(`${N} becomes ${/^[aeiou]/i.test(CLASSES[e.c].label) ? 'an' : 'a'} ${CLASSES[e.c].label.toLowerCase()}.`, 2)); break;
          case 'join': if (!e.bot) joins.push(e.id); break;
        }
      }
      const sv = survivors();
      while (ms < MILESTONES.length && sv < MILESTONES[ms]) {
        if (sv > 0 && (ms + 1 >= MILESTONES.length || sv >= MILESTONES[ms + 1])) out.push(L(pick([`Only ${spoken(MILESTONES[ms])} survivors left. Hold on!`, `We are down to ${spoken(MILESTONES[ms])}. Do not let them through!`], rng), 7, `${spoken(MILESTONES[ms]).toUpperCase()} LEFT`));
        ms++;
      }
      if (joins.length && t - joinAt > 6) {
        joinAt = t;
        const ids = joins.splice(0, 60);
        out.push(L(pick([`${list(ids)} join the defense.`, `Welcome to the wall, ${list(ids)}.`], rng), 2));
      }
      return out;
    },
  };
}
