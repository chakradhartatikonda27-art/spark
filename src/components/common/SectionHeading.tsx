import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const isCenter = align === "center";
  const isLight = theme === "light";

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-[10px] sm:text-xs font-sans tracking-[0.28em] uppercase text-spark-gold font-semibold ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-5 h-[1px] bg-spark-gold/70" />
          <span>{eyebrow}</span>
          <span className="w-5 h-[1px] bg-spark-gold/70" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.15] ${
          isLight ? "text-neutral-900" : "text-white"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed font-sans font-light ${
            isLight ? "text-neutral-600" : "text-neutral-400"
          } max-w-2xl ${isCenter ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Gold Accent Bar */}
      <div
        className={`mt-6 flex items-center gap-1.5 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="w-8 h-[1px] bg-spark-gold/40" />
        <span className="w-1.5 h-1.5 rotate-45 border border-spark-gold bg-spark-gold/30" />
        <span className="w-8 h-[1px] bg-spark-gold/40" />
      </div>
    </div>
  );
};
