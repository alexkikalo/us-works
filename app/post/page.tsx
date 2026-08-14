export default function PostJobPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Post a Manufacturing Job</h1>
      <p className="text-slate-400 mb-8">
        Real location photos help your post stand out and build trust. Ghost listings get filtered out.
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
              placeholder="City, TX"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Salary / Pay Range</label>
          <input
            type="text"
            placeholder="$XX–$XX/hr or annual"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Location Photos <span className="text-sky-400">(strongly recommended)</span>
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Upload 2–6 photos of the actual work area, machines, or team. This is what makes US Works different.
          </p>
          <div className="border-2 border-dashed border-slate-700 rounded-lg p-10 text-center text-slate-500 bg-slate-950/50">
            Drag photos here or click to upload
            <br />
            <span className="text-xs mt-1 block">(Connect to storage in next iteration)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Job Description</label>
          <textarea
            rows={5}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="What the day-to-day looks like, equipment, shifts, requirements..."
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
