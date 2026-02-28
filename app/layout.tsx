import { Geist, Geist_Mono } from 'next/font/google';


import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

import type { Metadata } from 'next';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Client Parser - User-Agent Parser for JavaScript/TypeScript',
  description:
    'A lightweight, fast, and accurate user-agent parser for JavaScript and TypeScript. Parse browser, OS, device, and engine information from User-Agent strings.',
  keywords: [
    'user-agent',
    'parser',
    'client-parser',
    'browser detection',
    'OS detection',
    'device detection',
    'typescript',
    'javascript',
    'npm',
  ],
  authors: [{ name: 'Montasim', url: 'https://github.com/montasim' }],
  creator: 'Montasim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/montasim/client-parser',
    title: 'Client Parser - User-Agent Parser for JavaScript/TypeScript',
    description:
      'A lightweight, fast, and accurate user-agent parser for JavaScript and TypeScript.',
    siteName: 'Client Parser',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Parser - User-Agent Parser',
    description:
      'A lightweight, fast, and accurate user-agent parser for JavaScript and TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased mx-auto`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
