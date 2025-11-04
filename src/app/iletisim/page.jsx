import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import DailyPostsSection from '@/components/ContactHead';

const ContactPage = () => {
  return (
    <>
      <div>
        <DailyPostsSection />
      </div>

      <div className="bg-[#f5f5f5] min-h-screen py-12 md:py-20">
        <div className="mx-auto max-w-[1140px] px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Sol Taraf - Form */}
            <div>
              <h1 style={{ fontSize: 'clamp(20px, 5vw, 18pt)' }} className="font-poppins font-bold text-[#540814] mb-4">
                Bizimle İletişime Geçin!
              </h1>
              <p style={{ fontSize: 'clamp(12px, 4vw, 14pt)' }} className="font-poppins text-[#540814] mb-8">
                Ekibimiz en kısa sürede size dönüş sağlayacaktır.
              </p>

              <form className="space-y-4 md:space-y-6">
                {/* İsim ve E-Posta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label style={{ fontSize: 'clamp(12px, 3vw, 14pt)' }} className="block font-poppins text-[#540814] mb-2">
                      İsim *
                    </label>
                    <input 
                      type="text" 
                      placeholder="İsim"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#f0f0f0] border-none rounded font-poppins text-[#540814] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#540814]"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 'clamp(12px, 3vw, 14pt)' }} className="block font-poppins text-[#540814] mb-2">
                      E-Posta *
                    </label>
                    <input 
                      type="email" 
                      placeholder="E-Posta"
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#f0f0f0] border-none rounded font-poppins text-[#540814] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#540814]"
                    />
                  </div>
                </div>

                {/* Telefon */}
                <div>
                  <label style={{ fontSize: 'clamp(12px, 3vw, 14pt)' }} className="block font-poppins text-[#540814] mb-2">
                    Telefon *
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Telefon"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#f0f0f0] border-none rounded font-poppins text-[#540814] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#540814]"
                  />
                </div>

                {/* Mesaj */}
                <div>
                  <label style={{ fontSize: 'clamp(12px, 3vw, 14pt)' }} className="block font-poppins text-[#540814] mb-2">
                    Mesaj *
                  </label>
                  <textarea 
                    placeholder="Mesaj"
                    rows="6"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#f0f0f0] border-none rounded font-poppins text-[#540814] placeholder-[#999] resize-none focus:outline-none focus:ring-2 focus:ring-[#540814]"
                  />
                </div>
              </form>

              {/* Sosyal Medya İkonları */}
              <div className="flex gap-3 md:gap-4 mt-6 md:mt-8">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 md:w-12 h-10 md:h-12 bg-[#540814] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 md:w-12 h-10 md:h-12 bg-[#540814] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 md:w-12 h-10 md:h-12 bg-[#540814] rounded flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ Taraf - İletişim Bilgileri */}
            <div className="space-y-8 md:space-y-12">
              {/* Telefon */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 md:w-16 h-12 md:h-16 border-2 border-[#540814] rounded flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 md:w-7 h-5 md:h-7 text-[#540814]" />
                </div>
                <div>
                  <a 
                    href="tel:05322298477" 
                    style={{ fontSize: 'clamp(12px, 4vw, 14pt)' }}
                    className="font-poppins text-[#540814] hover:opacity-70 transition-opacity break-all"
                  >
                    0532 229 84 77
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 md:w-16 h-12 md:h-16 border-2 border-[#540814] rounded flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 md:w-7 h-5 md:h-7 text-[#540814]" />
                </div>
                <div>
                  <a 
                    href="mailto:info@drsevilayabudaram.com" 
                    style={{ fontSize: 'clamp(12px, 4vw, 14pt)' }}
                    className="font-poppins text-[#540814] hover:opacity-70 transition-opacity break-all"
                  >
                    info@drsevilayabudaram.com
                  </a>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-12 md:w-16 h-12 md:h-16 border-2 border-[#540814] rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 md:w-7 h-5 md:h-7 text-[#540814]" />
                </div>
                <div>
                  <p style={{ fontSize: 'clamp(12px, 4vw, 14pt)' }} className="font-poppins text-[#540814] leading-relaxed">
                    Teşvikiye Mah. Poyracık Sk.<br />
                    Feza Apt. No: 18 D: 4 Kat: -1<br />
                    Nişantaşı Şişli İstanbul
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
