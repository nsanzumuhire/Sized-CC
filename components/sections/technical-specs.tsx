"use client";

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Gauge, Cpu, Zap, Scan, Boxes, Layers } from "lucide-react";

const specs = [
  { title: "Micron Precision", desc: "Laser cutting tolerance of ±0.05mm for ultra-precise fitments.", icon: Scan },
  { title: "High Speed CNC", desc: "5-Axis machining capabilities for complex geometries.", icon: Gauge },
  { title: "Automated Bending", desc: "Robotic press brakes ensuring consistent angles every time.", icon: Layers },
  { title: "Fiber Laser Tech", desc: "12kW Fiber lasers capable of cutting 30mm thick steel.", icon: Zap },
  { title: "Smart Inventory", desc: "Real-time material tracking and automated restocking.", icon: Boxes },
  { title: "Digital Integration", desc: "Direct CAD-to-Machine workflow for rapid prototyping.", icon: Cpu },
];

export function TechnicalSpecs() {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Our Technology
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight mb-6">
            Technical{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Capabilities
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </h2>
          
          <p className="text-neutral-400 max-w-lg mx-auto text-lg">
            State-of-the-art machinery meeting aerospace and medical industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <motion.div 
              key={i} 
              className="h-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="flex flex-col items-start p-8 h-full bg-neutral-900/50">
                <div className="bg-primary/10 p-3 rounded-lg mb-6 border border-primary/20">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {spec.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {spec.desc}
                </p>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
