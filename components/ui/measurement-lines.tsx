"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function MeasurementLines() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform mouse position to measurement values
  const widthValue = useTransform(x, [0, windowSize.width], [0, windowSize.width]);
  const heightValue = useTransform(y, [0, windowSize.height], [0, windowSize.height]);

  useEffect(() => {
    setMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {/* Horizontal measurement line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          top: y,
          background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.15) 20%, rgba(249,115,22,0.3) 50%, rgba(249,115,22,0.15) 80%, transparent)",
        }}
      />
      
      {/* Vertical measurement line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px]"
        style={{
          left: x,
          background: "linear-gradient(180deg, transparent, rgba(249,115,22,0.15) 20%, rgba(249,115,22,0.3) 50%, rgba(249,115,22,0.15) 80%, transparent)",
        }}
      />

      {/* Crosshair at cursor */}
      <motion.div
        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
      >
        {/* Outer ring - pulsing */}
        <motion.div 
          className="absolute inset-0 border border-primary/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Inner ring */}
        <div className="absolute inset-1 border border-primary/50 rounded-full" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
        
        {/* Crosshair lines */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-primary/40" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-primary/40" />
      </motion.div>

      {/* X coordinate label */}
      <motion.div
        className="absolute px-2 py-1 bg-black/90 border border-primary/40 text-[10px] font-mono text-primary rounded shadow-lg"
        style={{
          left: x,
          top: 12,
          x: "-50%",
        }}
      >
        X: <motion.span className="text-white">{Math.round(Number(widthValue.get()))}</motion.span>px
      </motion.div>

      {/* Y coordinate label */}
      <motion.div
        className="absolute px-2 py-1 bg-black/90 border border-primary/40 text-[10px] font-mono text-primary rounded shadow-lg"
        style={{
          left: 12,
          top: y,
          y: "-50%",
        }}
      >
        Y: <motion.span className="text-white">{Math.round(Number(heightValue.get()))}</motion.span>px
      </motion.div>
    </div>
  );
}
