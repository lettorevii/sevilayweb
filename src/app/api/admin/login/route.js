import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_USERS = [
  {
    username: 'admin',
    password: 'admin123'
  }
]

export async function POST(request) {
  console.log('\n' + '='.repeat(60))
  console.log('🔐 LOGIN API ÇAĞRıLDı')
  
  try {
    const { username, password } = await request.json()
    console.log('Kullanıcı adı:', username)
    console.log('Şifre uzunluğu:', password.length)
    
    const user = ADMIN_USERS.find(u => u.username === username)
    
    if (!user) {
      console.log('❌ Kullanıcı bulunamadı')
      return NextResponse.json({ 
        error: 'Kullanıcı adı veya şifre hatalı' 
      }, { status: 401 })
    }

    const isPasswordValid = password === 'admin123'
    console.log('Şifre doğru mu?', isPasswordValid)
    
    if (!isPasswordValid) {
      console.log('❌ Şifre hatalı')
      return NextResponse.json({ 
        error: 'Kullanıcı adı veya şifre hatalı' 
      }, { status: 401 })
    }

    // Token oluştur
    const token = Buffer.from(
      JSON.stringify({
        username,
        timestamp: Date.now()
      })
    ).toString('base64')
    
    console.log('✅ Token oluşturuldu:', token.substring(0, 20) + '...')

    // Cookie'ye kaydet
    const cookieStore = cookies()
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    })
    
    console.log('✅ Cookie ayarlandı')
    console.log('='.repeat(60) + '\n')

    return NextResponse.json({ 
      success: true,
      message: 'Giriş başarılı'
    })
  } catch (error) {
    console.error('❌ Login hatası:', error)
    console.log('='.repeat(60) + '\n')
    return NextResponse.json({ 
      error: 'Giriş işlemi başarısız' 
    }, { status: 500 })
  }
}
