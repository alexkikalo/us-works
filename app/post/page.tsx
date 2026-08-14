"use client";

import { useMemo, useState } from "react";
import {
  formatPayRange,
  hourlyToAnnual,
  annualToHourly,
  type PayType,
} from "@/lib/pay";

export default function PostJobPage() {
  const [payType, setPayType] = useState<PayType>("hourly");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const preview = useMemo(() => {
    const a = Number(min);
    const b = Number(max);
    if (!min || !max || Number.isNaN(a) || Number.isNaN(b) || b < a) return null;
    return formatPayRange({ type: payType, min: a, max: b }, payType);
  }, [payType, min, max]);

  const otherUnitHint = useMemo(() => {
    const a = Number(min);
    const b = Number(max);
    if (!min || !max || Number.isNaN(a) || Number.isNaN(b) || b < a) return null;
    if (payType === "hourly") {
      return `Candidates can also see ≈ $${hourlyToAnnual(a).toLocaleString()} – $${hourlyToAnnual(b).toLocaleString()}/yr FTE`;
    }
    return `Candidates can also see ≈ $${annualToHourly(a)} – $${annualToHourly(b)}/hr FTE`;
  }, [payType, min, max]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
        Post a Manufacturing Job
      </h1>
      <p className="text-slate-400 mb-8">
        Pay range is required. Post as hourly or salary — viewers can switch units; we convert both ways.
      </p>

      <form className="space-y-6 bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-800">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Job Title</label>
          <input
            type="text"
            placeholder="e.g. CNC Machinist — 2nd Shift"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Company</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Location</label>
            <input
              type="text"
              placeholder="City, State"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Required pay */}
        <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="text-sm font-medium text-slate-200">
              Pay range <span className="text-sky-400">(required)</span>
            </label>
            <div className="inline-flex rounded-lg border border-slate-700 p-0.5">
              <button
                type="button"
                onClick={() => setPayType("hourly")}
                className={`px-3 py-1 text-sm rounded-md ${
                  payType === "hourly"
                    ? "bg-sky-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Hourly
              </button>
              <button
                type="button"
                onClick={() => setPayType("salary")}
                className={`px-3 py-1 text-sm rounded-md ${
                  payType === "salary"
                    ? "bg-sky-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Salary
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Min {payType === "hourly" ? "($/hr)" : "($/year)"}
              </label>
              <input
                type="number"
                inputMode="decimal"
                required
                value={min}
                onChange={(e) => setMin(e.target.value)}
                placeholder={payType === "hourly" ? "28" : "65000"}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 block mb-1">
                Max {payType === "hourly" ? "($/hr)" : "($/year)"}
              </label>
              <input
                type="number"
                inputMode="decimal"
                required
                value={max}
                onChange={(e) => setMax(e.target.value)}
                placeholder={payType === "hourly" ? "34" : "78000"}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {preview && (
            <div className="text-sm">
              <p className="text-sky-400 font-medium">{preview.primary}</p>
              <p className="text-xs text-slate-500 mt-0.5">{preview.secondary}</p>
              {otherUnitHint && (
                <p className="text-xs text-slate-500 mt-2">{otherUnitHint}</p>
              )}
            </div>
          )}

          <p className="text-xs text-slate-500">
            Conversion assumes 2,080 hours/year (full-time). OT and different schedules are not included in the estimate.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Location Photos <span className="text-sky-400">(strongly recommended)</span>
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Upload 2–6 photos of the actual work area, machines, or team.
          </p>
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-10 text-center text-slate-500 bg-slate-950/50">
            Drag photos here or click to upload
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Job Description</label>
          <textarea
            rows={5}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Day-to-day, equipment, shifts, requirements..."
          />
        </div>

        <button
          type="button"
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Publish Job (mock)
        </button>
      </form>
    </div>
  );
}
