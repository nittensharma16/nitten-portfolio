"use client";

import React, { useState, useEffect } from "react";
import { HeroCanvas, TransformState } from "./HeroCanvas";
import { ArrowRight, ChevronDown, Sparkles, Terminal } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeState, setActiveState] = useState<TransformState>("web");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Cinematic entrance sequence completes within 0.8s
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-lines">
      {/* 3D Technological Sculpture Floating in Void */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroCanvas
          activeState={activeState}
          onStateChange={(state) => setActiveState(state)}
        />
      </div>

      {/* Atmospheric Radial Gradient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D1F]/[0.035] rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between">
        <div className="max-w-4xl">
          {/* Top Technical Metadata - Cinematic Opening */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            } flex flex-wrap items-center gap-3 sm:gap-6 mb-6 sm:mb-8 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#8A8A8F]`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
              <span className="text-[#F2F2F0] font-semibold">NITTEN SHARMA®</span>
            </div>
            <span className="text-[#222226]">/</span>
            <span>CREATIVE TECHNOLOGY · 2026</span>
            <span className="text-[#222226] hidden sm:inline">/</span>
            <span className="hidden sm:inline text-[#8A8A8F]/70">
              AI · WEB · AUTOMATION
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1
            className={`transition-all duration-1000 delay-100 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2F2F0] leading-[1.04] mb-6 sm:mb-8 uppercase`}
          >
            I BUILD WHAT <br />
            <span className="text-stroke-hollow hover:text-stroke-active transition-all cursor-default">
              COMES NEXT.
            </span>
          </h1>

          {/* Supporting Line */}
          <p
            className={`transition-all duration-1000 delay-200 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } text-base sm:text-xl md:text-2xl text-[#8A8A8F] font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10`}
          >
            Web experiences, AI systems and automation for ambitious businesses.
          </p>

          {/* Call to Action Buttons */}
          <div
            className={`transition-all duration-1000 delay-300 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } flex flex-col sm:flex-row items-stretch sm:items-center gap-4`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded bg-[#FF4D1F] text-white font-mono text-sm tracking-wider uppercase font-medium hover:bg-[#e03e12] hover:shadow-[0_0_30px_rgba(255,77,31,0.45)] transition-all duration-300 active:scale-98"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded border border-[#222226] bg-[#141416]/80 text-[#F2F2F0] hover:text-white hover:border-[#FF4D1F]/50 font-mono text-sm tracking-wider uppercase font-medium backdrop-blur-md transition-all duration-300 active:scale-98"
            >
              <span>Explore Work</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#8A8A8F]" />
            </a>
          </div>
        </div>

        {/* Bottom Technical Strip */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out transform ${
            revealed ? "opacity-100" : "opacity-0"
          } mt-16 sm:mt-24 pt-6 border-t border-[#222226]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8A8A8F]`}
        >
          <div className="flex items-center gap-4">
            <span className="text-[#F2F2F0]">NITTEN / 001 — THE BUILDER</span>
            <span className="text-[#222226]">·</span>
            <span>SYSTEM RUNTIME: READY</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#8A8A8F]/70">MARKET: US · UK · GULF · GLOBAL</span>
            <span className="text-[#222226]">·</span>
            <span className="text-[#8A8A8F]/70">BASED IN INDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
