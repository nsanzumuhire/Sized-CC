"use client";

import { motion } from "framer-motion";

export function LaserScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary laser line - horizontal sweep */}
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.05) 20%, rgba(249,115,22,0.6) 50%, rgba(249,115,22,0.05) 80%, transparent 100%)",
          boxShadow:
            "0 0 15px rgba(249,115,22,0.4), 0 0 30px rgba(249,115,22,0.2), 0 0 45px rgba(249,115,22,0.1)",
        }}
        animate={{
          top: ["-5%", "105%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary thinner line with delay */}
      <motion.div
        className="absolute left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.3) 30%, rgba(249,115,22,0.3) 70%, transparent 100%)",
        }}
        animate={{
          top: ["-5%", "105%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />

      {/* Vertical accent line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(249,115,22,0.2) 30%, rgba(249,115,22,0.4) 50%, rgba(249,115,22,0.2) 70%, transparent 100%)",
        }}
        animate={{
          left: ["10%", "90%", "10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cutting point effect - follows main laser */}
      <motion.div
        className="absolute w-3 h-3 left-1/2 -translate-x-1/2"
        animate={{
          top: ["-5%", "105%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-orange-300"
          style={{
            boxShadow: "0 0 20px rgba(255,180,100,0.8), 0 0 40px rgba(249,115,22,0.6), 0 0 60px rgba(249,115,22,0.4)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
