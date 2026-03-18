'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2000',
    title: 'Ofrecemos plataformas estratégicas para comercio e inversión bilateral',
    description: 'El Reino Unido representa aproximadamente el 19% del total de las contribuciones de capital en el país, compitiendo con España (18%) y Estados Unidos (11%) por el primer puesto.',
  },
  {
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000',
    title: 'Conectamos líderes y oportunidades globales',
    description: 'Nuestra red empresarial facilita el intercambio comercial y el networking de alto nivel entre el Perú y el Reino Unido.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000',
    title: 'Impulsando el crecimiento sostenible',
    description: 'Asesoramos y apoyamos a las empresas en su proceso de expansión internacional y adopción de mejores prácticas.',
  }
];

const MOCK_EVENTS = [
  {
    month: 'ABR',
    day: '7',
    title: 'PERU: MINING SUMMIT 2026',
    time: '13:00',
    location: 'Hotel Westin, San Isidro',
  },
  {
    month: 'MAR',
    day: '18',
    title: 'DISRUPTIVE TECHNOLOGY AND CORPORATE SUMMIT 2026',
    time: '13:00',
    location: 'Hotel Westin, San Isidro',
  },
  {
    month: 'MAY',
    day: '12',
    title: 'UK-PERU BUSINESS FORUM',
    time: '09:00',
    location: 'Sede BritCham',
  }
];

export default function HomeView() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      
      {/* 1. HERO PRINCIPAL CON SLIDESHOW */}
      <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-brand-dark">
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center scale-105 animate-[slow-zoom_20s_infinite]"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-24 lg:pb-32">
          <div className="max-w-3xl space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15]">
              {HERO_SLIDES[currentHeroSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              {HERO_SLIDES[currentHeroSlide].description}
            </p>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-12">
            {/* Arrows */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                className="text-white hover:opacity-50 transition-opacity"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="text-white hover:opacity-50 transition-opacity"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {HERO_SLIDES.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentHeroSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-8' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BANDA “PRÓXIMOS EVENTOS” */}
      <section className="bg-brand-blue-bright py-8 overflow-hidden relative group">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <h2 className="text-white font-serif text-2xl font-bold whitespace-nowrap shrink-0">
            Próximos Eventos
          </h2>
          
          <div className="w-full relative overflow-hidden">
            <div className="flex animate-ticker-slow gap-16 group-hover:pause">
              {[...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
                <div key={i} className="flex items-center gap-8 shrink-0 border-l border-white/20 pl-8 h-full">
                  <div className="flex flex-col leading-none text-white font-bold opacity-80">
                    <span className="text-[12px] uppercase tracking-wider">{event.month}</span>
                    <span className="text-3xl">{event.day}</span>
                  </div>
                  <div className="flex flex-col gap-1 pr-8">
                    <h3 className="text-white font-bold text-sm tracking-wide uppercase line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-white/60 text-[11px] font-medium">
                      <span className="flex items-center gap-1.5 shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRITCHAM EN PERÚ */}
      <section className="bg-brand-dark py-24 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Map Image (Left) */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-brand-blue-deep/20 rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1582213702164-92e105740449?auto=format&fit=crop&q=80&w=1000" 
              alt="Peru Map" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
            />
            {/* Overlay point markers placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue-bright rounded-full animate-ping" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-blue-bright rounded-full" />
          </div>

          {/* Text & Mini Carousel (Right) */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight">
                Britcham en Perú
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Contamos con una presencia estratégica en las principales regiones comerciales del país, conectando a nuestras empresas socias con oportunidades reales de crecimiento y desarrollo.
              </p>
            </div>

            {/* Internal Carousel placeholder logic */}
            <div className="relative w-full aspect-video bg-white/5 rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                alt="Britcham event" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-sm tracking-wide uppercase">Networking Anual 2026</p>
              </div>
            </div>

            <Link href="/nosotros" className="text-brand-blue-bright font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:translate-x-2 transition-transform w-fit">
              Conoce nuestra historia 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SOCIOS CORPORATIVOS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-brand-dark font-serif text-4xl md:text-5xl font-bold mb-4">
              Socios Corporativos
            </h2>
            <div className="w-20 h-1 bg-brand-blue-bright mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center border-t border-gray-100 pt-16">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="flex items-center justify-center p-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img 
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=P${i}&backgroundColor=f2f2f2`} 
                  alt={`Socio ${i}`} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/membresia" className="inline-block border-2 border-brand-blue-bright text-brand-blue-bright px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-blue-bright hover:text-white transition-all transform hover:-translate-y-1">
              Ver todos los socios
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SER SOCIO DE BRITCHAM */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-deep to-brand-blue-bright" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-white space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              ¿Deseas ser socio de Britcham?
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Únete a la red empresarial más influyente entre Perú y el Reino Unido. Accede a beneficios exclusivos, networking de alto nivel e inteligencia comercial.
            </p>
          </div>
          
          <div className="shrink-0">
            <Link href="/contacto" className="inline-flex items-center gap-4 bg-white text-brand-blue-deep px-12 py-5 font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-2xl">
              Afíliate aquí
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH IMAGE TRANSITION */}
      <section className="w-full h-[60vh] lg:h-[80vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Transitional Architecture" 
          className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-[2s] ease-out scale-105"
        />
      </section>

      {/* 7. NUESTROS SERVICIOS */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold leading-tight">
              Nuestros Servicios
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
              Brindamos soluciones integrales para potenciar el éxito de su empresa en el entorno binacional.
            </p>
            <Link href="/servicios" className="inline-block border border-white/20 text-white px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all">
              Explorar todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Comercio Exterior', desc: 'Asesoría especializada en mercados UK.' },
              { title: 'Networking', desc: 'Conexión con líderes de industria.' },
              { title: 'Certificaciones', desc: 'Respaldo institucional internacional.' },
              { title: 'Eventos', desc: 'Plataformas de visibilidad y debate.' }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-brand-blue-bright rounded-lg">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWS (EDITORIAL) */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <h2 className="text-brand-dark font-serif text-4xl md:text-5xl font-bold">
              Noticias & Insights
            </h2>
            <Link href="/noticias" className="text-brand-blue-bright font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all">
              Ver todas las noticias
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Featured News (Left) */}
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Economic Report" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-brand-blue-bright text-white text-[10px] font-bold uppercase tracking-widest">
                  Reporte Económico
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4 leading-tight group-hover:text-brand-blue-bright transition-colors">
                El Reino Unido lidera la inversión extranjera directa en el sector minero peruano
              </h3>
              <p className="text-gray-500 font-light leading-relaxed mb-6">
                Un análisis detallado sobre cómo las empresas británicas están impulsando la sostenibilidad y la innovación tecnológica en los andes...
              </p>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>15 Mar, 2026</span>
                <span>•</span>
                <span>Por: Britcham Insights</span>
              </div>
            </div>

            {/* Side News (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-32 h-24 shrink-0 overflow-hidden rounded-lg">
                    <img 
                      src={`https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&sig=${i}`} 
                      alt="News" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold text-brand-dark leading-snug group-hover:text-brand-blue-bright transition-colors">
                      {i === 1 ? 'Webinar: Oportunidades comerciales post-Brexit' : i === 2 ? 'Directorio BPCC 2026: Nuevos hitos estratégicos' : 'Networking After Hours: Galería completa'}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">12 Mar, 2026</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REST OF SECTIONS WILL BE ADDED IN NEXT STEPS */}
    </div>
  );
}
