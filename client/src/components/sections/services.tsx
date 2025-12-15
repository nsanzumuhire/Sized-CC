import { Hammer, Sofa, Palette, Gift, Printer, PenTool, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight">
              Our Expertise
            </h2>
            <p className="text-neutral-400 max-w-md">
              High-performance fabrication services designed for scalability and precision.
            </p>
          </div>
          <button className="text-white flex items-center gap-2 hover:text-primary transition-colors text-sm font-medium border-b border-white/20 pb-1 hover:border-primary">
            View Full Service Catalog <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-900/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className="rounded-2xl h-full w-full p-8 overflow-hidden bg-black border border-white/5 relative z-20 group-hover:border-white/10 transition-colors">
                <div className="relative z-50">
                  <div className="p-3 bg-white/5 w-fit rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-white font-bold tracking-wide mt-4 text-xl font-heading">
                    {service.title}
                  </h4>
                  <p className="mt-4 text-neutral-400 tracking-wide leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
