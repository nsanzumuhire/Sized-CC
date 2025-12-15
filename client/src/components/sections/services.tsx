import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hammer, Sofa, Palette, Gift, Printer, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const services = [
  {
    title: "Signage",
    description: "2D & 3D signage, embossed & reflective signs, indoor & outdoor installations.",
    icon: Hammer,
  },
  {
    title: "Branding",
    description: "Vehicle wrapping, wall branding, and commercial identity implementation.",
    icon: Palette,
  },
  {
    title: "Furniture",
    description: "Custom metal furniture, tables, and interior fixtures for home & office.",
    icon: Sofa,
  },
  {
    title: "Home Décor",
    description: "Exclusive wall décor, custom-sized art pieces, and decorative elements.",
    icon: PenTool,
  },
  {
    title: "Personalized Gifts",
    description: "Trophies, medals, table décor, and ceremonial gifts built to last.",
    icon: Gift,
  },
  {
    title: "Print & Promo",
    description: "High-quality wallpapers, 2D/3D stickers, and promotional materials.",
    icon: Printer,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-white"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Industrial-grade fabrication services for commercial and residential projects.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <div className="h-full group relative bg-neutral-900 border border-white/10 overflow-hidden hover:border-primary/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="p-8 relative z-10">
                  <div className="w-14 h-14 bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 rounded-sm">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
