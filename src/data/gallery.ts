export interface GalleryItem {
  id: string;
  title: string;
  category: "ambience" | "reception" | "haircare" | "entrance";
  type: "video" | "image";
  src: string;
  poster?: string;
  description: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-exterior-night",
    title: "Illuminated Facade & Grand Opening",
    category: "entrance",
    type: "video",
    src: "/videos/spark-exterior-night.mp4",
    poster: "/images/posters/spark-exterior-night-poster.png",
    description:
      "Night exterior view of SPARK Unisex Salon commercial building with illuminated rooftop signage and Grand Opening welcome banner.",
    featured: true,
  },
  {
    id: "gal-walkthrough",
    title: "Arched Entry & Salon Walkthrough",
    category: "ambience",
    type: "video",
    src: "/videos/spark-entrance-walkthrough.mp4",
    poster: "/images/posters/spark-entrance-walkthrough-poster.png",
    description:
      "Step past the SPARK branded media wall and burgundy arched doorway into the warm amber salon lounge and temple alcove.",
    featured: true,
  },
  {
    id: "gal-reception",
    title: "Champagne Gold Reception & Emblem",
    category: "reception",
    type: "video",
    src: "/videos/spark-reception-gold.mp4",
    poster: "/images/posters/spark-reception-gold-poster.png",
    description:
      "Signature 3D gold SPARK logo on gloss black acrylic with metallic champagne gold curved desk and fresh botanical accents.",
    featured: true,
  },
  {
    id: "gal-hero-billboard",
    title: "Your Style, Your Statement Monumental Billboard",
    category: "entrance",
    type: "image",
    src: "/images/spark-hero-billboard.jpg",
    description:
      "High-fashion illuminated entrance billboard at SPARK Salon featuring the official tagline 'Ignite Your Style' and editorial campaign imagery.",
    featured: true,
  },
  {
    id: "gal-lounge",
    title: "Organic Tree Pillars & Waiting Lounge",
    category: "ambience",
    type: "video",
    src: "/videos/spark-lounge-interior.mp4",
    poster: "/images/posters/spark-lounge-interior-poster.png",
    description:
      "Curved plush seating surrounded by sculptural white organic tree columns, warm cove lighting, and luxury retail shelves.",
  },
  {
    id: "gal-loreal",
    title: "L'Oréal Professionnel Paris Showcase",
    category: "haircare",
    type: "video",
    src: "/videos/spark-loreal-showcase.mp4",
    poster: "/images/posters/spark-loreal-showcase-poster.png",
    description:
      "Dedicated backlit retail display presenting authentic L'Oréal Professionnel Serie Expert hair treatments, serums, and masks.",
  },
  {
    id: "gal-styling",
    title: "Styling Stations & Digital Front Desk",
    category: "reception",
    type: "video",
    src: "/videos/spark-styling-consultation.mp4",
    poster: "/images/posters/spark-styling-consultation-poster.png",
    description:
      "Professional salon workflow, guest appointment coordination, and contemporary interior aesthetics.",
  },
  {
    id: "gal-billboard-reveal",
    title: "Brand Campaign & Entrance Presentation",
    category: "entrance",
    type: "video",
    src: "/videos/spark-billboard-reveal.mp4",
    poster: "/images/posters/spark-billboard-reveal-poster.png",
    description:
      "Architectural view of the illuminated entrance showcasing 'YOUR STYLE, YOUR STATEMENT' and the salon aesthetic.",
  },
];
