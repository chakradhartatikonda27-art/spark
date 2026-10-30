"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, Tag } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { packagesData, PackageOffer } from "@/data/packages";
import { Button } from "@/components/common/Button";

interface OffersSectionProps {
  onSelectPackage?: (packageName: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectPackage }) => {
  const handleBookPackage = (pkg: PackageOffer) => {
    if (onSelectPackage) {
      onSelectPackage(pkg.title);
    }
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="offers" className="py-24 sm:py-32 bg-spark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Experiences"
          title="Something Special for Your Next Visit"
          subtitle="Indulge in our signature salon packages and seasonal promotions designed to give you comprehensive head-to-toe care."
        />

        {/* Packages Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="relative p-8 sm:p-10 bg-neutral-900/50 border border-white/10 hover:border-spark-gold/50 transition-all duration-500 flex flex-col justify-between group hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Highlight Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold bg-spark-gold/15 text-spark-gold border border-spark-gold/30">
                  <Tag className="w-3 h-3" />
                  <span>{pkg.tag}</span>
                </span>

                <span className="text-[11px] font-sans tracking-wider uppercase text-emerald-400 font-medium">
                  {pkg.savings}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal group-hover:text-spark-goldLight transition-colors">
                  {pkg.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-sans">
                  {pkg.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline space-x-3">
                  <span className="font-serif text-3xl sm:text-4xl text-spark-gold font-medium">
                    {pkg.offerPrice}
                  </span>
                  <span className="text-sm sm:text-base text-neutral-500 line-through font-sans">
                    {pkg.originalPrice}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-sans">
                    • {pkg.validity}
                  </span>
                </div>

                {/* Feature Inclusions */}
                <ul className="mt-8 space-y-3 pt-6 border-t border-white/10">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-neutral-300 font-sans">
                      <span className="w-4 h-4 rounded-full bg-spark-gold/15 text-spark-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Recommendation Note */}
                <div className="mt-6 p-3 bg-white/[0.02] border border-white/5 text-[11px] text-neutral-400 font-sans italic">
                  Best for: {pkg.recommendedFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleBookPackage(pkg)}
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Book This Package
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
