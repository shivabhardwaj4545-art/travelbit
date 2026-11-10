"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function ActivityCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const activities = [
    {
      title: "Sacred Pilgrimage & Aarti",
      desc: "Char Dham Yatra, Har Ki Pauri Ganga Aarti, and Kainchi Dham meditation.",
      image: "/images/har-ki-pauri-ganga-aarti.webp",
      link: "/packages?category=Uttarakhand+%26+Char+Dham",
      count: "12 Tours",
    },
    {
      title: "White Water Rafting",
      desc: "Grade III & IV rapids in Shivpuri and Marine Drive on the holy Ganga.",
      image: "/images/rishikesh-river-rafting.webp",
      link: "/packages/rishikesh-mussoorie-hills-and-holy-river",
      count: "5 Tours",
    },
    {
      title: "Alpine Himalayan Trekking",
      desc: "Chopta Tungnath summit, Valley of Flowers, and high-altitude glacial passes.",
      image: "/images/chopta-tungnath-summit.webp",
      link: "/packages/chopta-tungnath-chandrashila-mini-switzerland-trek",
      count: "8 Treks",
    },
    {
      title: "Snow Skiing & Ropeways",
      desc: "Glide over glistening slopes at Auli with panoramic Nanda Devi vistas.",
      image: "/images/auli-meadows-lake.webp",
      link: "/packages/auli-joshimath-ski-slopes-and-nanda-devi",
      count: "4 Tours",
    },
    {
      title: "Tiger & Jungle Safaris",
      desc: "Open Gypsy tracking of Royal Bengal Tigers across Corbett Sal woods.",
      image: "/images/corbett-tiger-safari.webp",
      link: "/packages/jim-corbett-wildlife-safari",
      count: "4 Safaris",
    },
    {
      title: "Tranquil Lake Cruises",
      desc: "Sail on emerald waters of Nainital, Bhimtal, and Naukuchiatal.",
      image: "/images/nainital-lake-view.webp",
      link: "/packages/scenic-nainital-lake-city-getaway",
      count: "6 Tours",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header with Navigation Arrows */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
            Things to Experience in Devbhoomi
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-forest">
            Signature Uttarakhand Experiences
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-forest hover:text-white transition-colors shadow-sm"
            aria-label="Previous activities"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-forest hover:text-white transition-colors shadow-sm"
            aria-label="Next activities"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-none scroll-smooth"
      >
        {activities.map((act, idx) => (
          <Link
            key={idx}
            href={act.link}
            className="group relative min-w-[280px] sm:min-w-[320px] h-[380px] rounded-3xl overflow-hidden shadow-card flex flex-col justify-end p-6 shrink-0"
          >
            <Image
              src={act.image}
              alt={act.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="relative z-10 text-white space-y-2">
              <span className="inline-block bg-brand-orange text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                {act.count}
              </span>
              <h3 className="font-heading font-bold text-xl group-hover:text-amber-200 transition-colors">
                {act.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                {act.desc}
              </p>
              <div className="pt-2 text-xs font-bold text-brand-green group-hover:underline flex items-center gap-1">
                <span>Explore Packages</span>
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

