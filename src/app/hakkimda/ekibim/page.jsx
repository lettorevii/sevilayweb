import React from 'react';
import EkibimHead from '../../../components/EkibimHead';

const TeamMemberPage = () => {
  return (
    <div className="min-h-screen">
      <EkibimHead />
      
      {/* Üst kısım - Ekip üyeleri */}
      <div style={{ padding: '5rem 1.5rem' }}>
        {/* Ali Pamir Kaplan */}
        <div style={{ marginBottom: '5rem', maxWidth: '90rem', margin: '0 auto 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {/* Sol Taraf - Fotoğraf */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <img 
                src="/pamir.png" 
                alt="Uzm. Klinik Psikolog Ali Pamir Kaplan" 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem' }}
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814', marginBottom: '2rem' }}>
                Uzm. Klinik Psikolog Ali Pamir Kaplan kimdir?
              </h1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: 'clamp(14px, 4vw, 16px)', fontFamily: 'Poppins, sans-serif', color: '#333', lineHeight: '1.6' }}>
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
        <div style={{ marginBottom: '5rem', maxWidth: '90rem', margin: '0 auto 5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {/* Sol Taraf - Fotoğraf */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
              <img 
                src="/melike.png" 
                alt="Stajyer Psikolog Melike Müdebbire Erdem" 
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0.5rem' }}
              />
            </div>

            {/* Sağ Taraf - Bilgiler */}
            <div>
              <h1 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#540814', marginBottom: '2rem' }}>
                Stajyer Psikolog Melike Müdebbire Erdem kimdir?
              </h1>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: 'clamp(14px, 4vw, 16px)', fontFamily: 'Poppins, sans-serif', color: '#333', lineHeight: '1.6' }}>
                <p>
                  Melike Müdebbire Erdem, İstanbul Medipol Üniversitesi Psikoloji Bölümü (%100 İngilizce) 4. sınıf öğrencisidir. Klinik psikolojiye ilgi duymakta ve bu alanda hem akademik hem de uygulamalı deneyimler kazanmaktadır. Hastane, klinik ve insan kaynakları gibi farklı alanlarda staj yaparak mesleki gelişimini çeşitlendirmiştir. Akademik alanda, TÜBİTAK 2209-A projesinde yürütücü olarak görev almaktadır. Projesi, "Türkiye Bağımlılıkla Mücadele Akran Uygulayıcı Eğitiminin Standartlarının Belirlenmesi ve Değerlendirilmesi" başlığını taşımaktadır. Ayrıca, yazarları arasında yer aldığı "Üniversite Öğrencilerinde Problemli Pornografi Kullanımı ve İlişkili Faktörler" adlı bildiri, 8. Uluslararası / 26. Ulusal Halk Sağlığı Kongresi'nde yayımlanmıştır. Erdem, gönüllülük çalışmalarına da önem vermektedir. Yeşilay Beykoz Şubesi'nde yönetim kurulu üyesi olarak görev almakta, özellikle davranışsal bağımlılıklar alanında yürütülen sosyal sorumluluk projelerinde aktif rol üstlenmektedir. Mesleki gelişimini desteklemek amacıyla çeşitli eğitim ve sertifika programlarına katılmıştır. Biruni Üniversitesi'nden "Travma ve Krize Müdahale Eğitimi Uygulayıcı Sertifikası", Evokulu Derneği'nden "Afet Psikolojik Destek Programı Uygulayıcı Sertifikası" ve Rehber Klinik'ten "Temel Psikoloji Eğitimi Bitirme Sertifikası" sahibidir.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Beyza Nur Karlı */}
      </div>

      {/* Alt kısım - Tam genişlik görsel */}
      <div style={{ display: 'none' }}>        
      </div>
    </div>
  );
};

export default TeamMemberPage;
