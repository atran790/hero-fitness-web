import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usehero.fit'),
  title: "Hero Fitness AI - Gentle Progress, Personalized Guidance",
  description: "Fitness that celebrates you. No extremes, no judgment. Just gentle, personalized guidance that respects your body and your life. Start your wellness journey today.",
  keywords: "gentle fitness, AI workout, mindful exercise, wellness journey, personalized fitness, sustainable health, recovery focused, body positive fitness",
  authors: [{ name: "Hero Fitness AI" }],
  openGraph: {
    title: "Hero Fitness AI - Fitness that celebrates you",
    description: "No extremes. No judgment. Just gentle, personalized guidance that respects your body and your life.",
    type: "website",
    url: "https://usehero.fit",
    siteName: "Hero Fitness AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hero Fitness AI - Your gentle fitness companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Fitness AI - Fitness that celebrates you",
    description: "No extremes. No judgment. Just gentle, personalized guidance.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FDF5EB',
  colorScheme: 'light only',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root { 
              color-scheme: light only !important;
            }
            @media (prefers-color-scheme: dark) {
              :root { 
                color-scheme: light !important;
              }
              html, body {
                background-color: #FDF5EB !important;
                color: #111827 !important;
              }
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased bg-hero-buttermilk`}
      >
        {children}
      </body>
    </html>
  );
}
