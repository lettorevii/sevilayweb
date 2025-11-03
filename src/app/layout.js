'use client'

import { AuthProvider } from './context/AuthContext'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
