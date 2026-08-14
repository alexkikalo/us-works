import Link from "next/link";
import { PitchCard } from "@/components/PitchCard";
import { mockPitches } from "@/lib/pitches";

export default function PitchesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Pitch Cards
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Manufacturing candidates who show who they are — not just a resume.
          Hiring teams browse these cards and reach out directly.
        </p>
        <p className="text-sm text-sky-400/90 mt-3">
          Posting a public pitch card is a paid job-seeker feature ($5/mo prototype pricing).
        </p>
        <Link
          href="/pitches/create"
          className="inline-block mt-6 bg-sky-600 hover:bg-sky-500 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          Create Your Pitch Card
        </Link>
      </div>

      <div className="job-grid">
        {mockPitches.map((pitch) => (
          <PitchCard key={pitch.id} pitch={pitch} />
        ))}
      </div>
    </div>
  );
}
