import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Mountain,
  Heart,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { TornDivider } from "./TornDivider";

export function Footer() {
  return (
    <footer className="relative bg-brand-forest text-white overflow-hidden">
      {/* Organic top torn divider */}
      <TornDivider position="top" fillColor="#0B2E22" className="-top-3 text-brand-forest" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info & Safety Guarantee */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center text-white shadow-md">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                    Travel<span className="text-brand-green">Bit</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded">
                    Holidays
                  </span>
                </div>
                <span className="text-[11px] font-medium tracking-wide text-white/60">
                  India's Tour Packages Marketplace
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed pr-4">
              Compare quotes from verified travel agents and book customized Uttarakhand,
              Char Dham Yatra, and global holiday packages with complete price transparency
              and dedicated on-ground yatra coordination.
            </p>

            {/* Money Safe Guarantee Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  Pay via TravelBit
                </p>
                <p className="text-xs text-white/70">
                  100% Money safe guarantee with escrow milestone protection.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Char Dham & Yatra */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Sacred Yatras
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  href="/packages/char-dham-yatra-11n-12d"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Complete Char Dham (12D)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/kedarnath"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Kedarnath Helicopter Yatra</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/badrinath"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Badrinath & Mana Village</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/kainchi-dham-neem-karoli-baba-ashram-tour"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Kainchi Dham Ashram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/chopta-tungnath-chandrashila-mini-switzerland-trek"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Tungnath & Chandrashila</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Uttarakhand Escapes & Treks */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Destinations & Treks
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <Link
                  href="/packages/jim-corbett-wildlife-safari"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Jim Corbett Wildlife Safari</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/scenic-nainital-lake-city-getaway"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Nainital & Bhimtal Lakes</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/auli-joshimath-ski-slopes-and-nanda-devi"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Auli Ski Slopes & Ropeway</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/valley-of-flowers-hemkund-sahib-unesco-trek"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Valley of Flowers & Hemkund</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/rishikesh-mussoorie-hills-and-holy-river"
                  className="hover:text-brand-green transition-colors flex items-center gap-1"
                >
                  <ArrowRight className="w-3 h-3 text-brand-orange" />
                  <span>Rishikesh & Mussoorie</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Information */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <a
                href="tel:18008890379"
                className="flex items-start gap-2 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Toll Free: 1800-8890-379</span>
                  <span className="text-[11px] text-white/60">Phone: 011-43528641</span>
                </div>
              </a>

              <a
                href="https://wa.me/918851770775"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-green transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brand-green shrink-0" />
                <span>WhatsApp: +91 8851770775</span>
              </a>

              <a
                href="mailto:info@travelbitholidays.co.in"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span>info@travelbitholidays.co.in</span>
              </a>

              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  316, 3rd floor, Vishwadeep Tower, District Centre, Janakpuri, New Delhi
                  110058
                </span>
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Mon–Sun: 24/7 Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>
            © {new Date().getFullYear()} TravelBit Holidays Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/packages" className="hover:text-white transition-colors">
              All Packages
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact & Support
            </Link>
            <Link href="/admin/inquiries" className="hover:text-brand-orange transition-colors">
              Agent Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

