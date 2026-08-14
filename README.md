# US Works

**Visual manufacturing job board** — national US prototype.

> More than a piece of paper.

## Product decisions
- **Jobs:** Visual posts with real shop-floor photos; structured perks preferred (no housing-style perks).
- **Apply:** Optional elevator-pitch reel/photo **for that job only** — visible to that employer, not a public board.
- **No public pitch/talent board** — reduced risk of appearance-based targeting and misuse.

## Current features
- Dark mode
- Job grid + map view (Leaflet, city-level proximity only)
- Find a Job | Post a Job
- Apply flow with optional pitch media scoped to the application

## Privacy / safety stance
- City-level locations only on the map
- Application media is job-scoped, not publicly browsable
- Exact street addresses never shown

## Tech
- Next.js 14 + Tailwind
- Leaflet via dynamic import (`ssr: false`)

## Getting started

```bash
npm install
npm run dev
```

## License
Private / All rights reserved for now.
