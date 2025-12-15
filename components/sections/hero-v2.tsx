"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MouseGradient } from "@/components/ui/mouse-gradient";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { FloatingElement } from "@/components/ui/floating-element";
import { MeasurementLines } from "@/components/ui/measurement-lines";
import { ArrowRight, Zap, Target, Ruler, Shield } from "lucide-react";

const stats = [
  { value: 0.05, suffix: "mm", label: "Precision", prefix: "±" },
  { value: 12, suffix: "kW", label: "Laser Power" },
  { value: 99.9, suffix: "%", label: "Accuracy" },
  { value: 24, suffix: "hrs", label: "Turnaround" },
];

const floatingSpecs = [
  { icon: Zap, label: "Fiber Laser", x: "10%", y: "20%" },
  { icon: Target, label: "5-Axis CNC", x: "85%", y: "25%" },
  { icon: Ruler, label: "CAD/CAM", x: "8%", y: "70%" },
  { icon: Shield, label: "ISO 9001", x: "88%", y: "65%" },
];

export function HeroV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Mouse-following gradient */}
      <MouseGradient />

      {/* Interactive measurement lines */}
      <MeasurementLines />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
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
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tech specs */}
      {floatingSpecs.map((spec, i) => (
        <FloatingElement
          key={i}
          delay={i * 0.5}
          duration={4 + i}
          yOffset={8}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          style={{ left: spec.x, top: spec.y } as React.CSSProperties}
        >
          <spec.icon className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-white/70">{spec.label}</span>
        </FloatingElement>
      ))}

      {/* Main content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">
              Industrial Precision Engineering
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1]">
            <span className="text-white">Precision </span>
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                Fabrication
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-amber-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
            <br />
            <span className="text-white">Zero Compromise</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto text-center mt-8 leading-relaxed"
        >
          Custom signage, furniture, and industrial components engineered with
          micron-level precision. Built to exact specifications, delivered on time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button
            size="lg"
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-full shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.4)] transition-all duration-300 group"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 font-medium text-base rounded-full backdrop-blur-md transition-all group"
          >
            <span className="mr-2">▶</span>
            Watch Showreel
          </Button>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.value < 1 ? 2 : stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="w-20 h-20 border-l-2 border-t-2 border-white/10" />
        <div className="mt-4 text-[10px] font-mono text-white/30 space-y-1">
          <div>SYS: ACTIVE</div>
          <div>MODE: PRECISION</div>
        </div>
      </div>
      <div className="absolute top-24 right-8 hidden lg:block">
        <div className="w-20 h-20 border-r-2 border-t-2 border-white/10" />
        <div className="mt-4 text-[10px] font-mono text-white/30 text-right space-y-1">
          <div>CALIBRATED</div>
          <div>v3.0.0</div>
        </div>
      </div>
    </section>
  );
}

