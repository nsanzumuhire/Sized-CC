"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export function SparkParticles({ count = 30 }: { count?: number }) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const generatedSparks: Spark[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.7,
    }));
    setSparks(generatedSparks);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: `${spark.x}%`,
            bottom: 0,
            width: spark.size,
            height: spark.size,
            background: `radial-gradient(circle, rgba(249,115,22,${spark.opacity}) 0%, rgba(251,146,60,${spark.opacity * 0.5}) 50%, transparent 100%)`,
            boxShadow: `0 0 ${spark.size * 2}px rgba(249,115,22,${spark.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -window.innerHeight * (0.5 + Math.random() * 0.5)],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [spark.opacity, spark.opacity, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

