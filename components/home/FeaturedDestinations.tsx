import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { destinationsData } from "@/data/destinationsData";
import { formatPrice } from "@/lib/utils";

export function FeaturedDestinations() {
  const featured = destinationsData.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
              Top Pilgrimages & Hill Retreats
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
              Featured Uttarakhand Destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-green flex items-center gap-1 group transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between p-6 transform hover:-translate-y-1"
            >
              <Image
                src={dest.coverImage}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Top altitude & division badge */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-brand-forest/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {dest.altitude}
                </span>
                <span className="bg-brand-orange text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                  {dest.division}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="relative z-10 text-white space-y-1">
                <div className="flex items-center gap-1 text-xs text-white/80">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{dest.district} District</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-amber-200 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-white/70 line-clamp-1">
                  {dest.tagline}
                </p>

                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-white/60 block">From</span>
                    <span className="font-heading font-bold text-white text-sm">
                      {formatPrice(dest.startingPrice)}
                    </span>
                  </div>
                  <span className="bg-white/20 group-hover:bg-brand-green px-3 py-1 rounded-full font-bold transition-colors">
                    {dest.packagesCount} Packages →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

