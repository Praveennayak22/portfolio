"use client";

import { useState } from "react";
import { ArrowUpRight, Terminal, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { projects } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

interface VisualCardProps {
  title: string;
  category: string;
  badge: string;
  lines: string[];
  archDetails?: string[];
  testDetails?: string[];
}

function ProjectVisual({ title, category, badge, lines, archDetails, testDetails }: VisualCardProps) {
  const [tab, setTab] = useState<"terminal" | "arch" | "test">("terminal");
  const [isRunningTest, setIsRunningTest] = useState(false);

  const fallbackTests = [
    "$ pytest tests/ -v --benchmark",
    "tests/test_core.py::test_pipeline_init PASSED [ 33% ]",
    "tests/test_validation.py::test_strict_schema PASSED [ 66% ]",
    "tests/test_concurrency.py::test_throughput_180 PASSED [ 100% ]",
    "✓ 3 passed in 0.28s · 0 warnings · memory clean",
    "status: verified production-grade delivery"
  ];

  const displayLines = tab === "terminal" ? lines : tab === "arch" ? (archDetails || lines) : (testDetails || fallbackTests);

  const triggerTestRun = () => {
    setTab("test");
    setIsRunningTest(true);
    setTimeout(() => {
      setIsRunningTest(false);
    }, 600);
  };

  return (
    <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden rounded-[20px] bg-[#09090b] border border-white/[0.08] p-4 sm:p-5 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:border-white/[0.2] transition-all duration-300">
      {/* Top bar with terminal dots + Interactive Tab Switcher */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-red-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-amber-500/80 transition-colors" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-emerald-500/80 transition-colors" />
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.06]">
          <button
            onClick={() => setTab("terminal")}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono transition-all ${
              tab === "terminal"
                ? "bg-white/[0.1] text-white font-medium shadow-sm"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Terminal size={11} />
            <span>run</span>
          </button>
          <button
            onClick={() => setTab("arch")}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono transition-all ${
              tab === "arch"
                ? "bg-white/[0.1] text-white font-medium shadow-sm"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Layers size={11} />
            <span>arch</span>
          </button>
          <button
            onClick={triggerTestRun}
            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono transition-all ${
              tab === "test"
                ? "bg-emerald-500/20 text-emerald-300 font-medium shadow-sm"
                : "text-zinc-500 hover:text-emerald-400"
            }`}
            title="Click to run test simulation"
          >
            <CheckCircle2 size={11} />
            <span>test</span>
          </button>
        </div>
      </div>

      {/* Code / Architecture preview */}
      <div className="font-mono text-[11px] sm:text-[12px] leading-relaxed text-zinc-400 space-y-1.5 my-auto w-full min-w-0 overflow-hidden">
        {isRunningTest ? (
          <div className="py-6 flex flex-col items-center justify-center space-y-2 text-emerald-400">
            <span className="h-4 w-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-[11px] font-mono">Running automated test harness...</span>
          </div>
        ) : (
          displayLines.map((line, i) => (
            <div key={i} className="truncate w-full min-w-0">
              <span className="text-zinc-600 select-none mr-2">{i + 1}</span>
              {line.startsWith("$") ? (
                <span className="text-blue-400 font-semibold">
                  {line} <span className="animate-cursor text-blue-300">▍</span>
                </span>
              ) : line.startsWith("✓") ? (
                <span className="text-emerald-400 font-medium">{line}</span>
              ) : line.includes("PASSED") ? (
                <span className="text-emerald-300 font-mono">{line}</span>
              ) : line.includes(":") ? (
                <span>
                  <span className="text-zinc-300 font-medium">{line.split(":")[0]}:</span>
                  <span className="text-zinc-400">{line.slice(line.indexOf(":") + 1)}</span>
                </span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))
        )}
      </div>

      {/* Bottom badge with live status dot */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[11px] text-zinc-500 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span>production-ready</span>
        </span>
        <span className="text-blue-400 font-medium">{badge}</span>
      </div>
    </div>
  );
}

const PROJECT_VISUALS: Record<string, { badge: string; lines: string[]; arch: string[] }> = {
  bigmath: {
    badge: "53K+ traces verified",
    lines: [
      "$ slurm-pipeline --dataset 10+ sources --scale Evol-Instruct",
      "ingestion: 100K+ raw math problems (AIME, LIMO, DeepMath)",
      "mutation: 5-strategy instruction scaling with DeepSeek-V3.2",
      "teacher_eval: Kimi-K2.5 symbolic verification + rejection sampling",
      "✓ coverage: increased from 3.5% → 96.5%+ valid traces",
      "output: 53,000+ verified reasoning traces exported to Parquet",
    ],
    arch: [
      "stage_1: Multi-source ingestion & normalization (Parquet/JSONL)",
      "stage_2: MCQ-to-open-ended conversion via regex schema registry",
      "stage_3: Evol-Instruct mutation engine (5 distinct strategies)",
      "stage_4: Teacher reasoning trace generation (Kimi-K2.5 API)",
      "stage_5: Symbolic answer extraction with SymPy / numerical check",
      "✓ result: SLURM parallel jobs with checkpointing & failure resume",
    ],
  },
  meme: {
    badge: "+3.4% Macro-F1",
    lines: [
      "$ python train_multimodal.py --langs hi,te,ta,kn --gpu T4",
      "dataset: 13,700+ annotated memes with OCR text extraction",
      "backbone: IndicBERT + CLIP + VGG-19 + ConceptNet KG fusion",
      "parameters: 3.74M fusion head (frozen backbone weights)",
      "✓ evaluation: 3–4% Macro-F1 gain on code-mixed implicit harm",
      "serving: FastAPI real-time upload + inference endpoint",
    ],
    arch: [
      "modality_1: OCR image-to-text with bilingual preprocessing",
      "modality_2: IndicBERT textual semantic embeddings (768-d)",
      "modality_3: CLIP visual features + VGG-19 spatial attention",
      "modality_4: ConceptNet external knowledge graph enrichment",
      "classifier: 3.74M multimodal fusion head with focal loss",
      "✓ live_app: Web interface with real-time inference & confidence score",
    ],
  },
  ddr: {
    badge: "Auditable JSON output",
    lines: [
      "$ python generate_report.py --input inspection_report.pdf",
      "extractor: pdfplumber dual-stream text & thermal image parse",
      "llm_engine: Claude API with 7-section clinical diagnostic schema",
      "validation: strict Pydantic model with missing-data flagging",
      "✓ audit_log: 100% deterministic missing field alerts",
      "result: structured JSON report ready for engineer sign-off",
    ],
    arch: [
      "parser: pdfplumber coordinate-based table and thermal map extraction",
      "chunking: section-aware hierarchy preserving cross-references",
      "llm_prompt: structured prompt enforcing 7 distinct clinical sections",
      "validation: Pydantic v2 validation with explicit None-checks",
      "auditing: confidence markers & missing data telemetry logged",
      "✓ deliverable: production CLI script + structured JSON output",
    ],
  },
  transpiler: {
    badge: "1.8M+ files processed",
    lines: [
      "$ k8s-transpiler --cluster 36-pods --concurrent 180-req",
      "architecture: two-queue threaded design with AST dependency analysis",
      "validation: real compiler feedback loop (gcc, javac, tsc)",
      "retry_policy: automated diagnostic error recovery per pod",
      "checkpointing: zero data loss across SLURM & Kubernetes evictions",
      "✓ scale: 1.8M+ files and 6.1B tokens across 72 language pairs",
    ],
    arch: [
      "dispatcher: Sliding-window batch controller across 36 pods",
      "thread_model: Two-queue producer-consumer with mutex locking",
      "compiler_gate: Native gcc, javac, tsc automated validation",
      "feedback_loop: Compiler error logs fed into LLM refinement prompt",
      "fault_tolerance: Atomic file checkpoints on pod preemption",
      "✓ throughput: 180 concurrent requests sustained with zero drop",
    ],
  },
  dbms: {
    badge: "50+ unit/crash tests",
    lines: [
      "$ pytest tests/test_acid_transactions.py -v",
      "storage_engine: custom B+ Tree in Python with O(log n) scans",
      "durability: Write-Ahead Logging (WAL) with fsync consistency",
      "concurrency: 2PL shared/exclusive locks + deadlock detection",
      "crash_recovery: ARIES analysis, REDO, and UNDO replay",
      "✓ test_suite: 50+ mid-transaction crash scenarios passed",
    ],
    arch: [
      "storage: Disk-paged B+ Tree with split/merge node balancing",
      "wal_engine: Append-only log with LSN numbering and fsync guarantees",
      "lock_manager: 2PL (Two-Phase Locking) with wait-die deadlock aborts",
      "recovery: ARIES 3-phase restart (Analysis, REDO, UNDO)",
      "api_layer: 40+ REST endpoints exposing relational query planning",
      "✓ verification: 50+ concurrency and crash simulation tests passed",
    ],
  },
  autostream: {
    badge: "End-to-end automation",
    lines: [
      "$ agent-stream --monitor social_channels --webhook-active",
      "intent_parser: LLM classifier for commercial purchase signals",
      "pipeline: lead extraction, qualification, and schema validation",
      "crm_sync: automated dispatch to CRM endpoints via FastAPI",
      "✓ reliability: structured output guaranteed via JSON schema",
      "result: zero manual tracking required for inbound leads",
    ],
    arch: [
      "listener: Event-driven webhook ingest for incoming social interactions",
      "classifier: Few-shot intent classifier filtering noise from intent",
      "entity_extract: Pydantic parsing of budget, timeline, and company",
      "dispatch: Async FastAPI queue forwarding to client CRM APIs",
      "monitoring: Structured telemetry logging conversion funnel",
      "✓ outcome: Automated conversion of passive social signals into leads",
    ],
  },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <header className="mb-14 max-w-2xl md:mb-20">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-blue-400">
            Selected work
          </p>
          <h2 className="font-display text-section text-white">
            A few projects worth a closer look
          </h2>
          <p className="mt-3 text-[16px] text-zinc-400">
            Each one started as an ambiguous problem. Here's what shipped, and what changed because of it.
          </p>
        </header>

        {/* Project Cards (Manoj-style 2-column with Spotlight Hover) */}
        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((p) => {
            const visual = PROJECT_VISUALS[p.id] || {
              badge: "Verified",
              lines: [p.title, p.tagline, p.problem, p.achievement],
              arch: [p.title, p.description],
            };

            return (
              <SpotlightCard
                key={p.id}
                className="group grid grid-cols-1 items-center gap-8 p-6 sm:p-8 md:grid-cols-2 md:gap-12 min-w-0"
              >
                {/* Column 1: Terminal / Visual Preview */}
                <div className="order-2 md:order-1 min-w-0 w-full overflow-hidden">
                  <ProjectVisual
                    title={p.title}
                    category={p.category}
                    badge={visual.badge}
                    lines={visual.lines}
                    archDetails={visual.arch}
                  />
                </div>

                {/* Column 2: Information & Details */}
                <div className="order-1 md:order-2 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[12px] font-mono text-blue-400 font-medium uppercase tracking-wider">
                      {p.category}
                    </span>
                    {p.highlight && (
                      <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[10px] text-blue-300 font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 group/link mb-4"
                  >
                    <h3 className="font-display text-2xl font-semibold text-white group-hover/link:text-blue-400 transition-colors">
                      {p.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-zinc-500 group-hover/link:text-blue-400 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all"
                    />
                  </a>

                  <p className="text-[15px] leading-relaxed text-zinc-300 mb-5">
                    {p.description}
                  </p>

                  {/* Problem & Achievement Callout */}
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 mb-5 space-y-2 text-[13px] backdrop-blur-sm">
                    <div>
                      <span className="font-semibold text-zinc-400">Problem: </span>
                      <span className="text-zinc-400">{p.problem}</span>
                    </div>
                    {p.achievement && (
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-emerald-400">Result: </span>
                          <span className="text-zinc-300">{p.achievement}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[12px] font-medium text-zinc-400 hover:border-white/20 hover:text-white transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
