# Project agent guide

## Purpose

This repository is the marketing site for Children Choice Publication Pvt. Ltd. The live experience introduces the publisher, presents its company story and impact figures, and lets visitors inspect book categories and their features.

The visual direction is a premium educational publishing brand using a shared system in `src/app/globals.css`: primary navy `#101F3D`, royal blue `#2563EB`, sky blue `#8BD9F8`, ice blue `#EAF5FF`, white, main text `#17243B`, and muted text `#64748B`. Use Plus Jakarta Sans for display headings and Inter for body text when those fonts are available, with the existing locally loaded Poppins as fallback. Prefer spacious layouts, restrained gradients, elegant borders, soft shadows, readable contrast, and measured motion. Respect reduced-motion preferences for all animation. The shared footer retains green for the WhatsApp action. The reference at ciaoenergy.com informs product-stage ideas only; do not copy its brand assets or claim its implementation technology.

## Read first

1. `AGENTS.md` for the repository-wide working rules.
2. `architecture.md` for the current dependency map and target boundaries.
3. `flow.md` for the visitor journey and scroll-to-scene contract.
4. `assets.md` before changing animation or media paths.
5. `decisions.md` for choices that prevent framework and styling conflicts.

## Working rules

- Preserve the Next.js App Router and the public URL `/` unless a requested change explicitly requires otherwise.
- Keep content and scene metadata in `src/data/`; keep shared contracts in `src/types/`; keep browser-only animation and rendering in client components under `src/components/`.
- Prefer Tailwind utility classes for component styling. `src/app/globals.css` is only for Tailwind directives, theme variables, and browser-wide base rules. Do not add component selectors or one-off generic CSS.
- Use `lucide-react` for icons. This is the icon set conventionally paired with shadcn/ui; icons alone do not imply that shadcn/ui components are installed.
- Use GSAP for scroll-scrubbed scene progress and complex timelines; use Framer Motion for local UI transitions. Do not let two animation systems write to the same element/property.
- Load Three.js only for a scene that needs real-time 3D. The supplied numbered JPG sequences are pre-rendered animation and should not be needlessly recreated as 3D geometry.
- Keep browser globals, DOM access, GSAP, Framer Motion, and Three.js in client components. Keep page metadata in the server `src/app/layout.tsx`.
- Respect reduced-motion preferences, keyboard access, responsive layouts, and ensure the live CSS 3D book does not depend on WebGL.
- Never fabricate a contact destination, purchase link, video path, QR destination, book-cover art, or company claim. Mark missing production information for an owner to supply.
- Avoid duplicating the source of truth. Book, scene, and navigation data should be imported from `src/data/`, not redefined inside the page.

## Change workflow

Before structural changes, trace the route imports and actual rendered tree. Update these notes when routes, asset naming, the content model, or animation ownership changes. Do not treat unreferenced components as part of the live site without confirming their imports.

