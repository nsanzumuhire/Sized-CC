import { Button } from "@/components/ui/button";
import { Lens } from "@/components/ui/lens";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play, Microscope } from "lucide-react";
import heroVideo from "@assets/generated_videos/cinematic_close_up_of_cnc_laser_cutting_metal_with_sparks.mp4";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      {/* Lens Layer - Visual Only */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Lens className="w-full h-full flex items-center justify-center" lensSize={350}>
           <div className="relative w-full h-full flex flex-col items-center justify-center">
             {/* Giant Background Typography - Revealed by Lens */}
             <h1 className="text-[12vw] md:text-[14vw] font-bold font-heading leading-none tracking-tighter text-white/10 select-none text-center mix-blend-overlay">
                PRECISION<br/>MATTERS
             </h1>
             
             {/* "SIZED" Watermark Stamp */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white/20 p-4 rotate-[-12deg] opacity-50 mix-blend-overlay">
               <span className="text-6xl md:text-8xl font-black tracking-widest text-white/20 uppercase">SIZED</span>
             </div>
           </div>
        </Lens>
      </div>

      {/* UI Layer - Interactive & Sharp (Above Lens) */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none"
      >
         {/* Main Content Container */}
         <div className="max-w-4xl text-center space-y-8 pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
               <div className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse" />
               <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">System Online</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight drop-shadow-2xl">
              Engineering the<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Impossible.</span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              We fabricate the future. From micron-precision aerospace components to monumental architectural structures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-neutral-200 font-medium text-sm tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 group">
                <Microscope className="w-4 h-4 text-black/60 group-hover:text-black transition-colors" />
                Start Project
              </Button>
              <Button variant="outline" className="h-12 px-8 rounded-full border-white/10 bg-black/20 text-white hover:bg-white/10 font-medium text-sm tracking-wide backdrop-blur-md transition-all flex items-center gap-2 group">
                <Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
                Showreel
              </Button>
            </div>
         </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Scan to Explore</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
