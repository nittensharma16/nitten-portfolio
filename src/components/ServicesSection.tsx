"use client";

import React from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { ArrowUpRight, Check, Code, Cpu, Workflow } from "lucide-react";

export const ServicesSection: React.FC = () => {
  const { formatPrice } = useCurrency();

  const services = [
    {
      number: "01",
      name: "WEB",
      tagline: "Digital experiences that look premium and communicate clearly.",
      startingUsd: 800,
      icon: Code,
      items: [
        "High-converting landing pages",
        "Multi-page corporate & product websites",
        "Bespoke interactive 3D WebGL builds",
        "Conversion optimization & performance audits",
      ],
      deliverables: "Next.js / React · Tailwind · 90+ Lighthouse · Strict Accessibility",
    },
    {
      number: "02",
      name: "AI",
      tagline: "AI-powered products and integrations that turn models into useful software.",
      startingUsd: 1000,
      hasPlus: true,
      icon: Cpu,
      items: [
        "Production LLM integrations & function calling",
        "RAG pipelines & internal knowledge search",
        "Autonomous agent workflows & multi-turn bots",
        "Custom internal AI tools & administrative consoles",
      ],
      deliverables: "OpenAI / Claude / Local LLMs · FastAPI · Vector Stores · Strict Schema Guardrails",
    },
    {
      number: "03",
      name: "AUTOMATION",
      tagline: "Systems that connect tools, APIs and AI to eliminate repetitive work.",
      startingUsd: 2500,
      hasPlus: true,
      icon: Workflow,
      items: [
        "End-to-end data extraction & headless web scrapers",
        "Complex multi-step workflow automation",
        "Automated financial & operational reporting",
        "Bespoke API glue, webhooks & CRM synchronization",
      ],
      deliverables: "Python · Redis · Playwright · Multi-inbox SMTP Pools · High-concurrency Queues",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative border-t border-[#222226] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#F2F2F0] tracking-tight uppercase">
            Three Things I Build
          </h2>
          <p className="text-base sm:text-lg text-[#8A8A8F] mt-4 font-light leading-relaxed">
            I don&apos;t sell generic freelance packages. I build production-grade web interfaces, AI product architectures, and deterministic automation systems.
          </p>
        </div>

        {/* 3 Columns Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="group rounded-2xl bg-[#141416] border border-[#222226] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF4D1F]/70 hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle top ember border line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#FF4D1F] transition-colors" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222226]">
                  <span className="font-mono text-xs text-[#FF4D1F] font-bold">
                    {svc.number} / {svc.name}
                  </span>
                  <div className="font-mono text-xs text-[#8A8A8F]">
                    STARTING AT{" "}
                    <span className="text-[#F2F2F0] font-bold">
                      {formatPrice(svc.startingUsd, svc.hasPlus ? "+" : "")}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F2F2F0] mb-3">
                  {svc.name} Systems
                </h3>

                <p className="text-sm text-[#8A8A8F] leading-relaxed mb-6">
                  {svc.tagline}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 mb-8">
                  {svc.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F2F0]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1F] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Deliverable Strip */}
              <div className="pt-4 border-t border-[#222226] font-mono text-[11px] text-[#8A8A8F]">
                <span className="text-[#FF4D1F] block mb-1">CORE DELIVERABLE:</span>
                <span>{svc.deliverables}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
