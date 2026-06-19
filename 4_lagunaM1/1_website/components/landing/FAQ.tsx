"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Does it work on videos without subtitles?",
    a: "No. The tool extracts existing caption tracks — it doesn't generate speech-to-text. If a YouTube video has auto-generated or manual captions enabled, you're good. If not, there's nothing to extract.",
  },
  {
    q: "Do I need to create an account?",
    a: "For the free plan, no account is needed at all. Just paste and go. An account is required for Pro and Team plans to manage API keys and history.",
  },
  {
    q: "Which languages are supported?",
    a: "Any language that YouTube provides captions in. The tool fetches whatever caption track YouTube has for the video — English, Spanish, Russian, Japanese, and many more.",
  },
  {
    q: "Is my data stored anywhere?",
    a: "No. The transcript is generated on the fly and returned directly to your browser. We don't log URLs or store transcript content.",
  },
  {
    q: "How fast is it?",
    a: "Typically under 5 seconds for most videos. Very long videos (2+ hours) may take up to 15 seconds.",
  },
  {
    q: "Can I use this for YouTube Shorts?",
    a: "Yes, Shorts URLs are supported if the Short has a caption track.",
  },
  {
    q: "What about private or age-restricted videos?",
    a: "Private videos cannot be accessed. Age-restricted videos may or may not work depending on YouTube's access controls.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => prev === i ? null : i);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text font-sora">
            Questions you might have.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-brand-border last:border-0"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-5 text-left hover:text-brand-indigo transition-all"
              >
                <span className="font-semibold text-brand-text font-dm-sans">{faq.q}</span>
                <span className="text-brand-muted text-xl">
                  {open === i ? "×" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-brand-muted font-dm-sans text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}