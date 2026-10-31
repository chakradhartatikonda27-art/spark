import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://sparksalon.in"),
  title: `${siteConfig.name} | Luxury Hair, Skin, Nails & Makeup Studio`,
  description:
    "Discover exceptional hair, beauty, and grooming experiences at SPARK Unisex Salon. Official L'Oréal Professionnel Paris partner with certified master stylists.",
  keywords: [
    "SPARK Unisex Salon",
    "Luxury Salon",
    "Hair Styling",
    "Balayage Hair Color",
    "Hair Spa L'Oreal",
    "Hydra Facial",
    "Men's Grooming",
    "Bridal Makeup",
    "Gel Nails",
    "Visakhapatnam Salon",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.deliveredBy.agency,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: `${siteConfig.name} — Your Style. Your Statement.`,
    description:
      "Where professional beauty, modern grooming, and personal style come together. Certified stylists and authentic L'Oréal treatments.",
    url: "https://sparksalon.in",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/spark-hero-billboard.jpg",
        width: 1200,
        height: 630,
        alt: "SPARK Unisex Salon - Ignite Your Style",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Your Style. Your Statement.`,
    description:
      "Where professional beauty, modern grooming, and personal style come together.",
    images: ["/images/spark-hero-billboard.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    logo: "https://sparksalon.in/images/spark-logo.png",
    image: [
      "https://sparksalon.in/images/spark-logo.png",
      "https://sparksalon.in/images/spark-hero-billboard.jpg",
      "https://sparksalon.in/images/posters/spark-exterior-night-poster.png",
    ],
    "@id": "https://sparksalon.in",
    url: "https://sparksalon.in",
    telephone: siteConfig.contact.phoneTel,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.7289,
      longitude: 83.3039,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "10:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-spark-bg text-neutral-100 font-sans antialiased selection:bg-spark-gold selection:text-neutral-950 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
