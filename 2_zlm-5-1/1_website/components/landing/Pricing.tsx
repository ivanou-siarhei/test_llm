"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      { text: "Unlimited transcripts", included: true },
      { text: "YouTube support", included: true },
      { text: "Plain text output", included: true },
      { text: "Copy to clipboard", included: true },
      { text: "No account needed", included: true },
      { text: "API access", included: false },
      { text: "Bulk processing", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Start for free",
    ctaStyle: "ghost",
    highlighted: false,
    badge: null,
  },
  {
    name: "Pro",
    price: 9,
    features: [
      { text: "Everything in Free", included: true },
      { text: "API access (REST endpoint)", included: true },
      { text: "Bulk URL processing (up to 50 at once)", included: true },
      { text: "Language selection", included: true },
      { text: "Timestamp mode", included: true },
      { text: "Export as .txt / .md", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Get Pro →",
    ctaStyle: "filled",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Team",
    price: 29,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Shared history & saved transcripts", included: true },
      { text: "Webhook integration", included: true },
      { text: "Dedicated support", included: true },
    ],
    cta: "Contact us",
    ctaStyle: "ghost",
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (monthly: number) =>
    annual ? Math.round(monthly * 0.8) : monthly;

  return (
    <section id="pricing" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #6C63FF08 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl tracking-tight">
            Simple pricing.
          </h2>
          <p className="mt-3 text-brand-muted text-lg italic font-dm-sans">
            {"As in, it's free."}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-sm">
            <span
              className={`transition-colors ${
                !annual ? "text-brand-text" : "text-brand-muted"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                annual ? "bg-brand-indigo" : "bg-brand-border"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  annual ? "translate-x-5" : ""
                }`}
              />
            </button>
            <span
              className={`transition-colors ${
                annual ? "text-brand-text" : "text-brand-muted"
              }`}
            >
              Annual{" "}
              <span className="text-brand-teal text-xs font-semibold">
                (Save 20%)
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className={`relative rounded-2xl border p-7 ${
                plan.highlighted
                  ? "border-brand-indigo bg-brand-surface shadow-[0_0_80px_#6C63FF10]"
                  : "border-brand-border/50 bg-brand-surface"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-indigo text-white text-xs font-semibold">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-sora font-semibold text-lg">{plan.name}</h3>
              <p className="mt-2 font-sora text-4xl font-bold">
                ${price(plan.price)}
                <span className="text-base font-normal text-brand-muted">
                  /mo
                </span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span className={f.included ? "text-brand-teal" : "text-brand-muted/40"}>
                      {f.included ? "✓" : "✕"}
                    </span>
                    <span
                      className={
                        f.included
                          ? "text-brand-muted"
                          : "text-brand-muted/40 line-through"
                      }
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.ctaStyle === "filled"
                    ? "bg-brand-indigo text-white shadow-[0_0_30px_#6C63FF30] hover:shadow-[0_0_40px_#6C63FF50]"
                    : "border border-brand-border text-brand-text hover:border-brand-indigo/50"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
