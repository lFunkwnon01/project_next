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

  const allNews = [
    ...newsQueue,
    { id: "static-1", category: "Infraestructura", title: "Nuevo ingreso de inversiones al sector", date: "26 DE ABRIL", time: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: "static-2", category: "Minería", title: "Record de exportaciones de cobre en el 2025", date: "27 DE ENERO", time: "27 DE ENERO", image: "https://images.unsplash.com/photo-1579489225078-27977a77bf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: "static-3", category: "Agroindustria", title: "El Reino Unido como partner agroindustrial", date: "26 DE ABRIL", time: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: "static-4", category: "Opinion & Analisis", title: "Convenio Peru - Reino Unido: Doble Tributacion", date: "HACE 10 HORAS", time: "HACE 10 HORAS", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." },
    { id: "static-5", category: "Energia", title: "Apertura de nueva solar en Arequipa", date: "26 DE ABRIL", time: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1509391366360-feaffa6021fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et." }
  ];

  const uniqueNews = Array.from(new Map(allNews.map(item => [item.id, item])).values());

  const featuredNews = uniqueNews[0];
  const sideNews = uniqueNews.slice(1, 3);
  const recentNews = uniqueNews.slice(3, 8);

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
    <div className="bg-white min-h-screen font-sans text-gray-950 selection:bg-accent selection:text-white overflow-x-hidden">

      {/* ── 1. NAVBAR NEGRO FIJO ── */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-black text-white transition-all duration-300 ${isScrolled ? 'h-24 md:h-28' : 'h-16 md:h-20'}`}>
        <div className="max-w-[1200px] mx-auto w-full h-full px-6 flex flex-col justify-center">
          <div className="flex items-center justify-between relative w-full">
            <Link href="/" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] font-inter hover:text-accent transition-colors z-10">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              INICIO
            </Link>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] flex items-center justify-center">
                <img src="/assets/isotopo.png" alt="BPCC" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[50px] font-libre font-normal tracking-wide text-white leading-none font-style-normal" style={{ fontFamily: "Libre Baskerville, serif", fontWeight: 400 }}>NEWS</h1>
            </div>
            <div className={`flex flex-col items-end gap-1 z-10 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <span className="text-[9px] font-medium text-white/80 capitalize">{today}</span>
              <div className="flex items-center gap-4 text-[9px] font-bold tracking-widest">
                <span className="text-white/60">GBP/PEN <span className="text-white">4.75</span> <span className="text-green-400">▲0.12%</span></span>
                <span className="text-white/60">USD/PEN <span className="text-white">3.78</span></span>
              </div>
            </div>
          </div>
          <div className={`flex justify-center w-full transition-all duration-500 overflow-hidden ${isScrolled ? 'mt-[20px] max-h-12 opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[10px] font-bold font-inter text-white/90">
              {categories.map(cat => (
                <button key={cat} className="hover:text-accent transition-colors whitespace-nowrap">{cat}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* ── 2. CABECERA SECUNDARIA BLANCA ── */}
      <header className={`pt-16 md:pt-20 bg-white transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-6 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-[1000px] mx-auto px-6 py-4">
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
          <nav className="flex flex-wrap justify-between items-center gap-y-2 pt-3">
            {categories.map(cat => (
              <button key={cat} className="text-[8px] font-bold font-inter text-gray-950 hover:text-accent transition-all tracking-[0.2em] uppercase border-b-2 border-transparent hover:border-accent pb-1">
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {isScrolled && <div className="h-[40px]" />}

      {/* ── MAIN: solo fondo blanco, sin restricciones de ancho ── */}
      <main className="w-full bg-white pb-20 overflow-hidden">

        {/* ── SECCIÓN 1: NOTICIA DESTACADA ── */}
        <section className="py-0">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Línea */}
            <div className="flex justify-center mb-12">
              <div className="w-[952px] max-w-[100%] h-[2px] bg-black opacity-100"></div>
            </div>

            {/* CONTENEDOR FLEX */}
            <div className="flex flex-col lg:flex-row gap-x-[40px] gap-y-10 items-stretch">

              {/* ── BLOQUE IZQUIERDO (TEXTO) ── */}
              {/* 🔧 controla ancho aquí */}
              <div className="w-full lg:w-[450px] flex-shrink-0 flex flex-col justify-start mt-[-38px]">
                <div>
                  <span className="text-[10px] font-bold font-inter text-[#0335FF] uppercase mb-4 block opacity-5 border-b pb-1 mb-2 tracking-[0.05em] invisible">
                    SPACER
                  </span>

                  <h2 className="text-[36px] md:text-[32px] lg:text-[42px] font-libre font-bold leading-[1.18] text-gray-950 mb-4 tracking-[-0.02em]">
                    <Link href={`/noticias/${featuredNews.id}`} className="hover:text-[#0335FF] transition-colors">
                      {featuredNews.title}
                    </Link>
                  </h2>

                  <span className="text-[10px] font-bold font-inter text-[#0335FF] leading-none mb-4 block">
                    {featuredNews.category}
                  </span>

                  {/* 🔧 controla ancho del texto aquí */}
                  <p className="max-w-[390px] text-[#333333] text-[12px] font-normal font-inter leading-relaxed mb-6 line-clamp-6">
                    {featuredNews.excerpt}
                  </p>
                </div>

                <span className="text-[10px] font-bold font-inter text-gray-500 uppercase block mt-1 pb-8">
                  {featuredNews.date || (featuredNews as any).time}
                </span>
              </div>

              {/* ── BLOQUE CENTRO (IMAGEN) ── */}
              {/* 🔧 crece automáticamente */}
              <div className="flex-1 flex flex-col lg:-ml-[70px] justify-start">
                <Link
                  href={`/noticias/${featuredNews.id}`}
                  className="block w-full aspect-[272/300] bg-white overflow-hidden"
                  style={{ minHeight: "300px" }}
                >
                  <img
                    key={featuredNews.image}
                    src={featuredNews.image}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt="Noticia destacada"
                  />
                </Link>
              </div>

              {/* ── BLOQUE DERECHO (LATERALES) ── */}
              {/* 🔧 controla ancho aquí */}
              <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col justify-start h-full gap-5">
                {sideNews.map((news, idx) => (
                  <div key={news.id} className="group flex flex-col flex-1 pb-4 last:pb-0">
                    <Link href={`/noticias/${news.id}`} className="block w-full aspect-[195/84] bg-white overflow-hidden mb-3">
                      <img
                        src={news.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={news.title}
                      />
                    </Link>

                    <div className="flex flex-col flex-shrink-0">
                      <span className="text-[10px] leading-tight font-bold font-inter text-[#0335FF] block mb-1">
                        {news.category}
                      </span>

                      <h3 className="text-[15px] lg:text-[17px] leading-[1.15] font-libre font-bold text-gray-950 mb-2">
                        <Link href={`/noticias/${news.id}`} className="group-hover:text-[#0335FF] transition-colors block line-clamp-2">
                          {news.title}
                        </Link>
                      </h3>

                      <span className="text-[10px] leading-tight font-bold font-inter text-gray-500 uppercase block mt-auto">
                        {news.date || (news as any).time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── SECCIÓN 2: NOTICIAS RECIENTES ── */}
        <section className="pt-[48px] pb-[48px] relative">
          <div className="max-w-[1200px] mx-auto px-[24px]">

            {/* ── CABECERA ── */}
            <div className="flex items-center relative mb-[32px] mt-[-40px]">

              {/* ── GRUPO IZQUIERDO: TÍTULO + LÍNEA ── */}
              <div className="flex items-center gap-[16px] w-full">
                <h2 className="text-[16px] font-inter font-bold text-black uppercase tracking-[-0.01em] whitespace-nowrap">
                  NOTICIAS RECIENTES
                </h2>
                <div className="h-[2px] flex-1 bg-black" />
              </div>

              {/* ── FLECHAS ── */}
              {/* 🔧 cambia mt-[...] para bajarlas más o menos */}
              <div className="absolute right-[30px] flex items-center gap-[20px] mt-[50px]">
                <button className="text-gray-300 hover:text-black transition-colors">
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button className="text-black">
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── CONTENEDOR DE TARJETAS ── */}
            {/* 🔧 cambia gap horizontal / vertical aquí */}
            <div className="flex flex-wrap gap-x-[35px] gap-y-[28px]">

              {recentNews.map(news => (
                <article
                  key={news.id}
                  className="min-w-[200px]  w-[200px] flex flex-col group cursor-pointer"
                >
                  {/* 🔧 controla altura exacta de imagen aquí */}
                  <div className="w-full h-[130px] bg-gray-50 overflow-hidden mb-[12px]">
                    <img
                      src={news.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={news.title}
                    />
                  </div>

                  {/* 🔧 categoría */}
                  <span className="text-[8px] font-bold font-inter text-[#0335FF] uppercase mb-[6px]">
                    {news.category}
                  </span>

                  {/* 🔧 controla tamaño + líneas del título */}
                  <h4 className="text-[13px] font-libre font-bold text-gray-950 leading-[1.15] mb-[10px] group-hover:text-accent transition-colors line-clamp-2">
                    {news.title}
                  </h4>

                  {/* 🔧 controla tamaño + líneas del extracto */}
                  <p className="text-[10px] font-normal font-inter text-gray-500 leading-[1.3] line-clamp-3 mb-[10px]">
                    {news.excerpt}
                  </p>

                  {/* 🔧 fecha */}
                  <span className="text-[10px] font-bold font-inter text-gray-500 uppercase mt-auto">
                    {news.date || (news as any).time}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3: OPINION & ANALISIS ── */}
        <section className="pt-[40px] pb-[56px] border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-[24px]">

            {/* ── CABECERA ── */}
            <div className="flex items-center gap-[16px] mb-[24px] mt-[-50px]">
              <h2 className="text-[16px] font-inter font-bold text-black uppercase tracking-[-0.01em] whitespace-nowrap">
                OPINION & ANALISIS
              </h2>
              <div className="h-[1.5px] flex-1 bg-black" />
            </div>

            {/* ── CONTENEDOR PRINCIPAL ── */}
            <div className="flex flex-col lg:flex-row gap-[32px] items-stretch">

              {/* ── BLOQUE IZQUIERDO: NOTA PRINCIPAL ── */}
              <div className="w-full lg:w-[800px] flex-shrink-0">
                <div className="relative group cursor-pointer overflow-hidden w-full h-[420px]">

                  {/* Imagen */}
                  <div className="w-full h-full bg-gray-900 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[4000ms]"
                      alt="Opinion"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-black/100 px-[24px] py-[60px] text-white">
                    <h3 className="text-[26px] md:text-[30px] font-libre font-bold leading-[1.15] mb-[20px]">
                      El cuidado de las RIN: Como politica de estado para la estabilidad monetaria del Peru
                    </h3>

                    {/* ── AUTOR + FECHA + BOTÓN LEER ── */}
                    <div className="flex justify-between items-end">

                      {/* Autor y fecha */}
                      <div className="flex flex-col gap-[10px]">
                        <span className="text-[12px] font-inter font-bold text-white/100 uppercase tracking-[0.06em]">
                          ESCRITO POR JAVIER GONZALEZ
                        </span>
                        <p className="text-[10px] font-inter font-bold text-white/100 uppercase tracking-[0.06em]">
                          26 DE ABRIL
                        </p>
                      </div>

                      {/* ── BOTÓN LEER ── */}
                      <Link
                        href="/noticias/cuidado-rin"
                        className="flex items-center gap-[8px] group/leer hover:scale-105 active:scale-95 transition-all duration-200 mr-[40px]"
                      >
                        <span className="text-[17px] font-inter font-medium text-white uppercase tracking-[0.08em] group-hover/leer:text-gray-300 transition-colors">
                          LEER
                        </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white group-hover/leer:text-gray-300 group-hover/leer:translate-x-0.5 group-hover/leer:-translate-y-0.5 transition-all"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>

                    </div>
                  </div>
                </div>
              </div>

              {/* ── BLOQUE DERECHO: LISTA ── */}
              <div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col divide-y divide-gray-100 mt-[40px]">
                {opinionNews.map((op, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center group cursor-pointer py-[24px] first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-[6px] pr-[16px]">
                      <h4 className="text-[20px] font-libre font-bold text-gray-950 leading-[1.15] group-hover:text-accent transition-colors">
                        {op.title}
                      </h4>

                      <div className="flex flex-col gap-[4px] mt-[6px]">
                        <span className="text-[10px] font-inter font-bold text-blue-700 uppercase tracking-[0.08em]">
                          {op.author}
                        </span>
                        <span className="text-[9px] font-inter font-bold text-gray-400 uppercase tracking-[0.12em]">
                          {op.date}
                        </span>
                      </div>
                    </div>

                    <svg
                      className="w-[20px] h-[20px] text-gray-800 group-hover:text-black transition-all flex-shrink-0 mt-[-20px] relative right-[20px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* sction. SER SOCIO DE BRITCHAM */}
        <section className="bg-[#0151F2] h-[430px] flex items-start relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full h-full flex flex-col justify-between py-10 md:py-12">

            {/* TOP: Title with line */}
            <div className="flex items-center gap-6">
              <h2 className="text-white font-inter text-base md:text-3xl font-bold whitespace-nowrap">
                Ser socio de Britcham
              </h2>
              <div className="h-[3px] bg-white/90 flex-1" />
            </div>

            {/* MIDDLE: Main Message */}
            <h3 className="text-white font-libre text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.15] max-w-[80%]">
              Conecta con líderes empresariales y oportunidades bilaterales.
            </h3>

            {/* BOTTOM: Button + arrows */}
            <div className="flex items-center justify-between w-full">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-white text-[#0151F2] px-10 py-4 font-inter font-bold text-[16px] uppercase tracking-[0.1em] hover:bg-white/95 transition-all hover:-translate-y-1"
              >
                CONTACTAR
              </Link>


            </div>

          </div>
        </section>

        {/* ── SECCIÓN 4: PROXIMOS EVENTOS ── */}
        <section className="pt-[40px] pb-[-5px]">
          <div className="max-w-[1200px] mx-auto px-[24px]">

            {/* ── CABECERA ── */}
            <div className="flex items-center relative mb-[32px] mt-[-10px]">

              {/* ── GRUPO IZQUIERDO: TÍTULO + LÍNEA ── */}
              <div className="flex items-center gap-[16px] w-full">
                <h2 className="text-[16px] font-inter font-bold text-black uppercase tracking-[-0.01em] whitespace-nowrap">
                  PROXIMOS EVENTOS
                </h2>
                <div className="h-[2px] flex-1 bg-black" />
              </div>

              {/* ── FLECHAS ── */}
              {/* 🔧 cambia mt-[...] para bajarlas más o menos */}
              <div className="absolute right-[30px] flex items-center gap-[20px] mt-[50px]">
                <button className="text-gray-300 hover:text-black transition-colors">
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="text-black">
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ── GRID DE EVENTOS ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[60px] gap-y-[20px]">
              {events.map((ev, i) => (
                <div key={i} className="flex flex-col text-center group cursor-pointer">

                  {/* Fecha */}
                  <span className="text-[10px] font-inter font-bold text-gray-500 uppercase tracking-[0.06em] mb-[8px]">
                    {ev.date}
                  </span>

                  {/* Título */}
                  <h4 className="text-[15px] font-libre font-black text-gray-900 leading-tight mb-[-5px] h-[72px] px-[4px] group-hover:text-red-600 transition-colors">
                    {ev.title}
                  </h4>

                  {/* Imagen */}
                  <div className="w-full h-[160px] bg-gray-50 overflow-hidden mb-[16px] shadow-sm">
                    <img
                      src={ev.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1000ms]"
                      alt={ev.title}
                    />
                  </div>

                  {/* Botón VER */}
                  <div className="flex justify-center">
                    <button className="bg-black text-white py-[4px] px-[32px] text-[10px] font-inter font-bold tracking-widest uppercase hover:bg-accent transition-all w-full max-w-[120px]">
                      VER
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

      </main>


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