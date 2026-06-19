"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 noise-bg">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-brand-indigo/20 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-brand-bg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-4 py-1 rounded-full border border-brand-teal/30 text-brand-teal text-sm mb-8 shadow-lg shadow-brand-teal/10">
          No AI. No signup. No nonsense.
        </span>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand-text mb-6 font-sora leading-tight">
          Turn any video
          <br />
          <ShimmerText>into clean text.</ShimmerText>
          <br />
          Instantly.
        </h1>

        <p className="text-lg text-brand-muted mb-12 max-w-md mx-auto font-dm-sans">
          Paste a YouTube link. Get a formatted transcript in seconds.
          No account required. Works with auto-generated captions.
        </p>

        <button
          onClick={() => document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" })}
          className="px-10 py-4 rounded-full bg-brand-indigo text-white font-bold text-lg shadow-lg shadow-brand-indigo/25 hover:shadow-xl hover:shadow-brand-indigo/40 transition-all hover:scale-105 mb-8"
        >
          Extract Transcript →
        </button>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-muted">
          <span>⚡ Free to use</span>
          <span>🔒 No data stored</span>
          <span>📋 One-click copy</span>
        </div>
      </motion.div>
    </section>
  );
}

function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-brand-indigo via-brand-teal to-brand-indigo bg-clip-text text-transparent bg-size-200 animate-gradient">
      {children}
    </span>
  );
}