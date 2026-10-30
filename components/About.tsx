"use client";

export default function About() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-18">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            About
          </p>
          <h2 className="font-display text-section text-white">
            A little more about how I work
          </h2>
        </header>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 items-start">
          {/* Left Column (7 cols): Narrative */}
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-zinc-300">
            <p>
              I'm an undergraduate at <span className="text-white font-medium">IIT Gandhinagar</span> specializing
              in Artificial Intelligence, with a strong focus on building dependable, real-world software systems.
            </p>
            <p>
              My work centers on the boundary where applied AI meets distributed systems and backend engineering.
              During my internship at <span className="text-white font-medium">Soket AI Labs</span>, I designed
              compiler-feedback validation loops and scaled code-transpilation workloads across Kubernetes and
              SLURM to process over 1.8 million files with zero data loss.
            </p>
            <p>
              Whether orchestrating synthetic data generation for LLM post-training, building multimodal neural classifiers,
              or engineering transaction-aware storage engines with WAL and crash recovery from first principles,
              I treat reliability, clean schema design, and reproducible evaluation as non-negotiable foundations.
            </p>
            <p className="text-zinc-400 text-[15px]">
              Outside software and machine learning, I enjoy exploring algorithm design, competitive systems challenges,
              and collaborating with founders and engineering teams globally on complex freelance projects.
            </p>
          </div>

          {/* Right Column (5 cols): Core Principles (Manoj-inspired) */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-[20px] border border-white/[0.07] bg-[#0c0c0e] p-6 hover:border-white/[0.14] transition-all">
              <h3 className="font-display text-[15px] font-semibold text-white mb-2">
                Correctness before convenience
              </h3>
              <p className="text-[14px] leading-relaxed text-zinc-400">
                I design for deterministic behavior and explicit safeguards first. An AI pipeline that hallucinates or fails silently under load is worse than no pipeline at all.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/[0.07] bg-[#0c0c0e] p-6 hover:border-white/[0.14] transition-all">
              <h3 className="font-display text-[15px] font-semibold text-white mb-2">
                Benchmarks over assumptions
              </h3>
              <p className="text-[14px] leading-relaxed text-zinc-400">
                Every claim of performance should come with latency numbers, ablation studies, unit tests, or reproducible evaluations — not intuition or marketing hype.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/[0.07] bg-[#0c0c0e] p-6 hover:border-white/[0.14] transition-all">
              <h3 className="font-display text-[15px] font-semibold text-white mb-2">
                Cross-domain resilience
              </h3>
              <p className="text-[14px] leading-relaxed text-zinc-400">
                The most reliable AI systems borrow heavily from classic distributed systems — Write-Ahead Logging, idempotent retry queues, schema enforcement, and fault-tolerant checkpointing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
