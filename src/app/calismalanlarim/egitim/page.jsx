import React from 'react'
import SideBar from '../../../components/SideBar'
import EgitimHead from '../../../components/EgitimHead'

const page = () => {
  return (
    <>
      <EgitimHead />
      
      <div className="w-full flex justify-center py-8 md:py-12">
        <div className="max-w-[1140px] w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            
            {/* Sidebar */}
            <div className="md:self-start md:sticky md:top-8">
              <SideBar />
            </div>
            
            {/* Content Area */}
            <div className="flex-1">
              <div className="space-y-6 text-[#333333] font-poppins">
                
                {/* İlk Paragraf */}
                <p className="text-base leading-relaxed">
                  Eğitim, meslektaşlara ya da farklı meslek gruplarına, kurumlar bilgilendirici eğitim ve seminerler.
                </p>

                {/* İkinci Paragraf */}
                <p className="text-base leading-relaxed">
                  Eğitimler, meslek içi olup, daha az deneyimli ya da dış deneyimli meslektaşlara, terapistin kendi uzmanlık konularında bilgilendirici, eğitici olmak adına verdiği eğitimleri kapsar. Buna ek olarak, meslek dışında, farklı meslek gruplarına (diyetisyenler, eczacılar, doktorlar, dış hekimleri vb.) ya da global ya da ulusal kurumlar ihtiyaçlarına ya da hedefleri doğrultusunda verilen eğitimleri de kapsar.
                </p>

                {/* Ara Başlık */}
                <p className="text-base font-semibold text-[#550613] leading-relaxed">
                  Bu eğitimler arasında,
                </p>

                {/* Madde İşaretli Liste */}
                <ul className="list-disc list-inside space-y-3 ml-2">
                  <li className="text-base leading-relaxed">Etkili İletişim Yolları,</li>
                  <li className="text-base leading-relaxed">Zaman Yönetimi,</li>
                  <li className="text-base leading-relaxed">Stres Yönetimi,</li>
                  <li className="text-base leading-relaxed">Kayıp ve Yasla Baş Etme Mekanizmalarını Geliştirme,</li>
                  <li className="text-base leading-relaxed">Aile İçi İlişkileri Güçlendirme,</li>
                  <li className="text-base leading-relaxed">Aile İlişkileri,</li>
                  <li className="text-base leading-relaxed">Çift İlişkilerindeki Sorunlar ve Çözüm Yolları gibi konular vardır.</li>
                </ul>

                {/* Son Paragraf */}
                <p className="text-base leading-relaxed">
                  Bunlara ek olarak, kurumların ya da meslek gruplarının ihtiyaç duyduğu alanlar analiz edilip, ihtiyaca hizmet eden eğitim ve seminerler dizisi de hazırlanmaktadır.
                </p>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default page
