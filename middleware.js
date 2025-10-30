import { NextResponse } from 'next/server'

console.log('✅ middleware.js DOSYASI BAŞARILI ŞEKILDE YÜKLENDI')

export function middleware(request) {
  const { pathname } = request.nextUrl

  console.log('🔥 MIDDLEWARE ÇALIŞTIRILDI:', pathname)

  // Login sayfasına her zaman erişim izni
  if (pathname === '/admin/login') {
    console.log('✅ Login sayfası - Geç')
    return NextResponse.next()
  }

  // Admin sayfaları koruması
  if (pathname.startsWith('/admin')) {
    console.log('🔐 Admin sayfası - Token kontrol...')
    
    const token = request.cookies.get('admin_token')
    console.log('Token var mı?', token ? '✅ EVET' : '❌ HAYIR')

    if (!token) {
      console.log('⛔ LOGIN SAYFASINA YÖNLENDİR')
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    console.log('✅ Token OK - DEVAM ET')
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
