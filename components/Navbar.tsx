"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Simulator", href: "#simulator" },
  { label: "Selected Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none">
        <div className="mx-auto max-w-5xl pointer-events-auto">
          {/* Unified Command-Bar Island (Original & Creative) */}
          <div className="flex items-center justify-between rounded-full border border-white/[0.09] bg-[#0c0c0e]/80 px-3.5 py-2 sm:px-4 sm:py-2.5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.08)]">
            {/* Left Brand Identity */}
            <Link
              href="#top"
              className="flex items-center gap-2.5 group pl-1.5"
            >
              <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[14px] font-semibold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                  Praveen Kumar
                </span>
                <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline-block -mt-0.5">
                  AI Systems &amp; Full-Stack Web
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-150"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="flex items-center gap-2">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:px-4 text-[12px] sm:text-[13px] font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_16px_rgba(59,130,246,0.35)] transition-all duration-200 group overflow-hidden"
              >
                <Sparkles size={12} className="text-blue-200 animate-pulse" />
                <span className="hidden sm:inline">Hire Praveen</span>
                <span className="sm:hidden">Hire</span>
                <ArrowUpRight size={13} className="text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Mobile Hamburger Trigger */}
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle Navigation"
                className="md:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 hover:text-white transition-all shrink-0"
              >
                {open ? <X size={15} /> : <Menu size={15} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl bg-[#0e0e12]/95 backdrop-blur-2xl p-5 md:hidden border border-white/10 shadow-2xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3.5 py-2.5 text-[14px] font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 w-full py-2.5 rounded-full text-center text-[13px] font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all"
            >
              Hire Praveen — Let's Talk
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
