"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Heart,
  Layers,
  Menu,
  X,
  PhoneCall,
  ChevronDown,
  Mountain,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const wishlistCount = useWishlistStore((state) => state.wishlistIds.length);
  const compareCount = useCompareStore((state) => state.items.length);
  const toggleCompareDrawer = useCompareStore((state) => state.toggleDrawer);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Char Dham Yatra",
      href: "/packages?category=Uttarakhand+%26+Char+Dham",
      hasMega: true,
    },
    { name: "All Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "Travel Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white shadow-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <div className="w-10 h-10 rounded-xl bg-brand-forest flex items-center justify-center text-white shadow-md group-hover:bg-brand-green transition-colors">
            <Mountain className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-heading font-extrabold text-xl md:text-2xl tracking-tight text-brand-forest">
                Travel<span className="text-brand-green">Bit</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-orange text-white px-1.5 py-0.5 rounded">
                Holidays
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wide text-gray-500 -mt-1 hidden sm:block">
              Devbhoomi & Char Dham Marketplace
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasMega) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? "text-brand-green bg-brand-green/10"
                        : "text-gray-700 hover:text-brand-green hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {megaMenuOpen && (
                    <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 grid gap-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2">
                        Sacred Pilgrimages
                      </div>
                      <Link
                        href="/packages/char-dham-yatra-11n-12d"
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-brand-green/10 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0">
                          4D
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 group-hover/item:text-brand-green">
                            Complete Char Dham Yatra
                          </p>
                          <p className="text-xs text-gray-500">
                            Yamunotri, Gangotri, Kedarnath & Badrinath (12 Days)
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/packages/chopta-tungnath-chandrashila-mini-switzerland-trek"
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-brand-green/10 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-xs shrink-0">
                          3D
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 group-hover/item:text-brand-green">
                            Chopta, Tungnath & Chandrashila
                          </p>
                          <p className="text-xs text-gray-500">
                            Highest Shiva Shrine & Deoria Tal (4 Days)
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/packages/kainchi-dham-neem-karoli-baba-ashram-tour"
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-brand-green/10 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center font-bold text-xs shrink-0">
                          KD
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 group-hover/item:text-brand-green">
                            Kainchi Dham & Bhowali
                          </p>
                          <p className="text-xs text-gray-500">
                            Neem Karoli Baba Ashram & Lake Tour (3 Days)
                          </p>
                        </div>
                      </Link>
                      <div className="border-t border-gray-100 pt-2 px-2 flex justify-between items-center text-xs">
                        <span className="text-gray-500">Looking for custom dates?</span>
                        <button
                          onClick={onOpenInquiry}
                          className="text-brand-green font-semibold hover:underline"
                        >
                          Enquire Now →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive
                    ? "text-brand-green bg-brand-green/10"
                    : "text-gray-700 hover:text-brand-green hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Compare Drawer Toggle Button */}
          <button
            onClick={toggleCompareDrawer}
            title="Compare packages (Max 3)"
            className="relative p-2 text-gray-600 hover:text-brand-forest rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Compare packages"
          >
            <Layers className="w-5 h-5" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {compareCount}
              </span>
            )}
          </button>

          {/* Wishlist Icon */}
          <Link
            href="/wishlist"
            title="Saved Packages"
            className="relative p-2 text-gray-600 hover:text-brand-green rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Plan Your Yatra CTA Button */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand-green hover:bg-brand-green-hover text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-all hover:shadow-md transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>Plan Your Yatra →</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-green rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Offcanvas */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white h-full max-w-sm w-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Quick Navigation
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-base font-semibold text-gray-800 hover:text-brand-green hover:bg-brand-green/10 rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-gray-400">→</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-green text-white py-3 rounded-xl font-bold shadow-md hover:bg-brand-green-hover transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span>Plan Your Yatra →</span>
                </button>

                <a
                  href="tel:18008890379"
                  className="w-full flex items-center justify-center gap-2 bg-brand-forest text-white py-3 rounded-xl font-bold hover:bg-brand-forest-light transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-brand-orange" />
                  <span>Call Toll-Free 1800-8890-379</span>
                </a>
              </div>
            </div>

            {/* Bottom Contact card in mobile menu */}
            <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <p className="font-semibold text-gray-700">TravelBit Holidays Head Office</p>
              <p>316, 3rd floor, Vishwadeep Tower, Janakpuri, New Delhi 110058</p>
              <p className="text-brand-green font-medium">WhatsApp: +91 8851770775</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

