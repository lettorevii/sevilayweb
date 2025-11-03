import React from 'react';

const WorkAreasSection = () => {
  const services = [
    { id: 1, title: '', image: '/emdr.png', link: '/emdr-terapisi' },
    { id: 2, title: '', image: '/blreyselp.png', link: '/bireysel-psikoterapi' },
    { id: 3, title: '', image: '/terapi.png', link: '/cift-iliski-terapisi' },
    { id: 4, title: '', image: '/aile.png', link: '/aile-terapisi' },
    { id: 5, title: '', image: '/vizyon.png', link: '/supervizyon' },
    { id: 6, title: '', image: '/egitim.png', link: '/egitim' },
  ];

  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3, 6);

  const ServiceCard = ({ title, image, link }) => (
    <a href={link} className="flex flex-col items-center group">
      {/* İkon Container - Sabit boyut */}
      <div className="w-[250px] h-[250px] flex items-center justify-center mb-6 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Başlık - Sabit yükseklik ve hizalama */}
      <h3 className="text-xl font-poppins font-semibold text-[#540814] text-center min-h-[56px] flex items-center">
        {title}
      </h3>
    </a>
  );

  return (
    <>
      {/* Çalışma Alanlarım Bölümü */}
      <section className="bg-white px-24 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Başlık */}
          <div className="text-center mb-6">
            <h2 className="text-5xl font-poppins font-bold text-[#540814]">
              Çalışma Alanlarım
            </h2>
          </div>
          
          {/* Dekoratif Çizgi */}
          <div className="flex justify-center mb-12">
            <img 
              src="/cizgi.png" 
              alt="Decorative line" 
              className="w-60 h-auto"
            />
          </div>
          
          {/* Üst Sıra - 3 Kart */}
          <div className="flex justify-center gap-12 mb-16">
            {topServices.map((service) => (
              <div key={service.id} className="w-[200px]">
                <ServiceCard 
                  title={service.title}
                  image={service.image}
                  link={service.link}
                />
              </div>
            ))}
          </div>
          
          {/* Alt Sıra - 3 Kart */}
          <div className="flex justify-center gap-12">
            {bottomServices.map((service) => (
              <div key={service.id} className="w-[200px]">
                <ServiceCard 
                  title={service.title}
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
          {/* Sol Taraf - Görseller (tek görsel) */}
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
              <p className="text-3xl font-poppins italic text-[#540814] mb-4 leading-relaxed">
                "Sanat, çocukluk tecrübelerinin büyüklüğe aktarılmasıdır."
              </p>
              <p className="text-2xl font-poppins font-bold text-[#540814]">
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
