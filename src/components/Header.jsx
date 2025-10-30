import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#EEE5E0] px-24 py-5 flex justify-between items-center">
      <div className="text-sm text-[#540814] font-montserrat">
        Teşvikiye Mah. Poyracık Sk. Feza Apt. No: 18 D: 4 Kat: -1 Nişantaşı Şişli İstanbul
      </div>
      <div className="flex gap-8 items-center text-sm text-[#540814] font-montserrat">
        <a href="tel:05322298477" className="hover:text-[#3a0509] transition-colors">
          0532 229 84 77
        </a>
        <a href="mailto:info@drsevilayabudaram.com" className="hover:text-[#3a0509] transition-colors">
          info@drsevilayabudaram.com
        </a>
      </div>
    </header>
  );
};

export default Header;
