"use client";

import React, { useState } from "react";
import { Calculator, Check, Plus, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

interface EstimatorService {
  id: string;
  name: string;
  category: "hair" | "beauty" | "grooming" | "nails";
  price: number;
  durationMinutes: number;
}

const availableServices: EstimatorService[] = [
  { id: "cut-women", name: "Designer Haircut & Blowdry", category: "hair", price: 450, durationMinutes: 45 },
  { id: "hair-spa", name: "L'Oréal Deep Nourishing Hair Spa", category: "hair", price: 1200, durationMinutes: 60 },
  { id: "global-color", name: "Global Hair Colouring (L'Oréal)", category: "hair", price: 2200, durationMinutes: 90 },
  { id: "balayage", name: "Balayage & Dimensional Highlights", category: "hair", price: 3500, durationMinutes: 120 },
  { id: "keratin", name: "Keratin Protein Frizz Treatment", category: "hair", price: 4500, durationMinutes: 150 },
  { id: "hydra-facial", name: "Deep Hydrating Glow Facial", category: "beauty", price: 1800, durationMinutes: 60 },
  { id: "detan", name: "Oxygenating De-Tan Cleanup", category: "beauty", price: 850, durationMinutes: 40 },
  { id: "waxing", name: "Rica Italian Waxing (Full Body)", category: "beauty", price: 1600, durationMinutes: 60 },
  { id: "men-cut", name: "Men's Precision Cut & Style", category: "grooming", price: 350, durationMinutes: 35 },
  { id: "men-beard", name: "Beard Architecture & Razor Fade", category: "grooming", price: 250, durationMinutes: 25 },
  { id: "men-shave", name: "Royal Hot Towel Shave", category: "grooming", price: 300, durationMinutes: 30 },
  { id: "gel-nails", name: "Sculpted Gel Nail Extensions", category: "nails", price: 1800, durationMinutes: 90 },
  { id: "nail-art", name: "Bespoke Gel Nail Art", category: "nails", price: 800, durationMinutes: 45 },
];

export const ComboEstimatorSection: React.FC<{
  onBookBundle?: (bundleNotes: string) => void;
}> = ({ onBookBundle }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "cut-women",
    "hair-spa",
  ]);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = availableServices.filter((s) =>
    selectedIds.includes(s.id)
  );

  const rawTotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalMinutes = selectedServices.reduce((sum, s) => sum + s.durationMinutes, 0);

  // Apply a 10% combo privilege when 2 or more services are selected
  const hasBundleDiscount = selectedServices.length >= 2;
  const discountAmount = hasBundleDiscount ? Math.round(rawTotal * 0.1) : 0;
  const netEstimatedPrice = rawTotal - discountAmount;

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const formattedDuration =
    hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""} ${mins > 0 ? `${mins} mins` : ""}` : `${mins} mins`;

  const handleBookBundle = () => {
    const serviceList = selectedServices.map((s) => s.name).join(" + ");
    const notes = `Custom Bundle (${selectedServices.length} services): ${serviceList} | Est. ₹${netEstimatedPrice}`;
    if (onBookBundle) {
      onBookBundle(notes);
    }
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const waBundleUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello SPARK, I built a custom combo on your website:\n• Services: ${selectedServices
      .map((s) => s.name)
      .join(", ")}\n• Est. Total: ₹${netEstimatedPrice} (~${formattedDuration})\nPlease check stylist availability for this session.`
  )}`;

  return (
    <section className="py-24 sm:py-32 bg-spark-bg relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Custom Bundle Builder"
          title="Personalized Service Price Estimator"
          subtitle="Select 2 or more services to curate your custom head-to-toe salon ritual and unlock exclusive combo privileges."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Checklist Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans block mb-2">
              Select Services to Bundle ({selectedIds.length} chosen):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableServices.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleService(item.id)}
                    className={`p-4 text-left border rounded-sm transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-white/[0.06] border-spark-gold/70 shadow-md"
                        : "bg-neutral-900/40 border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="pr-3">
                      <span className="font-serif text-sm text-white group-hover:text-spark-goldLight transition-colors block">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-neutral-400 font-sans mt-0.5 block">
                        ₹{item.price} • ~{item.durationMinutes} mins
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 flex-shrink-0 flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-spark-gold text-neutral-950 border-spark-gold"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Summary Card (4 cols) */}
          <div className="lg:col-span-4 bg-neutral-900/80 border border-spark-gold/30 p-6 sm:p-8 backdrop-blur-md sticky top-24 shadow-2xl">
            <div className="flex items-center space-x-2 text-spark-gold mb-3">
              <Calculator className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-semibold font-sans">
                Bundle Estimate
              </span>
            </div>

            <h3 className="font-serif text-2xl text-white font-normal">
              Your Curated Ritual
            </h3>

            {/* List of chosen services */}
            <div className="mt-4 py-3 border-t border-b border-white/10 space-y-2 max-h-48 overflow-y-auto">
              {selectedServices.length === 0 ? (
                <p className="text-xs text-neutral-500 font-sans italic py-2">
                  Select at least one service from the left.
                </p>
              ) : (
                selectedServices.map((s) => (
                  <div key={s.id} className="flex justify-between text-xs font-sans">
                    <span className="text-neutral-300 truncate pr-2">{s.name}</span>
                    <span className="text-spark-gold font-medium">₹{s.price}</span>
                  </div>
                ))
              )}
            </div>

            {/* Metrics */}
            <div className="mt-4 space-y-2 text-xs font-sans">
              <div className="flex justify-between text-neutral-400">
                <span>Estimated Duration:</span>
                <span className="text-white font-medium">{formattedDuration}</span>
              </div>

              {hasBundleDiscount && (
                <div className="flex justify-between text-emerald-400">
                  <span>10% Multi-Service Privilege:</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}

              <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                <span className="text-xs tracking-wider uppercase text-neutral-400">
                  Estimated Total:
                </span>
                <div className="text-right">
                  <span className="font-serif text-2xl sm:text-3xl text-spark-gold font-medium">
                    ₹{netEstimatedPrice}
                  </span>
                  {hasBundleDiscount && (
                    <span className="block text-[10px] text-neutral-500 line-through">
                      ₹{rawTotal}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button
                variant="primary"
                size="md"
                disabled={selectedServices.length === 0}
                onClick={handleBookBundle}
                className="w-full justify-center"
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
              >
                Book This Combo
              </Button>

              <a
                href={waBundleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-white/5 hover:bg-[#25D366] hover:text-white border border-white/10 text-neutral-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Send via WhatsApp</span>
              </a>
            </div>

            <p className="mt-4 text-[10px] text-neutral-500 font-sans leading-relaxed text-center">
              *Starting rates. Exact quote confirmed after personal hair density
              and skin evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
