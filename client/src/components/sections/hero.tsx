import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import heroVideo from "@assets/generated_videos/cinematic_close_up_of_cnc_laser_cutting_metal_with_sparks.mp4";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background Video with improved gradient overlay for readability */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Complex Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center justify-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Accepting New Projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight text-white leading-[0.9]">
            <span className="block mb-2">Build It</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-400">
              Precision.
            </span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
            Industrial fabrication reimagined. We engineer custom metal solutions with micron-level accuracy for brands that demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 w-full max-w-md mx-auto">
            <Button size="lg" className="bg-white hover:bg-neutral-200 text-black font-semibold rounded-full h-12 px-8 text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105 w-full sm:w-auto">
              Start Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-full h-12 px-8 text-base hover:border-white/20 transition-all w-full sm:w-auto">
              View Showreel
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
