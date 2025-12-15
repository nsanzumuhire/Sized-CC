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
  drift: number;
}

export function SparkParticles({ count = 30 }: { count?: number }) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generatedSparks: Spark[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 3 + Math.random() * 4,
      size: 1.5 + Math.random() * 3,
      opacity: 0.4 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 60,
    }));
    setSparks(generatedSparks);
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute rounded-full"
          style={{
            left: `${spark.x}%`,
            bottom: "-5%",
            width: spark.size,
            height: spark.size,
          }}
          animate={{
            y: [0, -window.innerHeight * (0.6 + Math.random() * 0.4)],
            x: [0, spark.drift],
            opacity: [0, spark.opacity, spark.opacity, 0],
            scale: [0.5, 1, 1, 0.3],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.1, 0.7, 1],
          }}
        >
          {/* Core */}
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,200,150,${spark.opacity}) 0%, rgba(249,115,22,${spark.opacity * 0.8}) 40%, transparent 100%)`,
              boxShadow: `0 0 ${spark.size * 3}px rgba(249,115,22,${spark.opacity * 0.6}), 0 0 ${spark.size * 6}px rgba(249,115,22,${spark.opacity * 0.3})`,
            }}
          />
        </motion.div>
      ))}

      {/* Occasional bright sparks */}
      {sparks.slice(0, 5).map((spark, i) => (
        <motion.div
          key={`bright-${spark.id}`}
          className="absolute rounded-full"
          style={{
            left: `${(spark.x + 20) % 100}%`,
            bottom: "-3%",
            width: spark.size * 1.5,
            height: spark.size * 1.5,
          }}
          animate={{
            y: [0, -window.innerHeight * 0.8],
            x: [0, spark.drift * 1.5],
            opacity: [0, 1, 0.8, 0],
            scale: [0.3, 1.2, 0.8, 0],
          }}
          transition={{
            duration: spark.duration * 0.8,
            delay: spark.delay + 2 + i,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-orange-200"
            style={{
              boxShadow: `0 0 ${spark.size * 8}px rgba(255,200,100,0.8), 0 0 ${spark.size * 15}px rgba(249,115,22,0.5)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
