import React from 'react';

const DailyPostsSection = () => {
  return (
    <section className="relative w-full h-64 flex items-center justify-center py-10 px-24">
      {/* Arka Plan Görseli */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(/ciftterapihead.png)',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Üst Görsel - Kalem Çizimi */}
        <div className="mb-6">
          <img 
            src="/supervizyon.png"
            alt="Pen Illustration"
            className="w-48 h-auto mx-auto"
          />
        </div>

        {/* Başlık - Poppins Font, #540814 Renk */}
        <h1 className="text-3xl font-poppins font-bold text-[#540814] tracking-wide">
          Süper Vizyon
        </h1>
      </div>
    </section>
  );
};

export default DailyPostsSection;
