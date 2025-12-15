"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<"TOP" | "LEFT" | "BOTTOM" | "RIGHT">("TOP");

  const rotate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    
    // Determine entrance direction for a smarter effect, 
    // though this specific component uses a continuous rotation.
    // Keeping it simple for now as a continuous rotation.
  };

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center overflow-visible rounded-none decoration-clone transition-bg duration-500",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: "transparent" }}
        animate={{
          background: hovered
            ? [
                "conic-gradient(from 0deg at 50% 50%, #F97316 0deg, transparent 60deg, transparent 300deg, #F97316 360deg)",
                "conic-gradient(from 180deg at 50% 50%, #F97316 0deg, transparent 60deg, transparent 300deg, #F97316 360deg)",
                "conic-gradient(from 360deg at 50% 50%, #F97316 0deg, transparent 60deg, transparent 300deg, #F97316 360deg)",
              ]
            : "transparent",
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </Tag>
  );
};
