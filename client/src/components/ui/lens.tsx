"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
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
  lensSize = 250, 
  zoomFactor = 1.1,
  className,
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
      className={cn("relative overflow-hidden cursor-crosshair", className)}
    >
      {/* Base Content - Dark & Gritty */}
      <div className="w-full h-full grayscale opacity-30 transition-all duration-500">
        {children}
      </div>

      {/* Lens Content - The "X-Ray" Reveal */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-full border-[2px] border-primary/50 shadow-[0_0_30px_rgba(249,115,22,0.4)] backdrop-brightness-150"
        animate={{
          WebkitMaskPosition: `${position.x - lensSize / 2}px ${position.y - lensSize / 2}px`,
          WebkitMaskSize: `${lensSize}px ${lensSize}px`,
        } as any}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{
          maskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${position.x}px ${position.y}px, black 100%, transparent 100%)`,
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {/* The content inside the lens - Inverted/High Contrast for "Blueprint" feel */}
        <div 
          className="w-full h-full scale-[1.05] contrast-125 saturate-0 brightness-150 invert"
          style={{
             transformOrigin: `${position.x}px ${position.y}px`
          }}
        >
          {children}
          
          {/* Tech Overlay in Lens */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};
