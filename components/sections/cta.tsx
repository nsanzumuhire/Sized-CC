"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/components/providers/quote-modal-provider";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-32 relative overflow-hidden bg-black border-t border-white/5 flex items-center justify-center min-h-[500px]">
      <BackgroundBeams className="opacity-20" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Start Your Project
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
              solid.
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to start your project? Get a precision quote today.
          </p>
          <Button
            size="lg"
            onClick={openModal}
            className="bg-primary hover:bg-primary/90 text-white text-lg font-semibold h-14 px-10 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 group"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
