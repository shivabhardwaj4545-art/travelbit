"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { CategoryTabs } from "./CategoryTabs";
import { PackageCard } from "@/components/packages/PackageCard";
import { packagesData, type PackageItem } from "@/data/packagesData";

interface PackageGridProps {
  onOpenInquiry?: (packageId?: string, destination?: string) => void;
}

export function PackageGrid({ onOpenInquiry }: PackageGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Uttarakhand & Char Dham"
  );

  const filteredPackages = useMemo(() => {
    return packagesData.filter((pkg) => pkg.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-brand-orange" />
            <span>Handpicked Marketplace Packages</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
            Explore Handcrafted Tour Packages
          </h2>
        </div>

        <Link
          href="/packages"
          className="text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-green flex items-center gap-1 group transition-colors"
        >
          <span>Explore All 38+ Packages</span>
          <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="mb-8">
        <CategoryTabs
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Animated Package Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <PackageCard
                pkg={pkg}
                onOpenInquiry={(id, dest) => onOpenInquiry?.(id, dest)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* If category has no packages */}
      {filteredPackages.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
          <p className="text-gray-500 text-sm">
            No fixed packages currently published under this category. Custom quotes can be tailored instantly!
          </p>
          <button
            onClick={() => onOpenInquiry?.(undefined, selectedCategory)}
            className="mt-4 px-6 py-2.5 bg-brand-green text-white text-xs font-bold rounded-full hover:bg-brand-green-hover transition-colors shadow-sm"
          >
            Enquire for {selectedCategory} →
          </button>
        </div>
      )}

      {/* View More Packages Bottom CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/packages"
          className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-forest-light text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
        >
          <span>View All Tour Packages</span>
          <ArrowRight className="w-4 h-4 text-brand-orange" />
        </Link>
      </div>
    </section>
  );
}

