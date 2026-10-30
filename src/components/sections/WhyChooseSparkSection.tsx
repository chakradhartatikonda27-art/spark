import React from "react";
import { Sparkles, CheckCircle2, UserCheck, ShieldCheck, Heart, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

export const WhyChooseSparkSection: React.FC = () => {
  const pillars = [
    {
      icon: <UserCheck className="w-5 h-5 text-spark-gold" />,
      title: "Master Stylists & Colorists",
      description:
        "Every haircut, color blend, and facial is administered by trained specialists with deep knowledge in scalp care, texture mapping, and modern aesthetics.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-spark-gold" />,
      title: "100% Genuine Global Products",
      description:
        "We never dilute or substitute formulations. Exclusively genuine L'Oréal Professionnel Paris and salon-grade professional skincare brands.",
    },
    {
      icon: <Heart className="w-5 h-5 text-spark-gold" />,
      title: "Welcoming Unisex Ambience",
      description:
        "Designed to offer equal dignity and luxury to everyone, with private treatment zones, dedicated men's grooming stations, and relaxing lounge areas.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-spark-gold" />,
      title: "Clinical Hygiene Standards",
      description:
        "Medical-grade sanitizers, ultraviolet sterilization boxes, sealed single-use cape sets, and pristine chairs disinfected after every visitor.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-spark-gold" />,
      title: "Transparent Consultations",
      description:
        "No hidden charges or pushed upsells. Clear price estimation and honest discussions regarding hair integrity prior to any service.",
    },
    {
      icon: <Clock className="w-5 h-5 text-spark-gold" />,
      title: "Respect for Your Time",
      description:
        "Optimized appointment scheduling and minimal wait times, allowing you to relax and enjoy your personal care ritual without rush.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-spark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The SPARK Standard"
          title="More Than a Salon. Your Personal Style Destination."
          subtitle="We focus on what truly matters: exceptional craft, genuine hair and skin products, and an authentic welcoming atmosphere."
        />

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-neutral-900/40 border border-white/5 hover:border-spark-gold/30 transition-all duration-300 relative group"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-spark-gold opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 bg-spark-gold/10 border border-spark-gold/20 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="font-serif text-xl text-white font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
