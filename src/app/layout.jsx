'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')
  
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {!isAdminPage && <Header />}
        {!isAdminPage && <NavBar />}
        {children}
        {!isAdminPage && <Footer />}
      </body>
    </html>
  )
}
