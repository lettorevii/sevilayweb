import React from 'react'
import SideBar from '../../../components/SideBar'
import SuperHead from '../../../components/SuperHead'
import PageFooter from '../../../components/PageFooter'

const page = () => {
  return (
    <>
      <SuperHead />

      <div className="w-full flex justify-center py-8 md:py-12">
        <div className="max-w-[1140px] w-full mx-auto px-8 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Content Area */}
            <div className="flex-1 order-1 md:order-none px-2 sm:px-4">
              <div className="space-y-6 text-[#333333] font-poppins">
                <p className="text-[12pt] leading-relaxed">
                  Süpervizyon, meslektaşlara, vakalar üzerinden bilgi ve deneyim aktarımıyla eğitim verme biçimidir.
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Meslekte deneyimli bir uzmanın, daha az deneyimli meslektaşa vakalar üzerinden bilgi ve deneyim aktarımıyla eğitim verme biçimidir. 
                  Danışanlarını gören klinik psikologlar/psikoterapistler, mesleklerinin ilk beş ile on yılı arasında kendisinden daha deneyimli olan psikoterapistten süpervizyon almak durumundadır...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Klinik psikoloji, uygulamalı bir alan olup, teorik eğitimler uygulamanın temelini oluştururken, yeterli değildir...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Psikoterapi sürecinde, kişinin kendi hayatına farklı açılardan bakabilmeyi amaçlar...
                </p>

                <p className="text-[12pt] leading-relaxed">
                  Süpervizyon, klinik uygulamanın ne kadar doğru gittiğini kontrol etmenin vazgeçilmez bir parçasıdır. 
                  Ancak bu sayede terapistler deneyim kazanıp, klinik uygulamalarında başarı elde edebilirler.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="order-2 md:order-none md:self-start md:sticky md:top-8 mt-6 md:mt-0">
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
