"use client";

const TICKER_ITEMS = [
  { label: "1.8M+ Files Processed in Production", tag: "Scale" },
  { label: "53,000+ Verified AI Reasoning Traces", tag: "LLMs" },
  { label: "9 Languages AST Transpilation", tag: "Compilers" },
  { label: "36 Pods · 180 Concurrent Requests (SLURM & K8s)", tag: "HPC" },
  { label: "40+ Production REST Endpoints with FastAPI", tag: "Backend" },
  { label: "13,700+ Multimodal Datasets Annotated", tag: "ML" },
  { label: "100% Deterministic Testing & Checkpointing", tag: "Reliability" },
  { label: "Open for Worldwide Freelance AI Contracts", tag: "Available" },
  { label: "IIT Gandhinagar · Artificial Intelligence", tag: "Education" },
];

export default function TechTicker() {
  return (
    <div className="w-full border-y border-white/[0.06] bg-[#050507] py-4 overflow-hidden relative select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[13px] font-medium text-zinc-300 whitespace-nowrap">
              {item.label}
            </span>
            <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono uppercase text-zinc-500">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
