"use client";

import { Button } from "@/components/ui/button";
import { SparkParticles } from "@/components/ui/spark-particles";
import { LaserScanLine } from "@/components/ui/laser-scan-line";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { MetallicText } from "@/components/ui/metallic-text";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Crosshair } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Layer 1: Deep Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />

      {/* Layer 2: Blueprint Grid Pattern */}
      <BlueprintGrid />

      {/* Layer 3: Animated Spark Particles */}
      <SparkParticles count={35} />

      {/* Layer 4: Laser Scan Line Effect */}
      <LaserScanLine />

      {/* Layer 5: Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />

      {/* Layer 6: Main Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <div className="relative">
            <div className="h-2 w-2 bg-primary rounded-full" />
            <div className="absolute inset-0 h-2 w-2 bg-primary rounded-full animate-ping" />
          </div>
          <span className="text-xs font-mono text-white/70 uppercase tracking-[0.2em]">
            Precision Engineering Active
          </span>
        </motion.div>

        {/* Main Headline with Metallic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-5xl"
        >
          <MetallicText
            as="h1"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]"
          >
            Precision Metal
          </MetallicText>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1] mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary">
              Cutting & Fabrication
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl text-center mt-8 leading-relaxed"
        >
          Custom signage, furniture, branding, and décor — engineered to exact
          specifications with industrial precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <Button
            size="lg"
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-none shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300 group"
          >
            <Crosshair className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            Request a Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 font-medium text-base rounded-none backdrop-blur-md transition-all"
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Technical Specs Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center gap-8 md:gap-16 text-xs font-mono text-white/30 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>±0.05mm Tolerance</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>12kW Fiber Laser</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span>5-Axis CNC</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Corner Technical Overlays */}
      <div className="absolute top-24 left-8 text-[10px] font-mono text-white/20 space-y-1 hidden lg:block">
        <div>SYS: ONLINE</div>
        <div>LAT: 40.7128° N</div>
        <div>LON: 74.0060° W</div>
      </div>
      <div className="absolute top-24 right-8 text-[10px] font-mono text-white/20 text-right space-y-1 hidden lg:block">
        <div>PRECISION MODE</div>
        <div>CALIBRATED</div>
        <div>v2.4.1</div>
      </div>
    </section>
  );
}

