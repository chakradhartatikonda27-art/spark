import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BookingSectionWrapper } from "./BookingSectionWrapper";
import { Phone, Clock, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "Book Appointment Online | SPARK Unisex Salon Visakhapatnam",
  description:
    "Reserve your hair, skin, nails, or grooming appointment online at SPARK Unisex Salon. Choose your preferred service, master stylist, and time slot with instant confirmation.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-24 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-spark-bg border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(200,169,107,0.15),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            APPOINTMENT CONCIERGE
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            Reserve Your <em className="italic text-spark-gold">Visit</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Select your preferred treatment, master stylist, and time. We will confirm your slot instantly with our salon concierge.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">Book Appointment</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Booking Form wrapped in Suspense for searchParams */}
      <div className="py-12 sm:py-20">
        <Suspense
          fallback={
            <div className="min-h-[400px] flex items-center justify-center text-spark-gold">
              <span className="font-sans text-sm tracking-widest uppercase animate-pulse">
                Loading Appointment Concierge...
              </span>
            </div>
          }
        >
          <BookingSectionWrapper />
        </Suspense>
      </div>

      {/* Booking Policies & Concierge Support */}
      <section className="py-16 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-white/10 bg-neutral-900/40">
              <div className="w-10 h-10 rounded-full bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-spark-gold" />
              </div>
              <h3 className="font-serif text-lg text-white">Flexible Rescheduling</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Plans change. You can reschedule or cancel with zero penalty up to 2 hours before your scheduled appointment time.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-neutral-900/40">
              <div className="w-10 h-10 rounded-full bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-spark-gold" />
              </div>
              <h3 className="font-serif text-lg text-white">Complimentary Diagnostic</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Every chemical, color, or hair spa service starts with a free 10-minute hair elasticity and scalp diagnostic before commencement.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-neutral-900/40">
              <div className="w-10 h-10 rounded-full bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-spark-gold" />
              </div>
              <h3 className="font-serif text-lg text-white">Direct Concierge Assistance</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Prefer booking over a phone call or WhatsApp message? Call our front desk directly at{" "}
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="text-spark-gold underline">
                  {siteConfig.contact.phoneDisplay}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
