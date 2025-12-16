"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MeasureHoverProps {
  children: React.ReactNode;
  color?: "orange" | "violet" | "emerald" | "rose" | "amber" | "cyan" | "primary";
}

const colorStyles = {
  primary: {
    border: "border-primary/40",
    text: "text-primary",
  },
  orange: {
    border: "border-orange-500/40",
    text: "text-orange-500",
  },
  violet: {
    border: "border-violet-500/40",
    text: "text-violet-500",
  },
  emerald: {
    border: "border-emerald-500/40",
    text: "text-emerald-500",
  },
  rose: {
    border: "border-rose-500/40",
    text: "text-rose-500",
  },
  amber: {
    border: "border-amber-500/40",
    text: "text-amber-500",
  },
  cyan: {
    border: "border-cyan-500/40",
    text: "text-cyan-500",
  },
};

export const MeasureHover = ({ children, color = "primary" }: MeasureHoverProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = colorStyles[color];

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Measurement */}
      <motion.div
        className={cn(
          "absolute -top-3 left-0 w-full h-2 border-x border-t pointer-events-none",
          styles.border
        )}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={cn(
          "absolute -top-4 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-black/80 px-1 text-[9px] font-mono",
          styles.text
        )}>
          WIDTH
        </div>
      </motion.div>

      {/* Right Measurement */}
      <motion.div
        className={cn(
          "absolute top-0 -right-3 h-full w-2 border-y border-r pointer-events-none",
          styles.border
        )}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={cn(
          "absolute top-1/2 -right-4 -translate-y-1/2 rotate-90 bg-white/80 dark:bg-black/80 px-1 text-[9px] font-mono origin-center",
          styles.text
        )}>
          HEIGHT
        </div>
      </motion.div>

      {children}
    </motion.div>
  );
};
