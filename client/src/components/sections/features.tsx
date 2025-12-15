import { ShieldCheck, Clock, Ruler, Award } from "lucide-react";

const features = [
  {
    title: "Precision Measurements",
    description: "Laser-guided cutting and fabrication accurate to the millimeter.",
    icon: Ruler,
  },
  {
    title: "Durable Materials",
    description: "Sourced from top-tier suppliers to ensure longevity and strength.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled Craftsmanship",
    description: "Expert welders and fabricators with decades of combined experience.",
    icon: Award,
  },
  {
    title: "On-Time Delivery",
    description: "Rigorous project management to ensure your deadlines are met.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Why Choose <span className="text-primary">SIZED</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just cut metal; we engineer solutions. Our commitment to precision and durability makes us the preferred partner for industrial and high-end commercial projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] w-full bg-neutral-900 rounded-none border border-white/10 overflow-hidden group">
             {/* Decorative abstract shapes */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-20" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/10 rounded-full group-hover:scale-150 transition-transform duration-1000" />
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/30 rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-9xl font-bold text-white/5 font-heading select-none">100%</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
