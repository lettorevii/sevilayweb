import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#eee5e0] px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-8 items-start md:items-center justify-between">
          
          {/* Adres */}
          <div className="text-[#540814] font-poppins text-xs sm:text-sm md:text-xs lg:text-[14px] line-clamp-2 md:line-clamp-none">
            Teşvikiye Mah. Poyracık Sk. Feza Apt. No: 18 D: 4 Kat: -1 Nişantaşı Şişli İstanbul
          </div>

          {/* İletişim Bilgileri */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-8 items-start sm:items-center text-[#540814] font-poppins">
            <a 
              href="tel:05322298477" 
              className="text-xs sm:text-sm md:text-xs lg:text-[14px] hover:text-[#3a0509] transition-colors whitespace-nowrap"
            >
              0532 229 84 77
            </a>
            <a 
              href="mailto:info@drsevilayabudaram.com" 
              className="text-xs sm:text-sm md:text-xs lg:text-[14px] hover:text-[#3a0509] transition-colors break-all sm:break-normal"
            >
              info@drsevilayabudaram.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
