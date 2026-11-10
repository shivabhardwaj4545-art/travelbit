import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { destinationsData } from "@/data/destinationsData";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Uttarakhand Destinations | TravelBit Holidays",
  description:
    "Explore the sacred shrines, scenic hill stations, and wildlife national parks of Uttarakhand.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-brand-cream/40 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
            Devbhoomi Exploration Guide
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-forest">
            Destinations of Uttarakhand
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Discover sacred Jyotirlingas, alpine bugyal meadows, colonial lake promenades, and tiger reserves across Garhwal and Kumaon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dest.coverImage}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-brand-forest/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {dest.altitude}
                </div>
                <div className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  {dest.division}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-brand-green font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.district} District</span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-brand-green transition-colors">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {dest.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {dest.popularFor.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="bg-brand-cream text-gray-700 text-[10px] font-medium px-2 py-0.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">
                      Starts From
                    </span>
                    <span className="font-heading font-extrabold text-lg text-brand-forest">
                      {formatPrice(dest.startingPrice)}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-green group-hover:underline">
                    <span>{dest.packagesCount} Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

