export type RatingValue =
  | "lets_talk"
  | "promising"
  | "sitting"
  | "long_shot"
  | "not_a_fit"
  | null;

export type Application = {
  id: string;
  jobId: string;
  jobTitle: string;
  candidateName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  hasPitchMedia: boolean;
  pitchNote: string;
  submittedAt: string;
  status: "new" | "reviewed" | "archived";
  rating: RatingValue;
  notes: string;
};

export const RATING_OPTIONS: {
  value: Exclude<RatingValue, null>;
  label: string;
  short: string;
  color: string;
  ring: string;
  bg: string;
}[] = [
  {
    value: "lets_talk",
    label: "Let's talk",
    short: "Talk",
    color: "bg-emerald-500",
    ring: "ring-emerald-500/40",
    bg: "bg-emerald-950/40 border-emerald-700 text-emerald-300",
  },
  {
    value: "promising",
    label: "Promising",
    short: "Promising",
    color: "bg-sky-500",
    ring: "ring-sky-500/40",
    bg: "bg-sky-950/40 border-sky-700 text-sky-300",
  },
  {
    value: "sitting",
    label: "Sitting on it",
    short: "Hold",
    color: "bg-amber-500",
    ring: "ring-amber-500/40",
    bg: "bg-amber-950/40 border-amber-700 text-amber-300",
  },
  {
    value: "long_shot",
    label: "Long shot",
    short: "Stretch",
    color: "bg-orange-500",
    ring: "ring-orange-500/40",
    bg: "bg-orange-950/40 border-orange-700 text-orange-300",
  },
  {
    value: "not_a_fit",
    label: "Not a fit",
    short: "Pass",
    color: "bg-slate-500",
    ring: "ring-slate-500/40",
    bg: "bg-slate-900 border-slate-600 text-slate-400",
  },
];

export const mockApplications: Application[] = [
  {
    id: "a1",
    jobId: "1",
    jobTitle: "CNC Machinist — 2nd Shift",
    candidateName: "Marcus T.",
    email: "m.t.example@email.com",
    phone: "(216) 555-0142",
    location: "Cleveland, OH area",
    experience: "8 years CNC setup and production",
    skills: "Haas, Fanuc, tight-tolerance work, first article",
    hasPitchMedia: true,
    pitchNote: "30s vertical reel — setup experience",
    submittedAt: "2026-08-12",
    status: "new",
    rating: null,
    notes: "",
  },
  {
    id: "a2",
    jobId: "1",
    jobTitle: "CNC Machinist — 2nd Shift",
    candidateName: "James R.",
    email: "j.r.example@email.com",
    phone: "(440) 555-0198",
    location: "Akron, OH area",
    experience: "5 years production machining",
    skills: "Vertical mills, inspection, 2nd shift preferred",
    hasPitchMedia: false,
    pitchNote: "",
    submittedAt: "2026-08-11",
    status: "new",
    rating: null,
    notes: "",
  },
  {
    id: "a3",
    jobId: "5",
    jobTitle: "Welder — MIG/TIG",
    candidateName: "Sarah K.",
    email: "s.k.example@email.com",
    phone: "(713) 555-0166",
    location: "Houston, TX area",
    experience: "5 years structural and production welding",
    skills: "MIG, TIG, blueprint reading",
    hasPitchMedia: true,
    pitchNote: "Portrait clip of weld work",
    submittedAt: "2026-08-10",
    status: "reviewed",
    rating: "promising",
    notes: "Solid communication. Confirm structural certs.",
  },
  {
    id: "a4",
    jobId: "3",
    jobTitle: "Maintenance Mechanic",
    candidateName: "Derek L.",
    email: "d.l.example@email.com",
    phone: "(317) 555-0111",
    location: "Indianapolis, IN area",
    experience: "12 years plant maintenance",
    skills: "Hydraulics, pneumatics, preventive maintenance",
    hasPitchMedia: false,
    pitchNote: "",
    submittedAt: "2026-08-09",
    status: "reviewed",
    rating: "lets_talk",
    notes: "Strong tenure. Schedule phone screen.",
  },
  {
    id: "a5",
    jobId: "5",
    jobTitle: "Welder — MIG/TIG",
    candidateName: "Carlos V.",
    email: "c.v.example@email.com",
    phone: "(281) 555-0133",
    location: "Pasadena, TX area",
    experience: "9 years industrial welding and fab",
    skills: "MIG, structural, fabrication lead experience",
    hasPitchMedia: true,
    pitchNote: "Vertical reel — shop introduction",
    submittedAt: "2026-08-08",
    status: "archived",
    rating: "long_shot",
    notes: "Overqualified for pure production seat; keep for lead role later.",
  },
];

export function getEmployerJobs(apps: Application[]) {
  const map = new Map<string, string>();
  apps.forEach((a) => map.set(a.jobId, a.jobTitle));
  return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
}
