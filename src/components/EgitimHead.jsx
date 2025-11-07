import React from 'react';

const DailyPostsSection = () => {
  return (
    <section className="relative w-full min-h-64 flex items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-12 md:px-24">
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

      <div className="max-w-9xl mx-auto text-center w-full">
        {/* Üst Görsel - Kalem Çizimi */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <img 
            src="/egitimmhead.png"
            alt="Pen Illustration"
            className="w-96 h-auto"
          />
        </div>

        {/* Başlık - Poppins Font, #540814 Renk */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold text-[#540814] tracking-wide">
          Eğitim
        </h1>
      </div>
    </section>
  );
};

export default DailyPostsSection;
