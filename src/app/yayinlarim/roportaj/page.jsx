'use client';

import React from 'react';
import DailyPostsSection from '../../../components/GorselHead';
import PageFooter from '../../../components/PageFooter'


const VideosPage = () => {
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
    <div className="w-full">
      {/* Video */}
      <div className="relative w-full pb-[56.25%] mb-4 md:mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Başlık - Video Altında */}
      <h3 className="text-base md:text-xl font-poppins text-[#540814] leading-relaxed">
        {title}
      </h3>
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
      <div className="bg-white min-h-screen px-4 md:px-6 lg:px-24 py-12 md:py-20">
        <div className="max-w-[1140px] mx-auto">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
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

              <PageFooter/>

    </>
  );
};

export default VideosPage;
