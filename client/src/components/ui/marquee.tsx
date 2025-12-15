import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  // Clone children enough times to fill the width
  const items = React.Children.toArray(children);
  const repetitions = Math.max(Math.ceil((containerWidth * 2) / contentWidth) || 2, 2);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {Array.from({ length: repetitions }).map((_, i) => (
          <React.Fragment key={i}>{items}</React.Fragment>
        ))}
      </div>
    </div>
  );
};
