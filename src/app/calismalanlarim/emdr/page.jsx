import React from 'react'
import SideBar from '../../../components/SideBar'
import EmdrHead from '../../../components/EmdrHead'
import PageFooter from '../../../components/PageFooter'

const page = () => {
  return (
    <>
      <EmdrHead />

      <div className="w-full flex justify-center py-8 md:py-12">
        <div className="max-w-[1140px] w-full mx-auto px-8 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Content Area */}
            <div className="flex-1 order-1 md:order-none px-2 sm:px-4">
              <div className="space-y-6 text-[#333333] font-poppins">
                <p className="text-[12pt] leading-relaxed">
                  EMDR terapisi, kişinin hayatındaki travmatik yaşantıların olumsuz etkisini iyileştiren psikoterapi yöntemidir.
                </p>

                <p className="text-[12pt] leading-relaxed">
                  EMDR terapisi, travmatik yaşam olayları ya da travmatik yaşantıların tedavi edilmesinde kullanılan oldukça etkili bir psikoterapi yöntemidir. Travmalar, kişinin bireysel hayatında yaşadığı kayıp, yas, ayrılık, taciz, istismar gibi olayları kapsar...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  EMDR'ın açılımı şöyledir; Eye Movement Desensitization and Reprocessing, yani Göz Hareketleri ile Duyarsızlaştırma ve Yeniden İşleme...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  EMDR, yapılandırılmış bir terapi yöntemidir. Kişinin deneyimlediği travmatik yaşantılara tek tek odaklanır...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  EMDR psikoterapi yönteminin takip ettiği 8 adım vardır. Bunlar sırasıyla şöyledir; <br /><br />
                  1. Hikâyeyi dinleme<br /><br />
                  2. Hazırlık süreci<br /><br />
                  3. Değerlendirme<br /><br />
                  4. Duyarsızlaştırma<br /><br />
                  5. Yükleme<br /><br />
                  6. Bedeni tarama<br /><br />
                  7. Sonlandırma<br /><br />
                  8. Yeniden değerlendirme<br /><br />
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Kişilerin fiziksel ve psikolojik sağlığını tehdit eden her yaşantı travmatik olarak isimlendirilir...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Travmanın kişiye bu bağlamda etkisini belirleyen iki önemli unsur vardır. <br /><br />
                  1. Travmanın ne zaman yaşandığı.<br /><br />
                  2. Travmanın yaşantı şiddetinin ne olduğu.<br /><br />
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Kişinin travmayı yaşantılama zamanı ne kadar kısa süre önce olursa, EMDR terapisinin etkisi o kadar etkili olacaktır...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Bir diğer unsur olan, yaşanan travmanın şiddeti de EMDR terapisinin önemsediği ve vurguladığı bir etmendir...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  EMDR'ın takip ettiği adımlar ve süreçler, kişinin yaşantıladığı her bir anıyı çalışma fırsatı sunar...
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="order-2 md:order-none md:self-start md:sticky md:top-8">
              <SideBar />
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </>
  )
}

export default page
