"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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
      <header className="fixed top-0 left-0 right-0 w-full z-50 pt-3 sm:pt-4 pointer-events-none">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 pointer-events-auto">
          {/* Left pill: Name */}
          <Link
            href="#top"
            className="flex items-center gap-2 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 frosted-pill text-[13px] sm:text-[14px] font-semibold text-white tracking-tight hover:border-white/20 transition-all duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span>Praveen Kumar</span>
          </Link>

          {/* Center pill: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 frosted-pill">
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

          {/* Right pill: Action */}
          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-sm"
            >
              Get in touch
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Navigation"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full frosted-pill text-zinc-300 hover:text-white transition-all"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl frosted-pill p-5 md:hidden border border-white/10 shadow-2xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-[15px] font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 w-full py-2.5 rounded-full text-center text-[14px] font-medium bg-white text-black hover:bg-zinc-200 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
