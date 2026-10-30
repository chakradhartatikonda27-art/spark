import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Logo } from "@/components/common/Logo";

export const metadata = {
  title: "Terms & Conditions | SPARK Unisex Salon",
  description: "Terms of service and salon booking policies for SPARK Unisex Salon.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <Logo size="md" variant="light" />
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-spark-gold hover:text-spark-goldLight transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Salon Home</span>
          </Link>
        </div>

        <div className="space-y-4">
          <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold">
            Salon Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Terms & Conditions
          </h1>
          <p className="text-xs text-neutral-400">
            SPARK Unisex Salon • Client Booking & Salon Etiquette
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed pt-4 border-t border-white/5">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              1. Appointment Requests & Confirmation
            </h2>
            <p>
              Submitting an online booking form registers an appointment request.
              An appointment is officially scheduled once our salon front desk
              confirms slot availability with you via WhatsApp or phone call.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              2. Arrival & Rescheduling
            </h2>
            <p>
              To ensure every client receives undivided attention, we kindly
              request arriving 5-10 minutes prior to your reserved slot. Should
              you need to reschedule or cancel, please notify us at least 2 hours
              in advance so we may accommodate other waiting guests.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              3. Service Consultations & Hair Integrity
            </h2>
            <p>
              All chemical services (balayage, lightening, smoothing, keratin) are
              preceded by a strand and scalp consultation. Our stylists may advise
              alternative treatments if hair health is compromised.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              4. Pricing & Payment
            </h2>
            <p>
              All prices shown on the website represent starting rates and may
              vary depending on hair length, density, and customized styling
              requirements. Final service estimates are confirmed before service
              initiation. We accept UPI, major cards, and cash payments.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteConfig.name}. Delivered by{" "}
          {siteConfig.deliveredBy.agency}.
        </div>
      </div>
    </div>
  );
}
