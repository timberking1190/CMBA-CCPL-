import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  variable: '--font-hanken',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Calgary Club Premier League (CCPL) | CMBA',
  description:
    'Calgary Club Premier is a premier tournament league where club teams play CMBA teams. Stop-time games. Certified refs. Built in our own city. Registration opens June 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'Calgary Club Premier League (CCPL)',
    description:
      'The first club tournament league in Alberta sanctioned by the province largest basketball association. Tips off October 2026.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0b0e',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
