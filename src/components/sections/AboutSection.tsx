"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-spark-dark relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-spark-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Image Grid (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Client Image: Authentic SPARK Billboard Campaign */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[9/14] bg-neutral-900 group">
                <Image
                  src="/images/spark-hero-billboard.jpg"
                  alt="SPARK Unisex Salon - Ignite Your Style campaign billboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-950/80 backdrop-blur-md border border-spark-gold/30">
                  <div className="flex items-center space-x-2 text-spark-gold mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-[0.24em] font-semibold font-sans">
                      Official Client Atmosphere
                    </span>
                  </div>
                  <p className="font-serif text-sm text-white">
                    “YOUR STYLE, YOUR STATEMENT.”
                  </p>
                </div>
              </div>

              {/* Floating Decorative Gold Box Accent */}
              <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-spark-gold/40 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-spark-gold/40 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              align="left"
              eyebrow="The SPARK Philosophy"
              title="Where Style Meets Confidence"
              subtitle={siteConfig.editorialAbout}
            />

            {/* Core Salon Values (Verifiable claims directly matching salon environment) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white/[0.03] border border-white/5 hover:border-spark-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-none bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center text-spark-gold mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">
                  Welcoming Unisex Space
                </h3>
                <p className="text-xs leading-relaxed text-neutral-400 font-sans">
                  Crafted for women and men alike, offering private styling
                  alcoves, tranquil washing stations, and an inclusive vibe.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 hover:border-spark-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-none bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center text-spark-gold mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">
                  L&apos;Oréal Professionnel
                </h3>
                <p className="text-xs leading-relaxed text-neutral-400 font-sans">
                  We use exclusively certified, ammonia-safe haircare formulations
                  and clinical-grade spa treatments for lasting health.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 hover:border-spark-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-none bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center text-spark-gold mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">
                  Spotless Sanitation
                </h3>
                <p className="text-xs leading-relaxed text-neutral-400 font-sans">
                  Autoclave-sterilized metal tools, fresh single-use capes, and
                  deep sanitization protocols between every single guest.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 hover:border-spark-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-none bg-spark-gold/10 border border-spark-gold/30 flex items-center justify-center text-spark-gold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-2">
                  Personalized Style Analysis
                </h3>
                <p className="text-xs leading-relaxed text-neutral-400 font-sans">
                  Every appointment begins with a thorough consultation
                  respecting your hair texture, lifestyle, and aesthetic goals.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href="/about">
                Discover Our Story &amp; Founder
              </Button>
              <Button variant="outline" size="md" href="/book">
                Reserve Your Chair
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
