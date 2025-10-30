import { NextResponse } from 'next/server'
import { writeFile, mkdir, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json')

async function readBlogsData() {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
    
    if (existsSync(dataFilePath)) {
      const data = await readFile(dataFilePath, 'utf-8')
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error('Veri okuma hatası:', error)
    return []
  }
}

async function writeBlogsData(blogs) {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
    await writeFile(dataFilePath, JSON.stringify(blogs, null, 2))
  } catch (error) {
    console.error('Veri yazma hatası:', error)
    throw error
  }
}

export async function POST(request) {
  console.log('\n🚀 POST /api/admin/blog - İstek alındı')
  
  try {
    const formData = await request.formData()
    
    const title = formData.get('title')
    const description = formData.get('description')
    const link = formData.get('link')
    const status = formData.get('status')
    const image = formData.get('image')
    
    console.log('📝 Form verileri:')
    console.log('  - Başlık:', title)
    console.log('  - Link:', link || 'Yok')
    console.log('  - Durum:', status)
    
    let imagePath = null

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const timestamp = Date.now()
      const originalName = image.name.replace(/\s/g, '-')
      const filename = `${timestamp}-${originalName}`
      
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog')
      
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true })
      }
      
      const filepath = path.join(uploadDir, filename)
      await writeFile(filepath, buffer)
      imagePath = `/uploads/blog/${filename}`
    }

    const newPost = {
      id: Date.now(),
      title,
      description,
      link: link || null,
      status,
      image: imagePath,
      views: 0,
      date: new Date().toLocaleDateString('tr-TR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })
    }
    
    const blogs = await readBlogsData()
    blogs.push(newPost)
    await writeBlogsData(blogs)
    
    console.log('✅ Blog başarıyla kaydedildi!\n')
    
    return NextResponse.json({ 
      success: true,
      message: 'Blog yazısı başarıyla kaydedildi',
      post: newPost
    })
  } catch (error) {
    console.error('❌ Blog kaydetme hatası:', error)
    return NextResponse.json({ 
      error: 'Blog yazısı kaydedilemedi',
      details: error.message 
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    const blogs = await readBlogsData()
    
    return NextResponse.json({ 
      success: true,
      posts: blogs
    })
  } catch (error) {
    console.error('❌ Blog listesi çekme hatası:', error)
    return NextResponse.json({ 
      error: 'Blog listesi alınamadı',
      details: error.message
    }, { status: 500 })
  }
}
