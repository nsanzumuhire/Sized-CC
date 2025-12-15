import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const MagneticButton = ({
  children,
  className,
  ...props
}: MagneticButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative isolate overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-colors hover:bg-neutral-200",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity hover:opacity-100 animate-shimmer" />
    </motion.button>
  );
};
