"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, Clock, Layers, Sparkles, ArrowRight } from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";
import { formatPrice, formatDuration } from "@/lib/utils";
import type { PackageItem } from "@/data/packagesData";

interface PackageCardProps {
  pkg: PackageItem;
  onOpenInquiry?: (packageId: string, destination: string) => void;
}

export function PackageCard({ pkg, onOpenInquiry }: PackageCardProps) {
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(pkg.id));
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);

  const isInCompare = useCompareStore((state) => state.isInCompare(pkg.id));
  const addToCompare = useCompareStore((state) => state.addToCompare);
  const removeFromCompare = useCompareStore((state) => state.removeFromCompare);

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInCompare) {
      removeFromCompare(pkg.id);
    } else {
      addToCompare({
        id: pkg.id,
        slug: pkg.slug,
        title: pkg.title,
        destination: pkg.destination,
        durationDays: pkg.durationDays,
        durationNights: pkg.durationNights,
        price: pkg.price,
        originalPrice: pkg.originalPrice,
        rating: pkg.rating,
        coverImage: pkg.coverImage,
        highlights: pkg.highlights,
      });
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-brand-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-sm">
            <Clock className="w-3 h-3 text-brand-orange" />
            <span>{formatDuration(pkg.durationDays, pkg.durationNights)}</span>
          </span>

          {pkg.featured && (
            <span className="bg-brand-orange text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Top Right Action Icons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {/* Compare Toggle */}
          <button
            onClick={handleCompareClick}
            title={isInCompare ? "Remove from compare" : "Add to compare"}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              isInCompare
                ? "bg-brand-orange text-white"
                : "bg-white/80 text-gray-700 hover:bg-white hover:text-brand-forest"
            }`}
          >
            <Layers className="w-4 h-4" />
          </button>

          {/* Wishlist Toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(pkg.id);
            }}
            title={isInWishlist ? "Remove from wishlist" : "Save to wishlist"}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
              isInWishlist
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-700 hover:bg-white hover:text-red-500"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isInWishlist ? "fill-white" : ""}`}
            />
          </button>
        </div>

        {/* Bottom Destination Tag */}
        <div className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow-md">
          {pkg.destination}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <Link href={`/packages/${pkg.slug}`}>
            <h3 className="font-heading font-bold text-base text-gray-900 group-hover:text-brand-green transition-colors line-clamp-2 leading-snug">
              {pkg.title}
            </h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 bg-amber-50 text-brand-orange px-2 py-0.5 rounded text-xs font-bold border border-amber-100">
              <Star className="w-3.5 h-3.5 fill-brand-orange" />
              <span>{pkg.rating}</span>
            </div>
            <span className="text-xs text-gray-400">
              ({pkg.reviewCount} pilgrim reviews)
            </span>
          </div>

          {/* 3 Feature Chips */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {pkg.chips.slice(0, 3).map((chip, idx) => (
              <span
                key={idx}
                className="bg-brand-cream text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-full border border-gray-200/60"
              >
                ✓ {chip}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-xs text-gray-500 mt-2.5 line-clamp-2 leading-relaxed">
            {pkg.tagline}
          </p>
        </div>

        {/* Pricing & CTA Section */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-[11px] text-gray-400 block uppercase tracking-wider font-semibold">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-xl text-brand-forest">
                  {formatPrice(pkg.price)}
                </span>
                {pkg.originalPrice > pkg.price && (
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(pkg.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-gray-500">/ person</span>
              </div>
            </div>

            {pkg.originalPrice > pkg.price && (
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/packages/${pkg.slug}`}
              className="w-full text-center py-2.5 px-3 border border-gray-200 hover:border-brand-forest text-xs font-bold rounded-xl text-gray-700 hover:text-brand-forest transition-colors flex items-center justify-center gap-1"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => onOpenInquiry?.(pkg.id, pkg.title)}
              className="w-full py-2.5 px-3 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

