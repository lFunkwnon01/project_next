'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useNews } from '@/contexts/NewsContext';

const fallbackArticle = {
  title: "Exportaciones al Reino Unido incrementaron en 2.3% durante el ultimo trimestre",
  category: "Comercio Internacional",
  author: "EQUIPO DE INVESTIGACIÓN",
  time: "HACE 2 HORAS",
  image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  content: `
    <p>El Reino Unido representa aproximadamente el 19% del total de las contribuciones de capital en el país, compitiendo con España (18%) y Estados Unidos (11%) por el primer puesto. Este notable incremento interanual resalta la importancia estratégica y las fuertes relaciones bilaterales entre ambas naciones.</p>
    <p>Durante los últimos tres meses, el volumen de exportaciones en el sector agroindustrial, así como de minerales tradicionales, ha visto un repunte significativo. Las condiciones climáticas favorables y las nuevas políticas de exportación han jugado un rol crucial en esta mejora.</p>
    <h3>Impacto en la Economía Local</h3>
    <p>Se espera que este incremento no solo beneficie a las grandes corporaciones, sino que también tenga un efecto multiplicador en la economía local, generando miles de empleos directos e indirectos en las regiones productoras.</p>
    <p>Continuaremos monitoreando estos indicadores clave para evaluar el impacto a largo plazo de estos desarrollos. Las proyecciones sugieren que si esta tendencia se mantiene, podríamos ver un cierre de año histórico en términos de balance comercial.</p>
  `
};

export default function NoticiaDetalleView({ id }: { id: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getArticle } = useNews();

  const categories = ['ENERGÍA', 'MINERÍA', 'SALUD', 'AGROINDUSTRIA', 'COMERCIO INTERNACIONAL', 'ECONOMÍA', 'INFRAESTRUCTURA', 'SOCIAL'];
  const today = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const contextArticle = getArticle(id);
  const article = contextArticle ? {
    ...fallbackArticle,
    ...contextArticle,
    author: (contextArticle as any).author || 'EQUIPO DE INVESTIGACIÓN',
    content: (contextArticle as any).content || `<p>${contextArticle.excerpt || ''}</p>`,
  } : fallbackArticle;

  const events = [
    { title: "Webinar: Comite de Infraestructura 2026", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Desayuno Corporativo \"Perspectivas economicas al 2024\"", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1475721027187-4024733923f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "III Comite de Desarrollo Sostenible", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Coffee and Networking Mineria 2025", date: "26 DE ABRIL", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-950 selection:bg-accent selection:text-white overflow-x-hidden">

      {/* 1. BLACK STICKY NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[110] bg-black text-white transition-all duration-300 ${isScrolled ? 'h-28 md:h-32' : 'h-20 md:h-24'}`}>
        <div className="max-w-[1400px] mx-auto w-full h-full px-6 flex flex-col justify-center">
          <div className="flex items-center justify-between relative w-full">
            <Link href="/" className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] font-sans hover:text-accent transition-colors z-10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
              INICIO
            </Link>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
              <div className="w-14 md:w-16 h-14 md:h-16 flex items-center justify-center">
                <img 
                  src="/assets/isotopo.png" 
                  alt="BPCC" 
                  width={64} // Puedes cambiar este valor en píxeles
                  height={64} // Puedes cambiar este valor en píxeles
                  className="w-full h-full object-contain" 
                />
              </div>
              <Link href="/noticias" className="hover:text-gray-300 transition-colors">
                <h1 className="text-3xl md:text-5xl font-serif font-black italic tracking-tighter uppercase leading-none">News</h1>
              </Link>
            </div>
            <div className="w-16"></div>
          </div>
          <div className={`flex justify-center w-full transition-all duration-500 overflow-hidden ${isScrolled ? 'mt-[28px] max-h-12 opacity-100' : 'mt-0 max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[9px] font-black font-sans tracking-[0.2em] text-white/90">
              {categories.map(cat => (
                <button key={cat} className="hover:text-accent transition-colors whitespace-nowrap">{cat}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 2. SECONDARY HEADER */}
      <header className={`pt-20 md:pt-24 bg-white border-b border-gray-100 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-10 pointer-events-none sticky top-16' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center text-[10px] font-sans font-bold tracking-widest uppercase text-gray-400 mb-6">
            <div className="flex gap-8">
              <div className="flex gap-2"><span>GBP/PEN</span> <span className="text-gray-950 leading-none">4.75 <span className="text-green-600">0.12%</span></span></div>
              <div className="flex gap-2"><span>USD/PEN</span> <span className="text-gray-950 leading-none">3.78</span></div>
            </div>
            <span className="font-news-source font-medium">{today}</span>
          </div>
          <nav className="flex flex-wrap justify-between items-center gap-y-4 pt-4 border-t border-gray-100">
            {categories.map(cat => (
              <button key={cat} className="text-[10px] font-black font-sans text-gray-950 hover:text-accent transition-all tracking-[0.25em] uppercase border-b-2 border-transparent hover:border-accent pb-1">{cat}</button>
            ))}
          </nav>
        </div>
      </header>

      {isScrolled && <div className="h-[120px]"></div>}

      {/* ARTICLE BODY */}
      <main className="max-w-[1000px] mx-auto px-6 md:px-12 bg-white pb-24 pt-12">
        <article>
          <header className="mb-10 text-center">
            <span className="text-[12px] font-black font-sans text-blue-700 uppercase tracking-[0.25em] mb-6 block">{article.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-black leading-tight text-gray-950 mb-8 tracking-tight">
              {article.title}
            </h1>
            <div className="flex justify-center items-center gap-6 text-[10px] font-news-source font-bold text-gray-400 uppercase tracking-[0.2em]">
              <span>POR {article.author}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>{article.time}</span>
            </div>
          </header>

          <div className="aspect-[21/9] w-full bg-gray-50 overflow-hidden shadow-sm mb-16">
            <img src={article.image} className="w-full h-full object-cover" alt="Article Cover" />
          </div>

          <div
            className="prose prose-lg max-w-none font-news-body text-gray-700 leading-relaxed prose-p:mb-6 prose-p:text-[17px] prose-p:font-medium prose-h3:font-serif prose-h3:font-black prose-h3:text-2xl prose-h3:text-gray-950 prose-h3:mt-12 prose-h3:mb-6 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:text-accent prose-strong:font-bold prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Link href="/noticias" className="text-[11px] font-sans font-black tracking-[0.3em] uppercase text-gray-950 hover:text-accent flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              VOLVER A NOTICIAS
            </Link>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* PROXIMOS EVENTOS */}
      <section className="py-20 border-t border-gray-100 max-w-[1400px] mx-auto px-6 md:px-12 bg-white">
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-[13px] font-sans font-black text-gray-950 uppercase tracking-[0.5em] whitespace-nowrap">PROXIMOS EVENTOS</h2>
          <div className="h-[1px] bg-gray-100 flex-grow"></div>
          <div className="flex gap-4">
            <button className="text-gray-300 hover:text-black transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button className="text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((ev, i) => (
            <div key={i} className="flex flex-col text-center group cursor-pointer">
              <span className="text-[10px] font-news-source font-bold text-gray-400 uppercase tracking-[0.3em] mb-3">{ev.date}</span>
              <h4 className="text-[16px] font-serif font-black text-gray-950 leading-tight mb-6 h-12 line-clamp-2 px-4 group-hover:text-accent transition-colors">{ev.title}</h4>
              <div className="aspect-[4/3] w-full bg-gray-50 overflow-hidden mb-8 shadow-sm">
                <img src={ev.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={ev.title} />
              </div>
              <div className="flex justify-center">
                <button className="bg-black text-white py-3 px-14 text-[11px] font-sans font-black tracking-[0.5em] uppercase hover:bg-accent transition-all shadow-md">VER</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 mb-20 border-b border-white/10 pb-12">
            <img src="/assets/logotipo_original.jpeg" alt="BPCC Footer" className="h-16 md:h-24 w-auto object-contain brightness-0 invert" />
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-[11px] font-sans font-black tracking-[0.4em] uppercase text-white/80">
              {categories.map(cat => (
                <Link key={cat} href="/noticias" className="hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1">{cat}</Link>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.5em] text-center max-w-2xl leading-relaxed">
            Copyright 2026 Camara de Comercio Peruano Britanica. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
