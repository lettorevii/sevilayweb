'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const MenuDropdown = ({ title, items, menuKey }) => (
    <div 
      className="relative group"
      onMouseEnter={() => setActiveMenu(menuKey)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity py-2">
        {title}
        <ChevronDown size={16} />
      </button>
      
      {/* Dropdown - gap olmadan direkt button altında */}
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
    <nav className="bg-white px-24 py-6 flex justify-between items-center border-b border-gray-200 relative">
      <Link href="/" className="text-3xl font-poppins text-[#540814] font-semibold hover:opacity-80 transition-opacity">
        Dr. Sevilay<br /><span className='px-10'>Abudaram</span>
      </Link>
      
      <div className="flex gap-8 items-center text-[#540814] font-poppins text-base">
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
            { label: 'Çift İlişki Terapisi', href: '/calismalanlarim/ciftterapi' }
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
    </nav>
  );
};

export default Navbar;
