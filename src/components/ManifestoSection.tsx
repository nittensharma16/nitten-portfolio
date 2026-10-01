"use client";

import React, { useState } from "react";
import { Brain, Hammer, Rocket, ArrowRight } from "lucide-react";

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      word: "THINK.",
      icon: Brain,
      tagline: "Understand the problem before touching the stack.",
      deepDive:
        "Code is the last 30% of the solution. First comes de-risking: dissecting operational friction, identifying edge-cases, designing deterministic data schemas, and ensuring whatever we build directly moves the business needle. No unnecessary complexity, no vanity architecture.",
      deliverable: "System Blueprint · Schema Design · User Flow Validation",
      stat: "80% of bugs prevented at architecture phase",
    },
    {
      word: "BUILD.",
      icon: Hammer,
      tagline: "Design, engineer and integrate the actual system.",
      deepDive:
        "Crafting bespoke frontend experiences, resilient backend APIs, and tight AI integrations. Everything is built with high-precision typography, modular architecture, and strict type safety. No fragile no-code workarounds masquerading as enterprise systems.",
      deliverable: "Next.js WebGL · FastAPI Services · Fine-Tuned LLM Pipelines",
      stat: "Sub-16ms render cycles & strict type safety",
    },
    {
      word: "SHIP.",
      icon: Rocket,
      tagline: "Get it deployed, tested and into the hands of users.",
      deepDive:
        "Software in staging provides zero commercial value. I engineer CI/CD delivery pipelines, automated regression suites, and cloud deployments so the product launches fast and stands resilient under real-world traffic.",
      deliverable: "Automated CI/CD · Vercel / Cloud Run Deploy · Client Code Handover",
      stat: "100% full client code ownership on launch",
    },
  ];

  return (
    <section id="manifesto" className="py-24 sm:py-36 relative border-t border-[#222226] bg-[#0A0A0B] overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D1F]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Pre-title */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>OPERATING PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F2F2F0] tracking-tight uppercase">
            I don&apos;t just write code.
          </h2>
          <p className="text-base sm:text-xl text-[#8A8A8F] mt-4 font-light leading-relaxed">
            I take vague problems, design systems around them, engineer the actual software, and ship it into production.
          </p>
        </div>

        {/* Cinematic Manifesto Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Huge Hollow Typography Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={pillar.word}
                  onMouseEnter={() => setActiveTab(idx)}
                  onClick={() => setActiveTab(idx)}
                  className="cursor-pointer group flex flex-col transition-all duration-500"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-sm sm:text-base transition-colors duration-300 ${
                        isActive ? "text-[#FF4D1F] font-bold" : "text-[#8A8A8F]/60"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <h3
                      className={`font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight transition-all duration-500 ${
                        isActive
                          ? "text-[#F2F2F0] translate-x-2 text-shadow-[0_0_40px_rgba(255,77,31,0.35)]"
                          : "text-stroke-hollow group-hover:text-stroke-active"
                      }`}
                    >
                      {pillar.word}
                    </h3>
                  </div>

                  {/* Supporting inline line */}
                  <p
                    className={`font-mono text-xs sm:text-sm pl-8 sm:pl-12 transition-all duration-300 mt-1 ${
                      isActive ? "text-[#FF4D1F]" : "text-[#8A8A8F]/60 group-hover:text-[#8A8A8F]"
                    }`}
                  >
                    {pillar.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Resolved Architectural Inspector Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#141416] border border-[#222226] rounded-2xl p-7 sm:p-9 relative overflow-hidden transition-all duration-500 shadow-xl">
              {/* Top Accent Indicator */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222226]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F]">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D1F] animate-pulse" />
                  <span>PILLAR 0{activeTab + 1} DIRECTIVE</span>
                </div>
                <span className="font-mono text-xs text-[#8A8A8F]">
                  PHASE: {pillars[activeTab].word.replace(".", "")}
                </span>
              </div>

              {/* Title & Tagline */}
              <h4 className="font-display text-2xl font-bold text-[#F2F2F0] mb-3">
                {pillars[activeTab].tagline}
              </h4>

              <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed mb-6">
                {pillars[activeTab].deepDive}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                  <span className="text-[#8A8A8F] block mb-1">MEASURED BENCHMARK</span>
                  <span className="text-[#FF4D1F] font-semibold text-sm">
                    {pillars[activeTab].stat}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0A0A0B] border border-[#222226]">
                  <span className="text-[#8A8A8F] block mb-1">SYSTEM DELIVERABLE</span>
                  <span className="text-[#F2F2F0] font-semibold">
                    {pillars[activeTab].deliverable}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#222226] flex items-center justify-between font-mono text-[11px] text-[#8A8A8F]">
                <span>NO SHORTCUTS</span>
                <span className="text-[#F2F2F0]">SYSTEM DISCIPLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
