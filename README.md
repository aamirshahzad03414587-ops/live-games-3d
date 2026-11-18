# Live Games 3D (TikTok LIVE)

Interactive 3D games your TikTok LIVE viewers play with comments, likes and gifts. One small Node server reads the
LIVE and runs the games; the overlay page renders them. **Built iPhone-first**: open the overlay in Safari on the
phone you stream from and go LIVE with screen sharing.

| Game | Path | Status |
|---|---|---|
| ⚔️ Viewer Battle Royale | `/br` | ready |
| 🏰 Mira's Haunted Tower | `/tower` | next |
| 🌌 Dark Dimension Siege | `/siege` | later |

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

## How viewers play
- **Comment anything** → you drop into the arena as a cute fighter with your name and colour. Fighters auto-fight.
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
- Instanced low-poly chibis: ~22 draw calls for the whole scene, ≤ 56 fighters drawn (the rest still fight and show on
  the leaderboard/kill feed), 3 small textures (procedural), no real-time shadows (blob shadows), no post-processing
  ("bloom" is additive glow sprites), fixed-size particle/ring/meteor pools: nothing allocated per frame.
- WebGL context-lost handler: pauses, recovers on restore at a lower quality, switches to the **2D fallback** if it
  keeps losing the context or doesn't come back in 4 s (and when WebGL is missing).
- Sound: one AudioContext unlocked by a tap + a real silent MP3 (never an empty WAV), synthesized effects (no audio
  files), the voice is decoded MP3 from the server.
- `[diag]` crash breadcrumbs in the Render logs every 30 s (renderer, quality, fps, draw calls, memory, last events;
  the previous session's last report after a Safari crash). No names, comments, URLs or keys.
- The game runs on the server; the phone only renders 10 snapshots a second (interpolated), so a backgrounded Safari or
  a reconnect never loses the round.

## Develop
```
npm install
npm start                       # http://localhost:3940/br  (no ADMIN_KEY = admin only from this computer)
npm run simulate -- busy 120    # fake busy LIVE (quiet | busy | gifts | demo), BASE=... ADMIN_KEY=... for a remote server
npm test
node tools/build.mjs            # rebuild public/br/app.js after editing client/ (commit the bundle; Render doesn't build it)
MINUTES=10 node tools/soak-webkit.mjs        # iPhone-profile WebKit soak (Playwright)
node tools/render-demo.mjs screenshots/br-demo.mp4 56   # vertical demo video with sound
```
Code: `public/shared/br-sim.js` (rules, isomorphic), `public/shared/commands.js` (commands, gift tiers),
`public/shared/br-lines.js` (announcer), `src/games/br.js` (server loop), `src/tiktok.js` (LIVE connection, from
fortune-live), `src/tts.js` (free Edge voice + Google fallback, from fortune-live), `client/br/*` (overlay: 3D view,
2D fallback, HUD).

Free hosting note: Render's free plan has 750 instance hours a month **shared by all free services**. fortune-live runs
24/7 with a keep-alive (~720–744 h), so this service has **no keep-alive**: it sleeps after 15 min without visitors and
takes ~50 s to wake. The open overlay pings the server every 4 min, so it stays awake during a LIVE. Open `/br` a minute
before going LIVE. The all-time leaderboard lives in a small file that Render's free disk loses on restart; the overlay
keeps a signed copy on the phone and gives it back after a restart.
