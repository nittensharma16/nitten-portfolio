"use client";

import React, { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { ArrowRight, Calendar, CheckCircle2, Clock, Mail, MessageSquare, Send, Sparkles } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { currency } = useCurrency();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Website",
    budget: "$2.5k–$5k",
    timeline: "2–4 weeks",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const services = ["Website", "AI", "Automation", "Audit", "Not sure"];

  const getBudgetOptions = () => {
    switch (currency) {
      case "AED":
        return ["Under 3.5k AED", "3.5k–9k AED", "9k–18k AED", "18k+ AED", "Not sure yet"];
      case "INR":
        return ["Under ₹80k", "₹80k–₹2L", "₹2L–₹4L", "₹4L+", "Not sure yet"];
      case "USD":
      default:
        return ["Under $1k", "$1k–$2.5k", "$2.5k–$5k", "$5k+", "Not sure yet"];
    }
  };

  const timelines = ["ASAP", "2–4 weeks", "1–2 months", "Flexible"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative border-t border-[#222226] bg-[#0A0A0B] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF4D1F]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Climax Headline */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D1F] uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-[#FF4D1F]" />
            <span>LET&apos;S TALK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F2F2F0] tracking-tight uppercase leading-[1.02] mb-6">
            So. What are we <br />
            <span className="text-stroke-hollow hover:text-stroke-active cursor-default transition-all">
              building?
            </span>
          </h2>

          <p className="font-display text-xl sm:text-3xl text-[#FF4D1F] font-bold tracking-tight mb-4">
            LET&apos;S MAKE SOMETHING IMPOSSIBLE.
          </p>

          <p className="text-base sm:text-xl text-[#8A8A8F] font-light max-w-2xl leading-relaxed">
            Tell me what you&apos;re trying to build, what&apos;s broken, or what you want automated. Every inquiry receives a direct technical response within 24 hours.
          </p>
        </div>

        {/* Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-[#141416] border border-[#222226] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#FF4D1F]/10 border border-[#FF4D1F] mx-auto flex items-center justify-center text-[#FF4D1F]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#F2F2F0]">
                  Got it. Project Scoped.
                </h3>
                <p className="text-[#8A8A8F] max-w-md mx-auto text-sm sm:text-base font-mono">
                  I review every technical inquiry personally and reply within 24 hours, Monday to Saturday.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "Website",
                        budget: "$2.5k–$5k",
                        timeline: "2–4 weeks",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg border border-[#222226] font-mono text-xs text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Contact Basics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0B] border border-[#222226] rounded-lg px-4 py-3 text-sm text-[#F2F2F0] placeholder-[#8A8A8F]/40 focus:outline-none focus:border-[#FF4D1F] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. david@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0B] border border-[#222226] rounded-lg px-4 py-3 text-sm text-[#F2F2F0] placeholder-[#8A8A8F]/40 focus:outline-none focus:border-[#FF4D1F] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                    Company / Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Systems or Stealth Startup"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0A0A0B] border border-[#222226] rounded-lg px-4 py-3 text-sm text-[#F2F2F0] placeholder-[#8A8A8F]/40 focus:outline-none focus:border-[#FF4D1F] transition-colors"
                  />
                </div>

                {/* 2. Service Selection */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                    Primary Service Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, service: svc })}
                        className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                          formData.service === svc
                            ? "bg-[#FF4D1F] text-white font-semibold"
                            : "bg-[#0A0A0B] border border-[#222226] text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F]/40"
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Budget Range */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                    Anticipated Budget ({currency})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {getBudgetOptions().map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                          formData.budget === b
                            ? "bg-[#FF4D1F] text-white font-semibold"
                            : "bg-[#0A0A0B] border border-[#222226] text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F]/40"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Timeline */}
                <div className="space-y-2.5">
                  <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                    Target Timeline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelines.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                          formData.timeline === t
                            ? "bg-[#FF4D1F] text-white font-semibold"
                            : "bg-[#0A0A0B] border border-[#222226] text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F]/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. What are you building? */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#8A8A8F] uppercase block">
                    What are you building? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the goals, existing stack, bottlenecks, or specific timeline constraints..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A0A0B] border border-[#222226] rounded-lg px-4 py-3 text-sm text-[#F2F2F0] placeholder-[#8A8A8F]/40 focus:outline-none focus:border-[#FF4D1F] transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#FF4D1F] hover:bg-[#e03e12] text-white font-mono text-sm tracking-wider uppercase font-semibold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,77,31,0.4)] transition-all active:scale-98 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>DISPATCHING...</span>
                  ) : (
                    <>
                      <span>Send It</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Calendar & Guarantee */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="bg-[#141416] border border-[#222226] rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-[#FF4D1F]">
                <Calendar className="w-4 h-4" />
                <span>PREFER A CONVERSATION?</span>
              </div>

              <h4 className="font-display text-2xl font-bold text-[#F2F2F0]">
                Book a 15-Minute Technical Call
              </h4>

              <p className="text-sm text-[#8A8A8F] leading-relaxed">
                If you prefer talking through your system requirements directly, book a focused 15-minute scoping call. No sales pitch, just direct technical feedback.
              </p>

              <a
                href="https://cal.com/nittensharma/15min"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-[#222226] bg-[#0A0A0B] hover:border-[#FF4D1F] text-xs font-mono text-[#F2F2F0] transition-all"
              >
                <span>Book 15 Minutes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF4D1F]" />
              </a>
            </div>

            <div className="bg-[#141416] border border-[#222226] rounded-2xl p-6 sm:p-8 space-y-4 font-mono text-xs text-[#8A8A8F]">
              <div className="text-[#F2F2F0] font-bold uppercase tracking-wider">
                Direct Contact
              </div>
              <div>
                <span className="block text-[#8A8A8F]">EMAIL:</span>
                <a
                  href="mailto:contact@nittensharma.com"
                  className="text-[#FF4D1F] hover:underline text-sm font-semibold"
                >
                  contact@nittensharma.com
                </a>
              </div>
              <div>
                <span className="block text-[#8A8A8F]">RESPONSE COMMITMENT:</span>
                <span className="text-[#F2F2F0]">Within 24 hours (Mon–Sat)</span>
              </div>
              <div>
                <span className="block text-[#8A8A8F]">LOCATION & SCHEDULE:</span>
                <span className="text-[#F2F2F0]">India · IST (UTC+5:30) · Working Globally</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
