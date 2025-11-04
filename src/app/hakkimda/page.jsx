'use client';

import React, { useState } from 'react'
import Hakkimda from '../../components/Hakkimda'
import AboutSection from '../../components/About'

const AboutPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      description: 'Travma, kaygı bozuklukları, fobiler gibi durumlarla çalışmak üzere çok etkili sonuçlar aldığımız düşündüğüm EMDR Avrupa onaylı eğitimimi ve süpervizyon larımı 1. Düzey ve 2. Düzey olmak üzere Davraniş Bilimleri Enstitüsü\'nde (DBE) tamamladım.'
    },
    {
      id: 2,
      description: 'Çift ve aile terapisi eğitimimi Kanada Satır Pasifik Enstitüsü ile Türkiye Satır İnsan Gelişimi ve Aile Terapisi Enstitüsü\'nün ortak yürüttüğü programı tamamladım. Çift ve ailelerle çalışırken satır yönelimini benimsemekteyim.'
    },
    {
      id: 3,
      description: 'Ingiltere University of Exeter Klinik Uygulama doktora eğitimim boyunca çeşitli danışan gruplarıyla çalışarak, yurtiçi ve yurtdışı kongrelerde yaptığım bilimsel araştırmaları sundum. Yetişkin Bağlanması Kuramı üzerine hem akademik hem de klinik alanda çalışmaktayım.'
    },
    {
      id: 4,
      description: 'Doktora eğitimim sırasında, Amerika Birleşik Devletleri (ABD), Pomona College\'da yetişkin bağlanması üzerine Dr. Sonia Gojman ve Dr. Salvador Milan ile çalıştım.'
    },
    {
      id: 5,
      description: 'Yetişkin bağlanması, mentalizasyon, yakın ilişkiler, motivasyon, zaman yönetimi, insan ilişkileri üzerine seminerler vermekteyim.'
    }
  ];

  return (
    <div>
      <Hakkimda />
      
      <AboutSection />
      
      {/* Deneyim Listesi */}
      <div className="w-full  bg-white py-12">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
          {/* Başlık */}
          <h2 style={{ fontSize: '18pt' }} className="font-bold text-[#5C2E3A] mb-8">
            Eğitim ve Deneyimlerim
          </h2>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex gap-4 sm:gap-6">
                {/* Radio Button */}
                <div className="flex-shrink-0 pt-1">
                  <button
                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                    className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-gray-600 transition-colors duration-200 flex-shrink-0"
                  >
                    {selectedIndex === index && (
                      <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    )}
                  </button>
                </div>

                {/* Açıklama */}
                <div className="flex-1">
                  <p 
                    className="text-gray-800 leading-relaxed"
                    style={{ 
                      fontFamily: "'Gotham', sans-serif", 
                      fontWeight: 400,
                      fontSize: '14pt'
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-12 w-full h-auto'>
        <img src="/footer.png" alt="" className="w-full" />
      </div>
    </div>
  )
}

export default AboutPage
