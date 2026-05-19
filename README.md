# بديع | BADEE PROGRAM — Landing Page

> **مبدعون بلا حدود** — Production-ready, conversion-focused Arabic landing page for the Badee AI program for teens (12–18). Built with Next.js 15 App Router, TypeScript, Tailwind, shadcn/ui, and Framer Motion.

---

## 🚀 Quick Start

```bash
# install
npm install

# develop
npm run dev

# build for production
npm run build

# start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` → `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://badee.meem-online-school.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=201063275860
```

WhatsApp number and program details live in [lib/constants.ts](lib/constants.ts) — edit there for a single source of truth.

---

## 🏗️ Project Structure

```
.
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout: fonts, metadata, JSON-LD
│   ├── page.tsx             # Landing page composition
│   ├── globals.css          # Tailwind + design tokens + utilities
│   ├── opengraph-image.tsx  # Dynamic OG image (Edge)
│   ├── icon.tsx             # Dynamic favicon (Edge)
│   ├── robots.ts            # /robots.txt
│   ├── sitemap.ts           # /sitemap.xml
│   └── not-found.tsx        # 404 page
│
├── sections/                # Page sections (one per landing block)
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Offer.tsx
│   ├── WhyChoose.tsx
│   ├── Outputs.tsx
│   ├── Fun.tsx
│   ├── Trust.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── components/              # Reusable UI
│   ├── ui/                  # shadcn primitives (Button, Accordion, Card)
│   ├── Navbar.tsx
│   ├── Robot.tsx            # SVG mascot
│   ├── FloatingRobot.tsx    # Animated robot with speech bubble
│   ├── FloatingWhatsApp.tsx # Sticky CTA
│   ├── WhatsAppButton.tsx
│   ├── WhatsAppIcon.tsx
│   ├── SectionHeader.tsx
│   ├── BackgroundFX.tsx     # Global ambient gradients + grid
│   └── JsonLd.tsx           # Structured data (Organization, Course, FAQ)
│
├── lib/
│   ├── constants.ts         # PROGRAM, SITE, WHATSAPP_LINK
│   └── utils.ts             # cn() class-merge helper
│
├── tailwind.config.ts       # Custom palette, animations, plugin
├── next.config.mjs          # Image opt, package opt, headers
├── vercel.json              # Security headers
└── tsconfig.json            # Strict TS + @/* path alias
```

---

## 🎨 Design System

- **Direction**: RTL by default (`<html lang="ar" dir="rtl">`).
- **Fonts**: Cairo (body) + Tajawal (display) — both Arabic-first, loaded via `next/font/google` with `display: "swap"`.
- **Palette**: deep navy base, electric blue + cyan accents, gold highlights, soft glow gradients.
- **Effects**: glassmorphism (`.glass`, `.glass-strong`), gradient borders (`.gradient-border`), grid pattern (`.grid-pattern`), gradient text (`.gradient-text`).
- **Motion**: Framer Motion with `whileInView` + `once: true` for paint-once animations. Respects `prefers-reduced-motion`.

---

## 🤖 Robot Experience

`<Robot />` is a pure inline SVG (no image cost). `<FloatingRobot />` wraps it with a Framer Motion float, intersection-observer reveal, and an optional speech bubble. Speech bubbles appear naturally as you scroll through the Hero, Problem, Outputs, FAQ, and Final CTA sections.

---

## 💬 WhatsApp Integration

Single source of truth in [lib/constants.ts](lib/constants.ts):

```ts
const WHATSAPP_RAW = "201063275860";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(...)}`;
```

- Pre-filled multi-line Arabic message (Landing page / name / age / interests).
- Used by `<WhatsAppButton />` (inline CTAs) and `<FloatingWhatsApp />` (sticky bottom-left, appears after 400px scroll).
- Opens natively on mobile, in `web.whatsapp.com` on desktop.

---

## 🔍 SEO

| Surface | File |
|---|---|
| Metadata, OG, Twitter, robots | [app/layout.tsx](app/layout.tsx) |
| JSON-LD: Organization + Course + FAQPage | [components/JsonLd.tsx](components/JsonLd.tsx) |
| Dynamic OG image (1200×630) | [app/opengraph-image.tsx](app/opengraph-image.tsx) |
| sitemap.xml | [app/sitemap.ts](app/sitemap.ts) |
| robots.txt | [app/robots.ts](app/robots.ts) |

**Arabic keywords**: كورس ذكاء اصطناعي للأطفال، تعليم الذكاء الاصطناعي للمراهقين، Prompt Engineering، كورس AI بالعربي، AI course for teens Egypt.

**On-page SEO**: semantic `<main>`, single `<h1>`, scoped `aria-labelledby` per section, sequential heading levels, alt text on all decorative SVGs (`aria-hidden` / `role="img"`), `text-balance` for clean typography.

---

## ⚡ Performance Choices

- **Server Components by default** — only `Navbar`, `Hero`, `Problem`, `Offer`, `WhyChoose`, `Outputs`, `Fun`, `FAQ`, `FinalCTA`, `FloatingRobot`, `FloatingWhatsApp` are `"use client"` (anywhere Framer Motion or hooks are needed). `Footer`, `JsonLd`, `Robot`, `WhatsAppButton` stay on the server.
- **Inline SVGs** for the robot & WhatsApp icon — no image network hops, perfectly crisp at any size.
- **No raster assets shipped** — gradients, blurs, and SVGs only → tiny LCP cost.
- **`optimizePackageImports`** for `lucide-react` and `framer-motion` in [next.config.mjs](next.config.mjs) → only the icons used end up in the bundle.
- **Edge runtime** for OG image and favicon.
- **`font-display: swap`** + Latin+Arabic subsets only.
- **`whileInView` + `viewport={{ once: true }}`** to avoid re-running animations on every scroll.
- **CSS-only background grid + glow** (no canvas, no heavy JS).
- **`prefers-reduced-motion`** support globally in `globals.css`.

Target Lighthouse: **95+ across all categories**.

---

## ♿ Accessibility

- RTL layout with proper `lang` and `dir`.
- Semantic landmarks (`header`, `main`, `section`, `footer`).
- Each section has `aria-labelledby` pointing to its heading.
- All decorative SVGs marked `aria-hidden`; meaningful ones have `role="img"` + `aria-label`.
- Focus rings (`focus-visible:ring-2`) on every interactive element.
- WhatsApp link announces opening behavior in `aria-label`.
- Reduced-motion support kills animations for users who opt out.

---

## ☁️ Deploy to Vercel

1. **Push** to GitHub: `git push origin main`.
2. In Vercel: **New Project** → import `Meem-School/badee-landing`.
3. Framework auto-detects as **Next.js**. Build/install commands need no override.
4. **Environment variables** (optional, only if you change defaults):
   - `NEXT_PUBLIC_SITE_URL=https://badee.meem-online-school.vercel.app`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=201063275860`
5. **Domain**: set `badee.meem-online-school.vercel.app` in Project → Settings → Domains.
6. Deploy. Security headers from [vercel.json](vercel.json) apply automatically.

### Post-deploy checklist

- [ ] Verify OG image at `/opengraph-image` (visual preview).
- [ ] Check `/robots.txt` and `/sitemap.xml`.
- [ ] Run Lighthouse on mobile + desktop.
- [ ] Test WhatsApp link on a real phone — should open WhatsApp with the pre-filled message.
- [ ] Validate structured data: [Rich Results Test](https://search.google.com/test/rich-results).

---

## 🧱 Adding / Editing Content

| What to change | Where |
|---|---|
| Program name, price, dates, seats | [lib/constants.ts](lib/constants.ts) → `PROGRAM` |
| WhatsApp number + message | [lib/constants.ts](lib/constants.ts) → `WHATSAPP_RAW`, `WHATSAPP_MESSAGE` |
| Site URL / description / SEO defaults | [lib/constants.ts](lib/constants.ts) → `SITE` |
| FAQ questions | [sections/FAQ.tsx](sections/FAQ.tsx) → `faqs` array |
| Why-choose features | [sections/WhyChoose.tsx](sections/WhyChoose.tsx) → `features` |
| Outputs / deliverables | [sections/Outputs.tsx](sections/Outputs.tsx) → `outputs` |
| Trust stats + partners | [sections/Trust.tsx](sections/Trust.tsx) |
| Hero headline | [sections/Hero.tsx](sections/Hero.tsx) |
| Colors / fonts | [tailwind.config.ts](tailwind.config.ts) |

---

## 🛠️ Scripts

```bash
npm run dev          # Next dev server
npm run build        # Production build
npm start            # Run production build
npm run lint         # ESLint
npm run type-check   # tsc --noEmit
```

---

**Powered by [Meem Online School](https://www.instagram.com/meem.online.school)** 🤍
