import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-[#EEE5E0] px-4 md:px-12 lg:px-24 flex items-center justify-between overflow-hidden">
      <div className="w-full max-w-[1140px] mx-auto flex items-center justify-between">
        {/* Sol Taraf - Metin ve Buton */}
        <div className="flex flex-col gap-8 md:ml-6 lg:ml-24 max-w-xl z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins text-[#540814] leading-tight">
            Sağlıklı iletişim,<br />
            <span className='font-bold'>güçlü bağlar </span>
          </h1>
          
          <button className="bg-[#540814] text-white font-poppins px-8 py-4 rounded hover:bg-[#3a0509] transition-colors w-fit text-lg font-medium">
            Randevu Al
          </button>
          
          {/* Kelebek Görseli - Desktop Only */}
          <div className="relative px-56 mt-4 hidden md:block">
            <img 
              src="/kelebek.png" 
              alt="Butterfly decoration" 
              className="w-[900px]"
            />
          </div>
        </div>
        
        {/* Sağ Taraf - İnsan Fotoğrafı */}
        <div className="relative w-[400px] mr-52 z-10 hidden md:block flex-shrink-0">
          <img 
            src="/insan.png" 
            alt="Dr. Sevilay Abudaram" 
            className="w-[600px] h-auto object-cover rounded-lg"
          />
        </div>

        {/* Mobil Only - Fotoğraf */}
        <div className="relative w-full md:hidden z-10 order-first">
          <img 
            src="/insan.png" 
            alt="Dr. Sevilay Abudaram" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Mobil Only Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
            flex-direction: column;
            min-height: auto;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          div[className*="gap-8"] {
            gap: 1.5rem;
            margin-left: 0;
            max-width: 100%;
            align-items: center;
          }

          h1 {
            font-size: 28px;
            line-height: 1.2;
            text-align: center;
          }

          button {
            padding: 0.75rem 1rem;
            font-size: 14px;
            margin: 0 auto;
          }

          div[className*="relative"] {
            width: 100%;
            margin-right: 0;
          }

          img {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
