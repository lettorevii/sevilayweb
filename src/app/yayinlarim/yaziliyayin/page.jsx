import React from 'react';
import DailyPostsSection from '@/components/YaziliHead';

const MediaPage = () => {
  return (
    <>
      <div>
        <DailyPostsSection />
      </div>

      <div className="bg-white min-h-screen px-4 md:px-24 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Grid - 2x2 Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* Kart 1 - Üst Sol */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-40 md:h-64">
                <img 
                  src="/anadolu.png" 
                  alt="Sosyal Medyadaki Güzellik Algısı" 
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-base md:text-xl font-poppins text-[#540814] leading-relaxed">
                Sosyal Medyadaki Güzellik Algısı Psikolojik Sorunlara Neden Olabiliyor
              </h3>
            </a>

            {/* Kart 2 - Üst Sağ */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-40 md:h-64">
                <img 
                  src="/haberturk.png" 
                  alt="Sosyal Medyadaki Güzellik Algısı" 
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-base md:text-xl font-poppins text-[#540814] leading-relaxed">
                Sosyal Medyadaki Güzellik Algısı Psikolojik Sorunlara Neden Olabiliyor
              </h3>
            </a>

            {/* Kart 3 - Alt Sol */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-40 md:h-64">
                <img 
                  src="/aktuel.png" 
                  alt="Sosyal Medyadaki Güzellik Algısı" 
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-base md:text-xl font-poppins text-[#540814] leading-relaxed">
                Sosyal Medyadaki Güzellik Algısı Psikolojik Sorunlara Neden Olabiliyor
              </h3>
            </a>

            {/* Kart 4 - Alt Sağ */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-40 md:h-64">
                <img 
                  src="/ekspres.png" 
                  alt="Sosyal Medyadaki Güzellik Algısı" 
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="text-base md:text-xl font-poppins text-[#540814] leading-relaxed">
                Sosyal Medyadaki Güzellik Algısı Psikolojik Sorunlara Neden Olabiliyor
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
