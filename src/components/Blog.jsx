import React from 'react';

const BlogSection = () => {
  return (
    <section className="bg-white px-24 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Başlık ve Dekoratif Çizgi */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-poppins font-bold text-[#540814] mb-4">
            Son Yazılarım
          </h2>
          <div className="flex justify-center">
            <img 
              src="/cizgi3.png" 
              alt="Decorative line" 
              className="w-12 h-auto"
            />
          </div>
        </div>

        {/* Blog Kartları - Asimetrik Düzen */}
        <div className="flex gap-6">
          {/* Sol Taraf - Büyük Kare */}
          <div className="w-[60%]">
            <a href="/blog" className="block hover:opacity-90 transition-opacity h-full">
              <img 
                src="/blog4.png" 
                alt="İlişkinizde Farkı Olmak Mı Aynı Olmak Mı?" 
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          </div>

          {/* Sağ Taraf - İki Küçük Kare */}
          <div className="w-[40%] flex flex-col gap-6">
            {/* Üst Kart */}
            <a href="/blog4" className="block hover:opacity-90 transition-opacity flex-1">
              <img 
                src="/blog5.png" 
                alt="İlişkinizdeki Öfke Duygunuzun Altında Yetersizlik Hissiniz Olabilir, Aman Dikkat!" 
                className="w-full aspect-square object-cover rounded-lg"
              />
            </a>

            {/* Alt Kart */}
            <a href="/blog3" className="block hover:opacity-90 transition-opacity flex-1">
              <img 
                src="/blog3.png" 
                alt="Kadın Olarak İlişkinizde Kendinizi Yetersiz Hissediyor Musunuz?" 
                className="w-full aspect-square object-cover rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
