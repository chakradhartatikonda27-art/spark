"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Check, MessageCircle, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

interface Recommendation {
  serviceName: string;
  category: "hair" | "beauty" | "grooming" | "premium";
  productMatch: string;
  duration: string;
  startingPrice: string;
  tag: string;
  whyThis: string;
  maintenanceTip: string;
}

interface StyleConciergeSectionProps {
  onSelectRecommendation?: (serviceName: string, category: string) => void;
}

export const StyleConciergeSection: React.FC<StyleConciergeSectionProps> = ({
  onSelectRecommendation,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [gender, setGender] = useState<"women" | "men" | "celebration">("women");
  const [focus, setFocus] = useState<string>("");
  const [concern, setConcern] = useState<string>("");

  const handleGenderSelect = (val: "women" | "men" | "celebration") => {
    setGender(val);
    setFocus("");
    setConcern("");
    setStep(2);
  };

  const handleFocusSelect = (val: string) => {
    setFocus(val);
    setStep(3);
  };

  const handleConcernSelect = (val: string) => {
    setConcern(val);
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setGender("women");
    setFocus("");
    setConcern("");
  };

  // Determine intelligent recommendation based on user selections
  const getRecommendation = (): Recommendation => {
    if (gender === "men") {
      if (focus === "beard" || focus === "ritual") {
        return {
          serviceName: "The Executive Grooming Ritual",
          category: "grooming",
          productMatch: "L'Oréal Homme Matte Clay & Botanical Beard Oils",
          duration: "75 mins",
          startingPrice: "₹1,450",
          tag: "Complete Transformation",
          whyThis:
            "A structured combination of precision haircutting, razor line definition, and deep-pore charcoal skin purification.",
          maintenanceTip:
            "Trim lines every 14 days and apply nourishing beard balm daily for optimal density.",
        };
      }
      return {
        serviceName: "Men's Precision Cut & Style",
        category: "grooming",
        productMatch: "L'Oréal Professionnel Scalp Advanced Detox",
        duration: "35 mins",
        startingPrice: "₹350",
        tag: "Essential Grooming",
        whyThis:
          "Custom tailored to your head profile and hairline with razor finish and soothing scalp massage.",
        maintenanceTip:
          "Visit every 3 to 4 weeks to maintain sharp architectural taper fades.",
      };
    }

    if (gender === "celebration") {
      return {
        serviceName: "Luxury HD Bridal Couture Makeup",
        category: "premium",
        productMatch: "L'Oréal Mythic Oil & Professional HD Complexion Base",
        duration: "180 mins",
        startingPrice: "₹12,000",
        tag: "Bespoke Artistry",
        whyThis:
          "Includes pre-event consultation, high-definition camera-ready contouring, waterproof artistry, and tailored floral hair styling.",
        maintenanceTip:
          "Schedule a trial run 2-3 weeks prior to the wedding date to fine-tune your desired shade palette.",
      };
    }

    // Women
    if (focus === "color") {
      return {
        serviceName: "Balayage, Ombré & Foil Highlights",
        category: "hair",
        productMatch: "L'Oréal Professionnel Metal Detox & Vitamino Color",
        duration: "120 mins",
        startingPrice: "₹3,500",
        tag: "Couture Dimension",
        whyThis:
          "Hand-painted seamless streaks with bond-protecting anti-metal technology for radiant longevity without breakage.",
        maintenanceTip:
          "Use sulfate-free color-protect shampoo and glossing mask once a week.",
      };
    }

    if (focus === "frizz" || concern === "frizzy") {
      return {
        serviceName: "Keratin Protein & Hair Botox",
        category: "hair",
        productMatch: "L'Oréal Serie Expert Absolut Repair Molecular",
        duration: "150 mins",
        startingPrice: "₹4,500",
        tag: "Frizz-Free Silk",
        whyThis:
          "Formaldehyde-free intensive amino acid infusion that smooths unruly curls and restores mirror-like shine.",
        maintenanceTip:
          "Wash with cold water and avoid salt/chlorinated water for extended durability up to 4 months.",
      };
    }

    if (focus === "skin") {
      return {
        serviceName: "Deep Hydrating Glow Facial",
        category: "beauty",
        productMatch: "Oxygenating Antioxidant Ampoule & Botanical Alginate",
        duration: "60 mins",
        startingPrice: "₹1,800",
        tag: "Radiant Cellular Care",
        whyThis:
          "Triple-purification with active antioxidant infusion to reverse dullness, pollution buildup, and uneven texture.",
        maintenanceTip:
          "Stay hydrated and apply broad-spectrum SPF daily to lock in youthful luminosity.",
      };
    }

    return {
      serviceName: "L'Oréal Deep Nourishing Hair Spa",
      category: "hair",
      productMatch: "L'Oréal Professionnel Serie Expert Lipid Infusion",
      duration: "60 mins",
      startingPrice: "₹1,200",
      tag: "Deep Restoration",
      whyThis:
        "Therapeutic scalp detoxification paired with deep molecular hydration and relaxing acupressure massage.",
      maintenanceTip:
        "Recommended monthly to prevent split ends and maintain softness.",
    };
  };

  const rec = getRecommendation();

  const handleBookNow = () => {
    if (onSelectRecommendation) {
      onSelectRecommendation(rec.serviceName, rec.category);
    }
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const waEnquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello SPARK, I took your Style Concierge Quiz and got recommended the *${rec.serviceName}* (${rec.startingPrice}). I'd like to book this service or consult your stylist.`
  )}`;

  return (
    <section className="py-24 sm:py-32 bg-spark-bg relative overflow-hidden border-t border-b border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-spark-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Consultation"
          title="Find Your Signature Style Ritual"
          subtitle="Not sure which service suits your current hair profile or skin goals? Let our concierge guide you to your ideal session in 3 simple steps."
        />

        {/* Step Progress Indicators */}
        <div className="mt-12 flex items-center justify-center space-x-3 text-xs font-sans tracking-widest uppercase">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center space-x-2">
              <span
                className={`w-7 h-7 flex items-center justify-center text-xs font-semibold rounded-none border transition-colors ${
                  step === s
                    ? "bg-spark-gold text-neutral-950 border-spark-gold"
                    : step > s
                    ? "bg-spark-gold/20 text-spark-gold border-spark-gold/40"
                    : "bg-white/5 text-neutral-500 border-white/10"
                }`}
              >
                {step > s ? <Check className="w-3.5 h-3.5" /> : s}
              </span>
              {s < 4 && <span className="w-6 sm:w-12 h-[1px] bg-white/10" />}
            </div>
          ))}
        </div>

        {/* Quiz Container Box */}
        <div className="mt-10 bg-neutral-900/60 border border-white/10 p-6 sm:p-10 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
          {/* STEP 1: Client Category */}
          {step === 1 && (
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold font-sans block">
                Step 01 / 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Who are you looking to pamper today?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    id: "women",
                    title: "Women's Hair & Beauty",
                    desc: "Cuts, couture coloring, luxury spas & radiant skincare.",
                  },
                  {
                    id: "men",
                    title: "Men's Grooming & Styling",
                    desc: "Precision fades, beard architecture & de-tan therapies.",
                  },
                  {
                    id: "celebration",
                    title: "Bridal & Occasion Styling",
                    desc: "Red-carpet HD makeup, bridal artistry & event glam.",
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleGenderSelect(opt.id as any)}
                    className="p-6 text-left border border-white/10 hover:border-spark-gold/60 bg-neutral-950/60 hover:bg-neutral-950 transition-all group"
                  >
                    <span className="font-serif text-lg text-white group-hover:text-spark-goldLight transition-colors block">
                      {opt.title}
                    </span>
                    <p className="mt-2 text-xs text-neutral-400 font-sans leading-relaxed">
                      {opt.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center text-[10px] uppercase tracking-wider text-spark-gold font-semibold font-sans">
                      Select ›
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Main Styling Goal */}
          {step === 2 && (
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold font-sans block">
                Step 02 / 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                What is your primary styling goal?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {(gender === "men"
                  ? [
                      { id: "beard", title: "Complete Beard & Hair Restyle", desc: "Precision razor fading paired with hot towel beard architecture." },
                      { id: "cut", title: "Clean Modern Haircut & Wash", desc: "Crisp texture cut, scalp detox and matte pomade finish." },
                      { id: "skin", title: "Skin Refresh & De-tan Therapy", desc: "Reversing pollution and sun exposure with charcoal facial care." },
                      { id: "ritual", title: "Full Gentleman's Reset", desc: "All-in-one haircut, beard sculpt, de-tan, and relaxing head massage." },
                    ]
                  : gender === "celebration"
                  ? [
                      { id: "bridal", title: "Complete Bridal Day Couture", desc: "High-definition makeup base, custom eye art, hair florals, and draping." },
                      { id: "party", title: "Occasion & Party Glamour", desc: "Camera-ready contouring, custom lashes, and evening hair blowout." },
                      { id: "prebridal", title: "Pre-Bridal Skincare & Nails", desc: "Deep hydration facial, gel nail extensions, and luxury body polishing." },
                      { id: "consult", title: "Lookbook Trial & Consultation", desc: "Private face analysis and hairstyle trial with senior director." },
                    ]
                  : [
                      { id: "color", title: "Couture Color or Balayage", desc: "Dimensional sun-kissed streaks, rich global tone, or face-framing blends." },
                      { id: "frizz", title: "Frizz Elimination & Smoothing", desc: "Formaldehyde-free keratin protein or botox treatment for glass shine." },
                      { id: "skin", title: "Radiant Skin Rejuvenation", desc: "Deep-cleansing hydra-glow facial and dead-cell exfoliation." },
                      { id: "spa", title: "Restorative Hair Spa & Cut", desc: "L'Oréal Serie Expert moisture bath with precision designer haircut." },
                    ]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleFocusSelect(opt.id)}
                    className="p-5 text-left border border-white/10 hover:border-spark-gold/60 bg-neutral-950/60 hover:bg-neutral-950 transition-all group"
                  >
                    <span className="font-serif text-base sm:text-lg text-white group-hover:text-spark-goldLight transition-colors block">
                      {opt.title}
                    </span>
                    <p className="mt-1.5 text-xs text-neutral-400 font-sans leading-relaxed">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Texture & Profile */}
          {step === 3 && (
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold font-sans block">
                Step 03 / 03
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                How would you describe your hair or skin condition?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { id: "frizzy", title: "Frizzy, dry, or chemically stressed", desc: "Needs intensive moisture bonding and cuticular smoothing." },
                  { id: "colored", title: "Color-treated or looking to color", desc: "Requires anti-metal bond protection and color-locking agents." },
                  { id: "sensitive", title: "Sun-tanned, dull, or sensitive skin", desc: "Needs soothing botanical antioxidants and gentle purification." },
                  { id: "normal", title: "Healthy maintenance & sharp shape", desc: "Looking for regular premium upkeep and polished styling." },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleConcernSelect(opt.id)}
                    className="p-5 text-left border border-white/10 hover:border-spark-gold/60 bg-neutral-950/60 hover:bg-neutral-950 transition-all group"
                  >
                    <span className="font-serif text-base sm:text-lg text-white group-hover:text-spark-goldLight transition-colors block">
                      {opt.title}
                    </span>
                    <p className="mt-1.5 text-xs text-neutral-400 font-sans leading-relaxed">
                      {opt.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Tailored Recommendation Result */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-sans font-semibold bg-spark-gold/15 text-spark-gold border border-spark-gold/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Style Prescription</span>
                </span>

                <button
                  onClick={resetQuiz}
                  className="text-xs text-neutral-400 hover:text-white inline-flex items-center space-x-1 font-sans"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                <div className="md:col-span-7 space-y-4">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans">
                    Recommended Session:
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                    {rec.serviceName}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {rec.whyThis}
                  </p>

                  <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-spark-gold font-semibold font-sans block">
                      Official Formulation Match:
                    </span>
                    <p className="text-xs text-white font-sans font-medium">
                      {rec.productMatch}
                    </p>
                  </div>

                  <p className="text-[11px] text-neutral-400 font-sans italic">
                    💡 Stylist Tip: {rec.maintenanceTip}
                  </p>
                </div>

                <div className="md:col-span-5 bg-neutral-950 p-6 border border-spark-gold/30 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-neutral-500 font-sans block">
                      Estimated Duration & Investment
                    </span>
                    <div className="mt-1 flex items-baseline justify-between">
                      <span className="font-serif text-2xl sm:text-3xl text-spark-gold">
                        from {rec.startingPrice}
                      </span>
                      <span className="text-xs text-neutral-400 font-sans">
                        ~{rec.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleBookNow}
                      className="w-full justify-center"
                      leftIcon={<Calendar className="w-3.5 h-3.5" />}
                    >
                      Book This Session
                    </Button>

                    <a
                      href={waEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 bg-white/5 hover:bg-[#25D366] hover:text-white border border-white/10 text-neutral-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls for steps 2 & 3 */}
          {step > 1 && step < 4 && (
            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => setStep((step - 1) as any)}
                className="text-xs text-neutral-400 hover:text-white font-sans tracking-wider uppercase"
              >
                ← Back
              </button>
              <button
                onClick={resetQuiz}
                className="text-xs text-neutral-500 hover:text-neutral-300 font-sans tracking-wider uppercase"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
