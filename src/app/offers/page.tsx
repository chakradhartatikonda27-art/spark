"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OffersSection } from "@/components/sections/OffersSection";
import { Sparkles, Crown, Gift, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const MEMBERSHIP_TIERS = [
  {
    name: "Silver Privileges",
    price: "Complimentary Upon 3rd Visit",
    perks: [
      "5% savings across all services",
      "Complimentary Scalp Diagnostic Scan",
      "Priority weekend slot reservations",
      "Birthday month styling voucher",
    ],
  },
  {
    name: "Gold Circle",
    price: "₹15,000 Annual Spend",
    highlight: true,
    perks: [
      "12% savings on all chemical & skin treatments",
      "Complimentary L'Oréal Metal Detox upgrade with every color",
      "Dedicated senior stylist allocation",
      "Complimentary guest beverage & express styling for an accompanying friend",
    ],
  },
  {
    name: "Platinum Elite",
    price: "₹30,000 Annual Spend",
    perks: [
      "20% savings on all services & retail haircare",
      "Guaranteed same-day booking access",
      "Complimentary private VIP bridal & styling suite access",
      "Quarterly complimentary deep nourishing hair spa ritual",
    ],
  },
];

export default function OffersPage() {
  const router = useRouter();

  const handleSelectPackage = (packageName: string) => {
    router.push(`/book?service=${encodeURIComponent(packageName)}&category=hair&notes=${encodeURIComponent(`Selected promotional package: ${packageName}`)}`);
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
            SPECIAL OFFERS &amp; PRIVILEGES
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            Exclusive Packages &amp; <em className="italic text-spark-gold">Privileges</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Curated ritual combinations offering unmatched value without compromising on precision, time, or luxury formulations.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">Offers &amp; Packages</span>
          </div>
        </div>
      </section>

      {/* First-Time Guest Privilege Card */}
      <section className="py-12 bg-neutral-950 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-spark-gold/40 shadow-[0_15px_40px_-15px_rgba(200,169,107,0.25)] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-block text-[10.5px] uppercase tracking-[0.26em] text-spark-gold font-semibold px-3 py-1 bg-spark-gold/10 border border-spark-gold/30 rounded-full">
                First-Time Guest Welcome
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-white">
                Enjoy <span className="text-spark-gold">20% Off</span> Your First Signature Experience
              </h2>
              <p className="text-neutral-400 text-sm max-w-xl">
                Experience Visakhapatnam&apos;s premier salon with an introductory saving across all hair cuts, French balayage, and hydra facials. Use promo code <strong className="text-white font-mono">SPARKFIRST</strong> when booking.
              </p>
            </div>

            <Link
              href="/book?notes=Promo%20Code:%20SPARKFIRST%20(20%%20First-Time%20Guest)"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-spark-goldLight via-spark-gold to-spark-goldDark text-neutral-950 font-semibold text-sm hover:scale-105 transition-transform flex-shrink-0 shadow-lg"
            >
              <span>Claim Welcome Privilege</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Curated Packages Directory */}
      <OffersSection onSelectPackage={handleSelectPackage} />

      {/* VIP Membership Privileges */}
      <section className="py-24 bg-spark-bg text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
              <span className="w-5 h-[1px] bg-current inline-block"></span>
              VIP MEMBERSHIP
              <span className="w-5 h-[1px] bg-current inline-block"></span>
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal text-white">
              The SPARK <em className="italic text-spark-gold">Circle of Privileges</em>
            </h2>

            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Designed for clients who prioritize regular maintenance, hair health, and elevated hospitality.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight
                    ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-spark-gold shadow-[0_20px_50px_-20px_rgba(200,169,107,0.35)] scale-105"
                    : "bg-neutral-900/60 border border-white/10 hover:border-white/25"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-spark-gold text-neutral-950 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl font-normal text-white">
                      {tier.name}
                    </h3>
                    <Crown className="w-6 h-6 text-spark-gold" />
                  </div>

                  <p className="text-xs font-mono text-spark-gold mt-2">
                    {tier.price}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-3 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-spark-gold flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <a
                    href={`https://wa.me/919390560625?text=Hello%20SPARK%20Salon,%20I%20am%20interested%20in%20joining%20the%20${encodeURIComponent(tier.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-full text-xs font-semibold uppercase tracking-wider text-center block transition-all ${
                      tier.highlight
                        ? "bg-gradient-to-r from-spark-goldLight via-spark-gold to-spark-goldDark text-neutral-950 hover:opacity-95"
                        : "border border-white/20 text-white hover:border-spark-gold hover:text-spark-gold"
                    }`}
                  >
                    Inquire Membership
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
