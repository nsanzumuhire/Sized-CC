import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Materials } from "@/components/sections/materials";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { TechnicalSpecs } from "@/components/sections/technical-specs";
import { Portfolio } from "@/components/sections/portfolio";
import { Features } from "@/components/sections/features";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Materials />
        <Services />
        <TechnicalSpecs />
        <Process />
        <Portfolio />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
