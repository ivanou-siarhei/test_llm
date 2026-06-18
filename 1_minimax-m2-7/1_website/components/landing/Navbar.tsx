"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollToApp = () => {
    document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-brand-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 font-sora font-semibold text-brand-text">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="8" width="4" height="8" rx="1" fill="#6C63FF" className="animate-[pulseBar_1s_ease-in-out_infinite]" />
                <rect x="8" y="4" width="4" height="16" rx="1" fill="#00D4AA" className="animate-[pulseBar_1s_ease-in-out_infinite_0.2s]" />
                <rect x="14" y="6" width="4" height="12" rx="1" fill="#6C63FF" className="animate-[pulseBar_1s_ease-in-out_infinite_0.4s]" />
                <rect x="20" y="10" width="2" height="4" rx="0.5" fill="#00D4AA" className="animate-[pulseBar_1s_ease-in-out_infinite_0.6s]" />
              </svg>
              TranscriptLY
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-brand-muted hover:text-brand-text transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-indigo transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToApp}
              className="hidden md:block px-5 py-2 rounded-full border border-brand-border text-brand-text hover:border-brand-indigo hover:bg-brand-indigo/10 transition-all duration-300"
            >
              Try it free →
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-brand-text"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-brand-border md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-brand-muted hover:text-brand-text transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  scrollToApp();
                }}
                className="px-5 py-3 rounded-full border border-brand-border text-brand-text hover:border-brand-indigo hover:bg-brand-indigo/10 transition-all w-full"
              >
                Try it free →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}