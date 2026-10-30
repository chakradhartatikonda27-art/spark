"use client";

import React, { useState, useRef, useEffect } from "react";
import { Calendar, Sparkles, ChevronDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeVideo, setActiveVideo] = useState<"walkthrough" | "exterior">("walkthrough");

  const videoSources = {
    walkthrough: {
      src: "/videos/spark-entrance-walkthrough.mp4",
      poster: "/images/posters/spark-entrance-walkthrough-poster.png",
      label: "Interior Tour",
    },
    exterior: {
      src: "/videos/spark-exterior-night.mp4",
      poster: "/images/posters/spark-exterior-night-poster.png",
      label: "Night Facade",
    },
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const switchVideo = (key: "walkthrough" | "exterior") => {
    setActiveVideo(key);
    setIsPlaying(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Background Cinematic Video with Poster Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          key={activeVideo}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={videoSources[activeVideo].poster}
          className="w-full h-full object-cover object-center scale-[1.03] transition-all duration-1000 filter brightness-[0.7] contrast-[1.05]"
        >
          <source src={videoSources[activeVideo].src} type="video/mp4" />
        </video>

        {/* Sophisticated Luxury Overlays for Maximum Readability */}
        {/* 1. Deep Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/80 pointer-events-none" />

        {/* 2. Radial Center Focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/40 to-neutral-950/90 pointer-events-none" />

        {/* 3. Subtle Warm Gold Ambient Hue */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,107,0.12),_transparent_70%)] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 sm:pt-36 sm:pb-28 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-spark-gold/40 bg-neutral-900/60 backdrop-blur-md mb-6 sm:mb-8 animate-fade-in shadow-[0_2px_15px_rgba(200,169,107,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-spark-gold" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.26em] uppercase text-spark-gold font-medium">
            BEAUTY • STYLE • CONFIDENCE
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          Your Style. <br />
          <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F5E4BE] via-[#C8A96B] to-[#E5D2A8]">
            Your Statement.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-300 font-sans font-light max-w-2xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
          {siteConfig.subheadline}
        </p>

        {/* Primary & Secondary Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            href="#booking"
            leftIcon={<Calendar className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Book Your Appointment
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#services"
            className="w-full sm:w-auto"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Trust Badges / Verification Highlights */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-3xl text-left">
          <div className="border-l border-spark-gold/40 pl-3">
            <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Experience
            </span>
            <span className="font-serif text-sm sm:text-base text-white font-medium">
              Real Salon Ambience
            </span>
          </div>

          <div className="border-l border-spark-gold/40 pl-3">
            <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Hair Partner
            </span>
            <span className="font-serif text-sm sm:text-base text-white font-medium">
              L&apos;Oréal Professionnel
            </span>
          </div>

          <div className="border-l border-spark-gold/40 pl-3">
            <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Environment
            </span>
            <span className="font-serif text-sm sm:text-base text-white font-medium">
              Welcoming Unisex
            </span>
          </div>

          <div className="border-l border-spark-gold/40 pl-3">
            <span className="block text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Standard
            </span>
            <span className="font-serif text-sm sm:text-base text-white font-medium">
              Clinical Hygiene
            </span>
          </div>
        </div>
      </div>

      {/* Hero Media Switcher & Controls */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center space-x-2 bg-neutral-950/70 backdrop-blur-md border border-white/10 p-1.5 rounded-sm">
        <button
          onClick={() => switchVideo("walkthrough")}
          className={`px-3 py-1.5 text-[10px] tracking-widest uppercase font-sans transition-colors ${
            activeVideo === "walkthrough"
              ? "bg-spark-gold text-neutral-950 font-bold"
              : "text-neutral-300 hover:text-white"
          }`}
        >
          Interior Tour
        </button>
        <button
          onClick={() => switchVideo("exterior")}
          className={`px-3 py-1.5 text-[10px] tracking-widest uppercase font-sans transition-colors ${
            activeVideo === "exterior"
              ? "bg-spark-gold text-neutral-950 font-bold"
              : "text-neutral-300 hover:text-white"
          }`}
        >
          Night Facade
        </button>

        <span className="w-[1px] h-4 bg-white/20 mx-1" />

        <button
          onClick={togglePlay}
          className="p-1.5 text-neutral-300 hover:text-white transition-colors"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-1.5 text-neutral-300 hover:text-white transition-colors"
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.28em] text-neutral-400 font-sans mb-1.5">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 text-spark-gold animate-bounce" />
      </div>
    </section>
  );
};
