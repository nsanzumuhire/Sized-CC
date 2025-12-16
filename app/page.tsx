import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroV2 } from "@/components/sections/hero-v2";
import { Materials } from "@/components/sections/materials";
import { Services } from "@/components/sections/services";

// Dynamic imports for below-fold sections to improve initial page load
const TechnicalSpecs = dynamic(
  () =>
    import("@/components/sections/technical-specs").then(
      (mod) => mod.TechnicalSpecs
    ),
  {
    loading: () => (
      <div className="py-32 bg-neutral-950 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-64 bg-white/5 rounded-xl" />
        </div>
      </div>
    ),
  }
);

const Portfolio = dynamic(
  () =>
    import("@/components/sections/portfolio").then((mod) => mod.Portfolio),
  {
    loading: () => (
      <div className="py-32 bg-black animate-pulse">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-white/5 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const Features = dynamic(
  () => import("@/components/sections/features").then((mod) => mod.Features),
  {
    loading: () => (
      <div className="py-32 bg-neutral-950 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-48 bg-white/5 rounded-xl" />
        </div>
      </div>
    ),
  }
);

const FAQ = dynamic(
  () => import("@/components/sections/faq").then((mod) => mod.FAQ),
  {
    loading: () => (
      <div className="py-32 bg-black animate-pulse">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-white/5 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

const CTA = dynamic(
  () => import("@/components/sections/cta").then((mod) => mod.CTA),
  {
    loading: () => (
      <div className="py-32 bg-neutral-950 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-48 bg-white/5 rounded-xl" />
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Above-fold content - loaded immediately */}
        <HeroV2 />
        <Materials />
        <Services />

        {/* Below-fold content - dynamically loaded */}
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
