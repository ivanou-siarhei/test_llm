"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppEmbed() {
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleExtract = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setTranscript("");
    setWordCount(0);
    await new Promise((r) => setTimeout(r, 1500));
    const demo = `This is a demo transcript extracted from the provided video URL.\n\nIn a real implementation, this would fetch the actual caption track from YouTube's system and display the formatted text here.\n\nThe transcript would include timestamps if available, and the full text of whatever captions YouTube provides for the video.\n\nNo audio processing, no AI guessing — just direct extraction of the subtitle track.`;
    setTranscript(demo);
    setWordCount(demo.split(/\s+/).length);
    setLoading(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="app-embed" className="relative py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-6">
          Try it right now ↓
        </p>

        <div className="w-full max-w-[720px] rounded-2xl border border-brand-indigo/30 bg-brand-surface p-6 shadow-[0_0_60px_#6C63FF08,inset_0_1px_0_#6C63FF10]">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            onKeyDown={(e) => e.key === "Enter" && handleExtract()}
            className="w-full rounded-xl bg-brand-bg border border-brand-border px-4 py-3 text-sm text-brand-text placeholder:text-brand-muted/60 font-jetbrains focus:outline-none focus:border-brand-indigo/50 transition-colors"
          />

          <button
            onClick={handleExtract}
            disabled={loading}
            className="mt-3 w-full py-3 rounded-xl bg-brand-indigo text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Extracting..." : "Get Transcript"}
          </button>

          <AnimatePresence>
            {transcript && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 relative"
              >
                <div className="relative">
                  <textarea
                    readOnly
                    value={transcript}
                    className="w-full max-h-[300px] overflow-y-auto rounded-xl bg-brand-bg border border-brand-border p-4 text-sm text-brand-text leading-relaxed resize-none focus:outline-none"
                  />
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs text-brand-muted hover:text-brand-text hover:border-brand-indigo/40 transition-all"
                  >
                    {copied ? "✓ Copied" : "📋 Copy all"}
                  </button>
                </div>
                {wordCount > 0 && (
                  <p className="mt-2 text-xs text-brand-muted">
                    {wordCount.toLocaleString()} words
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
