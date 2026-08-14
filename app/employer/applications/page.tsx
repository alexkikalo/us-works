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

function PipelinePicker({
  value,
  onChange,
}: {
  value: PipelineStage;
  onChange: (v: PipelineStage) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {PIPELINE_STAGES.map((s) => {
        const active = value === s.value;
        return (
          <button
            key={s.value}
            type="button"
            onClick={() => onChange(s.value)}
            className={`text-xs sm:text-sm px-2.5 py-1.5 rounded-lg border transition-colors ${
              active
                ? "bg-sky-600 border-sky-500 text-white"
                : "border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500 hover:text-slate-200"
            }`}
          >
            {s.label}
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
            <div className="flex flex-wrap gap-2 mt-1.5 text-xs">
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
        <div className="text-right text-xs text-slate-500 shrink-0">
          <div>{app.submittedAt}</div>
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

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Pipeline</p>
            <PipelinePicker value={stage} onChange={onStage} />
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
          Filter by job, pipeline stage, and rating. Resume/CV when the candidate uploaded one.
        </p>
        {newInView > 0 && (
          <p className="mt-2 text-sm text-sky-400">{newInView} new in this view</p>
        )}
      </div>

      {/* Job tabs */}
      <div className="mb-4 overflow-x-auto">
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

      {/* Pipeline sub-filters (stages under the selected job context) */}
      <div className="mb-3">
        <p className="text-xs text-slate-500 mb-1.5">Pipeline</p>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setStageFilter("all")}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              stageFilter === "all"
                ? "bg-slate-100 text-slate-900 border-slate-100"
                : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            All stages
          </button>
          {PIPELINE_STAGES.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setStageFilter(s.value)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                stageFilter === s.value
                  ? "bg-slate-100 text-slate-900 border-slate-100"
                  : "border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rating filters */}
      <div className="mb-8">
        <p className="text-xs text-slate-500 mb-1.5">Rating</p>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setRatingFilter("all")}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              ratingFilter === "all"
                ? "bg-slate-100 text-slate-900 border-slate-100"
                : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            All ratings
          </button>
          <button
            type="button"
            onClick={() => setRatingFilter("unrated")}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              ratingFilter === "unrated"
                ? "bg-slate-100 text-slate-900 border-slate-100"
                : "border-slate-700 text-slate-400 hover:text-slate-200"
            }`}
          >
            Unrated
          </button>
          {RATING_UI.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => setRatingFilter(r.value)}
              className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors ${
                ratingFilter === r.value
                  ? "bg-slate-100 text-slate-900 border-slate-100"
                  : "border-slate-700 text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${r.dot}`} />
              {r.label}
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
            stage={stages[app.id] ?? app.stage}
            onRating={(v) => setRatings((r) => ({ ...r, [app.id]: v }))}
            onNotes={(n) => setNotes((prev) => ({ ...prev, [app.id]: n }))}
            onStage={(s) => setStages((prev) => ({ ...prev, [app.id]: s }))}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">
            No applications match these filters.
          </p>
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
