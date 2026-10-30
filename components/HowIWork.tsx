"use client";

import { workflowSteps } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";

export default function HowIWork() {
  return (
    <section id="process" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Process &amp; Reliability
          </p>
          <h2 className="font-display text-section text-white">
            How I work with freelance clients
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            A transparent, milestone-driven workflow designed to deliver production-ready software without surprises or delays.
          </p>
        </header>

        {/* 5-Step Process Timeline */}
        <div className="relative border-l border-white/[0.12] ml-4 pl-8 md:ml-6 md:pl-10 space-y-10">
          {/* Animated Glowing Energy Line */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 opacity-70 animate-pipeline-pulse pointer-events-none" />

          {workflowSteps.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Number Badge Dot */}
              <span className="absolute -left-[calc(2rem+12px)] md:-left-[calc(2.5rem+12px)] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#141416] border border-blue-500/40 text-[11px] font-mono font-bold text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.3)] group-hover:border-blue-400 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.7)] group-hover:scale-110 transition-all duration-300">
                {step.step}
              </span>

              {/* Step Card with Spotlight */}
              <SpotlightCard className="p-6 md:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[12px] font-mono text-blue-400/80 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                    Phase {step.step} of 05
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-zinc-400 mb-4">
                  {step.description}
                </p>

                {/* Deliverables pill list */}
                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06] text-[12px] text-zinc-400">
                  <span className="text-zinc-500 font-mono text-[11px]">Deliverable:</span>
                  {idx === 0 && <span className="text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">System RFC &amp; Technical Scope Doc</span>}
                  {idx === 1 && <span className="text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">Data Flow Schema &amp; Milestone Schedule</span>}
                  {idx === 2 && <span className="text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">Tested Core Pipeline &amp; Async Check-in</span>}
                  {idx === 3 && <span className="text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">Pytest Suite + Concurrency Load Report</span>}
                  {idx === 4 && <span className="text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">Containerized Build, Docs &amp; 30-Day Support</span>}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Client Confidence Highlights */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="rounded-[18px] border border-white/[0.07] bg-[#09090b] p-5">
            <div className="flex items-center gap-2 mb-2 text-emerald-400 text-[14px] font-semibold">
              <CheckCircle2 size={16} />
              <span>Async &amp; Direct Comm</span>
            </div>
            <p className="text-[13px] text-zinc-400 leading-relaxed">
              Regular milestone summaries, Loom walkthroughs, and clear Slack / WhatsApp communication.
            </p>
          </div>

          <div className="rounded-[18px] border border-white/[0.07] bg-[#09090b] p-5">
            <div className="flex items-center gap-2 mb-2 text-blue-400 text-[14px] font-semibold">
              <CheckCircle2 size={16} />
              <span>Full Test Coverage</span>
            </div>
            <p className="text-[13px] text-zinc-400 leading-relaxed">
              Every deliverable includes automated pytest test suites and schema validation for edge cases.
            </p>
          </div>

          <div className="rounded-[18px] border border-white/[0.07] bg-[#09090b] p-5">
            <div className="flex items-center gap-2 mb-2 text-indigo-400 text-[14px] font-semibold">
              <CheckCircle2 size={16} />
              <span>Turnkey Handover</span>
            </div>
            <p className="text-[13px] text-zinc-400 leading-relaxed">
              Complete setup guide, Dockerfiles, and environment configs so your team can deploy immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
