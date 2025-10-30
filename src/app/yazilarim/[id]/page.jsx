'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Eye, ExternalLink } from 'lucide-react'

export default function BlogDetail() {
  const params = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [blogId, setBlogId] = useState(null)

  // Params'i oku
  useEffect(() => {
    if (params?.id) {
      console.log('📍 Params alındı:', params.id)
      setBlogId(params.id)
    }
  }, [params])

  // Blog'u yükle
  useEffect(() => {
    if (blogId) {
      fetchBlog()
    }
  }, [blogId])

  const fetchBlog = async () => {
    try {
      console.log('📖 Blog yükleniyor, ID:', blogId)
      
      const url = `/api/admin/blog/${blogId}`
      console.log('API URL:', url)
      
      const response = await fetch(url)
      console.log('Response status:', response.status)
      
      const data = await response.json()
      console.log('Response data:', data)
      
      if (response.ok && data.success) {
        console.log('✅ Blog yüklendi:', data.post.title)
        setBlog(data.post)
      } else {
        console.log('❌ Blog bulunamadı:', data.error)
        setError('Blog bulunamadı: ' + (data.error || 'Bilinmeyen hata'))
      }
    } catch (error) {
      console.error('❌ Blog yükleme hatası:', error)
      setError('Blog yükleme hatası: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  if (!blogId) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="text-xl text-gray-600">Sayfa hazırlanıyor...</div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="text-xl text-gray-600">Blog yükleniyor...</div>
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog bulunamadı</h2>
          <p className="text-gray-600 mb-6">{error || 'Aradığınız blog bulunamadı'}</p>
          <Link 
            href="/yazilarim"
            className="text-[#8b3a3a] hover:text-[#5a1a1a] font-semibold"
          >
            Yazılarıma Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/yazilarim"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Yazılarıma Dön
        </Link>

        {/* Blog Content */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Blog Image */}
          {blog.image && (
            <div className="w-full h-96 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Blog Header */}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5a1a1a] mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={18} />
                <span>{blog.views} görüntüleme</span>
              </div>
              {blog.link && (
                <a 
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8b3a3a] hover:text-[#5a1a1a] font-semibold"
                >
                  <ExternalLink size={18} />
                  Orijinal Yazı
                </a>
              )}
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-justify">
                {blog.description}
              </p>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diğer Yazılarım</h2>
          <Link
            href="/yazilarim"
            className="inline-flex items-center gap-2 text-[#8b3a3a] hover:text-[#5a1a1a] font-semibold text-lg transition-colors"
          >
            Tüm yazıları görüntüle
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
