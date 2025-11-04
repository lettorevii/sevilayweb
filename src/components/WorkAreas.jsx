import React from 'react';

const WorkAreasSection = () => {
  const services = [
    { 
      id: 1, 
      title: 'EMDR Terapisi', 
      image: '/emdr.png', 
      link: '/emdr-terapisi',
      description: 'EMDR Terapisi, kişinin hayatındaki travmatik yaşantıların olumsuz etkilerini azaltarak, zihinsel ve duygusal iyileşmeyi destekleyen etkili bir psikoterapi yöntemidir.'
    },
    { 
      id: 2, 
      title: 'Bireysel Psikoterapi', 
      image: '/bireyselp.png', 
      link: '/bireysel-psikoterapi',
      description: 'Yetişkinlerle Bireysel Psikoterapi, bireylerin yaşadığı duygusal, davranışsal ve zihinsel zorlukların değerlendirilip, çözümüne odaklanan profesyonel psikoterapi biçimidir.'
    },
    { 
      id: 3, 
      title: 'Çift İlişki Terapisi', 
      image: '/ciftiliski.png', 
      link: '/cift-iliski-terapisi',
      description: 'Çift Terapisi, ilişkilerinde duygusal ve iletişimsel zorluklar yaşayan çiftlerin bağlarını güçlendirmeye ve anlayışı geliştirmeye odaklanan psikoterapi biçimidir.'
    },
    { 
      id: 4, 
      title: 'Aile Terapisi', 
      image: '/ailet.png', 
      link: '/aile-terapisi',
      description: 'Aile Terapisi, anne-baba ve çocukların birlikte ele alındığı, aile içi iletişimi güçlendirmeyi ve işlevleri iyileştirmeyi hedefleyen psikoterapi biçimidir.'
    },
    { 
      id: 5, 
      title: 'Süpervizyon', 
      image: '/super.png', 
      link: '/supervizyon',
      description: 'Süpervizyon, meslektaşlara vakalar üzerinden bilgi, deneyim ve etik rehberlik aktarımıyla mesleki gelişimlerini destekleyen profesyonel bir eğitim biçimidir.'
    },
    { 
      id: 6, 
      title: 'Eğitim', 
      image: '/egitim.png', 
      link: '/egitim',
      description: 'Eğitim, meslektaşlara veya farklı meslek gruplarına yönelik olarak kurumlarda düzenlenen bilgilendirici seminerler ve gelişimi destekleyen programlardır. '
    },
  ];

  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 6);

  const ServiceCard = ({ title, description, image, link }) => (
    <a href={link} className="flex flex-col items-center group text-center">
      {/* İkon Container */}
      <div className="w-[120px] h-[120px] flex items-center justify-center mb-4 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Başlık */}
      <h3 style={{ fontSize: '18pt' }} className="font-bold text-[#5C2E3A] mb-2">
        {title}
      </h3>

      {/* Açıklama */}
      <p style={{ fontSize: '14pt', lineHeight: '1.4' }} className="text-gray-700 mb-3">
        {description}
      </p>

      {/* Detaylar Linki */}
      <div className="inline-flex items-center gap-2">
        <span style={{ fontSize: '14pt' }} className="font-bold text-[#5C2E3A]">Detaylar</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#5C2E3A" strokeWidth="2">
          <circle cx="8" cy="8" r="6" />
          <path d="M 6 8 L 8 10 L 10 8" />
        </svg>
      </div>
    </a>
  );

  return (
    <>
      {/* Çalışma Alanları Bölümü */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-24">
          {/* Başlık */}
          <div className="text-center mb-6">
            <h2 style={{ fontSize: '33.5pt' }} className="relative font-bold text-[#5C2E3A]">
              Çalışma Alanlarım
            </h2>
          </div>
          
          {/* Dekoratif Çizgi */}
          <div className="flex justify-center mb-16 hidden md:flex">
            <img src="/cizgi5.png" alt="" className='w-72'/>
          </div>
          
          {/* Üst Sıra - 3 Kart */}
          <div className="flex justify-center gap-16 mb-16 flex-wrap">
            {topServices.map((service) => (
              <div key={service.id} className="w-[250px]">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
          
          {/* Alt Sıra - 3 Kart */}
          <div className="flex justify-center gap-16 flex-wrap">
            {bottomServices.map((service) => (
              <div key={service.id} className="w-[250px]">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Görseller ve Quote Bölümü */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1440px] px-24">
          <div className="flex gap-16 items-center flex-col md:flex-row">
            {/* Sol Taraf - Görsel */}
            <div className="flex-1 w-full">
              <img 
                src="/sanat.png" 
                alt="Therapy Sessions" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            {/* Sağ Taraf - Quote */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="text-center">
                {/* Quote */}
                <p style={{ fontSize: '24pt', lineHeight: '1.6' }} className="italic text-[#5C2E3A] mb-6">
                  "Sanat, çocukluk tecrübelerinin büyüklüğe aktarılmasıdır."
                </p>
                {/* Yazar */}
                <p style={{ fontSize: '24pt' }} className="font-bold text-[#5C2E3A]">
                  <br />
                  S. Freud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobil Only Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          section div[className*="max-w-[1440px]"] {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          h2 {
            font-size: 24px;
            margin-bottom: 1rem;
          }

          .w-\[250px\] {
            width: calc(50% - 0.5rem);
            min-width: 140px;
          }

          div[className*="gap-16"] {
            gap: 0.5rem;
          }

          h3 {
            font-size: 14px;
          }

          p {
            font-size: 12px;
            line-height: 1.3;
          }

          div[className*="flex-1"] {
            min-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default WorkAreasSection;
