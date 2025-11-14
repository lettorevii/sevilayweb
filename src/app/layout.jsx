import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import { AuthProvider } from './context/AuthContext'

export const metadata = {
  title: 'Dr Sevilay Abudaram',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <Header />
          <NavBar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
