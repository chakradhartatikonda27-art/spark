"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { serviceCategories, servicesData } from "@/data/services";
import { siteConfig } from "@/config/siteConfig";

interface BookingSectionProps {
  initialService?: string;
  initialCategory?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialService = "",
  initialCategory = "hair",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    category: initialCategory,
    service: initialService,
    stylist: "Any Available Master Stylist",
    appointmentDate: "",
    timeSlot: "11:00 AM - 12:00 PM",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<any | null>(null);

  // Sync prop changes
  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Set min-date to today
  const today = new Date().toISOString().split("T")[0];

  const filteredServices = servicesData.filter(
    (s) => s.category === formData.category
  );

  const timeSlots = [
    "09:30 AM - 10:30 AM",
    "10:30 AM - 11:30 AM",
    "11:30 AM - 12:30 PM",
    "12:30 PM - 01:30 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:30 PM",
  ];

  const stylistOptions = [
    "Any Available Master Stylist",
    "Senior Hair Director",
    "Creative Color Specialist",
    "Skin Care & Facial Therapist",
    "Master Barber & Grooming Artist",
    "Bridal & HD Makeup Artist",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      // If category changes, reset chosen service if it's not valid for that category
      if (name === "category") {
        const servicesForNewCat = servicesData.filter((s) => s.category === value);
        return {
          ...prev,
          category: value,
          service: servicesForNewCat[0]?.name || "",
        };
      }
      return { ...prev, [name]: value };
    });
    if (errorMessage) setErrorMessage(null);
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return false;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage(
        "Please enter a valid 10-digit mobile number for appointment verification."
      );
      return false;
    }

    if (!formData.service) {
      setErrorMessage("Please select your desired salon service.");
      return false;
    }

    if (!formData.appointmentDate) {
      setErrorMessage("Please choose your preferred appointment date.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit booking request.");
      }

      setSuccessResponse(data);
    } catch (err: any) {
      console.error("Booking submission error:", err);
      setErrorMessage(
        err.message ||
          "There was an issue processing your request. Please try again or reach out directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccessResponse(null);
    setFormData({
      fullName: "",
      phone: "",
      category: "hair",
      service: servicesData[0]?.name || "",
      stylist: "Any Available Master Stylist",
      appointmentDate: "",
      timeSlot: "11:00 AM - 12:00 PM",
      notes: "",
    });
  };

  // Direct WhatsApp booking fallback URL with current form values
  const buildCurrentWaUrl = () => {
    const waText = [
      `*Appointment Request — SPARK Unisex Salon*`,
      `*Guest Name:* ${formData.fullName.trim() || "Guest"}`,
      `*Mobile:* ${formData.phone.trim() || "Not provided"}`,
      `*Service:* ${formData.service || "General Inquiry"}`,
      `*Date:* ${formData.appointmentDate || "Flexible"}`,
      `*Time Slot:* ${formData.timeSlot}`,
      formData.notes ? `*Notes:* ${formData.notes}` : null,
      ``,
      `_Please confirm availability and appointment slot._`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-spark-dark relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-spark-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reserve Your Experience"
          title="Book Your Appointment"
          subtitle="Select your personalized services, preferred timing, and stylist. Our concierge will contact you promptly to finalize your schedule."
        />

        <div className="mt-14 bg-neutral-900/80 border border-white/10 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-md relative">
          {/* Success Confirmation State */}
          {successResponse ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] font-sans font-semibold text-spark-gold block mb-1">
                  Request Reference: {successResponse.bookingId}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Appointment Request Received
                </h3>
                <p className="mt-3 text-sm text-neutral-300 font-sans max-w-lg mx-auto leading-relaxed">
                  {successResponse.status}
                </p>
              </div>

              {/* Summary of Request */}
              <div className="bg-black/40 border border-white/5 p-4 rounded text-left max-w-md mx-auto text-xs space-y-2 font-sans">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Guest Name:</span>
                  <span className="text-white font-medium">
                    {successResponse.bookingDetails?.guestName}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Contact Number:</span>
                  <span className="text-white font-medium">
                    {successResponse.bookingDetails?.phone}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Selected Service:</span>
                  <span className="text-spark-gold font-medium">
                    {successResponse.bookingDetails?.service}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Date & Time:</span>
                  <span className="text-white font-medium">
                    {successResponse.bookingDetails?.date} ({successResponse.bookingDetails?.timeSlot})
                  </span>
                </div>
              </div>

              {/* WhatsApp Confirmation Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={successResponse.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                <Button variant="ghost" size="md" onClick={handleReset}>
                  Book Another Service
                </Button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Banner */}
              {errorMessage && (
                <div className="p-4 bg-red-950/60 border border-red-500/40 rounded flex items-start space-x-3 text-red-200 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Full Name <span className="text-spark-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      required
                      className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    />
                    <User className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Mobile Number <span className="text-spark-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit Mobile Number"
                      required
                      className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Service Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Service Category <span className="text-spark-gold">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    {serviceCategories.map((c) => (
                      <option key={c.id} value={c.id} className="bg-neutral-900 text-white">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Preferred Service <span className="text-spark-gold">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="" disabled className="bg-neutral-900 text-neutral-500">
                      Select Service
                    </option>
                    {filteredServices.map((s) => (
                      <option key={s.id} value={s.name} className="bg-neutral-900 text-white">
                        {s.name} — from {s.startingPrice}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date, Time & Stylist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Appointment Date <span className="text-spark-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="appointmentDate"
                      min={today}
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Preferred Time Slot <span className="text-spark-gold">*</span>
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-neutral-900 text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                    Preferred Stylist (Optional)
                  </label>
                  <select
                    name="stylist"
                    value={formData.stylist}
                    onChange={handleChange}
                    className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    {stylistOptions.map((st) => (
                      <option key={st} value={st} className="bg-neutral-900 text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-wider text-neutral-300 font-medium mb-2">
                  Special Notes / Hair Length or Texture (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Inquiring about balayage on dark hair, or sensitive skin for waxing..."
                  className="w-full bg-neutral-950/70 border border-white/10 focus:border-spark-gold px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Actions & WhatsApp Instant Fallback */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Submit Appointment Request
                </Button>

                <div className="flex items-center space-x-2 text-xs text-neutral-400 font-sans">
                  <span>or</span>
                  <a
                    href={buildCurrentWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium tracking-wide"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Book Directly via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 font-sans flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-spark-gold flex-shrink-0" />
                <span>
                  Your privacy is respected. We never share customer contact details.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
