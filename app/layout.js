import { Cormorant_Garamond, Crimson_Pro } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const crimson = Crimson_Pro({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson',
})

export const metadata = {
  title: 'Gita Prerna - भगवद् गीता की प्रेरणा',
  description: 'Experience the timeless wisdom of bhagwad Gita in Hindi and English',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${crimson.variable}`}>
        {children}
      </body>
    </html>
  )
}
