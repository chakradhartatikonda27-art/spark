"use client";

import React, { useState } from "react";
import { Sparkles, Clock, ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { serviceCategories, servicesData, ServiceCategory, ServiceItem } from "@/data/services";
import { Button } from "@/components/common/Button";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string, category: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory["id"]>("hair");

  const currentCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];
  const filteredServices = servicesData.filter((s) => s.category === activeTab);

  const handleBookService = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.name, service.category);
    }
    // Also scroll smoothly to booking
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-spark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Signature Services"
          title="Discover Your Signature Style"
          subtitle="Explore professional beauty and grooming services designed around your individual style."
        />

        {/* Category Navigation Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-neutral-900/90 border border-white/10 rounded-sm backdrop-blur-md overflow-x-auto max-w-full">
            {serviceCategories.map((category) => {
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 sm:px-6 py-2.5 text-xs font-sans tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-[#DFCA95] to-[#C8A96B] text-neutral-950 font-semibold shadow-md"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Category Highlight Statement */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-spark-gold">
            {currentCategory.tagline}
          </span>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
            {currentCategory.description}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-neutral-900/60 border border-white/10 hover:border-spark-gold/40 transition-all duration-500 p-6 sm:p-7 flex flex-col justify-between hover:bg-neutral-900/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Highlight Tag */}
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 text-[9px] font-sans uppercase tracking-[0.2em] font-semibold bg-spark-gold/15 text-spark-gold border border-spark-gold/30">
                    {service.highlight}
                  </span>
                </div>
              )}

              <div>
                {/* Duration & Category Tag */}
                <div className="flex items-center space-x-2 text-[11px] text-neutral-400 font-sans mb-3">
                  <Clock className="w-3.5 h-3.5 text-spark-gold" />
                  <span>{service.duration}</span>
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-spark-goldLight transition-colors">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="mt-3 text-xs leading-relaxed text-neutral-400 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Price & Booking Trigger */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-sans block">
                    Starting from
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-spark-gold font-medium">
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookService(service)}
                  className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-neutral-300 hover:text-spark-gold font-sans font-medium transition-colors group/btn"
                  aria-label={`Book ${service.name}`}
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* L'Oreal Professional Partnership Notice */}
        <div className="mt-16 p-6 sm:p-8 bg-neutral-950/80 border border-spark-gold/25 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-semibold font-sans block mb-1">
              Guaranteed Authentic Products
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-white">
              Official L&apos;Oréal Professionnel Paris Salon
            </h4>
            <p className="text-xs text-neutral-400 font-sans mt-1">
              All chemical services, hair spas, and colorings are performed using genuine imported formulations.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            href="#booking"
            className="flex-shrink-0"
          >
            Consult Our Stylist
          </Button>
        </div>
      </div>
    </section>
  );
};
