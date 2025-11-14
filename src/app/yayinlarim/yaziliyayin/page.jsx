import React from 'react';
import DailyPostsSection from '../../../components/YaziliHead';
import PageFooter from '../../../components/PageFooter'

const MediaPage = () => {
  return (
    <>
      <div>
        <DailyPostsSection />
      </div>

      <div className="bg-white min-h-screen px-4 md:px-16 py-8 md:py-16">
        <div className="max-w-[960px] mx-auto">
          
          {/* Grid - 2x2 Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            
            {/* Kart 1 */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-28 md:h-40">
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

            {/* Kart 2 */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-28 md:h-40">
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

            {/* Kart 3 */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-28 md:h-40">
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

            {/* Kart 4 */}
            <a href="#" className="block group">
              <div className="mb-4 md:mb-6 h-28 md:h-40">
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

      <PageFooter/>
    </>
  );
};

export default MediaPage;
