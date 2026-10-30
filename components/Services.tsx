"use client";

import {
  Bot,
  Zap,
  Brain,
  Server,
  GitBranch,
  FileSearch,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

const ICONS: Record<string, React.ElementType> = {
  Bot,
  Zap,
  Brain,
  Server,
  GitBranch,
  FileSearch,
};

export default function Services() {
  return (
    <section id="services" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Services &amp; Capabilities
          </p>
          <h2 className="font-display text-section text-white">
            What I build for clients
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            Specialized engineering across applied AI, automated workflows, and backend infrastructure. Built for reliability, precision, and production scale.
          </p>
        </header>

        {/* 6 Clean Cards Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = ICONS[s.icon] || Bot;
            return (
              <SpotlightCard
                key={idx}
                className="group flex flex-col justify-between p-7"
              >
                <div>
                  {/* Icon */}
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white mb-6 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:scale-105 transition-all duration-300">
                    <Icon size={20} />
                  </div>

                  {/* Title & Short */}
                  <h3 className="font-display text-lg font-semibold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-zinc-400 mb-6">
                    {s.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {s.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-[13px] text-zinc-300">
                        <Check size={14} className="text-blue-400 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06]">
                  {s.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-zinc-400 group-hover:border-white/10 group-hover:text-zinc-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 text-center sm:text-left">
          <div>
            <h4 className="font-display text-[16px] font-semibold text-white">
              Have a custom AI or Python requirement not listed here?
            </h4>
            <p className="text-[14px] text-zinc-400 mt-0.5">
              I frequently build bespoke pipelines, scraping engines, and customized APIs.
            </p>
          </div>
          <Link href="#contact" className="btn-primary flex-shrink-0">
            <span>Discuss your project</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
