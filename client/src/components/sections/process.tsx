import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    description: "Share your concept, design specs, sizing requirements, and material preferences.",
  },
  {
    number: "02",
    title: "Design & Mockups",
    description: "Our engineers create detailed digital mockups for your review and approval.",
  },
  {
    number: "03",
    title: "Confirm Your Order",
    description: "Price agreement, payment processing, and final design sign-off to begin.",
  },
  {
    number: "04",
    title: "Production & Delivery",
    description: "Precision manufacturing followed by express delivery or professional installation.",
  },
  {
    number: "05",
    title: "Enjoy Your Order",
    description: "Receive your high-quality, custom-fabricated product built to last.",
  },
];

export function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="py-24 bg-neutral-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-white mb-4"
          >
            Our Process
          </motion.h2>
          <p className="text-muted-foreground">
            From concept to concrete reality in 5 simple steps.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Vertical Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className={`bg-background/50 backdrop-blur-sm border border-white/10 p-6 md:p-10 hover:border-primary/50 transition-colors relative group rounded-lg ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-6xl md:text-8xl font-bold font-heading text-white/5 absolute -top-8 right-4 group-hover:text-primary/10 transition-colors select-none z-0">
                      {step.number}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 relative z-10 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-950 border-2 border-primary z-10 flex items-center justify-center hidden md:flex shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
