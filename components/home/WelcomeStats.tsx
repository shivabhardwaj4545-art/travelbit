"use client";

import React from "react";
import { Award, Compass, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

interface WelcomeStatsProps {
  onOpenInquiry?: () => void;
}

export function WelcomeStats({ onOpenInquiry }: WelcomeStatsProps) {
  const stats = [
    {
      icon: Award,
      value: "12+",
      label: "Years Experience",
      sub: "Dedicated yatra & holiday planning",
    },
    {
      icon: Compass,
      value: "38+",
      label: "Uttarakhand Tours",
      sub: "Char Dham, treks & wildlife safaris",
    },
    {
      icon: Users,
      value: "1089+",
      label: "Happy Clients",
      sub: "Seamless journeys across India",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Pilgrim Rating",
      sub: "Consistent verified traveler reviews",
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Welcome Text */}
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Welcome to TravelBit Holidays</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest leading-tight">
            Your Trusted Himalayan Pilgrimage & Adventure Companion
          </h2>

          <p className="font-accent italic text-brand-orange text-lg">
            "Devbhoomi Uttarakhand calls your soul to serenity"
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Founded with a passion for authentic mountain hospitality, TravelBit
            empowers travelers to compare tailored itineraries from certified local
            ground experts. Whether seeking sacred blessings at the four Himalayan
            shrines or trekking scenic bugyals, our team ensures every detail is
            smoothly coordinated.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 bg-brand-forest hover:bg-brand-forest-light text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <span>Get Free Custom Quote</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </button>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-brand-forest text-gray-700 hover:text-brand-forest px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-colors"
            >
              Our Story & Team
            </Link>
          </div>
        </div>

        {/* Right Animated Stats Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest tracking-tight">
                  {stat.value}
                </div>
                <div className="font-bold text-sm text-gray-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

