import React from 'react';

const NewLifeSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Giriş ve Değerlendirme',
      image: '/giris.png',
      description: 'İlk İletişim ve Randevu: Danışanlarımızla ilk buluşmamız, ihtiyaçlarını anlamak için bir başlangıç noktasıdır.'
    },
    {
      id: 2,
      title: 'Terapi ve Danışmanlık',
      image: '/homenew.png',
      description: 'Terapi ve Danışmanlık Seansları: Bireysel ihtiyaçlara yönelik özelleştirilmiş terapi seansları.'
    },
    {
      id: 3,
      title: 'İlerleme ve Takip',
      image: '/homenew1.png',
      description: 'İlerleme Takibi: Terapötik süreç boyunca kaydedilen gelişmelerin düzenli olarak değerlendirilmesi.'
    },
    {
      id: 4,
      title: 'Kapanış ve Destek',
      image: '/homenew2.png',
      description: 'Sürecin Kapanışı: Başarıyla tamamlanan terapötik sürecin nasıl sonlandırılacağı ve ardından izlenecek adımlar.'
    }
  ];

  return (
    <section className="bg-[#f7f3f0] px-6 sm:px-12 md:px-24 py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1140px] mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16 relative">
          <h2 style={{ fontSize: '33.5pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="mb-4">
            4 Adımda Yeni Bir Hayat
          </h2>
          {/* Dekoratif çizgi */}
          <div className="flex justify-center absolute top-[5%] left-[55%] transform -translate-x-1/2 hidden md:block">
            <img src="/cizgi6.png" alt="Decorative line" className="h-24 top-[90%] ml-96 object-contain" />
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative mb-16">
          {/* Background Çizgi - Desktop only */}
          <div className="absolute top-[33%] left-0 right-0 transform -translate-y-1/2 hidden md:block" style={{ zIndex: 0 }}>
            <img src="/cizgi7.png" alt="Step connector" className="w-full h-auto object-cover" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative md:mt-32 mt-8 z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Görsel Circle Container */}
                <div className="w-24 md:w-[140px] h-24 md:h-[140px] rounded-full bg-white flex items-center justify-center mb-3 md:mb-6 shadow-sm" style={{ borderColor: '#540814', borderWidth: '2px' }}>
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-16 md:w-[100px] h-16 md:h-[100px] object-contain"
                  />
                </div>

                {/* Başlık */}
                <h3 style={{ fontSize: '18pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="text-center mb-2 md:mb-3 text-sm md:text-base">
                  {step.title}
                </h3>

                {/* Açıklama */}
                <p style={{ fontSize: '12pt', lineHeight: '1.4', fontFamily: 'Poppins, sans-serif' }} className="text-gray-700 text-center text-xs md:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-12 md:mt-16 pt-8">
          <h3 style={{ fontSize: '20pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="text-center md:text-left text-base md:text-lg">
            Yeni Bir Hayat İçin..
          </h3>
          <button style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#540814' }} className="px-6 md:px-8 py-2 md:py-3 text-white font-semibold rounded hover:opacity-90 transition-opacity text-sm md:text-base w-full md:w-auto">
            Randevu Al
          </button>
        </div>
      </div>

      {/* Mobil Özel CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          h2 {
            font-size: 20px;  /* Küçültülmüş mobil başlık */
            margin-bottom: 2rem;
          }

          h3 {
            font-size: 12px; /* Küçültülmüş mobil alt başlık */
          }

          p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewLifeSection;
