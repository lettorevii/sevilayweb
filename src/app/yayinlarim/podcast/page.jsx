import DailyPostsSection from '@/components/PodcastHead';
import React from 'react';
import Podcast from '@/components/Podcast';

const PodcastSection = () => {
  return (
    <>
      <div>
        <DailyPostsSection />
      </div>

      <div className="w-full justify-center text-center mt-8 md:mt-16">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-[#540814] text-center mb-8 md:mb-12">
          Podcast
        </h2>
      </div>

      <section className="bg-white px-4 md:px-6 lg:px-24 py-8 md:py-20">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-20 gap-4 md:gap-8">
          {/* İlk Podcast - Spotify Embed */}
          <div className="w-full">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/episode/6tnNYOzzumbnvoPljUWcni?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Podcast 1"
            />
          </div>
          
          {/* İkinci Podcast - Spotify Embed */}
          <div className="w-full">
            <iframe 
              data-testid="embed-iframe" 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/episode/2gC2TmlDFJd2zXEgroQM6N?utm_source=generator" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Spotify Podcast 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PodcastSection;
