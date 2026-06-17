"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex items-end gap-[3px]">
            <span className="w-[3px] rounded-full bg-brand-indigo animate-waveform1" />
            <span className="w-[3px] rounded-full bg-brand-indigo animate-waveform2" />
            <span className="w-[3px] rounded-full bg-brand-indigo animate-waveform3" />
          </span>
          <span className="font-sora font-semibold text-brand-text text-lg tracking-tight">
            TranscriptLY
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-brand-muted hover:text-brand-text transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-indigo after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#app-embed"
            className="text-sm px-4 py-2 rounded-full border border-brand-border text-brand-text hover:border-brand-indigo hover:text-white transition-all"
          >
            Try it free →
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-brand-text transition-transform ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-text transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-brand-text transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/50"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#app-embed"
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 rounded-full border border-brand-border text-brand-text hover:border-brand-indigo transition-all text-center"
              >
                Try it free →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
