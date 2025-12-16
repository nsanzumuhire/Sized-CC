"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lightbulb, 
  PenTool, 
  CheckCircle, 
  Truck, 
  Sparkles,
  ArrowRight,
  Clock,
  Play,
  Pause
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/quote-modal-provider";

const steps = [
  {
    num: "01",
    title: "Tell Us Your Idea",
    desc: "Share your concept, design, size, and material requirements. We'll discuss feasibility and provide initial guidance.",
    timeframe: "Day 1",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245,158,11,0.4)",
  },
  {
    num: "02",
    title: "Design & Mockups",
    desc: "Our team creates detailed 3D mockups and engineering specs for your review. Unlimited revisions until perfect.",
    timeframe: "2-3 Days",
    icon: PenTool,
    color: "from-orange-500 to-red-500",
    glowColor: "rgba(249,115,22,0.4)",
  },
  {
    num: "03",
    title: "Confirm Your Order",
    desc: "Price agreed → payment processed → design approved → production queue confirmed.",
    timeframe: "Day 4",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-600",
    glowColor: "rgba(34,197,94,0.4)",
  },
  {
    num: "04",
    title: "Production & Delivery",
    desc: "Precision fabrication with state-of-the-art machinery. Express or scheduled delivery with installation if required.",
    timeframe: "5-10 Days",
    icon: Truck,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.4)",
  },
  {
    num: "05",
    title: "Enjoy Your Order",
    desc: "Precision-crafted results, built to last. Quality guaranteed with our satisfaction promise.",
    timeframe: "Complete",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.4)",
  },
];

export function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { openModal } = useQuoteModal();

  // Auto-play through steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
      } else if (e.key === "ArrowLeft") {
        setActiveStep((prev) => Math.max(prev - 1, 0));
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative h-full flex flex-col">
      {/* Floating glow effect */}
      <motion.div 
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        animate={{
          background: `radial-gradient(circle, ${steps[activeStep].glowColor} 0%, transparent 70%)`,
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Top bar with progress and controls */}
      <div className="flex items-center gap-3 mb-6">
        {/* Progress bar */}
        <div className="flex-1 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-orange-400"
            initial={{ width: 0 }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          title={isAutoPlaying ? "Pause" : "Play"}
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3 text-primary" />
          ) : (
            <Play className="w-3 h-3 text-primary" />
          )}
        </button>
      </div>

      {/* Step indicators with icons */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => handleStepClick(i)}
            className="relative group"
          >
            <motion.div
              className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                i === activeStep
                  ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  : i < activeStep
                  ? "border-primary/50 bg-primary/10"
                  : "border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-black/20 dark:hover:border-white/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <step.icon 
                className={`w-4 h-4 transition-colors ${
                  i <= activeStep ? "text-primary" : "text-black/30 dark:text-white/30"
                }`} 
              />
            </motion.div>
            
            {/* Step label on hover */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="text-[10px] font-mono text-neutral-500">{step.num}</span>
            </div>
            
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-[calc(100%-2.75rem)] h-[2px] -translate-y-1/2 hidden sm:block">
                <div className="h-full bg-black/10 dark:bg-white/10 rounded-full" />
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: i < activeStep ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Active step content */}
      <div className="flex-1 relative min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-black/[0.04] to-black/[0.01] dark:from-white/[0.04] dark:to-white/[0.01] border border-black/10 dark:border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${steps[activeStep].color} opacity-10 transform rotate-45 translate-x-16 -translate-y-16`} />
              </div>

              {/* Icon and badges row */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Step icon */}
                  <motion.div 
                    className={`p-3.5 rounded-xl bg-gradient-to-br ${steps[activeStep].color} shadow-lg`}
                    initial={{ rotate: -10, scale: 0.8 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="w-7 h-7 text-white" />;
                    })()}
                  </motion.div>

                  {/* Badges */}
                  <div className="flex flex-col gap-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-wider">
                        Step {steps[activeStep].num}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      <Clock className="w-2.5 h-2.5 text-primary" />
                      <span className="text-[10px] font-mono text-primary">
                        {steps[activeStep].timeframe}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step counter */}
                <div className="text-right">
                  <span className="text-3xl font-bold font-heading text-black/10 dark:text-white/10">
                    {steps[activeStep].num}
                  </span>
                  <span className="text-lg text-black/5 dark:text-white/5">/05</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-black dark:text-white mb-3">
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm mb-6">
                {steps[activeStep].desc}
              </p>

              {/* CTA for last step or progress indicator */}
              {activeStep === steps.length - 1 ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={openModal}
                  className="px-6 py-3 bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all group"
                >
                  Start Your Project
                  <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${steps[activeStep].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.8, ease: "linear" }}
                      key={`progress-${activeStep}`}
                    />
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 text-black/30 dark:text-white/30" />
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom indicator dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => handleStepClick(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeStep
                ? "w-8 bg-gradient-to-r from-primary to-orange-400"
                : "w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div className="mt-4 flex justify-center">
        <span className="text-[10px] text-neutral-600 font-mono">
          Use ← → arrows to navigate
        </span>
      </div>
    </div>
  );
}
