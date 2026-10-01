"use client";

import React, { useState, useEffect } from "react";
import { HeroCanvas, TransformState } from "./HeroCanvas";
import { ArrowRight, ChevronDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeState, setActiveState] = useState<TransformState>("web");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-lines">
      {/* 3D Technological Sculpture Floating in Void */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroCanvas
          activeState={activeState}
          onStateChange={(state) => setActiveState(state)}
        />
      </div>

      {/* Atmospheric Soft Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4D1F]/[0.025] rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Editorial Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between">
        <div className="max-w-4xl pt-6 sm:pt-12">
          {/* Top Editorial Monogram & Year */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
            } flex items-center gap-4 mb-8 sm:mb-10 font-mono text-xs uppercase tracking-widest text-[#8A8A8F]`}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
              <span className="text-[#F2F2F0] font-semibold">NITTEN SHARMA®</span>
            </div>
            <span className="text-[#222226]">/</span>
            <span>CREATIVE TECHNOLOGY 2026</span>
          </div>

          {/* Primary Editorial Headline */}
          <h1
            className={`transition-all duration-1000 delay-100 ease-out transform ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#F2F2F0] leading-[1.02] mb-8 uppercase`}
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
            } text-lg sm:text-2xl text-[#8A8A8F] font-light max-w-2xl leading-relaxed mb-12`}
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
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#FF4D1F] text-white font-mono text-xs tracking-widest uppercase font-medium hover:bg-[#e03e12] transition-colors active:scale-[0.99]"
            >
              <span>Start A Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#222226] bg-[#141416]/70 text-[#F2F2F0] hover:text-white hover:border-[#FF4D1F]/40 font-mono text-xs tracking-widest uppercase font-medium backdrop-blur-md transition-colors active:scale-[0.99]"
            >
              <span>Explore Work</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-[#8A8A8F]" />
            </a>
          </div>
        </div>

        {/* Bottom Strip with Clean Negative Space */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out transform ${
            revealed ? "opacity-100" : "opacity-0"
          } mt-24 sm:mt-36 pt-8 border-t border-[#222226]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8A8A8F]`}
        >
          <div className="flex items-center gap-3">
            <span className="text-[#F2F2F0]">NITTEN / 001 — THE BUILDER</span>
          </div>

          <div className="flex items-center gap-4">
            <span>US · UK · GULF · GLOBAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
