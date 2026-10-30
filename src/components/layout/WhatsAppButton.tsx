"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage =
    "Hello SPARK, I would like to book an appointment. Please share the available services and timings.";

  const quickOptions = [
    {
      label: "Book Hair / Grooming Appointment",
      text: "Hello SPARK, I'd like to book a Hair & Grooming appointment. Please let me know available slots.",
    },
    {
      label: "Inquire about Facials & Skin Care",
      text: "Hello SPARK, I am looking for skin care & facial recommendations. Please share your menu and pricing.",
    },
    {
      label: "Bridal / Event Makeup Consultation",
      text: "Hello SPARK, I want to inquire about Bridal / Occasion makeup packages and stylist availability.",
    },
    {
      label: "Current Special Offers & Packages",
      text: "Hello SPARK, please share the current combo offers and launch packages available at the salon.",
    },
  ];

  const buildWaUrl = (msg: string) => {
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      msg
    )}`;
  };

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-neutral-950/95 backdrop-blur-xl border border-white/15 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-sans">
                  SPARK Salon Concierge
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online for Instant Enquiries</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
              aria-label="Close WhatsApp chat options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-2.5">
            <p className="text-xs text-neutral-300 font-sans leading-relaxed">
              Welcome to SPARK Unisex Salon. How can our styling concierge assist
              you today?
            </p>

            <div className="space-y-1.5 pt-1">
              {quickOptions.map((opt, i) => (
                <a
                  key={i}
                  href={buildWaUrl(opt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-left text-[11px] p-2.5 rounded bg-white/5 hover:bg-spark-gold/15 hover:border-spark-gold/40 border border-white/5 text-neutral-200 transition-all font-sans"
                >
                  <span className="text-spark-gold mr-1.5 font-bold">›</span>
                  {opt.label}
                </a>
              ))}
            </div>

            <a
              href={buildWaUrl(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider rounded text-center flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-spark-gold focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Chat with SPARK Salon on WhatsApp"
        aria-expanded={isOpen}
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />

        {/* Outer Gold Ring */}
        <span className="absolute -inset-0.5 rounded-full border border-spark-gold/40" />

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white fill-current relative z-10" />
        )}
      </button>
    </aside>
  );
};
