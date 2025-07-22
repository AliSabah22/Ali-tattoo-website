import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { CursorProvider } from '@/components/CursorProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ali Tattoo - Luxury Tattoo Artist Portfolio',
  description: 'Premium tattoo artistry by Ali. Custom designs, exceptional craftsmanship, and unforgettable experiences. Book your consultation today.',
  keywords: 'tattoo artist, custom tattoos, luxury tattoos, premium ink, tattoo portfolio, Ali tattoo',
  authors: [{ name: 'Ali Tattoo' }],
  creator: 'Ali Tattoo',
  publisher: 'Ali Tattoo Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ali-tattoo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ali Tattoo - Luxury Tattoo Artist Portfolio',
    description: 'Premium tattoo artistry by Ali. Custom designs, exceptional craftsmanship, and unforgettable experiences.',
    url: 'https://ali-tattoo.com',
    siteName: 'Ali Tattoo',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Tattoo Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Tattoo - Luxury Tattoo Artist Portfolio',
    description: 'Premium tattoo artistry by Ali. Custom designs, exceptional craftsmanship, and unforgettable experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f1419" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
} 