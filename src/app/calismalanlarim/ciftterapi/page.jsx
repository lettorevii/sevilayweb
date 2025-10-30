import React from 'react';

const CoupleTherapyPage = () => {
  return (
    <>
    <div>
      <img src="/cift2.png" alt="" />
    </div>
      {/* Banner Görseli */}

      
      <div className="bg-white min-h-screen px-24 py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Bölüm 1: Çift Terapisti Ne Yapar? */}
          <div className="mb-16">
            <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6 text-left">
              Çift Terapisti Ne Yapar?
            </h2>
            <p className="text-lg font-poppins text-[#540814] leading-relaxed text-left">
              Çift terapisti, romantik ilişkilerde yaşanan sorunları çözmek ve ilişkileri güçlendirmek için çalışan bir uzmandır. İletişim problemlerini çözme, çatışmaları yönetme, güven inşa etme, duygusal bağlantıyı artırma ve cinsel sorunları ele alma gibi konularda çiftlere yardımcı olur. Amaç, çiftlerin sağlıklı, mutlu ve dengeli bir ilişki sürdürmelerini sağlamaktır.
            </p>
          </div>

          {/* Bölüm 2: Çift Terapisi Nedir? */}
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Sol: Görsel */}
              <div>
                <img 
                  src="/cift1.png" 
                  alt="Çift Terapisi Nedir" 
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Sağ: Metin */}
              <div className="text-right">
                <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6">
                  Çift Terapisi Nedir?
                </h2>
                <p className="text-lg font-poppins text-[#540814] leading-relaxed">
                  Çift terapisi, romantik ilişkilerdeki sorunları çözmek ve çiftlerin birbirleriyle daha sağlıklı bir iletişim kurmalarını sağlamak amacıyla uygulanan bir terapi türüdür. Bu terapi, evli çiftler, uzun süreli ilişkilerde olanlar veya yeni başlayan ilişkilerdeki çiftler için uygundur.
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm 3: Çift Terapisi Amaçları */}
          <div className="mb-16">
            <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6 text-left">
              Çift Terapisi Amaçları
            </h2>
            <p className="text-lg font-poppins text-[#540814] leading-relaxed mb-6 text-left">
              Çift terapisi, çiftlerin birbirlerini daha iyi anlamalarını, duygusal bağlarını güçlendirmelerini ve ilişkilerinde yaşadıkları sorunları çözmelerini hedefler. Terapinin ana amaçları şunlardır:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start text-left">
                <span className="text-[#540814] font-bold mr-3">•</span>
                <div>
                  <span className="font-bold text-[#540814] font-poppins">İletişimi Geliştirmek: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin duygularını ve düşüncelerini açıkça ifade edebilmelerini sağlamak.</span>
                </div>
              </li>
              <li className="flex items-start text-left">
                <span className="text-[#540814] font-bold mr-3">•</span>
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Sorun Çözme Becerileri: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin ilişkilerindeki problemleri etkin bir şekilde çözebilmelerini öğretmek.</span>
                </div>
              </li>
              <li className="flex items-start text-left">
                <span className="text-[#540814] font-bold mr-3">•</span>
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Duygusal Bağlılık: </span>
                  <span className="text-[#540814] font-poppins">Çiftler arasındaki duygusal bağı güçlendirmek ve yeniden inşa etmek.</span>
                </div>
              </li>
              <li className="flex items-start text-left">
                <span className="text-[#540814] font-bold mr-3">•</span>
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Güven Oluşturma: </span>
                  <span className="text-[#540814] font-poppins">İlişkide güvenin yeniden sağlanması ve sürdürülebilir hale getirilmesi.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Bölüm 4: Çift Terapisinin Faydaları */}
          <div className="mb-16">
            <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6 text-right">
              Çift Terapisinin Faydaları
            </h2>
            <p className="text-lg font-poppins text-[#540814] leading-relaxed text-right mb-6">
              Çift terapisi, birçok çift için ilişkilerini iyileştirme ve güçlendirme fırsatı sunar. İşte çift terapisi almanın bazı önemli faydaları:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">İlişkideki Stresi Azaltır: </span>
                  <span className="text-[#540814] font-poppins">Çiftler arasındaki anlaşmazlıkları ve çatışmaları azaltarak, ilişkinin daha huzurlu ve dengeli olmasını sağlar.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Empati ve Anlayışı Artırır: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin birbirlerini daha iyi anlamalarını ve empati kurmalarını sağlar.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Duygusal Yakınlığı Artırır: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin birbirlerine olan duygusal yakınlıklarını ve bağlılıklarını artırır.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">İletişim Becerilerini Geliştirir: </span>
                  <span className="text-[#540814] font-poppins">Etkili iletişim tekniklerini öğretir, böylece çiftler duygularını ve ihtiyaçlarını daha açık bir şekilde ifade edebilirler.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
            </ul>
          </div>

          {/* Bölüm 5: Çift Terapisi Süreci */}
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Sol: Metin */}
              <div className="text-left">
                <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6">
                  Çift Terapisi Süreci
                </h2>
                <p className="text-lg font-poppins text-[#540814] leading-relaxed mb-6">
                  Çift terapisi, çiftlerin birbirlerini daha iyi anlamalarını, duygusal bağlarını güçlendirmelerini ve ilişkilerinde yaşadıkları sorunları çözmelerini hedefler. Terapinin ana amaçları şunlardır:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#540814] font-bold mr-3">•</span>
                    <div>
                      <span className="font-bold text-[#540814] font-poppins">İletişimi Geliştirmek: </span>
                      <span className="text-[#540814] font-poppins">Çiftlerin duygularını ve düşüncelerini açıkça ifade edebilmelerini sağlamak.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#540814] font-bold mr-3">•</span>
                    <div>
                      <span className="font-bold text-[#540814] font-poppins">Sorun Çözme Becerileri: </span>
                      <span className="text-[#540814] font-poppins">Çiftlerin ilişkilerindeki problemleri etkin bir şekilde çözebilmelerini öğretmek.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#540814] font-bold mr-3">•</span>
                    <div>
                      <span className="font-bold text-[#540814] font-poppins">Duygusal Bağlılık: </span>
                      <span className="text-[#540814] font-poppins">Çiftler arasındaki duygusal bağı güçlendirmek ve yeniden inşa etmek.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#540814] font-bold mr-3">•</span>
                    <div>
                      <span className="font-bold text-[#540814] font-poppins">Güven Oluşturma: </span>
                      <span className="text-[#540814] font-poppins">İlişkide güvenin yeniden sağlanması ve sürdürülebilir hale getirilmesi.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Sağ: Görsel */}
              <div className='ml-64'>
                <img 
                  src="/cift3.png" 
                  alt="Çift Terapisi Süreci" 
                  className="w-46 h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bölüm 6: Çift Terapisine Kimler Başvurmalı? */}
          <div>
            <h2 className="text-4xl font-poppins font-bold text-[#540814] mb-6 text-right">
              Çift Terapisine Kimler Başvurmalı?
            </h2>
            <p className="text-lg font-poppins text-[#540814] leading-relaxed text-right mb-6">
              Çift terapisi, birçok çift için ilişkilerini iyileştirme ve güçlendirme fırsatı sunar. İşte çift terapisi almanın bazı önemli faydaları:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">İlişkideki Stresi Azaltır: </span>
                  <span className="text-[#540814] font-poppins">Çiftler arasındaki anlaşmazlıkları ve çatışmaları azaltarak, ilişkinin daha huzurlu ve dengeli olmasını sağlar.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Empati ve Anlayışı Artırır: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin birbirlerini daha iyi anlamalarını ve empati kurmalarını sağlar.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">Duygusal Yakınlığı Artırır: </span>
                  <span className="text-[#540814] font-poppins">Çiftlerin birbirlerine olan duygusal yakınlıklarını ve bağlılıklarını artırır.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
              <li className="flex items-start justify-end text-right">
                <div>
                  <span className="font-bold text-[#540814] font-poppins">İletişim Becerilerini Geliştirir: </span>
                  <span className="text-[#540814] font-poppins">Etkili iletişim tekniklerini öğretir, böylece çiftler duygularını ve ihtiyaçlarını daha açık bir şekilde ifade edebilirler.</span>
                </div>
                <span className="text-[#540814] font-bold ml-3">•</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
             <div className='mt-12 w-full h-auto'>
        <img src="/footer.png" alt="" />
      </div>
    </>
  );
};

export default CoupleTherapyPage;
