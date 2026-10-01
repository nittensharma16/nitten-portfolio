"use client";

import React from "react";
import { useCurrency, Currency } from "@/context/CurrencyContext";
import { ArrowRight, Check, Eye, HelpCircle, Sparkles } from "lucide-react";

export const PricingSection: React.FC = () => {
  const { currency, setCurrency, formatPrice } = useCurrency();

  const webTiers = [
    {
      name: "Landing Page",
      startingUsd: 800,
      turnaround: "5–8 Days",
      idealFor: "Product launches, high-ticket offers, paid traffic campaigns",
      features: [
        "Editorial art direction & visual hierarchy",
        "Sub-1.2s cold load speed (90+ mobile Lighthouse)",
        "Copy structure & conversion engineering",
        "CRM & lead webhook synchronization",
      ],
    },
    {
      name: "Website",
      startingUsd: 1500,
      turnaround: "2–3 Weeks",
      idealFor: "Growing businesses, brands, agencies requiring multi-page authority",
      features: [
        "Up to 5 custom-designed core pages",
        "Next.js App Router & Tailwind architecture",
        "Dynamic CMS / Markdown integration",
        "Complete technical SEO & JSON-LD schemas",
      ],
    },
    {
      name: "Premium Digital Experience",
      startingUsd: 3000,
      turnaround: "3–4 Weeks",
      idealFor: "Founders & brands wanting an undeniable flagship showcase",
      features: [
        "Custom 3D WebGL / Three.js interactive scenes",
        "Fluid cinematic scroll interactions & shaders",
        "Micro-interactions & audio-visual tactile feedback",
        "Enterprise-grade performance budgeting",
      ],
    },
  ];

  const aiSystemsTiers = [
    {
      name: "AI Integration",
      startingUsd: 1000,
      turnaround: "1–2 Weeks",
      idealFor: "Adding intelligent LLM features into existing web apps",
      features: [
        "Structured OpenAI / Claude API tool calling",
        "RAG search with Pinecone / Supabase pgvector",
        "Prompt hardening & prompt injection guardrails",
        "Deterministic JSON schemas & error fallbacks",
      ],
    },
    {
      name: "Automation System",
      startingUsd: 2500,
      turnaround: "2–3 Weeks",
      idealFor: "Eliminating 20+ hours/week of repetitive operational labor",
      features: [
        "Headless browser scraping & data normalization",
        "Multi-step asynchronous queue orchestration",
        "Automated reporting, PDF generation & alerts",
        "Self-healing API retries & proxy rotation",
      ],
    },
    {
      name: "Custom AI System",
      startingUsd: 4000,
      hasPlus: true,
      turnaround: "Custom Timeline",
      idealFor: "Proprietary AI pipelines, autonomous agents, and enterprise workflows",
      features: [
        "Multi-agent autonomous coordination",
        "Bespoke model fine-tuning & evaluation benchmarks",
        "High-throughput FastAPI & Redis microservices",
        "End-to-end admin console & telemetry dashboards",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 relative border-t border-[#222226] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header & Currency Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
              <span>TRANSPARENT STUDIO RATES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#F2F2F0] tracking-tight uppercase">
              Starting Investment
            </h2>
            <p className="text-base sm:text-lg text-[#8A8A8F] mt-3 font-light max-w-xl">
              Clean studio-tier baselines. Scoped individually with fixed upfront milestones and zero surprises.
            </p>
          </div>

          {/* Interactive Currency Switcher */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-[#141416] p-1.5 rounded-xl border border-[#222226]">
            <span className="font-mono text-xs text-[#8A8A8F] px-2">CURRENCY:</span>
            {(["USD", "AED", "INR"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-1 font-mono text-xs rounded-lg transition-all ${
                  currency === c
                    ? "bg-[#FF4D1F] text-white font-semibold shadow-sm"
                    : "text-[#8A8A8F] hover:text-[#F2F2F0]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* LOW FRICTION ENTRY: CONVERSION AUDIT */}
        <div className="mb-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#141416] via-[#1A1A1E] to-[#141416] border border-[#FF4D1F]/40 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_0_35px_rgba(255,77,31,0.08)]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LOW-FRICTION ENTRY POINT</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F2F0] mb-2">
                Conversion & Performance Audit
              </h3>
              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                A structured teardown of your current landing page or web application covering UX friction, messaging clarity, visual hierarchy, mobile speed bottlenecks, and high-impact conversion opportunities. Includes actionable report + Loom video walkthrough.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 self-start md:self-auto shrink-0">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#8A8A8F]">FIXED RATE</span>
                <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2F2F0]">
                  from {formatPrice(150)}
                </span>
                <span className="font-mono text-[10px] text-emerald-400">48-Hour Turnaround</span>
              </div>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-[#FF4D1F] hover:bg-[#e03e12] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(255,77,31,0.35)] transition-all"
              >
                Request Audit →
              </a>
            </div>
          </div>
        </div>

        {/* WEB SECTION */}
        <div className="mb-16">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#222226]">
            <span className="font-mono text-xs text-[#FF4D1F] font-bold">CATEGORY A</span>
            <span className="text-[#222226]">|</span>
            <h3 className="font-display text-xl font-bold text-[#F2F2F0]">
              Web & Digital Experiences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-[#141416] border border-[#222226] p-7 flex flex-col justify-between hover:border-[#FF4D1F]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222226]/70">
                    <span className="font-display text-lg font-bold text-[#F2F2F0]">
                      {tier.name}
                    </span>
                    <span className="font-mono text-xs text-[#8A8A8F]">
                      {tier.turnaround}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-[#8A8A8F] uppercase block">
                      STARTING FROM
                    </span>
                    <span className="font-display text-3xl font-bold text-[#FF4D1F]">
                      {formatPrice(tier.startingUsd)}
                    </span>
                  </div>

                  <p className="text-xs text-[#8A8A8F] mb-6 italic">{tier.idealFor}</p>

                  <div className="space-y-2.5">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F2F0]">
                        <Check className="w-3.5 h-3.5 text-[#FF4D1F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#222226]">
                  <a
                    href="#contact"
                    className="w-full py-2.5 rounded-lg border border-[#222226] hover:border-[#FF4D1F] hover:bg-[#FF4D1F]/10 text-xs font-mono text-[#F2F2F0] flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Scope {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF4D1F]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI & SYSTEMS SECTION */}
        <div className="mb-14">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#222226]">
            <span className="font-mono text-xs text-[#FF4D1F] font-bold">CATEGORY B</span>
            <span className="text-[#222226]">|</span>
            <h3 className="font-display text-xl font-bold text-[#F2F2F0]">
              AI Products & Automation Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiSystemsTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl bg-[#141416] border border-[#222226] p-7 flex flex-col justify-between hover:border-[#FF4D1F]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222226]/70">
                    <span className="font-display text-lg font-bold text-[#F2F2F0]">
                      {tier.name}
                    </span>
                    <span className="font-mono text-xs text-[#8A8A8F]">
                      {tier.turnaround}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-[#8A8A8F] uppercase block">
                      STARTING FROM
                    </span>
                    <span className="font-display text-3xl font-bold text-[#FF4D1F]">
                      {formatPrice(tier.startingUsd, tier.hasPlus ? "+" : "")}
                    </span>
                  </div>

                  <p className="text-xs text-[#8A8A8F] mb-6 italic">{tier.idealFor}</p>

                  <div className="space-y-2.5">
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F2F0]">
                        <Check className="w-3.5 h-3.5 text-[#FF4D1F] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#222226]">
                  <a
                    href="#contact"
                    className="w-full py-2.5 rounded-lg border border-[#222226] hover:border-[#FF4D1F] hover:bg-[#FF4D1F]/10 text-xs font-mono text-[#F2F2F0] flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Scope {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF4D1F]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scoping Disclaimer */}
        <div className="p-6 rounded-xl bg-[#141416] border border-[#222226] text-center font-mono text-xs text-[#8A8A8F] leading-relaxed">
          <p>
            <strong className="text-[#F2F2F0]">Individual Project Scoping:</strong> Every project is scoped individually. Final pricing depends on technical complexity, third-party integrations, content requirements, page count, and deployment timeline. Custom enterprise systems are open-ended.
          </p>
        </div>
      </div>
    </section>
  );
};
