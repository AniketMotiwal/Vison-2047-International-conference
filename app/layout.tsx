


// import type { Metadata } from 'next'
// import { Geist, Geist_Mono, Inter, Poppins } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const geist = Geist({ subsets: ["latin"] });
// const geistMono = Geist_Mono({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://vision2047.iitr.ac.in"),

//   title: {
//     default: "Vision 2047 | International Conference IIT Roorkee",
//     template: "%s | Vision 2047 Conference",
//   },

//   description:
//     "Join Vision 2047 International Conference at IIT Roorkee (April 24–26, 2026). Explore AI, governance, sustainability & innovation shaping Bharat’s future.",

//   keywords: [
//     "Vision 2047",
//     "IIT Roorkee Conference",
//     "International Conference India",
//     "AI Conference 2026",
//     "Bharat 2047",
//   ],

//   authors: [{ name: "Vision 2047 Team" }],
//   creator: "Vision 2047 Team",

//   openGraph: {
//     title: "Vision 2047: Prosperous & Great Bharat 2.0",
//     description:
//       "International Conference at IIT Roorkee (April 24–26, 2026)",
//     url: "https://vision2047.iitr.ac.in",
//     siteName: "Vision 2047",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Vision 2047 Conference",
//     description:
//       "Join top minds at IIT Roorkee for Vision 2047 Conference",
//     images: ["/og-image.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   alternates: {
//     canonical: "https://vision2047.iitr.ac.in",
//   },

//   icons: {
//     icon: "/iit-logo.png",
//     apple: "/iit-apple-icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geist.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
    "Technology Conference",
  ],

  authors: [{ name: "Vision 2047 Team" }],
  creator: "Vision 2047 Team",

  openGraph: {
    title: "Vision 2047 | IIT Roorkee International Conference",
    description:
      "Join global experts at Vision 2047 Conference (April 24–26, 2026)",
    url: "https://vision2047.iitr.ac.in",
    siteName: "Vision 2047",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision 2047 Conference",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision 2047 Conference",
    description:
      "International Conference at IIT Roorkee shaping Bharat 2047 vision",
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Analytics (Vercel) */}
        <Analytics />
      </body>
    </html>
  );
}