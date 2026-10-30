"use client";

import { useState, useEffect } from "react";
import { Terminal, Play, CheckCircle2, Cpu, Zap, ArrowRight, RefreshCw, Database, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";

interface Scenario {
  id: string;
  name: string;
  tag: string;
  description: string;
  nodes: { label: string; sub: string }[];
  logs: string[];
  metrics: { label: string; value: string; detail: string }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "transpile",
    name: "AST + Compiler-Validated AI Transpiler",
    tag: "Soket AI Labs Architecture",
    description: "Evaluated across 9 languages. Pairs AST semantic mapping with LLM synthesis and automated compiler-feedback retry loops (gcc, javac, tsc).",
    nodes: [
      { label: "Source AST", sub: "9 Languages" },
      { label: "Two-Queue Scheduler", sub: "Threaded Pipeline" },
      { label: "Hybrid LLM Synthesis", sub: "GPT-O3 / Qwen" },
      { label: "Compiler Feedback", sub: "gcc / javac / tsc" },
      { label: "Verified Target", sub: "Zero Semantic Gap" },
    ],
    logs: [
      "$ transpiler --source cpp --target rust --verify-compiler",
      "[*] Parsing C++ AST: extracted 42 function symbols & memory layouts",
      "[*] Dispatching to ThreadQueue: worker-04 assigned to batch #819",
      "[*] LLM hybrid pass: generated target Rust source with borrow check hints",
      "[*] Invoking rustc compiler validation harness...",
      "✓ compiler exit code 0: 0 errors, 0 warnings (142ms)",
      "✓ 100% deterministic type safety verified across AST diff"
    ],
    metrics: [
      { label: "Target Languages", value: "9 Pairs", detail: "C++, Rust, Java, TS, Go" },
      { label: "Verification Pass", value: "99.4%", detail: "Automated compiler harness" },
      { label: "Parallel Throughput", value: "180 Req", detail: "36 distributed pods" },
      { label: "Avg Latency", value: "142ms", detail: "FastAST pre-filter" },
    ]
  },
  {
    id: "bigmath",
    name: "Distributed AI Training Data Synthesizer",
    tag: "BigMath / SLURM HPC",
    description: "Scales instruction mutation across 10+ mathematical problem sets using DeepSeek-V3.2 and symbolic verification.",
    nodes: [
      { label: "Raw Dataset", sub: "AIME & Olympiad" },
      { label: "SLURM Array", sub: "HPC Controller" },
      { label: "Evol-Instruct", sub: "5 Mutation Strategies" },
      { label: "Teacher Eval", sub: "Kimi-K2.5 Symbolic" },
      { label: "Parquet Dataset", sub: "53K+ Traces" },
    ],
    logs: [
      "$ sbatch run_bigmath_slurm.sh --nodes 4 --gpus-per-node 4",
      "[*] Ingesting 100K raw math challenges from 10 international benchmarks",
      "[*] Applying Evol-Instruct mutation: depth, constraint, reasoning step",
      "[*] Running Kimi-K2.5 symbolic verification engine...",
      "[*] Rejection sampling: pruned 46,900 invalid/sub-optimal proofs",
      "✓ Valid reasoning chains exported: 53,100 verified traces",
      "✓ Dataset serialized to Apache Parquet with Hugging Face schema"
    ],
    metrics: [
      { label: "Verified Traces", value: "53,000+", detail: "Full step-by-step proofs" },
      { label: "Raw Datasets", value: "10+ Sets", detail: "AIME, LIMO, DeepMath" },
      { label: "Filter Efficiency", value: "96.5%", detail: "Rejection sampling yield" },
      { label: "Export Format", value: "Parquet", detail: "Direct PyTorch/Hugging Face" },
    ]
  },
  {
    id: "leadagent",
    name: "Autonomous High-Throughput Scraping & Lead Agent",
    tag: "FastAPI + Async Worker",
    description: "Multi-threaded async web scraper with proxy rotation, LLM intent extraction, and automated CRM webhook dispatch.",
    nodes: [
      { label: "Async Ingestion", sub: "Multi-Source Feed" },
      { label: "Rate Limiter", sub: "Token Bucket + Proxy" },
      { label: "LLM Classification", sub: "Buyer Intent Extraction" },
      { label: "Pydantic Schema", sub: "Strict Validation" },
      { label: "Webhook Sync", sub: "CRM & DB Dispatch" },
    ],
    logs: [
      "$ uvicorn app.main:app --workers 4 --host 0.0.0.0 --port 8000",
      "[*] Ingestion queue active: listening to 12 target signal endpoints",
      "[*] Parsing incoming unstructured payload: 480 items queued",
      "[*] LLM intent classifier: identified 34 high-intent purchase signals",
      "[*] Pydantic v2 validation: strict type checking passed for 34/34 records",
      "[*] Webhook dispatched to client endpoint: status 200 OK",
      "✓ Batch finished in 0.38s. Zero data loss recorded."
    ],
    metrics: [
      { label: "Extraction Accuracy", value: "98.8%", detail: "Validated schema output" },
      { label: "Processing Speed", value: "< 400ms", detail: "Async event loop" },
      { label: "Zero Loss", value: "100%", detail: "Redis retry queue" },
      { label: "Payload Format", value: "JSON API", detail: "OpenAPI 3.1 compliant" },
    ]
  }
];

export default function LiveAiSimulator() {
  const [activeTab, setActiveTab] = useState<string>("transpile");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(4);
  const [visibleLogIndex, setVisibleLogIndex] = useState<number>(7);

  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setVisibleLogIndex(1);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsRunning(false);
          return 4;
        }
        return prev + 1;
      });
      setVisibleLogIndex((prev) => Math.min(prev + 2, current.logs.length));
    }, 450);
  };

  useEffect(() => {
    setActiveStep(4);
    setVisibleLogIndex(current.logs.length);
    setIsRunning(false);
  }, [activeTab, current.logs.length]);

  return (
    <section className="relative w-full scroll-mt-24 py-16 md:py-24 border-b border-white/[0.06] bg-[#070709] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/[0.07] blur-[150px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-3 text-[12px] font-medium text-blue-400">
              <Activity size={13} className="animate-pulse" />
              <span>Interactive Architecture Console</span>
            </div>
            <h2 className="font-display text-section text-white">
              Test my system architecture live
            </h2>
            <p className="mt-2 max-w-xl text-[15px] sm:text-[16px] text-zinc-400">
              Select an architecture below to see how I design, automate, and stress-test end-to-end AI pipelines for real client production.
            </p>
          </div>

          {/* Scenario Selector Pills */}
          <div className="flex flex-wrap gap-2">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-3.5 py-1.5 rounded-xl text-[13px] font-medium transition-all ${
                  activeTab === s.id
                    ? "bg-white text-black font-semibold shadow-md shadow-white/10"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {s.name.split(" ")[0]} {s.name.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Interactive Stage Container */}
        <SpotlightCard className="p-5 sm:p-7 border-white/[0.1] bg-[#0d0d10]">
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-[12px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                  {current.tag}
                </span>
                <span className="text-zinc-500 text-[12px]">·</span>
                <span className="text-[13px] text-zinc-300 font-medium">{current.name}</span>
              </div>
              <p className="text-[13px] text-zinc-400 max-w-2xl">{current.description}</p>
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium transition-all ${
                isRunning
                  ? "bg-blue-600/30 text-blue-300 border border-blue-500/30 cursor-wait"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-95"
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw size={14} className="animate-spin text-blue-300" />
                  <span>Executing Pipeline...</span>
                </>
              ) : (
                <>
                  <Play size={14} fill="currentColor" />
                  <span>Run Live Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Flow Nodes Visualizer */}
          <div className="my-8">
            <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Real-Time Pipeline Execution Flow
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {current.nodes.map((node, index) => {
                const isStepActive = index === activeStep;
                const isStepDone = index < activeStep || activeStep === 4;

                return (
                  <div
                    key={index}
                    className={`relative rounded-xl p-3.5 border transition-all duration-300 flex flex-col justify-between ${
                      isStepActive
                        ? "bg-blue-500/15 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]"
                        : isStepDone
                        ? "bg-white/[0.03] border-white/10 text-zinc-200"
                        : "bg-black/30 border-white/[0.04] text-zinc-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-500">0{index + 1}</span>
                      {isStepDone ? (
                        <CheckCircle2 size={13} className="text-emerald-400" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-zinc-700" />
                      )}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-white truncate">{node.label}</div>
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">{node.sub}</div>
                    </div>

                    {/* Step active pulse indicator */}
                    {isStepActive && (
                      <div className="absolute inset-0 rounded-xl border border-blue-400 animate-ping opacity-25 pointer-events-none" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Split: Live Logs Terminal + Architecture Telemetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-4">
            {/* Terminal Window (7 cols) */}
            <div className="lg:col-span-7 rounded-xl bg-black/70 border border-white/[0.08] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-white/[0.03] border-b border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-zinc-500">live-worker-stream.log</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  active
                </span>
              </div>

              <div className="p-3.5 sm:p-4 font-mono text-[11px] sm:text-[12px] leading-relaxed text-zinc-300 space-y-1.5 overflow-x-auto min-h-[170px]">
                {current.logs.slice(0, visibleLogIndex).map((line, idx) => (
                  <div key={idx} className="truncate">
                    {line.startsWith("$") ? (
                      <span className="text-blue-400 font-semibold">{line}</span>
                    ) : line.startsWith("✓") ? (
                      <span className="text-emerald-400 font-medium">{line}</span>
                    ) : (
                      <span className="text-zinc-400">{line}</span>
                    )}
                  </div>
                ))}
                {isRunning && (
                  <div className="text-blue-400 animate-pulse text-[11px]">
                    ▍ streaming task logs...
                  </div>
                )}
              </div>
            </div>

            {/* Telemetry Metrics (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {current.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 flex flex-col justify-between hover:border-white/15 transition-colors"
                >
                  <span className="text-[11px] font-medium text-zinc-400">{m.label}</span>
                  <div className="my-1.5 font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    {m.value}
                  </div>
                  <span className="text-[11px] text-zinc-500 truncate">{m.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Client Conversion Callout */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/[0.08] text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex-shrink-0">
                <Zap size={16} />
              </div>
              <div>
                <p className="text-[14px] font-medium text-white">
                  Looking for a custom version of this pipeline?
                </p>
                <p className="text-[12px] text-zinc-400">
                  I can build, test, and ship this directly to your cloud, Kubernetes cluster, or server.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="btn-primary flex-shrink-0 group text-[13px] py-2 px-4"
            >
              <span>Build this for my team</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
