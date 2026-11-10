import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { blogsData } from "@/data/blogsData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | TravelBit Guides`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-brand-cream/40 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-forest hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </Link>

        {/* Title & Metadata */}
        <div className="space-y-4">
          <span className="bg-brand-forest text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-forest leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-b border-gray-200 pb-4">
            <span className="font-semibold text-gray-800">By {post.author}</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-brand-orange">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-6">
          <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
            {post.excerpt}
          </p>

          <div
            className="space-y-4 text-sm sm:text-base leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/## (.*)/g, '<h2 class="font-heading font-bold text-2xl text-brand-forest mt-6 mb-2">$1</h2>')
                .replace(/### (.*)/g, '<h3 class="font-heading font-bold text-lg text-gray-800 mt-4 mb-2">$1</h3>')
                .replace(/- (.*)/g, '<li class="ml-4 list-disc text-gray-700">$1</li>'),
            }}
          />

          {/* Tags */}
          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-brand-orange" />
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-brand-cream text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-brand-forest text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Ready to Plan Your Spiritual Yatra?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto">
            Compare custom quotes from 3 verified operators and save up to 30% with money-safe guarantee.
          </p>
          <Link
            href="/packages"
            className="inline-block bg-brand-green hover:bg-brand-green-hover text-white px-8 py-3 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
          >
            Explore Packages →
          </Link>
        </div>
      </div>
    </article>
  );
}
