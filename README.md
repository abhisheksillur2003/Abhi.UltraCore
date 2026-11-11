# ABHI.UltraCore

The portfolio of **Abhishek S Illur**, a full-stack software engineer working on SaaS products, web applications, AI integrations, and automation.

## Design and features

- Warm neutral surfaces, system typography, and a restrained blue accent
- Working MeetingHub scheduling demonstration with clearly labeled simulated results
- Project stories for MeetingHub, QuantLens, and DevSpace
- Expandable services, professional experience, and a readable skills list
- Individual certificate previews and PDFs, plus the résumé PDF
- Explore navigation, email and Gmail contact links, and clipboard feedback
- Keyboard focus, accessible tabs, native disclosures, and reduced-motion support
- Privacy Policy and Terms of Service pages explicitly marked as drafts for owner review

## Run and build

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
npm run build
```

The production build exports static files to `out/`. Serve the exported HTML routes and use `404.html` for unknown paths.

## Architecture

```text
app/
  layout.tsx         Metadata, system-font shell, and skip link
  page.tsx           Portfolio sections and project stories
  globals.css        Design tokens and responsive styling
  privacy/page.tsx   Draft privacy disclosure
  terms/page.tsx     Draft terms
components/
  brand-mark.tsx              UltraCore identity
  portfolio-interactions.tsx  Navigation, scheduling demo, email copying
data/
  content.ts         Services, skills, certificates, and contact details
public/
  certificates/      Individual certificate PDFs and previews
  Abhishek_Software_Engineer.pdf
```

Earlier presentation components remain in the repository for reference but are not imported by the current homepage. The current experience does not use Lucide icons, remote fonts, a theme switcher, or animation libraries.

## Data practices

The scheduling demonstration uses temporary React state. It sends no invitations and does not save meeting choices. Contact actions use email, Gmail, or LinkedIn. No analytics or application cookies are added by this portfolio implementation. Hosting practices still require owner confirmation in the draft policies.

## Validation

The redesign was inspected at desktop and mobile widths. Scheduling, keyboard tabs, Explore navigation, service disclosures, email copying, and policy routes were checked in the browser. Run `npm run build` to validate the TypeScript application and regenerate the export.

## Content and ownership

Reusable portfolio data is in `data/content.ts`; project narratives are in `app/page.tsx`. This repository includes personal branding, résumé, and certificates. Please obtain permission before reusing personal materials.
