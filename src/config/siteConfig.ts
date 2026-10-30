/**
 * SPARK Unisex Salon - Central Configuration
 * All business details, contact information, and social links are centralized here.
 * Configurable without modifying UI components.
 */

export const siteConfig = {
  name: "SPARK Unisex Salon",
  legalName: "SPARK Hair, Skin, Nails & Makeup",
  shortName: "SPARK",
  tagline: "Ignite Your Style",
  headline: "Your Style. Your Statement.",
  subheadline:
    "Discover exceptional hair, beauty, and grooming experiences at SPARK Unisex Salon.",
  editorialAbout:
    "At SPARK Unisex Salon, we believe great style is more than a look — it's an expression of confidence and individuality. Our salon offers a welcoming environment where every guest can enjoy professional beauty and grooming experiences.",
  
  // Contact & Location (Configurable)
  contact: {
    phoneDisplay: "+91 93905 60625",
    phoneTel: "+919390560625",
    whatsappNumber: "919390560625", // International format without +
    whatsappDisplay: "+91 93905 60625",
    email: "contact@sparksalon.in",
    address: {
      line1: "SPARK Unisex Salon, Main Commercial Boulevard",
      line2: "Opposite City Centre, 2nd Floor",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      pincode: "530016",
      country: "India",
    },
    googleMapsUrl: "https://maps.google.com/?q=SPARK+Unisex+Salon",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121570.82522770857!2d83.21848154999999!3d17.7385966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943138902b197%3A0x68590d676830c1e2!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    workingHours: [
      { days: "Tuesday – Sunday", hours: "9:30 AM – 9:00 PM" },
      { days: "Monday", hours: "10:00 AM – 8:00 PM" },
    ],
  },

  // Social Links
  socials: {
    instagram: "https://instagram.com/sparkunisexsalon",
    facebook: "https://facebook.com/sparkunisexsalon",
    whatsapp: "https://wa.me/919390560625",
  },

  // Client project agency credit
  deliveredBy: {
    agency: "Siyantech Global Innovations Pvt. Ltd.",
    url: "https://siyantech.com",
  },
};
