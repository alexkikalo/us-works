# US Works

**Visual manufacturing job board** — national US prototype.

> More than a piece of paper.

## Product decisions
- **Jobs:** Visual posts with real shop-floor photos.
- **Apply:** Optional elevator-pitch reel/photo **for that job only** — visible to that employer, not a public board.
- **No public pitch/talent board.**
- **Employer application feed:** Private inbox at `/employer/applications` — only that account’s applications (mock until auth).

## Current features
- Dark mode
- Job grid + map view (Leaflet, city-level proximity)
- Find a Job | Post a Job | Applications (employer feed)
- Apply flow with optional job-scoped pitch media
- Employer application feed with status (new / reviewed / archived)

## Security posture (target)
- Application data and media visible only to the owning employer account
- No public candidate directory
- Private storage + short-lived media URLs in production
- Auth required before production use of the applications inbox

## Tech
- Next.js 14 + Tailwind
- Leaflet via dynamic import (`ssr: false`)

```bash
npm install
npm run dev
```

## License
Private / All rights reserved for now.
