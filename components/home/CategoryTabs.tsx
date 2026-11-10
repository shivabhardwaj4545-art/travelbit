"use client";

import React from "react";
import { motion } from "framer-motion";

export const EXACT_CATEGORIES = [
  "Uttarakhand & Char Dham",
  "South Asia",
  "South-East Asia",
  "West Asia",
  "Africa",
  "Europe",
  "Himachal & Kashmir",
  "Others",
];

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function CategoryTabs({
  selectedCategory,
  onSelectCategory,
}: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max p-1 bg-gray-100/80 rounded-2xl border border-gray-200">
        {EXACT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors select-none ${
                isSelected
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-brand-forest rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

