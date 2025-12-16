"use client";

import {
  Hammer,
  Sofa,
  Palette,
  Gift,
  Printer,
  PenTool,
} from "lucide-react";
import { MeasureHover } from "@/components/ui/measure-hover";

const services = [
  {
    title: "Signage",
    description: "2D & 3D signage, embossed & reflective signs.",
    icon: Hammer,
    hoverColor: "from-orange-500/20 to-orange-500/5",
    iconHover: "group-hover:text-orange-500 group-hover:bg-orange-500/20",
    measureColor: "orange" as const,
  },
  {
    title: "Branding",
    description: "Vehicle wrapping and commercial identity.",
    icon: Palette,
    hoverColor: "from-violet-500/20 to-violet-500/5",
    iconHover: "group-hover:text-violet-500 group-hover:bg-violet-500/20",
    measureColor: "violet" as const,
  },
  {
    title: "Furniture",
    description: "Custom metal furniture and interior fixtures.",
    icon: Sofa,
    hoverColor: "from-emerald-500/20 to-emerald-500/5",
    iconHover: "group-hover:text-emerald-500 group-hover:bg-emerald-500/20",
    measureColor: "emerald" as const,
  },
  {
    title: "Home Décor",
    description: "Exclusive wall décor and custom art pieces.",
    icon: PenTool,
    hoverColor: "from-rose-500/20 to-rose-500/5",
    iconHover: "group-hover:text-rose-500 group-hover:bg-rose-500/20",
    measureColor: "rose" as const,
  },
  {
    title: "Gifts",
    description: "Trophies, medals, and ceremonial gifts.",
    icon: Gift,
    hoverColor: "from-amber-500/20 to-amber-500/5",
    iconHover: "group-hover:text-amber-500 group-hover:bg-amber-500/20",
    measureColor: "amber" as const,
  },
  {
    title: "Print",
    description: "High-quality wallpapers and 3D stickers.",
    icon: Printer,
    hoverColor: "from-cyan-500/20 to-cyan-500/5",
    iconHover: "group-hover:text-cyan-500 group-hover:bg-cyan-500/20",
    measureColor: "cyan" as const,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Centered Modern Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
              What We Do
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-black dark:text-white tracking-tight mb-6">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                Services
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </h2>
          
          <p className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto text-lg">
            High-performance fabrication designed for scalability and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <MeasureHover key={idx} color={service.measureColor}>
              <div className="group h-full p-8 bg-neutral-100/50 dark:bg-neutral-900/20 border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-all duration-500 rounded-xl relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`p-3 bg-black/5 dark:bg-white/5 w-fit rounded-lg mb-6 transition-colors duration-300 ${service.iconHover}`}>
                    <service.icon className="w-6 h-6 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-black dark:text-white font-bold tracking-tight mt-4 text-xl font-heading">
                    {service.title}
                  </h4>
                  <p className="mt-4 text-neutral-600 dark:text-neutral-400 tracking-wide leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </MeasureHover>
          ))}
        </div>
      </div>
    </section>
  );
}
