import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://valismesh.com'),
  title: 'ValisMesh | Governed AI Workforces',
  description: 'ValisMesh is developing a governed multi-agent AI workforce platform for real business operations.',
  icons: { icon: '/brand/valismesh-logo.png' },
  openGraph: {
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    url: 'https://valismesh.com',
    siteName: 'ValisMesh',
    images: [{ url: '/og.png', width: 1774, height: 887, alt: 'ValisMesh — Governed AI workforces for real business operations.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
