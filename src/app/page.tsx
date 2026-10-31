"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { OurSpaceSection } from "@/components/sections/OurSpaceSection";
import { StyleConciergeSection } from "@/components/sections/StyleConciergeSection";
import { TransformationSlider } from "@/components/sections/TransformationSlider";
import { SignatureExperienceSection } from "@/components/sections/SignatureExperienceSection";
import { ComboEstimatorSection } from "@/components/sections/ComboEstimatorSection";
import { WhyChooseSparkSection } from "@/components/sections/WhyChooseSparkSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { OffersSection } from "@/components/sections/OffersSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { GoogleReviewBanner } from "@/components/sections/GoogleReviewBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { VideoModal } from "@/components/ui/VideoModal";
import { GalleryItem } from "@/data/gallery";

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>("");
  const [prefilledCategory, setPrefilledCategory] = useState<string>("hair");
  const [prefilledNotes, setPrefilledNotes] = useState<string>("");

  const handleSelectService = (serviceName: string, category: string = "hair") => {
    setPrefilledCategory(category);
    setPrefilledService(serviceName);
  };

  const handleSelectPackage = (packageName: string) => {
    setPrefilledService(packageName);
    setPrefilledCategory("hair");
    setPrefilledNotes(`Selected promotional package: ${packageName}`);
  };

  const handleBookBundle = (bundleNotes: string) => {
    setPrefilledNotes(bundleNotes);
    setPrefilledCategory("hair");
    setPrefilledService("Custom Curated Bundle");
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
      {/* 01: Premium Sticky Navbar with Live Status Indicator */}
      <Navbar />

      {/* 02: Cinematic Video Hero */}
      <HeroSection />

      {/* 03: Brand Introduction (Editorial About) */}
      <AboutSection />

      {/* 04: Signature Services Discovery */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 03: The Vision Behind SPARK (Founder Story) */}
      <FounderSection />

      {/* NEW: Interactive Style & Haircare Concierge Quiz */}
      <StyleConciergeSection onSelectRecommendation={handleSelectService} />

      {/* NEW: Draggable Before & After Transformation Slider */}
      <TransformationSlider onSelectService={handleSelectService} />

      {/* 06: A Glimpse of Our Space */}
      <OurSpaceSection onOpenVideo={handleOpenVideo} />

      {/* 05: Signature Salon Experience (Real Salon Video Tour) */}
      <SignatureExperienceSection onOpenVideo={handleOpenVideo} />

      {/* NEW: Multi-Service Combo Price Estimator & Custom Bundle Builder */}
      <ComboEstimatorSection onBookBundle={handleBookBundle} />

      {/* 06: Why Choose SPARK (Trust & Standards) */}
      <WhyChooseSparkSection />

      {/* 07: Authentic Salon Gallery */}
      <GallerySection onOpenMedia={setSelectedMedia} />

      {/* 08: Packages & Special Offers */}
      <OffersSection onSelectPackage={handleSelectPackage} />

      {/* NEW: Luxury FAQ & Care Etiquette Accordion */}
      <FaqSection />

      {/* 09: Appointment Booking Interface */}
      <BookingSection
        initialService={prefilledService}
        initialCategory={prefilledCategory}
        initialNotes={prefilledNotes}
      />

      {/* NEW: Verified Google Review & Community Banner */}
      <GoogleReviewBanner />

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
