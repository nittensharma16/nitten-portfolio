"use client";

import React, { useState } from "react";
import { PROJECTS, CaseStudyData } from "@/data/projectsData";
import { PhoenixInteractivePipeline } from "./PhoenixInteractivePipeline";
import { CaseStudyModal } from "./CaseStudyModal";
import { ArrowUpRight, Cpu, Layers, Sparkles, Terminal } from "lucide-react";

export const SelectedWork: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  // Separate Phoenix and others
  const phoenix = PROJECTS.find((p) => p.id === "phoenix-labs")!;
  const otherProjects = PROJECTS.filter((p) => p.id !== "phoenix-labs");

  return (
    <section id="work" className="py-24 sm:py-32 relative border-t border-[#222226]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-fine opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
              <span>EXHIBITS & RECENT ENGAGEMENTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F2F2F0] tracking-tight uppercase">
              Selected Work{" "}
              <span className="font-mono text-2xl sm:text-4xl text-[#8A8A8F] font-normal">
                (05)
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#8A8A8F] font-mono max-w-sm">
            Not mockups. Real engineering, AI systems, and high-performance digital architecture built to ship.
          </p>
        </div>

        {/* 01 — FLAGSHIP TECHNICAL CASE STUDY: PHOENIX LABS */}
        <div className="mb-20 sm:mb-28">
          <div className="group relative rounded-2xl bg-[#0A0A0B] border border-[#222226] p-6 sm:p-10 transition-all duration-500 hover:border-[#FF4D1F]/60">
            {/* Top Exhibit Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#FF4D1F] text-white font-bold">
                  FLAGSHIP 01
                </span>
                <span className="text-[#8A8A8F]">AI-POWERED OUTBOUND INFRASTRUCTURE</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">2026</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(phoenix)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141416] border border-[#222226] text-xs font-mono text-[#F2F2F0] group-hover:text-white group-hover:border-[#FF4D1F] transition-all"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            {/* Narrative Headline */}
            <div className="max-w-3xl mb-8">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-4">
                Phoenix Labs
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Replacing manual, error-prone sales prospecting with a deterministic multi-stage AI pipeline. Lead ingestion, two-tier qualification, and intent-based reply triage.
              </p>
            </div>

            {/* Embedded Live Interactive Pipeline */}
            <PhoenixInteractivePipeline />

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#222226]">
              {phoenix.results.map((r, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                    {r.stat}
                  </span>
                  <span className="font-display text-sm font-semibold text-[#F2F2F0] mt-1">
                    {r.label}
                  </span>
                  <span className="text-xs text-[#8A8A8F] font-mono mt-0.5">{r.context}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* REMAINING EXHIBITS (02, 03, 04, 05 & 00) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {otherProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCaseStudy(item)}
              className="group cursor-pointer rounded-2xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:border-[#FF4D1F]/70 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Subtle top ember glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#FF4D1F] transition-all duration-500" />

              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222226] font-mono text-xs text-[#8A8A8F]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF4D1F] font-bold">EXHIBIT {item.number}</span>
                    <span className="text-[#222226]">/</span>
                    <span className="uppercase">{item.category}</span>
                  </div>
                  <span>{item.year}</span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[#FF4D1F] mb-4 uppercase tracking-wider">
                  {item.subtitle}
                </p>
                <p className="text-[#8A8A8F] text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Exhibit Mock Visual / Telemetry Block */}
                <div className="bg-[#141416] border border-[#222226] rounded-xl p-4 mb-6 font-mono text-xs text-[#8A8A8F] group-hover:border-[#FF4D1F]/40 transition-colors">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#222226]/60 text-[10px] text-[#8A8A8F]">
                    <span>SYSTEM ARTIFACT</span>
                    <span className="text-[#FF4D1F]">LIVE VERIFICATION</span>
                  </div>
                  <div className="text-white/90 truncate font-mono text-[11px]">
                    {item.keyScreens[0]?.content || "System DAG Execution Telemetry"}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#222226] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold text-[#FF4D1F]">
                    {item.results[0]?.stat}
                  </span>
                  <span className="font-mono text-xs text-[#8A8A8F]">
                    {item.results[0]?.label}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 font-mono text-xs text-[#F2F2F0] group-hover:text-[#FF4D1F] transition-colors">
                  <span>View Case</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Modal Drawer */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onSelectProject={(p) => setSelectedCaseStudy(p)}
      />
    </section>
  );
};
