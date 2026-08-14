"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { JobCard } from "@/components/JobCard";
import { mockJobs } from "@/lib/jobs";

// Leaflet must not be imported during SSR
const JobMap = dynamic(
  () => import("@/components/JobMap").then((m) => m.JobMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500">
        Loading map…
      </div>
    ),
  }
);

export default function HomePage() {
  const [view, setView] = useState<"grid" | "map">("grid");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Real manufacturing jobs.
          <span className="block text-sky-400 mt-1">See the actual floor.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Employers show the real shop. Candidates show who they are.
          No ghost postings. More than a piece of paper.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-1">
          <button
            onClick={() => setView("grid")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
              view === "grid"
                ? "bg-sky-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("map")}
            className={`px-5 py-2 text-sm font-medium rounded-md transition-colors ${
              view === "map"
                ? "bg-sky-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Map
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="job-grid">
          {mockJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center text-sm text-slate-500 mb-4">
            Locations shown at city level for privacy. Exact addresses are never displayed.
          </p>
          <JobMap jobs={mockJobs} />
        </div>
      )}
    </div>
  );
}
