import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@assets/stock_images/metal_signage_indust_1c72086f.jpg";
import img2 from "@assets/stock_images/custom_metal_furnitu_321e6d52.jpg";
import img3 from "@assets/stock_images/industrial_interior__4ac4f28f.jpg";
import img4 from "@assets/stock_images/laser_cut_metal_art_0b305368.jpg";

// Re-using images to fill the grid as requested in thought process
const projects = [
  { id: 1, title: "Corporate Signage", category: "Signage", image: img1 },
  { id: 2, title: "Steel Table Frame", category: "Furniture", image: img2 },
  { id: 3, title: "Office Fitout", category: "Interior", image: img3 },
  { id: 4, title: "Geometric Wall Art", category: "Décor", image: img4 },
  { id: 5, title: "Custom Branding", category: "Branding", image: img1 }, // Reuse
  { id: 6, title: "Industrial Shelving", category: "Furniture", image: img2 }, // Reuse
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background border-t border-white/5">
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
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
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
