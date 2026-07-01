import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fabric — Treasury infrastructure for AI agents',
  description: 'test',
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
