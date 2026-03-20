'use client';

import Link from 'next/link';
import { HOME_NEWS_ARTICLES } from '@/config/newsData';

/**
 * Header component for the News section matching the reference design.
 */
function NewsHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8 border-b border-gray-200 pb-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <img src="/assets/isotopo.png" alt="BPCC" className="w-12 h-12 object-contain brightness-0" />
          <h2 className="text-5xl md:text-6xl font-libre font-normal tracking-tight text-gray-950">
            NEWS
          </h2>
        </div>
        <div className="h-12 w-[1px] bg-gray-300 hidden md:block" />
        <p className="max-w-md text-[13px] md:text-[15px] font-inter font-normal text-gray-600 leading-snug">
          Actualidad, análisis y novedades sobre la relación empresarial entre Perú y Reino Unido
        </p>
      </div>
      <Link 
        href="/noticias" 
        className="group flex items-center gap-2 text-gray-950 font-inter font-bold text-sm tracking-widest uppercase hover:text-brand-blue-bright transition-colors"
      >
        ENTRAR
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </Link>
    </div>
  );
}

/**
 * Featured Opinion box on the left.
 */
function FeaturedOpinion({ article }: { article: any }) {
  if (!article) return null;
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-sm h-full min-h-[450px]">
      <div className="absolute inset-0">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col justify-end h-full">
        <span className="text-[11px] font-inter font-bold text-white/90 uppercase tracking-[0.2em] mb-4">
          {article.category}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-libre font-bold text-white leading-tight mb-8 max-w-2xl group-hover:text-blue-200 transition-colors">
          {article.title}
        </h3>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-t border-white/20 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-inter font-bold text-white/50 uppercase tracking-widest">
              ESCRITO POR {article.author}
            </span>
            <span className="text-[10px] font-inter font-bold text-white/40 uppercase tracking-widest">
              {article.date}
            </span>
          </div>
          
          <Link 
            href={`/noticias/${article.id}`}
            className="flex items-center gap-3 text-white font-inter font-bold text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
          >
            LEER
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Side news item for the right column.
 */
function SideNewsItem({ article }: { article: any }) {
  if (!article) return null;
  return (
    <Link href={`/noticias/${article.id}`} className="group flex flex-col gap-4">
      <div className="aspect-[16/9] overflow-hidden rounded-sm">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-inter font-bold text-brand-blue-bright uppercase tracking-widest">
          {article.category}
        </span>
        <h4 className="text-lg font-libre font-bold text-gray-950 leading-snug group-hover:text-brand-blue-bright transition-colors line-clamp-2">
          {article.title}
        </h4>
        <span className="text-[10px] font-inter font-bold text-gray-400 uppercase tracking-widest">
          {article.date}
        </span>
      </div>
    </Link>
  );
}

/**
 * Bottom news article that appears in a row.
 */
function BottomNewsArticle({ article }: { article: any }) {
  if (!article) return null;
  return (
    <Link href={`/noticias/${article.id}`} className="group flex flex-col gap-3 py-6 border-t border-gray-100 h-full">
      <span className="text-[10px] font-inter font-bold text-brand-blue-bright uppercase tracking-widest">
        {article.category}
      </span>
      <div className="flex justify-between items-start gap-4">
        <h4 className="text-xl font-libre font-bold text-gray-950 leading-tight group-hover:text-brand-blue-bright transition-colors flex-grow">
          {article.title}
        </h4>
        <div className="shrink-0 pt-1">
          <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-950 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      <span className="text-[10px] font-inter font-bold text-gray-400 uppercase tracking-widest">
        {article.date}
      </span>
    </Link>
  );
}

/**
 * Main News Section for Home Page.
 */
export function HomeNewsSection() {
  const opinionFeatured = HOME_NEWS_ARTICLES.find(a => a.category === 'Opinion y Analisis');
  const otherNews = HOME_NEWS_ARTICLES.filter(a => a.id !== opinionFeatured?.id);
  
  const sideNews = otherNews.slice(0, 2);
  const bottomNews = otherNews.slice(2, 4);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <NewsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Main Featured Opinion (Left) */}
          <div className="lg:col-span-8">
            <FeaturedOpinion article={opinionFeatured} />
          </div>

          {/* Side News (Right) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {sideNews.map(article => (
              <SideNewsItem key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {bottomNews.map(article => (
            <BottomNewsArticle key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
