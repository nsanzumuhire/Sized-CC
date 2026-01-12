"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MasonryGrid } from "@/components/portfolio/masonry-grid";
import { MediaModal } from "@/components/portfolio/media-modal";
import { getFeaturedItems } from "@/lib/portfolio-data";
import { PortfolioItem } from "@/types/portfolio";

export function Portfolio() {
  const [items, setItems] = useState < PortfolioItem[] > ([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [columns, setColumns] = useState(3);

  // Load featured items
  useEffect(() => {
    setItems(getFeaturedItems());
  }, []);

  // Responsive columns
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const handleItemClick = (item: PortfolioItem, index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleNavigate = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section id="portfolio" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight mb-6"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
                Portfolio
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 max-w-lg mx-auto text-lg"
          >
            A showcase of precision craftsmanship and industrial artistry.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <MasonryGrid
            items={items}
            columns={columns}
            onItemClick={handleItemClick}
          />
        </motion.div>

        {/* Discover More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
          >
            Discover More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Media Modal */}
      <MediaModal
        item={items[selectedIndex] || null}
        items={items}
        currentIndex={selectedIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
