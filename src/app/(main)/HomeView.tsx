'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HomeNewsSection } from '@/components/home/HomeNewsSection';

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo formar parte de la Cámara de Comercio Peruano Británica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para ser socio de BritCham Peru, las empresas deben completar una solicitud de membresía y pasar por un proceso de revisión. Ofrecemos networking, asesoría comercial y acceso a eventos exclusivos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué servicios ofrece Britcham para el comercio entre Perú y Reino Unido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brindamos consultoría estratégica, estudios de mercado, networking de alto nivel y apoyo en misiones comerciales para fortalecer la inversión bilateral."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. HERO PRINCIPAL CON SLIDESHOW */}
      <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-brand-dark">
        {/* Stable H1 for SEO (visually hidden but present for crawlers) */}
        <h1 className="sr-only">Cámara de Comercio Peruano Británica | BritCham Peru</h1>
        
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
          <div className="max-w-5xl space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-white leading-[1.15]">
              {HERO_SLIDES[currentHeroSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-inter font-normal leading-relaxed max-w-2xl">
              {HERO_SLIDES[currentHeroSlide].description}
            </p>
          </div>
          {/* ... slider controls ... */}
          <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-12">
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
        <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <h2 className="text-white font-inter text-4xl font-bold whitespace-nowrap shrink-0">
            Eventos y Conferencias Perú-UK
          </h2>
          {/* ... ticker content ... */}
          <div className="w-full relative overflow-hidden">
            <div className="flex animate-ticker-slow gap-20 group-hover:pause">
              {[...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
                <article key={i} className="flex items-center gap-8 shrink-0 border-l-[2px] border-white pl-8 h-full">
                  <div className="flex flex-col leading-none text-white font-inter font-semibold opacity-90">
                    <span className="text-[14px] uppercase tracking-widest">{event.month}</span>
                    <span className="text-4xl">{event.day}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pr-8">
                    <h3 className="text-white font-inter font-bold text-base tracking-wide uppercase line-clamp-1">{event.title}</h3>
                    <div className="flex items-center gap-6 text-white/70 text-[12px] font-inter font-normal">
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
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRITCHAM EN PERÚ */}
      <section className="bg-[#232323] h-[430px] overflow-hidden flex items-center relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full h-full flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-col h-full justify-center pt-8 pb-12 lg:w-1/2 relative z-10">
            <h2 className="text-white font-inter text-3xl font-bold mb-8">
              Britcham Peru: 37 Años de Trayectoria
            </h2>
            <div className="flex gap-8 items-start">
              <div className="w-[3px] h-32 bg-white/40 shrink-0 mt-2" />
              <div className="max-w-xl">
                <p className="text-white text-3xl md:text-4xl lg:text-4xl font-libre font-bold leading-[1.2]">
                  <span className="font-libre font-bold text-5xl md:text-6xl mr-2">37</span>
                  años impulsando el comercio institucional entre el Perú y el Reino Unido.
                </p>
              </div>
            </div>
            {/* ... pagination dots ... */}
            <div className="flex gap-2 mt-auto pb-4">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[55%] flex items-center justify-end">
            <img
              src="/assets/mundo.png"
              alt="Mapa de red global de la Cámara de Comercio Peruano Británica"
              className="h-[110%] w-auto object-contain object-right opacity-90"
            />
          </div>
        </div>
      </section>

      {/* 4. SOCIOS CORPORATIVOS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-[#555555] font-inter text-4xl md:text-5xl font-bold mb-4">
              Socios Corporativos y Alianzas
            </h2>
          </div>
          {/* ... logos ... */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
            {[
              { src: '/assets/gca_logo.png', alt: 'GCA - Socio de Britcham', height: 100 },
              { src: '/assets/anglo_americano.png', alt: 'Anglo American - Socio Corporativo', height: 80 },
              { src: '/assets/upc.png', alt: 'UPC - Alianza Educativa', height: 76 },
              { src: '/assets/diageo.png', alt: 'Diageo - Socio de Britcham', height: 40 },
              { src: '/assets/britanico_logo.jpg', alt: 'Británico - Alianza Cultural', height: 80 },
              { src: '/assets/belmond_logo.png', alt: 'Belmond - Socio de Britcham', height: 100 },
            ].map((logo, i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ height: `${logo.height}px`, width: 'auto', display: 'block' }}
                  className="object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SER SOCIO DE BRITCHAM */}
      <section className="bg-[#0151F2] h-[430px] flex items-start relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-between py-10 md:py-12">
          <div className="flex items-center gap-6">
            <h2 className="text-white font-inter text-base md:text-3xl font-bold whitespace-nowrap">
              Membresía Cámara de Comercio
            </h2>
            <div className="h-[3px] bg-white/90 flex-1" />
          </div>
          <h3 className="text-white font-libre text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.15] max-w-[80%]">
            Únase a la mayor red de oportunidades entre Perú y el Reino Unido.
          </h3>
          <div className="flex items-center justify-between w-full">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-white text-[#0151F2] px-10 py-4 font-inter font-bold text-[16px] uppercase tracking-[0.1em] hover:bg-white/95 transition-all hover:-translate-y-1"
            >
              ASÓCIATE AQUÍ
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FULL-WIDTH IMAGE (SERVICIOS) */}
      <section className="w-full h-[540px] md:h-[580px] overflow-hidden">
        <img
          src="/assets/image_99.png"
          alt="Servicios de la Cámara de Comercio Peruano Británica"
          className="w-full h-full object-cover"
        />
      </section>

      {/* 7. BARRA DE SERVICIOS */}
      <section className="bg-[#212121] min-h-[220px] flex items-center py-12 md:py-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
          <div className="space-y-4 max-w-4xl text-center md:text-left">
            <h2 className="text-white font-inter text-2xl font-bold tracking-tight uppercase">
              Servicios Comerciales Perú-UK
            </h2>
            <p className="text-white/90 font-libre text-base leading-relaxed">
              Brindamos consultoría estratégica, networking institucional y acceso a mercados clave para potenciar las inversiones bilaterales.
            </p>
          </div>
          <div className="shrink-0 mr-25">
            <Link
              href="/servicios"
              className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
            >
              <span className="font-inter font-bold text-xl md:text-2xl tracking-widest uppercase text-white">
                Ver Servicios
              </span>
              <img
                src="/assets/Arrow_right.png"
                alt="Ver todos los servicios de Britcham"
                className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-2"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. NEWS (EDITORIAL) */}
      <HomeNewsSection />

      {/* 9. FAQ SECTION (NEW FOR SEO) */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-brand-blue-deep font-inter text-3xl font-bold mb-12 text-center">
            Preguntas Frecuentes sobre BritCham Peru
          </h2>
          <div className="space-y-8">
            <article>
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Cómo formar parte de la Cámara de Comercio Peruano Británica?</h3>
              <p className="text-gray-600 leading-relaxed">
                Para ser socio de BritCham Peru, las empresas deben completar una solicitud y pasar por un proceso de revisión. Ofrecemos networking, asesoría comercial y acceso a eventos exclusivos entre Perú y Reino Unido.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-bold text-gray-900 mb-2">¿Qué servicios ofrece Britcham para el comercio entre Perú y Reino Unido?</h3>
              <p className="text-gray-600 leading-relaxed">
                Brindamos consultoría estratégica, estudios de mercado, networking de alto nivel y apoyo institucional para fortalecer la inversión y el comercio bilateral.
              </p>
            </article>
          </div>
        </div>
      </section>

    </main>
  );
}
