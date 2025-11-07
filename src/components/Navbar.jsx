'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const mobileMenuRef = useRef(null);

  const mobileMenuItems = [
    {
      title: 'Hakkımda',
      items: [
        { label: 'Hakkımda', href: '/hakkimda' },
        { label: 'Ekibim', href: '/hakkimda/ekibim' }
      ]
    },
    {
      title: 'Yazılarım',
      items: [
        { label: 'Tüm Yazılar', href: '/yazilarim' }
      ]
    },
    {
      title: 'Yayınlar&Röportajlar',
      items: [
        { label: 'Röportajlar', href: '/yayinlarim/roportaj' },
        { label: 'Yazılı Yayınlar', href: '/yayinlarim/yaziliyayin' },
        { label: 'Podcast', href: '/yayinlarim/podcast' }
      ]
    },
    {
      title: 'Çalışma Alanlarım',
      items: [
        { label: 'Çift İlişki Terapisi', href: '/calismalanlarim/ciftterapi' },
        { label: 'Aile Terapisi', href: '/calismalanlarim/aileterapi' },
        { label: 'Bireysel Psikoloji', href: '/calismalanlarim/bireyselpsikolo' },
        { label: 'Eğitim', href: '/calismalanlarim/egitim' },
        { label: 'EMDR Terapisi', href: '/calismalanlarim/emdr' },
        { label: 'Süpervizyon', href: '/calismalanlarim/supervizyon' }
      ]
    },
    {
      title: 'Duyurular',
      items: [
        { label: 'Duyurular', href: '/duyuru' }
      ]
    },
    {
      title: 'Bize Ulaşın',
      items: [
        { label: 'İletişim', href: '/iletisim' }
      ]
    }
  ];

  // Menü dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const MenuDropdown = ({ title, items, menuKey }) => (
    <div 
      className="relative group hidden md:block"
      onMouseEnter={() => setActiveMenu(menuKey)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity py-2">
        {title}
        <ChevronDown size={16} />
      </button>
      
      {activeMenu === menuKey && (
        <div className="absolute top-full left-0 pt-0 z-50">
          <div className="bg-white shadow-lg rounded-lg py-2 w-56 min-w-max">
            {items.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="block px-6 py-3 hover:bg-gray-100 transition-colors text-[#540814]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <nav className="bg-white px-24 py-6 flex justify-between items-center border-b border-gray-200 relative">
        <Link href="/" className="w-[200px] h-auto font-poppins text-[#540814] hidden md:block">
          <img src="/logog.png" alt="" />
        </Link>

        {/* Mobile Logo */}
        <Link href="/" className="text-xl font-poppins text-[#540814] font-semibold hover:opacity-80 transition-opacity md:hidden">
          <img src="/logog.png" alt="" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="flex gap-8 items-center text-[#540814] font-poppins text-base hidden md:flex">
          <MenuDropdown 
            title="Hakkımda" 
            menuKey="about"
            items={[
              { label: 'Hakkımda', href: '/hakkimda' },
              { label: 'Ekibim', href: '/hakkimda/ekibim' }
            ]}
          />

          <MenuDropdown 
            title="Yazılarım" 
            menuKey="articles"
            items={[
              { label: 'Tüm Yazılar', href: '/yazilarim' }
            ]}
          />

          <MenuDropdown 
            title="Yayınlar&Röportajlar" 
            menuKey="publications"
            items={[
              { label: 'Röportajlar', href: '/yayinlarim/roportaj' },
              { label: 'Yazılı Yayınlar', href: '/yayinlarim/yaziliyayin' },
              { label: 'Podcast', href: '/yayinlarim/podcast' }
            ]}
          />

          <MenuDropdown 
            title="Çalışma Alanlarım" 
            menuKey="workAreas"
            items={[
              { label: 'Çift İlişki Terapisi', href: '/calismalanlarim/ciftterapi' },
              { label: 'Aile Terapisi', href: '/calismalanlarim/aileterapi' },
              { label: 'Bireysel Psikoloji', href: '/calismalanlarim/bireyselpsikolo' },
              { label: 'Eğitim', href: '/calismalanlarim/egitim' },
              { label: 'EMDR Terapisi', href: '/calismalanlarim/emdr' },
              { label: 'Süpervizyon', href: '/calismalanlarim/supervizyon' }
            ]}
          />

          <MenuDropdown 
            title="Duyurular" 
            menuKey="announcements"
            items={[
              { label: 'Duyurular', href: '/duyuru' }
            ]}
          />

          <MenuDropdown 
            title="Bize Ulaşın" 
            menuKey="contact"
            items={[
              { label: 'İletişim', href: '/iletisim' }
            ]}
          />
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-[#540814]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-white border-b border-gray-200 px-4 py-4 absolute top-20 left-0 right-0 z-40 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="space-y-2">
            {mobileMenuItems.map((menu, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === index ? null : index)}
                  className="w-full flex items-center justify-between py-3 px-4 text-[#540814] font-poppins hover:bg-gray-100 transition-colors rounded"
                >
                  <span className="text-base">{menu.title}</span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform ${expandedMobileMenu === index ? 'rotate-180' : ''}`}
                  />
                </button>

                {expandedMobileMenu === index && (
                  <div className="bg-gray-50 rounded">
                    {menu.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block px-6 py-2 text-sm text-[#540814] hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
