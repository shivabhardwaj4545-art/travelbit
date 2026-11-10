"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
  Check,
  Send,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { PackageItem } from "@/data/packagesData";

interface StickyBookingCardProps {
  pkg: PackageItem;
  onOpenInquiry: () => void;
}

export function StickyBookingCard({
  pkg,
  onOpenInquiry,
}: StickyBookingCardProps) {
  const discountPercent =
    pkg.originalPrice > pkg.price
      ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
      : null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello TravelBit! I would like to book or inquire about:
*Package:* ${pkg.title}
*Duration:* ${pkg.durationNights}N / ${pkg.durationDays}D
*Price:* ₹${pkg.price.toLocaleString("en-IN")}
Please send custom itinerary options.`
    );
    window.open(`https://wa.me/918851770775?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl space-y-6 sticky top-28">
      {/* Price Header */}
      <div>
        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold block mb-1">
          Special Marketplace Fare
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-heading font-extrabold text-3xl text-brand-forest">
            {formatPrice(pkg.price)}
          </span>
          {pkg.originalPrice > pkg.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(pkg.originalPrice)}
            </span>
          )}
          <span className="text-xs text-gray-500">/ person</span>
        </div>

        {discountPercent && (
          <div className="mt-2 inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-100">
            <Sparkles className="w-3 h-3 text-brand-orange" />
            <span>Limited Deal: Save {discountPercent}%</span>
          </div>
        )}
      </div>

      {/* Primary CTAs */}
      <div className="space-y-2.5">
        <button
          onClick={onOpenInquiry}
          className="w-full py-4 bg-brand-green hover:bg-brand-green-hover text-white rounded-2xl font-bold text-sm shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Request Custom Quotes</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-2xl font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </button>

        <a
          href="tel:18008890379"
          className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl font-bold text-xs transition-colors flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-3.5 h-3.5 text-brand-orange" />
          <span>Call Toll-Free: 1800-8890-379</span>
        </a>
      </div>

      {/* TravelBit Money Safe Guarantee */}
      <div className="bg-brand-cream/60 p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
        <div className="space-y-0.5 text-xs">
          <p className="font-bold text-gray-900">Pay via TravelBit</p>
          <p className="text-gray-500 leading-relaxed">
            Money safe guarantee with milestone protection & verified operator accountability.
          </p>
        </div>
      </div>

      {/* Quick Inclusions */}
      <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600">
        <p className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">
          What's Covered:
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-green shrink-0" />
            <span>Sanitized Private Cab throughout journey</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-green shrink-0" />
            <span>Deluxe verified hotel stays with breakfast</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-green shrink-0" />
            <span>Yatra registration & permit handling</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-green shrink-0" />
            <span>24/7 Dedicated trip manager on call</span>
          </div>
        </div>
      </div>
    </div>
  );
}

