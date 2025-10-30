import React from 'react';

const WorkAreasSection = () => {
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
          <div className="flex justify-center gap-8 mb-12">
            {/* EMDR Terapisi */}
            <a href="/emdr-terapisi" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/emdr.png" 
                alt="EMDR Terapisi" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
            
            {/* Bireysel Psikoterapi */}
            <a href="/bireysel-psikoterapi" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/blreyselp.png" 
                alt="Bireysel Psikoterapi" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
            
            {/* Çift İlişki Terapisi */}
            <a href="/cift-iliski-terapisi" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/terapi.png" 
                alt="Çift İlişki Terapisi" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
          </div>
          
          {/* Alt Sıra - 3 Kart */}
          <div className="flex justify-center gap-8">
            {/* Aile Terapisi */}
            <a href="/aile-terapisi" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/aile.png" 
                alt="Aile Terapisi" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
            
            {/* Süpervizyon */}
            <a href="/supervizyon" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/vizyon.png" 
                alt="Süpervizyon" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
            
            {/* Eğitim */}
            <a href="/egitim" className="block hover:opacity-80 transition-opacity">
              <img 
                src="/egitim.png" 
                alt="Eğitim" 
                className="w-[250px] h-auto object-contain"
              />
            </a>
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
