'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      { name: 'Nuestro Rol', href: '/nosotros', featured: true },
      { name: 'Directorio', href: '/nosotros/directorio' },
      { name: 'Equipo', href: '/nosotros/equipo' },
      { name: 'Impacto', href: '/nosotros/impacto' },
    ]
  },
  {
    name: 'Investigación',
    href: '/investigacion',
    description: 'Información estratégica y análisis económico para la toma de decisiones.',
    subItems: [
      { name: 'Economic Report', href: '/investigacion' },
      { name: 'Opportunities', href: '/investigacion/opportunities' },
      { name: 'Bilateral', href: '/investigacion/relaciones-bilaterales' },
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
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
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

  const isBackgroundActive = isScrolled || hoveredItem || isHeaderOpen;

  const logoColor = 'white';
  const textColor = 'text-white';
  const bgColor = isBackgroundActive ? '' : 'bg-transparent';

  const gradientStyle = isBackgroundActive
    ? { background: 'linear-gradient(90deg, #003399 33%, #0051F2 73%)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }
    : {};

  const transform = isVisible ? 'translateY(0)' : 'translateY(-100%)';

  const activeItem = NAV_DATA.find(item => item.name === hoveredItem);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out font-sans ${bgColor}`}
      style={{ transform, ...gradientStyle }}
    >
      <div className={`max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ease-in-out ${isHeaderOpen ? 'max-h-0 opacity-0 pointer-events-none' : 'h-20 lg:h-24 opacity-100 overflow-visible'}`}>

        {/* LOGO */}
        <Link href="/" className="flex items-center z-50 transition-opacity duration-300">
          <Image
            src="/assets/logotipo_white.png"
            alt="Cámara de Comercio Peruano Británica | BritCham Peru"
            width={240}  // 🎛️ AJUSTA EL ANCHO AQUÍ (en px)
            height={60}  // 🎛️ AJUSTA EL ALTO AQUÍ (en px)
            className="object-contain"
            style={{ 
              width: '240px',   // 🎛️ CONTROL MANUAL DE ANCHO
              height: 'auto',    // Mantiene la proporción
              display: 'block'
            }}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8 h-full transition-all duration-300">
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
                <span className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${isBackgroundActive ? 'bg-white' : 'bg-white'} ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            className={`${textColor} hover:opacity-70 transition-all duration-300 transform hover:scale-110`}
            onClick={() => setIsHeaderOpen(!isHeaderOpen)}
          >
            <Image
              src={isHeaderOpen ? "/assets/Icon_2.png" : "/assets/Icon.png"}
              alt="Toggle Menu"
              width={isHeaderOpen ? 30 : 16}
              height={isHeaderOpen ? 30 : 16}
              className="transition-all duration-300 ease-in-out hover:opacity-80 active:scale-90"
            />
          </button>

          <div className="relative">
            <button
              className={`${textColor} hover:opacity-70 transition-all duration-300 transform hover:scale-110 flex items-center gap-2`}
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Image src="/assets/mundi.png" alt="Language" width={24} height={24} />
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 w-24 overflow-hidden border border-gray-100 z-[60]">
                <button className="w-full px-4 py-2 text-xs font-bold text-gray-800 hover:bg-brand-blue-bright hover:text-white transition-colors text-left">
                  ENG
                </button>
                <button className="w-full px-4 py-2 text-xs font-bold text-gray-800 hover:bg-brand-blue-bright hover:text-white transition-colors text-left">
                  ESP
                </button>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button className={`lg:hidden p-2 ${textColor}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* FOOTER-HEADER SECTION (Image 4) */}
      {/* FOOTER-HEADER SECTION */}
      <div
        className={`w-full transition-all duration-500 ease-in-out border-t border-white/10 overflow-hidden ${isHeaderOpen ? 'max-h-[500px] opacity-100 py-16' : 'max-h-0 opacity-0 py-0'}`}
        style={{
          background: 'linear-gradient(90deg, #003399 33%, #0051F2 73%)',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-5 gap-24 text-white items-start">

          {/* COL 1: LOGO */}
          <div className="col-span-1">
            <Image
              src="/assets/logotipo_white.png"
              alt="BritCham Logo"
              width={460} // Puedes cambiar este valor en píxeles
              height={460} // Puedes cambiar este valor en píxeles
              className="brightness-0 invert opacity-100 scale-130 origin-left"
            />

          </div>

          {/* COL 2: CONTACTO */}
          <div className="col-span-1">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-4 text-xs opacity-90">
              <p>Telefono<br /><span className="font-medium">+51 999 999 999</span></p>
              <p>Correo<br /><span className="font-medium">bpcc@bpcc.org.pe</span></p>
            </div>
          </div>

          {/* COL 3: DIRECCIÓN */}
          <div className="col-span-1">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Dirección</h4>
            <p className="text-xs opacity-90 leading-relaxed">
              Torre Parque Mar<br />
              Av. José Larco 1301<br />
              Miraflores 15074<br />
              Perú
            </p>
          </div>

          {/* COL 4 y 5: HORARIOS Y REDES (Agrupados para que no se separen) */}
          <div className="col-span-2 flex justify-start gap-16">
            {/* Horarios */}
            <div>
              <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">Horarios</h4>
              <div className="text-xs opacity-90 space-y-1">
                <p>Lunes a Viernes</p>
                <p>9am - 5pm</p>
                <p className="opacity-60">(Lima, GMT-5)</p>
              </div>
            </div>

            {/* Redes y Botón de Cierre */}
            <div className="flex gap-5 items-center -mt-26 ml-auto mr-11">
              <Link href="https://www.facebook.com/..." target="_blank" className="hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/..." target="_blank" className="hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44z" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/..." target="_blank" className="hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>

              {/* BOTÓN DE CIERRE (Icon_2) */}
              <button
                onClick={() => setIsHeaderOpen(false)}
                className="hover:scale-110 transition-transform ml-2"
              >
                <Image
                  src="/assets/Icon_2.png"
                  alt="Close"
                  width={33}
                  height={33}
                  className="brightness-0 invert active:scale-90"
                />
              </button>
            </div>
          </div>

        </div>
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
