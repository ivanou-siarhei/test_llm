"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🔗",
    title: "Paste a video URL",
    desc: "Copy any YouTube link and drop it in the input above. Works with any public video that has captions.",
  },
  {
    num: "02",
    icon: "⚙️",
    title: "We fetch the captions",
    desc: "Our server extracts the subtitle track directly from YouTube&apos;s caption system — no audio processing, no AI guessing.",
  },
  {
    num: "03",
    icon: "📋",
    title: "Copy your transcript",
    desc: "The full text appears formatted and ready. Hit copy and it&apos;s in your clipboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text font-sora mb-4">
            How it works
          </h2>
          <p className="text-xl text-brand-muted font-dm-sans">Three steps. Zero friction.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-brand-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="relative bg-brand-surface border border-brand-border rounded-2xl p-8 hover:-translate-y-1 transition-all group"
              >
                <span className="absolute -top-8 -right-4 text-8xl font-bold text-brand-border/20 pointer-events-none">
                  {step.num}
                </span>
                <div className="mb-4 text-3xl">{step.icon}</div>
                <h3 className="text-xl font-bold text-brand-text font-sora mb-3">{step.title}</h3>
                <p className="text-brand-muted font-dm-sans text-sm">{step.desc}</p>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-teal to-brand-indigo rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}