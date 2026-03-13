# AGENTS.md

# Autonomous Development Specification

Project: Avenue Driveways Website
Framework: Next.js (App Router)
Rendering: Static Site Generation (SSG)

---

# Agent Mission

Convert the provided **React prototype UI** into a **production-ready static marketing website** using **Next.js App Router**.

The prototype currently represents **~60% of the final design**.

The agent must:

1. Replicate the visual layout
2. Convert the prototype into scalable architecture
3. Implement SEO best practices
4. Maintain performance and responsiveness
5. Ensure all content is data-driven

---

# Absolute Constraints

The agent MUST follow these rules.

The site must be:

• Fully Static
• No Backend
• No Database
• No API Routes
• No Server Actions
• No Dynamic Rendering

Rendering must use:

```
Static Site Generation (SSG)
```

Example:

```ts
export const dynamic = "force-static"
export const revalidate = false
```

---

# Tech Stack

Framework
Next.js 14+

Language
TypeScript

Styling
TailwindCSS

Animation
Framer Motion

Icons
Lucide React

Image Optimization
next/image

SEO
Next.js Metadata API
JSON-LD Structured Data

---

# Development Phases

The agent must execute development in the following order.

---

# Phase 1 — Architecture Setup

Create project structure.

```
/app
layout.tsx
page.tsx

/app/services/[slug]
page.tsx

/app/gallery
page.tsx

/app/faqs
page.tsx

/app/contact
page.tsx

/components
Navbar.tsx
TopBar.tsx
HeroSection.tsx
IntroSection.tsx
FeaturesSection.tsx
ProcessSection.tsx
ReviewsSection.tsx
FAQSection.tsx
CTABanner.tsx
QuickQuoteForm.tsx
Footer.tsx
FloatingContact.tsx

/data
site.ts
navigation.ts
services.ts
reviews.ts
faqs.ts

/lib
icons.ts
seo.ts
helpers.ts

/styles
globals.css
```

---

# Phase 2 — Data Architecture

The existing prototype contains a `SITE_CONFIG` object.

This must be **refactored into modular data files**.

Example:

/data/site.ts

```ts
export const site = {
 companyName: "Avenue Driveways",
 phone: "01603 369457",
 email: "info@avenuedriveways.co.uk",
}
```

---

/data/navigation.ts

```ts
export const navigation = [
 { label: "Home", href: "/" },
 { label: "Block Paving", href: "/services/block-paving" },
 { label: "Resin Bound", href: "/services/resin-bound" },
 { label: "Tar & Chip", href: "/services/tar-chip" },
 { label: "Tarmac", href: "/services/tarmac" },
 { label: "Gallery", href: "/gallery" },
 { label: "FAQs", href: "/faqs" },
 { label: "Contact", href: "/contact" }
]
```

---

# Phase 3 — Services System

Service pages must be **generated from data**.

Example:

/data/services.ts

```ts
export const services = [
 {
  slug: "tarmac",
  title: "Tarmac Driveways East Anglia",
  hero: {},
  intro: {},
  features: [],
  process: [],
  reviews: [],
  faqs: []
 }
]
```

Pages should be generated using:

```
/services/[slug]
```

---

# Phase 4 — Component Conversion

Convert prototype sections into modular components.

Mapping:

React Prototype → Next.js Component

HeroSection → components/HeroSection
IntroSection → components/IntroSection
FeaturesSection → components/FeaturesSection
ProcessSection → components/ProcessSection
ReviewsSection → components/ReviewsSection
FAQSection → components/FAQSection
CTABanner → components/CTABanner

Components must be reusable.

Never hardcode page content.

---

# Phase 5 — Animation System

Replace custom IntersectionObserver with **Framer Motion**.

Example:

```
<motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
>
```

Animations required:

Hero entrance
Section fade-in
Feature card hover
CTA highlight
FAQ expansion

Animations must be **lightweight**.

---

# Phase 6 — Responsive Design

The site must follow **mobile-first design**.

Breakpoints:

mobile → default
tablet → md
laptop → lg
desktop → xl

Example:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

Requirements:

• Hamburger menu for mobile
• Touch-friendly buttons
• Responsive hero
• No horizontal scrolling

---

# Phase 7 — SEO Optimization

Every page must include:

Title
Meta description
OpenGraph tags
Twitter tags
Canonical URL

Example:

```ts
export const metadata = {
 title: "Tarmac Driveways East Anglia",
 description: "Professional tarmac driveway installation."
}
```

---

# Structured Data

Add LocalBusiness Schema.

Example JSON-LD:

```
Driveway Contractor
Construction Service
Local Business
```

Include:

Company name
Phone
Service area
Services offered

---

# Phase 8 — Image Optimization

All images must use:

```
next/image
```

Images must be stored in:

```
/public/images
```

Hero images must use:

```
priority
```

Other images must use lazy loading.

---

# Phase 9 — Performance

Performance targets:

Lighthouse Performance ≥ 95
SEO ≥ 95
Accessibility ≥ 90

Strategies:

Static rendering
Image optimization
Minimal JS
Lazy loading

---

# Code Quality Rules

The agent must enforce:

Strict TypeScript
No use of `any`
Reusable components
Clean architecture
DRY principles

---

# Design Refinement

The prototype UI represents **~60% design accuracy**.

The agent must improve:

Spacing consistency
Typography scale
Mobile layout
Animation smoothness
Visual hierarchy

However, **core layout must remain similar**.

---

# Maintainability Requirement

Future updates must require editing **data files only**.

Example:

Updating services must only require editing:

```
/data/services.ts
```

UI components must remain unchanged.

---

# Final Output Requirements

The finished project must be:

Production ready
Fully static
SEO optimized
Mobile responsive
Highly performant
Cleanly structured
Data-driven

The architecture must allow **content editing without touching UI components**.
