"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-brand-bg/80" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-text font-sora">TranscriptLY</span>
          <WaveformIcon />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#how-it-works">How it works</NavLink>
          <NavLink href="#use-cases">Use Cases</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2 rounded-full border border-brand-indigo/30 text-brand-text hover:bg-brand-indigo/10 transition-all"
          >
            Try it free →
          </button>
        </div>

        <button className="md:hidden text-brand-text">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
            <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
            <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative text-brand-muted hover:text-brand-text transition-colors duration-200"
    >
      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-indigo after:transition-all after:duration-300 hover:after:w-full">
        {children}
      </span>
    </a>
  );
}

function WaveformIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-teal">
      <rect x="3" y="8" width="2" height="8" rx="1" className="animate-pulse" style={{ animationDelay: "0ms" }} />
      <rect x="8" y="6" width="2" height="12" rx="1" className="animate-pulse" style={{ animationDelay: "100ms" }} />
      <rect x="13" y="4" width="2" height="16" rx="1" className="animate-pulse" style={{ animationDelay: "200ms" }} />
      <rect x="18" y="8" width="2" height="8" rx="1" className="animate-pulse" style={{ animationDelay: "300ms" }} />
    </svg>
  );
}