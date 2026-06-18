"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I used to rewatch entire interviews to find one quote. Now I paste the link, Ctrl+F, done.",
    author: "Maya R.",
    role: "Freelance Journalist",
    initials: "MR",
    color: "#6C63FF",
  },
  {
    quote: "As a PhD student I live in lecture recordings. This saves me probably two hours a week.",
    author: "David K.",
    role: "Graduate Researcher",
    initials: "DK",
    color: "#00D4AA",
  },
  {
    quote: "We use it to turn our podcast episodes into newsletter drafts. Genuinely changed our workflow.",
    author: "Sophie & Tom",
    role: "Indie Podcast",
    initials: "ST",
    color: "#6C63FF",
  },
  {
    quote: "My students have English as a second language. Having the transcript alongside the video is a game-changer.",
    author: "Priya M.",
    role: "Online Educator",
    initials: "PM",
    color: "#00D4AA",
  },
  {
    quote: "I translate video content for clients. This is now step one of every project.",
    author: "Carlos V.",
    role: "Localization Specialist",
    initials: "CV",
    color: "#6C63FF",
  },
  {
    quote: "Clean output, no nonsense. Does exactly what it says.",
    author: "Alex W.",
    role: "Product Designer",
    initials: "AW",
    color: "#00D4AA",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00D4AA">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-2">
            People are using it.
          </h2>
          <p className="text-brand-muted text-lg italic">They seem happy about it.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-brand-bg rounded-2xl p-6 border border-brand-border hover:border-brand-indigo transition-all duration-300"
            >
              <div className="absolute top-4 right-6 text-6xl font-serif text-brand-indigo/10">"</div>
              
              <StarRating />
              
              <p className="relative text-brand-text leading-relaxed mt-4 mb-6">{item.quote}</p>
              
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                  style={{ background: item.color }}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.author}</p>
                  <p className="text-brand-muted text-xs">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}