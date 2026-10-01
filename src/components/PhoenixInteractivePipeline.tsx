"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Database, Filter, Mail, MessageSquare, ShieldCheck, Zap } from "lucide-react";

interface PipelineStage {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  systemAction: string;
  techPayload: string;
  latencyOrStat: string;
  guardrail: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "discovery",
    number: "01",
    name: "Lead Discovery",
    shortDesc: "Targeted domain scraping & deduplication",
    systemAction: "Ingests B2B domains and registry lists, removes duplicate domains, and executes DNS MX checks.",
    techPayload: `// Ingestion & DNS Verification Schema
POST /api/v1/pipeline/ingest
{
  "domain": "acme-logistics.io",
  "dns_mx_valid": true,
  "headquarters": "London, UK",
  "estimated_headcount": "20-50",
  "status": "QUEUED_FOR_EVAL"
}`,
    latencyOrStat: "1,200 domains/hr",
    guardrail: "Rejects disposable inboxes and dead DNS records automatically before token spend.",
  },
  {
    id: "qualification",
    number: "02",
    name: "AI Qualification",
    shortDesc: "Two-tier ICP criteria verification",
    systemAction: "Scrapes homepage & about pages via headless browser, running structured JSON extraction against client ICP rules.",
    techPayload: `// LLM Qualification Evaluation
const qualificationGate = {
  rule_01_b2b_service: true,
  rule_02_min_arr_signals: true,
  rule_03_active_hiring: true,
  confidence_score: 0.94,
  decision: "PROCEED_TO_HOOK_GENERATION"
};`,
    latencyOrStat: "850ms / evaluation",
    guardrail: "Drops out-of-market companies early, saving 65% of unnecessary downstream compute.",
  },
  {
    id: "personalization",
    number: "03",
    name: "Personalization",
    shortDesc: "Context-grounded hook generation",
    systemAction: "Analyzes specific public bottlenecks and recent case studies to generate a tailored 2-sentence opening observation.",
    techPayload: `// Context-Grounded Dynamic Hook
{
  "prospect": "David Miller, VP Logistics",
  "observation": "Noticed your recent shift to automated customs clearing across EU hubs.",
  "bridge_hook": "Most teams we talk to in logistics struggle with tariff reconciliation lag at that stage.",
  "tone_grade": "PEER_TO_PEER",
  "ai_buzzwords_detected": 0
}`,
    latencyOrStat: "28 words max",
    guardrail: "Zero-tolerance for generic compliments ('love what you do') or fake flattery.",
  },
  {
    id: "outreach",
    number: "04",
    name: "Outreach Dispatch",
    shortDesc: "Multi-inbox rotating SMTP delivery",
    systemAction: "Distributes sending across 15+ warmed domain nodes with human-like randomized spacing.",
    techPayload: `// SMTP Routing Dispatcher
{
  "node_id": "smtp-outbound-pool-04",
  "spf_verified": true,
  "dkim_signature": "VALID",
  "dmarc_policy": "REJECT",
  "delay_jitter": "142s",
  "inbox_placement_score": 99.4
}`,
    latencyOrStat: "99.2% Primary Inbox",
    guardrail: "Daily sending caps per domain node ensure domain burn protection.",
  },
  {
    id: "classification",
    number: "05",
    name: "Reply Classification",
    shortDesc: "Zero-shot semantic triage & escalation",
    systemAction: "Incoming replies are classified within seconds into 4 intent buckets and routed via webhooks.",
    techPayload: `// Webhook Triage Payload
{
  "sender": "david@acme-logistics.io",
  "sentiment": "POSITIVE_INTEREST",
  "intent": "REQUEST_CALENDAR_LINK",
  "confidence": 0.98,
  "action": "DISPATCH_SLACK_URGENT_CALENDAR"
}`,
    latencyOrStat: "12s turnaround",
    guardrail: "Escalates high-intent buyers immediately while quietly archiving unsubscribes.",
  },
  {
    id: "followup",
    number: "06",
    name: "Dynamic Follow-Up",
    shortDesc: "Value-add non-spamming sequences",
    systemAction: "Sends contextual follow-ups referencing prior interactions or halts instantly on reply.",
    techPayload: `// Thread State Manager
{
  "thread_status": "ACTIVE_AWAITING_REPLY",
  "step": 2,
  "delay_window": "3_BUSINESS_DAYS",
  "auto_cancel_on_reply": true
}`,
    latencyOrStat: "100% thread hygiene",
    guardrail: "Immediate kill-switch halts all queue items upon any contact response.",
  },
  {
    id: "dashboard",
    number: "07",
    name: "Executive Dashboard",
    shortDesc: "Real-time pipeline analytics",
    systemAction: "Unified operational view showing conversion rates, deliverability metrics, and booked meetings.",
    techPayload: `// Aggregated Performance Metrics
{
  "total_discovered": 12450,
  "qualified_icp_rate": "34.2%",
  "delivered": 4210,
  "positive_reply_rate": "4.8%",
  "meetings_booked": 84,
  "burned_domains": 0
}`,
    latencyOrStat: "Real-time Telemetry",
    guardrail: "Sanitized data feeds provide leadership transparency without data leakage.",
  },
];

export const PhoenixInteractivePipeline: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<PipelineStage>(STAGES[1]);

  return (
    <div className="w-full bg-[#141416] border border-[#222226] rounded-xl p-6 sm:p-8 relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#222226] gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Infrastructure Architecture</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F2F2F0]">
            Autonomous Outbound System Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#8A8A8F] bg-[#0A0A0B] px-3 py-1.5 rounded border border-[#222226]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>PRODUCTION ARCHITECTURE</span>
        </div>
      </div>

      {/* Horizontal Pipeline Steps Bar */}
      <div className="mb-8 overflow-x-auto pb-3 scrollbar-thin">
        <div className="flex items-center gap-2 min-w-[720px]">
          {STAGES.map((stage, idx) => {
            const isSelected = selectedStage.id === stage.id;
            return (
              <React.Fragment key={stage.id}>
                <button
                  onClick={() => setSelectedStage(stage)}
                  className={`flex-1 text-left p-3 rounded-lg border transition-all duration-300 relative ${
                    isSelected
                      ? "bg-[#0A0A0B] border-[#FF4D1F] shadow-[0_0_15px_rgba(255,77,31,0.25)]"
                      : "bg-[#1A1A1E]/60 border-[#222226] hover:border-[#8A8A8F]/40 hover:bg-[#1A1A1E]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        isSelected ? "text-[#FF4D1F]" : "text-[#8A8A8F]"
                      }`}
                    >
                      {stage.number}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1F]" />}
                  </div>
                  <div className="font-display text-xs font-semibold text-[#F2F2F0] truncate">
                    {stage.name}
                  </div>
                  <div className="font-mono text-[9px] text-[#8A8A8F] truncate mt-0.5">
                    {stage.latencyOrStat}
                  </div>
                </button>

                {idx < STAGES.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#8A8A8F]/40 shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0A0A0B] p-5 sm:p-6 rounded-lg border border-[#222226]">
        {/* Left Column: Logic & Operational Context */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase mb-2">
              <span>Stage {selectedStage.number} Deep Dive</span>
              <span>·</span>
              <span>{selectedStage.name}</span>
            </div>

            <h4 className="font-display text-xl font-bold text-[#F2F2F0] mb-3">
              {selectedStage.shortDesc}
            </h4>

            <p className="text-[#8A8A8F] text-sm leading-relaxed mb-5">
              {selectedStage.systemAction}
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-[#141416] border border-[#222226] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#F2F2F0] font-semibold block mb-0.5">
                    Fail-Safe Guardrail:
                  </span>
                  <span className="text-[#8A8A8F]">{selectedStage.guardrail}</span>
                </div>
              </div>

              <div className="p-3 rounded bg-[#141416] border border-[#222226] flex items-center justify-between">
                <span className="text-[#8A8A8F]">Measured Benchmark:</span>
                <span className="text-[#FF4D1F] font-bold">{selectedStage.latencyOrStat}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#222226] flex items-center justify-between text-xs font-mono text-[#8A8A8F]">
            <span>STATUS: ACTIVE & SANITIZED</span>
            <span className="text-[#F2F2F0]">SYSTEM CLOUD: FASTAPI + REDIS</span>
          </div>
        </div>

        {/* Right Column: Code & Sanitized Telemetry */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 font-mono text-[11px] text-[#8A8A8F]">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#FF4D1F]" />
              Sanitized Engine Payload
            </span>
            <span>JSON / TS</span>
          </div>
          <pre className="flex-1 bg-[#141416] p-4 rounded border border-[#222226] font-mono text-[11px] text-[#F2F2F0] overflow-x-auto leading-relaxed scrollbar-thin">
            <code>{selectedStage.techPayload}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
