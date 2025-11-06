import React from 'react'
import SideBar from '../../../components/SideBar'
import SuperHead from '../../../components/SuperHead'
const page = () => {
  return (
    <>
    <SuperHead />
    
    <div className="w-full flex justify-center py-8 md:py-12">
      
      <div className="max-w-[1140px] w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="md:self-start md:sticky md:top-8">
            <SideBar />
          </div>
          
          
          {/* Content Area */}
          <div className="flex-1">
            <div className="space-y-6 text-[#333333] font-poppins">
              <p className="text-base leading-relaxed">
Süpervizyon, meslektaşlara, vakalar üzerinden bilgi ve deneyim aktarımıyla eğitim verme biçimidir.
              </p>

              <p className="text-base leading-relaxed">
Meslekte deneyimli bir uzmanın, daha az deneyimli meslektaşa vakalar üzerinden bilgi ve deneyim aktarımıyla eğitim verme biçimidir. 
Danışanlarını gören klinik psikologlar/psikoterapistler, mesleklerinin ilk beş ile on yılı arasında kendisinden daha deneyimli olan psikoterapistten süpervizyon almak durumundadır. Bu sayede, bugüne kadar formel eğitimlerinde öğrendiklerini uygulamaya nasıl geçirdiği mercek altına alınmış olur. 
              </p>

              <p className="text-base leading-relaxed">
Klinik psikoloji, uygulamalı bir alan olup, teorik eğitimler uygulamanın temelini oluştururken, yeterli değildir. Teorik eğitimin yanı sıra, eş zamanlı olarak vaka uygulaması da öğreticidir. Uygulama esnasında, psikoterapist kendi bilgi ve deneyimini uygulamasına yansıtır. Klinik uygulamasının ne kadar doğru ve yerinde olduğunu da süpervizyon eğitimleri aracılığıyla anlayabilir. Süpervizyon eğitimlerinde kendisinden daha deneyimli bir psikoterapistle takip ettiği danışanı çalışır. O vaka üzerinde nasıl çalıştığını, vakayı nasıl formüle ettiğini, vakayı çalışırken hangi yollardan gideceğini ve hangi konuları çalışacağını belirler. Bunu da süpervizörü (kendisinden daha deneyimli terapist) ile tartışır ve birlikte bir yol belirler. Bu yolu belirlerken, terapistin uygulamada yaptığı her bir müdahale konuşulur ve böylelikle uygulama konusunda eğitimini almış olur. 
Uzun ya da kısa süreli olup, danışanın çözümlemek istediği meselesi, şu anki durumu ve varmak istediği hedeflerin hepsi bütünlüklü olarak düşünülerek, bir tedavi planı çıkarılır. Bu tedavi planını belirleyen psikoterapist, danışanla çalışmasına etik ilkeler doğrultusunda devam eder. Hem danışan hem de psikoterapist bu etik kurallara uymak zorundadır.
              </p>
                <p className="text-base leading-relaxed">
Psikoterapi sürecinde, kişinin kendi hayatına farklı açılardan bakabilmeyi amaçlar. Kişinin iç dünyasına yapılan bir yolculuk olarak da tanımlanabilir. Bu yolculukta, psikoterapist, danışana öğüt vermez, tavsiyede bulunmaz, yol göstermez. Ancak, bir yolculuğu çıkan iki kişi olarak, karşılarına çıkan danışanın iç dünyasını keşfetmeye adarlar kendilerini. Psikoterapi süreci, bir nevi kişinin kendisini keşfetme sürecidir. Psikoterapist de bu sürecin gerçekleşmesini sağlayan, doğru zamanlarda doğru soruları sorarak, danışanı düşünmeye davet eden bir noktadadır. Danışan hayatı boyunca yaşadıklarını anlatırken, psikoterapist de bu yaşananları sebep sonuç ilişkileri içerisinde düşünen, geçmişte olanla bugün olanları bağdaştıran, ortak temaları ve döngüleri bulmaya ve bunlar üzerine danışanla birlikte düşünen ve keşfeden bir yerdedir. O nedenle, danışanın anlattıkları, psikoterapistin de bu anlatılanları belirli bir düzleme oturtması ve danışanla birlikte o düzlem üzerinden düşünmeye devam etmesi, danışanın iç dünyasındaki değişimlerin ve dönüşümlerin temel yapıtaşını oluşturur. 
              </p>
             <p className="text-base leading-relaxed">
Süpervizyon, klinik uygulamanın ne kadar doğru gittiğini kontrol etmenin vazgeçilmez bir parçasıdır. Ancak bu sayede terapistler deneyim kazanıp, klinik uygulamalarında başarı elde edebilirler. 
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
