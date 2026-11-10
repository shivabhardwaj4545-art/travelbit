import React from "react";
import { Sliders, GitCompare, PhoneForwarded, ShieldCheck, Star } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: Sliders,
      title: "100% Customized Itineraries",
      desc: "Tailored to your pace, senior citizen preferences, family requirements, and budget.",
    },
    {
      icon: GitCompare,
      title: "Multiple Verified Quotes",
      desc: "Compare offers from 3 leading local operators and select the package that fits you best.",
    },
    {
      icon: PhoneForwarded,
      title: "24/7 On-Ground Support",
      desc: "Dedicated mountain trip coordinators ensure smooth weather alerts and emergency support.",
    },
    {
      icon: ShieldCheck,
      title: "Escrow Payment Safety",
      desc: "Funds are protected and released based on verified tour milestones and confirmations.",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
            Why Book Through TravelBit
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-forest">
            Smart, Transparent & Reliable Travel Planning
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-brand-cream/60 rounded-2xl p-6 border border-gray-100 hover:border-brand-green/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm text-brand-forest flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="font-heading font-bold text-base text-gray-900 mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust-Score Bar */}
        <div className="mt-10 bg-brand-forest text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-heading font-extrabold text-2xl shrink-0 shadow-md">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-orange mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange" />
                ))}
                <span className="text-xs text-white/80 font-bold ml-1">
                  Overall TrustScore
                </span>
              </div>
              <p className="text-xs text-white/70">
                Calculated from 1,089+ verified pilgrim and traveler feedback submissions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/90">
            <div className="text-center">
              <span className="block font-heading font-bold text-lg text-white">99.4%</span>
              <span className="text-white/60">Darshan Assistance</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <span className="block font-heading font-bold text-lg text-white">100%</span>
              <span className="text-white/60">Verified Vehicles</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <span className="block font-heading font-bold text-lg text-white">24/7</span>
              <span className="text-white/60">Live Helplines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

