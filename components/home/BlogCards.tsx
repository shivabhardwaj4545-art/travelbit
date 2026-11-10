import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { blogsData } from "@/data/blogsData";

export function BlogCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4 text-brand-orange" />
              <span>Devbhoomi Travel Guides</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-brand-forest">
              Latest Articles, Yatra Tips & Insights
            </h2>
          </div>

          <Link
            href="/blog"
            className="text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-green flex items-center gap-1 group transition-colors"
          >
            <span>Read All Guides</span>
            <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <article
              key={post.id}
              className="group bg-brand-cream/40 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-brand-forest text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
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

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-brand-green group-hover:underline flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

