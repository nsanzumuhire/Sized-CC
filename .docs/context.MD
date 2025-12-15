# Project: SIZED.CC – Industrial Fabrication Landing Page

## Role

You are a **senior frontend engineer and UI/UX designer**.
Build a **high-performance, SEO-optimized landing page** for an industrial fabrication business.

The brand specializes in:

- Metal cutting
- Custom furniture & tables
- Signage & branding
- Interior & home décor
- Personalized gifts

The website domain is **sized.cc**.

---

## Tech Stack (MANDATORY)

### Core

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Aceternity UI** (primary UI components)
- **Framer Motion** (subtle animations only)

### UI & Utilities

- **Lucide Icons**
- **next/image** (all images must be optimized)
- **next/font** (Google Fonts)

### Fonts

- Primary: **Inter**
- Headings / Accent: **Space Grotesk**

---

## Performance & SEO Requirements (NON-NEGOTIABLE)

- Server Components by default
- Zero unnecessary client-side state
- Lighthouse score target: **95+**
- Semantic HTML (`<section>`, `<article>`, `<header>`, etc.)
- Metadata using `export const metadata`
- OpenGraph + Twitter cards
- JSON-LD schema for LocalBusiness
- Sitemap and robots.txt

---

## Design Language

### Brand Personality

- Industrial
- Precise
- Premium
- Durable
- Trustworthy

### Color Palette

- Primary: `#0F172A` (deep steel)
- Secondary: `#1E293B`
- Accent: `#F97316` (molten metal / sparks)
- Neutral: `#E5E7EB`

Accent color must be used **sparingly** (CTAs, highlights).

### Visual Style

- Dark UI
- Strong contrast
- Grid-based layouts
- Sharp edges (avoid excessive rounding)
- Subtle motion only (no flashy animations)

---

## Page Structure (Single Landing Page)

### 1. Hero Section

- Aceternity UI spotlight or gradient background
- Headline:
  **Precision Metal Cutting & Custom Fabrication**
- Subheading:
  Custom signage, furniture, branding, and décor — built to exact size.
- Primary CTA: **Request a Quote**
- Secondary CTA: **View Our Work**

---

### 2. What We Do

Display as clean service cards (Aceternity UI).

Services content:

#### Signage

- 2D & 3D signage
- Embossed & reflective signs
- Indoor & outdoor signage
- Floor signs & markings

#### Branding

- Clothes branding
- Commercial vehicle wrapping
- Wall branding & installations

#### Furniture & Interior Design

- Custom furniture & tables
- Interior design for homes, offices, restaurants, bars

#### Home Décor & Artworks

- Wall décor
- Exclusive custom-sized decorations
- Artworks & decorative pieces

#### Personalized Gifts

- Trophies & medals
- Table décor
- Birthday & ceremonial gifts

#### Print & Promotional

- Wallpapers
- Stickers (2D & 3D)

---

### 3. Our Process

Render as a clean numbered or timeline component.

Steps:

1. **Tell Us Your Idea**  
   Share your concept, design, size, and material.

2. **Design & Mockups**  
   We send mockups for review and revisions.

3. **Confirm Your Order**  
   Price agreed → payment → design approved → production starts.

4. **Production & Delivery**  
   Express or scheduled delivery, installation if required.

5. **Enjoy Your Order**  
   Precision-crafted results, built to last.

---

### 4. Portfolio

- Grid-based image gallery
- Dark overlay hover effects
- Categories:
  - Signage
  - Branding
  - Furniture
  - Home Décor
  - Interior Projects
  - Personalized Gifts

Images must be lazy-loaded and optimized.

---

### 5. Why Choose Sized

Display as strong value points:

- Precision measurements
- Durable materials
- Skilled craftsmanship
- On-time delivery
- Custom-made solutions

---

### 6. Call To Action

High-contrast Aceternity UI section:

Headline:
**Let’s build something solid.**

CTA Button:
**Request a Quote**

---

## Code & Structure Guidelines

- Use `/app` directory structure
- Components in `/components`
- UI primitives in `/components/ui`
- Avoid inline styles
- Use Tailwind utility classes
- No unused dependencies

---

## Deliverables

- Fully functional Next.js landing page
- Clean, readable, production-ready code
- Mobile-first responsive design
- Dark industrial aesthetic
- SEO-ready setup

---

## Final Notes

This is **NOT a SaaS UI**.
This is an **industrial craftsmanship brand**.
Prioritize **clarity, strength, trust, and speed** over decoration.
