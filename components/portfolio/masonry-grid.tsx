"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/types/portfolio";
import { PortfolioGridItem } from "./portfolio-item";

interface MasonryGridProps {
    items: PortfolioItem[];
    columns?: number;
    onItemClick: (item: PortfolioItem, index: number) => void;
}

export function MasonryGrid({
    items,
    columns = 3,
    onItemClick,
}: MasonryGridProps) {
    // Distribute items across columns for masonry effect
    const columnItems = useMemo(() => {
        const cols: PortfolioItem[][] = Array.from({ length: columns }, () => []);
        const heights: number[] = Array(columns).fill(0);

        items.forEach((item) => {
            // Find column with minimum height
            const minHeightIndex = heights.indexOf(Math.min(...heights));
            cols[minHeightIndex].push(item);
            heights[minHeightIndex] += item.aspectRatio;
        });

        return cols;
    }, [items, columns]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid gap-3"
            style={{
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
        >
            {columnItems.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3">
                    {column.map((item) => {
                        const originalIndex = items.findIndex((i) => i.id === item.id);
                        return (
                            <PortfolioGridItem
                                key={item.id}
                                item={item}
                                onClick={() => onItemClick(item, originalIndex)}
                            />
                        );
                    })}
                </div>
            ))}
        </motion.div>
    );
}
