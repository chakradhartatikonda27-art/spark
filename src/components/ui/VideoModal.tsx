"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Film, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface VideoModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const isVideo = item.type === "video";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      {/* Dark Frosted Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-4xl bg-neutral-950 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="p-4 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-spark-gold" />
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-white font-medium">
              {item.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
          {isVideo ? (
            <video
              controls
              autoPlay
              playsInline
              className="max-h-[65vh] w-auto max-w-full"
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative w-full h-[65vh]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
          )}
        </div>

        {/* Caption & Context Footer */}
        <div className="p-4 sm:p-5 bg-neutral-900/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-300 font-sans leading-relaxed max-w-2xl">
            {item.description}
          </p>

          <a
            href="#booking"
            onClick={onClose}
            className="px-4 py-2 bg-spark-gold text-neutral-950 text-xs font-semibold uppercase tracking-wider whitespace-nowrap hover:bg-spark-goldLight transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </div>
  );
};
