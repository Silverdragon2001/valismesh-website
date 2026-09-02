import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://valismesh.com'),
  title: 'ValisMesh | Governed AI Workforces',
  description: 'ValisMesh is developing a governed multi-agent AI workforce platform for real business operations.',
  icons: {
    icon: [
      { url: '/icons/ValisMesh-Icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/ValisMesh-Icon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/ValisMesh-Icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/ValisMesh-Icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/ValisMesh-Icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  openGraph: {
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    url: 'https://valismesh.com',
    siteName: 'ValisMesh',
    images: [{ url: '/brand/ValisMesh-Full-Lockup.png', width: 1600, height: 1450, alt: 'ValisMesh — AI workforce. Business execution. Governed.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    images: ['/brand/ValisMesh-Full-Lockup.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
