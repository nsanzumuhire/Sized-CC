"use client";

import { Marquee } from "@/components/ui/marquee";
import { TreePine, Layers, Anvil, Gem, Scan, Feather } from "lucide-react";

const materialCategories = [
  {
    category: "Wood & Boards",
    items: ["Plywood", "MDF / HDF", "Solid wood (Oak, Pine, Teak)", "Veneers"],
    icon: TreePine,
    color: "text-amber-500",
  },
  {
    category: "Plastics & Composites",
    items: [
      "Acrylic (PMMA)",
      "PVC sheets",
      "Polycarbonate",
      "Fiberglass",
      "ACP (Aluminium Composite)",
      "Foam Board",
    ],
    icon: Layers,
    color: "text-blue-500",
  },
  {
    category: "Metals",
    items: ["Aluminum", "Steel / Stainless steel", "Brass", "Copper"],
    icon: Anvil,
    color: "text-slate-400",
  },
  {
    category: "Stone & Mineral",
    items: ["Marble", "Granite", "Quartz", "Terrazzo"],
    icon: Gem,
    color: "text-emerald-500",
  },
  {
    category: "Glass",
    items: ["Tempered glass", "Laminated glass", "Frosted / tinted glass"],
    icon: Scan,
    color: "text-cyan-400",
  },
  {
    category: "Soft Materials",
    items: [
      "Fabric (Cotton, Velvet, Leather)",
      "Foam (Acoustic & furniture)",
      "Rubber",
    ],
    icon: Feather,
    color: "text-rose-400",
  },
];

export function Materials() {
  return (
    <section className="py-12 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-fluid relative z-10">
        <div className="text-center mb-10 px-4">
          <p className="text-[10px] md:text-xs font-mono text-primary uppercase tracking-widest mb-2">
            Trusted Materials
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Built with the Best
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            We stock and source a wide range of premium materials to ensure your project performs as good as it looks.
          </p>
        </div>

        <Marquee pauseOnHover speed={40}>
          {materialCategories.map((cat, idx) => (
            <div
              key={cat.category}
              className="relative bg-neutral-900/20 border border-white/5 rounded-sm p-5 transition-all duration-300 group mx-3 w-[260px] md:w-[300px] hover:border-primary/30 overflow-hidden"
            >
              {/* Tech Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/10 group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/10 group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/10 group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/10 group-hover:border-primary/50 transition-colors duration-300" />

              {/* Grid Background Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2 font-mono uppercase tracking-wider">
                  <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  {cat.category}
                </h3>

                <div className="w-full h-px bg-white/5 mb-3 group-hover:bg-white/10 transition-colors" />

                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors font-mono">
                      <span className="mt-1 text-[8px] text-primary/40 group-hover:text-primary">■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
