"use client";

import { ShieldCheck, Cpu, GitCommit, CheckCircle2 } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Background &amp; Philosophy
          </p>
          <h2 className="font-display text-section text-white">
            Engineering software that survives production
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            A background rooted in formal artificial intelligence, distributed systems scale, and relentless attention to edge cases.
          </p>
        </header>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-14 items-start">
          {/* Left Column (7 cols): Narrative */}
          <div className="md:col-span-7 space-y-5 text-[15px] sm:text-[16px] leading-relaxed text-zinc-300">
            <p>
              I am an AI developer and undergraduate at <span className="text-white font-semibold">IIT Gandhinagar</span> specializing in Artificial Intelligence. My work sits at the intersection where modern LLM architectures meet production backend reliability.
            </p>
            <p>
              During my engineering work at <span className="text-white font-semibold">Soket AI Labs</span>, I designed compiler-feedback validation loops and scaled code-transpilation pipelines across Kubernetes and SLURM to process over <span className="text-blue-400 font-medium">1.8 million files</span> and <span className="text-blue-400 font-medium">6.1 billion tokens</span> without data loss.
            </p>
            <p>
              Whether orchestrating synthetic mathematical reasoning datasets with DeepSeek-V3.2, engineering multi-threaded web scraping workers, or building ACID-compliant storage engines with write-ahead logging from first principles, I believe great software is defined by how gracefully it handles failures, retries, and high-concurrency pressure.
            </p>
            <p className="text-zinc-400 text-[14px]">
              When collaborating with founders, engineering leads, and freelance clients worldwide, I prioritize clear asynchronous communication, rigorous test suites, and turnkey codebases that your internal team can deploy and maintain effortlessly.
            </p>
          </div>

          {/* Right Column (5 cols): 3 Unique Engineering Commitments */}
          <div className="md:col-span-5 space-y-4">
            <SpotlightCard className="p-5 sm:p-6 border-white/[0.08] bg-[#0c0c0f]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white">
                  Deterministic Guardrails First
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-400">
                I never rely on bare LLM prompts for mission-critical logic. Every output is strictly bounded by Pydantic schemas, AST diffing, or automated compiler feedback loops.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-5 sm:p-6 border-white/[0.08] bg-[#0c0c0f]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Cpu size={18} />
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white">
                  High-Throughput Concurrency Native
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-400">
                Having scaled jobs across 36 pods and 180 parallel workers, I engineer sliding-window batching, token-bucket rate limits, and atomic checkpointing into every pipeline.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-5 sm:p-6 border-white/[0.08] bg-[#0c0c0f]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <GitCommit size={18} />
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white">
                  Turnkey Handover &amp; Pytest Suites
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-400">
                No messy scripts. Every client engagement includes Dockerized environments, 90%+ automated test suites, OpenAPI documentation, and a 30-day post-launch warranty.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
