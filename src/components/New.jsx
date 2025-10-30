import React from 'react';

const NewLifeSection = () => {
  return (
    <>
    <section className="bg-[#EEE5E0] px-24 py-20">
      <div className="max-w-8xl mx-auto">
        {/* Başlık ve Dekoratif Çizgi */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-poppins font-bold text-[#540814] mb-4">
            4 Adımda Yeni Bir Hayat
          </h2>

        </div>

        {/* 4 İkon Görseli */}
        <div className="mb-16">
          <img 
            src="/adim.png" 
            alt="4 Adım İkonları" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Alt Kısım - Yazı ve Buton */}
        <div className="flex items-center justify-center gap-8">
          <h3 className="text-4xl font-poppins font-bold text-[#540814]">
            Yeni Bir Hayat İçin..
          </h3>
          <button className="bg-[#540814] text-white font-poppins px-10 py-4 rounded hover:bg-[#3a0509] transition-colors text-lg font-medium">
            Randevu Al
          </button>
        </div>
      </div>


    </section>
    <div className='mt-12 w-full h-auto'>
        <img src="/footer.png" alt="" />
      </div>
      </>
  );
};

export default NewLifeSection;
