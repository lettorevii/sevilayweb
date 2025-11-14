import React from 'react';
import { ArrowRight } from 'lucide-react';
import DuyuruHead from '../../components/DuyuruHead';
import PageFooter from '../../components/PageFooter'

export default function TherapyCard() {
  return (
    <>
      <DuyuruHead />

      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 p-4 md:p-8">

        {/* Duyuru 1 */}
        <div className="w-full md:w-80 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <img src="/duyuru.png" alt="" className="w-full h-auto rounded-lg"/>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 leading-tight uppercase text-[#550613]">
              PSİKODİNAMİK PERSPEKTİFTEN İLİŞKİLERE BAKIŞ OKUMA GRUBU
            </h2>
            
            <p className="text-sm leading-relaxed mb-4 text-[#494949]">
              Çift Terapisi, çiftlerin ilişkilerini odak noktasına alarak, ilişkilerinde yaşadıkları duygusal ve sosyal meselelerin değerlendirilip, değişim dönüşümlerin sağlancığı psikoterapi biçimidir.
            </p>
            
            <button 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#550613' }}
            >
              Devamını Oku
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Duyuru 2 */}
        <div className="w-full md:w-80 bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <img src="/duyuru.png" alt="" className="w-full h-auto rounded-lg"/>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3 leading-tight uppercase text-[#550613]">
              PSİKODİNAMİK PERSPEKTİFTEN İLİŞKİLERE BAKIŞ OKUMA GRUBU
            </h2>
            
            <p className="text-sm leading-relaxed mb-4 text-[#494949]">
              Çift Terapisi, çiftlerin ilişkilerini odak noktasına alarak, ilişkilerinde yaşadıkları duygusal ve sosyal meselelerin değerlendirilip, değişim dönüşümlerin sağlancığı psikoterapi biçimidir.
            </p>
            
            <button 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#550613' }}
            >
              Devamını Oku
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>

      <PageFooter />
    </>
  );
}
