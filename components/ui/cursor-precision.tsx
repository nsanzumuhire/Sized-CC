"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorPrecision() {
  const [mounted, setMounted] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsMoving(true);
      
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Simple crosshair lines - only visible when moving */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{ top: y }}
        animate={{ opacity: isMoving ? 0.15 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-0 bottom-0 w-[1px]"
        style={{ left: x }}
        animate={{ opacity: isMoving ? 0.15 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
      </motion.div>

      {/* Small crosshair at cursor */}
      <motion.div
        className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2"
        style={{ left: x, top: y }}
        animate={{ opacity: isMoving ? 1 : 0, scale: isMoving ? 1 : 0.5 }}
        transition={{ duration: 0.15 }}
      >
        <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-primary/50" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-primary/50" />
      </motion.div>

      {/* Coordinate display - only when moving */}
      <motion.div
        className="absolute px-2 py-0.5 bg-white/80 dark:bg-black/80 border border-primary/30 text-[9px] font-mono text-primary/80 rounded"
        style={{ left: x, top: y }}
        animate={{ 
          opacity: isMoving ? 1 : 0,
          x: 15,
          y: 15,
        }}
        transition={{ duration: 0.15 }}
      >
        {Math.round(Number(x.get()))}, {Math.round(Number(y.get()))}
      </motion.div>
    </div>
  );
}

