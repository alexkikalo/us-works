import Link from "next/link";
import { mockApplications } from "@/lib/applications";

const statusStyles = {
  new: "bg-sky-900/50 text-sky-300 border-sky-700",
  reviewed: "bg-slate-800 text-slate-300 border-slate-600",
  archived: "bg-slate-900 text-slate-500 border-slate-700",
};

export default function EmployerApplicationsPage() {
  const newCount = mockApplications.filter((a) => a.status === "new").length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Employer account · private
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Application feed
        </h1>
        <p className="text-slate-400">
          Applications for jobs posted on this account. Not public. Not mixed into
          site-wide notifications — this inbox is only for your hiring team.
        </p>
        {newCount > 0 && (
          <p className="mt-3 text-sm text-sky-400">
            {newCount} new application{newCount === 1 ? "" : "s"}
          </p>
        )}
      </div>

      <div className="rounded-lg border border-amber-800/50 bg-amber-950/30 px-4 py-3 text-sm text-amber-200/90 mb-8">
        <strong className="font-medium">Prototype note:</strong> In production this
        page requires login and only shows applications for jobs owned by this
        account. Pitch media is job-scoped and visible only here — not on a public
        board.
      </div>

      <div className="space-y-4">
        {mockApplications.map((app) => (
          <article
            key={app.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h2 className="font-semibold text-white">{app.candidateName}</h2>
                <p className="text-sm text-slate-400 mt-0.5">
                  Applied to{" "}
                  <Link
                    href={`/apply/${app.jobId}`}
                    className="text-sky-400 hover:text-sky-300"
                  >
                    {app.jobTitle}
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${statusStyles[app.status]}`}
                >
                  {app.status}
                </span>
                <span className="text-xs text-slate-500">{app.submittedAt}</span>
              </div>
            </div>

            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
              <div>
                <dt className="text-slate-500">Email</dt>
                <dd className="text-slate-200">{app.email}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Phone</dt>
                <dd className="text-slate-200">{app.phone}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Location</dt>
                <dd className="text-slate-200">{app.location}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Experience</dt>
                <dd className="text-slate-200">{app.experience}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-slate-500">Skills</dt>
                <dd className="text-slate-200">{app.skills}</dd>
              </div>
            </dl>

            {app.hasPitchMedia ? (
              <div className="rounded-lg border border-slate-700 bg-slate-950/50 p-4 mb-4">
                <p className="text-sm text-sky-400 font-medium mb-1">
                  Pitch media (this application only)
                </p>
                <p className="text-xs text-slate-500 mb-3">{app.pitchNote}</p>
                <div className="h-24 rounded-md bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
                  Media player placeholder · private to this employer
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 mb-4">No pitch media attached.</p>
            )}

            <div className="flex flex-wrap gap-2">
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
              <button
                type="button"
                className="text-sm text-slate-400 hover:text-slate-200 px-3 py-1.5 transition-colors"
              >
                Contact outside platform
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-slate-500">
        Feed is account-scoped. Other employers never see these applications.
      </p>
    </div>
  );
}
