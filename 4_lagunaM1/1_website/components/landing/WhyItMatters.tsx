"use client";

import { motion } from "framer-motion";

export default function WhyItMatters() {
  const bullets = [
    "Find the exact quote you need in seconds",
    "Use video content in articles, summaries, and reports",
    "Study lecture recordings without replaying them",
    "Make content accessible for people who prefer reading",
    "Feed transcripts into your own notes or knowledge base",
  ];

  return (
    <section className="py-24 px-6 bg-brand-surface noise-bg relative">
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 40px, var(--color-brand-border) 40px, var(--color-brand-border) 41px)",
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-brand-text font-sora leading-tight">
            Reading is 3×
            <br />
            faster than
            <br />
            watching.
          </h2>

          <div>
            <p className="text-brand-muted font-dm-sans mb-8">
              Videos are everywhere. But when you need the information inside them —
              for research, study, work, or writing — watching is slow. Transcripts
              let you skim, search, quote, and reference without scrubbing a timeline.
            </p>
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-teal mt-1">✓</span>
                  <span className="text-brand-text font-dm-sans">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}