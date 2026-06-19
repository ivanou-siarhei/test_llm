"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-indigo/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white font-sora mb-6 leading-tight">
          Ready to stop
          <br />
          rewatching?
        </h2>
        <p className="text-lg text-brand-muted mb-10 font-dm-sans">Paste your first link. It takes 10 seconds.</p>
        <button
          onClick={() => document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" })}
          className="px-10 py-4 rounded-full bg-white text-brand-bg font-bold text-lg hover:scale-105 transition-all"
        >
          Extract my first transcript →
        </button>
      </motion.div>
    </section>
  );
}