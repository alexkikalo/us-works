import Image from "next/image";
import Link from "next/link";
import type { Job } from "@/lib/jobs";
import { formatPayRange, type PayType } from "@/lib/pay";

export function JobCard({
  job,
  payDisplay = "hourly",
}: {
  job: Job;
  payDisplay?: PayType;
}) {
  const pay = formatPayRange(job.pay, payDisplay);

  return (
    <article className="job-card bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-sky-900/20">
      <div className="relative aspect-[4/3] bg-slate-800">
        <Image
          src={job.photoUrl}
          alt={job.photoCaption}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-white text-xs font-medium">{job.photoCaption}</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-white leading-snug">{job.title}</h2>
        <p className="text-sm text-slate-400 mt-1">{job.company}</p>
        <p className="text-sm text-slate-500">{job.location}</p>
        <p className="text-sm font-medium text-sky-400 mt-2">{pay.primary}</p>
        <p className="text-xs text-slate-500 mt-0.5">{pay.secondary}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/apply/${job.id}`}
          className="mt-4 block w-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors text-center"
        >
          View & Apply
        </Link>
      </div>
    </article>
  );
}
