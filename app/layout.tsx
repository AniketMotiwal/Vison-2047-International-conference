import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vision 2047 | Prosperous & Great Bharat 2.0 - International Conference',
  description: 'Join the landmark 2nd Annual International Conference at IIT Roorkee. A convergence of civilizational wisdom, frontier science, and transformative statecraft for Bharat 2047.',
  keywords: 'Vision 2047, IIT Roorkee, International Conference, Bharat, Prosperous Bharat, Sustainable Development',
  generator: 'v0.app',
  openGraph: {
    title: 'Vision 2047: Prosperous & Great Bharat 2.0',
    description: 'International Conference on Vision 2047 - April 24-26, 2026 at IIT Roorkee',
    type: 'website',
    locale: 'en_IN',
  },
  icons: {
  icon: [
    {
      url: '/iit-logo.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/iit-logo.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  apple: '/iit-apple-icon.png',
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
