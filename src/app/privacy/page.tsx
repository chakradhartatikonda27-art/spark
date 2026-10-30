import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Logo } from "@/components/common/Logo";

export const metadata = {
  title: "Privacy Policy | SPARK Unisex Salon",
  description: "Privacy policy and client data handling practices for SPARK Unisex Salon.",
};

export default function PrivacyPolicyPage() {
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
            Legal & Trust
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-400">
            Last Updated: October 2026 • SPARK Unisex Salon
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed pt-4 border-t border-white/5">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">1. Overview</h2>
            <p>
              At {siteConfig.name}, we value your trust and privacy. This Privacy
              Policy outlines how we collect, handle, and protect your personal
              information when using our appointment request systems and website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              2. Information We Collect
            </h2>
            <p>
              We only collect information voluntarily provided by you to schedule
              salon services, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Guest Name</li>
              <li>Mobile Number (for appointment coordination and reminders)</li>
              <li>Preferred salon services, time slots, and stylist notes</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              3. Use of Information
            </h2>
            <p>
              Your personal information is strictly used for appointment
              reservations, client consultations, service reminders, and
              customer service communications. We never sell, rent, or trade your
              contact information to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              4. WhatsApp Communications
            </h2>
            <p>
              When initiating communications via WhatsApp, interactions are
              governed by WhatsApp&apos;s privacy protocols and end-to-end encryption.
              SPARK utilizes WhatsApp solely for direct salon customer support and
              booking confirmations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-white font-medium">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding your data privacy, please contact
              our salon desk at{" "}
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="text-spark-gold underline"
              >
                {siteConfig.contact.phoneDisplay}
              </a>{" "}
              or via email at {siteConfig.contact.email}.
            </p>
          </section>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-neutral-500">
          © {new Date().getFullYear()} {siteConfig.name}. Designed & Developed by{" "}
          {siteConfig.deliveredBy.agency}.
        </div>
      </div>
    </div>
  );
}
