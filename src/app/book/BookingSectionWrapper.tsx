"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { BookingSection } from "@/components/sections/BookingSection";

export const BookingSectionWrapper: React.FC = () => {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  const category = searchParams.get("category") || "hair";
  const notes = searchParams.get("notes") || "";

  return (
    <BookingSection
      initialService={service}
      initialCategory={category}
      initialNotes={notes}
    />
  );
};
