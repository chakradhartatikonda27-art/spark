import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { siteConfig } from "@/config/siteConfig";

export interface BookingPayload {
  fullName: string;
  phone: string;
  category: string;
  service: string;
  stylist?: string;
  appointmentDate: string;
  timeSlot: string;
  notes?: string;
}

// Ensure bookings storage directory exists
const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

function saveBookingLocally(booking: any) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    let existing: any[] = [];
    if (fs.existsSync(BOOKINGS_FILE)) {
      const content = fs.readFileSync(BOOKINGS_FILE, "utf-8");
      existing = JSON.parse(content || "[]");
    }
    existing.unshift(booking);
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error("Local booking file write error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: BookingPayload = await req.json();

    // 1. Validation
    if (!body.fullName || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Phone validation (accepts 10 digits or with +91)
    const cleanPhone = body.phone?.replace(/[\s\-\(\)]/g, "") || "";
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        {
          error:
            "Please provide a valid 10-digit mobile number for appointment confirmation.",
        },
        { status: 400 }
      );
    }

    if (!body.category || body.category.trim() === "") {
      return NextResponse.json(
        { error: "Please select a service category." },
        { status: 400 }
      );
    }

    if (!body.service || body.service.trim() === "") {
      return NextResponse.json(
        { error: "Please choose your desired salon service." },
        { status: 400 }
      );
    }

    if (!body.appointmentDate) {
      return NextResponse.json(
        { error: "Please choose your preferred appointment date." },
        { status: 400 }
      );
    }

    // Prevent dates in the past
    const selectedDate = new Date(body.appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(selectedDate.getTime()) || selectedDate < today) {
      return NextResponse.json(
        { error: "Appointment date cannot be in the past." },
        { status: 400 }
      );
    }

    if (!body.timeSlot || body.timeSlot.trim() === "") {
      return NextResponse.json(
        { error: "Please select a convenient time slot." },
        { status: 400 }
      );
    }

    // 2. Generate Reference Code
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const dateStamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const bookingId = `SPARK-REQ-${dateStamp}-${randomSuffix}`;

    const record = {
      id: bookingId,
      status: "REQUEST_RECEIVED",
      receivedAt: new Date().toISOString(),
      customer: {
        name: body.fullName.trim(),
        phone: cleanPhone,
      },
      appointment: {
        category: body.category,
        service: body.service,
        stylist: body.stylist || "Any Available Master Stylist",
        date: body.appointmentDate,
        timeSlot: body.timeSlot,
        notes: body.notes?.trim() || "None",
      },
    };

    saveBookingLocally(record);

    // 3. Construct WhatsApp Enquiry URL
    const waText = [
      `*New Appointment Request — SPARK Unisex Salon*`,
      `*Request ID:* ${bookingId}`,
      `*Guest Name:* ${record.customer.name}`,
      `*Mobile:* ${record.customer.phone}`,
      `*Category:* ${record.appointment.category}`,
      `*Service:* ${record.appointment.service}`,
      `*Preferred Stylist:* ${record.appointment.stylist}`,
      `*Date:* ${record.appointment.date}`,
      `*Time:* ${record.appointment.timeSlot}`,
      record.appointment.notes !== "None"
        ? `*Notes:* ${record.appointment.notes}`
        : null,
      ``,
      `_I have submitted this request on the SPARK website. Please confirm availability and schedule my booking._`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      waText
    )}`;

    return NextResponse.json({
      success: true,
      bookingId,
      status:
        "Your appointment request has been received. The salon will contact you to confirm your booking.",
      whatsappUrl,
      bookingDetails: {
        bookingId,
        guestName: record.customer.name,
        phone: record.customer.phone,
        service: record.appointment.service,
        date: record.appointment.date,
        timeSlot: record.appointment.timeSlot,
      },
    });
  } catch (error: any) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "Unable to process appointment request. Please try again or book directly via WhatsApp." },
      { status: 500 }
    );
  }
}
