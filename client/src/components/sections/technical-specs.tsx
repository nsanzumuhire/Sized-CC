import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Gauge, Cpu, Zap, Scan, Boxes, Layers } from "lucide-react";

const specs = [
  {
    title: "Micron Precision",
    desc: "Laser cutting tolerance of ±0.05mm for ultra-precise fitments.",
    icon: Scan,
  },
  {
    title: "High Speed CNC",
    desc: "5-Axis machining capabilities for complex geometries.",
    icon: Gauge,
  },
  {
    title: "Automated Bending",
    desc: "Robotic press brakes ensuring consistent angles every time.",
    icon: Layers,
  },
  {
    title: "Fiber Laser Tech",
    desc: "12kW Fiber lasers capable of cutting 30mm thick steel.",
    icon: Zap,
  },
  {
    title: "Smart Inventory",
    desc: "Real-time material tracking and automated restocking.",
    icon: Boxes,
  },
  {
    title: "Digital Integration",
    desc: "Direct CAD-to-Machine workflow for rapid prototyping.",
    icon: Cpu,
  },
];

export function TechnicalSpecs() {
  return (
    <section className="py-32 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">Technical Capabilities</h2>
          <p className="text-neutral-400">
            We utilize state-of-the-art machinery to deliver components that meet aerospace and medical industry standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => (
            <div key={i} className="h-64">
              <CardSpotlight className="flex flex-col items-start p-8 h-full bg-neutral-900/50">
                <div className="bg-white/5 p-3 rounded-lg mb-6 border border-white/5">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{spec.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{spec.desc}</p>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
