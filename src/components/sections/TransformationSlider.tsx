"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { Sparkles, MoveHorizontal, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

interface TransformationCase {
  id: string;
  category: string;
  title: string;
  serviceUsed: string;
  description: string;
  beforeStats: string;
  afterStats: string;
  beforeVisual: {
    bgGradient: string;
    textureType: string;
    label: string;
  };
  afterVisual: {
    bgGradient: string;
    textureType: string;
    label: string;
  };
}

export const TransformationSlider: React.FC<{
  onSelectService?: (serviceName: string) => void;
}> = ({ onSelectService }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: TransformationCase[] = [
    {
      id: "balayage",
      category: "Hair Transformation",
      title: "Dimensional Caramel Balayage & Bond Repair",
      serviceUsed: "Balayage, Ombré & Foil Highlights",
      description:
        "Tackling dull, unblended brassy roots and frizz with L'Oréal Metal Detox and seamless dimensional caramel babylights, finished with a lipid-sealing blowdry.",
      beforeStats: "Uneven brassy tones, damaged cuticles, frizzy ends",
      afterStats: "Luminous dimensional blend, sealed cuticle, mirror-like bounce",
      beforeVisual: {
        bgGradient: "from-[#382b20] via-[#241c16] to-[#120e0b]",
        textureType: "brassy-dull",
        label: "Before: Brassy, Unbalanced & Frizzy",
      },
      afterVisual: {
        bgGradient: "from-[#634825] via-[#453218] to-[#1e150a]",
        textureType: "caramel-gloss",
        label: "After: Seamless Dimensional Balayage",
      },
    },
    {
      id: "mens-fade",
      category: "Men's Grooming",
      title: "Executive Skin Fade & Razor Beard Sculpt",
      serviceUsed: "The Executive Grooming Ritual",
      description:
        "Reshaping overgrown beard volume into razor-sharp cheek lines, paired with a tapered skin fade and charcoal skin purification.",
      beforeStats: "Overgrown cheek lines, dull sun-exposed skin",
      afterStats: "Architectural line definition, skin fade, purified glow",
      beforeVisual: {
        bgGradient: "from-[#22252a] via-[#1a1b1f] to-[#111215]",
        textureType: "rough-stubble",
        label: "Before: Unshaped Growth & Weathered Skin",
      },
      afterVisual: {
        bgGradient: "from-[#2e3740] via-[#1f252c] to-[#111317]",
        textureType: "sharp-fade",
        label: "After: Razor Definition & De-Tan Polish",
      },
    },
    {
      id: "keratin-smooth",
      category: "Hair Texture Care",
      title: "Amino-Acid Keratin & Botox Smoothing",
      serviceUsed: "Keratin Protein & Hair Botox",
      description:
        "Smoothing unruly monsoon humidity curls and chemical porosity into long-lasting, water-resistant glass silk without losing natural body.",
      beforeStats: "Porosity, high frizz swelling, unmanageable texture",
      afterStats: "Zero-frizz silkiness, 80% reduced drying time",
      beforeVisual: {
        bgGradient: "from-[#2a222a] via-[#1d161d] to-[#110e11]",
        textureType: "frizz-swollen",
        label: "Before: Humidity Frizz & Coarse Porosity",
      },
      afterVisual: {
        bgGradient: "from-[#473447] via-[#2f222f] to-[#150f15]",
        textureType: "glass-silk",
        label: "After: Mirror Glass Silk & Deep Softness",
      },
    },
  ];

  const currentCase = cases[activeCaseIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleBookCase = () => {
    if (onSelectService) {
      onSelectService(currentCase.serviceUsed);
    }
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 sm:py-32 bg-spark-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Craftsmanship in Action"
          title="The Power of Transformation"
          subtitle="Drag the interactive slider to inspect the visual contrast between initial consultation and finished salon finish."
        />

        {/* Transformation Case Switcher Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1 bg-neutral-900/90 border border-white/10 rounded-sm backdrop-blur-md overflow-x-auto max-w-full">
            {cases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIdx(i);
                  setSliderPos(50);
                }}
                className={`px-4 sm:px-6 py-2.5 text-xs font-sans tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCaseIdx === i
                    ? "bg-spark-gold text-neutral-950 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Transformation Slider Container */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Interactive Split View (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/11] select-none cursor-ew-resize overflow-hidden border border-white/15 rounded-sm shadow-2xl bg-neutral-950 group"
            >
              {/* "AFTER" Layer (Full Background) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentCase.afterVisual.bgGradient} flex flex-col justify-between p-6 sm:p-8`}
              >
                {/* Visual Graphic Representation of "After" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="w-72 h-72 rounded-full border border-spark-gold/40 animate-pulseGlow" />
                </div>

                <div className="flex justify-end relative z-10">
                  <span className="px-3 py-1 bg-black/80 text-spark-gold border border-spark-gold/50 text-[10px] tracking-widest uppercase font-semibold font-sans backdrop-blur-md">
                    AFTER
                  </span>
                </div>

                <div className="relative z-10 text-right">
                  <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
                    {currentCase.afterVisual.label}
                  </h4>
                  <p className="text-xs text-spark-gold font-sans mt-1">
                    ✓ {currentCase.afterStats}
                  </p>
                </div>
              </div>

              {/* "BEFORE" Layer (Clipped Width based on sliderPos) */}
              <div
                style={{ width: `${sliderPos}%` }}
                className={`absolute inset-0 bg-gradient-to-br ${currentCase.beforeVisual.bgGradient} flex flex-col justify-between p-6 sm:p-8 overflow-hidden border-r border-spark-gold`}
              >
                {/* Visual Graphic Representation of "Before" */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-72 h-72 rounded-none border border-neutral-600 border-dashed" />
                </div>

                <div className="flex justify-start relative z-10 whitespace-nowrap">
                  <span className="px-3 py-1 bg-neutral-900/90 text-neutral-300 border border-white/20 text-[10px] tracking-widest uppercase font-semibold font-sans backdrop-blur-md">
                    BEFORE
                  </span>
                </div>

                <div className="relative z-10 text-left whitespace-nowrap">
                  <h4 className="font-serif text-lg sm:text-xl text-neutral-300 font-medium">
                    {currentCase.beforeVisual.label}
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    ✗ {currentCase.beforeStats}
                  </p>
                </div>
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                style={{ left: `${sliderPos}%` }}
                className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-spark-gold to-transparent pointer-events-none"
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-neutral-950 border-2 border-spark-gold flex items-center justify-center text-spark-gold shadow-[0_0_15px_rgba(200,169,107,0.8)]">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Helper Drag Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <span className="text-[9px] uppercase tracking-widest text-white/70 bg-black/60 px-2 py-0.5 rounded font-sans backdrop-blur-sm">
                  ‹ Drag or Touch to Compare ›
                </span>
              </div>
            </div>
          </div>

          {/* Details & Action Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold font-sans block mb-1">
                {currentCase.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                {currentCase.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {currentCase.description}
              </p>
            </div>

            <div className="p-4 bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold font-sans block">
                Primary Service Applied:
              </span>
              <p className="font-serif text-base text-spark-gold">
                {currentCase.serviceUsed}
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleBookCase}
                className="w-full justify-center"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Book This Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
