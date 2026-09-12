import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://valismesh.com'),
  title: 'ValisMesh | Governed AI Workforces',
  description: 'ValisMesh is developing a governed multi-agent AI workforce platform for real business operations.',
  icons: {
    icon: [
      { url: '/icons/ValisMesh-Icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icons/ValisMesh-Icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/icons/ValisMesh-Icon-192.png', type: 'image/png', sizes: '192x192' }],
  },
  openGraph: {
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    url: 'https://valismesh.com',
    siteName: 'ValisMesh',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'ValisMesh — AI workforce. Business execution. Governed.' }],
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
      <body>{children}</body>
    </html>
  );
}
