export interface PackageOffer {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  originalPrice: string;
  offerPrice: string;
  savings: string;
  validity: string;
  features: string[];
  recommendedFor: string;
  category: "all" | "hair" | "grooming" | "bridal";
}

export const packagesData: PackageOffer[] = [
  {
    id: "pkg-signature-glow",
    title: "The SPARK Signature Radiance Combo",
    subtitle: "Complete hair revival paired with deep skin rejuvenation",
    tag: "Most Popular",
    originalPrice: "₹3,450",
    offerPrice: "₹2,499",
    savings: "Save 28%",
    validity: "Limited Launch Offer",
    features: [
      "Designer Haircut & Customized Blowdry Finish",
      "L'Oréal Deep Nourishing Hair Spa & Scalp Detox",
      "Brightening Oxygen De-Tan Cleanup or Fruit Glow Facial",
      "Complimentary Eyebrow Shaping & Upper Lip Care",
      "Aromatherapy Shoulder & Neck Stress Relief",
    ],
    recommendedFor: "Perfect pre-event recharge or complete monthly grooming",
    category: "all",
  },
  {
    id: "pkg-mens-executive",
    title: "Executive Gentlemen's Complete Ritual",
    subtitle: "Precision grooming crafted for the modern professional",
    tag: "Men's Choice",
    originalPrice: "₹2,100",
    offerPrice: "₹1,499",
    savings: "Save 29%",
    validity: "Weekly Privilege",
    features: [
      "Master Precision Haircut & Tapered Razor Finish",
      "Architectural Beard Sculpting or Royal Hot Towel Shave",
      "Deep-Pore Charcoal Facial Cleanup & De-tan Therapy",
      "Invigorating Head Massage with Cooling Botanical Oils",
      "Finishing Matte Texture Styling",
    ],
    recommendedFor: "Gentlemen seeking sharp, confident presentation",
    category: "grooming",
  },
  {
    id: "pkg-hair-makeover",
    title: "Couture Hair Transformation Ritual",
    subtitle: "L'Oréal Professionnel colour infusion with bond-building repair",
    tag: "Exclusive",
    originalPrice: "₹6,500",
    offerPrice: "₹4,799",
    savings: "Save 26%",
    validity: "Seasonal Special",
    features: [
      "Global Hair Colour or Dimensional Crown Balayage Highlights",
      "L'Oréal Serie Expert Molecular Bond Repair Therapy",
      "Precision Split-End Trim & Face-Framing Cut",
      "Post-Color Gloss Lock Serum & Keratin Blowout",
      "Home Care Prescription Consultation with Master Colorist",
    ],
    recommendedFor: "Complete hair colour refresh and frizz transformation",
    category: "hair",
  },
  {
    id: "pkg-bridal-luxe",
    title: "Luxe Pre-Bridal & Celebration Package",
    subtitle: "End-to-end head-to-toe pampering for your milestone moments",
    tag: "Bridal Prestige",
    originalPrice: "₹15,500",
    offerPrice: "₹11,999",
    savings: "Save 23%",
    validity: "Advance Booking Required",
    features: [
      "Diamond Radiance Luxury Facial with Gold Serum Infusion",
      "L'Oréal Mythic Oil Deep Hair Spa & Steam Hydration",
      "Full Body Rica Italian Liposoluble Waxing & Polishing",
      "Sculpted Gel Nail Extensions with Custom Bridal Nail Art",
      "Luxury Rose Petal Spa Manicure & Pedicure",
    ],
    recommendedFor: "Brides-to-be, festive celebrations, and wedding parties",
    category: "bridal",
  },
];
