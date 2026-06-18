"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Does it work on videos without subtitles?",
    answer:
      "No. The tool extracts existing caption tracks — it doesn't generate speech-to-text. If a YouTube video has auto-generated or manual captions enabled, you're good. If not, there's nothing to extract.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "For the free plan, no account is needed at all. Just paste and go. An account is required for Pro and Team plans to manage API keys and history.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Any language that YouTube provides captions in. The tool fetches whatever caption track YouTube has for the video — English, Spanish, Russian, Japanese, and many more.",
  },
  {
    question: "Is my data stored anywhere?",
    answer:
      "No. The transcript is generated on the fly and returned directly to your browser. We don't log URLs or store transcript content.",
  },
  {
    question: "How fast is it?",
    answer:
      "Typically under 5 seconds for most videos. Very long videos (2+ hours) may take up to 15 seconds.",
  },
  {
    question: "Can I use this for YouTube Shorts?",
    answer:
      "Yes, Shorts URLs are supported if the Short has a caption track.",
  },
  {
    question: "What about private or age-restricted videos?",
    answer:
      "Private videos cannot be accessed. Age-restricted videos may or may not work depending on YouTube's access controls.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-24 bg-brand-surface">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4">
            Questions you might have.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-brand-border last:border-0"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 flex items-center justify-between text-left group"
              >
                <span
                  className={`font-medium transition-colors ${
                    open === index ? "text-brand-indigo" : "group-hover:text-brand-indigo"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`text-brand-muted transition-transform ${
                    open === index ? "rotate-45" : ""
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-brand-muted leading-relaxed">{faq.answer}</p>
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