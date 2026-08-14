"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import type { Job } from "@/lib/jobs";

export function JobMap({ jobs }: { jobs: Job[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fix default marker icons only on the client
    const DefaultIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[600px] bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500">
        Loading map…
      </div>
    );
  }

  const center: [number, number] = [39.8, -98.5];

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-800">
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {jobs.map((job) => (
          <Marker key={job.id} position={[job.lat, job.lng]}>
            <Popup>
              <div className="text-sm min-w-[180px]">
                <p className="font-semibold text-white">{job.title}</p>
                <p className="text-slate-300">{job.company}</p>
                <p className="text-slate-400 text-xs">{job.location}</p>
                <p className="text-sky-400 font-medium mt-1">{job.salary}</p>
                <Link
                  href={`/apply/${job.id}`}
                  className="inline-block mt-2 text-sky-400 hover:text-sky-300 font-medium"
                >
                  View & Apply →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
