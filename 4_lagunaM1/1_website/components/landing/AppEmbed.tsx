"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AppEmbed() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExtract = async () => {
    if (!url.trim()) return;
    setLoading(true);
    // Simulated extraction
    setTimeout(() => {
      setResult("This is a sample transcript output. In the real app, this would be extracted from the video captions. The transcript would appear here, formatted and ready to copy.");
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <section id="app-embed" className="py-24 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-brand-muted text-sm uppercase tracking-wider mb-8">Try it right now ↓</p>
        
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto bg-brand-bg border border-brand-indigo/30 rounded-2xl p-8 shadow-inner shadow-brand-indigo/5"
        >
          <div className="space-y-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-text placeholder-brand-muted font-jetbrains-mono focus:outline-none focus:border-brand-indigo/50 transition-all"
            />
            
            <button
              onClick={handleExtract}
              disabled={loading || !url.trim()}
              className="w-full px-4 py-3 rounded-xl bg-brand-indigo text-white font-bold hover:bg-brand-indigo/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Extracting..." : "Get Transcript"}
            </button>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-4"
              >
                <textarea
                  readOnly
                  value={result}
                  className="w-full h-64 px-4 py-3 rounded-xl bg-brand-bg border border-brand-border text-brand-text font-jetbrains-mono text-sm resize-none"
                />
                <button
                  onClick={copyToClipboard}
                  className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy all
                </button>
                <p className="text-brand-muted text-xs mt-2">{result.split(/\s+/).length} words</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}