import React from 'react';
import { ArrowRight } from 'lucide-react';
import DuyuruHead from  '../../components/DuyuruHead';
import PageFooter from '../../components/PageFooter'


export default function TherapyCard() {
  return (
    <>
    <DuyuruHead />
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-sm w-full">
        {/* Image Container */}
        <div className="mb-6">
         <img src="/duyuru.png" alt="" />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-xl font-bold mb-3 leading-tight uppercase" style={{ color: '#550613' }}>
            PSİKODİNAMİK PERSPEKTİFTEN İLİŞKİLERE BAKIŞ OKUMA GRUBU
          </h2>
          
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#494949' }}>
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