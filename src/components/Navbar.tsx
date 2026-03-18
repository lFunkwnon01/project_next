'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  description?: string;
  subItems?: { name: string; href: string; featured?: boolean }[];
}

const NAV_DATA: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { 
    name: 'Nosotros', 
    href: '/nosotros',
    description: '37 años fortaleciendo la relación empresarial entre Perú y Reino Unido.',
    subItems: [
      { name: 'Britcham en Peru', href: '/nosotros/rol' },
      { name: 'Historia', href: '/nosotros/historia' },
      { name: 'Directorio', href: '/nosotros/directorio', featured: true },
      { name: 'Equipo', href: '/nosotros/equipo' },
    ]
  },
  { 
    name: 'Investigación', 
    href: '/investigacion',
    description: 'Información estratégica y análisis económico para la toma de decisiones.',
    subItems: [
      { name: 'Economic Report', href: '/investigacion' },
      { name: 'Opportunities', href: '/investigacion' },
      { name: 'Bilateral', href: '/investigacion' },
    ]
  },
  { 
    name: 'Servicios', 
    href: '/servicios',
    description: 'Soluciones a medida para potenciar su crecimiento comercial.',
    subItems: [
      { name: 'Estudios de Mercado', href: '/servicios' },
      { name: 'Networking', href: '/socios' },
      { name: 'Membresías', href: '/membresia' },
      { name: 'Socios Corporativos', href: '/socios' },
    ]
  },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Eventos', href: '/eventos' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  const logoColor = isScrolled || hoveredItem ? '#243875' : 'white';
  const textColor = isScrolled || hoveredItem ? 'text-gray-800' : 'text-white';
  const bgColor = isScrolled || hoveredItem ? 'bg-white shadow-md border-b border-gray-100' : 'bg-transparent';
  const transform = isVisible ? 'translateY(0)' : 'translateY(-100%)';

  const activeItem = NAV_DATA.find(item => item.name === hoveredItem);

  return (
    <header 
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out font-sans ${bgColor}`}
      style={{ transform }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 lg:h-24">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 lg:w-12 lg:h-12" fill={logoColor} viewBox="0 0 48 48">
              <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-xl lg:text-2xl font-bold tracking-tight ${textColor}`}>BritCham</span>
              <span className={`text-[8px] lg:text-[9px] font-bold uppercase tracking-widest pl-0.5 ${isScrolled || hoveredItem ? 'text-gray-400' : 'text-white/70'}`}>Peru</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {NAV_DATA.map((link) => (
            <div 
              key={link.name}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href={link.href}
                className={`text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-300 relative group py-2 ${textColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${isScrolled || hoveredItem ? 'bg-brand-blue-deep' : 'bg-white'} ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`${textColor} hover:opacity-70 transition-opacity`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className={`${textColor} hover:opacity-70 transition-opacity`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button className={`lg:hidden p-2 ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* MEGA MENU */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${hoveredItem && activeItem?.subItems ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
        onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1440px] mx-auto px-12 py-12 grid grid-cols-12 gap-12">
          {/* LEFT: Description */}
          <div className="col-span-4 border-r border-gray-100 pr-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeItem?.name}</h3>
            <div className="w-8 h-px bg-gray-300 mb-6"></div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {activeItem?.description}
            </p>
          </div>

          {/* RIGHT: Links */}
          <div className="col-span-8 grid grid-cols-2 gap-x-12 gap-y-4">
            {activeItem?.subItems?.map((sub) => (
              <Link 
                key={sub.name} 
                href={sub.href} 
                className={`text-sm font-medium transition-colors flex items-center gap-2 group ${sub.featured ? 'text-brand-blue-bright font-bold' : 'text-gray-600 hover:text-brand-blue-bright'}`}
                onClick={() => setHoveredItem(null)}
              >
                <span className={`w-1.5 h-1.5 rounded-full transition-colors ${sub.featured ? 'bg-brand-blue-bright' : 'bg-transparent group-hover:bg-brand-blue-bright'}`}></span>
                {sub.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-brand-dark transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <button className="absolute top-8 right-8 text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {NAV_DATA.map((link) => (
          <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl font-serif font-bold uppercase tracking-widest hover:text-brand-blue-bright transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
