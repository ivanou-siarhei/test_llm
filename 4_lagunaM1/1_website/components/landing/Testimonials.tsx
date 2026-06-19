"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I used to rewatch entire interviews to find one quote. Now I paste the link, Ctrl+F, done.",
    author: "Maya R.",
    role: "Freelance Journalist",
  },
  {
    text: "As a PhD student I live in lecture recordings. This saves me probably two hours a week.",
    author: "David K.",
    role: "Graduate Researcher",
  },
  {
    text: "We use it to turn our podcast episodes into newsletter drafts. Genuinely changed our workflow.",
    author: "Sophie & Tom",
    role: "Indie Podcast",
  },
  {
    text: "My students have English as a second language. Having the transcript alongside the video is a game-changer.",
    author: "Priya M.",
    role: "Online Educator",
  },
  {
    text: "I translate video content for clients. This is now step one of every project.",
    author: "Carlos V.",
    role: "Localization Specialist",
  },
  {
    text: "Clean output, no nonsense. Does exactly what it says.",
    author: "Alex W.",
    role: "Product Designer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text font-sora mb-4">
            People are using it.
          </h2>
          <p className="text-xl text-brand-muted font-dm-sans italic">They seem happy about it.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="relative bg-brand-bg border border-brand-border rounded-2xl p-6 hover:border-brand-indigo/50 transition-all"
            >
              <span className="absolute -top-4 -left-2 text-8xl font-bold text-brand-indigo/10 font-sora">"</span>
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-brand-teal">★</span>
                ))}
              </div>
              <p className="text-brand-text font-dm-sans text-sm mb-4 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-indigo/20 flex items-center justify-center text-brand-indigo font-sora font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-text font-dm-sans text-sm font-medium">{t.author}</p>
                  <p className="text-brand-muted font-dm-sans text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}