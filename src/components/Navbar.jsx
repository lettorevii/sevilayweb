'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [publicationsOpen, setPublicationsOpen] = useState(false);
  const [workAreasOpen, setWorkAreasOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="bg-white px-24 py-6 flex justify-between items-center border-b border-gray-200 relative">
      <Link href="/" className="text-3xl font-poppins text-[#540814] font-semibold hover:opacity-80 transition-opacity">
        Dr. Sevilay<br /><span className='px-10'>Abudaram</span>
      </Link>
      
      <div className="flex gap-8 items-center text-[#540814] font-poppins text-base">
        {/* Hakkımda Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Hakkımda
            <ChevronDown size={16} />
          </button>
          
          {aboutOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link 
                href="/hakkimda" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Hakkımda
              </Link>
              <Link 
                href="/hakkimda/ekibim" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Ekibim
              </Link>
            </div>
          )}
        </div>
        
        {/* Yazılarım Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setArticlesOpen(true)}
          onMouseLeave={() => setArticlesOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Yazılarım
            <ChevronDown size={16} />
          </button>
          
          {articlesOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link 
                href="/yazilarim" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Tüm Yazılar
              </Link>
            </div>
          )}
        </div>
        
        {/* Yayınlar & Röportajlar Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setPublicationsOpen(true)}
          onMouseLeave={() => setPublicationsOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Yayınlar&Röportajlar
            <ChevronDown size={16} />
          </button>
          
          {publicationsOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link 
                href="/yayinlarim/roportaj" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Röportajlar
              </Link>
              <Link 
                href="/yayinlarim/yaziliyayin" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Yazılı Yayınlar
              </Link>
              <Link 
                href="/yayinlarim/podcast" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Podcast
              </Link>
            </div>
          )}
        </div>
        
        {/* Çalışma Alanlarım Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setWorkAreasOpen(true)}
          onMouseLeave={() => setWorkAreasOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Çalışma Alanlarım
            <ChevronDown size={16} />
          </button>
          
          {workAreasOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link 
                href="/calismalanlarim/ciftterapi" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                Çift İlişki Terapisi
              </Link>
            </div>
          )}
        </div>
        
        {/* Bize Ulaşın Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setContactOpen(true)}
          onMouseLeave={() => setContactOpen(false)}
        >
          <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            Bize Ulaşın
            <ChevronDown size={16} />
          </button>
          
          {contactOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
              <Link 
                href="/iletisim" 
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                İletişim
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
