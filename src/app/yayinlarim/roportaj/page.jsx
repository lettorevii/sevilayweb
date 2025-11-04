'use client';

import React, { useState, useEffect } from 'react';
import DailyPostsSection from '@/components/GorselHead';

const VideosPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videos = [
    {
      id: 1,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/RoHmooscQcQ',
    },
    {
      id: 2,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/4vDtqLMNGzI',
    },
    {
      id: 3,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/RoHmooscQcQ',
    },
    {
      id: 4,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/4vDtqLMNGzI',
    },
    {
      id: 5,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/RoHmooscQcQ',
    },
    {
      id: 6,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/4vDtqLMNGzI',
    },
    {
      id: 7,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/RoHmooscQcQ',
    },
    {
      id: 8,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/4vDtqLMNGzI',
    },
  ];

  const VideoCard = ({ title, src }) => (
    <div style={{ width: '100%' }}>
      {/* Video */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        marginBottom: isMobile ? '1rem' : '1.5rem'
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem'
          }}
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Başlık - Video Altında */}
      <h2 style={{
        fontSize: isMobile ? '16px' : '24px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        color: '#540814',
        lineHeight: '1.3'
      }}>
        {title}
      </h2>
    </div>
  );

  return (
    <>
      {/* Header Görseli */}
      <div>
        <DailyPostsSection
          title="Röportajlar"
          imageUrl="/roportajlar-header.jpg"
        />
      </div>

      {/* Videos Section */}
      <div style={{
        backgroundColor: 'white',
        minHeight: '100vh',
        padding: isMobile ? '2rem 1rem' : '5rem 1rem'
      }}>
        <div style={{
          maxWidth: '1140px',
          margin: '0 auto'
        }}>
          {/* Video Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '2rem' : '3rem'
          }}>
            {videos.map((video) => (
              <VideoCard 
                key={video.id} 
                title={video.title} 
                src={video.src}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Görseli */}
      <div style={{
        marginTop: isMobile ? '2rem' : '3rem',
        width: '100%',
        height: 'auto'
      }}>
        <img src="/footer.png" alt="" style={{ width: '100%', height: 'auto' }} />
      </div>
    </>
  );
};

export default VideosPage;
