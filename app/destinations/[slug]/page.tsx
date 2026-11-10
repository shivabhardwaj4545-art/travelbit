import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Mountain, ArrowRight } from "lucide-react";
import { destinationsData } from "@/data/destinationsData";
import { packagesData } from "@/data/packagesData";
import { PackageCard } from "@/components/packages/PackageCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinationsData.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} Tour Packages & Guide | TravelBit Holidays`,
    description: dest.description,
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinationsData.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  // Find packages corresponding to this destination
  const matchedPackages = packagesData.filter(
    (p) =>
      p.destination.toLowerCase().includes(dest.name.toLowerCase().split(" ")[0]) ||
      p.title.toLowerCase().includes(dest.slug.toLowerCase()) ||
      p.region.toLowerCase().includes(dest.division.toLowerCase())
  );

  return (
    <div className="bg-brand-cream/40 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-brand-green">
            Home
          </Link>
          <span>/</span>
          <Link href="/destinations" className="hover:text-brand-green">
            Destinations
          </Link>
          <span>/</span>
          <span className="text-brand-forest font-bold">{dest.name}</span>
        </div>

        {/* Hero Banner */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-8 sm:p-12 text-white">
          <Image
            src={dest.coverImage}
            alt={dest.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                {dest.division} Division
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                Altitude: {dest.altitude}
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              {dest.name}
            </h1>

            <p className="font-accent italic text-lg sm:text-xl text-amber-200">
              "{dest.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
              {dest.description}
            </p>
          </div>
        </div>

        {/* Key Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <Calendar className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm text-gray-900">
                Best Time to Visit
              </h4>
              <p className="text-xs text-gray-600 mt-1">{dest.bestTimeToVisit}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <Mountain className="w-6 h-6 text-brand-green shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm text-gray-900">
                District & Altitude
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                {dest.district} District ({dest.altitude})
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
            <MapPin className="w-6 h-6 text-brand-forest shrink-0 mt-1" />
            <div>
              <h4 className="font-heading font-bold text-sm text-gray-900">
                Popular Attractions
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                {dest.popularFor.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Available Packages in this destination */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-1">
                Curated Itineraries
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-forest">
                Tour Packages Covering {dest.name}
              </h2>
            </div>
            <Link
              href="/packages"
              className="text-xs font-bold text-brand-forest hover:text-brand-green flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(matchedPackages.length > 0 ? matchedPackages : packagesData.slice(0, 3)).map(
              (pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
