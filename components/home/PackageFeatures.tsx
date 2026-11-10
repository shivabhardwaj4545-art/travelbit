import React from "react";
import { Car, Hotel, Award, Compass, ShieldCheck, Headphones } from "lucide-react";

export function PackageFeatures() {
  const features = [
    {
      icon: Car,
      title: "Sanitized Commercial Cabs",
      desc: "Licensed hill-certified drivers with clean commercial vehicles, toll permits, and all safety kits.",
    },
    {
      icon: Hotel,
      title: "Verified High-Altitude Hotels",
      desc: "Hand-inspected deluxe hotels and Swiss camps with geysers, warm bedding, and pure vegetarian food.",
    },
    {
      icon: Award,
      title: "VIP Darshan Assistance",
      desc: "Guidance on puja timings, biometric registrations, and priority temple queue coordination.",
    },
    {
      icon: Compass,
      title: "Certified Mountain Guides",
      desc: "Trek leaders certified in high-altitude medicine, pulse oximetry, and wilderness rescue.",
    },
    {
      icon: ShieldCheck,
      title: "Escrow Payment Safety",
      desc: "Transparent quotes with zero hidden charges. Funds released only upon traveler confirmation.",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Helpline",
      desc: "Personal trip coordinator available on call & WhatsApp from arrival until departure.",
    },
  ];

  return (
    <section className="py-16 bg-brand-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
            TravelBit Quality Standards
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
            Every Package Includes These Assurances
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            We partner exclusively with verified operators adhering to rigorous mountain safety protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
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
      </div>
    </section>
  );
}

