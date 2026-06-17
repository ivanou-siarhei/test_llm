export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#070710] border-t border-brand-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex items-end gap-[3px]">
                <span className="w-[3px] rounded-full bg-brand-indigo h-2" />
                <span className="w-[3px] rounded-full bg-brand-indigo h-3" />
                <span className="w-[3px] rounded-full bg-brand-indigo h-2.5" />
              </span>
              <span className="font-sora font-semibold text-brand-text text-lg tracking-tight">
                TranscriptLY
              </span>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed max-w-[240px]">
              Fast, free video-to-text extraction. No signup required.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-brand-muted hover:text-brand-text transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-brand-muted hover:text-brand-text transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-sm text-brand-text mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {["How it works", "Use Cases", "Pricing", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-sm text-brand-text mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border/30 text-center">
          <p className="text-xs text-brand-muted">
            © 2025 TranscriptLY. Made with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
