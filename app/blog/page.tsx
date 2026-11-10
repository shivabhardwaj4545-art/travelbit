import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { blogsData } from "@/data/blogsData";

export const metadata: Metadata = {
  title: "Travel Guides & Yatra Tips | TravelBit Holidays",
  description:
    "Expert travel advice, Char Dham biometric registration guides, trekking essentials, and spiritual guides for Uttarakhand.",
};

export default function BlogListingPage() {
  return (
    <div className="bg-brand-cream/40 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-brand-green text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4 text-brand-orange" />
            <span>Official TravelBit Publication</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-forest">
            Travel Guides & Yatra Insights
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Practical preparation checklists, temple opening dates, high-altitude advice, and local folklore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-brand-forest text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-orange" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading font-bold text-lg text-gray-900 group-hover:text-brand-green transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-brand-green group-hover:underline flex items-center gap-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

