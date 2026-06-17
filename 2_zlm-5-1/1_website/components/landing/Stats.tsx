"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Transcripts extracted" },
  { value: 2400000, suffix: "+", label: "Words processed" },
  { value: -1, suffix: "", label: "Average processing time", display: "< 5 sec" },
  { value: 100, suffix: "%", label: "Free, always" },
];

function AnimatedNumber({ value, suffix, display }: { value: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    if (display) return;
    if (value <= 0) return;

    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, display]);

  const formatNumber = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return n.toLocaleString();
    return n.toString();
  };

  return (
    <span ref={ref}>
      {display || formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-[#0D0D14]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-wrap justify-center gap-10 md:gap-0 md:justify-between">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center min-w-[140px] relative"
            >
              <span
                className="font-sora font-bold text-4xl md:text-5xl bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #6C63FF, #00D4AA)",
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} display={stat.display} />
              </span>
              <span className="mt-2 text-xs font-semibold tracking-widest uppercase text-brand-muted">
                {stat.label}
              </span>
              {i < stats.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-px h-12 bg-brand-border/40" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
