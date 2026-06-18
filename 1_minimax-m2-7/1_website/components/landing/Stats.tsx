"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Transcripts extracted" },
  { value: 2.4, suffix: "M+", label: "Words processed" },
  { value: 5, suffix: " sec", label: "Average processing time" },
  { value: 100, suffix: "%", label: "Free, always" },
];

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      
      if (value >= 1000) {
        setDisplay(Math.round(current));
      } else if (value < 10) {
        setDisplay(Math.round(current * 10) / 10);
      } else {
        setDisplay(Math.round(current));
      }

      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const formatted = value >= 1000 ? display.toLocaleString() : display;
  const showDecimal = value < 10 && value % 1 !== 0;

  return (
    <span>
      {showDecimal ? display.toFixed(1) : formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-[#0D0D14]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-px h-16 bg-brand-border" />
                )}
                
                <p className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl mb-2 bg-gradient-to-r from-brand-indigo to-brand-teal bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </p>
                <p className="text-brand-muted text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}