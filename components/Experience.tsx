"use client";

import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-16">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Experience
          </p>
          <h2 className="font-display text-section text-white">
            Where I've worked
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            Industry experience in distributed AI systems, compiler validation, and high-scale execution.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative border-l border-white/[0.12] ml-3 pl-8 md:ml-4 md:pl-10 space-y-14">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Bullet Dot */}
              <span className="absolute -left-[calc(2rem+6px)] md:-left-[calc(2.5rem+6px)] top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-black shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-display text-xl font-semibold text-white">
                  {exp.role} <span className="text-zinc-500 font-normal">at</span>{" "}
                  <span className="text-blue-400">{exp.company}</span>
                </h3>
                <span className="text-[13px] font-medium text-zinc-400 flex items-center gap-1.5">
                  <Calendar size={13} className="text-zinc-500" />
                  {exp.period}
                </span>
              </div>

              <div className="text-[13px] text-zinc-500 mb-5 flex items-center gap-3">
                <span>Internship</span>
                <span>•</span>
                <span>Distributed Systems & LLM Engineering</span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mb-6 text-[15px] leading-relaxed text-zinc-300">
                {exp.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1.5 text-xs flex-shrink-0">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[12px] font-medium text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education entry on the timeline */}
          <div className="relative">
            <span className="absolute -left-[calc(2rem+6px)] md:-left-[calc(2.5rem+6px)] top-1.5 h-3 w-3 rounded-full bg-zinc-600 ring-4 ring-black" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-display text-xl font-semibold text-white">
                B.Tech. in Artificial Intelligence <span className="text-zinc-500 font-normal">at</span>{" "}
                <span className="text-zinc-200">Indian Institute of Technology, Gandhinagar</span>
              </h3>
              <span className="text-[13px] font-medium text-zinc-400">2023 – 2027</span>
            </div>
            <p className="text-[14px] text-zinc-400 leading-relaxed max-w-2xl mb-4">
              Core focus on machine learning algorithms, database internals, systems architecture, natural language processing, and scalable AI infrastructure. Current CPI: 7.21 / 10.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Machine Learning", "Databases", "Computer Vision", "NLP", "Operating Systems", "Mathematical Foundations of AI"].map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[12px] font-medium text-zinc-400"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
