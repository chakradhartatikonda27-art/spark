"use client";

import React from "react";
import { Scissors, User, Heart, Sparkles, MessageSquare, Eye } from "lucide-react";

export const WhyChooseSparkSection: React.FC = () => {
  const pillars = [
    {
      icon: <Scissors className="w-5 h-5 text-[#c9a45c]" />,
      title: "Professional beauty & grooming",
      description: "Trained professionals",
    },
    {
      icon: <User className="w-5 h-5 text-[#c9a45c]" />,
      title: "Personalised styling",
      description: "Consultation first",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#c9a45c]" />,
      title: "Welcoming unisex environment",
      description: "Comfortable for everyone",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#c9a45c]" />,
      title: "Modern salon atmosphere",
      description: "Calm, contemporary interiors",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#c9a45c]" />,
      title: "Customer-focused experience",
      description: "Clear, attentive service",
    },
    {
      icon: <Eye className="w-5 h-5 text-[#c9a45c]" />,
      title: "Attention to detail",
      description: "From consult to finish",
    },
  ];

  return (
    <section id="why" className="py-24 sm:py-32 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#c9a45c]">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            WHY CHOOSE SPARK
          </p>

          <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal leading-[1.15]">
            More Than a Salon.<br />
            Your Personal <em className="italic text-[#c9a45c]">Style Destination.</em>
          </h2>
        </div>

        {/* 6 Feature Badges matching Screenshot 3 */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div key={idx} className="flex flex-col text-left group">
              {/* Gold Outlined Square Icon Box */}
              <div className="w-13 h-13 w-[52px] h-[52px] rounded-xl border border-[#c9a45c]/40 bg-[#c9a45c]/[0.08] flex items-center justify-center mb-4 group-hover:border-[#c9a45c] transition-colors">
                {item.icon}
              </div>

              <b className="font-sans text-sm font-semibold text-white leading-snug">
                {item.title}
              </b>

              <span className="text-xs text-white/55 font-sans leading-relaxed mt-1">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
