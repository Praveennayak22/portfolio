"use client";

import { Trophy, Award, GraduationCap } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const RECOGNITIONS = [
  {
    icon: Award,
    title: "IIT Gandhinagar Explorer Fellowship",
    period: "2024",
    description:
      "Competitive experiential learning programme for real-world AI research, selected competitively from across IIT Gandhinagar.",
  },
  {
    icon: Trophy,
    title: "Dakshana Foundation Scholar",
    period: "2023 – 2024",
    description:
      "Selected through a rigorous national entrance exam, ranking in the top 1% of candidates nationwide.",
  },
  {
    icon: GraduationCap,
    title: "Academic Honors & Distinctions",
    period: "2021 – 2022",
    description:
      "Consistently achieved top academic percentiles in national examinations (Class XII: 92.60%, Class X: 90.00% at J.N.V. Raichur).",
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Recognition
          </p>
          <h2 className="font-display text-section text-white">
            Selected achievements
          </h2>
        </header>

        {/* 3-Column Clean Cards with Spotlight */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {RECOGNITIONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <SpotlightCard
                key={i}
                className="group p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:scale-105 transition-all">
                    <Icon size={18} />
                  </div>
                  <span className="text-[12px] font-mono text-zinc-500">{r.period}</span>
                </div>
                <h3 className="font-display text-[16px] font-semibold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                  {r.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-zinc-400">
                  {r.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
