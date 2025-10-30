'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const ReadingGroup = ({ id, image, title, description, link }) => {
  // Açıklamayı 3 satırla sınırla
  const truncatedDescription = description
    .split('\n')
    .slice(0, 3)
    .join('\n') + (description.split('\n').length > 3 ? '...' : '')

  const content = (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-10 mb-8 max-w-7xl mx-auto transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
      {/* Image Container with Hover Effect */}
      <div className="flex-1 pr-10 overflow-hidden rounded-lg">
        <img 
          src={image || '/placeholder.jpg'} 
          alt={title}
          className="w-full h-auto rounded-lg object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      {/* Content Container */}
      <div className="flex-1 pl-10">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-3xl font-bold text-[#5a1a1a] leading-tight transition-colors hover:text-[#8b3a3a] flex-1">
            {title}
          </h2>
          {link && (
            <ExternalLink size={24} className="text-[#8b3a3a] ml-4 flex-shrink-0" />
          )}
        </div>
        <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
          {truncatedDescription}
        </p>
        <div className="inline-flex items-center text-[#8b3a3a] text-lg font-semibold hover:text-[#5a1a1a] transition-all duration-300 group">
          {link ? 'Devamını Oku' : 'Daha Fazla'}
          <span className="ml-2 bg-[#8b3a3a] text-white rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-[#5a1a1a] group-hover:ml-4 transition-all duration-300">
            →
          </span>
        </div>
      </div>
    </div>
  )

  // Eğer link varsa yeni sekmede aç, yoksa internal link kullan
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link href={`/yazilarim/${id}`}>
      {content}
    </Link>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-12 mb-8">
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-12 h-12 rounded-full text-lg font-semibold transition-all duration-300 ${
              currentPage === pageNumber
                ? 'bg-[#8b3a3a] text-white scale-110 shadow-lg'
                : 'bg-white text-[#8b3a3a] hover:bg-[#8b3a3a] hover:text-white hover:scale-105 shadow-md'
            }`}
          >
            {pageNumber}
          </button>
        )
      })}
    </div>
  )
}

const ReadingGroups = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 3

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      const data = await response.json()
      
      if (data.success) {
        // Sadece yayınlanmış blogları göster
        const publishedBlogs = data.posts.filter(post => post.status === 'published')
        setGroups(publishedBlogs)
      }
      setLoading(false)
    } catch (error) {
      console.error('Veri çekme hatası:', error)
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(groups.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentGroups = groups.slice(startIndex, startIndex + itemsPerPage)

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 flex items-center justify-center">
        <div className="text-xl text-gray-600">Yükleniyor...</div>
      </div>
    )
  }

  if (groups.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12">
          <div>
            <img src="/yazilarim.png" alt="Yazılarım" className="mb-4" />
          </div>
          <h1 className="text-5xl font-bold text-[#5a1a1a] mb-4">Yazılarım</h1>
          <p className="text-gray-600 text-lg">Bloglar ve düşüncelerim</p>
        </div>

        {/* Empty State */}
        <div className="flex items-center justify-center">
          <div className="text-center bg-white rounded-lg shadow-lg p-12 max-w-md">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Henüz blog yazısı yok</h2>
            <p className="text-gray-600">Yakında yeni yazılar eklenecek. Takipte kalın!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div>
          <img src="/yazilarim.png" alt="Yazılarım" className="mb-4" />
        </div>
        <h1 className="text-5xl font-bold text-[#5a1a1a] mb-4">Yazılarım</h1>
        <p className="text-gray-600 text-lg">
          Blog yazılarım ve düşüncelerim • {groups.length} yazı
        </p>
      </div>
      
      {/* Blog Cards */}
      <div className="transition-opacity duration-500">
        {currentGroups.map((group) => (
          <ReadingGroup 
            key={group.id}
            id={group.id}
            image={group.image}
            title={group.title}
            description={group.description}
            link={group.link}
          />
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Sayfa {currentPage} / {totalPages}
        </p>
      </div>
    </div>
  )
}

export default ReadingGroups
