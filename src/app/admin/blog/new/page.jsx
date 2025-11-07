'use client'

import { useState } from 'react'
import AdminLayout from '../../../../components/admin/AdminLayout'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Upload, X, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function NewBlog() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    status: 'draft',
    image: null
  })
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log('Seçilen dosya:', file.name, file.size, 'bytes')
      setFormData({ ...formData, image: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData({ ...formData, image: null })
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    console.log('Form gönderiliyor...')
    console.log('Başlık:', formData.title)
    console.log('Açıklama:', formData.description)
    console.log('Link:', formData.link)
    console.log('Durum:', formData.status)
    console.log('Görsel:', formData.image ? formData.image.name : 'Yok')
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('link', formData.link)
      formDataToSend.append('status', formData.status)
      if (formData.image) {
        formDataToSend.append('image', formData.image)
      }

      console.log('API isteği gönderiliyor...')
      
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        body: formDataToSend
      })
      
      console.log('Response status:', response.status)
      
      const data = await response.json()
      console.log('Response data:', data)
      
      if (!response.ok) {
        throw new Error(data.error || 'Bir hata oluştu')
      }
      
      alert('Blog yazısı başarıyla eklendi!')
      console.log('Yönlendirme yapılıyor...')
      router.push('/admin/blog')
      router.refresh()
    } catch (error) {
      console.error('Hata:', error)
      setError(error.message)
      alert('Blog yazısı eklenirken bir hata oluştu: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} />
            Geri Dön
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Yeni Blog Yazısı</h1>
          <p className="text-gray-600 mt-2">Yeni bir blog yazısı oluşturun</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Görsel
            </label>
            {imagePreview ? (
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
                <Upload size={48} className="text-gray-400 mb-3" />
                <span className="text-sm text-gray-600 mb-1">Görsel yüklemek için tıklayın</span>
                <span className="text-xs text-gray-500">PNG, JPG veya WEBP (Max. 5MB)</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Başlık
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#540814] focus:border-transparent"
              placeholder="Blog yazısı başlığı"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              İçerik
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#540814] focus:border-transparent resize-none"
              placeholder="Blog yazısı içeriği"
              required
            />
          </div>

          {/* Link */}
          <div className="mb-6">

            <div className="relative">
            </div>
          </div>

          {/* Status */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Durum
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#540814] focus:border-transparent"
            >
              <option value="draft">Taslak</option>
              <option value="published">Yayınla</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <Link
              href="/admin/blog"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              İptal
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#540814] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}
