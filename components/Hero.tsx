"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Copy, Check, Sparkles, Terminal, Activity, Layers, Cpu, ShieldCheck, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative flex w-full scroll-mt-24 items-center border-b border-white/[0.06] pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden">
      {/* Dynamic Ambient Background Glow & Subtle Technical Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Floating Ambient Light Beams */}
        <div
          className="absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[130px] animate-ambient-1"
        />
        <div
          className="absolute top-1/4 -right-20 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px] animate-ambient-2"
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[600px] h-[400px] rounded-full bg-indigo-600/10 blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-12 md:px-8">
        {/* Left Column (7 cols) - Creative Bio & Value Proposition */}
        <div className="md:col-span-7 min-w-0">
          {/* Eyebrow badge with live radar ping */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1 mb-5 text-[12px] font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span>Senior Undergraduate, B.Tech AI — IIT Gandhinagar</span>
          </div>

          {/* Main Headline with distinctive gradient emphasis */}
          <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-6 leading-[1.08] tracking-tight">
            Architecting <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">production AI systems</span>, modern full-stack web applications, and verified backend pipelines.
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-zinc-300/90 mb-6">
            From responsive React &amp; Next.js interfaces with MongoDB/PostgreSQL backends to multi-language AST transpilation and SLURM distributed pipelines. I build dependable systems that operate reliably at scale.
          </p>

          {/* Creative Quick Capability Switcher */}
          <div className="flex flex-wrap gap-2 mb-8">
            <a
              href="#simulator"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-zinc-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all"
            >
              <Cpu size={13} className="text-blue-400" />
              <span>Multi-Agent &amp; LLM Systems</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-zinc-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all"
            >
              <Globe size={13} className="text-emerald-400" />
              <span>Full-Stack Web (Next.js &amp; React)</span>
            </a>
            <a
              href="#simulator"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-zinc-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
            >
              <Activity size={13} className="text-cyan-400" />
              <span>HPC SLURM &amp; Batch Pipelines</span>
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[12px] font-medium text-zinc-300 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all"
            >
              <ShieldCheck size={13} className="text-indigo-400" />
              <span>Stanford &amp; UoL Certified</span>
            </a>
          </div>

          {/* Social Links & Copy Email */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-[14px] text-zinc-400">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            {/* Interactive Copy Email Action */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1 border border-white/[0.08] bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/20 transition-all text-[13px]"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={14} />
                  <span>{siteConfig.email}</span>
                  <Copy size={12} className="text-zinc-500" />
                </>
              )}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#simulator" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span>Test Live Architecture</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />
            </Link>
            <Link href="#projects" className="btn-secondary">
              <span>View Shipped Work</span>
            </Link>
          </div>

          {/* Client Trust Assurance Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>&lt; 12h turnaround response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Direct engineering consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span>Fixed-milestone &amp; sprint contracts</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols) - Creative Engineering HUD Portrait */}
        <div className="md:col-span-5 min-w-0 flex justify-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] sm:max-w-sm rounded-[24px] bg-[#141418] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-blue-500/40 p-1.5">
            {/* Technical HUD Corner Markers */}
            <div className="absolute -top-1.5 -left-1.5 text-blue-400/80 font-mono text-[11px] select-none pointer-events-none">
              ┌───
            </div>
            <div className="absolute -top-1.5 -right-1.5 text-blue-400/80 font-mono text-[11px] select-none pointer-events-none">
              ───┐
            </div>
            <div className="absolute -bottom-1.5 -left-1.5 text-blue-400/80 font-mono text-[11px] select-none pointer-events-none">
              └───
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 text-blue-400/80 font-mono text-[11px] select-none pointer-events-none">
              ───┘
            </div>

            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[20px]">
              <Image
                src="/praveen.png"
                alt="Portrait of Praveen Kumar - AI & Python Developer"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 384px"
              />

              {/* Subtle bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Creative Floating Telemetry Badges */}
              {/* Top-Right Telemetry Chip */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/70 px-2.5 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>Soket AI Labs</span>
              </div>

              {/* Bottom Status Card */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl px-3 py-2 bg-black/80 border border-white/15 text-[12px] text-zinc-300 backdrop-blur-md shadow-xl">
                <span className="flex items-center gap-2 font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span>Available for freelance</span>
                </span>
                <span className="text-zinc-400 font-mono text-[11px]">Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
