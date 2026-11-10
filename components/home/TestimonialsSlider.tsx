"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-brand-forest text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 fill-brand-orange" />
            <span>4.9 / 5.0 Pilgrim Satisfaction Rating</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white">
            Loved by Yatris & Families Nationwide
          </h2>
          <p className="text-xs text-white/70 mt-2">
            Real feedback from pilgrims who compared quotes and traveled with TravelBit partner operators.
          </p>
        </div>

        {/* Big Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/15 relative shadow-2xl">
          <Quote className="w-12 h-12 text-brand-orange/40 absolute top-6 right-8" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-brand-orange shrink-0 shadow-lg">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>

            {/* Content */}
            <div className="space-y-4 flex-1 text-center md:text-left">
              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-brand-orange">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-lg text-white/95 italic leading-relaxed">
                "{current.review}"
              </blockquote>

              {/* Author & Tour info */}
              <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white flex items-center justify-center md:justify-start gap-1.5">
                    <span>{current.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-brand-green" />
                  </h4>
                  <p className="text-white/60">{current.location}</p>
                </div>

                <div className="bg-white/10 px-3 py-1.5 rounded-xl self-center sm:self-auto text-amber-200 font-semibold">
                  Tour: {current.packageTitle}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows & Indicators */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? "w-8 bg-brand-orange" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

