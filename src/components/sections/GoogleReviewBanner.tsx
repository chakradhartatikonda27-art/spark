import React from "react";
import { Star, MapPin, ExternalLink, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const GoogleReviewBanner: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-950 border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-spark-gold/30 p-8 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          {/* Subtle Decorative Star Accent */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-spark-gold/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-1.5 text-spark-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-spark-gold" />
              ))}
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-white ml-2">
                Real Client Voices
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Loved Your SPARK Experience?
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl leading-relaxed">
              We hold ourselves to authentic client satisfaction. If you visited
              our salon recently, help others discover exceptional grooming and
              haircare by sharing your real experience and photos on Google Maps.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs text-neutral-400 font-sans">
              <span className="inline-flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-spark-gold" />
                <span>Verified Google Business Profile</span>
              </span>
              <span>•</span>
              <span className="text-spark-gold">#SparkUnisexSalon</span>
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gradient-to-r from-[#DFCA95] via-[#C8A96B] to-[#B08F4E] text-neutral-950 font-sans text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 transition-transform hover:scale-105 shadow-[0_4px_20px_rgba(200,169,107,0.3)]"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
