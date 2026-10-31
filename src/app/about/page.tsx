import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyChooseSparkSection } from "@/components/sections/WhyChooseSparkSection";
import { Sparkles, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: "About Us & Founder Story | SPARK Unisex Salon Visakhapatnam",
  description:
    "Discover the vision behind SPARK Unisex Salon. Founded by Srinivas Uppala, SPARK brings world-class hair, skin, nails, and grooming artistry to Visakhapatnam in partnership with L'Oréal Professionnel Paris.",
};

const MASTER_STYLISTS = [
  {
    name: "Suresh Uppala",
    role: "Creative Director & Master Stylist",
    experience: "12+ Years Experience",
    specialties: ["Couture Hair Architecture", "Precision Scissor Work", "Texture Reformation"],
    bio: "Trained at premier academies across Mumbai and London, Suresh specializes in custom haircutting that flatters facial geometry and hair density.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Senior Colorist & Balayage Specialist",
    experience: "9+ Years Experience",
    specialties: ["French Balayage", "Sombré & Babylights", "Corrective Color"],
    bio: "Certified by L'Oréal Professionnel Paris, Priya is celebrated for seamless dimensional blends that grow out gracefully without harsh demarcation lines.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rahul Varma",
    role: "Executive Grooming & Beard Architect",
    experience: "8+ Years Experience",
    specialties: ["Low Fade & Taper Precision", "Hot Towel Shave Ritual", "Beard Sculpting"],
    bio: "Rahul blends traditional barbershop rituals with contemporary styling, creating sharp, commanding looks for modern gentlemen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ananya Reddy",
    role: "Advanced Skin Science & Bridal Lead",
    experience: "10+ Years Experience",
    specialties: ["Hydra Glow Protocols", "HD Bridal Artistry", "Collagen Infusion"],
    bio: "An expert in holistic dermaceuticals, Ananya customizes every facial treatment to active skin biomarkers, delivering long-lasting radiance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

const SALON_STANDARDS = [
  {
    title: "Hospital-Grade Autoclave Sterilization",
    description: "Every scissor, clipper, and metal tool is cleansed through medical-grade sterilization pouches before touching your skin.",
  },
  {
    title: "100% Sealed Single-Use Client Kits",
    description: "Eco-friendly disposable capes, towels, spatulas, and nail files ensure absolute hygiene for every guest.",
  },
  {
    title: "Official L'Oréal Professionnel Paris Partner",
    description: "We use exclusively authentic, unadulterated salon formulations directly sourced from global laboratory partners.",
  },
  {
    title: "In-Depth Consultation Before Scissors Meet Hair",
    description: "Every service begins with a 10-minute diagnostic session assessing hair elasticity, scalp health, lifestyle, and aesthetic goals.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-spark-bg text-neutral-100 relative">
      <Navbar />

      {/* Page Header Banner */}
      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-spark-bg border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.12),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
            <span className="w-5 h-[1px] bg-current inline-block"></span>
            ABOUT SPARK
            <span className="w-5 h-[1px] bg-current inline-block"></span>
          </p>

          <h1 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-white">
            Where Craft Meets <em className="italic text-spark-gold">Hospitality</em>
          </h1>

          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Founded on the conviction that personal style is the ultimate statement of self, SPARK is Visakhapatnam&apos;s premier destination for contemporary hair, skin, nails, and grooming.
          </p>

          {/* Breadcrumbs */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-neutral-400">
            <Link href="/" className="hover:text-spark-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-spark-gold">About Us</span>
          </div>
        </div>
      </section>

      {/* Section 03: The Vision Behind SPARK (Founder Story matching Screenshot 1) */}
      <FounderSection />

      {/* Philosophy & Unisex Inclusive Environment */}
      <section className="py-24 bg-neutral-950 text-white relative border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
                <span className="w-5 h-[1px] bg-current inline-block"></span>
                OUR PHILOSOPHY
              </p>

              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal leading-tight text-white">
                An Elevated Sanctuary for <em className="italic text-spark-gold">Every Guest</em>
              </h2>

              <p className="mt-6 text-neutral-300 text-base leading-relaxed">
                We engineered SPARK as an intentional departure from loud, rushed salon visits. From our acoustic-damped treatment alcoves to warm champagne-gold lighting, every detail is calibrated to slow down time.
              </p>

              <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                Whether you visit us for a subtle maintenance trim, an intricate multi-tonal balayage, a rejuvenating deep-tissue hair spa, or executive grooming, our team approaches every service as an individual bespoke commission.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <b className="font-serif text-3xl text-spark-gold block">100%</b>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 mt-1 block">
                    Authentic Formulations
                  </span>
                </div>
                <div>
                  <b className="font-serif text-3xl text-spark-gold block">4.9 ★</b>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 mt-1 block">
                    Guest Satisfaction Score
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                  alt="SPARK Salon Interior Styling Floor"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                  alt="SPARK Salon Luxury Treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Master Stylist Collective */}
      <section className="py-24 bg-spark-bg text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
              <span className="w-5 h-[1px] bg-current inline-block"></span>
              THE ARTISTS
              <span className="w-5 h-[1px] bg-current inline-block"></span>
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal text-white">
              Meet Our <em className="italic text-spark-gold">Master Collective</em>
            </h2>

            <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              Every stylist at SPARK undergoes continuous advanced certification with international color and cutting academies to bring world-class trends to life.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MASTER_STYLISTS.map((stylist, idx) => (
              <div
                key={idx}
                className="group bg-neutral-900/60 border border-white/10 rounded-xl overflow-hidden hover:border-spark-gold transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10.5px] font-mono tracking-wider px-2.5 py-1 bg-black/75 backdrop-blur-md rounded text-spark-gold border border-spark-gold/30">
                    {stylist.experience}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-normal text-white">
                      {stylist.name}
                    </h3>
                    <p className="text-xs font-sans tracking-wider text-spark-gold mt-1 uppercase">
                      {stylist.role}
                    </p>
                    <p className="text-xs text-neutral-400 mt-3 leading-relaxed">
                      {stylist.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                      Signature Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stylist.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10.5px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Why Choose SPARK (Trust & Standards matching Screenshot 3) */}
      <WhyChooseSparkSection />

      {/* Hygiene & Salon Standards Checklist */}
      <section className="py-24 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-spark-gold">
              <span className="w-5 h-[1px] bg-current inline-block"></span>
              GUEST SAFETY & HYGIENE
              <span className="w-5 h-[1px] bg-current inline-block"></span>
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal text-white">
              Uncompromised <em className="italic text-spark-gold">Clinical Protocols</em>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {SALON_STANDARDS.map((std, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-neutral-900/40 flex items-start space-x-4"
              >
                <CheckCircle2 className="w-6 h-6 text-spark-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-normal text-white">
                    {std.title}
                  </h4>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Experience the SPARK Difference
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
            Book your personalized consultation today and let our certified artists create your signature look.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-gradient-to-r from-spark-goldLight via-spark-gold to-spark-goldDark text-neutral-950 font-semibold text-sm hover:scale-105 transition-transform shadow-[0_10px_25px_-5px_rgba(200,169,107,0.4)]"
            >
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-medium text-sm hover:border-spark-gold hover:text-spark-gold transition-colors"
            >
              Explore Services Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
