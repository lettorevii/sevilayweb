import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1140px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
          {/* Sol Görsel - Doktor */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <img 
              src="/insan2.png" 
              alt="Dr. Sevilay Abudaram" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          
          {/* Sağ Taraf - Bilgi Kartı */}
          <div className="flex-1 w-full">
            {/* Başlık */}
            <h1 style={{ fontSize: 'clamp(24px, 6vw, 30pt)', lineHeight: '1.2' }} className="font-bold text-[#5C2E3A] ">
              Dr. Sevilay Abudaram
            </h1>
            
            {/* Alt başlıklar */}
            <div className="mb-4 md:mb-6">
              <p style={{ fontSize: '30pt', lineHeight: '1.2' }} className="text-[#5C2E3A]">
                Klinik Psikolog, PhD. Çift ve Aile Terapisti
              </p>
            </div>

            {/* Açıklama */}
            <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)', lineHeight: '1.6' }} className="text-gray-700 mb-4 md:mb-6 w-full md:w-5/6">
              Lisans derecemi Boğaziçi Üniversitesi Psikolojik Danışmanlık bölümünden yüksek onur dereceyle aldım. Uzmanlığını Klinik Psikoloji Yüksek Lisans programını (yetişkin) tamamlayarak İstanbul Bilgi Üniversitesi'nden aldım. Doktora derecemi ise Klinik Uygulamada programını tamamlayarak İngiltere'den University of Exeter'den aldım.
            </p>

            {/* Alt Başlık */}
            <h2 style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="font-bold text-[#5C2E3A] mb-3 md:mb-4">
              Çalışmalarımı yürüttüğüm alanlar:
            </h2>
            
            {/* Grid Layout - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-16 md:gap-y-8 w-full md:w-6/6">
              {/* Item 1 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">1</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Yetişkinlerle Bireysel Psikoterapi
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">4</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Akademik Araştırmalar
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">2</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Çift ve Ailelerle Psikoterapi
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">5</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Süpervizyon
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">3</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Seminerler
                </p>
              </div>

              {/* Item 6 */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                  <span style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-[#5C2E3A] font-semibold">6</span>
                </div>
                <p style={{ fontSize: 'clamp(12px, 3vw, 12pt)' }} className="text-gray-700 font-medium">
                  Eğitim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
