export default function PitchesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-2">Candidate Elevator Pitches</h1>
        <p className="text-slate-600">
          30–90 second reels. Show who you are, what you do well, and why you want manufacturing work.
          More than a piece of paper.
        </p>
      </div>

      <div className="bg-white rounded-xl border p-8 text-center mb-8">
        <h2 className="font-semibold mb-2">Record your pitch</h2>
        <p className="text-sm text-slate-500 mb-4">
          Phone video is fine. Keep it short, clear, and authentic.
        </p>
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-slate-400">
          Video upload placeholder
          <br />
          <span className="text-xs">(Connect to Mux / Cloudflare Stream later)</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl border overflow-hidden">
            <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400">
              Pitch reel placeholder #{i}
            </div>
            <div className="p-4">
              <p className="font-medium">Candidate Name</p>
              <p className="text-sm text-slate-500">Machinist • 6 yrs experience • DFW area</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
