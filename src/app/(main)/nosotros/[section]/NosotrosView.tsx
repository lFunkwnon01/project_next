'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const TIMELINE_DATA = [
  { year: '1988', title: 'Fundación BPCC', desc: 'Inicio oficial de operaciones, estableciendo las bases del comercio bilateral.' },
  { year: '1990-2000', title: 'Consolidación', desc: 'Crecimiento sostenido y expansión de la red de socios clave.' },
  { year: '2010s', title: 'Networking Estratégico', desc: 'Década de alto impacto con desayunos políticos y conferencias sectoriales.' },
  { year: '2023/24', title: '37 Años de Solidez', desc: 'Reconocimiento público y madurez institucional.' },
  { year: '2024-25', title: 'Innovación & Summit', desc: 'Lanzamiento del Summit 2025 con foco en tecnología y sostenibilidad.' },
  { year: '2024-26', title: 'Best Network', desc: 'Posicionamiento líder como "Best Network for Business & Community".' },
];

const BOARD_MEMBERS = [
  { name: 'ejemplo_1', role: 'Presidente', img: 'https://ui-avatars.com/api/?name=Enrique+Anderson&background=0D8ABC&color=fff' },
  { name: 'ejemplo_2', role: 'Vicepresidente', img: 'https://ui-avatars.com/api/?name=Felipe+Morris&background=0D8ABC&color=fff' },
  { name: 'ejemplo_3', role: 'Director', img: 'https://ui-avatars.com/api/?name=Rafael+Ramos&background=0D8ABC&color=fff' },
  { name: 'ejemplo_4', role: 'Director', img: 'https://ui-avatars.com/api/?name=Alex+Fort&background=0D8ABC&color=fff' },
  { name: 'ejemplo_5', role: 'Directora', img: 'https://ui-avatars.com/api/?name=Ines+Temple&background=0D8ABC&color=fff' },
  { name: 'ejemplo_6', role: 'Director', img: 'https://ui-avatars.com/api/?name=Juan+Carlos&background=0D8ABC&color=fff' },
];

const TEAM_MEMBERS = [
  { name: 'ejemplo_1', role: 'General Manager', img: 'https://ui-avatars.com/api/?name=Fabricio+Ladera&background=e20820&color=fff' },
  { name: 'ejemplo_2', role: 'Head of Consulting', img: 'https://ui-avatars.com/api/?name=Sergio+Delgado&background=e20820&color=fff' },
  { name: 'ejemplo_3', role: 'Head of Events', img: 'https://ui-avatars.com/api/?name=Angel+Toshio&background=e20820&color=fff' },
  { name: 'ejemplo_4', role: 'Marketing & Comms', img: 'https://ui-avatars.com/api/?name=Valeria+Rivas&background=e20820&color=fff' },
];

const milestoneImages = [
  'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1591115765373-520b7a20f084?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522071823990-b997ee7115da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
];

export default function NosotrosView() {
  const params = useParams();
  const section = (params.section as string) || 'rol';
  const scrollRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState({ socios: 0, representantes: 0, eventos: 0 });
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    if (section !== 'rol') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          const targets = { socios: 350, representantes: 1200, eventos: 80 };
          let currentStep = 0;
          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            setCounters({
              socios: Math.floor(targets.socios * easeOutQuad),
              representantes: Math.floor(targets.representantes * easeOutQuad),
              eventos: Math.floor(targets.eventos * easeOutQuad),
            });
            if (currentStep >= steps) {
              setCounters(targets);
              clearInterval(timer);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, section]);

  const renderContent = () => {
    switch (section) {


      case 'impacto':
        return (
          <div className="w-full bg-[#fcfcfc] pb-24">
            <div className="w-full h-[1px] bg-gray-300 mb-10"></div>
            <h2 className="text-center font-serif text-4xl md:text-[44px] text-[#555] font-bold">Britcham en Perú</h2>
            <div className="w-full h-[1px] bg-gray-300 mt-10 mb-20"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 min-h-[500px]">
              <div className="flex flex-col justify-center max-w-[500px]">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#555] mb-8 transition-opacity duration-300">
                  {TIMELINE_DATA[activeMilestone].title === 'Fundación BPCC' ? 'Impacto' : TIMELINE_DATA[activeMilestone].title}
                </h3>
                <p className="text-[#666] text-lg font-sans leading-relaxed min-h-[120px] transition-opacity duration-300">
                  {activeMilestone === 0
                    ? 'El Reino Unido representa aproximadamente el 19% del total de las contribuciones de capital en el país, compitiendo con España (18%) y Estados Unidos (11%) por el primer puesto...'
                    : TIMELINE_DATA[activeMilestone].desc}
                </p>

                {/* DOT PAGINATION */}
                <div className="mt-16 w-full max-w-[350px]">
                  <div className="relative flex items-center w-full h-[2px] bg-gray-300">
                    {TIMELINE_DATA.slice(0, 5).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMilestone(i)}
                        className="absolute w-4 h-4 rounded-full -ml-2 -mt-2 top-1/2 transition-colors duration-300 outline-none"
                        style={{ left: `${(i / 4) * 100}%`, backgroundColor: activeMilestone === i ? '#0151F2' : '#c9c9c9' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE PLACEHOLDER */}
              <div className="w-full h-[400px] lg:h-auto bg-[#8f8f8f] flex items-center justify-center relative group">
                <span className="text-[#777] font-bold text-2xl tracking-wide select-none">IMAGEN BPCC</span>

                {/* Invisible click layer just to let users still cycle images by clicking right side like old behavior, or left/right navigation */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setActiveMilestone(m => (m + 1) % Math.min(TIMELINE_DATA.length, 5))}
                ></div>
              </div>
            </div>
          </div>
        );

      case 'directorio':
        return (
          <div className="w-full bg-white pb-24">
            <div className="w-full h-[1px] bg-gray-300 mb-12"></div>
            <h2 className="text-center font-serif text-4xl md:text-[44px] text-[#555] mb-20 font-bold">Directorio</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
              {BOARD_MEMBERS.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-full aspect-[3/4] bg-[#e3e3e3] mb-6 relative overflow-hidden group">
                    {/* Placeholder for future images as requested: "solo pon como el tamaño de las imagenes para despues insertarlas" */}
                  </div>
                  <h4 className="font-sans font-bold text-sm md:text-[15px] text-[#333] mb-1">
                    {member.role === 'Presidente' ? 'President' : member.role === 'Directora' ? 'Director' : member.role}
                  </h4>
                  <p className="font-sans font-bold text-sm md:text-[15px] text-[#555]">
                    {member.name} {member.name.includes('Anderson') ? 'OBE' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'equipo':
        return (
          <div className="w-full bg-white pb-24">
            <div className="w-full h-[1px] bg-gray-300 mb-10"></div>
            <h2 className="text-center font-serif text-4xl md:text-[44px] text-[#555] font-bold">Equipo</h2>
            <div className="w-full h-[1px] bg-gray-300 mt-10 mb-20"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
              {TEAM_MEMBERS.map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-full aspect-[3/4] bg-[#e3e3e3] mb-6 relative overflow-hidden group">
                    {/* Placeholder for future images */}
                  </div>
                  <h4 className="font-sans font-bold text-sm md:text-[15px] text-[#333] mb-1">
                    {member.role}
                  </h4>
                  <p className="font-sans font-bold text-sm md:text-[15px] text-[#555]">
                    {member.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        // Redirect if an invalid section (like 'rol' if visited directly) is requested
        if (typeof window !== 'undefined') {
          window.location.replace('/nosotros');
        }
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-sans">
      <section className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover brightness-[0.5] grayscale-[20%]"
            alt="Nosotros Hero"
          />
        </div>

        {/* SUB NAV BAR OVERLAY */}
        <div className="absolute bottom-0 right-0 w-full z-10 p-6 md:p-12 md:pb-16 flex justify-end">
          <nav className="flex flex-wrap items-center gap-6 md:gap-10 text-white font-inter text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
            {[
              { id: 'rol', href: '/nosotros', label: 'Nuestro Rol' },
              { id: 'directorio', href: '/nosotros/directorio', label: 'Directorio' },
              { id: 'equipo', href: '/nosotros/equipo', label: 'Equipo' },
              { id: 'impacto', href: '/nosotros/impacto', label: 'Impacto' }
            ].map((item) => {
              const isActive = item.id === 'rol' ? section === '' || section === 'rol' : section === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative group transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 w-full h-[3px] bg-white transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="relative z-0 mt-16 md:mt-20 pb-20 w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full transition-all duration-500">
          {renderContent()}
        </div>
      </section>
    </div>
  );
}
