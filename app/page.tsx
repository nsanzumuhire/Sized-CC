import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroV2 } from "@/components/sections/hero-v2";
import { Materials } from "@/components/sections/materials";
import { Services } from "@/components/sections/services";
import { TechnicalSpecs } from "@/components/sections/technical-specs";
import { Portfolio } from "@/components/sections/portfolio";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroV2 />
        <Materials />
        <Services />
        <TechnicalSpecs />
        <Portfolio />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

