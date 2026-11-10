import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { packagesData } from "@/data/packagesData";
import { generateTripJsonLd } from "@/lib/seo";
import { DetailPageClient } from "./DetailPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packagesData.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return { title: "Package Not Found" };

  return {
    title: `${pkg.title} | TravelBit Holidays`,
    description: pkg.tagline,
    openGraph: {
      title: pkg.title,
      description: pkg.tagline,
      images: [{ url: pkg.coverImage }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const jsonLd = generateTripJsonLd({
    name: pkg.title,
    description: pkg.tagline,
    image: pkg.coverImage,
    providerName: "TravelBit Holidays",
    price: pkg.price,
    durationDays: pkg.durationDays,
  });

  const relatedPackages = packagesData
    .filter((p) => p.id !== pkg.id && (p.category === pkg.category || p.region === pkg.region))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DetailPageClient pkg={pkg} relatedPackages={relatedPackages} />
    </>
  );
}
