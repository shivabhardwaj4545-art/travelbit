"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, PhoneCall, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 select-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-brand-forest shadow-xl border border-gray-200 flex items-center justify-center hover:bg-brand-forest hover:text-white transition-all transform hover:-translate-y-1 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href="tel:18008890379"
        title="Call Toll Free: 1800-8890-379"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-forest text-white shadow-xl flex items-center justify-center hover:bg-brand-forest-light transition-all transform hover:-translate-y-1 active:scale-95 border-2 border-white/20"
        aria-label="Call Toll Free 1800-8890-379"
      >
        <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange" />
      </a>

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918851770775?text=Hello%20TravelBit%2C%20I%20want%20to%20plan%20a%20tour"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp (+91 8851770775)"
        className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all transform hover:-translate-y-1 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}

