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
              <h1 className="text-4xl font-poppins font-bold text-[#540814] mb-8">
                Uzm. Klinik Psikolog Ali Pamir Kaplan kimdir?
              </h1>
              
              <div className="space-y-4 text-base font-poppins text-gray-800 leading-relaxed">
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
              <h1 className="text-4xl font-poppins font-bold text-[#540814] mb-8">
                Stajyer Psikolog Melike Müdebbire Erdem kimdir?
              </h1>
              
              <div className="space-y-4 text-base font-poppins text-gray-800 leading-relaxed">
                <p>
                  Melike Müdebbire Erdem, İstanbul Medipol Üniversitesi Psikoloji Bölümü (%100 İngilizce) 4. sınıf öğrencisidir. Klinik psikolojiye ilgi duymakta ve bu alanda hem akademik hem de uygulamalı deneyimler kazanmaktadır. Hastane, klinik ve insan kaynakları gibi farklı alanlarda staj yaparak mesleki gelişimini çeşitlendirmiştir. Akademik alanda, TÜBİTAK 2209-A projesinde yürütücü olarak görev almaktadır. Projesi, "Türkiye Bağımlılıkla Mücadele Akran Uygulayıcı Eğitiminin Standartlarının Belirlenmesi ve Değerlendirilmesi" başlığını taşımaktadır. Ayrıca, yazarları arasında yer aldığı "Üniversite Öğrencilerinde Problemli Pornografi Kullanımı ve İlişkili Faktörler" adlı bildiri, 8. Uluslararası / 26. Ulusal Halk Sağlığı Kongresi'nde yayımlanmıştır. Erdem, gönüllülük çalışmalarına da önem vermektedir. Yeşilay Beykoz Şubesi'nde yönetim kurulu üyesi olarak görev almakta, özellikle davranışsal bağımlılıklar alanında yürütülen sosyal sorumluluk projelerinde aktif rol üstlenmektedir. Mesleki gelişimini desteklemek amacıyla çeşitli eğitim ve sertifika programlarına katılmıştır. Biruni Üniversitesi'nden "Travma ve Krize Müdahale Eğitimi Uygulayıcı Sertifikası", Evokulu Derneği'nden "Afet Psikolojik Destek Programı Uygulayıcı Sertifikası" ve Rehber Klinik'ten "Temel Psikoloji Eğitimi Bitirme Sertifikası" sahibidir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beyza Nur Karlı */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-2 gap-16 items-start">
            {/* Sol Taraf - Fotoğraf */}
            <div className="bg-white p-8 rounded-lg">
              <img 
                src="/beyza.png" 
                alt="Uzm. Klinik Psikolog Beyza Nur Karlı" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 className="text-4xl font-poppins font-bold text-[#540814] mb-8">
                Uzm. Klinik Psikolog Beyza Nur Karlı kimdir?
              </h1>
              
              <div className="space-y-4 text-base font-poppins text-gray-800 leading-relaxed">
                <p>
                  Beyza Nur Karlı, Boğaziçi Üniversitesi Psikoloji Bölümü'nden mezun olduktan sonra İstanbul Bilgi Üniversitesi Klinik Psikoloji Yüksek Lisans Programı'nı, Çift ve Aile Terapisi alt dalında "Kıskançlık ağı: Bağlanma ve sosyal medya kıskançlığı üzerine bir ikili analiz" başlıklı teziyle tamamlamıştır. Yüksek lisans stajını Bilgi Üniversitesi Psikolojik Danışmanlık Merkezi'nde gerçekleştirmiş; eğitim süresince bireyler, çiftler ve ailelerle danışan deneyimi edinmiştir. Akademik hayatı boyunca çeşitli grup çalışmaları ve projelerde yer almıştır. "Çift İlişkisine Farkındalıkla Bakmak" başlıklı grup çalışmasının eş yürütücülüğünü üstlenmiş, "LGBTİ+ Çift Olmak" projesinde aktif rol almıştır. Ayrıca "Normatif Olmayan Çift İlişkisi" ve "Değişen, Genişleyen Aile Yapısı ve Sınırlar" gibi temalarda düzenlenen seminerlerin hazırlanmasında ve sunumunda görev almıştır. Profesyonel gelişimine önem veren Karlı; DOÇAT bünyesinde Senem Zeytinoğlu Saydam tarafından verilen Duygu Odaklı Çift Terapisi I-II ve Duygu Odaklı Bireysel Terapi eğitimlerini, Didem Doğan'ın "Çift Terapisi Dersleri" eğitimini ve Bilgi Üniversitesi'nde Zeynep Çatay yürütücülüğünde gerçekleşen "Psikoterapistler İçin Bedenlenmiş Etkileşim Becerileri" programını tamamlamıştır. İlişkisel dinamikleri anlamaya duyduğu ilgi, hem akademik çalışmalarını hem de terapistlik yolculuğunu şekillendirmiştir. Terapi pratiğinde sistemik yaklaşımı merkeze almakta, bireyin ilişkisel dünyasını bütüncül bir bakış açısıyla ele almaktadır. Dinamik kuramdan da beslenen bir anlayışla, her danışanla onların özgün hikâyelerine saygı duyarak çalışmayı önemsemektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt kısım - Tam genişlik görsel */}
      <div className="w-[700px] ml-96 py-5">
        <img src="klinik.png" alt="" />
        <img src="/aile1.png" alt="Aile" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default TeamMemberPage;
