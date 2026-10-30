"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Copy, Check, Sparkles } from "lucide-react";
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
      {/* Dynamic Ambient Background Glow & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        {/* Floating Ambient Light Beams */}
        <div
          className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full bg-blue-600/15 blur-[120px] animate-ambient-1"
        />
        <div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[130px] animate-ambient-2"
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[600px] h-[400px] rounded-full bg-indigo-600/10 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-12 md:px-8">
        {/* Left Column (7 cols) */}
        <div className="md:col-span-7 min-w-0">
          {/* Eyebrow with live pulse */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3.5 py-1 mb-5 text-[12px] font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Senior Undergraduate, AI — IIT Gandhinagar</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] tracking-tight">
            I build AI systems, Python automation, and dependable backend platforms.
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-zinc-400 mb-8">
            From LLM pipelines and compiler-validated transpilation to production FastAPI services
            and high-throughput data workflows. I help teams turn technical requirements into reliable software.
          </p>

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
            <Link href="#projects" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">View my work</span>
              <ArrowRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer-sweep pointer-events-none" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              <span>Get in touch</span>
            </Link>
          </div>

          {/* Client Trust Assurance Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>&lt; 12h response turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Direct engineer consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span>Milestone &amp; sprint contracts</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols) - Portrait Card */}
        <div className="md:col-span-5 min-w-0 flex justify-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] sm:max-w-sm overflow-hidden rounded-[24px] bg-[#141416] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] group transition-all duration-300 hover:border-white/25">
            <Image
              src="/praveen.png"
              alt="Portrait of Praveen Kumar"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 384px"
            />
            {/* Subtle bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Status indicator badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl px-3.5 py-2 frosted-pill border border-white/10 text-[12px] text-zinc-300 shadow-lg">
              <span className="flex items-center gap-2 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for freelance
              </span>
              <span className="text-zinc-500 font-normal">Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
