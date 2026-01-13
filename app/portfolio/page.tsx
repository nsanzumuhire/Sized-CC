"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MasonryGrid } from "@/components/portfolio/masonry-grid";
import { MediaModal } from "@/components/portfolio/media-modal";
import { PortfolioShimmer } from "@/components/portfolio/portfolio-shimmer";
import { fetchPortfolioItems } from "@/lib/portfolio-data";
import {
    PortfolioItem,
    SERVICE_CATEGORIES,
    MEDIA_TYPES,
    ServiceCategory,
    MediaType,
} from "@/types/portfolio";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
    const [categoryFilter, setCategoryFilter] = useState < ServiceCategory | "all" > ("all");
    const [mediaFilter, setMediaFilter] = useState < MediaType | "all" > ("all");
    const [allItems, setAllItems] = useState < PortfolioItem[] > ([]);
    const [filteredItems, setFilteredItems] = useState < PortfolioItem[] > ([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [columns, setColumns] = useState(3);
    const [loading, setLoading] = useState(true);

    // Fetch all items on mount
    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchPortfolioItems();
                setAllItems(data);
                setFilteredItems(data);
            } catch (error) {
                console.error("Failed to load portfolio items", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    // Filter items locally when filters change
    useEffect(() => {
        let result = allItems;

        if (categoryFilter !== 'all') {
            result = result.filter(item => item.category === categoryFilter);
        }

        if (mediaFilter !== 'all') {
            result = result.filter(item => item.mediaType === mediaFilter);
        }

        setFilteredItems(result);
    }, [categoryFilter, mediaFilter, allItems]);

    // Responsive columns
    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else if (window.innerWidth < 1536) {
                setColumns(3);
            } else {
                setColumns(4);
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
        <div className="min-h-screen bg-black">
            {/* Header */}
            <div className="pt-32 pb-12">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
                                Our Work
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight mb-6">
                            Portfolio
                        </h1>

                        <p className="text-neutral-400 max-w-lg mx-auto text-lg">
                            Explore our complete collection of precision craftsmanship and
                            industrial artistry.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Filters */}
            <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-y border-white/5">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        {/* Category filters */}
                        <div className="flex flex-wrap items-center gap-2">
                            {SERVICE_CATEGORIES.map((category) => (
                                <button
                                    key={category.value}
                                    onClick={() => setCategoryFilter(category.value)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                        categoryFilter === category.value
                                            ? "bg-primary text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                                            : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                                    )}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Media type toggle */}
                        <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10">
                            {MEDIA_TYPES.map((type) => (
                                <button
                                    key={type.value}
                                    onClick={() => setMediaFilter(type.value)}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                                        mediaFilter === type.value
                                            ? "bg-white text-black"
                                            : "text-neutral-400 hover:text-white"
                                    )}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-4 py-12">
                {loading ? (
                    <PortfolioShimmer />
                ) : filteredItems.length > 0 ? (
                    <MasonryGrid
                        items={filteredItems}
                        columns={columns}
                        onItemClick={handleItemClick}
                    />
                ) : allItems.length === 0 ? (
                    <div className="text-center py-20 opacity-60">
                        <p className="text-neutral-500">No portfolio items uploaded yet.</p>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-neutral-400 text-lg">
                            No items found matching your filters.
                        </p>
                        <button
                            onClick={() => {
                                setCategoryFilter("all");
                                setMediaFilter("all");
                            }}
                            className="mt-4 px-6 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-colors"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Media Modal */}
            <MediaModal
                item={filteredItems[selectedIndex] || null}
                items={filteredItems}
                currentIndex={selectedIndex}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onNavigate={handleNavigate}
            />
        </div>
    );
}
