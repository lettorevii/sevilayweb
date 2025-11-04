'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import YazilarimHead from '@/components/YazilarimHead'

const ReadingGroup = ({ id, image, title, description, link }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const truncatedDescription = description
    .split('\n')
    .slice(0, 3)
    .join('\n') + (description.split('\n').length > 3 ? '...' : '')

  const content = (
    <div style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'stretch' : 'center',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: isMobile ? '1.5rem' : '2.5rem',
      marginBottom: '2rem',
      maxWidth: '1140px',
      margin: isMobile ? '0 auto 1.5rem' : '0 auto 2rem',
      transition: 'all 300ms ease-in-out',
    }}
    className="hover:shadow-2xl hover:scale-[1.02]"
    >
      {/* Image Container */}
      <div style={{
        flex: isMobile ? 'none' : 1,
        width: isMobile ? '100%' : 'auto',
        paddingRight: isMobile ? 0 : '2.5rem',
        paddingBottom: isMobile ? '1.5rem' : 0,
        overflow: 'hidden',
        borderRadius: '0.5rem'
      }}>
        <img 
          src={image || '/placeholder.jpg'} 
          alt={title}
          style={{
            width: '100%',
            height: isMobile ? '250px' : 'auto',
            borderRadius: '0.5rem',
            objectFit: 'cover',
            transition: 'transform 500ms ease-in-out'
          }}
          className="hover:scale-110"
        />
      </div>
      
      {/* Content Container */}
      <div style={{
        flex: isMobile ? 'none' : 1,
        paddingLeft: isMobile ? 0 : '2.5rem',
        width: isMobile ? '100%' : 'auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.5rem' : 0
        }}>
          <h2 style={{
            fontSize: isMobile ? '18px' : '32px',
            fontWeight: 'bold',
            color: '#5a1a1a',
            lineHeight: '1.2',
            flex: 1,
            transition: 'color 300ms ease-in-out'
          }}
          className="hover:text-[#8b3a3a]"
          >
            {title}
          </h2>
          {link && (
            <ExternalLink size={isMobile ? 20 : 24} style={{ color: '#8b3a3a', flexShrink: 0 }} />
          )}
        </div>
        <p style={{
          color: '#374151',
          fontSize: isMobile ? '14px' : '16px',
          lineHeight: '1.5',
          marginBottom: '1.5rem',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {truncatedDescription}
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          color: '#8b3a3a',
          fontSize: isMobile ? '14px' : '18px',
          fontWeight: '600',
          transition: 'all 300ms ease-in-out',
          cursor: 'pointer'
        }}
        className="group hover:text-[#5a1a1a]"
        >
          {link ? 'Devamını Oku' : 'Daha Fazla'}
          <span style={{
            marginLeft: '0.5rem',
            backgroundColor: '#8b3a3a',
            color: 'white',
            borderRadius: '9999px',
            width: isMobile ? '1.75rem' : '2rem',
            height: isMobile ? '1.75rem' : '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 300ms ease-in-out',
            fontSize: isMobile ? '14px' : '16px'
          }}
          className="group-hover:bg-[#5a1a1a] group-hover:ml-4"
          >
            →
          </span>
        </div>
      </div>
    </div>
  )

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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '0.75rem',
      marginTop: '3rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    }}>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            style={{
              width: isMobile ? '36px' : '48px',
              height: isMobile ? '36px' : '48px',
              borderRadius: '9999px',
              fontSize: isMobile ? '12px' : '18px',
              fontWeight: '600',
              transition: 'all 300ms ease-in-out',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: currentPage === pageNumber ? '#8b3a3a' : 'white',
              color: currentPage === pageNumber ? 'white' : '#8b3a3a',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              transform: currentPage === pageNumber ? 'scale(1.1)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (currentPage !== pageNumber) {
                e.target.style.backgroundColor = '#8b3a3a'
                e.target.style.color = 'white'
                e.target.style.transform = 'scale(1.05)'
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== pageNumber) {
                e.target.style.backgroundColor = 'white'
                e.target.style.color = '#8b3a3a'
                e.target.style.transform = 'scale(1)'
              }
            }}
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
  const [isMobile, setIsMobile] = useState(false)
  const itemsPerPage = 3

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    try {
      const response = await fetch('/api/admin/blog')
      const data = await response.json()
      
      if (data.success) {
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
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        padding: isMobile ? '1.5rem' : '3rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          fontSize: isMobile ? '18px' : '20px',
          color: '#4b5563'
        }}>Yükleniyor...</div>
      </div>
    )
  }

  if (groups.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        padding: isMobile ? '1.5rem' : '3rem 1.5rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '1.5rem' : '3rem',
            maxWidth: '28rem'
          }}>
            <div style={{
              fontSize: isMobile ? '48px' : '60px',
              marginBottom: '1rem'
            }}>📝</div>
            <h2 style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '1rem'
            }}>Henüz blog yazısı yok</h2>
            <p style={{
              color: '#4b5563',
              fontSize: isMobile ? '14px' : '16px'
            }}>Yakında yeni yazılar eklenecek. Takipte kalın!</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <YazilarimHead />
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        padding: isMobile ? '1.5rem' : '3rem 1.5rem'
      }}>
        {/* Header */}
        <div style={{
          maxWidth: '1140px',
          margin: '0 auto 3rem'
        }}>
        </div>
        
        {/* Blog Cards */}
        <div style={{ transitionDuration: '500ms', transitionProperty: 'opacity' }}>
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
        <div style={{
          maxWidth: '1140px',
          margin: '0 auto 3rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#a3a9b5',
            fontSize: isMobile ? '12px' : '14px'
          }}>
            Sayfa {currentPage} / {totalPages}
          </p>
        </div>
      </div>
    </>
  )
}

export default ReadingGroups
