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
};

// Mock applications as if the logged-in employer owns these jobs
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
    pitchNote: "30s reel — introduces setup experience",
    submittedAt: "2026-08-12",
    status: "new",
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
    pitchNote: "Photo + short clip of weld work",
    submittedAt: "2026-08-10",
    status: "reviewed",
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
    pitchNote: "Reel — shop introduction",
    submittedAt: "2026-08-08",
    status: "archived",
  },
];
