"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const ManifestoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      word: "THINK.",
      tagline: "Understand the problem before touching the stack.",
      deepDive:
        "Code is the last 30% of the solution. First comes de-risking: dissecting operational friction, identifying edge-cases, designing deterministic schemas, and ensuring whatever we build moves the business needle. No unnecessary complexity, no vanity architecture.",
      principle: "De-risk architecture before writing tokens",
    },
    {
      word: "BUILD.",
      tagline: "Design, engineer and integrate the actual system.",
      deepDive:
        "Crafting bespoke frontend experiences, resilient backend APIs, and tight AI integrations. Everything is engineered with high-precision typography, modular architecture, and strict type safety. No fragile no-code workarounds masquerading as enterprise systems.",
      principle: "Sub-16ms render cycles & strict type safety",
    },
    {
      word: "SHIP.",
      tagline: "Get it deployed, tested and into the hands of users.",
      deepDive:
        "Software in staging provides zero commercial value. I engineer CI/CD delivery pipelines, automated regression suites, and cloud deployments so the product launches fast and stands resilient under real-world traffic.",
      principle: "100% full client code ownership on launch",
    },
  ];

  return (
    <section id="manifesto" className="py-32 sm:py-48 relative border-t border-[#222226] bg-[#0A0A0B] overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D1F]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Pre-title */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>OPERATING PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F2F2F0] tracking-tight uppercase leading-[1.05]">
            I don&apos;t just write code.
          </h2>
          <p className="text-lg sm:text-xl text-[#8A8A8F] mt-4 font-light leading-relaxed">
            I take vague problems, design systems around them, engineer the actual software, and ship it into production.
          </p>
        </div>

        {/* Cinematic Manifesto Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left: Huge Hollow Typography */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
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
                      className={`font-mono text-xs sm:text-sm transition-colors duration-300 ${
                        isActive ? "text-[#FF4D1F] font-bold" : "text-[#8A8A8F]/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <h3
                      className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight transition-all duration-500 ${
                        isActive
                          ? "text-[#F2F2F0] translate-x-2"
                          : "text-stroke-hollow group-hover:text-stroke-active"
                      }`}
                    >
                      {pillar.word}
                    </h3>
                  </div>

                  <p
                    className={`font-mono text-xs sm:text-sm pl-8 sm:pl-12 transition-all duration-300 mt-2 ${
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
            <div className="bg-[#141416] border border-[#222226] rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-500">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222226]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1F]" />
                  <span>PILLAR 0{activeTab + 1}</span>
                </div>
                <span className="font-mono text-xs text-[#8A8A8F]">
                  {pillars[activeTab].word.replace(".", "")}
                </span>
              </div>

              <h4 className="font-display text-2xl font-bold text-[#F2F2F0] mb-4">
                {pillars[activeTab].tagline}
              </h4>

              <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed font-light mb-8">
                {pillars[activeTab].deepDive}
              </p>

              <div className="pt-6 border-t border-[#222226] font-mono text-xs text-[#F2F2F0] flex items-center justify-between">
                <span className="text-[#8A8A8F]">STANDARD:</span>
                <span className="text-[#FF4D1F] font-semibold">{pillars[activeTab].principle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
