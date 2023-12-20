import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PET-SIMC - Website',
  description: "PETSIMC's Website to get to know projects, members, about and more...",
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
