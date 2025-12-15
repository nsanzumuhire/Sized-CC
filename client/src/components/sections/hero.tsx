import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/cinematic_close_up_of_cnc_laser_cutting_metal_with_sparks.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter text-white mb-2">
              <TextReveal text="Precision Metal" className="justify-center" />
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
               <TextReveal text="Fabrication" className="justify-center" delay={0.5} />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mt-6 backdrop-blur-sm bg-black/20 p-4 rounded-lg border border-white/5">
            Custom signage, furniture, branding, and décor — built to exact size.
            Industrial craftsmanship for high-performance needs.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-none h-14 px-8 text-lg border border-primary hover:scale-105 transition-transform duration-300">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-700 bg-black/50 backdrop-blur-md hover:bg-neutral-800 text-white rounded-none h-14 px-8 text-lg hover:border-white transition-colors">
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
    </section>
  );
}
