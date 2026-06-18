"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppEmbed() {
  const [url, setUrl] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExtract = async () => {
    if (!url) return;
    setLoading(true);
    setTranscript("");
    
    setTimeout(() => {
      setTranscript(`This is a sample transcript output. In a real implementation, this would contain the actual transcript fetched from YouTube's caption API.

The transcript would be formatted and ready to copy, with proper paragraph breaks and clean text formatting.

You can paste any YouTube URL above to extract its transcript - works best with videos that have auto-generated or manual captions enabled.`);
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(transcript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = transcript ? transcript.split(/\s+/).filter(Boolean).length : 0;

  return (
    <section id="app-embed" className="py-24 bg-brand-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-brand-muted text-sm uppercase tracking-wider">Try it right now ↓</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative rounded-2xl border border-brand-indigo/30 bg-brand-bg p-6 shadow-inner shadow-brand-indigo/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-indigo/5 to-transparent pointer-events-none" />
            
            <div className="relative">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-4 py-3 bg-brand-surface border border-brand-border rounded-xl text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-indigo transition-colors font-mono text-sm"
              />
              
              <button
                onClick={handleExtract}
                disabled={!url || loading}
                className="w-full mt-3 px-6 py-3 bg-brand-indigo text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-indigo/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Extracting...
                  </span>
                ) : (
                  "Get Transcript"
                )}
              </button>

              <AnimatePresence>
                {transcript && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4"
                  >
                    <div className="relative">
                      <button
                        onClick={handleCopy}
                        className="absolute top-2 right-2 px-3 py-1.5 bg-brand-surface border border-brand-border rounded-lg text-sm text-brand-muted hover:text-brand-text hover:border-brand-indigo transition-colors flex items-center gap-1.5 z-10"
                      >
                        {copied ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                            </svg>
                            Copy all
                          </>
                        )}
                      </button>
                      <textarea
                        readOnly
                        value={transcript}
                        className="w-full h-64 p-4 bg-brand-surface border border-brand-border rounded-xl text-brand-text text-sm resize-none focus:outline-none"
                      />
                    </div>
                    <p className="mt-2 text-sm text-brand-muted text-right">{wordCount} words</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}