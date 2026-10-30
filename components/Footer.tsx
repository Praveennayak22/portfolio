"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.08] bg-black py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-8">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-[14px] font-medium text-white">
            Praveen Kumar
          </p>
          <p className="text-[13px] text-zinc-500">
            © {currentYear} Praveen Kumar. AI &amp; Python Developer. All rights reserved.
          </p>
        </div>

        {/* Right: Quick Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-zinc-400">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
