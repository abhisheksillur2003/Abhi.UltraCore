# ABHI.UltraCore

Personal portfolio for Abhishek S Illur. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 and Framer Motion. Product interfaces are illustrative case-study mockups, not connected applications.

## Run

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Create the production export with `npm run build`. Serve `out` with any static host. Configure unknown paths to serve `404.html` with HTTP status 404.

## Content and assets

- `data/content.ts`: services, skills, credentials, email and project technology.
- `components/projects.tsx`: case studies and original interface mockups.
- `components/experience.tsx`: theme, navigation, intro, cursor, reveal, copy and résumé interactions.
- `app/globals.css`: responsive design and separate dark/light tokens.
- `public/og.png`: branded social preview.
- Add the supplied résumé as `public/Abhishek_Software_Engineer.pdf`. The control checks for a real PDF before downloading and shows an email fallback while it is absent.

The site origin is configured in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`. Update all three if moving to a custom domain. Fonts are self-hosted by next/font at build time. Theme preference respects the system until manually changed, is stored locally, and is applied before paint. Motion respects reduced-motion preferences; enhanced cursor and perspective effects are disabled for touch.

## Validation

```sh
npx tsc --noEmit
npm run build
```

The portfolio uses Next.js static export. Generated shadcn components are retained separately from portfolio source; lint excludes those unmodified components. SVG ARIA roles and keyboard-focusable scroll regions are intentionally supported by the lint configuration.
