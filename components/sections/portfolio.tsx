"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Corporate Signage", category: "Signage", image: "/images/portfolio/signage.jpg" },
  { id: 2, title: "Steel Table Frame", category: "Furniture", image: "/images/portfolio/furniture.jpg" },
  { id: 3, title: "Office Fitout", category: "Interior", image: "/images/portfolio/interior.jpg" },
  { id: 4, title: "Geometric Wall Art", category: "Décor", image: "/images/portfolio/decor.jpg" },
  { id: 5, title: "Custom Branding", category: "Branding", image: "/images/portfolio/signage.jpg" },
  { id: 6, title: "Industrial Shelving", category: "Furniture", image: "/images/portfolio/furniture.jpg" },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="py-24 bg-background border-t border-white/5"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
              Selected Works
            </h2>
            <p className="text-muted-foreground">
              A collection of our recent fabrication projects.
            </p>
          </div>
          <button className="text-primary hover:text-primary/80 font-bold uppercase tracking-wider text-sm">
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative aspect-square group overflow-hidden bg-neutral-900 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <span className="text-6xl text-white/10 font-heading font-bold">
                  {project.category[0]}
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

