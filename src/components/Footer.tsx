"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#222226] bg-[#0A0A0B] pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Massive Editorial Brand Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#222226] gap-8">
          <div>
            <span className="font-mono text-xs text-[#FF4D1F] tracking-widest uppercase block mb-3">
              CREATIVE TECHNOLOGY STUDIO · NITTEN SHARMA
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#F2F2F0] tracking-tight uppercase leading-none select-none">
              Nitten Sharma
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 p-3 rounded-full bg-[#141416] border border-[#222226] text-[#8A8A8F] hover:text-[#F2F2F0] hover:border-[#FF4D1F] transition-all self-start md:self-auto"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Minimal Social & Contact Links */}
        <div className="py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#222226] font-mono text-xs text-[#8A8A8F]">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:contact@nittensharma.com"
              className="hover:text-[#FF4D1F] transition-colors flex items-center gap-1 text-[#F2F2F0]"
            >
              <span>contact@nittensharma.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/nitten-sharma"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF4D1F] transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://linkedin.com/in/nittensharma"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF4D1F] transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://fiverr.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF4D1F] transition-colors flex items-center gap-1"
            >
              <span>Fiverr</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="text-[#8A8A8F]">
            India · IST (UTC+5:30) · Working globally
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#8A8A8F]/70">
          <div>
            © {new Date().getFullYear()} NITTEN SHARMA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>DESIGNED & ENGINEERED BESPOKE</span>
            <span>·</span>
            <span>NEXT.js · THREE.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
