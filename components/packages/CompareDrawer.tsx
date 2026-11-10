"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Layers, Trash2, ArrowRight, Check, Star } from "lucide-react";
import { useCompareStore } from "@/store/useCompareStore";
import { formatPrice, formatDuration } from "@/lib/utils";

interface CompareDrawerProps {
  onOpenInquiry?: (pkgId?: string) => void;
}

export function CompareDrawer({ onOpenInquiry }: CompareDrawerProps) {
  const { items, isOpen, closeDrawer, removeFromCompare, clearCompare } =
    useCompareStore();

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating Bottom Pill when minimized */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40 animate-bounce">
          <button
            onClick={() => useCompareStore.getState().openDrawer()}
            className="flex items-center gap-2 bg-brand-forest text-white px-4 py-2.5 rounded-full shadow-2xl hover:bg-brand-forest-light border border-white/20 text-sm font-semibold transition-transform active:scale-95"
          >
            <Layers className="w-4 h-4 text-brand-orange" />
            <span>Compare ({items.length}/3)</span>
            <span className="bg-brand-orange text-white text-xs px-2 py-0.5 rounded-full font-bold">
              View
            </span>
          </button>
        </div>
      )}

      {/* Slide-up Comparison Sheet Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-6xl max-h-[85vh] rounded-t-3xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="bg-brand-forest text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Compare Tour Packages
                  </h3>
                  <p className="text-xs text-white/70">
                    Comparing {items.length} of 3 allowed packages side by side
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={clearCompare}
                  className="text-xs text-white/70 hover:text-red-300 flex items-center gap-1 transition-colors px-2 py-1 rounded"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
                <button
                  onClick={closeDrawer}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Comparison Cards Content */}
            <div className="p-6 overflow-x-auto overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[600px]">
                {items.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all"
                  >
                    <div>
                      {/* Top image & remove button */}
                      <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3">
                        <Image
                          src={pkg.coverImage}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <button
                          onClick={() => removeFromCompare(pkg.id)}
                          className="absolute top-2 right-2 bg-black/60 hover:bg-red-600 text-white p-1 rounded-full backdrop-blur-sm transition-colors"
                          title="Remove from compare"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm font-semibold">
                          {formatDuration(pkg.durationDays, pkg.durationNights)}
                        </div>
                      </div>

                      <h4 className="font-heading font-bold text-sm text-gray-900 line-clamp-2 mb-1">
                        {pkg.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">{pkg.destination}</p>

                      {/* Ratings */}
                      <div className="flex items-center gap-1 text-xs text-brand-orange font-bold mb-3">
                        <Star className="w-3.5 h-3.5 fill-brand-orange" />
                        <span>{pkg.rating} / 5.0</span>
                      </div>

                      {/* Price breakdown */}
                      <div className="bg-brand-green/10 p-2.5 rounded-xl mb-3">
                        <span className="text-[11px] text-gray-600 block">
                          Starts From
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading font-extrabold text-lg text-brand-forest">
                            {formatPrice(pkg.price)}
                          </span>
                          {pkg.originalPrice > pkg.price && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatPrice(pkg.originalPrice)}
                            </span>
                          )}
                          <span className="text-[11px] text-gray-500">/ person</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1.5 text-xs text-gray-600 mb-4">
                        <span className="font-bold text-gray-800 block text-[11px] uppercase tracking-wider">
                          Key Highlights:
                        </span>
                        {pkg.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-gray-200 flex gap-2">
                      <Link
                        href={`/packages/${pkg.slug}`}
                        onClick={closeDrawer}
                        className="flex-1 text-center py-2 px-3 border border-gray-300 hover:border-brand-forest text-xs font-bold rounded-lg text-gray-700 hover:text-brand-forest transition-colors"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => {
                          closeDrawer();
                          onOpenInquiry?.(pkg.id);
                        }}
                        className="flex-1 py-2 px-3 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}

                {/* Empty slots placeholders if less than 3 */}
                {Array.from({ length: 3 - items.length }).map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center text-gray-400"
                  >
                    <Layers className="w-8 h-8 mb-2 stroke-1" />
                    <p className="text-sm font-semibold">Add another package</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click the compare icon on any package card to compare
                    </p>
                    <Link
                      href="/packages"
                      onClick={closeDrawer}
                      className="mt-4 text-xs font-bold text-brand-green hover:underline flex items-center gap-1"
                    >
                      <span>Browse Packages</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

