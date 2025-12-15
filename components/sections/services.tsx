"use client";

import {
  Hammer,
  Sofa,
  Palette,
  Gift,
  Printer,
  PenTool,
  ArrowUpRight,
} from "lucide-react";
import { MeasureHover } from "@/components/ui/measure-hover";

const services = [
  {
    title: "Signage",
    description: "2D & 3D signage, embossed & reflective signs.",
    icon: Hammer,
  },
  {
    title: "Branding",
    description: "Vehicle wrapping and commercial identity.",
    icon: Palette,
  },
  {
    title: "Furniture",
    description: "Custom metal furniture and interior fixtures.",
    icon: Sofa,
  },
  {
    title: "Home Décor",
    description: "Exclusive wall décor and custom art pieces.",
    icon: PenTool,
  },
  {
    title: "Gifts",
    description: "Trophies, medals, and ceremonial gifts.",
    icon: Gift,
  },
  {
    title: "Print",
    description: "High-quality wallpapers and 3D stickers.",
    icon: Printer,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Our Services
            </h2>
            <p className="text-neutral-400 max-w-md">
              High-performance fabrication services designed for scalability and
              precision.
            </p>
          </div>
          <button className="text-white flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium border-b border-white/20 pb-1 hover:border-primary">
            View Full Catalog <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <MeasureHover key={idx}>
              <div className="group h-full p-8 bg-neutral-900/20 border border-white/5 hover:bg-neutral-900/40 transition-all duration-500 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="p-3 bg-white/5 w-fit rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-white font-bold tracking-tight mt-4 text-xl font-heading">
                    {service.title}
                  </h4>
                  <p className="mt-4 text-neutral-400 tracking-wide leading-relaxed text-sm">
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
