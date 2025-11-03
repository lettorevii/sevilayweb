import React from 'react';

const TeamMemberPage = () => {
  return (
    <div className=" min-h-screen">
      <img src="/ekibim.png" alt="" className='w-full' />
      {/* Üst kısım - Ekip üyeleri */}
      <div className="px-24 py-20">
        {/* Ali Pamir Kaplan */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Sol Taraf - Fotoğraf */}
            <div className="bg-white p-8 rounded-lg">
              <img 
                src="/pamir.png" 
                alt="Uzm. Klinik Psikolog Ali Pamir Kaplan" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 
                className="font-poppins font-bold text-[#540814] mb-8"
                style={{ fontSize: '24pt' }}
              >
                Uzm. Klinik Psikolog Ali Pamir Kaplan kimdir?
              </h1>
              
              <div className="space-y-4 font-poppins text-gray-800 leading-relaxed">
                <p style={{ fontSize: '14pt' }}>
                  Psikoloji lisans eğitimini Sabancı Üniversitesi'nde, tezli yüksek lisans eğitimini ise Bahçeşehir Üniversitesi Klinik Psikoloji programında tamamladı. "Alkol ve madde bağımlılığında işlevselliğin karşılaştırılması ve sosyoekonomik etmenler, tercih maddesi ve bağımlılık şiddetinin işlevsellik üzerindeki yordayıcı etkisi" başlıklı teziyle mezun oldu. Şu anda Exeter Üniversitesi'nde Psikanalitik ve Psikodinamik Psikoterapiler üzerine doktora çalışmalarına devam etmektedir.
                </p>
                
                <p style={{ fontSize: '14pt' }}>
                  Eğitim süreci boyunca farklı kuruluşlarda gönüllü görevler aldı ve Lape Psikiyatri Hastanesi'nde stajını tamamladı. Yüksek lisans eğitimiyle eş zamanlı olarak Moodist Psikiyatri ve Nöroloji Hastanesi'nde opiyat bağımlıları için hazırlanan hızlandırılmış anıdırma servisinde koordinatörlük yaptı (2020-2021). Ardından aynı hastanenin Genel Psikiyatri Yataklı Servisi'nde koordinatör psikolog olarak görev aldı (2021-2022). Bu süreçte, alkol ve madde kullanım bozukluğu olan bireylerden, duygudurum ve psikotik bozuklukları bulunan geniş bir hasta grubuyla çalışma deneyimi kazandı. Çalışmalarında çeşitli yaklaşımlar üzerine eğitimler almış olup, klinik pratiğinde psikanalitik ve psikodinamik yaklaşımlarla çalışmaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Melike Müdebbire Erdem */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Sol Taraf - Fotoğraf */}
            <div className="bg-white p-8 rounded-lg">
              <img 
                src="/melike.png" 
                alt="Stajyer Psikolog Melike Müdebbire Erdem" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 
                className="font-poppins font-bold text-[#540814] mb-8"
                style={{ fontSize: '24pt' }}
              >
                Stajyer Psikolog Melike Müdebbire Erdem kimdir?
              </h1>
              
              <div className="space-y-4 font-poppins text-gray-800 leading-relaxed">
                <p style={{ fontSize: '14pt' }}>
                  Melike Müdebbire Erdem, İstanbul Medipol Üniversitesi Psikoloji Bölümü (%100 İngilizce) 4. sınıf öğrencisidir. Klinik psikolojiye ilgi duymakta ve bu alanda hem akademik hem de uygulamalı deneyimler kazanmaktadır. Hastane, klinik ve insan kaynakları gibi farklı alanlarda staj yaparak mesleki gelişimini çeşitlendirmiştir. Akademik alanda, TÜBİTAK 2209-A projesinde yürütücü olarak görev almaktadır. Projesi, "Türkiye Bağımlılıkla Mücadele Akran Uygulayıcı Eğitiminin Standartlarının Belirlenmesi ve Değerlendirilmesi" başlığını taşımaktadır. Ayrıca, yazarları arasında yer aldığı "Üniversite Öğrencilerinde Problemli Pornografi Kullanımı ve İlişkili Faktörler" adlı bildiri, 8. Uluslararası / 26. Ulusal Halk Sağlığı Kongresi'nde yayımlanmıştır. Erdem, gönüllülük çalışmalarına da önem vermektedir. Yeşilay Beykoz Şubesi'nde yönetim kurulu üyesi olarak görev almakta, özellikle davranışsal bağımlılıklar alanında yürütülen sosyal sorumluluk projelerinde aktif rol üstlenmektedir. Mesleki gelişimini desteklemek amacıyla çeşitli eğitim ve sertifika programlarına katılmıştır. Biruni Üniversitesi'nden "Travma ve Krize Müdahale Eğitimi Uygulayıcı Sertifikası", Evokulu Derneği'nden "Afet Psikolojik Destek Programı Uygulayıcı Sertifikası" ve Rehber Klinik'ten "Temel Psikoloji Eğitimi Bitirme Sertifikası" sahibidir.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Alt kısım - Tam genişlik görsel */}

    </div>
  );
};

export default TeamMemberPage;
