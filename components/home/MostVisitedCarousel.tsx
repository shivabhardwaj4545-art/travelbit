"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { destinationsData } from "@/data/destinationsData";

export function MostVisitedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-brand-forest text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider block mb-1">
              Pilgrim & Traveler Favorites
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
              Most Visited Destinations in Uttarakhand
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Circular Icon Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-4 scrollbar-none scroll-smooth items-center"
        >
          {destinationsData.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group flex flex-col items-center text-center shrink-0 w-36 sm:w-44 select-none"
            >
              {/* Circular Thumbnail with Orange Border */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-brand-orange/80 group-hover:border-brand-green group-hover:scale-105 transition-all duration-300 shadow-xl">
                <Image
                  src={dest.coverImage}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>

              {/* Title & Stats */}
              <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors mt-3">
                {dest.name}
              </h4>
              <span className="text-xs text-white/60">
                {dest.packagesCount} Tour Packages
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

