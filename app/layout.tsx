import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fabric Treasury',
  description: 'The liquidity layer for AI agents and global treasury',
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
