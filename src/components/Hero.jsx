import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-[#EEE5E0] px-24  flex items-center justify-between overflow-hidden">
      {/* Sol Taraf - Metin ve Buton */}
      <div className="flex flex-col gap-8 ml-24 max-w-xl z-10">
        <h1 className="text-6xl font-poppins text-[#540814] leading-tight">
          Sağlıklı iletişim,<br />
          <span className='font-bold'>güçlü bağlar </span>
        </h1>
        
        <button className="bg-[#540814] text-white font-poppins px-8 py-4 rounded hover:bg-[#3a0509] transition-colors w-fit text-lg font-medium">
          Randevu Al
        </button>
        
        {/* Kelebek Görseli */}
        <div className="relative px-56 mt-4">
          <img 
            src="/kelebek.png" 
            alt="Butterfly decoration" 
            className="w-[900px]"
          />
        </div>
      </div>
      
      {/* Sağ Taraf - İnsan Fotoğrafı */}
      <div className="relative w-[400px] mr-52 z-10">
        <img 
          src="/insan.png" 
          alt="Dr. Sevilay Abudaram" 
          className="w-[600px] h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
