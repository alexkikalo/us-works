"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  mockApplications,
  getEmployerJobs,
  PIPELINE_STAGES,
  type Application,
  type RatingValue,
  type PipelineStage,
} from "@/lib/applications";

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
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${opt.dot}`} />
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
  stage,
  onRating,
  onNotes,
  onStage,
}: {
  app: Application;
  rating: RatingValue;
  notes: string;
  stage: PipelineStage;
  onRating: (v: RatingValue) => void;
  onNotes: (n: string) => void;
  onStage: (s: PipelineStage) => void;
}) {
  const ratingMeta = RATING_UI.find((o) => o.value === rating);
  const stageLabel =
    PIPELINE_STAGES.find((s) => s.value === stage)?.label ?? stage;

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
            <div className="flex flex-wrap gap-2 mt-1.5 text-xs items-center">
              <span className="text-slate-300 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
                {stageLabel}
              </span>
              {ratingMeta && (
                <span className="text-slate-400">
                  Rated: <span className="text-slate-200">{ratingMeta.label}</span>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-right text-xs text-slate-500 shrink-0">{app.submittedAt}</div>
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

          {app.hasResume ? (
            <button
              type="button"
              className="w-full text-xs text-sky-400 hover:text-sky-300 border border-slate-700 hover:border-sky-700 rounded-lg py-2 px-2 transition-colors"
            >
              View resume / CV
            </button>
          ) : (
            <p className="text-[10px] text-slate-600 text-center">No resume uploaded</p>
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

          <div className="flex flex-wrap items-center gap-3">
            <label className="text-xs uppercase tracking-wide text-slate-500 shrink-0">
              Pipeline
            </label>
            <select
              value={stage}
              onChange={(e) => onStage(e.target.value as PipelineStage)}
              className="bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 min-w-[160px]"
            >
              {PIPELINE_STAGES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

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
        </div>
      </div>
    </article>
  );
}

export default function EmployerApplicationsPage() {
  const jobs = useMemo(() => getEmployerJobs(mockApplications), []);
  const [jobFilter, setJobFilter] = useState<string>("all");
  const [stageFilter, setStageFilter] = useState<PipelineStage | "all">("all");
  const [ratingFilter, setRatingFilter] = useState<RatingValue | "all" | "unrated">(
    "all"
  );

  const [ratings, setRatings] = useState<Record<string, RatingValue>>(() =>
    Object.fromEntries(mockApplications.map((a) => [a.id, a.rating]))
  );
  const [notes, setNotes] = useState<Record<string, string>>(() =>
    Object.fromEntries(mockApplications.map((a) => [a.id, a.notes]))
  );
  const [stages, setStages] = useState<Record<string, PipelineStage>>(() =>
    Object.fromEntries(mockApplications.map((a) => [a.id, a.stage]))
  );

  const filtered = useMemo(() => {
    return mockApplications.filter((a) => {
      if (jobFilter !== "all" && a.jobId !== jobFilter) return false;
      const stage = stages[a.id] ?? a.stage;
      if (stageFilter !== "all" && stage !== stageFilter) return false;
      const rating = ratings[a.id] ?? a.rating;
      if (ratingFilter === "unrated" && rating !== null) return false;
      if (
        ratingFilter !== "all" &&
        ratingFilter !== "unrated" &&
        rating !== ratingFilter
      )
        return false;
      return true;
    });
  }, [jobFilter, stageFilter, ratingFilter, stages, ratings]);

  const newInView = filtered.filter(
    (a) => (stages[a.id] ?? a.stage) === "new"
  ).length;

  const selectClass =
    "w-full bg-slate-950 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Employer account · private
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Application feed
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          Pick a job, narrow with stage and rating, then work dossiers one at a time.
        </p>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-6 items-start">
        {/* Desktop sidebar only */}
        <aside className="hidden lg:block lg:sticky lg:top-20 space-y-5 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Jobs</p>
            <nav className="space-y-1">
              <button
                type="button"
                onClick={() => setJobFilter("all")}
                className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                  jobFilter === "all"
                    ? "bg-sky-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                All jobs
              </button>
              {jobs.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setJobFilter(job.id)}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors line-clamp-2 ${
                    jobFilter === job.id
                      ? "bg-sky-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                  title={job.title}
                >
                  {job.title}
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">Filters</p>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Pipeline stage</label>
              <select
                value={stageFilter}
                onChange={(e) =>
                  setStageFilter(e.target.value as PipelineStage | "all")
                }
                className={selectClass}
              >
                <option value="all">All stages</option>
                {PIPELINE_STAGES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">Rating</label>
              <select
                value={ratingFilter ?? "all"}
                onChange={(e) => {
                  const v = e.target.value;
                  if (v === "all" || v === "unrated") setRatingFilter(v);
                  else setRatingFilter(v as RatingValue);
                }}
                className={selectClass}
              >
                <option value="all">All ratings</option>
                <option value="unrated">Unrated</option>
                {RATING_UI.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>
            {(stageFilter !== "all" || ratingFilter !== "all") && (
              <button
                type="button"
                onClick={() => {
                  setStageFilter("all");
                  setRatingFilter("all");
                }}
                className="text-xs text-sky-400 hover:text-sky-300"
              >
                Clear filters
              </button>
            )}
          </div>

          {newInView > 0 && (
            <p className="text-xs text-sky-400 pt-1">{newInView} new in this view</p>
          )}
        </aside>

        <div className="space-y-5 min-w-0">
          {/* Mobile filters only */}
          <div className="lg:hidden space-y-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div>
              <label className="text-xs text-slate-500 block mb-1">Job</label>
              <select
                value={jobFilter}
                onChange={(e) => setJobFilter(e.target.value)}
                className={selectClass}
              >
                <option value="all">All jobs</option>
                {jobs.map((j) => (
                  <option key={j.id} value={j.id}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Stage</label>
                <select
                  value={stageFilter}
                  onChange={(e) =>
                    setStageFilter(e.target.value as PipelineStage | "all")
                  }
                  className={selectClass}
                >
                  <option value="all">All</option>
                  {PIPELINE_STAGES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Rating</label>
                <select
                  value={ratingFilter ?? "all"}
                  onChange={(e) => {
                    const v = e.target.value;
                    if (v === "all" || v === "unrated") setRatingFilter(v);
                    else setRatingFilter(v as RatingValue);
                  }}
                  className={selectClass}
                >
                  <option value="all">All</option>
                  <option value="unrated">Unrated</option>
                  {RATING_UI.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {newInView > 0 && (
              <p className="text-xs text-sky-400">{newInView} new in this view</p>
            )}
          </div>

          {filtered.map((app) => (
            <DossierCard
              key={app.id}
              app={app}
              rating={ratings[app.id] ?? null}
              notes={notes[app.id] ?? ""}
              stage={stages[app.id] ?? app.stage}
              onRating={(v) => setRatings((r) => ({ ...r, [app.id]: v }))}
              onNotes={(n) => setNotes((prev) => ({ ...prev, [app.id]: n }))}
              onStage={(s) => setStages((prev) => ({ ...prev, [app.id]: s }))}
            />
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-16 border border-dashed border-slate-800 rounded-xl">
              No applications match these filters.
            </p>
          )}
        </div>
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
