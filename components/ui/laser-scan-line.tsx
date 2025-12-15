"use client";

import { motion } from "framer-motion";

export function LaserScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main laser line */}
      <motion.div
        className="absolute top-1/2 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.1) 10%, rgba(249,115,22,0.8) 50%, rgba(249,115,22,0.1) 90%, transparent 100%)",
          boxShadow:
            "0 0 20px rgba(249,115,22,0.5), 0 0 40px rgba(249,115,22,0.3), 0 0 60px rgba(249,115,22,0.1)",
        }}
        animate={{
          y: [-200, 200],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
        }}
      />

      {/* Secondary subtle scan lines */}
      <motion.div
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

