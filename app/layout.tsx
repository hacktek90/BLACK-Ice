import type { Metadata, Viewport } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter-tight',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
  colorScheme: 'dark',
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'BlackICE Portal — AI, Productivity & Web Tools Platform',
  description:
    'BlackICE Portal is a minimal, modern web-based platform offering AI tools, productivity apps, developer utilities, document creation, media tools, and real-time collaboration — accessible instantly in your browser.',
  authors: [{ name: 'BlackICE' }],
  robots: 'index, follow',
  openGraph: {
    title: 'BlackICE Portal',
    description:
      'A modern, minimal portal for launching AI tools, productivity apps, and web utilities.',
    url: 'https://blackice-ac.vercel.app/',
    siteName: 'BlackICE',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'BlackICE Portal Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>{children}</body>
    </html>
  )
}
