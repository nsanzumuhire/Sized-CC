"use client";

import Image from "next/image";

const projects = [
  { 
    id: 1, 
    title: "Corporate Signage", 
    category: "Signage", 
    gridClass: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  { 
    id: 2, 
    title: "Steel Table Frame", 
    category: "Furniture",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
  },
  { 
    id: 3, 
    title: "Office Fitout", 
    category: "Interior",
    gridClass: "md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  },
  { 
    id: 4, 
    title: "Geometric Wall Art", 
    category: "Décor",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80"
  },
  { 
    id: 5, 
    title: "Custom Branding", 
    category: "Branding",
    gridClass: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
  },
  { 
    id: 6, 
    title: "Industrial Shelving", 
    category: "Furniture",
    gridClass: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Featured Work
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Portfolio
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </h2>
          
          <p className="text-neutral-400 max-w-lg mx-auto text-lg">
            A showcase of precision craftsmanship and industrial artistry.
          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[180px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${project.gridClass}`}
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content - always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-colors duration-300 rounded-tr-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
