"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Trash2, ArrowRight } from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { packagesData } from "@/data/packagesData";
import { PackageCard } from "@/components/packages/PackageCard";
import { InquiryModal } from "@/components/forms/InquiryModal";

export default function WishlistPage() {
  const { wishlistIds, clearWishlist } = useWishlistStore();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Char Dham Yatra");

  const savedPackages = packagesData.filter((pkg) =>
    wishlistIds.includes(pkg.id)
  );

  return (
    <div className="bg-brand-cream/40 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link href="/" className="hover:text-brand-green">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-forest font-bold">Saved Packages</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl text-brand-forest flex items-center gap-3">
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              <span>Your Saved Tour Packages ({savedPackages.length})</span>
            </h1>
          </div>

          {savedPackages.length > 0 && (
            <button
              onClick={clearWishlist}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-red-600 px-4 py-2 rounded-xl border border-gray-200 bg-white shadow-sm transition-colors self-start sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Wishlist</span>
            </button>
          )}
        </div>

        {/* Saved Packages Grid */}
        {savedPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onOpenInquiry={(id, title) => {
                  setSelectedPackage(title);
                  setIsInquiryOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-red-50 text-red-400 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Browse our handcrafted Uttarakhand & Char Dham tour packages and click the heart icon to save your favorite itineraries here.
            </p>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          defaultDestination={selectedPackage}
        />
      </div>
    </div>
  );
}

