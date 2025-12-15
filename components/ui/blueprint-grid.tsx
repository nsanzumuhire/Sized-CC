"use client";

import { motion } from "framer-motion";

export function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249,115,22,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249,115,22,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Smaller secondary grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "15px 15px",
        }}
      />

      {/* Corner measurement brackets */}
      <div className="absolute top-6 left-6 w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
        <div className="absolute top-2 left-6 text-[8px] font-mono text-primary/40">0,0</div>
      </div>
      
      <div className="absolute top-6 right-6 w-24 h-24">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary/40 to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-primary/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-6 left-6 w-24 h-24">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-primary/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-6 right-6 w-24 h-24">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary/40 to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary/40 to-transparent" />
      </div>

      {/* Center crosshair with animated pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        {/* Horizontal line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-primary/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/40" />
      </motion.div>

      {/* Animated scan line (horizontal) */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated scan line (vertical) */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent"
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
