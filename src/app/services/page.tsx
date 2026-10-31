"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StyleConciergeSection } from "@/components/sections/StyleConciergeSection";
import { ComboEstimatorSection } from "@/components/sections/ComboEstimatorSection";
import { TransformationSlider } from "@/components/sections/TransformationSlider";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const router = useRouter();

  const handleSelectService = (serviceName: string, category: string = "hair") => {
    router.push(`/book?service=${encodeURIComponent(serviceName)}&category=${encodeURIComponent(category)}`);
  };

  const handleBookBundle = (bundleNotes: string) => {
    router.push(`/book?service=Custom%20Curated%20Bundle&category=hair&notes=${encodeURIComponent(bundleNotes)}`);
  };

  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-spark-bg border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(200,169,107,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            SERVICES &amp; PRICING MENU
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            Couture Hair, Skin &amp; <em className="italic text-spark-gold">Grooming</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Every service is executed with certified master artistry, clinical hygiene, and genuine L&apos;Oréal Professionnel Paris formulations.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">Services Menu</span>
          </div>
        </div>
      </section>

      {/* Full Categorized Services Directory */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Interactive Style & Haircare Concierge Quiz */}
      <StyleConciergeSection onSelectRecommendation={handleSelectService} />

      {/* Draggable Before & After Transformations */}
      <TransformationSlider onSelectService={handleSelectService} />

      {/* Multi-Service Combo Price Estimator & Custom Bundle Builder */}
      <ComboEstimatorSection onBookBundle={handleBookBundle} />

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Need a Personalized Consultation?
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Not sure which treatment suits your hair texture or skin type? Speak directly with our master stylists before your appointment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-spark-goldLight via-spark-gold to-spark-goldDark text-neutral-950 font-semibold text-sm hover:scale-105 transition-transform shadow-[0_10px_25px_-5px_rgba(200,169,107,0.4)]"
            >
              <span>Book Appointment Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919390560625?text=Hello%20SPARK%20Salon,%20I%20would%20like%20a%20consultation%20regarding%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-medium text-sm hover:border-spark-gold hover:text-spark-gold transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
