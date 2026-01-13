"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { PortfolioItem } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface MediaModalProps {
    item: PortfolioItem | null;
    items: PortfolioItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

export function MediaModal({
    item,
    items,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}: MediaModalProps) {
    const videoRef = useRef < HTMLVideoElement > (null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    if (currentIndex > 0) {
                        onNavigate(currentIndex - 1);
                    }
                    break;
                case "ArrowRight":
                    if (currentIndex < items.length - 1) {
                        onNavigate(currentIndex + 1);
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            onNavigate(currentIndex - 1);
        }
    }, [currentIndex, onNavigate]);

    const handleNext = useCallback(() => {
        if (currentIndex < items.length - 1) {
            onNavigate(currentIndex + 1);
        }
    }, [currentIndex, items.length, onNavigate]);

    if (!item) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 text-white" />
                    </button>

                    {/* Navigation arrows */}
                    {currentIndex > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            aria-label="Previous item"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                    )}

                    {currentIndex < items.length - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                            aria-label="Next item"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    )}

                    {/* Content */}
                    <motion.div
                        key={item.id}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10 max-w-5xl w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Media container */}
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black/50">
                            {item.mediaType === "video" ? (
                                <video
                                    ref={videoRef}
                                    src={item.src}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                    poster={item.thumbnail}
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                    priority
                                />
                            )}
                        </div>

                        {/* Info */}
                        <div className="mt-4 text-center">
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">
                                {item.category}
                            </span>
                            <h3 className="text-xl font-bold text-white font-heading mt-1">
                                {item.title}
                            </h3>
                            <p className="text-neutral-400 text-sm mt-2">
                                {currentIndex + 1} of {items.length}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
