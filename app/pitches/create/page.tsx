import Link from "next/link";

export default function CreatePitchPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/pitches" className="text-sm text-sky-400 hover:text-sky-300 mb-6 inline-block">
        ← Back to Pitch Cards
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Create Your Pitch Card</h1>
      <p className="text-slate-400 mb-2">
        Show manufacturers who you are. A short reel or clear photo plus the basics goes further than a resume alone.
      </p>
      <p className="text-sm text-sky-400 mb-8">
        Paid feature for job seekers — prototype price $5/month. Free to apply to any job without a pitch card.
      </p>

      <form className="space-y-6 bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-800">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Elevator Pitch Reel or Photo <span className="text-sky-400">(highly encouraged)</span>
          </label>
          <p className="text-xs text-slate-500 mb-3">
            30–90 second phone video introducing yourself and your experience, or a clear professional-style photo.
          </p>
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-10 text-center text-slate-500 bg-slate-950/50">
            Upload video or photo
            <br />
            <span className="text-xs mt-1 block">Phone video is perfect</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Display Name</label>
            <input
              type="text"
              placeholder="e.g. Marcus T."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Headline</label>
            <input
              type="text"
              placeholder="e.g. CNC Machinist · 8 years"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Location Preference</label>
            <input
              type="text"
              placeholder="City / metro area"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Years of Experience</label>
            <input
              type="text"
              placeholder="e.g. 5 years"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Key Skills / Machines</label>
          <input
            type="text"
            placeholder="CNC, Haas, MIG, PLC, CMM…"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Shifts Available</label>
          <input
            type="text"
            placeholder="1st, 2nd, rotating, any…"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Short Summary</label>
          <textarea
            rows={4}
            placeholder="Who you are, what you do well, and what kind of shop you’re looking for…"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <button
          type="button"
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 rounded-lg transition-colors"
        >
          Publish Pitch Card (mock — paid feature)
        </button>

        <p className="text-xs text-slate-500 text-center">
          You can still apply to any job for free without a pitch card. A public card helps employers find you.
        </p>
      </form>
    </div>
  );
}
