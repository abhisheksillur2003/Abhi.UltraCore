import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://abhi-ultracore.nagashree143.chatgpt.site'),
  title: {
    default: 'Abhishek S Illur — Full-Stack Software Engineer',
    template: '%s | Abhishek S Illur',
  },
  description:
    'Portfolio of Abhishek S Illur, a Full-Stack Software Engineer building scalable SaaS products, modern web applications, AI integrations and automation-driven digital solutions.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ABHI.UltraCore',
    title: 'Abhishek S Illur — Full-Stack Software Engineer',
    description:
      'Scalable SaaS products. Modern web applications. Built with intent.',
    images: [
      {
        url: '/og.png',
        alt: 'ABHI.UltraCore — Abhishek S Illur, Full-Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek S Illur — Full-Stack Software Engineer',
    description:
      'Scalable SaaS products. Modern web applications. Built with intent.',
    images: ['/og.png'],
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08090D' },
    { media: '(prefers-color-scheme: light)', color: '#F7F8FC' },
  ],
};
const themeScript = `try{const t=localStorage.getItem('ultracore-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';if(sessionStorage.getItem('ultracore-intro'))document.documentElement.dataset.visited='true'}catch{}`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}.intro{display:none!important}`}</style>
        </noscript>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
