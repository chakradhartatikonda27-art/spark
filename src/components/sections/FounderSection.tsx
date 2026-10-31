"use client";

import React from "react";
import Link from "next/link";
import { User } from "lucide-react";

export const FounderSection: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#faf7f2] text-[#1d1d1d] relative overflow-hidden">
      {/* Background Watermark 03 */}
      <span className="absolute top-8 right-12 font-serif text-[7rem] sm:text-[11rem] leading-none text-black/[0.04] select-none pointer-events-none">
        03
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo Placeholder with Gold Double-Border */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden bg-gradient-to-br from-[#1b1b1b] to-[#0d0d0d] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
              {/* Inner Gold Inset Border */}
              <div className="absolute inset-[14px] border border-[#c9a45c]/50 rounded-[3px] pointer-events-none" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/55 text-xs tracking-[0.2em] uppercase text-center p-6">
                <User className="w-12 h-12 text-[#c9a45c] opacity-85" />
                <span>FOUNDER PHOTO<br />TO BE ADDED</span>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Narrative */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#9a7634]">
              <span className="w-5 h-[1px] bg-current inline-block"></span>
              OUR STORY
            </p>

            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-[#1d1d1d]">
              The Vision Behind<br />
              <em className="italic text-[#9a7634]">SPARK</em>
            </h2>

            <p className="mt-5 text-[#6f6a63] text-base leading-relaxed max-w-xl">
              The founder&apos;s story will be shared here: how SPARK began, the vision behind it, and the promise made to every client.
            </p>

            <p className="mt-3 text-sm text-[#6f6a63] italic">
              Details to be provided by the salon.
            </p>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-black/10">
              <div>
                <b className="block font-serif text-2xl font-normal text-[#1d1d1d]">
                  Srinivas Uppala
                </b>
                <small className="block font-sans text-xs font-semibold tracking-[0.24em] uppercase text-[#9a7634] mt-1">
                  FOUNDER
                </small>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7634] hover:text-[#1d1d1d] transition-colors"
              >
                <span>Read Full Story &amp; Philosophy</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
