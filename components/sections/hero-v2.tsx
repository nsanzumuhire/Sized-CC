"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MouseGradient } from "@/components/ui/mouse-gradient";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ProcessStepper } from "@/components/ui/process-stepper";
import { ArrowRight, Crosshair } from "lucide-react";

const stats = [
  { value: 0.05, suffix: "mm", label: "Tolerance", prefix: "±" },
  { value: 12, suffix: "kW", label: "Power" },
  { value: 99.9, suffix: "%", label: "Accuracy" },
];

export function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Mouse-following gradient */}
      <MouseGradient />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content - Split Layout */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 container mx-auto px-4 pt-28 pb-16 min-h-screen flex items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
          {/* LEFT SIDE - Compact Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
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
                <span className="text-white">Metal Cutting &</span>
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
              className="text-base md:text-lg text-neutral-400 max-w-md leading-relaxed"
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
                className="h-12 px-6 bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-lg shadow-[0_0_30px_rgba(249,115,22,0.25)] hover:shadow-[0_0_40px_rgba(249,115,22,0.35)] transition-all duration-300 group"
              >
                <Crosshair className="w-4 h-4 mr-2" />
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-6 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 font-medium text-sm rounded-lg backdrop-blur-sm transition-all"
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
                  <div className="text-2xl md:text-3xl font-bold font-heading text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value < 1 ? 2 : stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Technical specs line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 text-[10px] font-mono text-white/25 uppercase tracking-widest pt-2"
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

          {/* RIGHT SIDE - Interactive Process Stepper */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[480px] lg:h-[520px]"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl border border-white/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl pointer-events-none" />

            {/* Process title */}
            <div className="absolute -top-8 left-0 flex items-center gap-2">
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                How It Works
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            {/* Process Stepper Component */}
            <ProcessStepper />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 hidden xl:block">
        <div className="text-[9px] font-mono text-white/20 space-y-0.5">
          <div>SYS: ONLINE</div>
          <div>PRECISION: MAX</div>
        </div>
      </div>
      <div className="absolute top-24 right-6 hidden xl:block text-right">
        <div className="text-[9px] font-mono text-white/20 space-y-0.5">
          <div>SIZED.CC</div>
          <div>v3.0</div>
        </div>
      </div>
    </section>
  );
}
