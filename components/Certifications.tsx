"use client";

import { useState } from "react";
import { Award, ExternalLink, Check, Copy, CheckCircle2, ShieldCheck, Globe, Brain, Network, Sparkles } from "lucide-react";
import { certifications, Certification } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

const CATEGORY_MAP = {
  "All": "All",
  "AI & ML": "AI & ML",
  "Full-Stack Web": "Full-Stack Web",
  "Systems & Networks": "Systems & Networks",
} as const;

type FilterKey = keyof typeof CATEGORY_MAP;

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCerts = activeFilter === "All"
    ? certifications
    : certifications.filter((c) => c.category === activeFilter);

  const handleCopyId = (credentialId: string) => {
    navigator.clipboard.writeText(credentialId);
    setCopiedId(credentialId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: Certification["category"]) => {
    switch (category) {
      case "AI & ML":
        return Brain;
      case "Full-Stack Web":
        return Globe;
      case "Systems & Networks":
        return Network;
      default:
        return Award;
    }
  };

  const getIssuerTheme = (issuer: string) => {
    if (issuer.includes("Stanford") || issuer.includes("DeepLearning")) {
      return {
        badgeBorder: "border-amber-500/25",
        badgeBg: "bg-amber-500/10",
        badgeText: "text-amber-300",
        dotBg: "bg-amber-400",
        ringGlow: "shadow-[0_0_12px_rgba(245,158,11,0.2)]",
      };
    }
    if (issuer.includes("London") || issuer.includes("Goldsmiths")) {
      return {
        badgeBorder: "border-blue-500/25",
        badgeBg: "bg-blue-500/10",
        badgeText: "text-blue-300",
        dotBg: "bg-blue-400",
        ringGlow: "shadow-[0_0_12px_rgba(59,130,246,0.2)]",
      };
    }
    return {
      badgeBorder: "border-indigo-500/25",
      badgeBg: "bg-indigo-500/10",
      badgeText: "text-indigo-300",
      dotBg: "bg-indigo-400",
      ringGlow: "shadow-[0_0_12px_rgba(99,102,241,0.2)]",
    };
  };

  return (
    <section id="certifications" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#07070a] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 mb-4 text-[12px] font-medium text-blue-300">
              <ShieldCheck size={14} className="text-blue-400" />
              <span>Independently Verified Credentials</span>
            </div>
            <h2 className="font-display text-section text-white">
              Certifications &amp; Accreditations
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] text-zinc-400 max-w-2xl">
              Formal specializations covering Machine Learning algorithms, full-stack web application development, and distributed systems — each verified via Coursera with permanent certificate IDs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", "AI & ML", "Full-Stack Web", "Systems & Networks"] as FilterKey[]).map((tab) => {
              const count = tab === "All"
                ? certifications.length
                : certifications.filter((c) => c.category === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[12px] font-medium transition-all ${
                    activeFilter === tab
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    activeFilter === tab ? "bg-black/10 text-black font-bold" : "bg-white/10 text-zinc-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => {
            const Icon = getCategoryIcon(cert.category);
            const theme = getIssuerTheme(cert.issuer);
            const isCopied = copiedId === cert.credentialId;

            return (
              <SpotlightCard
                key={cert.id}
                className="group flex flex-col justify-between p-6 sm:p-7 border-white/[0.08] bg-[#0c0c10]"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${theme.badgeBorder} ${theme.badgeBg} ${theme.badgeText}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${theme.dotBg}`} />
                        <span>{cert.issuerBadge}</span>
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Verified Status Pill */}
                    <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                      <CheckCircle2 size={11} />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[17px] sm:text-[18px] font-semibold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Instructor / Authority */}
                  {cert.instructor && (
                    <p className="text-[12px] font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
                      <span className="text-zinc-500">Instructor:</span>
                      <span className="text-zinc-300">{cert.instructor}</span>
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-zinc-400 mb-5">
                    {cert.description}
                  </p>

                  {/* Competencies Tags */}
                  <div className="mb-6">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2">
                      Key Competencies
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[11px] text-zinc-300 group-hover:border-white/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions: Credential ID Copy + Coursera Verify Link */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopyId(cert.credentialId)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] px-2.5 py-1 rounded-lg transition-all"
                    title="Click to copy Credential ID"
                  >
                    {isCopied ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">ID Copied!</span>
                      </>
                    ) : (
                      <>
                        <span className="text-zinc-500">ID:</span>
                        <span>{cert.credentialId}</span>
                        <Copy size={11} className="text-zinc-500 ml-0.5" />
                      </>
                    )}
                  </button>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-medium text-blue-400 hover:text-blue-300 group/link transition-colors"
                  >
                    <span>Verify on Coursera</span>
                    <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#0c0c0e] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="font-display text-[15px] font-semibold text-white">
                Lifelong Engineering &amp; Verification
              </h4>
              <p className="text-[13px] text-zinc-400">
                All credentials above are cryptographically verifiable and backed by hands-on project deliverables.
              </p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/praveen-kumar-52b41828b/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] px-4 py-2 rounded-xl transition-all whitespace-nowrap"
          >
            <span>View All on LinkedIn</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
