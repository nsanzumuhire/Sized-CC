"use client";

import { Marquee } from "@/components/ui/marquee";

const materials = [
  "SS 304",
  "SS 316",
  "Aluminum 6061",
  "Carbon Steel",
  "Brass Alloy",
  "Copper",
  "Titanium Grade 5",
  "Acrylic",
  "Polycarbonate",
  "Galvanized Steel",
  "Bronze",
  "Zinc Alloy",
];

export function Materials() {
  return (
    <section className="py-8 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Edge fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

      <p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">
        Trusted Materials
      </p>

      <Marquee speed={50} direction="left" pauseOnHover>
        {materials.map((item, i) => (
          <div
            key={i}
            className="px-6 py-2 mx-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors"
          >
            <span className="text-sm font-medium text-neutral-400 whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
