import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from 'next/font/google'
import "./globals.css";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "DevTrack AI",
  description: "Build your resume from your GitHub profile with AI assistance.",
  keywords: ["DevTrack AI", "Resume Builder", "GitHub Profile", "GitHub", "Resume", "AI Assistance"],
  openGraph: {
    title: "DevTrack AI",
    description: "Build your resume from your GitHub profile with AI assistance.",
    url: "https://devtrack-ai.vercel.app/",
    siteName: "DevTrack AI",
    images: [
      {
        url: "https://devtrack-ai.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevTrack AI",
    description: "Build your resume from your GitHub profile with AI assistance.",
    images: ["https://devtrack-ai.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
