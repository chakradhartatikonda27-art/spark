import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { GoogleReviewBanner } from "@/components/sections/GoogleReviewBanner";

export const metadata: Metadata = {
  title: "Contact & Salon Location | SPARK Unisex Salon Visakhapatnam",
  description:
    "Get in touch with SPARK Unisex Salon in Visakhapatnam. View live operating hours, address, interactive Google Maps directions, and contact information.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-spark-bg border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(200,169,107,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            GET IN TOUCH
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            Contact &amp; <em className="italic text-spark-gold">Location</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Have a question or looking to plan a visit? Our salon concierge is available every day to assist you.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Live Hours, Map, and Inquiry Form */}
      <ContactSection />

      {/* Verified Google Reviews */}
      <GoogleReviewBanner />

      {/* Frequently Asked Questions */}
      <FaqSection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
