"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, X, Check, PhoneCall, ArrowRight } from "lucide-react";
import { TornDivider } from "@/components/layout/TornDivider";

interface CharDhamBannerProps {
  onOpenInquiry?: () => void;
}

export function CharDhamBanner({ onOpenInquiry }: CharDhamBannerProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const perks = [
    "Priority VIP Darshan assistance at Kedarnath & Badrinath",
    "Verified luxury camps & heated rooms in high altitude",
    "Dedicated commercial cabs with experienced hill drivers",
    "Helicopter shuttle booking assistance from Phata / Guptkashi",
  ];

  return (
    <section className="relative bg-brand-forest text-white overflow-hidden my-12">
      {/* Top and bottom organic torn dividers */}
      <TornDivider position="top" fillColor="#0B2E22" className="-top-3 text-brand-forest" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sacred Pilgrimage 2026 Special</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight">
              Embark on the Holy <span className="text-brand-orange">Char Dham Yatra</span>
            </h2>

            <p className="font-accent italic text-xl text-amber-200">
              "Yamunotri • Gangotri • Kedarnath • Badrinath"
            </p>

            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              Experience the supreme spiritual journey of a lifetime across the
              snow-peaked abodes of Lord Shiva and Lord Vishnu. Let our experienced
              mountain coordinators manage your biometric passes, helicopter shuttles,
              sanitized cabs, and pure vegetarian meals so you can focus entirely on devotion.
            </p>

            {/* 4 Key Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-white/90">
                  <div className="w-4 h-4 rounded-full bg-brand-green text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenInquiry}
                className="bg-brand-green hover:bg-brand-green-hover text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Plan Your Yatra Now</span>
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </button>

              <a
                href="tel:18008890379"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-full font-bold text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-orange" />
                <span>1800-8890-379</span>
              </a>
            </div>
          </div>

          {/* Right Video Thumbnail Trigger */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-2 border-white/20 transform group-hover:scale-105 transition-all"
            >
              <Image
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80"
                alt="Kedarnath Darshan Teaser"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand-orange/40 animate-ping absolute" />
                  <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl text-center text-xs text-white font-semibold">
                ▶ Watch Devbhoomi Kedarnath & Badrinath Yatra Film
              </div>
            </div>
          </div>
        </div>
      </div>

      <TornDivider position="bottom" fillColor="#0B2E22" className="-bottom-3 text-brand-forest" />

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-black rounded-3xl overflow-hidden max-w-4xl w-full aspect-video shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src="https://www.youtube-nocookie.com/embed/a3ICNMQW7Ok?autoplay=1"
              title="Char Dham Yatra Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}

