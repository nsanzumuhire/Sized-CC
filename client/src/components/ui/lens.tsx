"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface LensProps {
  children: React.ReactNode;
  lensSize?: number;
  zoomFactor?: number;
  className?: string;
  isHovering?: boolean;
}

export const Lens = ({ 
  children, 
  lensSize = 200, 
  zoomFactor = 1.1,
  className,
  isHovering = false
}: LensProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden cursor-none", className)}
    >
      {/* Base Content */}
      <div className="w-full h-full grayscale-[0.8] opacity-50 blur-[1px] transition-all duration-500">
        {children}
      </div>

      {/* Lens Content */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-normal overflow-hidden rounded-full border border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        animate={{
          WebkitMaskPosition: `${position.x - lensSize / 2}px ${position.y - lensSize / 2}px`,
          WebkitMaskSize: `${lensSize}px ${lensSize}px`,
        } as any}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        style={{
          maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {/* The content inside the lens is the same, but full color/sharpness/zoomed */}
        <div 
          className="w-full h-full scale-[1.01]"
          style={{
             transformOrigin: `${position.x}px ${position.y}px`
          }}
        >
          {children}
          
          {/* Measurement UI inside Lens */}
          <div className="absolute inset-0 pointer-events-none">
             <div 
               className="absolute w-full h-[1px] bg-primary/50"
               style={{ top: position.y }}
             />
             <div 
               className="absolute h-full w-[1px] bg-primary/50"
               style={{ left: position.x }}
             />
             <div 
               className="absolute text-[10px] font-mono text-primary bg-black/50 px-1 rounded"
               style={{ top: position.y + 10, left: position.x + 10 }}
             >
               X:{Math.round(position.x)} Y:{Math.round(position.y)}
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
