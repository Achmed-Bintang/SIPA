import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIPA - Sistem Informasi Portal Akademik',
  description: 'Platform manajemen sekolah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
