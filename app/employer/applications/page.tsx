"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  mockApplications,
  getEmployerJobs,
  type Application,
  type RatingValue,
} from "@/lib/applications";

/** Full class strings kept in this file so Tailwind does not purge them */
const RATING_UI: {
  value: Exclude<RatingValue, null>;
  label: string;
  dot: string;
  selected: string;
}[] = [
  {
    value: "lets_talk",
    label: "Let's talk",
    dot: "bg-emerald-500",
    selected:
      "border-emerald-600 bg-emerald-950 text-emerald-300 ring-2 ring-emerald-500/50",
  },
  {
    value: "promising",
    label: "Promising",
    dot: "bg-sky-500",
    selected: "border-sky-600 bg-sky-950 text-sky-300 ring-2 ring-sky-500/50",
  },
  {
    value: "sitting",
    label: "Sitting on it",
    dot: "bg-amber-500",
    selected:
      "border-amber-600 bg-amber-950 text-amber-300 ring-2 ring-amber-500/50",
  },
  {
    value: "long_shot",
    label: "Long shot",
    dot: "bg-orange-500",
    selected:
      "border-orange-600 bg-orange-950 text-orange-300 ring-2 ring-orange-500/50",
  },
  {
    value: "not_a_fit",
    label: "Not a fit",
    dot: "bg-rose-500",
    selected:
      "border-rose-700 bg-rose-950/80 text-rose-300 ring-2 ring-rose-500/40",
  },
];

function RatingPicker({
  value,
  onChange,
}: {
  value: RatingValue;
  onChange: (v: RatingValue) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {RATING_UI.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(selected ? null : opt.value)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all ${
              selected
                ? opt.selected
                : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${opt.dot} ${
                selected ? "opacity-100" : "opacity-80"
              }`}
            />
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function DossierCard({
  app,
  rating,
  notes,
  onRating,
  onNotes,
}: {
  app: Application;
  rating: RatingValue;
  notes: string;
  onRating: (v: RatingValue) => void;
  onNotes: (n: string) => void;
}) {
  const ratingMeta = RATING_UI.find((o) => o.value === rating);

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="border-b border-slate-800 bg-slate-950/70 px-5 py-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <span
            className={`mt-1.5 h-3 w-3 rounded-full shrink-0 ring-2 ring-slate-900 ${
              ratingMeta ? ratingMeta.dot : "bg-slate-600"
            }`}
            title={ratingMeta ? ratingMeta.label : "Unrated"}
          />
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white tracking-tight">
              {app.candidateName}
            </h2>
            <p className="text-sm text-slate-400 mt-0.5 truncate">
              Applied to <span className="text-sky-400">{app.jobTitle}</span>
            </p>
            {ratingMeta && (
              <p className="text-xs mt-1 text-slate-400">
                Rated:{" "}
                <span className="text-slate-200 font-medium">{ratingMeta.label}</span>
              </p>
            )}
          </div>
        </div>
        <div className="text-right text-xs text-slate-500 shrink-0">
          <div className="uppercase tracking-wide">{app.status}</div>
          <div className="mt-0.5">{app.submittedAt}</div>
        </div>
      </div>

      <div className="p-5 grid md:grid-cols-[132px_1fr] gap-5">
        <div className="flex flex-col items-center gap-2">
          {app.hasPitchMedia ? (
            <>
              <div className="w-[120px] aspect-[9/16] rounded-lg bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center px-2">
                <span className="text-sky-400 text-xs font-medium">Portrait reel</span>
                <span className="text-[10px] text-slate-500 mt-1 leading-snug">
                  {app.pitchNote || "Vertical phone video"}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 text-center">Private · this job only</p>
            </>
          ) : (
            <div className="w-[120px] aspect-[9/16] rounded-lg bg-slate-950 border border-dashed border-slate-700 flex items-center justify-center">
              <span className="text-[10px] text-slate-600 text-center px-2">No pitch media</span>
            </div>
          )}
        </div>

        <div className="min-w-0 space-y-4">
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Email</dt>
              <dd className="text-slate-200 mt-0.5 break-all">{app.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Phone</dt>
              <dd className="text-slate-200 mt-0.5">{app.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Location</dt>
              <dd className="text-slate-200 mt-0.5">{app.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-slate-500">Experience</dt>
              <dd className="text-slate-200 mt-0.5">{app.experience}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-wide text-slate-500">Skills</dt>
              <dd className="text-slate-200 mt-0.5">{app.skills}</dd>
            </div>
          </dl>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Your take</p>
            <RatingPicker value={rating} onChange={onRating} />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-slate-500 block mb-1.5">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => onNotes(e.target.value)}
              rows={2}
              placeholder="Private notes for your hiring team…"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              type="button"
              className="text-sm bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              Mark reviewed
            </button>
            <button
              type="button"
              className="text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors"
            >
              Archive
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EmployerApplicationsPage() {
  const jobs = useMemo(() => getEmployerJobs(mockApplications), []);
  const [jobFilter, setJobFilter] = useState<string>("all");
  const [ratings, setRatings] = useState<Record<string, RatingValue>>(() =>
    Object.fromEntries(mockApplications.map((a) => [a.id, a.rating]))
  );
  const [notes, setNotes] = useState<Record<string, string>>(() =>
    Object.fromEntries(mockApplications.map((a) => [a.id, a.notes]))
  );

  const filtered = useMemo(() => {
    if (jobFilter === "all") return mockApplications;
    return mockApplications.filter((a) => a.jobId === jobFilter);
  }, [jobFilter]);

  const newCount = filtered.filter((a) => a.status === "new").length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Employer account · private
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Application feed
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Review candidates by job. Portrait pitch media stays private to this account.
        </p>
        {newCount > 0 && (
          <p className="mt-2 text-sm text-sky-400">{newCount} new in this view</p>
        )}
      </div>

      <div className="mb-8 overflow-x-auto">
        <div className="inline-flex min-w-full sm:min-w-0 gap-1 p-1 rounded-xl border border-slate-800 bg-slate-950">
          <button
            type="button"
            onClick={() => setJobFilter("all")}
            className={`shrink-0 px-3 py-2 text-sm rounded-lg transition-colors ${
              jobFilter === "all"
                ? "bg-sky-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-900"
            }`}
          >
            All jobs
          </button>
          {jobs.map((job) => (
            <button
              key={job.id}
              type="button"
              onClick={() => setJobFilter(job.id)}
              className={`shrink-0 px-3 py-2 text-sm rounded-lg transition-colors max-w-[200px] truncate ${
                jobFilter === job.id
                  ? "bg-sky-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
              title={job.title}
            >
              {job.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        {filtered.map((app) => (
          <DossierCard
            key={app.id}
            app={app}
            rating={ratings[app.id] ?? null}
            notes={notes[app.id] ?? ""}
            onRating={(v) => setRatings((r) => ({ ...r, [app.id]: v }))}
            onNotes={(n) => setNotes((prev) => ({ ...prev, [app.id]: n }))}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">No applications for this job yet.</p>
        )}
      </div>

      <p className="mt-10 text-center text-xs text-slate-500">
        Account-scoped.{" "}
        <Link href="/post" className="text-sky-500 hover:text-sky-400">
          Post a job
        </Link>
      </p>
    </div>
  );
}
