import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/content/site';
import '@/styles/globals.css';

/**
 * Root layout.
 *
 * Deliberately thin: the real <html lang> value depends on the language, so
 * the per-language layout at app/[lang]/layout.tsx owns everything visible.
 * This file only carries settings that are identical for every language.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // Individual pages set their own title; this is the fallback.
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Zooming is never disabled - pinch-to-zoom is an accessibility requirement.
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
