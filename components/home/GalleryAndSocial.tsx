import React from "react";
import Image from "next/image";
import { Instagram, Camera } from "lucide-react";

export function GalleryAndSocial() {
  const photos = [
    {
      src: "/images/har-ki-pauri-ganga-aarti.webp",
      caption: "Evening Ganga Aarti at Har Ki Pauri",
    },
    {
      src: "/images/chopta-tungnath-summit.webp",
      caption: "Chopta Tungnath and Chandrashila summit",
    },
    {
      src: "/images/corbett-tiger-safari.webp",
      caption: "Royal Bengal Tiger safari in Jim Corbett",
    },
    {
      src: "/images/auli-meadows-lake.webp",
      caption: "Auli alpine lake overlooking snowy peaks",
    },
    {
      src: "/images/nainital-lake-view.webp",
      caption: "Aerial panoramic vista of Naini Lake",
    },
    {
      src: "/images/kainchi-dham-ashram.webp",
      caption: "Neem Karoli Baba Ashram at Kainchi Dham",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
            <Camera className="w-4 h-4" />
            <span>Devbhoomi Snapshots</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-forest">
            Memories Captured by Our Yatris
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Tag <span className="font-bold text-brand-forest">#TravelBitHolidays</span> to be featured on our official channel.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 200px"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                <span className="text-[10px] text-white font-semibold">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

