import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://valismesh.com'),
  title: 'ValisMesh | Governed AI Workforces',
  description: 'ValisMesh is developing a governed multi-agent AI workforce platform for real business operations.',
  icons: {
    icon: [{ url: '/brand/approved-valismesh-v.png', type: 'image/png' }],
    apple: [{ url: '/brand/approved-valismesh-v.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    url: 'https://valismesh.com',
    siteName: 'ValisMesh',
    images: [{ url: '/brand/approved-valismesh-full-lockup.png', width: 2115, height: 744, alt: 'ValisMesh — AI workforce. Business execution. Governed.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValisMesh | Governed AI Workforces',
    description: 'A governed multi-agent AI workforce platform for real business operations.',
    images: ['/brand/approved-valismesh-full-lockup.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
