"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Navigation,
  Instagram,
  Facebook,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-spark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Location & Salon Contact"
          subtitle="Located in the commercial heart of the city with dedicated parking and a welcoming reception."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-900/60 border border-white/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-sans font-semibold block mb-2">
                  Address & Coordinates
                </span>
                <div className="flex items-start space-x-3 text-white">
                  <MapPin className="w-5 h-5 text-spark-gold flex-shrink-0 mt-1" />
                  <p className="text-sm font-sans leading-relaxed text-neutral-300">
                    <strong className="text-white block font-medium">
                      {siteConfig.contact.address.line1}
                    </strong>
                    {siteConfig.contact.address.line2}
                    <br />
                    {siteConfig.contact.address.city},{" "}
                    {siteConfig.contact.address.state} —{" "}
                    {siteConfig.contact.address.pincode}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-sans font-semibold block mb-2">
                  Salon Timings
                </span>
                <div className="flex items-start space-x-3 text-white">
                  <Clock className="w-5 h-5 text-spark-gold flex-shrink-0 mt-1" />
                  <div className="text-sm font-sans space-y-1 text-neutral-300">
                    {siteConfig.contact.workingHours.map((wh, idx) => (
                      <p key={idx}>
                        <span className="text-white font-medium">{wh.days}:</span>{" "}
                        {wh.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-spark-gold font-sans font-semibold block mb-2">
                  Direct Inquiries & Calls
                </span>
                <div className="flex items-center space-x-3 text-white">
                  <Phone className="w-5 h-5 text-spark-gold flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phoneTel}`}
                    className="text-base sm:text-lg font-serif text-white hover:text-spark-gold transition-colors font-medium"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-spark-gold hover:bg-spark-goldLight text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-white/5 hover:bg-[#25D366] hover:text-white border border-white/10 text-neutral-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Socials */}
              <div className="pt-4 flex items-center justify-center space-x-4 text-neutral-400 text-xs font-sans">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-spark-gold transition-colors inline-flex items-center space-x-1.5"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-spark-gold transition-colors inline-flex items-center space-x-1.5"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 border border-white/10 overflow-hidden relative min-h-[380px] lg:min-h-full bg-neutral-900 rounded-sm">
            <iframe
              title="SPARK Unisex Salon Location Map"
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%) contrast(1.1) invert(90%) hue-rotate(180deg)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
            />

            {/* Overlay Map Badge */}
            <div className="absolute top-4 left-4 p-3 bg-neutral-950/90 border border-spark-gold/40 backdrop-blur-md max-w-xs pointer-events-none">
              <span className="text-[9px] tracking-[0.2em] uppercase text-spark-gold font-sans font-semibold block">
                Salon Location
              </span>
              <p className="font-serif text-xs text-white mt-0.5">
                {siteConfig.name} • {siteConfig.contact.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
