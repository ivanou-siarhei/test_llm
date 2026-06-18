"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    emoji: "🎓",
    title: "Students & Researchers",
    body: "Turn lecture recordings, conference talks, and documentary content into searchable, citable text for papers and study notes.",
    accent: "#6C63FF",
    tall: true,
  },
  {
    emoji: "✍️",
    title: "Content Creators",
    body: "Repurpose your own YouTube videos into blog posts, newsletters, threads, or scripts. Double your content output from the same effort.",
    accent: "#00D4AA",
    tall: false,
  },
  {
    emoji: "📰",
    title: "Journalists & Writers",
    body: "Extract quotes from interviews, press conferences, and video sources without rewatching. Get the sentence you need in one paste.",
    accent: "#6C63FF",
    tall: false,
  },
  {
    emoji: "🌐",
    title: "Translators & Localizers",
    body: "Start with a clean source transcript instead of manually transcribing. Cut your pre-translation prep time significantly.",
    accent: "#00D4AA",
    tall: false,
  },
  {
    emoji: "📚",
    title: "Language Learners",
    body: "Read along with native-language videos. Study vocabulary, sentence structure, and idioms in written form at your own pace.",
    accent: "#6C63FF",
    tall: false,
  },
  {
    emoji: "🏢",
    title: "Teams & Businesses",
    body: "Capture the key points from webinars, product demos, and training videos. Turn passive watching into searchable team knowledge.",
    accent: "#00D4AA",
    tall: true,
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4">
            Built for everyone
            <br />
            who works with video content.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative bg-brand-surface rounded-2xl p-6 border border-brand-border hover:border-opacity-100 transition-all duration-300 hover:-translate-y-1 ${
                item.tall ? "md:row-span-2" : ""
              }`}
              style={{
                background: `radial-gradient(circle at top left, ${item.accent}08, transparent 60%)`,
              }}
            >
              <div className="relative">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform"
                  style={{
                    background: `radial-gradient(circle, ${item.accent}20, transparent 70%)`,
                    boxShadow: `0 0 40px ${item.accent}20`,
                  }}
                >
                  <span className="text-3xl">{item.emoji}</span>
                </div>

                <h3 className="font-sora font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}