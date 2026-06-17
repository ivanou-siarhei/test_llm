"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #6C63FF15 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-brand-teal/40 text-xs text-brand-teal tracking-wide uppercase shadow-[0_0_20px_#00D4AA15]">
          No AI. No signup. No nonsense.
        </span>

        <h1 className="font-sora font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl">
          Turn any video
          <br />
          into{" "}
          <span
            className="animate-shimmer-gradient bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #6C63FF, #00D4AA, #6C63FF)",
              backgroundSize: "200% 200%",
            }}
          >
            clean
          </span>{" "}
          text.
          <br />
          Instantly.
        </h1>

        <p className="mt-6 text-lg text-brand-muted max-w-[480px] leading-relaxed">
          Paste a YouTube link. Get a formatted transcript in seconds.
          <br />
          No account required. Works with auto-generated captions.
        </p>

        <a
          href="#app-embed"
          className="mt-10 inline-flex items-center px-8 py-4 rounded-full bg-brand-indigo text-white font-semibold text-base shadow-[0_0_30px_#6C63FF40] hover:shadow-[0_0_40px_#6C63FF60] transition-shadow duration-300"
        >
          Extract Transcript →
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-muted">
          <span className="flex items-center gap-1.5">
            ⚡ Free to use
          </span>
          <span className="flex items-center gap-1.5">
            🔒 No data stored
          </span>
          <span className="flex items-center gap-1.5">
            📋 One-click copy
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
    </section>
  );
}
