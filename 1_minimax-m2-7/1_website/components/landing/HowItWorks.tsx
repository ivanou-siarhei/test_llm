"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-indigo">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Paste a video URL",
    description: "Copy any YouTube link and drop it in the input above. Works with any public video that has captions.",
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-teal">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    title: "We fetch the captions",
    description: "Our server extracts the subtitle track directly from YouTube's caption system — no audio processing, no AI guessing.",
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-indigo">
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    title: "Copy your transcript",
    description: "The full text appears formatted and ready. Hit copy and it's in your clipboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4">
            How it works
          </h2>
          <p className="text-brand-muted text-lg">Three steps. Zero friction.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-brand-border" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative bg-brand-surface border border-brand-border rounded-2xl p-6 hover:border-brand-indigo/50 transition-all duration-300 group hover:-translate-y-1">
                  <span className="absolute -top-4 left-6 text-8xl font-sora font-bold text-brand-border/50 select-none">
                    {step.number}
                  </span>
                  
                  <div className="relative pt-8">
                    <div className="w-16 h-16 rounded-xl bg-brand-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    
                    <div className="h-px bg-gradient-to-r from-brand-indigo/50 via-brand-teal/50 to-brand-indigo/50 mb-4" />
                    
                    <h3 className="font-sora font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6A80" strokeWidth="1" strokeDasharray="4 4">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}