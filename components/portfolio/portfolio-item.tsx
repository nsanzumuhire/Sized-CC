"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { PortfolioItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioGridItemProps {
    item: PortfolioItem;
    onClick: () => void;
}

export function PortfolioGridItem({ item, onClick }: PortfolioGridItemProps) {
    const ref = useRef < HTMLDivElement > (null);
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Intersection observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const imageSrc = item.mediaType === "video" ? item.thumbnail : item.src;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid mb-3"
            style={{ aspectRatio: `1 / ${item.aspectRatio}` }}
            onClick={onClick}
        >
            {/* Image */}
            {isVisible && imageSrc && (
                <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-110",
                        !imageLoaded && "opacity-0"
                    )}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => setImageLoaded(true)}
                />
            )}

            {/* Loading skeleton */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-white/5 animate-pulse" />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

            {/* Video indicator */}
            <AnimatePresence>
                {item.mediaType === "video" && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center gap-1.5"
                    >
                        <Play className="w-3 h-3 text-primary fill-primary" />
                        <span className="text-[10px] font-medium text-white uppercase tracking-wide">
                            Video
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content - always visible */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {item.category}
                </span>
                <h3 className="text-lg font-bold text-white font-heading group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
                    {item.title}
                </h3>
            </div>

            {/* Corner accent on hover */}
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/30 transition-colors duration-300 rounded-tr-lg" />
        </motion.div>
    );
}
