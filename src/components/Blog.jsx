import React from 'react';

const BlogSection = () => {
  return (
    <section className="bg-white font-poppins px-4 md:px-24 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Başlık ve Dekoratif Çizgi */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins relative font-bold text-[#540814] mb-4">
            Son Yazılarım
          </h2>
          <div className="flex justify-center">
            <img 
              src="/cizgi3.png" 
              alt="Decorative line" 
              className="w-12 absolute left-[900px] mb-12 h-auto"
            />
          </div>
        </div>

        {/* Blog Kartları - Asimetrik Düzen */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sol Taraf - Büyük Kart */}
          <div className="w-full md:w-[60%]">
            <a href="/blog" className="block group h-full overflow-hidden rounded-lg">
              <div className="relative h-80 md:h-96 lg:h-[720px]">
                <img 
                  src="/bloghome.png" 
                  alt="İlişkinizde Farklı Olmak Mı Aynı Olmak Mı?" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                {/* Yazı */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 text-white">
                  <p className="text-xs md:text-sm font-poppins mb-1">
                    6 Aralık 2025
                  </p>
                  <p className="text-xs md:text-sm font-poppins mb-3 md:mb-4">
                    Dr. Sevilay Abudaram
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold leading-tight line-clamp-4">
                    İlişkinizde Farklı Olmak Mı, Aynı Olmak Mı?
                  </h3>
                </div>
              </div>
            </a>
          </div>

          {/* Sağ Taraf - İki Küçük Kare */}
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            {/* Üst Kart */}
            <a href="/blog4" className="block group flex-1 overflow-hidden rounded-lg">
              <div className="relative aspect-square">
                <img 
                  src="/bloghome2.png" 
                  alt="İlişkinizdeki Öfke Duygununuzun Altında Yettersizlik Hissi Olabilir, Aman Dikkat!" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}

                {/* Yazı */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 text-white">
                  <p className="text-xs font-poppins mb-1">
                    6 Aralık 2025
                  </p>
                  <p className="text-xs font-poppins mb-2">
                    Dr. Sevilay Abudaram
                  </p>
                  <h3 className="text-sm md:text-base font-poppins font-bold leading-tight line-clamp-3">
                    İlişkinizdeki Öfke Duygununuzun Altında Yettersizlik Hissi Olabilir, Aman Dikkat!
                  </h3>
                </div>
              </div>
            </a>

            {/* Alt Kart */}
            <a href="/blog3" className="block group flex-1 overflow-hidden rounded-lg">
              <div className="relative aspect-square">
                <img 
                  src="/bloghome3.png" 
                  alt="Kadın Olarak İlişkinizde Kendinizi Yetersiz Hissediyor Musunuz?" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}

                {/* Yazı */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 text-white">
                  <p className="text-xs font-poppins mb-1">
                    6 Aralık 2025
                  </p>
                  <p className="text-xs font-poppins mb-2">
                    Dr. Sevilay Abudaram
                  </p>
                  <h3 className="text-sm md:text-base font-poppins font-bold leading-tight line-clamp-3">
                    Kadın Olarak İlişkinizde Kendinizi Yetersiz Hissediyor Musunuz?
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobil Only Styles */}
      <style jsx>{`
        @media (max-width: 1140px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
