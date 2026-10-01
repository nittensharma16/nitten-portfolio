"use client";

import React from "react";
import { ArrowUpRight, Award, CheckCircle, Code, Cpu, ExternalLink, GitBranch, ShieldCheck, Terminal } from "lucide-react";

export const AboutSection: React.FC = () => {
  const stackCategories = [
    {
      category: "LANGUAGES",
      items: "Python · TypeScript / JavaScript · SQL · C++",
    },
    {
      category: "AI & REASONING",
      items: "LLMs · RAG Pipelines · Autonomous Agents · Embeddings · Prompt Fuzzing · OpenAI / Claude APIs",
    },
    {
      category: "WEB & GRAPHICS",
      items: "React · Next.js · Tailwind CSS · Three.js / WebGL · High-Performance CSS Architecture",
    },
    {
      category: "BACKEND & DATA",
      items: "FastAPI · RESTful Endpoints · PostgreSQL · SQLite · Redis Caching",
    },
    {
      category: "INFRASTRUCTURE",
      items: "Git · GitHub Actions · Headless Playwright · Cloud Run / Vercel · Asynchronous Task Queues",
    },
  ];

  const credentials = [
    {
      title: "Microsoft Certified",
      detail: "Azure AI Fundamentals & Security Track",
      type: "Certification",
    },
    {
      title: "Multimodal Research",
      detail: "Acoustic, Vibration & Thermal Sensor Fusion Fault-Detection",
      type: "Research & Paper",
    },
    {
      title: "Autonomous Outbound",
      detail: "Architected Phoenix Labs 7-Stage AI Outreach Engine",
      type: "Systems Engineering",
    },
    {
      title: "Hackathon Builder",
      detail: "Real-time AI Copilot & Hardware Telemetry Systems",
      type: "Product Prototype",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 relative border-t border-[#222226] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
          <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
          <span>ABOUT THE BUILDER</span>
        </div>

        {/* Top Storytelling Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#F2F2F0] tracking-tight uppercase leading-[1.08] mb-8">
              I&apos;m obsessed with <br />
              <span className="text-[#FF4D1F]">building things.</span>
            </h2>

            <div className="space-y-6 text-[#8A8A8F] text-base sm:text-lg leading-relaxed font-light">
              <p>
                I work across web development, AI, automation and product engineering — usually at the intersection of all four.
              </p>
              <p>
                My projects range from AI-powered outbound infrastructure and LLM security systems to research in multimodal fault detection. I like taking vague problems, turning them into systems, and shipping the result.
              </p>
              <p className="text-xl sm:text-2xl text-[#F2F2F0] font-normal italic border-l-2 border-[#FF4D1F] pl-4 sm:pl-6 my-6">
                &ldquo;I like taking ridiculous, half-formed ideas and turning them into things that actually work.&rdquo;
              </p>
              <p className="text-sm font-mono text-[#8A8A8F]">
                Based in India. Engineering high-ticket digital products and scalable systems for founders and companies across the United States, United Kingdom, and the Gulf.
              </p>
            </div>
          </div>

          {/* Right: Black & White Tactile Visual Specimen */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#141416] border border-[#222226] p-7 overflow-hidden group hover:border-[#FF4D1F]/50 transition-all duration-500">
              {/* Top spec info */}
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#222226] font-mono text-xs text-[#8A8A8F]">
                <span>SPECIMEN ID: N-001</span>
                <span className="text-[#FF4D1F]">BUILDER IDENTITY</span>
              </div>

              {/* Minimal Monochrome Visual Graphic */}
              <div className="w-full aspect-square rounded-xl bg-[#0A0A0B] border border-[#222226] relative overflow-hidden flex flex-col items-center justify-center p-8 text-center group-hover:border-[#FF4D1F]/30 transition-all">
                <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative mb-6">
                  <div className="absolute inset-0 rounded-full border border-[#FF4D1F]/30 scale-125 animate-pulse" />
                  <span className="font-display font-black text-2xl text-white tracking-widest">
                    NS
                  </span>
                </div>

                <div className="font-display font-bold text-lg text-[#F2F2F0] uppercase tracking-wider">
                  Nitten Sharma
                </div>
                <div className="font-mono text-xs text-[#FF4D1F] mt-1">
                  Creative Technology Studio
                </div>

                <div className="mt-6 pt-6 border-t border-[#222226] w-full font-mono text-[10px] text-[#8A8A8F] flex justify-between">
                  <span>DISCIPLINE: SYSTEMS</span>
                  <span>ORIENTATION: SHIPPING</span>
                </div>
              </div>

              {/* Mini Social Link strip */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="https://github.com/nitten-sharma"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0A0A0B] border border-[#222226] text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] hover:border-[#FF4D1F] transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8F]" />
                </a>

                <a
                  href="https://linkedin.com/in/nittensharma"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0A0A0B] border border-[#222226] text-xs font-mono text-[#F2F2F0] hover:text-[#FF4D1F] hover:border-[#FF4D1F] transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8A8A8F]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNICAL STACK (EDITORIAL METADATA - NO LOGO WALL) */}
        <div className="mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>ENGINEERING STACK</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-8">
            Technical Stack as Architectural Metadata
          </h3>

          <div className="divide-y divide-[#222226] border-y border-[#222226]">
            {stackCategories.map((st) => (
              <div
                key={st.category}
                className="py-5 flex flex-col md:flex-row md:items-baseline justify-between gap-3 group"
              >
                <div className="font-mono text-xs font-bold text-[#FF4D1F] w-48 shrink-0 tracking-wider">
                  {st.category}
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#8A8A8F] group-hover:text-[#F2F2F0] transition-colors leading-relaxed">
                  {st.items}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VERIFIED TRUST & PROOF */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>AUTHENTIC EVIDENCE</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-8">
            Real Proof, Real Systems
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#141416] border border-[#222226] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#FF4D1F] uppercase block mb-2">
                    {cred.type}
                  </span>
                  <h4 className="font-display text-base font-bold text-[#F2F2F0] mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-[#8A8A8F] leading-relaxed">{cred.detail}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#222226] font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>VERIFIED RECORD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
