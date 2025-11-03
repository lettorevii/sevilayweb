import React from 'react';

const WorkAreasSection = () => {
  const services = [
    { 
      id: 1, 
      title: 'EMDR Terapisi', 
      image: '/emdr.png', 
      link: '/emdr-terapisi',
      description: 'EMDR Terapisi, kişinin hayatındaki travmatik yaşantıların olumsuz etkisini iyileştiren psikoterapi yöntemidir.'
    },
    { 
      id: 2, 
      title: 'Bireysel Psikoterapi', 
      image: '/bireyselp.png', 
      link: '/bireysel-psikoterapi',
      description: 'Yetişkinlerle Bireysel Psikoterapi, bireylerin yaşadığı duygusal, davranışsal ve mental sağlık sorunlarının değerlendirilmesi ve tedavisi için uygulanan psikoterapi biçimidir.'
    },
    { 
      id: 3, 
      title: 'Çift İlişki Terapisi', 
      image: '/ciftiliski.png', 
      link: '/cift-iliski-terapisi',
      description: 'Çift Terapisi, çiftlerin ilişkilerini odak noktasına alarak, ilişkilerinde yaşadıkları duygusal ve sosyal meselelerin değerlendirilip, değişim döngülerinin sağlandığı psikoterapi biçimidir.'
    },
    { 
      id: 4, 
      title: 'Aile Terapisi', 
      image: '/ailet.png', 
      link: '/aile-terapisi',
      description: 'Aile terapisi, anne–baba ve çocuğun ya da çocukların bir arada dehil ettirlerek, aile sisteminin adak alındığı, o sistemin oksayon fonksiyonlarının değişip döngüsemesini sağlayan psikoterapi biçimidir.'
    },
    { 
      id: 5, 
      title: 'Süpervizyon', 
      image: '/super.png', 
      link: '/supervizyon',
      description: 'Süpervizyon, meslektaşlara, vakalar üzerinden bilgi ve deneyim aktarımıyla eğitim verme biçimidir.'
    },
    { 
      id: 6, 
      title: 'Eğitim', 
      image: '/egitim.png', 
      link: '/egitim',
      description: 'Eğitim, meslektaşlara ya da farklı meslek gruplarına, kürümlara bilgilendirici eğitim ve seminerler.'
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
      
      {/* Başlık - 14pt */}
      <h3 style={{ fontSize: '13pt' }} className="font-bold text-[#5C2E3A] mb-2">
        {title}
      </h3>

      {/* Açıklama */}
      <p style={{ fontSize: '10pt', lineHeight: '1.4' }} className="text-gray-700 mb-3">
        {description}
      </p>

      {/* Detaylar Linki */}
      <div className="inline-flex items-center gap-2">
        <span style={{ fontSize: '10pt' }} className="font-bold text-[#5C2E3A]">Detaylar</span>
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
      <section className="bg-white px-24 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-6">
            <h2 style={{ fontSize: '33.5pt' }} className="font-bold text-[#5C2E3A]">
              Çalışma Alanlarım
            </h2>
          </div>
          
          {/* Dekoratif Çizgi */}
          <div className="flex justify-center mb-16">
            <img src="/cizgi5.png" alt="" 
            className='w-72'/>
          </div>
          
          {/* Üst Sıra - 3 Kart */}
          <div className="flex justify-center gap-16 mb-16">
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
          <div className="flex justify-center gap-16">
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
      <section className="bg-white px-24 py-20">
        <div className="flex gap-16 items-center max-w-7xl mx-auto">
          {/* Sol Taraf - Görsel */}
          <div className="flex-1">
            <img 
              src="/sanat.png" 
              alt="Therapy Sessions" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          
          {/* Sağ Taraf - Quote */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              {/* Quote - 14pt */}
              <p style={{ fontSize: '24pt', lineHeight: '1.6' }} className="italic text-[#5C2E3A] mb-6">
                "Sanat, çocukluk tecrübelerinin büyüklüğe aktarılmasıdır."
              </p>
              {/* Yazar - 14pt */}
              <p style={{ fontSize: '2  4pt' }} className="font-bold text-[#5C2E3A]">
                S. Freud
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkAreasSection;
