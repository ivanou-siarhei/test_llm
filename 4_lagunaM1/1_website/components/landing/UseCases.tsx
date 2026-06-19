"use client";

import { motion } from "framer-motion";

const useCases = [
  { emoji: "🎓", title: "Students & Researchers", body: "Turn lecture recordings, conference talks, and documentary content into searchable, citable text for papers and study notes." },
  { emoji: "✍️", title: "Content Creators", body: "Repurpose your own YouTube videos into blog posts, newsletters, threads, or scripts. Double your content output from the same effort." },
  { emoji: "📰", title: "Journalists & Writers", body: "Extract quotes from interviews, press conferences, and video sources without rewatching. Get the sentence you need in one paste." },
  { emoji: "🌐", title: "Translators & Localizers", body: "Start with a clean source transcript instead of manually transcribing. Cut your pre-translation prep time significantly." },
  { emoji: "📚", title: "Language Learners", body: "Read along with native-language videos. Study vocabulary, sentence structure, and idioms in written form at your own pace." },
  { emoji: "🏢", title: "Teams & Businesses", body: "Capture the key points from webinars, product demos, and training videos. Turn passive watching into searchable team knowledge." },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text font-sora mb-4">
            Built for everyone
            <br />
            <span className="text-brand-muted font-dm-sans text-2xl md:text-3xl font-normal">who works with video content.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="relative bg-brand-surface border border-brand-border rounded-2xl p-6 overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{
                  background: `radial-gradient(circle at center, ${i % 2 === 0 ? '#6C63FF' : '#00D4AA'}, transparent)`,
                }}
              />
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{uc.emoji}</div>
              <h3 className="text-lg font-bold text-brand-text font-sora mb-2">{uc.title}</h3>
              <p className="text-brand-muted font-dm-sans text-sm">{uc.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}