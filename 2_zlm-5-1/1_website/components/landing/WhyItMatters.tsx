"use client";

import { motion } from "framer-motion";

const bullets = [
  "Find the exact quote you need in seconds",
  "Use video content in articles, summaries, and reports",
  "Study lecture recordings without replaying them",
  "Make content accessible for people who prefer reading",
  "Feed transcripts into your own notes or knowledge base",
];

export default function WhyItMatters() {
  return (
    <section className="relative py-32 px-6 bg-brand-bg overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, #F0EFF8 31px, #F0EFF8 32px)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Reading is 3×
              <br />
              faster than
              <br />
              watching.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          >
            <p className="text-brand-muted leading-relaxed mb-8">
              Videos are everywhere. But when you need the information inside
              them — for research, study, work, or writing — watching is slow.
              Transcripts let you skim, search, quote, and reference without
              scrubbing a timeline.
            </p>

            <ul className="space-y-3">
              {bullets.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span className="text-brand-muted">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
