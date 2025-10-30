import { NextResponse } from 'next/server'
import { writeFile, readFile, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'blogs.json')

async function readBlogsData() {
  try {
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
      const { mkdir } = await import('fs/promises')
      await mkdir(dataDir, { recursive: true })
    }
    await writeFile(dataFilePath, JSON.stringify(blogs, null, 2))
  } catch (error) {
    console.error('Veri yazma hatası:', error)
    throw error
  }
}

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    console.log('📖 GET /api/admin/blog/:id çağrıldı')
    console.log('ID:', id, 'Type:', typeof id)
    
    const blogs = await readBlogsData()
    console.log('Toplam blog sayısı:', blogs.length)
    console.log('Blog IDs:', blogs.map(b => b.id))
    
    const blog = blogs.find(blog => blog.id === id)
    console.log('Blog bulundu mu?', blog ? 'EVET' : 'HAYIR')
    
    if (!blog) {
      console.log('❌ Blog bulunamadı - ID:', id)
      return NextResponse.json({ 
        error: 'Blog bulunamadı',
        searchedId: id
      }, { status: 404 })
    }
    
    // Görüntülenme sayısını artır
    blog.views = (blog.views || 0) + 1
    await writeBlogsData(blogs)
    
    console.log('✅ Blog başarıyla döndürüldü:', blog.title)
    
    return NextResponse.json({ 
      success: true,
      post: blog
    })
  } catch (error) {
    console.error('❌ Blog detay çekme hatası:', error)
    return NextResponse.json({ 
      error: 'Blog detayı alınamadı',
      details: error.message
    }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)
    console.log('🗑️ DELETE /api/admin/blog/:id çağrıldı - ID:', id)
    
    const blogs = await readBlogsData()
    const blogToDelete = blogs.find(blog => blog.id === id)
    
    if (!blogToDelete) {
      return NextResponse.json({ 
        error: 'Blog bulunamadı'
      }, { status: 404 })
    }
    
    // Görseli sil
    if (blogToDelete.image) {
      const imagePath = path.join(process.cwd(), 'public', blogToDelete.image)
      if (existsSync(imagePath)) {
        await unlink(imagePath)
      }
    }
    
    const updatedBlogs = blogs.filter(blog => blog.id !== id)
    await writeBlogsData(updatedBlogs)
    
    console.log('✅ Blog silindi:', blogToDelete.title)
    
    return NextResponse.json({ 
      success: true,
      message: 'Blog yazısı silindi'
    })
  } catch (error) {
    console.error('❌ Blog silme hatası:', error)
    return NextResponse.json({ 
      error: 'Blog yazısı silinemedi'
    }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const formData = await request.formData()
    
    const title = formData.get('title')
    const description = formData.get('description')
    const link = formData.get('link')
    const status = formData.get('status')
    const image = formData.get('image')
    
    const blogs = await readBlogsData()
    const blogIndex = blogs.findIndex(blog => blog.id === id)
    
    if (blogIndex === -1) {
      return NextResponse.json({ 
        error: 'Blog bulunamadı'
      }, { status: 404 })
    }
    
    let imagePath = blogs[blogIndex].image

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const timestamp = Date.now()
      const originalName = image.name.replace(/\s/g, '-')
      const filename = `${timestamp}-${originalName}`
      
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog')
      const filepath = path.join(uploadDir, filename)
      
      await writeFile(filepath, buffer)
      
      if (imagePath) {
        const oldImagePath = path.join(process.cwd(), 'public', imagePath)
        if (existsSync(oldImagePath)) {
          await unlink(oldImagePath)
        }
      }
      
      imagePath = `/uploads/blog/${filename}`
    }

    blogs[blogIndex] = {
      ...blogs[blogIndex],
      title,
      description,
      link: link || null,
      status,
      image: imagePath
    }
    
    await writeBlogsData(blogs)
    
    return NextResponse.json({ 
      success: true,
      message: 'Blog yazısı güncellendi',
      post: blogs[blogIndex]
    })
  } catch (error) {
    console.error('Blog güncelleme hatası:', error)
    return NextResponse.json({ 
      error: 'Blog yazısı güncellenemedi'
    }, { status: 500 })
  }
}
