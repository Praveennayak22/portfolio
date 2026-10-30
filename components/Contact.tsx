"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Copy, Check, MessageSquare, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [budget, setBudget] = useState("< $1,500");
  const [form, setForm] = useState({ name: "", email: "", subject: "AI Agents & LLM Applications", message: "" });
  const [showForm, setShowForm] = useState(true);

  const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // Set at formspree.io

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const payload = { ...form, budget };
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "AI Agents & LLM Applications", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const INPUT =
    "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3 text-[14px] text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all";

  return (
    <section id="contact" className="w-full scroll-mt-24 py-20 md:py-28 border-b border-white/[0.06] bg-[#050507]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        {/* Creative Freelance Ingestion Hub */}
        <div className="relative overflow-hidden flex flex-col items-center rounded-[32px] border border-white/[0.1] bg-[#0c0c10] px-6 sm:px-10 py-16 text-center md:py-20 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          {/* Subtle top ambient radial highlight */}
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-blue-600/15 via-transparent to-transparent pointer-events-none" />

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3.5 py-1 text-[12px] font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Accepting Q4 2026 / 2027 Freelance Contracts
          </span>

          <h2 className="max-w-2xl font-display text-section text-white mb-4">
            Have an AI project or technical challenge? Let's build it together.
          </h2>

          <p className="max-w-xl text-[16px] text-zinc-400 mb-8">
            Usually replies within 12 hours. Open to milestone-based freelance contracts, bespoke AI systems, and technical consultations worldwide.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary group">
              <Mail size={16} />
              <span>Email directly</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={15} />
                  <span>Copy email address</span>
                </>
              )}
            </button>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Direct Embedded Inquiry Form */}
          <div className="w-full max-w-xl border-t border-white/[0.08] pt-8 text-left">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-[14px] font-semibold text-white">
                <Sparkles size={16} className="text-blue-400" />
                <span>Send a direct project inquiry</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Fast 12-hour turnaround</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={INPUT}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={INPUT}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Project Area
                </label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={INPUT + " appearance-none cursor-pointer"}
                >
                  <option className="bg-zinc-900 text-white">AI Agents &amp; LLM Applications</option>
                  <option className="bg-zinc-900 text-white">Python Automation &amp; Custom Web Scraping</option>
                  <option className="bg-zinc-900 text-white">FastAPI &amp; Backend Engineering</option>
                  <option className="bg-zinc-900 text-white">Intelligent Document Processing (PDF/OCR)</option>
                  <option className="bg-zinc-900 text-white">Machine Learning &amp; Computer Vision</option>
                  <option className="bg-zinc-900 text-white">General Architecture Consultation</option>
                </select>
              </div>

              {/* Quick Budget Picker */}
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Estimated Scope / Budget
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["< $1,500", "$1,500 – $4,000", "$4,000+"].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2 px-3 rounded-xl text-[12px] font-medium border text-center transition-all ${
                        budget === b
                          ? "bg-blue-600/20 border-blue-500 text-blue-300 font-semibold"
                          : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about what you'd like to build, your timeline, or any specific technical requirements..."
                  className={INPUT + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-primary py-3 text-[14px] font-medium flex items-center justify-center gap-2 group cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending your inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-[13px] text-emerald-400">
                  <CheckCircle size={16} />
                  <span>Thank you! Your message has been sent. I'll get back to you within 12 hours.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-[13px] text-amber-400">
                  <AlertCircle size={16} />
                  <span>
                    Form service is not yet configured. Please email me directly at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="underline font-semibold">
                      {siteConfig.email}
                    </a>
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
