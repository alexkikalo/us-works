import Link from "next/link";
import { getJobById } from "@/lib/jobs";

export default function ApplyPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id) || {
    title: "Manufacturing Position",
    company: "Company",
    location: "United States",
    salary: "Competitive",
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-sky-400 hover:text-sky-300 mb-6 inline-block">
        ← Back to jobs
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">{job.title}</h1>
        <p className="text-slate-400 mt-1">
          {job.company} · {job.location} · {job.salary}
        </p>
      </div>

      <form className="space-y-6 bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-800">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Elevator Pitch Reel or Photo{" "}
            <span className="text-sky-400">(optional — highly encouraged)</span>
          </label>
          <p className="text-xs text-slate-500 mb-3">
            30–90 second video or a clear photo for <strong className="text-slate-400">this application only</strong>.
            It goes to this employer, not a public board. Show how you work or introduce your experience.
          </p>
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-10 text-center text-slate-500 bg-slate-950/50">
            Upload video or photo
            <br />
            <span className="text-xs mt-1 block">Phone video is fine · Visible only to this employer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone</label>
            <input
              type="tel"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
          <input
            type="email"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Relevant Experience / Skills
          </label>
          <textarea
            rows={4}
            placeholder="Years of experience, machines you know, certifications, shifts you can work..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Resume / Additional Info (optional)
          </label>
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center text-slate-500 bg-slate-950/50 text-sm">
            Upload resume or other files (optional)
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Submit Application (mock)
        </button>

        <p className="text-xs text-slate-500 text-center">
          Your application and any media go only to this employer for this job. There is no public candidate board.
        </p>
      </form>
    </div>
  );
}
