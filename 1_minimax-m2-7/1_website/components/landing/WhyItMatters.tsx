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
    <section className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-brand-border/30"
            style={{ top: `${(i + 1) * 5}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-sora font-bold text-5xl md:text-6xl leading-tight">
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Videos are everywhere. But when you need the information inside them —
              for research, study, work, or writing — watching is slow. Transcripts
              let you skim, search, quote, and reference without scrubbing a timeline.
            </p>

            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-brand-teal flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-brand-text">{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}