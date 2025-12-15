import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary border-t border-white/10">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-8 tracking-tight">
          Let’s build something solid.
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-medium">
          Ready to start your project? Get a precision quote today.
        </p>
        <Button size="lg" className="bg-white text-primary hover:bg-neutral-100 text-lg font-bold h-16 px-10 rounded-none shadow-2xl">
          Request a Quote
        </Button>
      </div>
    </section>
  );
}
