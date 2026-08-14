import { JobCard } from "@/components/JobCard";

// Mock data for lean MVP
const mockJobs = [
  {
    id: "1",
    title: "CNC Machinist — 2nd Shift",
    company: "Precision Forge LLC",
    location: "Fort Worth, TX",
    salary: "$28–$34/hr",
    tags: ["CNC", "Machining", "2nd Shift"],
    photoUrl: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
    photoCaption: "Actual shop floor — Haas VF-2 and tool crib",
  },
  {
    id: "2",
    title: "Assembly Technician",
    company: "North Texas Sensors",
    location: "Coppell, TX",
    salary: "$22–$26/hr",
    tags: ["Assembly", "Electronics", "Day Shift"],
    photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    photoCaption: "Clean assembly area — real workstations",
  },
  {
    id: "3",
    title: "Maintenance Mechanic",
    company: "Alliance Fabrication",
    location: "Haslet, TX",
    salary: "$30–$38/hr",
    tags: ["Maintenance", "Hydraulics", "On-call"],
    photoUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    photoCaption: "Plant maintenance bay",
  },
  {
    id: "4",
    title: "Quality Inspector",
    company: "Texas Metal Works",
    location: "Decatur, TX",
    salary: "$24–$29/hr",
    tags: ["Quality", "CMM", "ISO"],
    photoUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    photoCaption: "Inspection lab with CMM",
  },
  {
    id: "5",
    title: "Welder — MIG/TIG",
    company: "Lone Star Structures",
    location: "Saginaw, TX",
    salary: "$26–$32/hr",
    tags: ["Welding", "Structural", "Fabrication"],
    photoUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    photoCaption: "Welding bay — real production work",
  },
  {
    id: "6",
    title: "Production Supervisor",
    company: "DFW Automation",
    location: "Grapevine, TX",
    salary: "$65k–$78k",
    tags: ["Supervisor", "Lean", "Day Shift"],
    photoUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    photoCaption: "Production floor overview",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Real manufacturing jobs.
          <span className="block text-brand-600">See the actual floor.</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Employers show the real shop. Candidates show who they are with a short pitch reel.
          No ghost postings. More than a piece of paper.
        </p>
      </div>

      <div className="job-grid">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
