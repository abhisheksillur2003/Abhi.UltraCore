import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://abhi-ultracore.nagashree143.chatgpt.site'),
  title: {
    default: 'Abhishek S Illur | UltraCore',
    template: '%s | UltraCore',
  },
  description:
    'Full-stack software engineering by Abhishek S Illur. Explore MeetingHub, QuantLens, and the work behind them.',
};
export const viewport: Viewport = { themeColor: '#f5f4f0' };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
