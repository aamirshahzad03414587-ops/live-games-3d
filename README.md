# Live Games 3D (TikTok LIVE)

Interactive 3D games your TikTok LIVE viewers play with comments, likes and gifts. One small Node server reads the
LIVE and runs the games; the overlay page renders them. **Built iPhone-first**: open the overlay in Safari on the
phone you stream from and go LIVE with screen sharing.

| Game | Path | Status |
|---|---|---|
| ⚔️ Viewer Battle Royale | `/br` | ready |
| 🏰 Mira's Haunted Tower | `/tower` | ready |
| 🌀 Dark Dimension Siege | `/siege` | ready |

## Going LIVE with the Battle Royale (iPhone)
1. Open `https://<your-service>.onrender.com/br` in Safari. Tip: Share → **Add to Home Screen**, then open it from the
   home screen for true full screen (no address bar).
2. Tap the screen once (iPhone needs one tap to allow sound). The "🔊 Tap for sound" chip disappears.
3. Start the TikTok LIVE with screen sharing (mobile gaming). The overlay connects to your LIVE by itself
   (`TIKTOK_USERNAME`); the dot in the top-right corner turns green when your LIVE is connected.
4. Admin page (keep private): `https://<your-service>.onrender.com/admin?key=ADMIN_KEY` – connection, settings,
   test buttons, a fake crowd and a muted preview.

PC / TikTok LIVE Studio: add a Link source `https://<host>/br?mode=pc` (1080×1920). With TikFinity instead of the
direct connection, use `/br?mode=pc&key=ADMIN_KEY` (the overlay forwards TikFinity events; keep that link private)
and set `LIVE_SOURCE=tikfinity` or `both`.

## How viewers play (Battle Royale)
- **Comment anything** → you drop into the arena as an animated KayKit hero (Knight, Barbarian, Mage or Rogue) with a
  small name tag and a ring in your colour; bots are skeletons. Fighters auto-fight.
- **Nothing to read on screen**: the voice explains how to play and what each gift does (short tips in quiet moments)
  and calls the action. The screen only shows small name tags, a timer ring with the fighters-left count, and the
  winner's name at the ceremony. Gift powers show as light pillars, rings, meteors and giants.
- **Action, not text**: every gift drops a gold loot chest from the sky next to the giver; it bursts into coins and the
  fighter grabs a big 2-handed KayKit weapon (Knight greatsword, Barbarian great-axe, Mage staff + open spellbook, Rogue
  heavy crossbow) that stays in their hands for the round. A fighter's 2nd takedown makes the victim's weapon fly into
  their hands too. Hits knock fighters back with a short hit-stop; multi-kills and the last three fall in slow motion
  with a punch-in kill cam; the final two get a low, circling duel camera and the storm wall turns red-hot. The storm
  crackles with lightning and the light dims as it closes. Meteors leave scorch marks; summons and revives come down as
  pillars of light. Takedowns show as small 💀 pips (🔥 from 3) above the name tag. The champion stands on the podium
  under a spotlight with fireworks and confetti.
- `attack NAME` / `⚔️ NAME` / `@name` → go after that player · `shield` / `🛡️` · `dash` / `💨`
- `revenge` → hunt whoever last hit you · `dance` / `💃` · `color pink|gold|blue|…` → change colour
- **Likes**: +1 HP per like (max +10 a time) and charge a spin attack (4% per like); every 300 likes of the room = 
  **Like Rain** (all viewer fighters +20 HP)
- **Follow**: +30 max HP armour · **Share**: rage mode (×1.6 damage, 12 s)
- **Gifts** (total coins of one gift, × count) – and a gift always gets you in right away, even into a full arena:

| Coins | Power |
|---|---|
| 1–4 (Rose, TikTok, GG) | 🌹 Speed boost 8 s + 10 HP |
| 5–29 (Finger Heart…) | ☄️ Meteor strike: 3 meteors on the nearest enemies |
| 30–99 (Doughnut…) | 🦖 Giant mode 15 s: 2× size, +50 HP, ×1.8 damage |
| 100–499 (Hand Hearts, Corgi…) | 💖 Revive (back from the dead) or full heal + shield + giant |
| 500+ (Money Gun, Lion…) | ☢️ Storm nuke: storm blown back out + meteor rain + giant + shield |

Gifts in the lobby or the ceremony are saved and fire when the next battle starts. A dead viewer's meteors still fall.

## Rounds
Lobby (20 s countdown, people drop in, bots fill a quiet room up to 8 so it never looks empty – bots are labelled 🤖
and never appear on the leaderboard, and they hit 15% softer) → Battle (storm ring holds 6 s then shrinks over
38–95 s depending on the crowd, then a final squeeze; sudden death after 150 s) → Ceremony (podium, confetti,
shoutout, 12 s) → leaderboard of today's champs and all-time legends.

Busy rooms: up to 50 fighters in the arena (`BR_ARENA_CAP`); others wait in a queue (followers/gifters first), drop
in as reinforcements during the first 40% of the storm, and everyone rotates in next round. Viewers silent for 10+
minutes leave the queue until they comment again.

## 🏰 Mira's Haunted Tower (`/tower`)
The whole chat climbs a spooky tower together, floor by floor, narrated by Mystic Mira (the fortune-live Tarot
Mistress, voice `en-US-AvaNeural`). Go LIVE exactly like the Battle Royale, just open `/tower` instead.

- **Nothing to read on screen**: Mira speaks how to play, what each gift does, every riddle and every event. On screen:
  short name tags, the door numbers, a vote bar under each door, a small ring (time left + lantern oil, ❓ during a
  riddle) and the top climber's name at the end.
- **Comment anything** → you join the climb as a lantern-carrying KayKit adventurer (Knight, Barbarian, Mage, Rogue)
  tinted in your colour; fallen climbers float behind as see-through ghosts; ghost monsters are spectral skeletons.
- **Vote a door**: `1` `2` `3` (also `1️⃣`, `one`, `door 2`, `left` / `right` / `middle`) during the 12 s vote. The
  most-voted door opens: 💰 treasure (oil + points), 💀 trap (some of the party fall; voters of that door first; Mira's
  foretold victim goes first), 👹 monster (spam chat to hit it, `attack` hits harder), ❓ riddle (first correct
  comment wins +40 points and a shoutout; wrong/no answer costs oil).
- **Every 5th floor: a ghost boss** in the bell tower. Every comment hits, likes chip at it; lose and many fall.
- **Lantern oil = team health**: it burns down (faster higher up). 💖 Likes refill it; every 300 likes = the lanterns
  **blaze** (+15 oil, a fallen climber rises). Oil at 0 = the run ends in darkness.
- **Follow** = a spare life (saves you from one fall) · **Share** = spare life + oil.
- Fallen climbers become ghosts until a rescue, a like blaze or the next climb.

| Coins (one gift × count) | Power |
|---|---|
| 1–4 (Rose, TikTok, GG) | 🔮 Prophecy: Mira reveals the safe door (saved for the next vote if none is open) + oil |
| 5–29 (Finger Heart…) | 🛡️ Shield: blocks the next trap or boss slam (stacks to 3) |
| 30–99 (Doughnut…) | 💖 Rescue: up to 5 fallen rise + 25 oil |
| 100–499 (Corgi, Hand Hearts…) | 🪄 Skip floor: Mira's lift carries everyone past a floor (once per floor; else a blessing). In a fight: a massive hit |
| 500+ (Money Gun, Lion…) | 👻 Ghost Boss: summons a boss fight with huge loot (3-floor cooldown; else everyone rises). In a boss fight: a crushing blow |

Rooms: library, bone crypt, hall of mirrors, clock room, spider attic, alchemist's lab, ghostly ballroom; the bell
tower for bosses. Runs end when the oil is gone, everyone has fallen, or the party reaches floor 30. The highest floor
and top climbers persist (signed copy on the phone, like the BR board). Quiet rooms: bots (🤖) fill the party up to 6
and leave as real viewers join. Settings: `TOWER_GATHER_SECONDS` (16), `TOWER_VOTE_SECONDS` (12),
`TOWER_MIN_PARTY` (6), `TOWER_BOTS`, `TOWER_RIDDLE_SECONDS`, `TOWER_BOSS_SECONDS`, `MIRA_VOICE`, `MIRA_RATE`,
`MIRA_PITCH` (or the admin page). Same iPhone safety as the BR (DPR ≤ 1.5, ≤ 780 px, auto quality, context-loss → 2D
fallback, diag), one room built at a time (two while climbing), fog + flickering candle lights, GPU dust.

## 🌀 Dark Dimension Siege (`/siege`)
A chat-powered siege defense, narrated by a deep anime-trailer voice (`en-US-ChristopherNeural`, −6 % rate, −10 Hz).
Go LIVE exactly like the other games, just open `/siege`.

**Nothing to read on screen**: the narrator tells the story, explains classes and gifts, reads the story vote and
every event. On screen: short name tags, a small ring (time + Ascension barrier), a 🌍 survivors counter, a thin boss
bar and two icon bars during the story vote. Defenders are KayKit adventurers (mage = Mage, warrior = Barbarian, archer
= Rogue, healer = Knight), the hordes are KayKit skeletons (baked flip-book poses, one instanced draw per pose), the
bosses are giant KayKit figures, the city / wall / citadel are KayKit City, Halloween, Dungeon and Hexagon props.

**The story** (full-bleed anime art with a slow push-in + narration, no words on screen; the full 6-card intro plays on the first session of a
LIVE and every 3rd one after, a 2-card recap otherwise): the Dark Dimension, a magic underworld, clashed with Earth.
A grieving scientist, denied the AIDS cure for his daughter by a greedy boss, his wife and journalist brother gone,
was corrupted by an ancient book and a dark teleport stone and opened the rift at Earth's core. A hidden Mastermind
stole 5 billion souls. The Lord of Earth sacrificed 1.5 billion to awaken the Ascension System. **1.5 billion
survivors remain** (the giant counter), and they vanish unless the Dark Dimension is beaten.

- **Comment anything** → you join the citadel wall as a survivor (random class). Pick one: `mage` / `🔮` (fireballs,
  area), `warrior` / `⚔️` (holds the gate, melee), `archer` / `🏹` (fast arrows, hits fliers), `healer` / `💚`
  (heals the fallen, tops up the barrier). Every comment = a faster attack.
- **Waves** of imps, brutes and wraiths pour out of the rift. While creatures are alive, souls drain; creatures that
  reach the wall take survivors (the counter drops with a red "−N" chip).
- **Chapters**: 3 waves + a boss. Ch 1 boss **The Corrupted Scientist**, Ch 2 his **Ascended** form, Ch 3 **The
  Mastermind**. Boss attacks: beams, slams, summons; the barrier blocks them.
- **Story votes** after bosses (`1` / `2`, or the words): *Seal the rift* (fewer creatures, stronger Mastermind) vs
  *Hunt the Mastermind* (more creatures, weaker final boss); *Save the city* (+120 M survivors) vs *Save the army*
  (2 guardian heroes join for good). The choices set the ending.
- **Likes** charge the 🛡️ Ascension barrier (absorbs damage; fades slowly). Every 500 likes = **Ascension pulse**
  (all fallen rise, +20 barrier, a screen-wide blast).
- **Follow** = blessed (×1.2 power, rise again, +10 barrier) · **Share** = all fallen rise + 15 barrier.

| Coins (one gift × count) | Power |
|---|---|
| 1–4 (Rose, TikTok, GG) | ✨ Spell volley: homing bolts from you (more coins, more bolts) |
| 5–29 (Finger Heart…) | 🔷 Shield rune: +12 barrier + a volley |
| 30–99 (Doughnut…) | 🛡️ Guardian hero: a golden knight holds the gate |
| 100–499 (Hand Hearts, Corgi…) | ⚡ Ascension: screen-wide ultimate + you ascend (×3 power) |
| 500+ (Money Gun, Lion…) | 🐉 Dragon ally: a dragon burns the field; on a boss, 25 % of its life |

Endings: **🌅 EARTH SAVED** (dawn, shoutout of the top defender, the story you chose, survivors left) or **🌑 EARTH
FELL**. Top defenders (points, kills, saves) and the best "survivors saved" persist (signed copy on the phone). Quiet
rooms: 🤖 bots fill the wall up to 6 and leave as real viewers join (never on the board). Sessions run ~8–13 min.
Settings: `SIEGE_GATHER_SECONDS` (14), `SIEGE_VOTE_SECONDS` (16), `SIEGE_MIN_DEFENDERS` (6), `SIEGE_BOTS`,
`SIEGE_INTRO` (0 = no lore), `SIEGE_SPAWN_MUL`, `SIEGE_ENEMY_HP_MUL`, `NARRATOR_VOICE`, `NARRATOR_RATE`,
`NARRATOR_PITCH` (or the admin page). Same iPhone safety as the other games.

## Settings (Render environment)
`ADMIN_KEY` (admin page + PC TikFinity link), `TIKTOK_USERNAME`, `LIVE_SOURCE` (direct | tikfinity | both),
`SIGN_API_KEY` (optional), `BR_LOBBY_SECONDS` (20), `BR_ARENA_CAP` (50), `BR_MIN_FIGHTERS` (8), `BR_BOTS` (1/0),
`TTS` (0 turns the voice off), `TTS_VOICE` (en-US-GuyNeural), `TTS_RATE` (+15%). The admin page can change most of
these live.

Overlay URL options: `?mode=phone|pc` (auto), `?fps=60` (phones default to 30 fps: smooth on a 30 fps LIVE and cooler
on battery), `?q=0..3` fixed quality, `?view=2d` force the 2D fallback, `?mute=1`, `?clean=1` (no gift legend),
`?diag=0` no crash breadcrumbs, `?local=1&crowd=busy` (run the game in the page with a fake crowd, no server game).

## iPhone safety (why it doesn't crash Safari)
- 3D canvas ≤ 780 px wide, pixel ratio ≤ 1.5, auto quality (4 levels by measured FPS: pixel ratio, fighters drawn,
  labels, particles, glow), 30 fps cap on phones.
- Rigged CC0 KayKit characters, built for phones: each character file is merged once into a single skinned mesh
  (body + weapon + hat baked onto the bones = 1 draw call, ~5k triangles, one 256 px texture), every fighter shares
  one set of animation clips (`/models/anims.glb`), actors are cloned with SkeletonUtils and pooled, viewer colours
  are cached material variants. ≤ 40 animated fighters drawn on a phone (16 at the lowest quality; the rest still
  fight on the server); far/crowded fighters animate at half rate. All models: ~2 MB (meshopt-compressed GLB).
- The hex-island arena is instanced (one draw call per prop type, ~35 for the whole island and its scenery), one
  512 px atlas texture, hemisphere + one sun light, fog, gradient sky, no real-time shadows (blob shadows), no
  post-processing ("bloom" is additive glow sprites), fixed-size particle/ring/meteor pools: nothing allocated per
  frame. Everything is disposed when the view is torn down.
- WebGL context-lost handler: pauses, recovers on restore at a lower quality, switches to the **2D fallback** if it
  keeps losing the context or doesn't come back in 4 s (and when WebGL is missing).
- Sound: one AudioContext unlocked by a tap + a real silent MP3 (never an empty WAV), synthesized effects (no audio
  files), the voice is decoded MP3 from the server.
- `[diag]` crash breadcrumbs in the Render logs every 30 s (renderer, quality, fps, draw calls, memory, last events;
  the previous session's last report after a Safari crash). No names, comments, URLs or keys.
- The game runs on the server; the phone only renders 10 snapshots a second (interpolated), so a backgrounded Safari or
  a reconnect never loses the round.

## Art credits (CC0)
Characters, animations and the arena are from **KayKit by Kay Lousberg** ([kaylousberg.com](https://www.kaylousberg.com)),
released under **CC0 1.0** (public domain; credit appreciated, not required). Taken from the official GitHub repos,
pinned commits:

| Pack | Repo | Commit | Used for |
|---|---|---|---|
| Character Pack: Adventurers 1.0 | [KayKit-Character-Pack-Adventures-1.0](https://github.com/KayKit-Game-Assets/KayKit-Character-Pack-Adventures-1.0) | `672074b` | Knight, Barbarian, Mage, Rogue, hooded Rogue |
| Character Pack: Skeletons 1.0 | [KayKit-Character-Pack-Skeletons-1.0](https://github.com/KayKit-Game-Assets/KayKit-Character-Pack-Skeletons-1.0) | `15b62b9` | skeleton bots / enemies, all animation clips |
| Medieval Hexagon Pack 1.0 | [KayKit-Medieval-Hexagon-Pack-1.0](https://github.com/KayKit-Game-Assets/KayKit-Medieval-Hexagon-Pack-1.0) | `84fa4e9` | BR hex island, castle, villages, forests, clouds; siege citadel + catapult towers |
| Dungeon Remastered 1.0 | [KayKit-Dungeon-Remastered-1.0](https://github.com/KayKit-Game-Assets/KayKit-Dungeon-Remastered-1.0) | `b0ca9bd` | tower doorways, candles, banners, furniture; siege wall, torches, rubble |
| Halloween Bits 1.0 | [KayKit-Halloween-Bits-1.0](https://github.com/KayKit-Game-Assets/KayKit-Halloween-Bits-1.0) | `6dc69bf` | tower crypt props, pumpkins; siege graves, dead trees, fences, lamp posts, crypt |
| City Builder Bits 1.0 | [KayKit-City-Builder-Bits-1.0](https://github.com/KayKit-Game-Assets/KayKit-City-Builder-Bits-1.0) | `6397691` | siege ruined city: buildings, cars, street lights |

Rebuild the optimised GLBs: `bash tools/assets/fetch.sh` (clones the packs into `../assets-src` at those commits),
`node tools/assets/build-chars.mjs`, `node tools/assets/build-env.mjs br|tower|siege`.

## Develop
```
npm install
npm start                       # http://localhost:3940/br  (no ADMIN_KEY = admin only from this computer)
npm run simulate -- busy 120    # fake busy LIVE (quiet | busy | gifts | demo), BASE=... ADMIN_KEY=... for a remote server
npm test
node tools/build.mjs            # rebuild public/{br,tower,siege}/app.js after editing client/ (commit the bundle; Render doesn't build it)
MINUTES=10 node tools/soak-webkit.mjs        # iPhone-profile WebKit soak (Playwright)
node tools/render-demo.mjs screenshots/br-demo.mp4 56   # vertical demo video with sound
node tools/render-tower-demo.mjs screenshots/tower-demo.mp4 56
GAME=tower MINUTES=10 node tools/soak-webkit.mjs
node tools/render-siege-demo.mjs screenshots/siege-demo.mp4 56
GAME=siege MINUTES=10 node tools/soak-webkit.mjs
```
Code: `public/shared/br-sim.js` (rules, isomorphic), `public/shared/commands.js` (commands, gift tiers),
`public/shared/br-lines.js` (announcer), `src/games/br.js` (server loop), `src/tiktok.js` (LIVE connection, from
fortune-live), `src/tts.js` (free Edge voice + Google fallback, from fortune-live), `client/br/*` (overlay: 3D view,
2D fallback, HUD). Tower: `public/shared/tower-{sim,data,lines}.js`, `src/games/tower.js`, `src/tower-board.js`,
`client/tower/*`. Siege: `public/shared/siege-{sim,data,lines}.js`, `src/games/siege.js`, `src/siege-board.js`,
`client/siege/*`, lore art `public/siege/lore-*.jpg`.

Free hosting note: Render's free plan has 750 instance hours a month **shared by all free services**. fortune-live runs
24/7 with a keep-alive (~720–744 h), so this service has **no keep-alive**: it sleeps after 15 min without visitors and
takes ~50 s to wake. The open overlay pings the server every 4 min, so it stays awake during a LIVE. Open `/br` a minute
before going LIVE. The all-time leaderboard lives in a small file that Render's free disk loses on restart; the overlay
keeps a signed copy on the phone and gives it back after a restart.
