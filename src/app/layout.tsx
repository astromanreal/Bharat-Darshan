
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from '@/components/providers'; // For potential theme provider, etc.

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanatanainsights.com'; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sanatana Insights - Eternal Wisdom for Modern Minds',
    template: '%s - Sanatana Insights',
  },
  description: 'Explore the profound depths of Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover timeless teachings, scriptures, and the wisdom of sages.',
  keywords: ['Sanatana Dharma', 'Indian Philosophy', 'Hinduism', 'Vedanta', 'Yoga', 'Spirituality', 'Meditation', 'Vedas', 'Upanishads', 'Bhagavad Gita', "Bharat", "Indic Knowledge", "Spiritual Wisdom", "Eastern Philosophy", "Ancient India", "Hindu Philosophy", "Cultural Arts", "Vedic Science", "AI Philosopher", "Hindu rituals", "Natyashastra", "sacred geometry", "Indian temple architecture"],
  authors: [{ name: 'Sanatana Insights Team' }],
  creator: 'Sanatana Insights',
  publisher: 'Sanatana Insights',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Sanatana Insights - Eternal Wisdom for Modern Minds',
    description: 'Explore Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover texts, concepts, historical timelines, cultural arts, and AI-powered philosophical insights.',
    siteName: 'Sanatana Insights',
    images: [
      {
        url: `${SITE_URL}/og-default.png`, // Replace with your actual default OG image
        width: 1200,
        height: 630,
        alt: 'Sanatana Insights - Eternal Wisdom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanatana Insights - Eternal Wisdom for Modern Minds',
    description: 'Explore Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover texts, concepts, historical timelines, cultural arts, and AI-powered philosophical insights.',
    images: [`${SITE_URL}/twitter-default.png`], // Replace with your actual default Twitter image
    // creator: '@YourTwitterHandle', // Optional: Add your Twitter handle
  },
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon
    // apple: '/apple-touch-icon.png', // Example
  },
  manifest: `${SITE_URL}/site.webmanifest`, // Example for PWA
};

export const viewport: Viewport = {
  themeColor: '#FF9933', // Primary color
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
        {/* Add Noto Sans Devanagari for Hindi font - optional, browsers usually handle it */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}>
        <Providers>
          <SiteHeader />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <SiteFooter />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
