"use client";

import { cn } from "@/lib/utils";

interface MetallicTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export function MetallicText({
  children,
  className,
  as: Component = "h1",
}: MetallicTextProps) {
  return (
    <Component
      className={cn(
        "relative inline-block font-heading font-bold",
        className
      )}
    >
      {/* Base text with metallic gradient */}
      <span
        className="relative bg-clip-text text-transparent animate-metal-shine"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            #e2e2e2 0%,
            #ffffff 25%,
            #a0a0a0 50%,
            #ffffff 75%,
            #e2e2e2 100%
          )`,
          backgroundSize: "400% 100%",
        }}
      >
        {children}
      </span>

      {/* Subtle shine overlay */}
      <span
        className="absolute inset-0 bg-clip-text text-transparent opacity-50 blur-[1px]"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            transparent 0%,
            rgba(255,255,255,0.1) 50%,
            transparent 100%
          )`,
          backgroundSize: "200% 100%",
        }}
      >
        {children}
      </span>
    </Component>
  );
}

