"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { num: 50000, suffix: "+", label: "Transcripts extracted" },
  { num: 2400000, suffix: "+", label: "Words processed" },
  { num: 5, suffix: " sec", label: "Average processing time" },
  { num: 100, suffix: "%", label: "Free, always" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.span ref={ref} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-brand-indigo to-brand-teal bg-clip-text text-transparent font-sora">
      {springValue.get().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{suffix}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center divide-x divide-brand-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="px-8 md:px-12 text-center"
            >
              <AnimatedNumber value={stat.num} suffix={stat.suffix} />
              <p className="text-brand-muted text-xs uppercase tracking-widest mt-2 font-dm-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}