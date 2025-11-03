import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white px-24 py-20">
      <div className="flex gap-16 items-center">
        {/* Sol Görsel - Doktor */}
        <div className="w-[45%] flex-shrink-0">
          <img 
            src="/insan2.png" 
            alt="Dr. Sevilay Abudaram" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Sağ Taraf - Bilgi Kartı */}
        <div className="flex-1">
          {/* Başlık - 33.5pt (67 ÷ 2) */}
          <h1 style={{ fontSize: '33.5pt', lineHeight: '1.1' }} className="font-bold text-[#5C2E3A] mb-2">
            Dr. Sevilay Abudaram
          </h1>
          
          {/* Alt başlıklar - 33.5pt (67 ÷ 2) */}
          <div className="mb-8">
            <p style={{ fontSize: '33.5pt' }} className="text-[#5C2E3A] ">
              Klinik Psikolog, PhD.
            </p>
            <p style={{ fontSize: '33.5pt' }} className="text-[#5C2E3A]">
              Çift ve Aile Terapisti
            </p>
          </div>

          <p style={{ fontSize: '14pt', lineHeight: '1.6' }} className="text-gray-700 mb-8 w-5/6">
            Lisans derecemi Boğaziçi Üniversitesi Psikolojik Danışmanlık bölümünden yüksek onur dereceyle aldım. Uzmanlığını Klinik Psikoloji Yüksek Lisans programını (yetişkin) tamamlayarak İstanbul Bilgi Üniversitesi'nden aldım. Doktora derecemi ise Klinik Uygulamada programını tamamlayarak İngiltere'den University of Exeter'den aldım.
          </p>

          <h2 style={{ fontSize: '14pt' }} className="font-bold text-[#5C2E3A] mb-6">
            Çalışmalarımı yürüttüğüm alanlar:
          </h2>
          
          {/* Grid Layout - 2x3 */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 w-5/6">
            {/* Item 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '10pt' }} className="text-[#5C2E3A] font-semibold">1</span>
              </div>
              <p style={{ fontSize: '12pt' }} className="text-gray-700 font-medium">
                Yetişkinlerle Bireysel Psikoterapi
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '14pt' }} className="text-[#5C2E3A] font-semibold">4</span>
              </div>
              <p style={{ fontSize: '14pt' }} className="text-gray-700 font-medium">
                Akademik Araştırmalar
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '10pt' }} className="text-[#5C2E3A] font-semibold">2</span>
              </div>
              <p style={{ fontSize: '14pt' }} className="text-gray-700 font-medium">
                Çift ve Ailelerle Psikoterapi
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '14pt' }} className="text-[#5C2E3A] font-semibold">5</span>
              </div>
              <p style={{ fontSize: '14pt' }} className="text-gray-700 font-medium">
                Süpervizyon
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '14pt' }} className="text-[#5C2E3A] font-semibold">3</span>
              </div>
              <p style={{ fontSize: '14pt' }} className="text-gray-700 font-medium">
                Seminerler
              </p>
            </div>

            {/* Item 6 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#5C2E3A] flex items-center justify-center flex-shrink-0">
                <span style={{ fontSize: '14pt' }} className="text-[#5C2E3A] font-semibold">6</span>
              </div>
              <p style={{ fontSize: '14pt' }} className="text-gray-700 font-medium">
                Eğitim
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
