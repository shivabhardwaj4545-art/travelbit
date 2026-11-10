"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Filter,
  Search,
  SlidersHorizontal,
  X,
  Compass,
  ArrowUpDown,
} from "lucide-react";
import { PackageCard } from "@/components/packages/PackageCard";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { packagesData, type PackageItem } from "@/data/packagesData";
import { formatPrice } from "@/lib/utils";

function PackagesContent() {
  const searchParams = useSearchParams();
  const initialDestination = searchParams.get("destination") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialDuration = searchParams.get("duration") || "";

  const [searchQuery, setSearchQuery] = useState(initialDestination);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDuration, setSelectedDuration] = useState(initialDuration);
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPackageTitle, setSelectedPackageTitle] = useState("Char Dham Yatra");
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>();

  const categories = [
    "All",
    "Uttarakhand & Char Dham",
    "South Asia",
    "South-East Asia",
    "West Asia",
    "Africa",
    "Europe",
    "Himachal & Kashmir",
    "Others",
  ];

  // Filter & Sort Logic
  const filteredPackages = useMemo(() => {
    let result = [...packagesData];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.destination.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q)
      );
    }

    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedDuration) {
      if (selectedDuration === "1-3") {
        result = result.filter((p) => p.durationDays <= 3);
      } else if (selectedDuration === "4-7") {
        result = result.filter(
          (p) => p.durationDays >= 4 && p.durationDays <= 7
        );
      } else if (selectedDuration === "8+") {
        result = result.filter((p) => p.durationDays >= 8);
      }
    }

    result = result.filter((p) => p.price <= maxPrice);

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDuration, maxPrice, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedDuration("");
    setMaxPrice(100000);
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery || (selectedCategory && selectedCategory !== "All") || selectedDuration || maxPrice < 100000;

  return (
    <div className="bg-brand-cream/40 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-brand-forest font-bold">Tour Packages</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">
            Explore All Tour Packages & Yatras
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Compare prices, day-wise itineraries, and inclusion details from verified local tour operators.
          </p>
        </div>

        {/* Top Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by temple, trek or destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector & Mobile Filter Button */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 bg-gray-50"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-800 bg-white focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Grid: Sidebar Filters + Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-heading font-bold text-base text-gray-900 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-brand-orange" />
                  <span>Filters</span>
                </h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-brand-orange hover:underline font-bold"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Categories */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Region & Category
                </label>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {categories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={
                          selectedCategory === cat ||
                          (cat === "All" && !selectedCategory)
                        }
                        onChange={() => setSelectedCategory(cat === "All" ? "" : cat)}
                        className="text-brand-green focus:ring-brand-green"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="pt-4 border-t border-gray-100">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Duration
                </label>
                <div className="space-y-1.5">
                  {[
                    { id: "", label: "Any Duration" },
                    { id: "1-3", label: "1 - 3 Days (Weekend)" },
                    { id: "4-7", label: "4 - 7 Days (Popular)" },
                    { id: "8+", label: "8+ Days (Full Yatra)" },
                  ].map((dur) => (
                    <label
                      key={dur.id}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={selectedDuration === dur.id}
                        onChange={() => setSelectedDuration(dur.id)}
                        className="text-brand-green focus:ring-brand-green"
                      />
                      <span>{dur.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Max Budget
                  </label>
                  <span className="text-xs font-bold text-brand-forest">
                    {formatPrice(maxPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-brand-green cursor-pointer"
                />
              </div>
            </div>
          </aside>

          {/* Main Package Grid List */}
          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Showing {filteredPackages.length} Tour Packages
              </span>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.id}
                    pkg={pkg}
                    onOpenInquiry={(id, title) => {
                      setSelectedPackageId(id);
                      setSelectedPackageTitle(title);
                      setIsInquiryOpen(true);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
                <Compass className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="font-heading font-bold text-lg text-gray-800">
                  No packages matched your filters
                </h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your price range or search terms, or request an instant customized quote.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-brand-green text-white text-xs font-bold rounded-full hover:bg-brand-green-hover transition-colors shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Global Inquiry Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          defaultDestination={selectedPackageTitle}
          packageId={selectedPackageId}
        />
      </div>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Loading packages...</div>}>
      <PackagesContent />
    </Suspense>
  );
}

