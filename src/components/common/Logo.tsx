import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "gold";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "light",
  showTagline = true,
  size = "md",
}) => {
  const isDark = variant === "dark";
  const isGold = variant === "gold";

  const textColor = isDark
    ? "text-neutral-900"
    : isGold
    ? "text-spark-gold"
    : "text-white";

  const subColor = isDark
    ? "text-neutral-600"
    : "text-neutral-400";

  const goldAccent = "#C8A96B";

  const sizeClasses = {
    sm: {
      mark: "w-6 h-6",
      text: "text-lg tracking-[0.25em]",
      sub: "text-[8px] tracking-[0.2em]",
      gap: "gap-2",
    },
    md: {
      mark: "w-8 h-8",
      text: "text-xl sm:text-2xl tracking-[0.28em]",
      sub: "text-[9px] sm:text-[10px] tracking-[0.24em]",
      gap: "gap-3",
    },
    lg: {
      mark: "w-11 h-11",
      text: "text-3xl sm:text-4xl tracking-[0.32em]",
      sub: "text-[11px] sm:text-[12px] tracking-[0.28em]",
      gap: "gap-4",
    },
  }[size];

  return (
    <Link
      href="#home"
      className={`inline-flex items-center ${sizeClasses.gap} group select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="SPARK Unisex Salon - Home"
    >
      {/* Precision Vector SPARK Emblem */}
      <div className={`relative flex-shrink-0 ${sizeClasses.mark} flex items-center justify-center`}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(200,169,107,0.3)] transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="sparkGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5E4BE" />
              <stop offset="45%" stopColor="#C8A96B" />
              <stop offset="100%" stopColor="#96773B" />
            </linearGradient>
            <linearGradient id="sparkFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8A96B" />
              <stop offset="60%" stopColor="#E5D2A8" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Left Bracket */}
          <path
            d="M14 10 H8 V50 H14"
            stroke="url(#sparkGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="square"
          />

          {/* Right Bracket */}
          <path
            d="M46 10 H52 V50 H46"
            stroke="url(#sparkGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="square"
          />

          {/* Stylized Luxury Flame / Spark Icon (from real salon signage) */}
          <path
            d="M30 11C30 11 25.5 18 25.5 24C25.5 26.5 26.4 28.8 28 30.5C25.2 31.8 23 34.8 23 38.5C23 44 26.8 48 31 48C35.5 48 39 44.5 39 39.5C39 33.5 33.5 28.5 33.5 28.5C35.8 27.2 37.2 24.5 37.2 21.5C37.2 16.5 30 11 30 11Z"
            fill="url(#sparkFlameGrad)"
          />
          <path
            d="M30 33C29 35 28 37 28 39C28 41.2 29.5 43 31 43C32.8 43 34 41.5 34 39.5C34 37 32 34.5 30 33Z"
            fill="#FFF"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Brand Text Stack */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-semibold uppercase leading-none ${sizeClasses.text} ${textColor}`}
        >
          SPARK
        </span>
        {showTagline && (
          <span
            className={`font-sans font-medium uppercase mt-1 leading-tight ${sizeClasses.sub} ${subColor}`}
          >
            HAIR • SKIN • NAILS • MAKEUP
          </span>
        )}
      </div>
    </Link>
  );
};
