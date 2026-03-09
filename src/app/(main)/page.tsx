'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MOCK_EVENTS } from '@/lib/data/mockData';

const partnerLogos = [
  { src: '/assets/anglo_americano.png', tall: false },
  { src: '/assets/belmond_logo.png', tall: false },
  { src: '/assets/britanico_logo.jpg', tall: false },
  { src: '/assets/diageo_logo.png', tall: true },
  { src: '/assets/gca_logo.png', tall: false },
  { src: '/assets/upc_logo.png', tall: false },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ socios: 0, representantes: 0, eventos: 0 });

  const slides = [
    {
      title: "Únete a la red empresarial BPCC",
      desc: "Connect with the most influential business network in Peru and the UK.",
      cta: "SER SOCIO / JOIN NOW",
      img: "https://picsum.photos/seed/biz1/1920/1080",
      link: "/membresia"
    },
    {
      title: "Próximo Business After Hours",
      desc: "Networking de alto nivel en la Residencia del Embajador Británico.",
      cta: "REGISTRARSE / REGISTER",
      img: "https://picsum.photos/seed/residence/1920/1080",
      link: "/eventos"
    },
    {
      title: "Economic Report Q4",
      desc: "Análisis exclusivo del crecimiento regional y proyecciones 2024.",
      cta: "LEER REPORTE / READ NOW",
      img: "https://picsum.photos/seed/stats/1920/1080",
      link: "/investigacion/economic-report"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((s) => (s + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
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
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="bg-white">
      {/* 1. Hero Slide Deck */}
      <section className="relative h-screen w-full bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full">
          {/* Main Story (Left) */}
          <div className="lg:col-span-2 relative group overflow-hidden bg-zinc-900">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700"></div>
              </div>
            ))}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 lg:p-20 pointer-events-none">
              <span className="text-white/90 font-bold uppercase tracking-widest text-xs mb-6 block drop-shadow-md">BritCham Peru Hub</span>
              <div className="space-y-6 pointer-events-auto">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.05] text-white drop-shadow-xl">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl drop-shadow-md">
                  {slides[currentSlide].desc}
                </p>
                <div className="pt-6">
                  <Link href={slides[currentSlide].link} className="inline-flex items-center gap-2 border border-white/40 bg-black/20 px-8 py-4 text-xs uppercase font-bold tracking-widest hover:bg-white hover:text-navy-900 transition-colors backdrop-blur-md">
                    {slides[currentSlide].cta}
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 lg:bottom-12 left-8 md:left-16 lg:left-20 flex gap-4 z-30">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 lg:h-3 transition-all hover:bg-white/80 ${i === currentSlide ? 'w-16 lg:w-24 bg-white' : 'w-10 lg:w-16 bg-white/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Stacked Stories */}
          <div className="lg:col-span-1 flex flex-col gap-1">
            <div
              className="flex-1 relative bg-zinc-900 text-white p-8 md:p-12 flex flex-col justify-end group cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)` }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-700 z-0"></div>
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-4 block">Eventos Especiales</span>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight drop-shadow-lg">Próximo Business After Hours</h3>
                  <p className="text-sm lg:text-base font-light text-white/90 line-clamp-3 drop-shadow-md">
                    Networking de alto nivel en la Residencia del Embajador Británico exclusivo para miembros activos.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <Link href="#" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest group-hover:text-white text-white/70 transition-colors">
                      Registrarse &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 relative bg-zinc-900 text-white p-8 md:p-12 flex flex-col justify-end group cursor-pointer overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)` }}
            >
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-700 z-0"></div>
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] mb-4 block">Insights</span>
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold leading-tight drop-shadow-lg">Economic Report Q4</h3>
                  <p className="text-sm lg:text-base font-light text-white/90 line-clamp-3 drop-shadow-md">
                    Análisis exclusivo del crecimiento regional peruano impulsado por inversión extranjera directa y comercio.
                  </p>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <Link href="/noticias" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest group-hover:text-white text-white/70 transition-colors">
                      Leer Reporte &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Ticker */}
      <section className="relative py-16 overflow-hidden bg-navy-900 group">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Events Background"
          />
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>

        <div className="relative z-10 flex whitespace-nowrap animate-ticker items-center">
          {[...MOCK_EVENTS, ...MOCK_EVENTS, ...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
            <div key={i} className="flex items-center mx-16 group/item cursor-pointer">
              <div className="flex flex-col items-center justify-center bg-accent text-white font-bold min-w-[80px] h-[80px] mr-8 rounded-xl transition-all duration-300 group-hover/item:shadow-[0_0_25px_rgba(255,107,107,0.5)] group-hover/item:scale-110">
                <span className="text-[13px] leading-tight opacity-80">{event.month}</span>
                <span className="text-3xl leading-tight">{event.day}</span>
              </div>
              <div className="flex flex-col border-l border-white/20 pl-8">
                <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em] mb-2">Próxima Actividad</span>
                <span className="text-white text-2xl font-bold uppercase tracking-wide group-hover/item:text-accent transition-colors duration-300">{event.title}</span>
                <div className="flex items-center gap-6 mt-2">
                  <span className="text-white/40 text-[11px] font-medium tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {event.time}
                  </span>
                  <span className="text-white/40 text-[11px] font-medium tracking-wider flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {event.location}
                  </span>
                </div>
              </div>
              <span className="ml-16 text-white/5 font-light text-8xl select-none">/</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Conectando Países */}
      <section className="py-32 bg-zinc-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-4">
                <span className="h-[2px] w-12 bg-accent"></span>
                <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Conectando Países</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-primary italic leading-[1.1]">Uniendo Visión Británica y Talento Peruano</h2>
              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Somos el catalizador estratégico que impulsa el crecimiento bilateral, transformando oportunidades en realidades tangibles para empresas que buscan liderar en el eje Perú - Reino Unido.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Mercado Británico</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed italic">Puerta de entrada estratégica para el talento y productos peruanos en el Reino Unido.</p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-sm text-primary uppercase tracking-wider">Red de Negocios</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed italic">Conectamos empresas UK con los socios y distribuidores más confiables del Perú.</p>
                </div>
              </div>

              <Link href="/contacto" className="inline-block bg-primary text-white px-12 py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-navy-800 transition-all shadow-2xl hover:-translate-y-1 duration-300">
                Contactar Ahora
              </Link>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-colors duration-700"></div>
              <div className="relative aspect-[4/5] bg-navy-900 rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-[2s]"
                  alt="London landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="font-serif text-3xl font-bold text-white italic leading-tight">&ldquo;Construyendo el futuro comercial Perú-UK desde 1939&rdquo;</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white p-4 rounded-2xl shadow-2xl hidden lg:block border border-gray-100 rotate-6 group-hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  className="w-full h-full object-cover rounded-lg"
                  alt="Peru details"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partners Carousel */}
      <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-16">Socios Premium y Premium Plus</p>
          <div className="relative">
            <div className="partner-scroll-container pb-4">
              <div className="partner-scroll-content items-center">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    className={`${logo.tall ? 'h-24 md:h-32' : 'h-16 md:h-20'} w-auto object-contain mx-8 md:mx-12 mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity`}
                    alt={`Partner logo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ser Socio Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/2 flex flex-col justify-center space-y-10 py-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-accent"></span>
                  <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Membresía BPCC</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-serif font-bold text-primary italic leading-[1.1]">Únete a la Red más Influyente</h2>
              </div>

              <p className="text-gray-600 text-xl leading-relaxed font-light">
                Sea parte de una comunidad exclusiva que conecta al Reino Unido con el Perú. Obtenga acceso privilegiado a eventos de alto nivel, inteligencia comercial y una red invaluable de contactos estratégicos.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {['Eventos Exclusivos', 'Informes Económicos', 'Autoridades UK', 'Visibilidad de Marca'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-bold tracking-wide uppercase text-[11px]">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/membresia" className="inline-block bg-primary text-white px-12 py-5 font-bold text-xs tracking-[0.2em] uppercase hover:bg-navy-800 transition-all shadow-2xl hover:-translate-y-1 duration-300">
                  Descubrir Beneficios
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-auto flex items-center">
              <div className="absolute top-0 right-0 w-[90%] h-full bg-navy-900 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  className="w-full h-full object-cover opacity-60"
                  alt="Corporate Networking"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block">Networking Global</span>
                  <p className="text-2xl font-serif italic font-bold">&ldquo;Expandiendo horizontes entre el Perú y el Reino Unido&rdquo;</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent rounded-3xl -z-10 animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
