"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function MeasurementLines() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform mouse position to measurement values
  const widthValue = useTransform(x, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [0, 1920]);
  const heightValue = useTransform(y, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [0, 1080]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal measurement line */}
      <motion.div
        className="absolute left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{
          top: y,
          width: "100%",
        }}
      />
      
      {/* Vertical measurement line */}
      <motion.div
        className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        style={{
          left: x,
          height: "100%",
        }}
      />

      {/* Crosshair at cursor */}
      <motion.div
        className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
      >
        <div className="absolute inset-0 border border-primary/50 rounded-full animate-ping" />
        <div className="absolute inset-1 border border-primary/80 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
      </motion.div>

      {/* X coordinate label */}
      <motion.div
        className="absolute px-2 py-1 bg-black/80 border border-primary/30 text-[10px] font-mono text-primary rounded"
        style={{
          left: x,
          top: 20,
          x: "-50%",
        }}
      >
        <motion.span>{widthValue}</motion.span>px
      </motion.div>

      {/* Y coordinate label */}
      <motion.div
        className="absolute px-2 py-1 bg-black/80 border border-primary/30 text-[10px] font-mono text-primary rounded"
        style={{
          left: 20,
          top: y,
          y: "-50%",
        }}
      >
        <motion.span>{heightValue}</motion.span>px
      </motion.div>
    </div>
  );
}

