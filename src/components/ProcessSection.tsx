"use client";

import React from "react";
import { Check, Compass, FileCheck, Layers, Rocket, Shield } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      icon: Compass,
      headline: "Understand the business, users & objective.",
      body: "We define constraints, clarify edge-cases, analyze target audiences, and map required data inputs. No code is written until the scope and ROI are razor-sharp.",
    },
    {
      num: "02",
      title: "DESIGN",
      icon: Layers,
      headline: "Structure the experience & system before building.",
      body: "Architecture blueprints, schema design, UX hierarchy, and interaction models. You get a transparent breakdown of the exact system structure before engineering begins.",
    },
    {
      num: "03",
      title: "BUILD",
      icon: Rocket,
      headline: "Engineer the product & integrations with visible progress.",
      body: "Modular development sprints with regular preview links and sanitized staging environments. You observe the system coming to life with complete engineering transparency.",
    },
    {
      num: "04",
      title: "LAUNCH",
      icon: FileCheck,
      headline: "Test, deploy, iterate & hand over the finished work.",
      body: "Load testing, DNS/SSL setup, CI/CD automated deployment, and comprehensive documentation handover. Once final payment clears, 100% of repository code belongs to you.",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative border-t border-[#222226] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>EXECUTION CADENCE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#F2F2F0] tracking-tight uppercase">
            How A Project Runs
          </h2>
          <p className="text-base sm:text-lg text-[#8A8A8F] mt-4 font-light leading-relaxed">
            Predictable sprints, clear engineering milestones, zero ambiguity.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-xl bg-[#141416] border border-[#222226] p-6 flex flex-col justify-between hover:border-[#FF4D1F]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222226] font-mono text-xs">
                  <span className="text-[#FF4D1F] font-bold">STAGE {s.num}</span>
                  <span className="text-[#8A8A8F]">{s.title}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#F2F2F0] mb-3">
                  {s.headline}
                </h3>

                <p className="text-xs sm:text-sm text-[#8A8A8F] leading-relaxed">
                  {s.body}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#222226]/60 font-mono text-[10px] text-[#8A8A8F]">
                STATUS: VERIFIED MILESTONE
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Terms Banner */}
        <div className="rounded-2xl bg-[#141416] border border-[#222226] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-[#222226] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#FF4D1F]" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF4D1F] block mb-1">
                COMMERCIAL AGREEMENT
              </span>
              <h4 className="font-display text-lg sm:text-xl font-bold text-[#F2F2F0]">
                Clean, Transparent Client Terms
              </h4>
              <p className="text-xs sm:text-sm text-[#8A8A8F] mt-1 max-w-2xl leading-relaxed">
                Fixed quote before work starts · 50% upfront · 50% on delivery · Two revision rounds included · Client owns the code after final payment
              </p>
            </div>
          </div>

          <div className="font-mono text-xs text-[#8A8A8F] bg-[#0A0A0B] px-4 py-2.5 rounded-lg border border-[#222226] whitespace-nowrap self-start md:self-auto">
            ZERO HIDDEN FEES · STRICT CONTRACTS
          </div>
        </div>
      </div>
    </section>
  );
};
