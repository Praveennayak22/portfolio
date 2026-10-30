"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Skills
          </p>
          <h2 className="font-display text-section text-white">
            Tools and disciplines I reach for
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            Grouped by area, not ranked by percentage — the categories and actual shipped systems matter more than an arbitrary score.
          </p>
        </header>

        {/* 6-Category Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-display text-[15px] font-semibold text-white tracking-wide border-b border-white/[0.08] pb-2.5">
                {category}
              </h3>
              <ul className="space-y-2 text-[14px] text-zinc-400">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
