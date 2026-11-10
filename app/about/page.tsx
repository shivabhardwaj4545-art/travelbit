import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mountain, ShieldCheck, HeartHandshake, Award, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TravelBit Holidays",
  description:
    "Learn about TravelBit Holidays, India's dedicated tour packages marketplace for Uttarakhand and Char Dham Yatras.",
};

export default function AboutPage() {
  const stats = [
    { value: "12+", label: "Years Experience" },
    { value: "38+", label: "Uttarakhand Tours" },
    { value: "1089+", label: "Happy Clients" },
    { value: "4.9/5", label: "Pilgrim Rating" },
  ];

  return (
    <div className="bg-brand-cream/40 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider">
            <Mountain className="w-4 h-4 text-brand-orange" />
            <span>Devbhoomi Yatra Marketplace</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-forest">
            Making Himalayan Pilgrimages Sacred, Safe & Transparent
          </h1>
          <p className="font-accent italic text-xl text-brand-orange">
            "Connecting Devotees to Divine Abodes"
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            TravelBit Holidays was founded with a singular mission: to eliminate the uncertainty, opaque pricing, and fragmented coordination that often surrounds high-altitude pilgrimages in Devbhoomi Uttarakhand.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-card grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-forest">
                {s.value}
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">
              Devotee First Approach
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We understand the sacred significance of every darshan. We arrange ground-floor rooms for elderly parents, assist with biometric registrations, and coordinate emergency medical oxygen on high passes.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">
              Money Safe Guarantee
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Your payments are held in escrow milestone protection and only disbursed to local operators upon verified service confirmations. Zero hidden fuel surcharges or surprise tolls.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-forest/10 text-brand-forest flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900">
              Competitive Marketplace
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Why settle for a single quote? TravelBit connects you with 3 verified local operators competing to give you the best itinerary, saving you up to 30% without sacrificing comfort.
            </p>
          </div>
        </div>

        {/* Corporate Address & Support Information */}
        <div className="bg-brand-forest text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider block">
              Headquarters
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              TravelBit Holidays Pvt. Ltd.
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              316, 3rd floor, Vishwadeep Tower, District Centre, Janakpuri, New Delhi
              110058
            </p>
            <p className="text-xs text-white/60">
              Toll Free: 1800-8890-379 | Phone: 011-43528641 | WhatsApp: +91 8851770775
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold rounded-full transition-colors text-center shadow-md"
            >
              Contact Our Team
            </Link>
            <Link
              href="/packages"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full transition-colors text-center"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

