"use client";

import React, { useState } from "react";
import { HeroSearch } from "@/components/home/HeroSearch";
import { TrustBadges } from "@/components/home/TrustBadges";
import { WelcomeStats } from "@/components/home/WelcomeStats";
import { FeatureCards } from "@/components/home/FeatureCards";
import { ActivityCarousel } from "@/components/home/ActivityCarousel";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { PackageGrid } from "@/components/home/PackageGrid";
import { CharDhamBanner } from "@/components/home/CharDhamBanner";
import { MostVisitedCarousel } from "@/components/home/MostVisitedCarousel";
import { PackageFeatures } from "@/components/home/PackageFeatures";
import { TrendingTabs } from "@/components/home/TrendingTabs";
import { InteractiveMapSection } from "@/components/home/InteractiveMapSection";
import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { QuickInquiryForm } from "@/components/home/QuickInquiryForm";
import { BlogCards } from "@/components/home/BlogCards";
import { Newsletter } from "@/components/home/Newsletter";
import { GalleryAndSocial } from "@/components/home/GalleryAndSocial";
import { InquiryModal } from "@/components/forms/InquiryModal";

export default function HomePage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(
    "Char Dham Yatra 11N/12D"
  );
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>();

  const handleOpenInquiry = (pkgId?: string, dest?: string) => {
    setSelectedPackageId(pkgId);
    if (dest) setSelectedDestination(dest);
    setIsInquiryOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero with 5-field search */}
      <HeroSearch onOpenInquiry={() => handleOpenInquiry()} />

      {/* 2. 4 Trust Badges */}
      <TrustBadges />

      {/* 3. Welcome + Animated Stats */}
      <WelcomeStats onOpenInquiry={() => handleOpenInquiry()} />

      {/* 4. 4 Feature Cards + Trust Score Bar */}
      <FeatureCards />

      {/* 5. Signature Activity Carousel */}
      <ActivityCarousel />

      {/* 6. Featured Destinations */}
      <FeaturedDestinations />

      {/* 7. Package Grid with Category Tabs & "View More" */}
      <PackageGrid
        onOpenInquiry={(id, dest) => handleOpenInquiry(id, dest)}
      />

      {/* 8. Char Dham Dark Promo Banner with Video Modal */}
      <CharDhamBanner onOpenInquiry={() => handleOpenInquiry()} />

      {/* 9. Most Visited Destinations Circular Icons Dark Carousel */}
      <MostVisitedCarousel />

      {/* 10. 6 Package Feature Assurances */}
      <PackageFeatures />

      {/* 11. What's Trending in Uttarakhand Tabs */}
      <TrendingTabs />

      {/* 12. Interactive Uttarakhand SVG Map with Circuits & Filters */}
      <InteractiveMapSection />

      {/* 13. Yatris Testimonials Slider */}
      <TestimonialsSlider />

      {/* 14. In-Page Quick Tour Inquiry Form */}
      <QuickInquiryForm />

      {/* 15. Travel Guides & Yatra Tips */}
      <BlogCards />

      {/* 16. Newsletter Signup */}
      <Newsletter />

      {/* 17. Snapshot Gallery & Social Grid */}
      <GalleryAndSocial />

      {/* Global Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultDestination={selectedDestination}
        packageId={selectedPackageId}
      />
    </div>
  );
}

