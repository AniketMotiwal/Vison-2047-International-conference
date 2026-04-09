// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Vision 2047 | Prosperous & Great Bharat 2.0 - International Conference',
//   description: 'Join the landmark 2nd Annual International Conference at IIT Roorkee. A convergence of civilizational wisdom, frontier science, and transformative statecraft for Bharat 2047.',
//   keywords: 'Vision 2047, IIT Roorkee, International Conference, Bharat, Prosperous Bharat, Sustainable Development',
//   generator: 'v0.app',
//   openGraph: {
//     title: 'Vision 2047: Prosperous & Great Bharat 2.0',
//     description: 'International Conference on Vision 2047 - April 24-26, 2026 at IIT Roorkee',
//     type: 'website',
//     locale: 'en_IN',
//   },
//   icons: {
//   icon: [
//     {
//       url: '/iit-logo.png',
//       media: '(prefers-color-scheme: light)',
//     },
//     {
//       url: '/iit-logo.png',
//       media: '(prefers-color-scheme: dark)',
//     },
//   ],
//   apple: '/iit-apple-icon.png',
// },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className="font-sans antialiased">
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }


import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vision2047.iitr.ac.in"),

  title: {
    default: "Vision 2047 | International Conference IIT Roorkee",
    template: "%s | Vision 2047 Conference",
  },

  description:
    "Join Vision 2047 International Conference at IIT Roorkee (April 24–26, 2026). Explore AI, governance, sustainability & innovation shaping Bharat’s future.",

  keywords: [
    "Vision 2047",
    "IIT Roorkee Conference",
    "International Conference India",
    "AI Conference 2026",
    "Bharat 2047",
  ],

  authors: [{ name: "Vision 2047 Team" }],
  creator: "Vision 2047 Team",

  openGraph: {
    title: "Vision 2047: Prosperous & Great Bharat 2.0",
    description:
      "International Conference at IIT Roorkee (April 24–26, 2026)",
    url: "https://vision2047.iitr.ac.in",
    siteName: "Vision 2047",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision 2047 Conference",
    description:
      "Join top minds at IIT Roorkee for Vision 2047 Conference",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://vision2047.iitr.ac.in",
  },

  icons: {
    icon: "/iit-logo.png",
    apple: "/iit-apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}