"use client";

import React, { useEffect } from "react";
import { CaseStudyData, PROJECTS } from "@/data/projectsData";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, ExternalLink, Layers, Sparkles, Terminal, X } from "lucide-react";

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
  onSelectProject: (p: CaseStudyData) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find next project in exhibits
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0A0A0B] border border-[#222226] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0A0A0B]/95 border-b border-[#222226] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FF4D1F] font-bold">
              EXHIBIT {project.number}
            </span>
            <span className="text-[#222226]">/</span>
            <span className="font-mono text-xs text-[#8A8A8F] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#222226] hidden sm:inline">/</span>
            <span className="font-mono text-xs text-[#8A8A8F] hidden sm:inline">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#141416] border border-[#222226] text-[#8A8A8F] hover:text-white hover:border-[#FF4D1F] transition-all"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12 scrollbar-thin">
          {/* 1. HERO */}
          <div className="border-b border-[#222226] pb-10">
            <div className="inline-block px-3 py-1 rounded bg-[#141416] border border-[#222226] font-mono text-[11px] text-[#FF4D1F] mb-4">
              {project.status}
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F2F2F0] leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#8A8A8F] font-light max-w-3xl leading-relaxed mb-6">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#141416] border border-[#222226] font-mono text-xs text-[#8A8A8F]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 2. THE PROBLEM */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D1F] block mb-2">
                01 / THE BOTTLENECK
              </span>
              <h2 className="font-display text-2xl font-bold text-[#F2F2F0]">
                {project.problem.heading}
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4">
              <p className="text-[#8A8A8F] text-base leading-relaxed">
                {project.problem.description}
              </p>
              <div className="space-y-2.5 pt-2">
                {project.problem.painPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#141416] border border-[#222226]"
                  >
                    <span className="font-mono text-xs text-[#FF4D1F] font-bold mt-0.5">
                      ✕
                    </span>
                    <span className="text-sm text-[#F2F2F0]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. WHAT I BUILT & ARCHITECTURE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 border-t border-[#222226] pt-10">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D1F] block mb-2">
                02 / THE SYSTEM
              </span>
              <h2 className="font-display text-2xl font-bold text-[#F2F2F0]">
                {project.solution.heading}
              </h2>
              <p className="text-[#8A8A8F] text-sm mt-3 leading-relaxed">
                {project.solution.description}
              </p>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div className="font-mono text-xs text-[#8A8A8F] bg-[#141416] p-3 rounded border border-[#222226]">
                <span className="text-[#FF4D1F] font-bold">CORE ARCHITECTURE: </span>
                {project.solution.architectureDescription}
              </div>

              {/* Steps breakdown */}
              <div className="space-y-3">
                {project.solution.architectureSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-[#141416] border border-[#222226] space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#FF4D1F] font-bold">
                        STEP {step.step}
                      </span>
                      <span className="text-[#222226]">|</span>
                      <span className="font-display text-sm font-semibold text-[#F2F2F0]">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-sm text-[#8A8A8F]">{step.desc}</p>
                    <div className="font-mono text-xs text-[#8A8A8F]/80 pt-1 border-t border-[#222226]/50">
                      <span className="text-[#F2F2F0]">Tech:</span> {step.technicalDetail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. KEY SCREENS & SCHEMAS */}
          <div className="border-t border-[#222226] pt-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D1F] block mb-2">
              03 / SANITIZED SCHEMAS & ARTIFACTS
            </span>
            <h2 className="font-display text-2xl font-bold text-[#F2F2F0] mb-6">
              Engineering Artifacts
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {project.keyScreens.map((screen, idx) => (
                <div
                  key={idx}
                  className="bg-[#141416] border border-[#222226] rounded-xl p-5 overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222226] font-mono text-xs">
                    <span className="text-[#F2F2F0] font-semibold flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#FF4D1F]" />
                      {screen.title}
                    </span>
                    <span className="text-[#8A8A8F] uppercase">{screen.type}</span>
                  </div>

                  <pre className="p-4 bg-[#0A0A0B] rounded-lg border border-[#222226] font-mono text-xs text-[#F2F2F0] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    <code>{screen.content}</code>
                  </pre>

                  <p className="mt-3 text-xs text-[#8A8A8F] font-mono">{screen.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. RESULTS & IMPACT */}
          <div className="border-t border-[#222226] pt-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D1F] block mb-2">
              04 / VERIFIED IMPACT
            </span>
            <h2 className="font-display text-2xl font-bold text-[#F2F2F0] mb-6">
              Measured Results & Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#141416] border border-[#222226] relative overflow-hidden"
                >
                  <div className="font-display text-4xl sm:text-5xl font-bold text-[#FF4D1F] mb-1">
                    {res.stat}
                  </div>
                  <div className="font-display text-base font-semibold text-[#F2F2F0] mb-2">
                    {res.label}
                  </div>
                  <p className="text-xs text-[#8A8A8F] leading-relaxed">{res.context}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TECH STACK */}
          <div className="border-t border-[#222226] pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#8A8A8F]">ENGINEERED WITH:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded bg-[#1A1A1E] border border-[#222226] font-mono text-xs text-[#F2F2F0]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 7. NEXT PROJECT TRANSITION */}
          <div className="border-t border-[#222226] pt-10 pb-4">
            <button
              onClick={() => onSelectProject(nextProject)}
              className="w-full group p-6 rounded-2xl bg-[#141416] border border-[#222226] hover:border-[#FF4D1F] transition-all duration-300 flex items-center justify-between text-left"
            >
              <div>
                <span className="font-mono text-xs text-[#8A8A8F] group-hover:text-[#FF4D1F] transition-colors">
                  NEXT EXHIBIT ({nextProject.number}) →
                </span>
                <h3 className="font-display text-2xl font-bold text-[#F2F2F0] group-hover:translate-x-1 transition-transform">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-[#8A8A8F]">{nextProject.subtitle}</p>
              </div>

              <div className="w-12 h-12 rounded-full border border-[#222226] group-hover:border-[#FF4D1F] group-hover:bg-[#FF4D1F] text-white flex items-center justify-center transition-all">
                <ArrowRight className="w-5 h-5 text-[#8A8A8F] group-hover:text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
