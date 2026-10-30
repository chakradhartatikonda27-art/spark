"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SignatureExperienceSection } from "@/components/sections/SignatureExperienceSection";
import { WhyChooseSparkSection } from "@/components/sections/WhyChooseSparkSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { OffersSection } from "@/components/sections/OffersSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { GalleryItem } from "@/data/gallery";

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>("");
  const [prefilledCategory, setPrefilledCategory] = useState<string>("hair");

  const handleSelectService = (serviceName: string, category: string) => {
    setPrefilledCategory(category);
    setPrefilledService(serviceName);
  };

  const handleSelectPackage = (packageName: string) => {
    setPrefilledService(packageName);
    setPrefilledCategory("hair");
  };

  const handleOpenVideo = (src: string, title: string) => {
    setSelectedMedia({
      id: "modal-video",
      title,
      category: "ambience",
      type: "video",
      src,
      description: "Direct interior footage of SPARK Unisex Salon.",
    });
  };

  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      {/* 01: Premium Sticky Navbar */}
      <Navbar />

      {/* 02: Cinematic Video Hero */}
      <HeroSection />

      {/* 03: Brand Introduction (Editorial About) */}
      <AboutSection />

      {/* 04: Signature Services Discovery */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 05: Signature Salon Experience (Real Salon Video Tour) */}
      <SignatureExperienceSection onOpenVideo={handleOpenVideo} />

      {/* 06: Why Choose SPARK (Trust & Standards) */}
      <WhyChooseSparkSection />

      {/* 07: Authentic Salon Gallery */}
      <GallerySection onOpenMedia={setSelectedMedia} />

      {/* 08: Packages & Special Offers */}
      <OffersSection onSelectPackage={handleSelectPackage} />

      {/* 09: Appointment Booking Interface */}
      <BookingSection
        initialService={prefilledService}
        initialCategory={prefilledCategory}
      />

      {/* 11: Location & Salon Contact */}
      <ContactSection />

      {/* 12: Premium Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Lightbox / Video Player Modal */}
      <VideoModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </main>
  );
}
