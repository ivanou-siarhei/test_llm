# Prompt: Landing Page — Video Transcript Extractor

---

## Role

You are a **world-class UI/UX designer and front-end engineer** with a strong background in conversion-focused landing pages and editorial design. You create interfaces that feel premium, intentional, and alive — not generic SaaS templates. Your code is clean Next.js + Tailwind CSS + Framer Motion. Every section has a clear purpose: to guide a visitor from curiosity to clicking the CTA.

---

## Design Direction

**Aesthetic:** Dark editorial — think a high-end creative tool, not a startup template.

**Tone:** Calm confidence. The product does something simple, powerfully. The design communicates that without shouting.

**Palette:**
- Background: near-black `#0A0A0F`
- Surface: `#111118`
- Border/dividers: `#1E1E2E`
- Primary accent: electric indigo `#6C63FF`
- Secondary accent: cool teal `#00D4AA`
- Text primary: `#F0EFF8`
- Text muted: `#6B6A80`

**Typography:**
- Display headings: `Sora` (Google Fonts) — geometric, modern, weighty
- Body text: `DM Sans` — highly legible, warm, neutral
- Code/mono snippets: `JetBrains Mono` — for URL input examples, timestamps

**Motion:** Subtle and purposeful. Use Framer Motion for:
- Staggered section reveals on scroll (opacity + translateY)
- Hover lifts on cards (+2px, shadow bloom)
- Smooth underline animation on nav links
- Number counters animating up on scroll (stats section)
- Gradient shimmer on the hero headline

**Layout:** Full-width sections with max-width content container (`max-w-6xl mx-auto`). Generous vertical padding (`py-24` or `py-32`). Sections alternate between centered and asymmetric layouts. No two consecutive sections should have the same rhythm.

---

## Page Sections (in order)

---

### 1. Navigation Bar

**File:** `components/landing/Navbar.tsx`

- Logo: left-aligned — small wordmark `TranscriptLY` in `Sora`, with a small animated waveform icon (SVG, 3 bars pulsing via CSS keyframes)
- Nav links: `How it works`, `Use Cases`, `Pricing`, `FAQ` — smooth scroll anchors
- Right side: single ghost-style button `Try it free →` that scrolls to the app section
- Behavior: transparent on top, blurs to `backdrop-blur-md bg-[#0A0A0F]/80` on scroll
- Mobile: hamburger menu with a slide-down drawer

---

### 2. Hero Section

**File:** `components/landing/Hero.tsx`

**Layout:** Centered, vertically dominant. Takes up full viewport height (`min-h-screen`).

**Elements:**
- Small eyebrow tag above the headline: a pill badge styled with a teal border and subtle glow — text: `No AI. No signup. No nonsense.`
- **Main headline** (large, `text-6xl` to `text-8xl`, responsive):
  ```
  Turn any video
  into clean text.
  Instantly.
  ```
  The word `clean` has a shimmer gradient animation cycling between indigo and teal.
- **Subheadline** (`text-lg`, muted color, max-width 480px, centered):
  ```
  Paste a YouTube link. Get a formatted transcript in seconds.
  No account required. Works with auto-generated captions.
  ```
- **Single CTA button:** Large, filled, indigo background, rounded-full, with a subtle glow shadow on hover. Text: `Extract Transcript →`. On click: smooth scroll to the app embed section.
- **Below button:** Three micro-trust signals in a row (small icons + text):
  - `⚡ Free to use`
  - `🔒 No data stored`
  - `📋 One-click copy`
- **Background:** Radial gradient blob centered behind the text — deep indigo bleeding into transparent. Layered noise texture at 4% opacity for depth. Absolutely positioned, pointer-events none.
- **Bottom fade:** Linear gradient from transparent to `#0A0A0F` at the very bottom to blend into the next section.

---

### 3. App Embed Section (the actual tool)

**File:** `components/landing/AppEmbed.tsx`

**Purpose:** The user can try the tool directly on the landing page without navigating away.

**Layout:** Centered card, max-width 720px, with a glowing indigo border (`border border-[#6C63FF]/30`), rounded-2xl, dark surface background, subtle inner glow.

**Elements inside the card:**
- Small section label above the card: `Try it right now ↓` (muted, small caps)
- URL input field — full width, dark bg, rounded-xl, placeholder: `https://youtube.com/watch?v=...`
- Below input: `Get Transcript` button — full width, indigo, bold
- Result frame: scrollable textarea (readonly), max-height 300px, appears with a fade-in animation after extraction
- Copy button: top-right of result frame, icon + text `Copy all`
- Word count: small muted text below frame

This component imports from the main app logic (shared `extractTranscript` hook/API call).

---

### 4. How It Works

**File:** `components/landing/HowItWorks.tsx`

**Layout:** Three steps in a horizontal row on desktop, stacked on mobile. Each step connected by a dashed animated line.

**Section header:**
```
How it works
Three steps. Zero friction.
```

**Steps:**

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 01 | 🔗 Link icon | Paste a video URL | Copy any YouTube link and drop it in the input above. Works with any public video that has captions. |
| 02 | ⚙️ Gear icon | We fetch the captions | Our server extracts the subtitle track directly from YouTube's caption system — no audio processing, no AI guessing. |
| 03 | 📋 Copy icon | Copy your transcript | The full text appears formatted and ready. Hit copy and it's in your clipboard. |

**Design details:**
- Step number (`01`, `02`, `03`) in large, very muted text behind each card — `text-8xl opacity-5 absolute top-0 right-4`
- Each card has a thin top border in the accent color with a gradient fade
- On hover: card lifts slightly, border brightens

---

### 5. Why It Matters (Problem → Solution)

**File:** `components/landing/WhyItMatters.tsx`

**Layout:** Two-column asymmetric. Left: large bold statement. Right: supporting paragraph + bullet list.

**Left heading (large, display font):**
```
Reading is 3×
faster than
watching.
```

**Right content:**

Short paragraph:
```
Videos are everywhere. But when you need the information inside them —
for research, study, work, or writing — watching is slow. Transcripts
let you skim, search, quote, and reference without scrubbing a timeline.
```

Bullet list (with custom checkmark icons in teal):
- Find the exact quote you need in seconds
- Use video content in articles, summaries, and reports
- Study lecture recordings without replaying them
- Make content accessible for people who prefer reading
- Feed transcripts into your own notes or knowledge base

**Background detail:** Faint horizontal rule lines across the full section — like notebook paper, very subtle, 3% opacity.

---

### 6. Use Cases

**File:** `components/landing/UseCases.tsx`

**Section header:**
```
Built for everyone
who works with video content.
```

**Layout:** Bento grid — 6 cards in a 3×2 grid on desktop, 2×3 on tablet, 1-column on mobile. Cards have varying heights to break monotony (two tall cards, four regular).

**Use Case Cards:**

| Emoji | Title | Body |
|-------|-------|------|
| 🎓 | Students & Researchers | Turn lecture recordings, conference talks, and documentary content into searchable, citable text for papers and study notes. |
| ✍️ | Content Creators | Repurpose your own YouTube videos into blog posts, newsletters, threads, or scripts. Double your content output from the same effort. |
| 📰 | Journalists & Writers | Extract quotes from interviews, press conferences, and video sources without rewatching. Get the sentence you need in one paste. |
| 🌐 | Translators & Localizers | Start with a clean source transcript instead of manually transcribing. Cut your pre-translation prep time significantly. |
| 📚 | Language Learners | Read along with native-language videos. Study vocabulary, sentence structure, and idioms in written form at your own pace. |
| 🏢 | Teams & Businesses | Capture the key points from webinars, product demos, and training videos. Turn passive watching into searchable team knowledge. |

**Design details:**
- Each card has a large emoji displayed with a soft colored glow behind it (matching a per-card accent hue)
- Card background: `#111118` with a subtle radial gradient from the accent color at 5% opacity
- On hover: emoji scales up (`scale-110`), glow intensifies

---

### 7. Stats / Social Proof Numbers

**File:** `components/landing/Stats.tsx`

**Layout:** Full-width dark band (`bg-[#0D0D14]`), four stats centered in a row.

**Stats (animated count-up on scroll):**

| Number | Label |
|--------|-------|
| 50,000+ | Transcripts extracted |
| 2.4M+ | Words processed |
| < 5 sec | Average processing time |
| 100% | Free, always |

**Design:** Numbers in huge display font with gradient fill (indigo→teal). Label below in muted small caps. Thin vertical dividers between stats.

---

### 8. Testimonials

**File:** `components/landing/Testimonials.tsx`

**Layout:** Horizontal scroll carousel on mobile, masonry 3-column grid on desktop.

**Section header:**
```
People are using it.
They seem happy about it.
```
(The second line in muted, italic `DM Sans` — a touch of personality)

**Testimonials (6 total):**

```
"I used to rewatch entire interviews to find one quote. 
Now I paste the link, Ctrl+F, done."
— Maya R., Freelance Journalist

"As a PhD student I live in lecture recordings. This saves me 
probably two hours a week."
— David K., Graduate Researcher

"We use it to turn our podcast episodes into newsletter drafts. 
Genuinely changed our workflow."
— Sophie & Tom, Indie Podcast

"My students have English as a second language. Having the 
transcript alongside the video is a game-changer."
— Priya M., Online Educator

"I translate video content for clients. This is now step one of 
every project."
— Carlos V., Localization Specialist

"Clean output, no nonsense. Does exactly what it says."
— Alex W., Product Designer
```

**Design details:**
- Each testimonial card: dark surface, rounded-2xl, thin border, quote mark (`"`) in huge muted indigo behind the text
- Star rating (5 stars) in teal at the top of each card
- Avatar: simple generated initials avatar in a colored circle (no real photos needed)
- Subtle hover: border color transitions from muted to indigo

---

### 9. Pricing

**File:** `components/landing/Pricing.tsx`

**Section header:**
```
Simple pricing.
As in, it's free.
```

**Layout:** Three cards in a row. The center card is highlighted (the "recommended" plan).

**Plans:**

#### Free — $0/month
- Unlimited transcripts
- YouTube support
- Plain text output
- Copy to clipboard
- No account needed
- ❌ No API access
- ❌ No bulk processing
- ❌ No priority support

**Button:** `Start for free` (ghost style)

---

#### Pro — $9/month *(highlighted, indigo border, "Most Popular" badge)*
- Everything in Free
- ✅ API access (REST endpoint)
- ✅ Bulk URL processing (up to 50 at once)
- ✅ Language selection
- ✅ Timestamp mode
- ✅ Export as .txt / .md
- ✅ Priority support

**Button:** `Get Pro →` (filled indigo, glowing)

---

#### Team — $29/month
- Everything in Pro
- ✅ Up to 10 team members
- ✅ Shared history & saved transcripts
- ✅ Webhook integration
- ✅ Dedicated support

**Button:** `Contact us` (ghost style)

**Design details:**
- The Pro card is slightly taller than the others (visual elevation)
- Annual toggle above cards: `Monthly / Annual (Save 20%)` — updates displayed prices
- Background: subtle radial gradient below the three cards to create depth

---

### 10. FAQ

**File:** `components/landing/FAQ.tsx`

**Layout:** Single column, max-width 680px, centered. Accordion-style — each question expands on click with a smooth height animation.

**Section header:**
```
Questions you might have.
```

**Questions:**

**Q: Does it work on videos without subtitles?**
A: No. The tool extracts existing caption tracks — it doesn't generate speech-to-text. If a YouTube video has auto-generated or manual captions enabled, you're good. If not, there's nothing to extract.

**Q: Do I need to create an account?**
A: For the free plan, no account is needed at all. Just paste and go. An account is required for Pro and Team plans to manage API keys and history.

**Q: Which languages are supported?**
A: Any language that YouTube provides captions in. The tool fetches whatever caption track YouTube has for the video — English, Spanish, Russian, Japanese, and many more.

**Q: Is my data stored anywhere?**
A: No. The transcript is generated on the fly and returned directly to your browser. We don't log URLs or store transcript content.

**Q: How fast is it?**
A: Typically under 5 seconds for most videos. Very long videos (2+ hours) may take up to 15 seconds.

**Q: Can I use this for YouTube Shorts?**
A: Yes, Shorts URLs are supported if the Short has a caption track.

**Q: What about private or age-restricted videos?**
A: Private videos cannot be accessed. Age-restricted videos may or may not work depending on YouTube's access controls.

**Design details:**
- Each FAQ item: thin bottom border, question in semi-bold, `+` / `×` toggle icon right-aligned
- Open state: answer fades in below, `+` rotates to `×`
- Hover on closed item: question text shifts slightly to indigo

---

### 11. Final CTA Banner

**File:** `components/landing/CTABanner.tsx`

**Layout:** Full-width section, centered, with a dramatic background — animated gradient mesh (indigo + teal blobs moving very slowly via CSS keyframes, blurred with `blur-3xl`, layered behind content).

**Content:**
```
Ready to stop
rewatching?
```
Large display headline, white.

Subtext (muted):
```
Paste your first link. It takes 10 seconds.
```

**Button:** Large, white background with dark text — inverted from the rest of the page for maximum contrast. `Extract my first transcript →`

---

### 12. Footer

**File:** `components/landing/Footer.tsx`

**Layout:** Three columns + bottom bar.

- **Col 1:** Logo + one-line description + social icons (GitHub, Twitter/X)
- **Col 2:** Links — How it works, Use Cases, Pricing, FAQ
- **Col 3:** Legal — Privacy Policy, Terms of Service, Contact

**Bottom bar:** `© 2025 TranscriptLY. Made with care.` — centered, muted small text.

---

## File Structure

```
app/
├── (landing)/
│   └── page.tsx              ← Assembles all sections in order
components/
└── landing/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── AppEmbed.tsx
    ├── HowItWorks.tsx
    ├── WhyItMatters.tsx
    ├── UseCases.tsx
    ├── Stats.tsx
    ├── Testimonials.tsx
    ├── Pricing.tsx
    ├── FAQ.tsx
    ├── CTABanner.tsx
    └── Footer.tsx
```

---

## Implementation Notes

### Fonts (Google Fonts via `next/font`)
```ts
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google';
```

### Framer Motion — Scroll Reveal Pattern
Every section uses this wrapper:
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-80px' }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
```

### Tailwind Custom Colors (tailwind.config.ts)
```ts
colors: {
  brand: {
    bg: '#0A0A0F',
    surface: '#111118',
    border: '#1E1E2E',
    indigo: '#6C63FF',
    teal: '#00D4AA',
    text: '#F0EFF8',
    muted: '#6B6A80',
  }
}
```

### Pricing Toggle State
```ts
const [annual, setAnnual] = useState(false);
const price = (monthly: number) => annual ? Math.round(monthly * 0.8) : monthly;
```

### FAQ Accordion State
```ts
const [open, setOpen] = useState<number | null>(null);
const toggle = (i: number) => setOpen(prev => prev === i ? null : i);
```

---

## Design Quality Checklist

Before considering the landing page complete, verify:

- [ ] No two consecutive sections have the same background color
- [ ] Every section has at least one motion/animation detail
- [ ] The hero is full-viewport and visually dominant
- [ ] Typography scale is clear: display → heading → body → caption
- [ ] All CTAs lead to the same scroll target (the app embed)
- [ ] Mobile layout tested at 375px width
- [ ] No section feels like it came from a free Tailwind template
- [ ] The noise texture and gradient blobs are tasteful, not distracting
- [ ] Hover states exist on every interactive element
- [ ] Color contrast passes WCAG AA for all text on its background
