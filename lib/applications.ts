export type RatingValue =
  | "lets_talk"
  | "promising"
  | "sitting"
  | "long_shot"
  | "not_a_fit"
  | null;

export type PipelineStage =
  | "new"
  | "reviewing"
  | "interview"
  | "offer"
  | "hired"
  | "archived";

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
  hasResume: boolean;
  submittedAt: string;
  stage: PipelineStage;
  rating: RatingValue;
  notes: string;
};

export const PIPELINE_STAGES: {
  value: PipelineStage;
  label: string;
}[] = [
  { value: "new", label: "New" },
  { value: "reviewing", label: "Reviewing" },
  { value: "interview", label: "Interview" },
  { value: "offer", label: "Offer" },
  { value: "hired", label: "Hired" },
  { value: "archived", label: "Archived" },
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
    hasResume: true,
    submittedAt: "2026-08-12",
    stage: "new",
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
    hasResume: true,
    submittedAt: "2026-08-11",
    stage: "new",
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
    hasResume: true,
    submittedAt: "2026-08-10",
    stage: "interview",
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
    hasResume: false,
    submittedAt: "2026-08-09",
    stage: "reviewing",
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
    hasResume: true,
    submittedAt: "2026-08-08",
    stage: "archived",
    rating: "long_shot",
    notes: "Overqualified for pure production seat; keep for lead role later.",
  },
];

export function getEmployerJobs(apps: Application[]) {
  const map = new Map<string, string>();
  apps.forEach((a) => map.set(a.jobId, a.jobTitle));
  return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
}
