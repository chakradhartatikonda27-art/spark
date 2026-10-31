"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/siteConfig";

interface FaqItem {
  question: string;
  answer: string;
  category: "booking" | "services" | "hygiene" | "bridal";
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "booking",
      question: "Do I need an advance appointment or do you welcome walk-ins?",
      answer:
        "We warmly welcome both walk-ins and scheduled appointments. However, to guarantee your preferred stylist, zero waiting time, and undivided attention—especially during peak evening hours and weekends—we strongly recommend reserving your chair 1-2 days in advance.",
    },
    {
      category: "services",
      question: "Are the hair colors and treatments genuinely authentic L'Oréal Professionnel?",
      answer:
        "Yes, 100% unconditionally. SPARK Unisex Salon is an official salon partner with L'Oréal Professionnel Paris. All chemical color tubes, Serie Expert bond repair treatments, Mythic Oils, and SteamPod serums are unsealed directly in front of you. We never dilute or substitute products.",
    },
    {
      category: "services",
      question: "How long does a Balayage, Keratin treatment, or Hair Spa take?",
      answer:
        "A customized Balayage or Ombré typically requires 2 to 3.5 hours depending on hair length and density. A Keratin or Hair Botox smoothing session takes approximately 2 to 2.5 hours. A restorative L'Oréal Hair Spa takes 60 minutes.",
    },
    {
      category: "hygiene",
      question: "What hygiene and sterilization protocols are followed at SPARK?",
      answer:
        "We uphold clinical-grade sanitization. All metallic scissors, clippers, and cuticle pushers are sterilized in hospital-grade UV chambers after every client. Every guest receives a freshly laundered or single-use disposable cape, and all styling chairs and basins are sanitized between sessions.",
    },
    {
      category: "bridal",
      question: "Do you offer bridal makeup trials and customized bridal packages?",
      answer:
        "Yes. Our Master Makeup Artists provide one-on-one bridal consultations and pre-event trials to test high-definition bases, eye palettes, and hair florals under varying lighting conditions. Custom packages can also be created for families, bridesmaids, and grooms.",
    },
    {
      category: "services",
      question: "Are hair and skin consultations complimentary?",
      answer:
        "Yes! Every appointment starts with a complimentary face-profile, hair-texture, or scalp analysis. Our stylists discuss your lifestyle, maintenance preferences, and estimated costs honestly before any service commences.",
    },
    {
      category: "booking",
      question: "Can couples or families visit together for joint grooming sessions?",
      answer:
        "Absolutely. As a modern unisex studio, we provide comfortable, thoughtfully planned spaces where couples and families can enjoy simultaneous styling sessions while maintaining personal privacy.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-spark-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our salon etiquette, authentic products, appointment protocols, and services."
        />

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border transition-all duration-300 ${
                  isOpen
                    ? "bg-neutral-900/90 border-spark-gold/50 shadow-lg"
                    : "bg-neutral-900/40 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-white font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border border-spark-gold/40 text-spark-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-spark-gold text-neutral-950" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 bg-neutral-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-base text-white">
              Have a specific question about your hair or skin?
            </h4>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              Our front desk concierge is ready to assist you directly.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-sans uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-spark-gold" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-sans uppercase tracking-wider flex items-center space-x-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
