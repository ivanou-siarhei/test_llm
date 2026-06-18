"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "For occasional use",
    features: [
      { text: "Unlimited transcripts", included: true },
      { text: "YouTube support", included: true },
      { text: "Plain text output", included: true },
      { text: "Copy to clipboard", included: true },
      { text: "No account needed", included: true },
      { text: "No API access", included: false },
      { text: "No bulk processing", included: false },
      { text: "No priority support", included: false },
    ],
    buttonText: "Start for free",
    buttonStyle: "ghost",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 9,
    description: "For power users",
    badge: "Most Popular",
    features: [
      { text: "Everything in Free", included: true },
      { text: "API access (REST endpoint)", included: true },
      { text: "Bulk URL processing (up to 50 at once)", included: true },
      { text: "Language selection", included: true },
      { text: "Timestamp mode", included: true },
      { text: "Export as .txt / .md", included: true },
      { text: "Priority support", included: true },
    ],
    buttonText: "Get Pro →",
    buttonStyle: "filled",
    highlighted: true,
  },
  {
    name: "Team",
    price: 29,
    description: "For organizations",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Shared history & saved transcripts", included: true },
      { text: "Webhook integration", included: true },
      { text: "Dedicated support", included: true },
    ],
    buttonText: "Contact us",
    buttonStyle: "ghost",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (monthly: number) => (annual ? Math.round(monthly * 0.8) : monthly);

  return (
    <section id="pricing" className="py-24 bg-brand-bg relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-indigo/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-sora font-bold text-4xl md:text-5xl mb-4">
            Simple pricing.
          </h2>
          <p className="text-brand-muted text-lg">As in, it's free.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 p-1 bg-brand-surface rounded-full border border-brand-border">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-brand-indigo text-white" : "text-brand-muted hover:text-brand-text"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                annual ? "bg-brand-indigo text-white" : "text-brand-muted hover:text-brand-text"
              }`}
            >
              Annual
              <span className="text-xs text-brand-teal">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-brand-surface rounded-2xl p-6 border ${
                plan.highlighted
                  ? "border-brand-indigo shadow-lg shadow-brand-indigo/20"
                  : "border-brand-border"
              } ${plan.highlighted ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-indigo text-white text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-sora font-semibold text-xl mb-1">{plan.name}</h3>
                <p className="text-brand-muted text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-sora font-bold text-4xl">
                  ${getPrice(plan.price)}
                </span>
                {plan.price > 0 && (
                  <span className="text-brand-muted text-sm">/month</span>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6A80" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <span className={feature.included ? "text-brand-text" : "text-brand-muted"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.buttonStyle === "filled"
                    ? "bg-brand-indigo text-white hover:shadow-lg hover:shadow-brand-indigo/30"
                    : "border border-brand-border text-brand-text hover:border-brand-indigo hover:bg-brand-indigo/10"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}