"use client";

import {
  Sofa,
  Palette,
  Gift,
  Printer,
  House,
} from "lucide-react";
import { MeasureHover } from "@/components/ui/measure-hover";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HangingSign } from "@/components/custom-icons";

const services = [
  {
    title: "Signage",
    description: "Precision-crafted 2D & 3D signage with embossed & reflective finishes for indoor and outdoor installations.",
    icon: HangingSign,
    color: "orange",
    gradient: "from-orange-500 via-orange-400 to-amber-500",
    measureColor: "orange" as const,
    slug: "signage",
  },
  {
    title: "Branding",
    description: "Professional vehicle wrapping, wall branding, and commercial identity solutions that make your brand stand out.",
    icon: Palette,
    color: "violet",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    measureColor: "violet" as const,
    slug: "branding",
  },
  {
    title: "Furniture",
    description: "Custom-designed metal furniture and interior fixtures combining functionality with modern aesthetics.",
    icon: Sofa,
    color: "emerald",
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    measureColor: "emerald" as const,
    slug: "furniture",
  },
  {
    title: "Home Décor",
    description: "Exclusive wall décor pieces and custom art installations that transform your living spaces.",
    icon: House,
    color: "rose",
    gradient: "from-rose-500 via-pink-500 to-red-500",
    measureColor: "rose" as const,
    slug: "decor",
  },
  {
    title: "Gifts",
    description: "Premium trophies, medals, and ceremonial gifts crafted with attention to detail and excellence.",
    icon: Gift,
    color: "amber",
    gradient: "from-amber-500 via-yellow-500 to-orange-400",
    measureColor: "amber" as const,
    slug: "gifts",
  },
  {
    title: "Print",
    description: "High-quality wallpapers, 3D stickers, and print solutions for commercial and personal use.",
    icon: Printer,
    color: "cyan",
    gradient: "from-cyan-500 via-blue-400 to-sky-500",
    measureColor: "cyan" as const,
    slug: "print",
  },
];


export function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Modern Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight mb-6"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Services
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 max-w-lg mx-auto text-lg"
          >
            High-performance fabrication designed for scalability and precision.
          </motion.p>
        </div>

        {/* Modern Grid with Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group"
            >
              <MeasureHover
                color={service.measureColor}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={cn(
                    "relative h-full p-6 rounded-2xl transition-all duration-300",
                    "bg-gradient-to-br from-neutral-900/40 to-neutral-950/60 backdrop-blur-md",
                    "border border-white/5",
                    "shadow-lg shadow-black/20",
                    "overflow-hidden",
                    "hover:border-white/10 hover:shadow-xl hover:shadow-black/40"
                  )}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      `bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')}/5`
                    )}
                  />

                  {/* Breathing idle animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent"
                    animate={{
                      opacity: [0.03, 0.06, 0.03]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Color accent line */}
                  <div className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300",
                    `bg-gradient-to-r ${service.gradient}`,
                    "opacity-0 group-hover:opacity-60"
                  )} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon with glow */}
                    <motion.div
                      className={cn(
                        "relative w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                        "bg-gradient-to-br from-white/10 to-white/5",
                        "border border-white/10",
                        "transition-all duration-300",
                        `group-hover:border-${service.color}-500/30`
                      )}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className={cn(
                        "w-6 h-6 transition-colors duration-300",
                        `text-white group-hover:text-${service.color}-400`
                      )} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-white font-bold text-xl font-heading mb-3 tracking-tight">
                      {service.title}
                    </h4>

                    <p className="text-sm leading-relaxed flex-1 text-neutral-400 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Corner accents */}
                  <div className={cn(
                    "absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-br ${service.gradient}/20 blur-2xl`
                  )} />
                </motion.div>
              </MeasureHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
