import type { Metadata, Viewport } from 'next'
import { monda, monoton, ps2p } from './fonts'
import './globals.css'
import { QueryProvider, ThemesProvider } from './provider'


export const metadata: Metadata = {
  title: 'PET-SIMC - Website',
  description: "PETSIMC's Website to get to know projects, members, about and more..."
}

export const viewport: Viewport = {
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <QueryProvider>
        <body className={`${monda.variable} ${ps2p.variable} ${monoton.variable}`}>
          <ThemesProvider>
            {children}
          </ThemesProvider>
        </body>
      </QueryProvider>
    </html>
  )
}
