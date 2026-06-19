"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: 0,
    features: ["Unlimited transcripts", "YouTube support", "Plain text output", "Copy to clipboard", "No account needed"],
    disabled: ["API access", "Bulk processing", "Priority support"],
    button: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 9,
    features: ["Everything in Free", "API access", "Bulk processing", "Language selection", "Timestamp mode", "Export options", "Priority support"],
    button: "Get Pro →",
    highlighted: true,
  },
  {
    name: "Team",
    price: 29,
    features: ["Everything in Pro", "Team members", "Shared history", "Webhook integration", "Dedicated support"],
    button: "Contact us",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (monthly: number) => annual ? Math.round(monthly * 0.8) : monthly;

  return (
    <section id="pricing" className="py-24 px-6 bg-brand-bg noise-bg relative">
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-indigo/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text font-sora mb-4">
            Simple pricing.
          </h2>
          <p className="text-xl text-brand-muted font-dm-sans">As in, it&apos;s free.</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-surface rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-dm-sans transition-all ${
                !annual ? "bg-brand-indigo text-white" : "text-brand-muted"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-dm-sans transition-all flex items-center gap-2 ${
                annual ? "bg-brand-indigo text-white" : "text-brand-muted"
              }`}
            >
              Annual
              <span className="text-brand-teal text-xs">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-brand-surface border-2 border-brand-indigo scale-105 md:scale-110"
                  : "bg-brand-surface border border-brand-border"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-indigo text-white text-xs font-bold rounded-full uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-brand-text font-sora mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-text font-sora">${price(plan.price)}</span>
                <span className="text-brand-muted font-dm-sans">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-brand-text font-dm-sans text-sm">
                    <span className="text-brand-teal">✓</span>
                    {f}
                  </li>
                ))}
                {plan.disabled && plan.disabled.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-brand-muted font-dm-sans text-sm">
                    <span className="text-brand-muted/50">✗</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-bold font-dm-sans transition-all ${
                  plan.highlighted
                    ? "bg-brand-indigo text-white hover:shadow-lg hover:shadow-brand-indigo/25"
                    : "border border-brand-border text-brand-text hover:bg-brand-indigo/10"
                }`}
              >
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}