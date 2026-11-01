import type { Metadata, Viewport } from 'next'
import { Fraunces, Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
  display: 'swap',
})

const grotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jbmono',
  display: 'swap',
})

// Resolves automatically on Vercel. Locally it falls back to localhost.
// Set NEXT_PUBLIC_SITE_URL once you have a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Andrew Wong — Kuala Lumpur',
    template: '%s · Andrew Wong',
  },
  description:
    'I write code most days. The rest of the time I’m on a badminton court, in a coffee shop, or on a plane to somewhere I haven’t been.',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    siteName: 'Andrew Wong',
    url: '/',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Andrew Wong — AI Engineer, Kuala Lumpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${grotesk.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
