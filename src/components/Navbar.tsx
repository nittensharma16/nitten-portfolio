"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCurrency, Currency } from "@/context/CurrencyContext";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currencies: Currency[] = ["USD", "AED", "INR"];

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-[#222226]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-sm tracking-tight font-medium hover:text-[#FF4D1F] transition-colors"
          >
            <div className="w-7 h-7 rounded border border-[#222226] bg-[#141416] flex items-center justify-center font-mono text-xs text-[#FF4D1F] group-hover:border-[#FF4D1F] transition-colors">
              N/1
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold tracking-wider text-[#F2F2F0] text-sm uppercase">
                Nitten Sharma
              </span>
              <span className="font-mono text-[9px] text-[#8A8A8F] tracking-widest hidden sm:inline">
                AI · WEB · AUTOMATION
              </span>
            </div>
          </Link>

          {/* Availability Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#141416]/80 border border-[#222226] font-mono text-[11px] text-[#8A8A8F]">
            <span className="w-2 h-2 rounded-full bg-[#FF4D1F] animate-status-pulse shadow-[0_0_8px_#FF4D1F]" />
            <span>Available for projects</span>
            <span className="text-[#8A8A8F]/40">|</span>
            <span className="text-[#F2F2F0]/80">Q4/Q1 Booking</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-mono text-[#8A8A8F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F2F2F0] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF4D1F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions & Currency Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Subtle Currency Switcher */}
            <div className="flex items-center border border-[#222226] rounded-md bg-[#141416]/60 p-0.5 font-mono text-[10px]">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-2 py-0.5 rounded transition-all ${
                    currency === c
                      ? "bg-[#222226] text-[#F2F2F0] font-semibold"
                      : "text-[#8A8A8F] hover:text-[#F2F2F0]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#FF4D1F] bg-[#FF4D1F] text-white font-mono text-xs tracking-wider uppercase font-medium hover:bg-[#e03e12] hover:shadow-[0_0_20px_rgba(255,77,31,0.4)] transition-all duration-300 active:scale-95"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center border border-[#222226] rounded bg-[#141416] p-0.5 font-mono text-[10px]">
              {currencies.map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-1.5 py-0.5 rounded ${
                    currency === c ? "bg-[#222226] text-white" : "text-[#8A8A8F]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-[#222226] bg-[#141416] text-[#F2F2F0] hover:text-[#FF4D1F]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0B]/98 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-10 md:hidden animate-fade-in">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF4D1F] animate-status-pulse" />
              <span>Available for projects · US / UK / Gulf / Global</span>
            </div>
            <div className="flex flex-col gap-5 text-2xl font-display font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#8A8A8F] hover:text-[#F2F2F0] hover:translate-x-2 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-[#8A8A8F]">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#222226]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded bg-[#FF4D1F] text-white font-mono text-sm tracking-wider uppercase text-center font-medium shadow-[0_0_25px_rgba(255,77,31,0.3)]"
            >
              Start A Project →
            </a>
            <div className="flex justify-between font-mono text-[11px] text-[#8A8A8F]">
              <span>NITTEN SHARMA®</span>
              <span>INDIA // GLOBAL</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
