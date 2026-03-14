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
  { name: 'Enrique Anderson', role: 'Presidente', img: 'https://ui-avatars.com/api/?name=Enrique+Anderson&background=0D8ABC&color=fff' },
  { name: 'Felipe Morris', role: 'Vicepresidente', img: 'https://ui-avatars.com/api/?name=Felipe+Morris&background=0D8ABC&color=fff' },
  { name: 'Rafael Ramos', role: 'Director', img: 'https://ui-avatars.com/api/?name=Rafael+Ramos&background=0D8ABC&color=fff' },
  { name: 'Alex Fort', role: 'Director', img: 'https://ui-avatars.com/api/?name=Alex+Fort&background=0D8ABC&color=fff' },
  { name: 'Inés Temple', role: 'Directora', img: 'https://ui-avatars.com/api/?name=Ines+Temple&background=0D8ABC&color=fff' },
  { name: 'Juan Carlos Mathews', role: 'Director', img: 'https://ui-avatars.com/api/?name=Juan+Carlos&background=0D8ABC&color=fff' },
];

const TEAM_MEMBERS = [
  { name: 'Fabricio Ladera', role: 'General Manager', img: 'https://ui-avatars.com/api/?name=Fabricio+Ladera&background=e20820&color=fff' },
  { name: 'Sergio Delgado', role: 'Head of Consulting', img: 'https://ui-avatars.com/api/?name=Sergio+Delgado&background=e20820&color=fff' },
  { name: 'Angel Toshio', role: 'Head of Events', img: 'https://ui-avatars.com/api/?name=Angel+Toshio&background=e20820&color=fff' },
  { name: 'Valeria Rivas', role: 'Marketing & Comms', img: 'https://ui-avatars.com/api/?name=Valeria+Rivas&background=e20820&color=fff' },
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
      case 'rol':
        return (
          <div className="space-y-24">
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary italic leading-tight">Excelencia en el Comercio Bilateral</h2>
                <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-8 border-primary hover:shadow-2xl transition-all group rounded-xl">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 text-primary">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-5 text-primary">Misión</h3>
                  <p className="text-gray-500 leading-relaxed">Fomentar el crecimiento de nuestros socios a través de la excelencia comercial y la generación de oportunidades estratégicas de alto nivel.</p>
                </div>
                <div className="bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-8 border-accent hover:shadow-2xl transition-all group rounded-xl">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all transform group-hover:-rotate-6 text-accent">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-5 text-gray-900">Visión</h3>
                  <p className="text-gray-500 leading-relaxed">Ser el referente indiscutible del éxito empresarial bilateral en la región, consolidándonos como el puente clave con el Reino Unido.</p>
                </div>
                <div className="bg-white p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-t-8 border-navy-900 hover:shadow-2xl transition-all group rounded-xl">
                  <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 group-hover:text-white transition-all transform group-hover:rotate-6 text-navy-900">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-5 text-gray-900">Valores</h3>
                  <p className="text-gray-500 leading-relaxed">Integridad, Transparencia e Innovación. Promovemos la colaboración de clase mundial y el respeto empresarial mutuo.</p>
                </div>
              </div>
            </div>

            <div ref={statsRef} className="py-20 bg-primary/5 rounded-[2rem] border border-primary/10 overflow-hidden relative">
              <div className="max-w-6xl mx-auto px-10 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                  <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-4">Métricas BritCham</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary italic leading-tight">Nuestra Huella de Impacto</h2>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex flex-col items-center group cursor-default">
                    <span className="text-7xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.socios}+</span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-4">Socios Corporativos</span>
                    <div className="w-8 h-[2px] bg-accent mt-4"></div>
                  </div>
                  <div className="flex flex-col items-center group cursor-default">
                    <span className="text-7xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.representantes.toLocaleString()}+</span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-4">Líderes de Red</span>
                    <div className="w-8 h-[2px] bg-accent mt-4"></div>
                  </div>
                  <div className="flex flex-col items-center group cursor-default">
                    <span className="text-7xl font-bold text-primary transition-transform group-hover:scale-110 duration-300">{counters.eventos}+</span>
                    <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-4">Eventos Anuales</span>
                    <div className="w-8 h-[2px] bg-accent mt-4"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center pb-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-accent"></span>
                  <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Nuestro Rol Estratégico</span>
                </div>
                <h2 className="text-5xl font-serif font-bold text-primary italic leading-tight">Facilitando el Crecimiento Bilateral</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  &ldquo;Somos el motor del comercio bilateral entre Perú y el Reino Unido, facilitando un diálogo constructivo entre gobiernos y el sector privado.&rdquo;
                </p>
                <div className="bg-white p-8 border-l-8 border-primary shadow-lg rounded-r-2xl">
                  <p className="text-gray-500 leading-relaxed italic">BPCC actúa como un facilitador crítico en la relación bilateral, apoyando misiones comerciales, identificando barreras regulatorias y promoviendo activamente la inversión extranjera directa de alto impacto.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Advocacy Gubernamental', desc: 'Representamos los intereses de nuestros socios ante autoridades de ambos países.' },
                  { title: 'Inteligencia de Mercado', desc: 'Proveer reportes y análisis sectoriales exclusivos para la toma de decisiones.' },
                  { title: 'Networking de Alto Nivel', desc: 'Conectar a los tomadores de decisiones a través de una red exclusiva.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 border border-gray-100 rounded-2xl hover:border-accent group transition-all">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors font-bold">{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm tracking-widest mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'historia':
        return (
          <div className="-mx-6 md:-mx-12 -mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              <div className="bg-white p-12 lg:p-24 flex flex-col justify-center relative">
                <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-4">
                    <span className="h-[2px] w-12 bg-accent"></span>
                    <span className="text-accent font-bold text-lg tracking-[0.4em]">{TIMELINE_DATA[activeMilestone].year}</span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-serif font-bold text-primary italic leading-tight" key={`title-${activeMilestone}`}>
                    {TIMELINE_DATA[activeMilestone].title}
                  </h2>
                  <p className="text-xl text-gray-500 leading-relaxed font-light" key={`desc-${activeMilestone}`}>
                    {TIMELINE_DATA[activeMilestone].desc}
                  </p>
                  <div className="pt-12 flex items-center gap-10">
                    <button onClick={() => setActiveMilestone(m => (m - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length)} className="group flex flex-col items-center gap-2">
                      <div className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-primary">Anterior</span>
                    </button>
                    <div className="flex gap-2">
                      {TIMELINE_DATA.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === activeMilestone ? 'w-8 bg-accent' : 'w-2 bg-gray-100'}`}></div>
                      ))}
                    </div>
                    <button onClick={() => setActiveMilestone(m => (m + 1) % TIMELINE_DATA.length)} className="group flex flex-col items-center gap-2">
                      <div className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-accent">Siguiente</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden min-h-[400px] lg:min-h-full group">
                {milestoneImages.map((img, i) => (
                  <div key={i} className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${i === activeMilestone ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}`}>
                    <img src={img} className="w-full h-full object-cover" alt={TIMELINE_DATA[i].title} />
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 backdrop-blur-md z-20 flex items-center justify-center text-white font-serif text-3xl font-bold">
                  {TIMELINE_DATA[activeMilestone].year.substring(0, 4)}
                </div>
              </div>
            </div>
          </div>
        );

      case 'directorio':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Directorio</h2>
              <p className="text-gray-500 text-lg">Líderes empresariales que marcan el rumbo estratégico de nuestra institución.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BOARD_MEMBERS.map((member, i) => (
                <div key={i} className="bg-white group overflow-hidden rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-accent text-xs font-bold uppercase tracking-widest mt-2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'equipo':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Equipo Ejecutivo</h2>
              <p className="text-gray-500 text-lg">El equipo operativo encargado de ejecutar la visión estratégica.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member, i) => (
                <div key={i} className="bg-white group overflow-hidden rounded-xl border border-gray-100 hover:border-accent transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden relative">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-20 space-y-6">
            <h2 className="text-5xl font-serif font-bold text-primary italic">La Cámara</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Seleccione una sección para conocer más sobre nosotros.</p>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/nosotros/rol" className="px-6 py-3 bg-primary text-white rounded-md font-bold hover:bg-primary/90">Nuestro Rol</Link>
              <Link href="/nosotros/directorio" className="px-6 py-3 border border-primary text-primary rounded-md font-bold hover:bg-primary/5">Directorio</Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img
            src={section === 'historia'
              ? 'https://images.unsplash.com/photo-1449156001935-d2863fb72690?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
              : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'}
            className="w-full h-full object-cover brightness-[0.4] grayscale-[30%]"
            alt="Institucional Hero"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 pb-24 px-6 md:px-12 pointer-events-none z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10 pointer-events-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-accent"></span>
                <span className="text-[11px] font-bold text-accent uppercase tracking-[0.5em] block">Institucional</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-serif font-bold italic leading-none text-white drop-shadow-2xl">
                {section === 'rol' ? 'Sobre Nosotros' :
                  section === 'historia' ? 'Nuestra Historia' :
                    section === 'directorio' ? 'Alta Dirección' : 'Nuestro Equipo'}
              </h1>
            </div>
            <nav className="flex flex-wrap gap-4 md:gap-8 text-[11px] font-bold tracking-[0.3em] uppercase bg-primary/20 backdrop-blur-md p-8 md:p-10 rounded-sm border-t-2 border-accent shadow-2xl mb-[-40px] relative z-20">
              {[
                { id: 'rol', label: 'Nuestro Rol' },
                { id: 'historia', label: 'Historia' },
                { id: 'directorio', label: 'Directorio' },
                { id: 'equipo', label: 'Equipo' }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`/nosotros/${item.id}`}
                  className={`relative pb-2 group transition-all duration-300 ${section === item.id ? 'text-accent' : 'text-white/60 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300 ${section === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="relative z-0 mt-20 pb-48">
        <div className={`max-w-7xl mx-auto ${section === 'historia' ? 'px-0' : 'px-6 md:px-12'} transition-all duration-500`}>
          {renderContent()}
        </div>
      </section>
    </div>
  );
}
