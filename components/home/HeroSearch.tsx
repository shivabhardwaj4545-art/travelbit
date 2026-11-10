"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Clock,
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface HeroSearchProps {
  onOpenInquiry?: () => void;
}

export function HeroSearch({ onOpenInquiry }: HeroSearchProps) {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (duration) params.set("duration", duration);
    if (dateFrom) params.set("dateFrom", dateFrom);
    if (dateTo) params.set("dateTo", dateTo);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-forest">
      {/* Background Himalayan Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=85"
          alt="Kedarnath Temple and Himalayan Peaks"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/70 to-brand-forest/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 animate-in fade-in duration-300">
          <Sparkles className="w-4 h-4 text-brand-orange" />
          <span>India's Dedicated Uttarakhand & Char Dham Marketplace</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl leading-[1.15] drop-shadow-md">
          Compare & Book Tour Packages
        </h1>

        {/* Playfair Display Sub-tagline */}
        <p className="font-accent italic text-lg sm:text-2xl text-amber-200 mt-3 drop-shadow">
          Sacred Devbhoomi, Char Dham Yatra & Himalayan Expeditions
        </p>

        <p className="text-white/80 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
          Compare custom quotes from verified local travel operators, save up to 30%, and enjoy complete peace of mind with 24/7 on-ground assistance.
        </p>

        {/* 5-Field Search Engine Bar */}
        <div className="w-full max-w-5xl mt-10">
          <form
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl shadow-2xl border border-white/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center"
          >
            {/* Field 1: Where to? */}
            <div className="lg:col-span-3 text-left px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Where to?</span>
              </label>
              <input
                type="text"
                placeholder="Kedarnath, Corbett, Nainital..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full text-sm font-semibold text-gray-800 focus:outline-none placeholder:text-gray-400 bg-transparent"
              />
            </div>

            {/* Field 2: Trip Duration */}
            <div className="lg:col-span-3 text-left px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Trip Duration</span>
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full text-sm font-semibold text-gray-800 focus:outline-none bg-transparent cursor-pointer"
              >
                <option value="">Any Duration</option>
                <option value="1-3">1 - 3 Days (Weekend)</option>
                <option value="4-7">4 - 7 Days (Popular)</option>
                <option value="8+">8+ Days (Complete Yatra)</option>
              </select>
            </div>

            {/* Field 3: Date from */}
            <div className="lg:col-span-2 text-left px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-brand-green" />
                <span>Date from</span>
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
              />
            </div>

            {/* Field 4: Date to */}
            <div className="lg:col-span-2 text-left px-3 py-2 sm:border-r border-gray-100">
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1 mb-1">
                <Calendar className="w-3.5 h-3.5 text-brand-green" />
                <span>Date to</span>
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full text-xs font-semibold text-gray-800 focus:outline-none bg-transparent"
              />
            </div>

            {/* Field 5: Search Button & CTA */}
            <div className="lg:col-span-2 flex flex-col gap-1.5">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick pills under search */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-white/90">
            <span className="text-white/60">Trending Searches:</span>
            <button
              onClick={() => {
                setDestination("Char Dham");
                router.push("/packages?destination=Char+Dham");
              }}
              className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm transition-colors"
            >
              Char Dham Yatra
            </button>
            <button
              onClick={() => {
                setDestination("Kedarnath");
                router.push("/packages?destination=Kedarnath");
              }}
              className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm transition-colors"
            >
              Kedarnath Trek
            </button>
            <button
              onClick={() => {
                setDestination("Jim Corbett");
                router.push("/packages?destination=Jim+Corbett");
              }}
              className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm transition-colors"
            >
              Jim Corbett Safari
            </button>
            <button
              onClick={() => {
                setDestination("Kainchi Dham");
                router.push("/packages?destination=Kainchi+Dham");
              }}
              className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm transition-colors"
            >
              Kainchi Dham Ashram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

