"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OurSpaceSection } from "@/components/sections/OurSpaceSection";
import { SignatureExperienceSection } from "@/components/sections/SignatureExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VideoModal } from "@/components/ui/VideoModal";
import { GalleryItem } from "@/data/gallery";
import { Sparkles, MapPin, Clock, ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function SpacePage() {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const handleOpenVideo = (src: string, title: string) => {
    setSelectedMedia({
      id: "space-modal-video",
      title,
      category: "ambience",
      type: "video",
      src,
      description: "Direct interior footage of SPARK Unisex Salon, Visakhapatnam.",
    });
  };

  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-spark-bg border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            OUR SALON SPACE
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            A Glimpse of <em className="italic text-spark-gold">Our Space</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Step inside SPARK. Designed with contemporary organic curves, warm champagne-gold brass, acoustic tranquility, and ergonomic Italian styling stations.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">Our Space</span>
          </div>
        </div>
      </section>

      {/* Section 06: A Glimpse of Our Space (5 Video Cards matching Screenshot 2) */}
      <OurSpaceSection onOpenVideo={handleOpenVideo} />

      {/* Signature Salon Experience Walkthrough */}
      <SignatureExperienceSection onOpenVideo={handleOpenVideo} />

      {/* High-Resolution Interior Lookbook & Gallery */}
      <GallerySection onOpenMedia={setSelectedMedia} />

      {/* Visit Invitation & Directions */}
      <section className="py-24 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
                <span className="w-5 h-[1px] bg-current inline-block"></span>
                VISIT IN PERSON
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal leading-tight text-white">
                Experience the Ambiance <em className="italic text-spark-gold">First-Hand</em>
              </h2>

              <p className="mt-6 text-neutral-300 text-base leading-relaxed">
                Photos and videos capture the architecture, but the true SPARK experience lies in the warm welcome, our bespoke acoustic playlist, the subtle aroma of botanical extracts, and unhurried consultations.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3 text-sm text-neutral-300">
                  <MapPin className="w-5 h-5 text-spark-gold flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} — {siteConfig.contact.address.pincode}
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-sm text-neutral-300">
                  <Clock className="w-5 h-5 text-spark-gold flex-shrink-0" />
                  <span>Tuesday – Sunday: 9:30 AM – 9:00 PM | Monday: 10:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-spark-goldLight via-spark-gold to-spark-goldDark text-neutral-950 font-semibold text-sm hover:scale-105 transition-transform shadow-[0_10px_25px_-5px_rgba(200,169,107,0.4)]"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-medium text-sm hover:border-spark-gold hover:text-spark-gold transition-colors"
                >
                  Driving Directions &amp; Map
                </Link>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="SPARK Unisex Salon Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      <VideoModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
