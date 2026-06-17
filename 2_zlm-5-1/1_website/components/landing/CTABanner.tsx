"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-brand-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-y-1/2 rounded-full blur-3xl animate-gradient-blob-1"
          style={{ background: "rgba(108, 99, 255, 0.08)" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] -translate-y-1/2 rounded-full blur-3xl animate-gradient-blob-2"
          style={{ background: "rgba(0, 212, 170, 0.06)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-6xl mx-auto text-center"
      >
        <h2 className="font-sora font-bold text-4xl md:text-6xl tracking-tight text-white">
          Ready to stop
          <br />
          rewatching?
        </h2>
        <p className="mt-4 text-brand-muted text-lg">
          Paste your first link. It takes 10 seconds.
        </p>
        <a
          href="#app-embed"
          className="mt-10 inline-flex items-center px-8 py-4 rounded-full bg-white text-brand-bg font-semibold text-base hover:bg-brand-text transition-colors duration-300"
        >
          Extract my first transcript →
        </a>
      </motion.div>
    </section>
  );
}
