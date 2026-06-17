"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    emoji: "🎓",
    title: "Students & Researchers",
    body: "Turn lecture recordings, conference talks, and documentary content into searchable, citable text for papers and study notes.",
    accent: "#6C63FF",
  },
  {
    emoji: "✍️",
    title: "Content Creators",
    body: "Repurpose your own YouTube videos into blog posts, newsletters, threads, or scripts. Double your content output from the same effort.",
    accent: "#00D4AA",
  },
  {
    emoji: "📰",
    title: "Journalists & Writers",
    body: "Extract quotes from interviews, press conferences, and video sources without rewatching. Get the sentence you need in one paste.",
    accent: "#FF6B6B",
  },
  {
    emoji: "🌐",
    title: "Translators & Localizers",
    body: "Start with a clean source transcript instead of manually transcribing. Cut your pre-translation prep time significantly.",
    accent: "#FFB84D",
  },
  {
    emoji: "📚",
    title: "Language Learners",
    body: "Read along with native-language videos. Study vocabulary, sentence structure, and idioms in written form at your own pace.",
    accent: "#A78BFA",
  },
  {
    emoji: "🏢",
    title: "Teams & Businesses",
    body: "Capture the key points from webinars, product demos, and training videos. Turn passive watching into searchable team knowledge.",
    accent: "#4DC9F6",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl tracking-tight">
            Built for everyone
          </h2>
          <p className="mt-3 text-brand-muted text-lg">
            who works with video content.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="group relative rounded-2xl border border-brand-border/50 bg-brand-bg p-7 overflow-hidden hover:-translate-y-0.5 hover:border-brand-indigo/30 transition-all duration-300"
              style={
                i === 0 || i === 3
                  ? { gridRow: "span 1" }
                  : undefined
              }
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 20% 0%, ${uc.accent}08 0%, transparent 60%)`,
                }}
              />
              <span
                className="relative text-3xl mb-4 block transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_var(--glow)]"
                style={{ "--glow": uc.accent + "60" } as React.CSSProperties}
              >
                {uc.emoji}
              </span>
              <h3 className="relative font-sora font-semibold text-base mb-2">
                {uc.title}
              </h3>
              <p className="relative text-sm text-brand-muted leading-relaxed">
                {uc.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
