import Image from "next/image";
import type { Pitch } from "@/lib/pitches";

export function PitchCard({ pitch }: { pitch: Pitch }) {
  return (
    <article className="job-card bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-sky-900/20">
      <div className="relative aspect-square bg-slate-800">
        <Image
          src={pitch.photoUrl}
          alt={pitch.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {pitch.hasReel && (
          <div className="absolute top-3 right-3 bg-sky-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            Reel
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-white leading-snug">{pitch.name}</h2>
        <p className="text-sm text-sky-400 mt-0.5">{pitch.headline}</p>
        <p className="text-sm text-slate-500 mt-1">{pitch.location}</p>
        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{pitch.summary}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {pitch.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-3">{pitch.shifts}</p>
        <button
          type="button"
          className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors border border-slate-700"
        >
          View Pitch
        </button>
      </div>
    </article>
  );
}
