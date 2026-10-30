"use client";

import { useState } from "react";
import { Code2, Brain, Server, Database, Wrench, Share2, Check, Sparkles } from "lucide-react";
import { skills } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Programming Languages": Code2,
  "AI and Machine Learning": Brain,
  "Backend Technologies": Server,
  "Data Engineering": Database,
  "Developer Tools": Wrench,
  "APIs and Integrations": Share2,
};

export default function Skills() {
  const [filter, setFilter] = useState<string>("All");

  const categories = Object.keys(skills);

  const filteredCategories = filter === "All" 
    ? categories 
    : categories.filter(c => {
        if (filter === "AI & ML") return c.includes("AI") || c.includes("Machine");
        if (filter === "Backend") return c.includes("Backend") || c.includes("APIs");
        if (filter === "Data & Infra") return c.includes("Data") || c.includes("Tools");
        return true;
      });

  return (
    <section id="skills" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#070709]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
              Technical Stack &amp; Tooling
            </p>
            <h2 className="font-display text-section text-white">
              Tools and disciplines I build with
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] text-zinc-400 max-w-xl">
              Categorized by domain with zero arbitrary percentage bars — each technology backed by real production code and verifiable projects.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["All", "AI & ML", "Backend", "Data & Infra"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition-all ${
                  filter === tab
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Category Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category] || Code2;
            const items = skills[category] || [];

            return (
              <SpotlightCard key={category} className="p-6 border-white/[0.08] bg-[#0c0c0f] flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.06]">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-[15px] font-semibold text-white tracking-wide">
                      {category}
                    </h3>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[12px] font-medium text-zinc-300 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/5 transition-all"
                      >
                        <span className="h-1 w-1 rounded-full bg-blue-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{items.length} tools verified</span>
                  <span className="text-emerald-400/80">production-ready</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Client Guarantee Banner */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="text-[14px] font-medium text-white">Need an integration with a bespoke library or internal stack?</p>
              <p className="text-[12px] text-zinc-400">If it runs on Linux, Python, or standard cloud APIs, I can architect and ship it.</p>
            </div>
          </div>
          <a href="#contact" className="btn-secondary text-[12px] py-1.5 px-4 flex-shrink-0">
            Discuss Your Stack
          </a>
        </div>
      </div>
    </section>
  );
}
