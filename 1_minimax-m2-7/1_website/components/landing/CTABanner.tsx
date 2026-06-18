"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  const scrollToApp = () => {
    document.getElementById("app-embed")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/20 rounded-full blur-[120px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-teal/15 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite_2s]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
            Ready to stop
            <br />
            rewatching?
          </h2>
          <p className="text-brand-muted text-lg mb-8">
            Paste your first link. It takes 10 seconds.
          </p>
          <button
            onClick={scrollToApp}
            className="px-8 py-4 bg-white text-brand-bg font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Extract my first transcript →
          </button>
        </motion.div>
      </div>
    </section>
  );
}