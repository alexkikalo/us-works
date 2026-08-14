"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { JobCard } from "@/components/JobCard";
import { mockJobs } from "@/lib/jobs";
import { payMidAnnual, type PayType } from "@/lib/pay";

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
  const [payDisplay, setPayDisplay] = useState<PayType>("hourly");
  const [payFilter, setPayFilter] = useState<"all" | "hourly" | "salary">("all");
  const [minAnnual, setMinAnnual] = useState<string>("");

  const filtered = useMemo(() => {
    return mockJobs.filter((job) => {
      if (payFilter === "hourly" && job.pay.type !== "hourly") return false;
      if (payFilter === "salary" && job.pay.type !== "salary") return false;
      if (minAnnual) {
        const min = Number(minAnnual);
        if (!Number.isNaN(min) && payMidAnnual(job.pay) < min) return false;
      }
      return true;
    });
  }, [payFilter, minAnnual]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Real manufacturing jobs.
          <span className="block text-sky-400 mt-1">See the actual floor.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Pay range required. View as hourly or salary — we convert both ways (FTE estimate).
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-1">
          <button
            type="button"
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
            type="button"
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

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <div className="inline-flex rounded-lg border border-slate-700 bg-slate-900 p-1">
            <button
              type="button"
              onClick={() => setPayDisplay("hourly")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                payDisplay === "hourly"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Show hourly
            </button>
            <button
              type="button"\lceil              onClick={() => setPayDisplay("salary")}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                payDisplay === "salary"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Show salary
            </button>
          </div>

          <select
            value={payFilter}
            onChange={(e) =>
              setPayFilter(e.target.value as "all" | "hourly" | "salary")
            }
            className="bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="all">Posted as: any</option>
            <option value="hourly">Posted as hourly</option>
            <option value="salary">Posted as salary</option>
          </select>

          <div className="flex items-center gap-2">
            <label className="text-slate-500 text-xs whitespace-nowrap">Min ≈ $/yr</label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="e.g. 50000"
              value={minAnnual}
              onChange={(e) => setMinAnnual(e.target.value)}
              className="w-28 bg-slate-950 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
        <p className="text-xs text-slate-500 max-w-md text-center">
          Conversions use 2,080 hrs/year (40×52) as a full-time estimate. Actual pay may include OT or different schedules.
        </p>
      </div>

      {view === "grid" ? (
        <div className="job-grid">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} payDisplay={payDisplay} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-center text-sm text-slate-500 mb-4">
            Locations shown at city level for privacy. Exact addresses are never displayed.
          </p>
          <JobMap jobs={filtered} />
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-12">No jobs match these pay filters.</p>
      )}
    </div>
  );
}
