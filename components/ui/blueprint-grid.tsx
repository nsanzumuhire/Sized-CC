"use client";

import { motion } from "framer-motion";

export function BlueprintGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249,115,22,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249,115,22,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Smaller grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
        }}
      />

      {/* Corner measurement marks */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/20" />

      {/* Crosshair center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </motion.div>
    </div>
  );
}

