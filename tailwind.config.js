/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spark: {
          bg: "#111111",
          dark: "#151515",
          darker: "#0C0C0C",
          surface: "#1C1C1C",
          ivory: "#F7F4EF",
          ivoryAlt: "#EFEAE1",
          gold: "#C8A96B",
          goldLight: "#E5D2A8",
          goldDark: "#9F8246",
          goldMuted: "rgba(200, 169, 107, 0.2)",
          textDark: "#1A1A1A",
          textMuted: "#777777",
          textLight: "#E8E6E1",
          borderDark: "rgba(255, 255, 255, 0.08)",
          borderGold: "rgba(200, 169, 107, 0.3)",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.22em",
        editorial: "0.15em",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
