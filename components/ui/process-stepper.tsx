"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, 
  PenTool, 
  CheckCircle, 
  Truck, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Tell Us Your Idea",
    desc: "Share your concept, design, size, and material requirements.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600",
  },
  {
    num: "02",
    title: "Design & Mockups",
    desc: "We create detailed mockups for your review and revisions.",
    icon: PenTool,
    color: "from-orange-500 to-red-500",
  },
  {
    num: "03",
    title: "Confirm Order",
    desc: "Price agreed, payment processed, production begins.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
  },
  {
    num: "04",
    title: "Production",
    desc: "Precision fabrication with state-of-the-art machinery.",
    icon: Truck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Express or scheduled delivery with installation if needed.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
];

export function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative h-full flex flex-col">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-orange-400"
          initial={{ width: 0 }}
          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between mt-6 mb-8">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => handleStepClick(i)}
            className="relative group"
          >
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                i === activeStep
                  ? "border-primary bg-primary/20"
                  : i < activeStep
                  ? "border-primary/50 bg-primary/10"
                  : "border-white/10 bg-white/5"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`text-xs font-bold ${
                  i <= activeStep ? "text-primary" : "text-white/30"
                }`}
              >
                {step.num}
              </span>
            </motion.div>
            
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-[calc(100%-2.5rem)] h-[2px] -translate-y-1/2 hidden sm:block">
                <div className="h-full bg-white/10" />
                <motion.div
                  className="absolute top-0 left-0 h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: i < activeStep ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 backdrop-blur-sm">
              {/* Step icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${steps[activeStep].color} mb-6`}>
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>

              {/* Step number badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 ml-4">
                <span className="text-xs font-mono text-primary">
                  Step {steps[activeStep].num}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              {/* Visual indicator */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${steps[activeStep].color}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.8, ease: "linear" }}
                    key={`progress-${activeStep}`}
                  />
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 text-white/30" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom indicator dots */}
      <div className="flex justify-center gap-2 mt-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => handleStepClick(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeStep
                ? "w-6 bg-primary"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

