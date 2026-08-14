# US Works

**Visual manufacturing job board** — national US prototype.

> More than a piece of paper.

## Current Features
- Dark mode
- Visual job grid + **Map view** (Leaflet, city-level proximity only)
- Find a Job | Post a Job | **Pitch Cards**
- Apply flow with optional elevator-pitch reel/photo
- **Pitch Cards** — job seekers post public cards for hiring teams to browse (paid seeker feature)
- 15 mock jobs + 8 mock pitch cards across the US

## Privacy
Job locations are city-level only. Exact street addresses are never shown.

## Tech
- Next.js 14 + Tailwind
- Leaflet via dynamic import (`ssr: false`) to avoid window errors on build

## Getting Started

```bash
npm install
npm run dev
```

## Notes
- Applying to jobs stays free.
- Public pitch cards are positioned as a low-cost paid job-seeker feature ($5/mo prototype).
- Ranking richer job posts higher is intentional product behavior, not recruiting.

## License
Private / All rights reserved for now.
