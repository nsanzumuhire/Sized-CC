import { Button } from "@/components/ui/button";
import { Lens } from "@/components/ui/lens";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroVideo from "@assets/generated_videos/cinematic_close_up_of_cnc_laser_cutting_metal_with_sparks.mp4";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video - Subtle and Deep */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Main Interactive Area */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <Lens className="w-full h-full flex items-center justify-center" lensSize={300}>
          <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 p-4">
             {/* Huge Typography */}
             <div className="relative">
                <h1 className="text-[15vw] md:text-[18vw] font-bold font-heading leading-none tracking-tighter text-white mix-blend-difference select-none">
                  SIZED
                </h1>
                <div className="absolute -top-4 -right-4 md:top-4 md:right-10 flex gap-2">
                   <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                   <div className="h-2 w-2 bg-white rounded-full" />
                </div>
                
                {/* Decorative Dimensions */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-full w-[1px] bg-white/20 hidden md:block">
                  <span className="absolute top-1/2 -translate-x-1/2 -rotate-90 text-[10px] text-white/40 font-mono whitespace-nowrap">
                    HEIGHT: 100%
                  </span>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-[1px] bg-white/20 hidden md:block">
                   <span className="absolute left-1/2 bottom-2 -translate-x-1/2 text-[10px] text-white/40 font-mono whitespace-nowrap">
                    WIDTH: AUTO
                  </span>
                </div>
             </div>

             <div className="max-w-xl text-center space-y-6 mix-blend-difference">
               <p className="text-xl md:text-2xl font-medium text-white/80 tracking-tight">
                 Precision Engineering for the Modern World.
               </p>
               
               <div className="flex gap-4 justify-center">
                 <Button className="rounded-full bg-white text-black hover:bg-neutral-200 px-8 py-6 text-lg font-semibold tracking-tight">
                   Start Project
                 </Button>
                 <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold tracking-tight backdrop-blur-md">
                   Capabilities
                 </Button>
               </div>
             </div>
          </div>
        </Lens>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Measure</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
