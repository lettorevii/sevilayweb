import React from 'react';
import DailyPostsSection from '../../../components/CiftTerapiHead';

const CoupleTherapyPage = () => {
  const objectives = [
    { title: 'İletişimi Geliştirmek', description: 'Çiftlerin duygularını ve düşüncelerini açıkça ifade edebilmelerini sağlamak.' },
    { title: 'Sorun Çözme Becerileri', description: 'Çiftlerin ilişkilerindeki problemleri etkin bir şekilde çözebilmelerini öğretmek.' },
    { title: 'Duygusal Bağlılık', description: 'Çiftler arasındaki duygusal bağı güçlendirmek ve yeniden inşa etmek.' },
    { title: 'Güven Oluşturma', description: 'İlişkide güvenin yeniden sağlanması ve sürdürülebilir hale getirilmesi.' },
  ];

  const benefits = [
    { title: 'İlişkideki Stresi Azaltır', description: 'Çiftler arasındaki anlaşmazlıkları ve çatışmaları azaltarak, ilişkinin daha huzurlu ve dengeli olmasını sağlar.' },
    { title: 'Empati ve Anlayışı Artırır', description: 'Çiftlerin birbirlerini daha iyi anlamalarını ve empati kurmalarını sağlar.' },
    { title: 'Duygusal Yakınlığı Artırır', description: 'Çiftlerin birbirlerine olan duygusal yakınlıklarını ve bağlılıklarını artırır.' },
    { title: 'İletişim Becerilerini Geliştir', description: 'Etkili iletişim tekniklerini öğretir, böylece çiftler duygularını ve ihtiyaçlarını daha açık bir şekilde ifade edebilirler.' },
  ];

  return (
    <>
      <DailyPostsSection />

      <div className="bg-white min-h-screen py-8 md:py-20 font-poppins">
        <div className="mx-auto max-w-[1140px] px-4 md:px-6 lg:px-8">
          
          {/* Bölüm 1: Çift Terapisti Ne Yapar */}
          <div className="mb-8 md:mb-20">
            <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-left">
              Çift Terapisti Ne Yapar?
            </h2>
            <p className="text-sm md:text-base font-poppins text-[#540814] leading-relaxed text-left max-w-4xl">
              Çift terapisti, romantik ilişkilerde yaşanan sorunları çözmek ve ilişkileri güçlendirmek için çalışan bir uzmandır. İletişim problemlerini çözme, çatışmaları yönetme, güven inşa etme, duygusal bağlantıyı artırma ve cinsel sorunları ele alma gibi konularda çiftlere yardımcı olur. Amaç, çiftlerin sağlıklı, mutlu ve dengeli bir ilişki sürdürmelerini sağlamaktır.
            </p>
          </div>

          {/* Bölüm 2: Çift Terapisi Nedir - Resim Solda */}
          <div className="mb-8 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
              <div>
                <img 
                  src="/cift1.png" 
                  alt="Çift Terapisi Nedir" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-left">
                  Çift Terapisi Nedir?
                </h2>
                <p className="text-sm md:text-base font-poppins text-[#540814] max-w-4xl leading-relaxed text-left">
                  Çift terapisi, romantik ilişkilerdeki sorunları çözmek ve çiftlerin birbirleriyle daha sağlıklı bir iletişim kurmalarını sağlamak amacıyla uygulanan bir terapi türüdür. Bu terapi, evli çiftler, uzun süreli ilişkilerde olanlar veya yeni başlayan ilişkilerdeki çiftler için uygundur.
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm 3: Çift Terapisi Amaçları */}
          <div className="mb-8 md:mb-20">
            <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-left">
              Çift Terapisi Amaçları  
            </h2>
            <p className="text-sm md:text-base font-poppins text-[#540814] leading-relaxed mb-4 md:mb-6 text-left max-w-4xl">
              Çift terapisi, çiftlerin birbirlerini daha iyi anlamalarını, duygusal bağlarını güçlendirmelerini ve ilişkilerinde yaşadıkları sorunları çözmelerini hedefler. Terapinin ana amaçları şunlardır:
            </p>
            <ul className="space-y-3 md:space-y-4 max-w-4xl">
              {objectives.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#540814] font-poppins font-bold flex-shrink-0 mx-2 md:mx-3">•</span>
                  <div className="font-poppins">
                    <span className="text-sm md:text-base font-bold text-[#540814]">{item.title}:</span>
                    <span className="text-sm md:text-base text-[#540814] ml-1">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölüm 4: Çift Terapisinin Faydaları */}
          <div className="mb-8 md:mb-20">
            <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-right">
              Çift Terapisinin Faydaları  
            </h2>
            <p className="text-sm md:text-base font-poppins text-[#540814] leading-relaxed mb-4 md:mb-6 text-right max-w-4xl ml-auto">
              Çift terapisi, birçok çift için ilişkilerini iyileştirme ve güçlendirme fırsatı sunar. İşte çift terapisi almanın bazı önemli faydaları: 
            </p>
            <ul className="space-y-3 md:space-y-4 max-w-4xl ml-auto" dir="rtl">
              {benefits.map((item, index) => (
                <li key={index} className="font-poppins text-right">
                  <span className="text-sm md:text-base font-bold text-[#540814]">{item.title}:</span>
                  <span className="text-sm md:text-base text-[#540814] ml-1">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölüm 5: Çift Terapisi Süreci - Resim Sağda */}
          <div className="mb-8 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-start">
              <div>
                <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-left">
                  Çift Terapisi Süreci
                </h2>
                <p className="text-sm md:text-base font-poppins text-[#540814] leading-relaxed mb-4 md:mb-6 text-left">
                  Çift terapisi, çiftlerin birbirlerini daha iyi anlamalarını, duygusal bağlarını güçlendirmelerini ve ilişkilerinde yaşadıkları sorunları çözmelerini hedefler. Terapinin ana amaçları şunlardır:
                </p>
                <ul className="space-y-2 md:space-y-3 text-left">
                  {objectives.map((item, index) => (
                    <li key={index} className="flex items-start text-left">
                      <span className="text-[#540814] font-poppins font-bold mr-2 md:mr-3 flex-shrink-0">•</span>
                      <div className="font-poppins">
                        <span className="text-sm md:text-base font-bold text-[#540814]">{item.title}:</span>
                        <span className="text-sm md:text-base text-[#540814] ml-1">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end">
                <img 
                  src="/cift3.png" 
                  alt="Çift Terapisi Süreci" 
                  className="w-32 md:w-48 ml-0 md:ml-48 h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Bölüm 6: Çift Terapisine Kimler Başvurmalı */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
              <div></div>

              <div>
                <h2 className="text-lg md:text-2xl font-poppins font-bold text-[#540814] mb-4 md:mb-6 text-right">
                  Çift Terapisine Kimler Başvurmalı?
                </h2>
                <p className="text-sm md:text-base font-poppins text-[#540814] leading-relaxed mb-4 md:mb-6 text-right">
                  Çift terapisi, birçok çift için ilişkilerini iyileştirme ve güçlendirme fırsatı sunar. İşte çift terapisi almanın bazı önemli faydaları:
                </p>
                <ul className="space-y-2 md:space-y-3 text-right">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start flex-row-reverse text-right">
                      <span className="text-[#540814] font-poppins font-bold ml-2 md:ml-3 flex-shrink-0">•</span>
                      <div className="font-poppins">
                        <span className="text-sm md:text-base font-bold text-[#540814]">{item.title}:</span>
                        <span className="text-sm md:text-base text-[#540814] ml-1">{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-8 md:mt-12 w-full h-auto">
        <img src="/footer.png" alt="Footer" className="w-full h-auto" />
      </div>
    </>
  );
};

export default CoupleTherapyPage;
