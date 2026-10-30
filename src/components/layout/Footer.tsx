import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Heart } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { siteConfig } from "@/config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10 relative overflow-hidden">
      {/* Decorative Gold Accent Gradient on Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-spark-gold/40 to-transparent" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="md" variant="light" showTagline={true} />

            <p className="text-sm leading-relaxed text-neutral-400 font-sans font-light max-w-sm">
              SPARK is where professional beauty, modern grooming, and personal
              style come together. Experience an elevated salon atmosphere
              anchored in craftsmanship, authentic products, and individual care.
            </p>

            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-[0.24em] text-spark-gold font-semibold block mb-3">
                Official Salon Partner
              </span>
              <div className="inline-flex items-center px-4 py-2 border border-white/10 bg-white/5 rounded-sm">
                <span className="font-serif tracking-widest text-xs text-white">
                  L&apos;ORÉAL PROFESSIONNEL PARIS
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-semibold font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link href="#home" className="hover:text-spark-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-spark-gold transition-colors">
                  About SPARK
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-spark-gold transition-colors">
                  Salon Ambience
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-spark-gold transition-colors">
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link href="#offers" className="hover:text-spark-gold transition-colors">
                  Offers & Combos
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-spark-gold transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-semibold font-sans">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Designer Haircuts & Styling
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Balayage & Global Hair Colour
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  L&apos;Oréal Deep Nourishing Hair Spa
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Hydrating Glow Facials & Cleanups
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Men&apos;s Beard Architecture & Shaves
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  HD Bridal & Party Makeup
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-spark-gold transition-colors">
                  Gel Nail Extensions & Artistry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Salon Hours & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-semibold font-sans">
              Visit The Salon
            </h4>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-spark-gold flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} —{" "}
                  {siteConfig.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-spark-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-200">Tue – Sun: 9:30 AM – 9:00 PM</p>
                  <p className="text-neutral-500">Mon: 10:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <Phone className="w-4 h-4 text-spark-gold flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="hover:text-spark-gold transition-colors font-medium text-neutral-200"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-spark-gold hover:text-spark-goldLight transition-colors font-medium tracking-wider"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, Copyright & Agency Attribution */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 font-sans gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <a
              href={siteConfig.deliveredBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-spark-gold transition-colors inline-flex items-center"
            >
              Crafted by {siteConfig.deliveredBy.agency}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
