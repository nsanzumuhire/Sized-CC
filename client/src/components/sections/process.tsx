import { CheckCircle2 } from "lucide-react";

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
  return (
    <section id="process" className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground">
            From concept to concrete reality in 5 simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className={`bg-background border border-white/10 p-6 md:p-8 hover:border-primary/50 transition-colors relative group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-6xl font-bold font-heading text-white/5 absolute -top-6 right-4 group-hover:text-primary/10 transition-colors">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Marker */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-primary z-10 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
