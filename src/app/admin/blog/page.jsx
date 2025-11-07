'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../context/AuthContext'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, Image as ImageIcon, LogOut } from 'lucide-react'

export default function BlogList() {
  const router = useRouter()
  const { isAdmin, logout, mounted } = useAuth()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(null)

  useEffect(() => {
    if (mounted && !isAdmin) {
      router.push('/admin/login')
      return
    }
    
    if (mounted && isAdmin) {
      fetchPosts()
    }
  }, [mounted, isAdmin, router])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      const data = await response.json()
      if (data.success) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error('Blog listesi yüklenemedi:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
      return
    }

    setDeleting(id)

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setPosts(posts.filter(post => post.id !== id))
        alert('Blog yazısı başarıyla silindi!')
      } else {
        throw new Error(data.error || 'Silme işlemi başarısız')
      }
    } catch (error) {
      console.error('Silme hatası:', error)
      alert('Blog yazısı silinemedi: ' + error.message)
    } finally {
      setDeleting(null)
    }
  }

  const handleLogout = () => {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      logout()
      router.push('/admin/login')
    }
  }

  if (!mounted || loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Yükleniyor...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "'Gotham', sans-serif", fontWeight: 700 }}>
              Blog Yazıları
            </h1>
            <p className="text-gray-600 mt-2">{posts.length} yazı bulunuyor</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2 bg-[#540814] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Gotham', sans-serif", fontWeight: 600 }}
            >
              <Plus size={20} />
              Yeni Yazı
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Gotham', sans-serif", fontWeight: 600 }}
            >
              <LogOut size={20} />
              Çıkış
            </button>
          </div>
        </div>

        {/* Posts Table */}
        {posts.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Görsel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Başlık</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Durum</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tarih</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Görüntüleme</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <ImageIcon size={24} className="text-gray-400" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 max-w-xs truncate">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.status === 'published' ? 'Yayında' : 'Taslak'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{post.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Eye size={16} />
                        <span>{post.views}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          disabled={deleting === post.id}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        >
                          {deleting === post.id ? (
                            <div className="w-[18px] h-[18px] border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Trash2 size={18} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ImageIcon size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Henüz blog yazısı eklenmemiş
            </h3>
            <p className="text-gray-600 mb-6">
              İlk blog yazınızı ekleyerek başlayın
            </p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 bg-[#540814] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: "'Gotham', sans-serif", fontWeight: 600 }}
            >
              <Plus size={20} />
              Yeni Yazı Ekle
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
