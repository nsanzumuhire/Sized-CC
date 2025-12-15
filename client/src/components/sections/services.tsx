import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Hammer, Sofa, Palette, Gift, Printer, PenTool } from "lucide-react";

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

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industrial-grade fabrication services for commercial and residential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors rounded-none group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-white font-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-neutral-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
