import React from "react";
import { Compass, Scale, Star, ShieldCheck } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Compass,
      title: "India's Largest tour packages marketplace",
      desc: "Wide selection of verified holiday and pilgrimage tours across India",
      color: "bg-emerald-50 text-brand-green",
    },
    {
      icon: Scale,
      title: "Compare Quotes — from 3 agents, save up to 30%",
      desc: "Get customized itineraries from competitive local experts",
      color: "bg-amber-50 text-brand-orange",
    },
    {
      icon: Star,
      title: "Top Agents — 4.4★ across 100K+ trips",
      desc: "Vetted tour operators with exceptional traveler satisfaction",
      color: "bg-yellow-50 text-amber-600",
    },
    {
      icon: ShieldCheck,
      title: "Pay via TravelBit — money safe guarantee",
      desc: "Safe milestone payments held until tour commencement",
      color: "bg-emerald-50 text-brand-forest",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="flex items-start gap-4 p-3 rounded-2xl hover:bg-brand-cream/50 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${badge.color}`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-sm text-gray-900 leading-snug">
                  {badge.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

