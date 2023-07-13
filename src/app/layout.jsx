import Header from '@/components/header/Header'
import './globals.css'
import { Outfit } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Reco P. Lacion',
  description: 'Reco P. Lacion Website Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
