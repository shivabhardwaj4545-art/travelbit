"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Star,
  Check,
  X as XIcon,
  HelpCircle,
  Sparkles,
  Share2,
} from "lucide-react";
import { ImageGallery } from "@/components/packages/ImageGallery";
import { ItineraryAccordion } from "@/components/packages/ItineraryAccordion";
import { StickyBookingCard } from "@/components/packages/StickyBookingCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { InquiryModal } from "@/components/forms/InquiryModal";
import { formatDuration } from "@/lib/utils";
import type { PackageItem } from "@/data/packagesData";

interface DetailPageClientProps {
  pkg: PackageItem;
  relatedPackages: PackageItem[];
}

export function DetailPageClient({ pkg, relatedPackages }: DetailPageClientProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-brand-green">
              Home
            </Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-brand-green">
              Packages
            </Link>
            <span>/</span>
            <span className="text-brand-forest font-bold truncate max-w-xs sm:max-w-md">
              {pkg.title}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-brand-forest bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Link Copied!" : "Share Tour"}</span>
          </button>
        </div>

        {/* Title Header */}
        <div className="mb-6 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-brand-forest text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3 text-brand-orange" />
              <span>{formatDuration(pkg.durationDays, pkg.durationNights)}</span>
            </span>
            <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full">
              {pkg.region}
            </span>
            {pkg.featured && (
              <span className="bg-brand-orange text-white text-xs font-extrabold uppercase px-2.5 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest leading-tight">
            {pkg.title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {pkg.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
            <div className="flex items-center gap-1 text-brand-orange font-bold">
              <Star className="w-4 h-4 fill-brand-orange" />
              <span>{pkg.rating}</span>
              <span className="text-gray-400 font-normal">
                ({pkg.reviewCount} reviews)
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-gray-700">
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>{pkg.destination}</span>
            </div>
          </div>
        </div>

        {/* Main Content & Sticky Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery, Overview, Itinerary, Inclusions, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            {/* Gallery */}
            <ImageGallery images={pkg.gallery} title={pkg.title} />

            {/* Highlights Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-xl text-brand-forest flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-orange" />
                <span>Tour Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-4 h-4 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day-by-Day Itinerary Accordion */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-brand-forest">
                Day-Wise Detailed Itinerary
              </h3>
              <ItineraryAccordion itinerary={pkg.itinerary} />
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-base text-brand-forest flex items-center gap-2">
                  <Check className="w-5 h-5 text-brand-green" />
                  <span>What's Included</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-green font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 border border-red-100 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-base text-gray-900 flex items-center gap-2">
                  <XIcon className="w-5 h-5 text-red-500" />
                  <span>What's Not Included</span>
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs Accordion */}
            {pkg.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                <h3 className="font-heading font-bold text-xl text-brand-forest flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-4">
                  {pkg.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-gray-100 rounded-2xl p-4 bg-brand-cream/30 space-y-1.5"
                    >
                      <h5 className="font-heading font-bold text-sm text-gray-900">
                        {faq.question}
                      </h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4 w-full">
            <StickyBookingCard
              pkg={pkg}
              onOpenInquiry={() => setIsInquiryOpen(true)}
            />
          </div>
        </div>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
                  Similar Devbhoomi Tours
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-forest">
                  You Might Also Like
                </h3>
              </div>
              <Link
                href="/packages"
                className="text-xs font-bold text-brand-forest hover:text-brand-green flex items-center gap-1"
              >
                <span>Browse All</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPackages.map((rel) => (
                <PackageCard
                  key={rel.id}
                  pkg={rel}
                  onOpenInquiry={() => setIsInquiryOpen(true)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Inquiry Modal */}
        <InquiryModal
          isOpen={isInquiryOpen}
          onClose={() => setIsInquiryOpen(false)}
          defaultDestination={pkg.title}
          packageId={pkg.id}
        />
      </div>
    </div>
  );
}

