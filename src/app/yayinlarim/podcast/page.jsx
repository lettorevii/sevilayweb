import DailyPostsSection from '@/components/PodcastHead';
import React from 'react';
import Podcast from '@/components/Podcast';

const PodcastSection = () => {
  return (<>
          <div className="w-full  h-16 justify-center text-center mt-16">
            <div> <DailyPostsSection/> </div>
        <p className="text-2xl font-poppins italic text-[#540814]">
        </p>
      </div>
    <section className="bg-white px-24 py-20">
      {/* Başlık */}
      <h2 className="text-5xl font-poppins font-bold text-[#540814] text-center mb-12">
        
      </h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 gap-8">
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
          <div className="w-full ">
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
      {/* Podcast Görselleri */}
    </section>
    </>
  );
};

export default PodcastSection;
