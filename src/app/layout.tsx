import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Sanatana Insights - Eternal Wisdom for Modern Minds',
  description: 'Explore the profound depths of Indian philosophy, Sanātana Dharma, and spiritual heritage. Discover timeless teachings, scriptures, and the wisdom of sages.',
  keywords: ['Sanatana Dharma', 'Indian Philosophy', 'Hinduism', 'Vedanta', 'Yoga', 'Spirituality', 'Meditation', 'Vedas', 'Upanishads', 'Bhagavad Gita'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
