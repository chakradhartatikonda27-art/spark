export interface ServiceItem {
  id: string;
  name: string;
  category: "hair" | "beauty" | "grooming" | "premium";
  description: string;
  startingPrice: string;
  duration: string;
  highlight?: string;
}

export interface ServiceCategory {
  id: "hair" | "beauty" | "grooming" | "premium";
  name: string;
  tagline: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair",
    name: "Hair Services",
    tagline: "Couture Cuts & Master Colouring",
    description:
      "Transformative styling, precision cutting, and restorative botanical hair therapies using authentic L'Oréal Professionnel formulations.",
  },
  {
    id: "beauty",
    name: "Beauty & Skin",
    tagline: "Radiant Skin Rejuvenation",
    description:
      "Bespoke facials, organic peel therapies, and gentle precision depilatory care designed for every skin type.",
  },
  {
    id: "grooming",
    name: "Men's Grooming",
    tagline: "Sharp Architecture & Classic Care",
    description:
      "Contemporary masculine haircuts, meticulous beard sculpts, and therapeutic hot-towel relaxation rituals.",
  },
  {
    id: "premium",
    name: "Makeup & Nails",
    tagline: "Artistry for Life's Moments",
    description:
      "High-definition bridal couture, red-carpet occasion makeup, and sculpted gel nail aesthetics.",
  },
];

export const servicesData: ServiceItem[] = [
  // Hair Services
  {
    id: "hair-cut-styling",
    category: "hair",
    name: "Designer Haircut & Blowdry",
    description:
      "Face-profile analysis, customized precision cut, hair wash with tailored shampoo ritual, and luxury blowout finish.",
    startingPrice: "₹450",
    duration: "45 mins",
    highlight: "Signature",
  },
  {
    id: "hair-colouring",
    category: "hair",
    name: "Global Hair Colouring",
    description:
      "Ammonia-free rich chromatic tones with deep shine infusion and complete grey coverage using L'Oréal Professionnel.",
    startingPrice: "₹2,200",
    duration: "90 mins",
  },
  {
    id: "hair-highlights",
    category: "hair",
    name: "Balayage, Ombré & Foil Highlights",
    description:
      "Dimensional sun-kissed streaks, modern face-framing babylights, and artistic seamless blends.",
    startingPrice: "₹3,500",
    duration: "120 mins",
    highlight: "Popular",
  },
  {
    id: "hair-spa",
    category: "hair",
    name: "L'Oréal Deep Nourishing Hair Spa",
    description:
      "Intense moisture bath, scalp detox massage, micro-mist hydration therapy, and smoothing serum sealant.",
    startingPrice: "₹1,200",
    duration: "60 mins",
  },
  {
    id: "hair-keratin",
    category: "hair",
    name: "Keratin Protein & Hair Botox",
    description:
      "Formaldehyde-free frizz control, deep amino-acid bonding, and long-lasting glass-like silkiness.",
    startingPrice: "₹4,500",
    duration: "150 mins",
    highlight: "Trending",
  },

  // Beauty & Skin
  {
    id: "beauty-hydra-facial",
    category: "beauty",
    name: "Deep Hydrating Glow Facial",
    description:
      "Triple cleanse, sonic pore purification, active antioxidant serum infusion, and illuminating alginate mask.",
    startingPrice: "₹1,800",
    duration: "60 mins",
    highlight: "Signature",
  },
  {
    id: "beauty-detan-cleanup",
    category: "beauty",
    name: "Oxygenating De-Tan Cleanup",
    description:
      "Instant sun-damage reversal, gentle dead-cell exfoliation, and vitamin C brightening concentrate.",
    startingPrice: "₹850",
    duration: "40 mins",
  },
  {
    id: "beauty-threading",
    category: "beauty",
    name: "Precision Eyebrow & Facial Threading",
    description:
      "Clean architectural brow shaping and gentle facial threading with organic antibacterial thread.",
    startingPrice: "₹80",
    duration: "15 mins",
  },
  {
    id: "beauty-waxing",
    category: "beauty",
    name: "Luxury Rica Brazilian & White Chocolate Waxing",
    description:
      "Colophony-free Italian liposoluble wax providing painless, ultra-smooth depilation for delicate skin.",
    startingPrice: "₹600",
    duration: "45 mins",
  },

  // Grooming Services
  {
    id: "grooming-haircut",
    category: "grooming",
    name: "Men's Precision Cut & Style",
    description:
      "Custom textured cut, scissor work, razor nape finish, invigorating scalp wash, and matte pomade styling.",
    startingPrice: "₹350",
    duration: "35 mins",
    highlight: "Everyday Luxe",
  },
  {
    id: "grooming-beard",
    category: "grooming",
    name: "Beard Architecture & Razor Fade",
    description:
      "Sharp line definition, length tapering, hot towel treatment, conditioning beard oil, and balm shaping.",
    startingPrice: "₹250",
    duration: "25 mins",
  },
  {
    id: "grooming-shave",
    category: "grooming",
    name: "Royal Hot Towel Shave",
    description:
      "Pre-shave essential oil prep, steaming towel wrap, close straight-razor shave, and cooling aloe compress.",
    startingPrice: "₹300",
    duration: "30 mins",
  },
  {
    id: "grooming-package",
    category: "grooming",
    name: "The Executive Grooming Ritual",
    description:
      "Precision haircut + beard sculpting + express charcoal de-tan facial + relaxing shoulder & neck massage.",
    startingPrice: "₹1,450",
    duration: "75 mins",
    highlight: "Best Value",
  },

  // Premium Beauty / Makeup & Nails
  {
    id: "premium-bridal",
    category: "premium",
    name: "Luxury HD Bridal Couture Makeup",
    description:
      "Comprehensive consultation, high-definition skin base, waterproof eye artistry, saree draping, and floral hair styling.",
    startingPrice: "₹12,000",
    duration: "180 mins",
    highlight: "Bespoke",
  },
  {
    id: "premium-party-makeup",
    category: "premium",
    name: "Glamour Occasion & Party Makeup",
    description:
      "Luminous camera-ready complexion, custom lashes, sculpted contouring, and long-lasting setting spray.",
    startingPrice: "₹3,500",
    duration: "90 mins",
  },
  {
    id: "premium-nail-extensions",
    category: "premium",
    name: "Sculpted Gel Nail Extensions",
    description:
      "Custom tip application, high-gloss builder gel overlay, cuticle care, and chip-free chrome or matte finish.",
    startingPrice: "₹1,800",
    duration: "90 mins",
    highlight: "Popular",
  },
  {
    id: "premium-nail-art",
    category: "premium",
    name: "Bespoke Nail Art & Gel Polish",
    description:
      "French ombre, metallic foil accents, micro-crystal embellishments, and nourishing botanical cuticle oil.",
    startingPrice: "₹800",
    duration: "45 mins",
  },
];
