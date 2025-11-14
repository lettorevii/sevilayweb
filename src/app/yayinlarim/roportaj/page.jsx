'use client';

import React from 'react';
import DailyPostsSection from '../../../components/GorselHead';
import PageFooter from '../../../components/PageFooter'


const VideosPage = () => {
  const videos = [
    {
      id: 1,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/aUTo5zaUQyc',
    },
    {
      id: 2,
      title: 'Dr. Sevilay Abudaram - Ekotürk / Life Style - Tanıtım',
      src: 'https://www.youtube.com/embed/h0xjDAqcEak',
    },
    {
      id: 3,
      title: 'İlişkilerde Yaşanan Sorunlar Nelerdir ? | Uzman Klinik Psikolog Sevilay Sitrava | 8de Sağlık',
      src: 'https://www.youtube.com/embed/RoHmooscQcQ',
    },
    {
      id: 4,
      title: 'Tam kapanmada psikolojik sağlığımız Uzman Klinik Psikoloğumuz Dr. Sevilay Sitrava',
      src: 'https://www.youtube.com/embed/Y2l7ZzyWg4Y',
    },
    {
      id: 5,
      title: 'Kaygı Duygusu Nedir?',
      src: 'https://www.youtube.com/embed/_fWcEAz6cY4',
    },
    {
      id: 6,
      title: 'İletişim Becerileri - SEVİLAY SİTRAVA - UZMAN KLİNİK PSİKOLOG - TV8int - ŞEHRİN NABZI',
      src: 'https://www.youtube.com/embed/1aoS0xj3Cdc',
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
