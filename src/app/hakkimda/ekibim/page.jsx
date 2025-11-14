import React from 'react';
import EkibimHead from '../../../components/EkibimHead';
import PageFooter from '../../../components/PageFooter'

const TeamMemberPage = () => {
  return (
    <div className="min-h-screen">
      <EkibimHead />
      
      {/* Üst kısım - Ekip üyeleri */}
      <div className="px-8 md:px-8 lg:px-16 py-12 max-w-[1140px] mx-auto">
        
        {/* Ali Pamir Kaplan */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            
            {/* Sol Taraf - Fotoğraf */}
            <div className="bg-white p-6 rounded-lg">
              <img 
                src="/pamir.png" 
                alt="Uzm. Klinik Psikolog Ali Pamir Kaplan" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 className="text-[clamp(20px,5vw,32px)] font-bold font-poppins text-[#540814] mb-8">
                Uzm. Klinik Psikolog Ali Pamir Kaplan kimdir?
              </h1>
              
              <div className="flex flex-col gap-4 text-[clamp(14px,4vw,16px)] font-poppins text-[#333] leading-relaxed">
                <p>
                  Psikoloji lisans eğitimini Sabancı Üniversitesi'nde, tezli yüksek lisans eğitimini ise Bahçeşehir Üniversitesi Klinik Psikoloji programında tamamladı. "Alkol ve madde bağımlılığında işlevselliğin karşılaştırılması ve sosyoekonomik etmenler, tercih maddesi ve bağımlılık şiddetinin işlevsellik üzerindeki yordayıcı etkisi" başlıklı teziyle mezun oldu. Şu anda Exeter Üniversitesi'nde Psikanalitik ve Psikodinamik Psikoterapiler üzerine doktora çalışmalarına devam etmektedir.
                </p>
                
                <p>
                  Eğitim süreci boyunca farklı kuruluşlarda gönüllü görevler aldı ve Lape Psikiyatri Hastanesi'nde stajını tamamladı. Yüksek lisans eğitimiyle eş zamanlı olarak Moodist Psikiyatri ve Nöroloji Hastanesi'nde opiyat bağımlıları için hazırlanan hızlandırılmış anıdırma servisinde koordinatörlük yaptı (2020-2021). Ardından aynı hastanenin Genel Psikiyatri Yataklı Servisi'nde koordinatör psikolog olarak görev aldı (2021-2022). Bu süreçte, alkol ve madde kullanım bozukluğu olan bireylerden, duygudurum ve psikotik bozuklukları bulunan geniş bir hasta grubuyla çalışma deneyimi kazandı. Çalışmalarında çeşitli yaklaşımlar üzerine eğitimler almış olup, klinik pratiğinde psikanalitik ve psikodinamik yaklaşımlarla çalışmaktadır.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Melike Müdebbire Erdem */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
            
            {/* Sol Taraf - Fotoğraf */}
            <div className="bg-white p-6 rounded-lg">
              <img 
                src="/melike.png" 
                alt="Stajyer Psikolog Melike Müdebbire Erdem" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 className="text-[clamp(20px,5vw,32px)] font-bold font-poppins text-[#540814] mb-8">
                Stajyer Psikolog Melike Müdebbire Erdem kimdir?
              </h1>
              
              <div className="flex flex-col gap-4 text-[clamp(14px,4vw,16px)] font-poppins text-[#333] leading-relaxed">
                <p>
                  Melike Müdebbire Erdem, İstanbul Medipol Üniversitesi Psikoloji Bölümü (%100 İngilizce) 4. sınıf öğrencisidir. Klinik psikolojiye ilgi duymakta ve bu alanda hem akademik hem de uygulamalı deneyimler kazanmaktadır. Hastane, klinik ve insan kaynakları gibi farklı alanlarda staj yaparak mesleki gelişimini çeşitlendirmiştir. Akademik alanda, TÜBİTAK 2209-A projesinde yürütücü olarak görev almaktadır. Projesi, "Türkiye Bağımlılıkla Mücadele Akran Uygulayıcı Eğitiminin Standartlarının Belirlenmesi ve Değerlendirilmesi" başlığını taşımaktadır. Ayrıca, yazarları arasında yer aldığı "Üniversite Öğrencilerinde Problemli Pornografi Kullanımı ve İlişkili Faktörler" adlı bildiri, 8. Uluslararası / 26. Ulusal Halk Sağlığı Kongresi'nde yayımlanmıştır. Erdem, gönüllülük çalışmalarına da önem vermektedir. Yeşilay Beykoz Şubesi'nde yönetim kurulu üyesi olarak görev almakta, özellikle davranışsal bağımlılıklar alanında yürütülen sosyal sorumluluk projelerinde aktif rol üstlenmektedir. Mesleki gelişimini desteklemek amacıyla çeşitli eğitim ve sertifika programlarına katılmıştır. Biruni Üniversitesi'nden "Travma ve Krize Müdahale Eğitimi Uygulayıcı Sertifikası", Evokulu Derneği'nden "Afet Psikolojik Destek Programı Uygulayıcı Sertifikası" ve Rehber Klinik'ten "Temel Psikoloji Eğitimi Bitirme Sertifikası" sahibidir.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PageFooter />
    </div>
  );
};

export default TeamMemberPage;
