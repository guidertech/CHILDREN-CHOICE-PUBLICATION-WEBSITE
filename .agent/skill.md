# Project implementation notes

## Before implementation

- Trace the live import graph from `src/app/` before changing routes or shared components.
- Read `.agent/architecture.md`, `.agent/flow.md`, and `.agent/assets.md` before structural work.
- Use owner-approved names, claims, links, and imagery. Clearly identify any collection series that remain placeholders until official content is supplied.

## Styling and UI

- Use Tailwind 4 utilities in JSX/TSX; keep `src/app/globals.css` to Tailwind import and browser-wide base rules.
- Use Lucide icons and accessible HTML.
- Preserve the visual system: Poppins, navy and royal blue typography, sky and ice blue surfaces, and restrained lift/3D hover effects.
- Respect reduced-motion preferences for Framer Motion transitions.

## Runtime and dependencies

- Current routes use Next.js App Router, React, Framer Motion, and Lucide React.
- Keep browser-only behavior within client components and metadata in the server layout.
- Keep `package.json` and `package-lock.json` aligned when changing dependencies.
- The numbered Questie animation frames are retained media but are not loaded by the live routes. The current hero uses the supplied kit-cover assets.
