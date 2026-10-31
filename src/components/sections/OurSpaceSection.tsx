"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";

interface SpaceCardItem {
  id: string;
  title: string;
  poster: string;
  videoSrc: string;
}

const SPACE_CARDS: SpaceCardItem[] = [
  {
    id: "space-1",
    title: "SPARK Signature 3D Emblem",
    poster: "/images/posters/spark-billboard-reveal-poster.png",
    videoSrc: "/videos/spark-billboard-reveal.mp4",
  },
  {
    id: "space-2",
    title: "Champagne Gold Reception Desk",
    poster: "/images/posters/spark-reception-gold-poster.png",
    videoSrc: "/videos/spark-reception-gold.mp4",
  },
  {
    id: "space-3",
    title: "Sculptural Organic Tree Lounge",
    poster: "/images/posters/spark-lounge-interior-poster.png",
    videoSrc: "/videos/spark-lounge-interior.mp4",
  },
  {
    id: "space-4",
    title: "Tranquil Sanctuary Alcove",
    poster: "/images/posters/spark-entrance-walkthrough-poster.png",
    videoSrc: "/videos/spark-entrance-walkthrough.mp4",
  },
  {
    id: "space-5",
    title: "Illuminated Haircare & Styling Bar",
    poster: "/images/posters/spark-styling-consultation-poster.png",
    videoSrc: "/videos/spark-styling-consultation.mp4",
  },
];

export const OurSpaceSection: React.FC<{
  onOpenVideo?: (src: string, title: string) => void;
}> = ({ onOpenVideo }) => {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  const handleCardClick = (item: SpaceCardItem) => {
    if (onOpenVideo) {
      onOpenVideo(item.videoSrc, item.title);
    } else {
      setActiveVideo({ src: item.videoSrc, title: item.title });
    }
  };

  return (
    <section id="space" className="py-24 sm:py-32 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background Watermark 06 */}
      <span className="absolute top-8 right-12 font-serif text-[7rem] sm:text-[11rem] leading-none text-white/[0.04] select-none pointer-events-none">
        06
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#c9a45c]">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            OUR SALON
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal leading-[1.15]">
            A Glimpse of <em className="italic text-[#c9a45c]">Our Space</em>
          </h2>
        </div>

        {/* 5-Card Video Gallery Grid matching Screenshot 2 */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {SPACE_CARDS.map((card) => (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card)}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#c9a45c] transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#c9a45c]"
              aria-label={`Watch video: ${card.title}`}
            >
              <Image
                src={card.poster}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Play Button Badge at Top-Right */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-[#c9a45c] group-hover:text-neutral-950 transition-colors shadow-lg">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>

              {/* Subtle Bottom Title Scrim */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                <span className="text-[11px] font-medium tracking-wide text-white/90 line-clamp-1">
                  {card.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Multi-Page Space Tour Link */}
        <div className="mt-10 text-center">
          <Link
            href="/space"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#c9a45c] hover:text-white transition-colors"
          >
            <span>Explore Full Salon Architecture &amp; Virtual Tour</span>
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>

      {/* Internal Video Modal Fallback */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-serif text-lg text-white">{activeVideo.title}</h3>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-[#c9a45c]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="aspect-[16/10] bg-black">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
