"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar, Clock, MapPin } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/common/Button";
import { LiveStatusBadge } from "@/components/common/LiveStatusBadge";
import { siteConfig } from "@/config/siteConfig";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Space", href: "/space" },
    { label: "Offers", href: "/offers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* SPARK Brand Logo */}
            <Logo
              size="md"
              variant="light"
              showTagline={!isScrolled}
              className="py-1"
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 py-2 text-xs font-sans tracking-[0.18em] uppercase transition-all duration-300 ${
                      isActive
                        ? "text-spark-gold font-medium"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-spark-gold shadow-[0_0_8px_rgba(200,169,107,0.8)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <LiveStatusBadge />

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center space-x-2 text-xs text-neutral-300 hover:text-spark-gold transition-colors font-sans tracking-wider"
                aria-label={`Call salon at ${siteConfig.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-spark-gold" />
                <span className="hidden xl:inline">{siteConfig.contact.phoneDisplay}</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                href="/book"
                className="shadow-[0_4px_20px_rgba(200,169,107,0.3)] hover:shadow-[0_4px_25px_rgba(200,169,107,0.5)]"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Controls (Live badge + Book button + Hamburger) */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:hidden">
              <Button
                variant="primary"
                size="sm"
                href="/book"
                className="text-[11px] px-3 py-1.5 h-auto sm:h-9"
              >
                Book
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-spark-gold"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-neutral-950 border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-500 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Logo size="sm" variant="light" />
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-3 border-b border-white/5">
              <LiveStatusBadge showFullText={true} />
            </div>

            {/* Links */}
            <nav className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-3 text-sm font-sans tracking-[0.2em] uppercase transition-colors flex items-center justify-between border-b border-white/5 ${
                      isActive
                        ? "text-spark-gold font-semibold bg-white/5"
                        : "text-neutral-200 hover:text-spark-gold hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-spark-gold/50 text-xs">→</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-6 mt-6 border-t border-white/10 space-y-4">
            <div className="space-y-2 text-xs text-neutral-400 font-sans">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-spark-gold flex-shrink-0" />
                <span>Tue – Sun: 9:30 AM – 9:00 PM</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-spark-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.line1}, {siteConfig.contact.address.city}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                href="/book"
                onClick={handleNavClick}
                className="w-full justify-center"
              >
                Book Appointment
              </Button>

              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="w-full py-3 px-4 border border-white/15 text-center text-xs tracking-wider uppercase font-sans text-neutral-300 hover:text-white flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-spark-gold" />
                <span>Call {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
