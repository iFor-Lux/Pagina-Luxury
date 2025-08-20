import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark">
      <body>{children}</body>
    </html>
  )
}
