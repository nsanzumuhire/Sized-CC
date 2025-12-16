"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What materials do you work with?",
    answer: "We specialize in stainless steel (304, 316), aluminum, carbon steel, brass, copper, titanium, and various plastics like acrylic and polycarbonate. We can source specialty materials upon request.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Standard projects take 5-10 business days. Rush orders can be completed in 24-48 hours depending on complexity. We'll provide an accurate timeline during the quote process.",
  },
  {
    question: "Do you offer design services?",
    answer: "Yes! Our in-house design team can help bring your vision to life. We offer 3D modeling, CAD design, and engineering consultation. Just share your concept and we'll handle the rest.",
  },
  {
    question: "What's the minimum order quantity?",
    answer: "We have no minimum order quantity. Whether you need a single custom piece or a production run of thousands, we can accommodate your needs.",
  },
  {
    question: "Do you handle installation?",
    answer: "We offer professional installation services for signage, fixtures, and large installations. Our team ensures everything is mounted securely and looks perfect.",
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept DXF, DWG, AI, EPS, PDF, and STEP files. If you only have a sketch or concept, our design team can create production-ready files for you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Title */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
                Got Questions?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white tracking-tight mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                Questions
              </span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Everything you need to know about our fabrication process, materials, and services.
            </p>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-neutral-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

