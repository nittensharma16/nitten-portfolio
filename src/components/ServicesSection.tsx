"use client";

import React from "react";
import { useCurrency } from "@/context/CurrencyContext";

export const ServicesSection: React.FC = () => {
  const { formatPrice } = useCurrency();

  const services = [
    {
      number: "01",
      name: "WEB",
      tagline: "Digital experiences that look premium and communicate clearly.",
      startingUsd: 800,
      items: [
        "High-converting landing pages",
        "Multi-page corporate & product websites",
        "Bespoke interactive 3D WebGL builds",
        "Conversion optimization & performance audits",
      ],
      focus: "Next.js · 90+ Lighthouse · Editorial Typography",
    },
    {
      number: "02",
      name: "AI",
      tagline: "AI-powered products and integrations that turn models into useful software.",
      startingUsd: 1000,
      hasPlus: true,
      items: [
        "Production LLM integrations & function calling",
        "RAG pipelines & internal knowledge search",
        "Autonomous agent workflows & multi-turn bots",
        "Custom internal AI tools & administrative consoles",
      ],
      focus: "OpenAI / Claude APIs · Strict Schema Guardrails",
    },
    {
      number: "03",
      name: "AUTOMATION",
      tagline: "Systems that connect tools, APIs and AI to eliminate repetitive work.",
      startingUsd: 2500,
      hasPlus: true,
      items: [
        "End-to-end data extraction & headless scrapers",
        "Complex multi-step workflow automation",
        "Automated financial & operational reporting",
        "Bespoke API glue & CRM synchronization",
      ],
      focus: "Python · Redis · Playwright · High-Concurrency Queues",
    },
  ];

  return (
    <section id="services" className="py-32 sm:py-44 relative border-t border-[#222226] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#F2F2F0] tracking-tight uppercase leading-[1.05]">
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
              className="group rounded-3xl bg-[#141416] border border-[#222226] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#FF4D1F]/50 relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222226]">
                  <span className="font-mono text-xs text-[#FF4D1F] font-bold">
                    {svc.number} / {svc.name}
                  </span>
                  <div className="font-mono text-xs text-[#8A8A8F]">
                    FROM{" "}
                    <span className="text-[#F2F2F0] font-semibold">
                      {formatPrice(svc.startingUsd, svc.hasPlus ? "+" : "")}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F2F2F0] mb-3">
                  {svc.name} Systems
                </h3>

                <p className="text-sm text-[#8A8A8F] font-light leading-relaxed mb-8">
                  {svc.tagline}
                </p>

                {/* Capabilities List */}
                <div className="space-y-3 mb-10">
                  {svc.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F2F0]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1F] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Focus Line */}
              <div className="pt-4 border-t border-[#222226] font-mono text-[11px] text-[#8A8A8F] flex items-center justify-between">
                <span>STACK:</span>
                <span className="text-[#F2F2F0]">{svc.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
