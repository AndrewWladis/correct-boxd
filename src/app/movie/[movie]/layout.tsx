import '../../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Correct Letterboxd',
  description: 'A movie rating app but also with a corresponding correct rating from decorated film expert, Andrew Wladis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icon.png'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
