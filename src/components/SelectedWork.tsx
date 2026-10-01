"use client";

import React, { useState } from "react";
import { PROJECTS, CaseStudyData } from "@/data/projectsData";
import { PhoenixInteractivePipeline } from "./PhoenixInteractivePipeline";
import {
  AutoRedTeamShowcase,
  ExecutionerShowcase,
  SensorFusionShowcase,
  KinetixShowcase,
} from "./ProjectShowcases";
import { CaseStudyModal } from "./CaseStudyModal";
import { ArrowUpRight } from "lucide-react";

export const SelectedWork: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);

  const phoenix = PROJECTS.find((p) => p.id === "phoenix-labs")!;
  const autoredteam = PROJECTS.find((p) => p.id === "autoredteam")!;
  const executioner = PROJECTS.find((p) => p.id === "executioner")!;
  const sensorFusion = PROJECTS.find((p) => p.id === "sensor-fusion")!;
  const kinetix = PROJECTS.find((p) => p.id === "kinetix-dynamics")!;
  const portfolio = PROJECTS.find((p) => p.id === "nitten-portfolio-00")!;

  return (
    <section id="work" className="py-32 sm:py-44 relative border-t border-[#222226]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-fine opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Generous Negative Space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 sm:mb-32 gap-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
              <span>SELECTED EXHIBITS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F2F2F0] tracking-tight uppercase">
              Selected Work{" "}
              <span className="font-mono text-2xl sm:text-4xl text-[#8A8A8F] font-normal">
                (05)
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#8A8A8F] font-light max-w-md leading-relaxed">
            Real systems, AI pipelines, and high-performance digital products engineered to ship.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 01: PHOENIX LABS (Flagship Technical Case Study) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-28 sm:mb-36">
          <div className="group rounded-3xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-12 transition-all duration-500 hover:border-[#FF4D1F]/50">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#FF4D1F] font-bold">01 / FLAGSHIP</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">AI OUTBOUND INFRASTRUCTURE</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(phoenix)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] transition-colors"
              >
                <span>Explore Full Case</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            {/* Editorial Title */}
            <div className="max-w-3xl mb-10">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-3">
                Phoenix Labs
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Autonomous outbound infrastructure replacing manual prospecting with deterministic two-tier AI qualification and intent-based reply classification.
              </p>
            </div>

            {/* Interactive Demonstration Surface */}
            <PhoenixInteractivePipeline />

            {/* Verified Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#222226]">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                  4.8x
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Reply Rate Lift
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Vs. static email templates</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  12,400+
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Records Normalized
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Processed through multi-tier gate</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  99.2%
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Inbox Placement
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Zero burned domains</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 02: AUTOREDTEAM */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-28 sm:mb-36">
          <div className="group rounded-3xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-12 transition-all duration-500 hover:border-[#FF4D1F]/50">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#FF4D1F] font-bold">02 / AI DEFENSE</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">LLM RED-TEAMING & FUZZING</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(autoredteam)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] transition-colors"
              >
                <span>Explore Full Case</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-3">
                AutoRedTeam
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Automated adversarial fuzzing framework stress-testing enterprise LLM apps against prompt injection, data exfiltration, and persona bypasses.
              </p>
            </div>

            {/* Interactive Demonstration */}
            <AutoRedTeamShowcase />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#222226]">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                  1,500+
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Synthetic Attack Vectors
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Automated CI/CD suite</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  99.4%
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Boundary Defense
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">OWASP standard evaluation</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  &lt;3 min
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Execution Turnaround
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Continuous pipeline checks</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 03: EXECUTIONER */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-28 sm:mb-36">
          <div className="group rounded-3xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-12 transition-all duration-500 hover:border-[#FF4D1F]/50">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#FF4D1F] font-bold">03 / PRODUCT</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">EXECUTION ENGINE</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(executioner)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] transition-colors"
              >
                <span>Explore Full Case</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-3">
                Executioner
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Zero-latency keyboard-first execution surface engineered to eliminate cognitive friction and maintain deep work momentum through deterministic task DAGs.
              </p>
            </div>

            {/* Interactive Demonstration */}
            <ExecutionerShowcase />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#222226]">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                  &lt;16ms
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Interaction Latency
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Zero frame drops</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  100%
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Local-First Offline
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Zero cloud blocking</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  3.2x
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Throughput Velocity
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Documented daily shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 04: MULTIMODAL SENSOR FUSION */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-28 sm:mb-36">
          <div className="group rounded-3xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-12 transition-all duration-500 hover:border-[#FF4D1F]/50">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#FF4D1F] font-bold">04 / RESEARCH</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">INDUSTRIAL FAULT-DETECTION</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(sensorFusion)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] transition-colors"
              >
                <span>Explore Full Case</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-3">
                Multimodal Sensor Fusion
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Deep learning research and edge deployment fusing vibration, ultrasonic acoustic, and thermal telemetry for real-time anomaly detection in heavy industrial machinery.
              </p>
            </div>

            {/* Interactive Demonstration */}
            <SensorFusionShowcase />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#222226]">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                  96.4%
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Accuracy
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Across 4 failure modes</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  14 hrs
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Early Warning Window
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Pre-empts thermal failure</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  42ms
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Edge Inference
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Low-power ARM architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 05: KINETIX DYNAMICS (Flagship Web Concept) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-20">
          <div className="group rounded-3xl bg-[#0A0A0B] border border-[#222226] p-7 sm:p-12 transition-all duration-500 hover:border-[#FF4D1F]/50">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#222226]">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[#FF4D1F] font-bold">05 / CONCEPT</span>
                <span className="text-[#222226]">|</span>
                <span className="text-[#8A8A8F]">ROBOTICS & EMBODIED AI</span>
              </div>

              <button
                onClick={() => setSelectedCaseStudy(kinetix)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] transition-colors"
              >
                <span>Explore Full Case</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4D1F]" />
              </button>
            </div>

            <div className="max-w-3xl mb-10">
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F2F2F0] mb-3">
                Kinetix Dynamics
              </h3>
              <p className="text-base sm:text-xl text-[#8A8A8F] font-light leading-relaxed">
                Flagship digital experience and real-time WebGL kinematics interface engineered for an autonomous robotics brand to showcase creative technology standards.
              </p>
            </div>

            {/* Interactive Demonstration */}
            <KinetixShowcase />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#222226]">
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#FF4D1F]">
                  60 FPS
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  WebGL Sustained
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Mobile & desktop GPU budget</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  100%
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Bespoke Shaders
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Zero template UI kits</span>
              </div>
              <div>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  &lt;1.2s
                </span>
                <span className="font-display text-sm font-semibold text-[#F2F2F0] block mt-1">
                  Time-to-Interactive
                </span>
                <span className="text-xs text-[#8A8A8F] font-mono">Deferred 3D asset pipeline</span>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* EXHIBIT 00: THIS WEBSITE AS CASE STUDY */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setSelectedCaseStudy(portfolio)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141416] border border-[#222226] text-xs font-mono text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F] transition-all"
          >
            <span>00 / This Website — View Studio Architecture Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D1F]" />
          </button>
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
