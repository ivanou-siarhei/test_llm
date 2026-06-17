"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🔗",
    title: "Paste a video URL",
    description:
      "Copy any YouTube link and drop it in the input above. Works with any public video that has captions.",
  },
  {
    num: "02",
    icon: "⚙️",
    title: "We fetch the captions",
    description:
      "Our server extracts the subtitle track directly from YouTube's caption system — no audio processing, no AI guessing.",
  },
  {
    num: "03",
    icon: "📋",
    title: "Copy your transcript",
    description:
      "The full text appears formatted and ready. Hit copy and it's in your clipboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-brand-muted text-lg">
            Three steps. Zero friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          <div className="hidden md:block absolute top-[60px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px border-t-2 border-dashed border-brand-border/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              className="relative group p-6 rounded-2xl border border-brand-border/50 bg-brand-bg hover:-translate-y-0.5 hover:border-brand-indigo/30 transition-all duration-300"
            >
              <span className="absolute top-2 right-4 font-sora text-8xl font-bold opacity-[0.03] select-none">
                {step.num}
              </span>
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #6C63FF50, transparent)",
                }}
              />
              <span className="text-2xl mb-4 block">{step.icon}</span>
              <h3 className="font-sora font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
