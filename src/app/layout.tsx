import type { Metadata } from 'next'
import { Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PET-SIMC - Website',
  description: "PETSIMC's Website to get to know projects, members, about and more..."
}

export const viewport: Viewport = { 
  initialScale: 0
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
