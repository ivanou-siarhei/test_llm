"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToApp = () => {
    document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/20 rounded-full blur-[120px]" />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span className="text-sm text-brand-teal font-medium">No AI. No signup. No nonsense.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          Turn any video
          <br />
          into <span className="gradient-text">clean</span> text.
          <br />
          Instantly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-muted max-w-md mx-auto mb-10"
        >
          Paste a YouTube link. Get a formatted transcript in seconds.
          <br />
          No account required. Works with auto-generated captions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={scrollToApp}
            className="px-8 py-4 bg-brand-indigo text-white font-semibold rounded-full hover:shadow-lg hover:shadow-brand-indigo/30 transition-all duration-300 hover:scale-105"
          >
            Extract Transcript →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-brand-muted"
        >
          <div className="flex items-center gap-2">
            <span className="text-brand-teal">⚡</span>
            <span>Free to use</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-teal">🔒</span>
            <span>No data stored</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-teal">📋</span>
            <span>One-click copy</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent" />
    </section>
  );
}