import React from 'react';

const PodcastSection = () => {
  return (
    <>
      {/* Quote Bölümü */}
      <div className="w-full flex justify-center items-center text-center py-8">
        <p className="text-2xl font-poppins italic text-[#540814] max-w-3xl">
          "Evrendeki en büyük gösteri, sen zihnini keşfettiğin an başlar." <span className="font-bold not-italic">S. Freud</span>
        </p>
      </div>

      {/* Podcast Bölümü */}
      <section className="bg-white px-24 py-20">
        {/* Başlık */}
        <h2 className="text-5xl font-poppins font-bold text-[#540814] text-center mb-12">
          Podcast
        </h2>
        
        {/* Podcast Görselleri - Yan Yana */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
