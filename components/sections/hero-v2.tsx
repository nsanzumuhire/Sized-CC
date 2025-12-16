"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ProcessStepper } from "@/components/ui/process-stepper";
import { CursorPrecision } from "@/components/ui/cursor-precision";
import { useQuoteModal } from "@/components/providers/quote-modal-provider";
import { ArrowRight, Crosshair } from "lucide-react";

const stats = [
  { value: 0.05, suffix: "mm", label: "Tolerance", prefix: "±" },
  { value: 12, suffix: "kW", label: "Power" },
  { value: 99.9, suffix: "%", label: "Accuracy" },
];

export function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useQuoteModal();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden"
    >
      {/* Simple grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Subtle gradient orb */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-40 -translate-x-1/4 -translate-y-1/4"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Cursor precision - only shows when cursor moves */}
      <CursorPrecision />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.3)_80%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_80%)] pointer-events-none" />

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-4 pt-28 pb-16 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/10 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  Precision Engineering
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1]">
                <span className="text-black dark:text-white">Metal Cutting &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                  Custom Fabrication
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed"
            >
              Custom signage, furniture, branding, and décor — built to exact
              size with industrial precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                onClick={openModal}
                className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all duration-300 group"
              >
                <Crosshair className="w-4 h-4 mr-2" />
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 border-black/15 dark:border-white/15 bg-black/5 dark:bg-white/5 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/25 dark:hover:border-white/25 font-medium text-sm rounded-lg backdrop-blur-sm transition-all"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6 pt-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold font-heading text-black dark:text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value < 1 ? 2 : stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tech specs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 text-[10px] font-mono text-black/40 dark:text-white/30 uppercase tracking-widest pt-2"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-primary rounded-full" />
                Fiber Laser
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-primary rounded-full" />
                5-Axis CNC
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-primary rounded-full" />
                ISO 9001
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Process Stepper */}
          <motion.div
            id="our-process"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[480px] lg:h-[520px] scroll-mt-24"
          >
            {/* Simple frame */}
            <div className="absolute -inset-4 rounded-3xl border border-black/5 dark:border-white/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/20 rounded-bl-3xl pointer-events-none" />

            {/* Title */}
            <div className="absolute -top-8 left-0 flex items-center gap-2">
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                Our Process
              </span>
              <div className="w-8 h-[1px] bg-primary/30" />
            </div>

            <ProcessStepper />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-black/20 dark:border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-black/40 dark:bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
