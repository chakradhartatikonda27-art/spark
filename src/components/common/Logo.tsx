import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "gold";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  iconOnly = false,
}) => {
  const dimensions = {
    sm: {
      full: { width: 120, height: 36, class: "h-9 w-auto" },
      icon: { width: 36, height: 36, class: "h-9 w-9" },
    },
    md: {
      full: { width: 160, height: 48, class: "h-11 sm:h-12 w-auto" },
      icon: { width: 44, height: 44, class: "h-11 w-11" },
    },
    lg: {
      full: { width: 210, height: 63, class: "h-14 sm:h-16 w-auto" },
      icon: { width: 56, height: 56, class: "h-14 w-14" },
    },
  }[size];

  if (iconOnly) {
    return (
      <Link
        href="#home"
        className={`inline-flex items-center group select-none transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label="SPARK Unisex Salon - Home"
      >
        <Image
          src="/images/spark-icon.png"
          alt="SPARK Unisex Salon Emblem"
          width={dimensions.icon.width}
          height={dimensions.icon.height}
          priority
          className={`${dimensions.icon.class} object-contain drop-shadow-[0_2px_10px_rgba(200,169,107,0.35)]`}
        />
      </Link>
    );
  }

  return (
    <Link
      href="#home"
      className={`inline-flex items-center group select-none transition-all duration-300 hover:opacity-95 ${className}`}
      aria-label="SPARK Unisex Salon - Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/images/spark-logo.png"
          alt="SPARK Unisex Salon - Hair • Skin • Nails • Makeup"
          width={dimensions.full.width}
          height={dimensions.full.height}
          priority
          className={`${dimensions.full.class} object-contain drop-shadow-[0_2px_12px_rgba(200,169,107,0.25)] transition-transform duration-500 group-hover:scale-[1.02]`}
        />
      </div>
    </Link>
  );
};
