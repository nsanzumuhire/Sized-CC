"use client";

import { motion } from "framer-motion";
import { Gauge, Cpu, Zap, Scan, Boxes, Layers, ArrowRight } from "lucide-react";

const specs = [
  { title: "Micron Precision", desc: "±0.05mm tolerance", value: "0.05", unit: "mm", icon: Scan },
  { title: "Fiber Laser", desc: "Cutting power", value: "12", unit: "kW", icon: Zap },
  { title: "5-Axis CNC", desc: "Complex geometries", value: "5", unit: "AXIS", icon: Gauge },
  { title: "Steel Capacity", desc: "Max thickness", value: "30", unit: "mm", icon: Layers },
  { title: "Smart Inventory", desc: "Real-time tracking", value: "24/7", unit: "", icon: Boxes },
  { title: "CAD Integration", desc: "Direct workflow", value: "100", unit: "%", icon: Cpu },
];

export function TechnicalSpecs() {
  return (
    <section className="py-32 bg-neutral-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Technical grid background */}
            <div className="absolute -left-20 -top-20 w-64 h-64 opacity-20">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(249,115,22,0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(249,115,22,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest font-mono">
                  SYS.TECH_SPECS
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
                Technical
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                  Capabilities
                </span>
              </h2>

              {/* Description */}
              <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-md">
                State-of-the-art machinery meeting aerospace and medical industry standards. Precision engineering at scale.
              </p>

              {/* Tech stats row */}
              <div className="flex items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading text-white">99.9<span className="text-primary text-lg">%</span></div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Accuracy</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading text-white">ISO<span className="text-primary text-lg"> 9001</span></div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Certified</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold font-heading text-white">24<span className="text-primary text-lg">hr</span></div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Turnaround</div>
                </div>
              </div>

              {/* CTA Link */}
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-orange-400 transition-colors group"
              >
                Explore our services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Tech Specs Grid */}
          <div className="relative">
            {/* Corner decorations */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-primary/30 rounded-tr-2xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-primary/30 rounded-bl-2xl" />

            <div className="grid grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative p-5 rounded-xl bg-neutral-900/80 border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative">
                      {/* Icon & Title Row */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                          <spec.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                          {spec.title}
                        </span>
                      </div>

                      {/* Value Display */}
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-3xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                          {spec.value}
                        </span>
                        <span className="text-sm font-mono text-primary/80">
                          {spec.unit}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-neutral-500">
                        {spec.desc}
                      </p>
                    </div>

                    {/* Technical corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent transform rotate-45 translate-x-6 -translate-y-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom technical label */}
            <div className="mt-6 flex items-center justify-end gap-2">
              <div className="w-8 h-px bg-primary/30" />
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                SPECS.V2.4
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
