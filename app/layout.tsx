import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CursorProvider } from '@/components/CursorProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Tattoo - Luxury Tattoo Artist Portfolio',
  description: 'High-end tattoo artist portfolio showcasing unique designs and exceptional craftsmanship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorProvider>
          {children}
        </CursorProvider>
      </body>
    </html>
  )
} 