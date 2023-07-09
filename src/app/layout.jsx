import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sikka 2X',
  description: "At Sikka2x, we've turned cricket trivia into an exhilarating game of speed and skill. Sikka2x is the ultimate destination for cricket enthusiasts who believe in their cricketing knowledge. But, there's a twist - at Sikka2x, you play with real money!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
