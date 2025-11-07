import React from 'react'
import SideBar from '../../../components/SideBar'
import AileTerapi from '../../../components/AileTerapi'
import PageFooter from '../../../components/PageFooter'



const page = () => {
  return (
    <>
    <AileTerapi />
    
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
Aile terapisi, anne-baba ve çocuğun ya da çocukların bir arada dahil edilerek, aile sisteminin odak alındığı, o sistemin aksayan taraflarının değişip dönüşmesini sağlayan psikoterapi biçimidir.  <br /> <br />

Aile terapisinde, çekirdek aile esas alınır. Çekirdek aile sistemi üzerinde çalışılır, bu sistemde aksayan taraflar, sorun olarak aileye yansıyan durumlar üzerine terapi süreci devam eder. Ancak, bu çekirdek ailenin sistemine dışarıdan geniş aile faktörleri de doğrudan etki ediyorsa, o zaman da geniş aile bireyleri aile terapisi seanslarına dahil edilir. Bir başka deyişle, çekirdek ailenin mevcut sistemini doğrudan etkileyen, sorunun oluşmasına sebep olan bir etkiye sahipse, geniş aile bireylerinin de sistemik olan çalışmaya dahil edilmesi gerekir. Bu sayede, daha bütünlüklü bir psikoterapi çalışması yürütülmüş olur. <br /><br />

Aile terapisine gelen ailenin çözmeyi hedeflediği bir sorunu var. Bu sorun, kimi zaman sanki tek bir kişiyi etkiliyor gibi dursa da aslında tüm aile bireylerinin o yaşanan sıkıntıda az ya da çok katkısı vardır. O nedenle, aile sisteminde sorun olarak yaşanan o sıkıntıyı çözmek için tüm aile bireylerinin sorumluluk alması ve aile terapisiyle sorunların çözülmesi şarttır. Örneğin, üniversite sınavına girecek olan ve sınava hazırlanan bir genç ergenin yaşadığı sınav kaygısını çalışmak için, sadece sınava girecek olan çocuğun değil, aile terapisiyle tüm aile bireylerinin terapi sürecine dahil edilmesi gerekir. Böylelikle hem genç ergenin sınav başarı oranı yükselmiş olur, hem de kaygı sorunu daha kalıcı bir şekilde çözülmüş olur. Çünkü, aile ortamında yaşanan kaygı duygusu bulaşıcıdır ve hangi aile üyesi kaygılıysa, bir diğer aile üyesine bulaşır. Bu durum kaçınılmazdır. O nedenle, o kaygı duygusunun ve kaygılı halin nasıl bir yerden geldiğine, içinde hangi düşüncelerin, korkuların, beklentilerin olduğunu netleştirmek, ancak aile terapisi ile mümkün olur. Böylelikle, tüm aile bireyleri de aslında herkesi ilgilendiren durumla ilgili sorumluluk almış olarak, sorunun daha hızlı bir şekilde çözülmesine yardımcı olur. <br /><br /> </p>

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
