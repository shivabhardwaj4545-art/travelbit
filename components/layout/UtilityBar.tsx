import React from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="bg-brand-forest text-white/90 text-xs border-b border-brand-forest-light py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Toll-free & Direct Contacts */}
        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-start">
          <a
            href="tel:18008890379"
            className="flex items-center gap-1.5 hover:text-brand-orange transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-brand-orange" />
            <span>Toll Free: 1800-8890-379</span>
          </a>
          <a
            href="tel:+918750764165"
            className="hidden sm:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <span>Mob: +91 8750764165</span>
          </a>
          <a
            href="https://wa.me/918851770775?text=Hello%20TravelBit%2C%20I%20want%20to%20plan%20a%20tour"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-green hover:underline font-semibold"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp: +91 8851770775</span>
          </a>
          <a
            href="mailto:info@travelbitholidays.co.in"
            className="hidden lg:flex items-center gap-1.5 hover:text-brand-orange transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-orange" />
            <span>info@travelbitholidays.co.in</span>
          </a>
        </div>

        {/* Right: Working Hours & Janakpuri Address Highlight */}
        <div className="flex items-center gap-4 text-[11px] text-white/80">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-brand-orange" />
            <span>Mon–Sun: 24/7 Support</span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3 h-3 text-brand-orange" />
            <span>Janakpuri, New Delhi 110058</span>
          </div>
        </div>
      </div>
    </div>
  );
}

