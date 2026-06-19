"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-brand-text font-sora mb-3 block">
              TranscriptLY
            </Link>
            <p className="text-brand-muted font-dm-sans text-sm mb-6">
              Turn any video into clean text instantly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-muted hover:text-brand-teal transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.799 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.414-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1-.322 3.297 1.231 1.178-.321 2.38-.482 3.59-.482 1.21.002 2.41.162 3.59.482 2.29-1.553 3.29-1.231 3.29-1.231.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.927.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-brand-muted hover:text-brand-teal transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.126 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.988 1.64 4.149a4.904 4.904 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.514 13.998-14.014 0-.21 0-.42-.015-.63A10.02 10.02 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-text font-semibold font-sora mb-4">Links</h4>
            <ul className="space-y-2">
              {["How it works", "Use Cases", "Pricing", "FAQ"].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="text-brand-muted hover:text-brand-teal transition-colors text-sm font-dm-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-semibold font-sora mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Contact"].map(l => (
                <li key={l}>
                  <a href="#" className="text-brand-muted hover:text-brand-teal transition-colors text-sm font-dm-sans">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border text-center">
          <p className="text-brand-muted text-xs font-dm-sans">© 2025 TranscriptLY. Made with care.</p>
        </div>
      </div>
    </footer>
  );
}