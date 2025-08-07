import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hero Fitness AI - AI-Powered Workout Builder",
  description: "Build personalized workouts with AI. Your intelligent fitness companion for achieving your health goals.",
  keywords: "fitness, AI, workout, exercise, health, training, personal trainer",
  authors: [{ name: "Hero Fitness" }],
  openGraph: {
    title: "Hero Fitness AI - AI-Powered Workout Builder",
    description: "Build personalized workouts with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
