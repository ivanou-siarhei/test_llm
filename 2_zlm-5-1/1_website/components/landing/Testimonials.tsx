"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I used to rewatch entire interviews to find one quote. Now I paste the link, Ctrl+F, done.",
    name: "Maya R.",
    role: "Freelance Journalist",
    initials: "MR",
    color: "#6C63FF",
  },
  {
    quote:
      "As a PhD student I live in lecture recordings. This saves me probably two hours a week.",
    name: "David K.",
    role: "Graduate Researcher",
    initials: "DK",
    color: "#00D4AA",
  },
  {
    quote:
      "We use it to turn our podcast episodes into newsletter drafts. Genuinely changed our workflow.",
    name: "Sophie & Tom",
    role: "Indie Podcast",
    initials: "ST",
    color: "#FFB84D",
  },
  {
    quote:
      "My students have English as a second language. Having the transcript alongside the video is a game-changer.",
    name: "Priya M.",
    role: "Online Educator",
    initials: "PM",
    color: "#A78BFA",
  },
  {
    quote:
      "I translate video content for clients. This is now step one of every project.",
    name: "Carlos V.",
    role: "Localization Specialist",
    initials: "CV",
    color: "#4DC9F6",
  },
  {
    quote: "Clean output, no nonsense. Does exactly what it says.",
    name: "Alex W.",
    role: "Product Designer",
    initials: "AW",
    color: "#FF6B6B",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl tracking-tight">
            People are using it.
          </h2>
          <p className="mt-3 text-brand-muted text-lg italic font-dm-sans">
            They seem happy about it.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="group rounded-2xl border border-brand-border/50 bg-brand-bg p-6 hover:border-brand-indigo/40 transition-colors duration-300"
            >
              <span className="text-brand-indigo/10 font-sora text-7xl font-bold leading-none select-none">
                &ldquo;
              </span>
              <div className="flex gap-1 mb-3 -mt-6">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-brand-teal text-xs">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-brand-muted leading-relaxed mb-5 -mt-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                  style={{
                    backgroundColor: t.color + "20",
                    color: t.color,
                  }}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-brand-text">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
