import React from 'react'
import SideBar from '../../../components/SideBar'
import CiftTerapiHead from '../../../components/CiftTerapiHead'
import PageFooter from '../../../components/PageFooter'



const page = () => {
  return (
    <>
    <CiftTerapiHead />
    
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
              <p className="text-[12pt] leading-relaxed">
Çift Terapisi, çiftlerin ilişkilerini odak noktasına alarak, ilişkilerinde yaşadıkları duygusal ve sosyal meselelerin değerlendirilip, değişim dönüşümlerin sağlandığı psikoterapi biçimidir. 
              </p>


              <p className="text-[12pt] leading-relaxed">
Çift terapisi, iki kişi arasında yaşanan ilişkinin duygusal, sosyal, bedensel ve düşünsel olarak değerlendirilip, sorunlu olan kısımların belirlenmesi ve bu sorunların her iki partnerin de ihtiyaçlarını giderecek şekilde değiştirilip dönüştürülmesini amaçlar. Çift terapisinin baş kahramanı ilişkinin kendisidir. Yan rollerde olanlar da ilişkiyi oluşturan partnerlerdir. Partnerlerin bir arada olması ile yaşanan o ilişki, sanki üçüncü bir kişidir. Çift terapisinin odak noktası da bu üçüncü kişidir, yani ilişkinin kendisi.


              </p>


              <p className="text-[12pt] leading-relaxed">
İlişkiyi oluşturan elbette iki kişidir. Bu iki kişinin, o ilişkiye kadar yaşadıkları bireysel hayatları kendilerine özgüdür, biriciktir. Bugünkü yaşadıkları ilişkiye etkisi büyük ve kaçınılmazdır. Çift terapisinde kişilerin bireysel hikayelerine yer verilir, ancak her zaman odakta mevcut ilişki tutulur. Geçmiş yaşamlarında partnerlerin deneyimlerinin bugünkü ilişkileri üzerine etkisi konuşulur ve önemli noktalar tespit edilir. 


              </p>
                <p className="text-[12pt] leading-relaxed">
Psikoterapi sürecinde, kişinin kendi hayatına farklı açılardan bakabilmeyi amaçlar. Kişinin iç dünyasına yapılan bir yolculuk olarak da tanımlanabilir. Bu yolculukta, psikoterapist, danışana öğüt vermez, tavsiyede bulunmaz, yol göstermez. Ancak, bir yolculuğu çıkan iki kişi olarak, karşılarına çıkan danışanın iç dünyasını keşfetmeye adarlar kendilerini. Psikoterapi süreci, bir nevi kişinin kendisini keşfetme sürecidir. Psikoterapist de bu sürecin gerçekleşmesini sağlayan, doğru zamanlarda doğru soruları sorarak, danışanı düşünmeye davet eden bir noktadadır. Danışan hayatı boyunca yaşadıklarını anlatırken, psikoterapist de bu yaşananları sebep sonuç ilişkileri içerisinde düşünen, geçmişte olanla bugün olanları bağdaştıran, ortak temaları ve döngüleri bulmaya ve bunlar üzerine danışanla birlikte düşünen ve keşfeden bir yerdedir. O nedenle, danışanın anlattıkları, psikoterapistin de bu anlatılanları belirli bir düzleme oturtması ve danışanla birlikte o düzlem üzerinden düşünmeye devam etmesi, danışanın iç dünyasındaki değişimlerin ve dönüşümlerin temel yapıtaşını oluşturur. 
              </p>
             <p className="text-[12pt] leading-relaxed">
Bu önemli noktalar arasında, kişilerin partnerlerine ve ilişkilerine dair duyguları, düşünceleri, durumları nasıl algıladıkları, davranışları, davranışların oluşmasını sağlayan inançları, cinsel hayatlarının kalitesi, beklentileri vardır. Bu beklentiler ise hem kişinin kendisinden beklentisi hem de partnerinden beklentisini kapsar. Partnerlerin duygusal ihtiyaçları, bireysel arzuları ve özlemleri üzerinde durulur. Bunlara ek olarak, partnerlerin sorun yaşadıklarında, o soruna nasıl yaklaştıkları ve çözüm için hangi baş etme mekanizmalarını kullandıkları çok önemli ve terapi çalışmasının yönünü belirleyicidir. 


              </p>
            <p className="text-[12pt] leading-relaxed">
Çift terapisine çiftler genelde belirli bir sorun olduğunda başvurur. Bu sorunlar arasında, cinsel uyumsuzluk, aldatma, anlaşamama, anlaşılamama, aile kavramının farklılığı, kuvvetli fikir ayrılığı, anne-baba rolleriyle karı-koca rollerinin birbirine karışması, köken aile ile yaşanan sorunlar, kimlik karmaşaları vs. vardır. Bu sorunlar olduğunda, çiftler kendi baş etme mekanizmalarını kullanıp sorunları çözmeye çalışıp çözemediklerinde, çaresiz bir yerde hissettiklerinde çift terapisinden destek alırlar. 
              </p>
                          <p className="text-[12pt] leading-relaxed">
Bunun yanı sıra, çiftler, kendi partnerlerini ve kendilerini ilişkide daha iyi anlayabilmek, ilişkilerinin kalitesini arttırmak, ilişkilerinin güçlü yanlarını anlayıp, o güçlü tarafları pekiştirip, ilişkide kaynak haline getirmeyi amaçlayarak da çift terapisi alırlar. Bu sayede partnerler ilişkide kendilerini çaresiz bir noktada bulmadan, sorun yaşamadan ilişkilerinin kalitesini arttırmak için çok önemli bir adım atmış olurlar.               </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
        <PageFooter/>


    </>
  )
}


export default page
