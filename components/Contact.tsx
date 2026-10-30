"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Copy, Check, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [showForm, setShowForm] = useState(false);

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
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
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
        {/* Apple-style Hero Banner Card with Ambient Glow */}
        <div className="relative overflow-hidden flex flex-col items-center rounded-[28px] border border-white/[0.08] bg-[#0c0c0e] px-6 sm:px-8 py-16 text-center md:py-20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          {/* Subtle top ambient radial highlight */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-[12px] font-medium text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="radar-wave absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            Accepting Q4 2026 / 2027 Freelance Contracts
          </span>

          <h2 className="max-w-2xl font-display text-section text-white mb-4">
            Open to freelance AI projects, backend contracts, and technical collaborations.
          </h2>

          <p className="max-w-md text-[16px] text-zinc-400 mb-8">
            Usually replies within 24 hours. Have an upcoming project or technical problem? Let's discuss.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
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
          </div>

          {/* Toggle form button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="text-[13px] text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors flex items-center gap-1.5"
          >
            <MessageSquare size={13} />
            <span>{showForm ? "Hide message form" : "Or send a message through the website →"}</span>
          </button>

          {/* Expandable Form */}
          {showForm && (
            <div className="w-full max-w-lg mt-8 pt-8 border-t border-white/[0.08] text-left animate-in fade-in duration-300">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
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
                    <label className="block text-[12px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
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
                  <label className="block text-[12px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                    Project Type
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={INPUT + " appearance-none"}
                  >
                    <option value="" disabled className="bg-zinc-900 text-zinc-400">
                      Select project area...
                    </option>
                    <option className="bg-zinc-900 text-white">AI Agents & LLM Applications</option>
                    <option className="bg-zinc-900 text-white">Python Automation & Custom Scripting</option>
                    <option className="bg-zinc-900 text-white">Machine Learning & Computer Vision</option>
                    <option className="bg-zinc-900 text-white">FastAPI & Backend Engineering</option>
                    <option className="bg-zinc-900 text-white">Data Processing & ETL Pipelines</option>
                    <option className="bg-zinc-900 text-white">Intelligent Document Processing (PDF)</option>
                    <option className="bg-zinc-900 text-white">General Inquiry / Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-zinc-400 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or requirements..."
                    className={INPUT + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full btn-primary py-3 rounded-xl disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <span>Sending message...</span>
                  ) : status === "success" ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={16} /> Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={15} /> Send message
                    </span>
                  )}
                </button>

                {status === "success" && (
                  <p className="text-center text-[13px] text-emerald-400">
                    Thank you! I will reply to {form.email || "your email"} within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-[13px] text-red-400">
                    Could not send form directly. Please email me at {siteConfig.email}.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
