# US Works

**Visual manufacturing job board** — Pinterest-style platform focused on authentic shop-floor jobs.

> More than a piece of paper.

Employers post real jobs with photos of the actual work location.  
Job seekers post short elevator-pitch reels to stand out.

## Concept
- Pure matching platform (not a recruiting agency)
- Incentivizes real location photos to fight ghost/recruiter spam
- Candidates use 30–90 second video pitches instead of (or in addition to) resumes
- Manufacturing-focused (machining, assembly, fabrication, sensors, automation, production, etc.)

## Lean MVP Features (this scaffold)
- Visual masonry-style job board
- Mock job cards with photo placeholders
- Simple job posting form (supports image upload placeholders)
- Candidate pitch section
- Responsive design with Tailwind
- Basic routing

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Ready for Vercel deployment

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roadmap
1. Auth (Clerk or NextAuth)
2. Real image/video upload (Cloudflare R2 or S3 + Mux for video)
3. Database (Supabase or PlanetScale)
4. Employer paid posting flow (Stripe)
5. Search & filters (location, role, shift, skills)
6. Moderation tools for photos/videos
7. SEO category pages

## Naming Notes
Working title: **US Works**  
Alternatives that lean into manufacturing: ShopFloor, RealFloor, FloorView, MadeVisible, PlantBoard, ForgeJobs, WorkVisible, ShopSight.

## License
Private / All rights reserved for now.
