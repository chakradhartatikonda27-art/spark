"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Eye, Film } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { galleryItems, GalleryItem } from "@/data/gallery";

interface GallerySectionProps {
  onOpenMedia?: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenMedia }) => {
  const [filter, setFilter] = useState<"all" | "ambience" | "reception" | "haircare" | "entrance">("all");

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-spark-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Portfolio"
          title="Authentic Salon Showcase"
          subtitle="Experience the genuine atmosphere, craftsmanship, and aesthetic spaces of SPARK Unisex Salon captured directly from our premises."
        />

        {/* Filter Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1 bg-neutral-900/90 border border-white/10 rounded-sm backdrop-blur-md overflow-x-auto max-w-full">
            {[
              { id: "all", label: "All Media" },
              { id: "entrance", label: "Entrance & Facade" },
              { id: "reception", label: "Reception Suite" },
              { id: "ambience", label: "Salon Ambience" },
              { id: "haircare", label: "Haircare & Products" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 sm:px-5 py-2 text-xs font-sans tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap ${
                  filter === tab.id
                    ? "bg-spark-gold text-neutral-950 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.type === "video";
            const thumbnailSrc = isVideo ? (item.poster || item.src) : item.src;

            return (
              <div
                key={item.id}
                onClick={() => onOpenMedia && onOpenMedia(item)}
                className="group relative cursor-pointer overflow-hidden border border-white/10 bg-neutral-900 aspect-[9/13] flex flex-col justify-end transition-all duration-500 hover:border-spark-gold/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
              >
                {/* Media Image / Video Poster */}
                <Image
                  src={thumbnailSrc}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-95"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Top Badge (Video Indicator) */}
                <div className="absolute top-3 left-3 z-10 flex items-center space-x-2">
                  {isVideo ? (
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold font-sans bg-black/80 text-spark-gold border border-spark-gold/40 backdrop-blur-md">
                      <Film className="w-3 h-3 text-spark-gold" />
                      <span>Salon Video</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 text-[9px] uppercase tracking-wider font-semibold font-sans bg-black/80 text-neutral-200 border border-white/20 backdrop-blur-md">
                      <Eye className="w-3 h-3 text-spark-gold" />
                      <span>Original Photo</span>
                    </span>
                  )}
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-spark-gold text-neutral-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    {isVideo ? <Play className="w-5 h-5 fill-current ml-0.5" /> : <Eye className="w-5 h-5" />}
                  </div>
                </div>

                {/* Bottom Content Bar */}
                <div className="relative z-10 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] uppercase tracking-[0.22em] text-spark-gold font-sans font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-white font-medium leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
