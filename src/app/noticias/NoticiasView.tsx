'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNews } from '@/contexts/NewsContext';
import type { NewsArticle } from '@/types';

export default function NoticiasView() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { newsQueue, addArticle } = useNews();

  const categories = ['ENERGÍA', 'MINERÍA', 'SALUD', 'AGROINDUSTRIA', 'COMERCIO INTERNACIONAL', 'ECONOMÍA', 'INFRAESTRUCTURA', 'SOCIAL'];
  const today = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSimulatePublish = () => {
    const newArticle: NewsArticle = {
      id: `simulacion-${Date.now()}`,
      title: "Nueva Inversión Británica en Energías Renovables al Sur del Perú",
      category: "ENERGÍA",
      excerpt: "El día de hoy se anunció una inversión récord en parques eólicos, marcando un hito en la transición energética bilateral. Las empresas británicas y peruanas trabajarán en conjunto para lograr los objetivos de desarrollo sostenible propuestos para la próxima década.",
      time: "HACE 1 MINUTO",
      date: "HACE 1 MINUTO",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    };
    addArticle(newArticle);
  };

  const featuredNews = newsQueue[0];
  const sideNews = newsQueue.slice(1, 3);

  const recentNews = [
    { id: 1, category: "Infraestructura", title: "Nuevo ingreso de inversiones al sector", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: 2, category: "Minería", title: "Record de exportaciones de cobre en el 2025", date: "27 DE ENERO", image: "https://images.unsplash.com/photo-1579489225078-27977a77bf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: 3, category: "Agroindustria", title: "El Reino Unido como partner agroindustrial", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: 4, category: "Opinion & Analisis", title: "Convenio Peru - Reino Unido: Doble Tributacion", date: "HACE 10 HORAS", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: 5, category: "Energia", title: "Apertura de nueva solar en Arequipa", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1509391366360-feaffa6021fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." }
  ];

  const opinionNews = [
    { author: "JOHN KNIGHT", title: "El cuidado de las RIN: Como politica de estado", date: "26 DE ABRIL" },
    { author: "JAMES ALBRIGHTON", title: "Perspectives of the Peruvian construction industry", date: "9 DE ENERO" },
    { author: "IGNACIO PALACIOS", title: "Que significa un CTTP para el Peru", date: "15 DE FEBRERO" }
  ];

  const events = [
    { title: "Webinar: Comite de Infraestructura 2026", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Desayuno Corporativo \"Perspectivas economicas al 2024\"", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1475721027187-4024733923f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "III Comite de Desarollo Sostenible", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Coffee and Networking Mineria 2025", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  if (!featuredNews) return null;

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans text-gray-950 selection:bg-accent selection:text-white overflow-x-hidden">

      {/* ── 1. NAVBAR NEGRO FIJO ── */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-black text-white transition-all duration-300 ${isScrolled ? 'h-24 md:h-28' : 'h-16 md:h-20'}`}>
        <div className="max-w-[1200px] mx-auto w-full h-full px-6 flex flex-col justify-center">
          <div className="flex items-center justify-between relative w-full">
            <Link href="/" className="flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] font-sans hover:text-accent transition-colors z-10">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              INICIO
            </Link>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
              <div className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center">
                <img src="/assets/isotopo.png" alt="BPCC" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-2xl md:text-4xl font-serif font-black italic tracking-tighter uppercase leading-none">News</h1>
            </div>
            <div className={`flex flex-col items-end gap-1 z-10 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-[9px] font-medium text-white/80 capitalize">{today}</span>
              <div className="flex items-center gap-4 text-[9px] font-bold tracking-widest">
                <span className="text-white/60">GBP/PEN <span className="text-white">4.75</span> <span className="text-green-400">▲0.12%</span></span>
                <span className="text-white/60">USD/PEN <span className="text-white">3.78</span></span>
              </div>
            </div>
          </div>
          <div className={`flex justify-center w-full transition-all duration-500 overflow-hidden ${isScrolled ? 'mt-[20px] max-h-10 opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[10px] font-black font-sans tracking-[0.2em] text-white/90">
              {categories.map(cat => (
                <button key={cat} className="hover:text-accent transition-colors whitespace-nowrap">{cat}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── 2. CABECERA SECUNDARIA BLANCA ── */}
      <header className={`pt-16 md:pt-20 bg-white border-b border-gray-100 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex justify-between items-center text-[9px] font-sans font-bold tracking-widest uppercase text-gray-400 mb-4">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span>GBP/PEN</span>
                <span className="text-gray-950">4.75 <span className="text-green-600">0.12%</span></span>
              </div>
              <div className="flex items-center gap-2">
                <span>USD/PEN</span>
                <span className="text-gray-950">3.78</span>
              </div>
            </div>
            <span className="font-news-source font-medium capitalize">{today}</span>
          </div>
          <nav className="flex flex-wrap justify-between items-center gap-y-2 pt-3 border-t border-gray-100">
            {categories.map(cat => (
              <button key={cat} className="text-[10px] font-black font-sans text-gray-950 hover:text-accent transition-all tracking-[0.2em] uppercase border-b-2 border-transparent hover:border-accent pb-1">
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {isScrolled && <div className="h-[40px]" />}

      <main className="max-w-[1200px] mx-auto px-6 bg-white pb-20 shadow-sm">

        {/* ── SECCIÓN 1: NOTICIA DESTACADA ── */}
        <section className="py-6 border-b border-gray-100">
          <div className="flex justify-end mb-4">
            <button
              onClick={handleSimulatePublish}
              className="bg-red-600 text-white px-4 py-1.5 text-[9px] font-black tracking-widest uppercase hover:bg-black transition-colors flex items-center gap-2 shadow-sm rounded-sm"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Simular Publicar Noticia
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 flex flex-col justify-start py-1 h-full">
              <div>
                <h2 className="text-[32px] md:text-[42px] font-serif font-black leading-[1.05] text-gray-950 mb-4 tracking-tight">
                  <Link href={`/noticias/${featuredNews.id}`} className="hover:text-accent transition-colors">
                    {featuredNews.title}
                  </Link>
                </h2>
                <span className="text-[10px] font-black font-sans text-blue-600 uppercase tracking-[0.2em] mb-4 block">
                  {featuredNews.category}
                </span>
                <p className="text-gray-700 text-[14px] leading-relaxed mb-6 font-news-body line-clamp-6">
                  {featuredNews.excerpt}
                </p>
              </div>
              <span className="text-[10px] font-news-source font-bold text-gray-400 uppercase tracking-[0.2em]">
                {featuredNews.time}
              </span>
            </div>

            <div className="lg:col-span-4 aspect-[4/5] bg-gray-50 overflow-hidden shadow-sm w-full">
              <Link href={`/noticias/${featuredNews.id}`} className="block w-full h-full">
                <img
                  key={featuredNews.image}
                  src={featuredNews.image}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Noticia destacada"
                />
              </Link>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full py-1 lg:pl-6 lg:border-l border-gray-100 gap-8">
              {sideNews.map((news, idx) => (
                <div key={news.id} className="group flex flex-col border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <Link href={`/noticias/${news.id}`} className="block aspect-video w-full bg-gray-50 overflow-hidden mb-3">
                    <img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={news.title} />
                  </Link>
                  <span className="text-[9px] font-sans font-black text-blue-600 uppercase tracking-widest mb-1 block">
                    {news.category}
                  </span>
                  <h3 className="text-[17px] font-serif font-black text-gray-950 leading-tight mb-1">
                    <Link href={`/noticias/${news.id}`} className="group-hover:text-accent transition-colors block line-clamp-2">
                      {news.title}
                    </Link>
                  </h3>
                  <span className="text-[9px] font-news-source font-bold text-gray-400 uppercase mt-1">
                    {news.date || news.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2: NOTICIAS RECIENTES ── */}
        <section className="py-10 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[11px] font-sans font-black text-gray-950 uppercase tracking-[0.4em] whitespace-nowrap">NOTICIAS RECIENTES</h2>
            <div className="h-[1px] bg-gray-100 flex-grow" />
            <div className="flex gap-2">
              <button className="text-gray-300 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="text-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {recentNews.map(news => (
              <article key={news.id} className="flex flex-col group cursor-pointer border-r border-gray-50 last:border-0 pr-2 last:pr-0">
                <div className="aspect-video w-full bg-gray-50 overflow-hidden mb-3">
                  <img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={news.title} />
                </div>
                <span className="text-[8px] font-sans font-black text-blue-700 uppercase mb-1">{news.category}</span>
                <h4 className="text-[13px] font-serif font-black text-gray-950 leading-tight mb-1 group-hover:text-accent transition-colors line-clamp-2">{news.title}</h4>
                <p className="text-[10px] font-news-body text-gray-500 leading-tight line-clamp-3 mb-2 flex-grow">{news.excerpt}</p>
                <span className="text-[8px] font-news-source font-bold text-gray-400 uppercase">{news.date}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ── SECCIÓN 3: OPINION & ANALISIS ── */}
        <section className="py-10 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-[11px] font-sans font-black text-gray-950 uppercase tracking-[0.4em] whitespace-nowrap">OPINION & ANALISIS</h2>
            <div className="h-[1px] bg-gray-100 flex-grow" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 relative group cursor-pointer overflow-hidden h-[320px]">
              <div className="w-full h-full bg-gray-900 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4s]" alt="Opinion" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white px-6 py-6">
                <h3 className="text-xl md:text-2xl font-serif font-black leading-tight italic mb-2">
                  El cuidado de las RIN: Como politica de estado para la estabilidad monetaria del Peru
                </h3>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[9px] font-news-source font-black text-white/60 uppercase tracking-[0.2em]">ESCRITO POR JAVIER GONZALEZ</span>
                    <p className="text-[8px] font-news-source font-bold text-white/40 tracking-widest uppercase">26 DE ABRIL</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col divide-y divide-gray-100">
              {opinionNews.map((op, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer py-4 first:pt-0 last:pb-0">
                  <div className="flex flex-col gap-1 pr-4">
                    <h4 className="text-[15px] font-serif font-black text-gray-950 leading-tight group-hover:text-accent transition-colors">{op.title}</h4>
                    <div className="flex gap-3 mt-1">
                      <span className="text-[9px] font-sans font-black text-blue-700 uppercase tracking-widest">{op.author}</span>
                      <span className="text-[8px] font-news-source font-bold text-gray-400 tracking-[0.2em] uppercase">{op.date}</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-black transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4: PROXIMOS EVENTOS ── */}
        <section className="py-10">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[11px] font-sans font-black text-gray-950 uppercase tracking-[0.4em] whitespace-nowrap">PROXIMOS EVENTOS</h2>
            <div className="h-[1px] bg-gray-100 flex-grow" />
            <div className="flex gap-2">
              <button className="text-gray-300 hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="text-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {events.map((ev, i) => (
              <div key={i} className="flex flex-col text-center group cursor-pointer">
                <span className="text-[9px] font-news-source font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{ev.date}</span>
                <h4 className="text-[13px] font-serif font-black text-gray-950 leading-tight mb-3 h-8 line-clamp-2 px-1 group-hover:text-accent transition-colors">{ev.title}</h4>
                <div className="aspect-video w-full bg-gray-50 overflow-hidden mb-4 shadow-sm">
                  <img src={ev.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={ev.title} />
                </div>
                <div className="flex justify-center">
                  <button className="bg-black text-white py-2 px-8 text-[10px] font-sans font-black tracking-widest uppercase hover:bg-accent transition-all w-full max-w-[120px]">VER</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── NEWSLETTER ── */}
      <div className="bg-blue-700 py-6 text-center">
        <h2 className="text-white text-[15px] font-black tracking-[0.3em] uppercase">SUBSCRIBETE A NUESTRO NEWSLETTER</h2>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mb-10 border-b border-white/10 pb-8">
            <img src="/assets/logotipo_original.jpeg" alt="BPCC Footer" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-[9px] font-sans font-black tracking-[0.2em] uppercase text-white/70">
              {categories.map(cat => (
                <Link key={cat} href="/noticias" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">{cat}</Link>
              ))}
            </div>
          </div>
          <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.4em] text-center leading-relaxed">
            Copyright 2026 Camara de Comercio Peruano Britanica. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
