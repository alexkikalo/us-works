import Image from "next/image";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  photoUrl: string;
  photoCaption: string;
};

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="job-card bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={job.photoUrl}
          alt={job.photoCaption}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p className="text-white text-xs font-medium">{job.photoCaption}</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-slate-900 leading-snug">{job.title}</h2>
        <p className="text-sm text-slate-600 mt-1">{job.company}</p>
        <p className="text-sm text-slate-500">{job.location}</p>
        <p className="text-sm font-medium text-brand-700 mt-2">{job.salary}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="mt-4 w-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
          View & Apply
        </button>
      </div>
    </article>
  );
}
