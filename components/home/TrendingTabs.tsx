"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Clock, Star } from "lucide-react";
import { packagesData } from "@/data/packagesData";
import { formatPrice, formatDuration } from "@/lib/utils";

export function TrendingTabs() {
  const [activeTab, setActiveTab] = useState<"yatra" | "weekend" | "treks" | "safari">("yatra");

  const trendingItems = {
    yatra: packagesData.filter((p) => p.title.includes("Char Dham") || p.title.includes("Kainchi")),
    weekend: packagesData.filter((p) => p.durationDays <= 4),
    treks: packagesData.filter((p) => p.title.includes("Trek")),
    safari: packagesData.filter((p) => p.title.includes("Corbett") || p.category === "Africa"),
  };

  const tabs = [
    { id: "yatra", label: "🔥 Holy Pilgrimages" },
    { id: "weekend", label: "🌿 Weekend Escapes (2-4D)" },
    { id: "treks", label: "🏔️ Himalayan Treks" },
    { id: "safari", label: "🐅 Wildlife Safaris" },
  ];

  const currentList = trendingItems[activeTab] || [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Devbhoomi Highlights</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
              What's Trending in Uttarakhand
            </h2>
          </div>

          {/* Trending Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-forest text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Featured Horizontal/Vertical Trending Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentList.slice(0, 3).map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-brand-cream/60 rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.coverImage}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-brand-forest/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {formatDuration(pkg.durationDays, pkg.durationNights)}
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-brand-orange text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-brand-orange" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-brand-green font-bold uppercase tracking-wider block mb-1">
                    {pkg.destination}
                  </span>
                  <Link href={`/packages/${pkg.slug}`}>
                    <h3 className="font-heading font-bold text-base text-gray-900 group-hover:text-brand-green transition-colors line-clamp-2">
                      {pkg.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">
                      Starts From
                    </span>
                    <span className="font-heading font-extrabold text-lg text-brand-forest">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>

                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="inline-flex items-center gap-1 bg-brand-green hover:bg-brand-green-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

