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
      image: '/terapive.png',
      description: 'Terapi ve Danışmanlık Seansları: Bireysel ihtiyaçlara yönelik özelleştirilmiş terapi seansları.'
    },
    {
      id: 3,
      title: 'İlerleme ve Takip',
      image: '/ilerleme.png',
      description: 'İlerleme Takibi: Terapötik süreç boyunca kaydedilen gelişmelerin düzenli olarak değerlendirilmesi.'
    },
    {
      id: 4,
      title: 'Kapanış ve Destek',
      image: '/kapanis.png',
      description: 'Sürecin Kapanışı: Başarıyla tamamlanan terapötik sürecin nasıl sonlandırılacağı ve ardından izlenecek adımlar.'
    }
  ];

  return (
    <section className="bg-[#f5f3f0] px-24 py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '33.5pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="mb-4">
            4 Adımda Yeni Bir Hayat
          </h2>
          {/* Dekoratif çizgi */}
          <div className="flex justify-center">
            <img src="/cizgi6.png" alt="Decorative line" className="h-24 ml-96 object-contain" />
          </div>
        </div>

        {/* Steps Container */}
        <div className="relative mb-16">
          {/* Background Çizgi */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2" style={{ zIndex: 0 }}>
            <img src="/cizgi7.png" alt="Step connector" className="w-full h-auto object-cover" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Görsel Circle Container */}
                <div className="w-[140px] h-[140px] rounded-full bg-white flex items-center justify-center mb-6 shadow-sm" style={{ borderColor: '#540814', borderWidth: '2px' }}>
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>

                {/* Başlık - Poppins 14pt */}
                <h3 style={{ fontSize: '18pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="text-center mb-3">
                  {step.title}
                </h3>

                {/* Açıklama - Poppins 10pt */}
                <p style={{ fontSize: '14pt', lineHeight: '1.4', fontFamily: 'Poppins, sans-serif' }} className="text-gray-700 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex items-center justify-center gap-8 mt-16 pt-8">
          <h3 style={{ fontSize: '20pt', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814' }} className="">
            Yeni Bir Hayat İçin..
          </h3>
          <button style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#540814' }} className="px-8 py-3 text-white font-semibold rounded hover:opacity-90 transition-opacity">
            Randevu Al
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewLifeSection;
