export type Pitch = {
  id: string;
  name: string;
  headline: string;
  location: string;
  experience: string;
  skills: string[];
  shifts: string;
  summary: string;
  photoUrl: string;
  hasReel: boolean;
};

export const mockPitches: Pitch[] = [
  {
    id: "p1",
    name: "Marcus T.",
    headline: "CNC Machinist · 8 years",
    location: "Cleveland, OH area",
    experience: "8 years",
    skills: ["CNC", "Haas", "Fanuc", "Setup", "Inspection"],
    shifts: "2nd or 3rd preferred",
    summary:
      "Setup and production on vertical mills. Comfortable with tight tolerances and first-article work. Looking for a shop that values safety and steady overtime.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    hasReel: true,
  },
  {
    id: "p2",
    name: "Sarah K.",
    headline: "Welder / Fabricator",
    location: "Houston, TX area",
    experience: "5 years",
    skills: ["MIG", "TIG", "Structural", "Blueprint"],
    shifts: "Any shift",
    summary:
      "Structural and production welding. Can read prints and work independently. Prefer shops with real metal work, not just repair.",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    hasReel: true,
  },
  {
    id: "p3",
    name: "James R.",
    headline: "Maintenance Mechanic",
    location: "Indianapolis, IN area",
    experience: "12 years",
    skills: ["Hydraulics", "Pneumatics", "PLC basics", "Preventive"],
    shifts: "Day or rotating",
    summary:
      "Plant maintenance across packaging and metal forming equipment. Strong troubleshooting. Want a place that invests in its people.",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    hasReel: false,
  },
  {
    id: "p4",
    name: "Elena M.",
    headline: "Quality Inspector · CMM",
    location: "Greenville, SC area",
    experience: "6 years",
    skills: ["CMM", "GD&T", "ISO", "First Article"],
    shifts: "1st shift",
    summary:
      "Experienced with CMM programming and in-process inspection. Detail-oriented. Looking for a manufacturer that takes quality seriously.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    hasReel: true,
  },
  {
    id: "p5",
    name: "Derek L.",
    headline: "Production Supervisor",
    location: "Grand Rapids, MI area",
    experience: "10 years (4 as supervisor)",
    skills: ["Lean", "Scheduling", "Training", "Safety"],
    shifts: "Day shift",
    summary:
      "Promoted from the floor. Know how to run a shift without drama. Looking for a growing plant that needs solid leadership on the floor.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    hasReel: true,
  },
  {
    id: "p6",
    name: "Amy P.",
    headline: "Assembly / Electronics Tech",
    location: "Portland, OR area",
    experience: "4 years",
    skills: ["Assembly", "Soldering", "IPC", "Testing"],
    shifts: "Day shift",
    summary:
      "Electronics and electromechanical assembly. Steady hands, clean work. Prefer modern facilities and clear processes.",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    hasReel: false,
  },
  {
    id: "p7",
    name: "Carlos V.",
    headline: "Industrial Electrician",
    location: "Denver, CO area",
    experience: "9 years",
    skills: ["PLC", "Motors", "Controls", "Troubleshooting"],
    shifts: "Flexible",
    summary:
      "Industrial controls and motor work. Can handle plant electrical issues end to end. Looking for a stable manufacturer with overtime available.",
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    hasReel: true,
  },
  {
    id: "p8",
    name: "Nicole B.",
    headline: "Machine Operator · Press Brake",
    location: "Milwaukee, WI area",
    experience: "3 years",
    skills: ["Press Brake", "Forming", "Setup", "Safety"],
    shifts: "1st or 2nd",
    summary:
      "Press brake and forming operator. Learning setup. Reliable and safety-focused. Ready for a shop that will keep teaching me.",
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    hasReel: true,
  },
];
