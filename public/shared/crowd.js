// Fake LIVE audience for tests, demos and the admin page's "crowd" button: comments, commands, likes, gifts, follows,
// shares. mode: quiet (3 viewers), busy (ramps to ~220 viewers), gifts (a gift storm), demo (a scripted 60 s show).
const FIRST = ['Sara', 'Ali', 'Hina', 'Omar', 'Zara', 'Bilal', 'Noor', 'Ayan', 'Esha', 'Faraz', 'Iman', 'Junaid', 'Kinza', 'Laiba', 'Moiz', 'Nimra', 'Rida', 'Saad', 'Tania', 'Umer', 'Maya', 'Leo', 'Aisha', 'Yusuf', 'Lina', 'Kai', 'Mia', 'Zain', 'Sofia', 'Adam', 'Hamza', 'Amna', 'Riya', 'Dev', 'Luna', 'Max'];
const TAIL = ['', '_x', '22', '.official', '_99', '🌸', 'xo', '_07', '.live', '✨', '_pk', '786'];
const CHAT = ['hi', 'join', 'lets go', 'me!', 'hello from dubai', 'gg', 'this is fire', 'shield', 'dash', '💨', '🛡️', 'dance', 'color pink', 'color gold', 'revenge', 'wow', '🔥🔥', 'i will win', 'play', '1', '2', '3', '2', 'left', 'right', '3️⃣', 'candle', 'clock', 'echo', 'map', 'attack'];
export const GIFTS = [['Rose', 1], ['TikTok', 1], ['Finger Heart', 5], ['GG', 1], ['Doughnut', 30], ['Hand Hearts', 100], ['Corgi', 299], ['Money Gun', 500], ['Lion', 29999]];

export function crowd(mode = 'busy', rng = Math.random) {
  const r = (n) => Math.floor(rng() * n);
  const people = [];
  const newPerson = () => { const n = FIRST[r(FIRST.length)] + TAIL[r(TAIL.length)]; const p = { uid: n.toLowerCase().replace(/[^\w.]/g, '') + people.length, name: n }; people.push(p); return p; };
  const anyone = () => (people.length ? people[r(people.length)] : newPerson());
  let t = 0, acc = 0;
  const target = mode === 'quiet' ? 3 : mode === 'gifts' ? 30 : mode === 'demo' ? 40 : 220;
  return {
    people,
    /** advance dt seconds; returns the events that happened */
    tick(dt) {
      t += dt; acc += dt; const out = [];
      const rate = mode === 'quiet' ? 0.6 : mode === 'busy' ? Math.min(14, 2 + t / 6) : mode === 'demo' ? 5 : 4;   // events per second
      while (acc > 1 / rate) {
        acc -= 1 / rate;
        const ramp = people.length < Math.min(target, mode === 'busy' ? 10 + t * 2.5 : target);
        const p = ramp && rng() < 0.6 ? newPerson() : anyone();
        const x = rng();
        if (x < 0.5) {
          let text = CHAT[r(CHAT.length)];
          if (rng() < 0.25 && people.length > 2) { const o = anyone(); if (o !== p) text = (rng() < 0.5 ? 'attack ' : '⚔️ ') + o.name.replace(/[^\w]/g, '').slice(0, 6); }
          out.push({ type: 'chat', uid: p.uid, name: p.name, text });
        } else if (x < 0.8) out.push({ type: 'like', uid: p.uid, name: p.name, count: 1 + r(15) });
        else if (x < (mode === 'gifts' ? 0.98 : 0.9)) {
          const g = rng() < 0.75 ? GIFTS[r(4)] : GIFTS[4 + r(mode === 'gifts' ? 4 : 3)];
          out.push({ type: 'gift', uid: p.uid, name: p.name, giftName: g[0], coins: g[1], count: rng() < 0.2 ? 1 + r(5) : 1 });
        } else if (x < 0.95) out.push({ type: 'follow', uid: p.uid, name: p.name });
        else out.push({ type: 'share', uid: p.uid, name: p.name });
      }
      return out;
    },
  };
}
