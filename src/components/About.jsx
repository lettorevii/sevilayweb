import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#fff] px-24 py-20">
      {/* Görseller */}
      <div className="flex gap-24 justify-center">
        {/* Sol Görsel */}
        <div className="w-[520px]">
          <img 
            src="/insan2.png" 
            alt="Dr. Sevilay Abudaram" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Sağ Görsel */}
        <div className="w-[520px]">
          <img 
            src="/yazi.png" 
            alt="Çalışma Alanları" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Quote */}

    </section>
  );
};

export default AboutSection;
