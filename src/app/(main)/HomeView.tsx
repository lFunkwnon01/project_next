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
      <section className="bg-gradient-to-tr from-brand-blue-deep to-brand-blue-bright py-[42px] overflow-hidden relative group">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <h2 className="text-white font-serif text-4xl font-bold whitespace-nowrap shrink-0">
            Próximos Eventos
          </h2>

          <div className="w-full relative overflow-hidden">
            <div className="flex animate-ticker-slow gap-20 group-hover:pause">
              {[...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
                <div key={i} className="flex items-center gap-8 shrink-0 border-l-[2px] border-white pl-8 h-full">
                  <div className="flex flex-col leading-none text-white font-bold opacity-90">
                    <span className="text-[14px] uppercase tracking-widest">{event.month}</span>
                    <span className="text-4xl">{event.day}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pr-8">
                    <h3 className="text-white font-bold text-base tracking-wide uppercase line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-6 text-white/70 text-[12px] font-medium">
                      <span className="flex items-center gap-2 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
      <section className="bg-[#232323] h-[430px] overflow-hidden flex items-center relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full h-full flex flex-col lg:flex-row items-center justify-between">

          {/* Text Content (Left) */}
          <div className="flex flex-col h-full justify-center pt-8 pb-12 lg:w-1/2 relative z-10">
            <h2 className="text-white font-sans text-xl font-bold mb-8">
              Britcham en Perú
            </h2>

            <div className="flex gap-8 items-start">
              {/* Vertical Line */}
              <div className="w-[1.5px] h-32 bg-white/40 shrink-0 mt-2" />

              <div className="max-w-xl">
                <p className="text-white text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-[1.2]">
                  <span className="font-serif italic font-medium text-5xl md:text-6xl mr-2">37</span>
                  años fortaleciendo la relación empresarial entre el Perú y el Reino Unido
                </p>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-auto pb-4">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Map Image (Right) */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[55%] flex items-center justify-end">
            <img
              src="/assets/mundo.png"
              alt="World Map Britcham"
              className="h-[110%] w-auto object-contain object-right opacity-90"
            />
          </div>
        </div>
      </section>

      {/* 4. SOCIOS CORPORATIVOS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[#555555] font-sans text-4xl md:text-5xl font-bold mb-4">
              Socios Corporativos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
            {[
              '/assets/gca_logo.png',
              '/assets/anglo_americano.png',
              '/assets/upc_logo.png',
              '/assets/diageo_logo.png',
              '/assets/britanico_logo.jpg',
              '/assets/belmond_logo.png'
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img 
                  src={logo} 
                  alt={`Socio ${i + 1}`} 
                  className="h-24 md:h-32 w-auto object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SER SOCIO DE BRITCHAM */}
      <section className="bg-[#0151F2] h-[420px] flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl space-y-8 pt-8">
            {/* Title with line */}
            <div className="flex items-center gap-6">
              <h2 className="text-white font-sans text-xl md:text-2xl font-bold whitespace-nowrap">
                Ser socio de Britcham
              </h2>
              <div className="h-[2px] bg-white/40 w-full max-w-2xl" />
            </div>

            {/* Main Message */}
            <h3 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] max-w-4xl">
              Conectaa con líderes empresariales y oportunidades bilaterales.
            </h3>

            {/* Contact Button */}
            <div className="pt-2">
              <Link 
                href="/contacto" 
                className="inline-block bg-white text-[#0151F2] px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white/95 transition-all transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                CONTACTAR
              </Link>
            </div>
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
