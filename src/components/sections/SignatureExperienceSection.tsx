"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Compass, Shield, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  poster: string;
  tag: string;
}

export const SignatureExperienceSection: React.FC<{
  onOpenVideo?: (src: string, title: string) => void;
}> = ({ onOpenVideo }) => {
  const [activeItem, setActiveItem] = useState(0);

  const experiences: ExperienceItem[] = [
    {
      id: "exp-reception",
      title: "Champagne Gold Reception & 3D Emblem",
      subtitle: "The signature welcome moment",
      description:
        "Every client journey begins at our custom curved champagne-gold reception desk, crowned by the bespoke 3D gold SPARK emblem against high-gloss black acrylic. A warm and personalized greeting from our salon concierge.",
      videoSrc: "/videos/spark-reception-gold.mp4",
      poster: "/images/posters/spark-reception-gold-poster.png",
      tag: "Reception Suite",
    },
    {
      id: "exp-lounge",
      title: "Sculptural Tree Columns & Ambient Lounge",
      subtitle: "Organic architecture meets serene comfort",
      description:
        "Relax in plush designer armchairs flanked by sculpted organic white tree pillars and recessed ambient cove illumination. Savor herbal refreshments and browse bespoke style lookbooks while you unwind.",
      videoSrc: "/videos/spark-lounge-interior.mp4",
      poster: "/images/posters/spark-lounge-interior-poster.png",
      tag: "Relaxation Lounge",
    },
    {
      id: "exp-loreal",
      title: "L'Oréal Professionnel Paris Showcase",
      subtitle: "Authentic professional treatments",
      description:
        "Our specialized retail and treatment display presents the full Serie Expert, Vitamino Color, and Absolut Repair hair rituals. Every formulation is 100% genuine and matched to your specific strand needs.",
      videoSrc: "/videos/spark-loreal-showcase.mp4",
      poster: "/images/posters/spark-loreal-showcase-poster.png",
      tag: "Haircare Lab",
    },
    {
      id: "exp-walkthrough",
      title: "The Grand Entrance & Walkthrough",
      subtitle: "Step into contemporary elegance",
      description:
        "From our branded media wall and burgundy arched entrance to the tranquil Ganesha temple alcove, every detail is conceived to create an immersive, welcoming unisex retreat from the bustling city.",
      videoSrc: "/videos/spark-entrance-walkthrough.mp4",
      poster: "/images/posters/spark-entrance-walkthrough-poster.png",
      tag: "Sanctuary Tour",
    },
  ];

  const current = experiences[activeItem];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-spark-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Salon Environment"
          title="Experience the SPARK Difference"
          subtitle="Step inside our thoughtfully curated sanctuary where luxury interior design meets personalized aesthetic care."
        />

        {/* Feature Interactive Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Video Screen (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[16/10] bg-neutral-900 group">
              <video
                key={current.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                poster={current.poster}
                className="w-full h-full object-cover object-center"
              >
                <source src={current.videoSrc} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Tag and Fullscreen Trigger */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-[10px] font-sans uppercase tracking-[0.22em] font-semibold bg-neutral-950/80 text-spark-gold border border-spark-gold/40 backdrop-blur-md">
                  {current.tag}
                </span>
              </div>

              {onOpenVideo && (
                <button
                  type="button"
                  onClick={() => onOpenVideo(current.videoSrc, current.title)}
                  className="absolute bottom-4 right-4 z-10 p-2.5 bg-neutral-950/80 text-white hover:text-spark-gold border border-white/20 hover:border-spark-gold/50 backdrop-blur-md rounded-none transition-all"
                  aria-label={`View full video of ${current.title}`}
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Details & Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-3">
              {experiences.map((exp, idx) => {
                const isSelected = activeItem === idx;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setActiveItem(idx)}
                    className={`w-full text-left p-5 border transition-all duration-300 relative ${
                      isSelected
                        ? "bg-white/[0.05] border-spark-gold/60 shadow-lg"
                        : "bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-0 left-0 bottom-0 w-1 bg-spark-gold" />
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-spark-gold">
                        0{idx + 1} • {exp.tag}
                      </span>
                      <Play
                        className={`w-3.5 h-3.5 transition-colors ${
                          isSelected ? "text-spark-gold" : "text-neutral-600"
                        }`}
                      />
                    </div>

                    <h4 className="font-serif text-base sm:text-lg text-white font-medium">
                      {exp.title}
                    </h4>

                    {isSelected && (
                      <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <Button variant="primary" size="md" href="#booking" className="w-full">
                Experience It in Person
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
