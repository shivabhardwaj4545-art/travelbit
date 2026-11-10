"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prev = () => {
    setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      {/* Main Image Banner */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-card group bg-gray-100">
        <Image
          src={images[selectedIdx] || images[0]}
          alt={`${title} - View ${selectedIdx + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover transition-all duration-300"
        />

        {/* Expand lightbox button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-xl backdrop-blur-sm transition-colors flex items-center gap-1.5 text-xs font-semibold"
          aria-label="View fullscreen gallery"
        >
          <Maximize2 className="w-4 h-4" />
          <span>View All ({images.length}) Photos</span>
        </button>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                selectedIdx === i
                  ? "border-brand-green ring-2 ring-brand-green/30"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="200px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={next}
            className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-[75vh]">
            <Image
              src={images[selectedIdx]}
              alt={title}
              fill
              className="object-contain"
              sizes="1200px"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-xs font-semibold bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {selectedIdx + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

