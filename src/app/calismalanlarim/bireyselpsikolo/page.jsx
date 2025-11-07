import React from 'react'
import SideBar from '../../../components/SideBar'
import BireyselHead from '../../../components/BireyselHead'
import PageFooter from '../../../components/PageFooter'


const page = () => {
  return (
    <>
    <BireyselHead />
    
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
                Bireylerin yaşadığı duygusal, sosyal ve mental sağlık sorunlarını değerlendiren ve uzun ya da kısa süreli tedavi etme biçimidir. 
              </p>

              <p className="text-base leading-relaxed">
                Yetişkinlerle psikoterapi, 18 yaş ve üstünde olan kişilerin bireysel yaşamlarında duydukları duygusal, sosyal ve düşünsel olarak sorunlarının detaylıca konuşulduğu, değerlendirildiği ve tedavi edildiği süreçtir. Psikoterapi süreci oldukça derinlikli, kişinin hayatını doğduğu günden bugüne kadar inceleyen, her bir hayat safhasındaki önemli olaylara dikkat kesilen bir süreçtir. Çok detaylı ve titiz çalışmayı gerektirir. 

              </p>

              <p className="text-base leading-relaxed">
                Psikoterapi süreci, danışan ile psikoterapist arasında oluşan güven bağı üzerine kurulan ilişkiyi temel alır. Bu ilişki, kişinin hayatında daha önce deneyimlemediği öngörülen, iş birliği esasına dayalı, sınırları ve kuralları belirlenmiş, belirli bir çerçeve dahilinde yapılan psikoterapötik çalışmadır.  <br />

Uzun ya da kısa süreli olup, danışanın çözümlemek istediği meselesi, şu anki durumu ve varmak istediği hedeflerin hepsi bütünlüklü olarak düşünülerek, bir tedavi planı çıkarılır. Bu tedavi planını belirleyen psikoterapist, danışanla çalışmasına etik ilkeler doğrultusunda devam eder. Hem danışan hem de psikoterapist bu etik kurallara uymak zorundadır.
              </p>
                <p className="text-base leading-relaxed">
Psikoterapi sürecinde, kişinin kendi hayatına farklı açılardan bakabilmeyi amaçlar. Kişinin iç dünyasına yapılan bir yolculuk olarak da tanımlanabilir. Bu yolculukta, psikoterapist, danışana öğüt vermez, tavsiyede bulunmaz, yol göstermez. Ancak, bir yolculuğu çıkan iki kişi olarak, karşılarına çıkan danışanın iç dünyasını keşfetmeye adarlar kendilerini. Psikoterapi süreci, bir nevi kişinin kendisini keşfetme sürecidir. Psikoterapist de bu sürecin gerçekleşmesini sağlayan, doğru zamanlarda doğru soruları sorarak, danışanı düşünmeye davet eden bir noktadadır. Danışan hayatı boyunca yaşadıklarını anlatırken, psikoterapist de bu yaşananları sebep sonuç ilişkileri içerisinde düşünen, geçmişte olanla bugün olanları bağdaştıran, ortak temaları ve döngüleri bulmaya ve bunlar üzerine danışanla birlikte düşünen ve keşfeden bir yerdedir. O nedenle, danışanın anlattıkları, psikoterapistin de bu anlatılanları belirli bir düzleme oturtması ve danışanla birlikte o düzlem üzerinden düşünmeye devam etmesi, danışanın iç dünyasındaki değişimlerin ve dönüşümlerin temel yapıtaşını oluşturur. 
              </p>
             <p className="text-base leading-relaxed">
                                            Kişinin iç dünyasında sıkıntı duyduğu meseleleri çözebilmek için, öncelikle o meselenin ne olduğunu, o meselenin sebeplerinin neler olabileceğini ve nelerden etkileniyor olduğunu bulmak ve belirlemek gerekir. Sorunu çözmek için, öncelikle sorunun tanımlanması gerekir. O nedenle de keşif süreci olarak adlandırılan psikoterapide, sonuçtan ziyade önce nedenler ön plandadır. Nedenleri, geçmişte olanları, geçmişte olanların bugüne etkisini belirledikten sonra, bugüne odaklanmak olasıdır. Bugündeki durumların değişimi ve dönüşümü için ancak bu şekilde çalışılmaya başlanabilir. 

              </p>
            <p className="text-base leading-relaxed">
Sebepler, geçmiş yaşamdaki döngüler, önemli temalar belirlendikten sonra, bugündeki değişimlerin gerçekleşmesi de hiç kolay değildir. Çünkü, kişi kendi rahatlık alanından çıkmak istemez. Bu istememe hali, bile isteye değildir. Öyle olagelmiştir. Çünkü, bilindik olan, güvenilir olandır, işlevini kaybetse dahi. O nedenle, sebepleri belirledikten sonraki süreç de oldukça dikkatli ve detaylı çalışmayı gerektirir. Kişinin hayatında sorun oluşturan meseleleri belirledikten ve daha sonra çözümleyip, iç dünyada değişim ve dönüşümleri oluşturduktan sonra bu değişimlerin iç dünyaya mıhlanması gerekir. Böylelikle kişi eski alışkanlıklarına ve eski döngülerine sığınmadan, psikoterapi sürecinde oluşturmuş olduğu yeni kaynaklarını iç dünyasına yerleştirebilsin ve iç dünyasındaki dönüşümü kalıcı hale getirebilsin. 
              </p>
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
