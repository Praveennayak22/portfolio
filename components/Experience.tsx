"use client";

import { Calendar, Cpu, GraduationCap, Building2, CheckCircle2, Award, Zap } from "lucide-react";
import { experience } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

export default function Experience() {
  return (
    <section id="experience" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-16">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Track Record &amp; Education
          </p>
          <h2 className="font-display text-section text-white">
            Where I've engineered systems
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            Real production experience at high scale: multi-language compiler validation, 1.8M+ file batching, and formal AI education.
          </p>
        </header>

        {/* Creative Cards Grid */}
        <div className="space-y-8">
          {/* Soket AI Labs Card */}
          <SpotlightCard className="p-6 sm:p-8 border-white/[0.08] bg-[#0c0c0f]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                      Technical Staff Intern
                    </h3>
                    <span className="text-zinc-500 font-normal">at</span>
                    <span className="text-blue-400 font-semibold text-lg sm:text-xl">Soket AI Labs</span>
                    <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[11px] font-mono text-blue-300">
                      Distributed Systems &amp; LLM Engineering
                    </span>
                  </div>
                  <p className="text-[13px] text-zinc-400">
                    High-throughput compiler validation and distributed LLM transpilation pipelines
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[13px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full w-fit">
                <Calendar size={13} className="text-zinc-500" />
                <span>Jul 2026 – Sep 2026</span>
              </div>
            </div>

            {/* Measurable Scale Callouts */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="font-display text-xl font-bold text-white tracking-tight">1.8M+ Files</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">6.1B tokens processed across 72 language pairs</div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="font-display text-xl font-bold text-white tracking-tight">36 Pods / 180 Workers</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Sliding-window batch controller on SLURM &amp; K8s</div>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5">
                <div className="font-display text-xl font-bold text-white tracking-tight">9 Languages AST</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Compiler validation harness (gcc, javac, tsc)</div>
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-6 text-[14px] sm:text-[15px] leading-relaxed text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span>Evaluated deterministic transpilation across 9 programming languages, benchmarking AST mappers and identifying semantic-gap limitations that motivated a hybrid LLM approach (GPT-O3/Qwen3-30B).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span>Architected a repository-level transpilation pipeline using a two-queue threaded design, integrating AST dependency analysis, real compiler validation (gcc, javac, tsc), and automated compiler-feedback retry loops.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span>Scaled distributed execution across SLURM and Kubernetes for all 72 language pairs — engineered a sliding-window batch controller (36 pods, 180 concurrent requests) to process 1.8M+ files and 6.1B tokens.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                <span>Diagnosed and resolved critical production bottlenecks including multi-threaded queue race conditions, Kubernetes naming collisions, and LLM request timeouts; implemented file-level checkpointing to ensure zero data loss on pod evictions.</span>
              </li>
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {["Python", "LLM APIs", "Kubernetes", "SLURM", "AST Analysis", "Compiler Validation", "Docker", "Pytest"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* IIT Gandhinagar Card */}
          <SpotlightCard className="p-6 sm:p-8 border-white/[0.08] bg-[#0c0c0f]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                      B.Tech. in Artificial Intelligence
                    </h3>
                    <span className="text-zinc-500 font-normal">at</span>
                    <span className="text-zinc-200 font-semibold text-lg sm:text-xl">Indian Institute of Technology, Gandhinagar</span>
                  </div>
                  <p className="text-[13px] text-zinc-400">
                    Comprehensive study of machine learning, system architectures, database engines, and high-performance algorithms
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[13px] font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full w-fit">
                <Calendar size={13} className="text-zinc-500" />
                <span>2023 – 2027</span>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <p className="text-[14px] sm:text-[15px] text-zinc-300 leading-relaxed">
                Core academic and laboratory coursework encompassing machine learning algorithms, database internals (B+ trees, WAL, ACID concurrency), computer vision, natural language processing, and scalable distributed computing.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Machine Learning Algorithms",
                  "Database Internals & Systems",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Operating Systems",
                  "Mathematical Foundations of AI",
                  "Data Structures & Algorithms"
                ].map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[12px] font-medium text-zinc-400"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
