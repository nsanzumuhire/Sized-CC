"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Tell Us Your Idea",
    desc: "Share your concept, design, size, and material.",
  },
  {
    num: "02",
    title: "Design & Mockups",
    desc: "We send mockups for review and revisions.",
  },
  {
    num: "03",
    title: "Confirm Order",
    desc: "Price agreed → payment → design approved → production starts.",
  },
  {
    num: "04",
    title: "Production & Delivery",
    desc: "Express or scheduled delivery, installation if required.",
  },
  {
    num: "05",
    title: "Enjoy Your Order",
    desc: "Precision-crafted results, built to last.",
  },
];

export function Process() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section id="process" ref={targetRef} className="relative h-[300vh] bg-neutral-950 scroll-mt-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-20 left-8 md:left-20 z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-2">
            Workflow
          </h2>
          <p className="text-neutral-500">Scroll to explore how we work.</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-[20vw]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative h-[450px] w-[350px] md:h-[500px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-3xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-6 right-8 text-8xl font-bold text-white/5 font-heading">
                {step.num}
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-3xl font-bold text-white mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-lg text-neutral-400">{step.desc}</p>
              </div>
            </div>
          ))}
          <div className="group relative h-[450px] w-[350px] md:h-[500px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-3xl bg-primary flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white text-center font-heading">
              Ready to <br />
              Start?
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

