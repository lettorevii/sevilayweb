import React from 'react';

const PodcastSection = () => {
  return (<>
          <div className="w-full  h-16 justify-center text-center mt-16">
            <div><img src="isitsel.png" alt="" /></div>
        <p className="text-2xl font-poppins italic text-[#540814]">
        </p>
      </div>
    <section className="bg-white px-24 py-20">
      {/* Başlık */}
      <h2 className="text-5xl font-poppins font-bold text-[#540814] text-center mb-12">
        
      </h2>
      
      {/* Podcast Görselleri */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {/* İlk Podcast */}
        <div className="w-full">
          <img 
            src="/podcast1.png" 
            alt="Sosyal medya, toplumsal güzellik algısını nasıl şekillendiriyor?" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* İkinci Podcast */}
        <div className="w-full">
          <img 
            src="/podcast3.png" 
            alt="Pandemi ve Psikoloji: Sevilay Sitrava" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default PodcastSection;
