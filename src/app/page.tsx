"use client";

import React from "react";
import { CurrencyProvider } from "@/context/CurrencyContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SelectedWork } from "@/components/SelectedWork";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <CurrencyProvider>
      {/* Tactile Film Grain Global Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Primary Container */}
      <div className="min-h-screen flex flex-col bg-[#0A0A0B] text-[#F2F2F0] relative">
        <Navbar />

        <main className="flex-1 flex flex-col">
          <HeroSection />
          <SelectedWork />
          <ManifestoSection />
          <ServicesSection />
          <ProcessSection />
          <PricingSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </CurrencyProvider>
  );
}
