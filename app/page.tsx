import { JobCard } from "@/components/JobCard";

// Expanded mock data for a more fleshed-out board
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
  {
    id: "7",
    title: "Machine Operator — Press Brake",
    company: "North Texas Forming",
    location: "Arlington, TX",
    salary: "$23–$28/hr",
    tags: ["Press Brake", "Forming", "1st Shift"],
    photoUrl: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop",
    photoCaption: "Press brake and forming area",
  },
  {
    id: "8",
    title: "Industrial Electrician",
    company: "Alliance Systems",
    location: "Roanoke, TX",
    salary: "$32–$42/hr",
    tags: ["Electrical", "PLC", "Troubleshooting"],
    photoUrl: "https://images.unsplash.com/photo-1621905252507-b35492db9b87?w=600&h=400&fit=crop",
    photoCaption: "Controls and electrical shop",
  },
  {
    id: "9",
    title: "Fabrication Lead",
    company: "SteelCraft TX",
    location: "Fort Worth, TX",
    salary: "$28–$35/hr",
    tags: ["Fabrication", "Leadership", "MIG"],
    photoUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
    photoCaption: "Fabrication floor — real production",
  },
  {
    id: "10",
    title: "Paint / Powder Coat Operator",
    company: "DFW Coatings",
    location: "Grand Prairie, TX",
    salary: "$20–$25/hr",
    tags: ["Powder Coat", "Finishing", "2nd Shift"],
    photoUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&h=400&fit=crop",
    photoCaption: "Finishing and powder coat line",
  },
  {
    id: "11",
    title: "Manufacturing Engineer",
    company: "Precision Components",
    location: "Keller, TX",
    salary: "$75k–$95k",
    tags: ["Engineering", "Process", "Lean"],
    photoUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    photoCaption: "Engineering and process area",
  },
  {
    id: "12",
    title: "Shipping & Receiving Clerk",
    company: "North Texas Logistics",
    location: "Haslet, TX",
    salary: "$18–$22/hr",
    tags: ["Warehouse", "Forklift", "Day Shift"],
    photoUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    photoCaption: "Shipping dock and staging area",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Real manufacturing jobs.
          <span className="block text-sky-400 mt-1">See the actual floor.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Employers show the real shop. Candidates show who they are.
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
