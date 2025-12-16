"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Ruler, Award } from "lucide-react";

const features = [
  { title: "Precision Measurements", description: "Laser-guided cutting accurate to the millimeter.", icon: Ruler },
  { title: "Durable Materials", description: "Sourced from top-tier suppliers for longevity.", icon: ShieldCheck },
  { title: "Skilled Craftsmanship", description: "Expert fabricators with decades of experience.", icon: Award },
  { title: "On-Time Delivery", description: "Rigorous project management for your deadlines.", icon: Clock },
];

export function Features() {
  return (
    <section className="py-32 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
                Why Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 tracking-tight">
              Why Choose <span className="text-primary">SIZED</span>?
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10">
              We don&apos;t just cut metal; we engineer solutions with precision and durability that lasts.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 p-5 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2.5 bg-primary/10 rounded-lg h-fit">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 font-heading">{feature.title}</h4>
                    <p className="text-sm text-neutral-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual - Large number display */}
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            
            {/* Animated rings */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-white/10 rounded-full"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary/20 rounded-full"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[120px] md:text-[150px] font-bold text-white/[0.03] font-heading select-none leading-none">
                100
              </span>
              <span className="text-2xl font-bold text-white/20 font-heading -mt-8">
                % Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
