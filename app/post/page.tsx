export default function PostJobPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">Post a Manufacturing Job</h1>
      <p className="text-slate-600 mb-8">
        Real location photos help your post stand out and build trust. Ghost listings get filtered out.
      </p>

      <form className="space-y-6 bg-white p-6 rounded-xl border shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Job Title</label>
          <input
            type="text"
            placeholder="e.g. CNC Machinist — 2nd Shift"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input type="text" className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input type="text" placeholder="City, TX" className="w-full border rounded-lg px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Salary / Pay Range</label>
          <input type="text" placeholder="$XX–$XX/hr or annual" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Location Photos <span className="text-brand-600">(strongly recommended)</span>
          </label>
          <p className="text-xs text-slate-500 mb-2">
            Upload 2–6 photos of the actual work area, machines, or team. This is what makes US Works different.
          </p>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500">
            Drag photos here or click to upload
            <br />
            <span className="text-xs">(Wire this to R2/S3 in next iteration)</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Job Description</label>
          <textarea rows={5} className="w-full border rounded-lg px-3 py-2" placeholder="What the day-to-day looks like, equipment, shifts, requirements..." />
        </div>

        <button
          type="button"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 rounded-lg"
        >
          Publish Job (mock)
        </button>
      </form>
    </div>
  );
}
