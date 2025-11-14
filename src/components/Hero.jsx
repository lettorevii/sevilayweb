import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-[#EEE5E0] px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 flex justify-center overflow-hidden min-h-[300px] sm:min-h-96">
      {/* Container 1140px */}
      <div className="w-full max-w-[1140px] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        
        {/* Sol Taraf - Metin ve Buton */}
        <div className="flex flex-col gap-6 md:gap-8 lg:ml-24 max-w-xl  z-10 w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-24 font-poppins text-[#540814] leading-tight">
            Sağlıklı iletişim,<br />
            <span className='font-bold'>güçlü bağlar </span>
          </h1>
          
          <button className="bg-[#540814] text-white font-poppins px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-[#3a0509] transition-colors w-fit text-base sm:text-lg font-medium">
            Randevu Al
          </button>
          
          {/* Kelebek Görseli - Tablet ve üstünde */}
          <div className="relative px-0 sm:px-12 md:px-32 lg:px-56 mt-4 w-full hidden md:block">
            <img 
              src="/kelebek.png" 
              alt="Butterfly decoration" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
        
        {/* Sağ Taraf - İnsan Fotoğrafı - Sadece Desktop */}
        <div className="absolute bottom-0 right-0 w-32 mr-12  sm:w-80 md:w-96 lg:w-[300px] lg:mr-60 z-10  lg:block">
          <img 
            src="/insan.png" 
            alt="Dr. Sevilay Abudaram" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
