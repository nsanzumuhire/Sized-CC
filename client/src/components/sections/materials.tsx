import { Marquee } from "@/components/ui/marquee";

const materials = [
  "SS 304", "SS 316", "Aluminum 6061", "Carbon Steel", "Brass Alloy", "Copper", "Titanium Grade 5", "Acrylic", "Polycarbonate"
];

const partners = [
  "SpaceX", "Tesla", "Boeing", "NASA", "Lockheed Martin", "Northrop Grumman", "Raytheon", "General Dynamics"
];

export function Materials() {
  return (
    <section className="py-10 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      <div className="mb-4">
        <p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Trusted Materials & Partners</p>
        
        <Marquee speed={40} className="mb-4">
          {materials.map((item, i) => (
            <div key={i} className="px-8 py-2 mx-2 border border-white/5 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-neutral-400 whitespace-nowrap">{item}</span>
            </div>
          ))}
        </Marquee>

        <Marquee speed={30} direction="right">
          {partners.map((item, i) => (
            <div key={i} className="px-8 py-2 mx-2">
              <span className="text-lg font-bold text-neutral-600 hover:text-white transition-colors whitespace-nowrap cursor-default">{item}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
