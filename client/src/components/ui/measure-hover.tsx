"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const MeasureHover = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Measurement */}
      <motion.div 
        className="absolute -top-3 left-0 w-full h-2 border-x border-t border-primary/30 pointer-events-none"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black/80 px-1 text-[9px] text-primary font-mono">
          WIDTH
        </div>
      </motion.div>

      {/* Right Measurement */}
      <motion.div 
        className="absolute top-0 -right-3 h-full w-2 border-y border-r border-primary/30 pointer-events-none"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
         <div className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-90 bg-black/80 px-1 text-[9px] text-primary font-mono origin-center">
          HEIGHT
        </div>
      </motion.div>

      {children}
    </motion.div>
  );
};
