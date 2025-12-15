"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-neutral-950 border-t border-white/10 flex items-center justify-center min-h-[500px]">
      <BackgroundBeams className="opacity-40" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-8 tracking-tight drop-shadow-2xl">
          Let&apos;s build something solid.
        </h2>
        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Ready to start your project? Get a precision quote today.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-bold h-16 px-12 rounded-none shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300 scale-100 hover:scale-105"
        >
          Request a Quote
        </Button>
      </div>
    </section>
  );
}

