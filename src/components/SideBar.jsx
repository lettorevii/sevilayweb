'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: 'EMDR terapisi', href: '/calismalanlarim/emdr' },
    { label: 'Bireysel Psikoterapi', href: '/calismalanlarim/bireyselpsikolo' },
    { label: 'Çift Terapisi', href: '/calismalanlarim/ciftterapi' },
    { label: 'Aile Terapisi', href: '/calismalanlarim/aileterapi' },
    { label: 'Süpervizyon', href: '/calismalanlarim/supervizyon' },
    { label: 'Eğitim', href: '/calismalanlarim/egitim' }
  ];

  return (
    <div className="w-full my-24 mx-6 md:w-80 bg-[#f6f2ef] p-8">
      <nav className="space-y-0">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={`block py-4 text-[#550613] font-poppins text-lg transition-opacity hover:opacity-70 ${
                pathname === item.href ? 'font-semibold' : 'font-normal'
              }`}
            >
              {item.label}
            </Link>
            {index < menuItems.length - 1 && (
              <div className="border-b border-[#550613] opacity-30"></div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
