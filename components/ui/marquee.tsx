"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const Marquee = ({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
}: {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(contentRef.current.scrollWidth);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [children]);

  const items = React.Children.toArray(children);
  const repetitions = Math.max(
    Math.ceil((containerWidth * 3) / (contentWidth || 1)),
    3
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex overflow-hidden",
        pauseOnHover && "hover:[--play-state:paused]",
        className
      )}
      style={{ "--play-state": "running" } as React.CSSProperties}
    >
      {/* First copy */}
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0 gap-4",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: "var(--play-state)",
        }}
      >
        {items}
      </div>
      
      {/* Duplicated copies for seamless loop */}
      {Array.from({ length: repetitions }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 gap-4",
            direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          )}
          style={{
            animationDuration: `${speed}s`,
            animationPlayState: "var(--play-state)",
          }}
          aria-hidden="true"
        >
          {items}
        </div>
      ))}
    </div>
  );
};
