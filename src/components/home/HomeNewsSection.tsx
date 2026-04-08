'use client';

import Link from 'next/link';
import { HOME_NEWS_ARTICLES } from '@/config/newsData';

/**
 * Header component — logo + NEWS + descripción
 *
 * Nota: para ajustar con precisión, modifica solo los valores numéricos
 * dentro de la sección "CONFIGURACIÓN" abajo.
 */
function NewsHeader() {
  // -------------------------
  // CONFIGURACIÓN (editar aquí)
  // -------------------------
  const UNIT = 2; // unidad base en px.

  // Desplazamiento global del header (en px). Negativo = subir, positivo = bajar.
  const headerOffsetY = -20; // px

  // logo (imagen)
  const logoSize = 80;         // ancho/alto en px
  const logoImageOffsetX = 0;  // unidades
  const logoImageOffsetY = -5; // unidades

  // bloque logo + NEWS (mover ambos como una unidad)
  const logoBlockOffsetX = 40; // unidades -> px = unidades * UNIT
  const logoBlockOffsetY = 0;

  // texto descriptivo (lado derecho)
  const textFontSize = 22;     // px
  const textOffsetX = 0;       // unidades
  const textOffsetY = -4;      // unidades
  const textMaxWidth = 600;    // px
  const textLineClamp = 2;     // número de líneas visibles

  // separador
  const separatorMaxWidth = 1340; // px
  const separatorHeight = 2;      // px
  const separatorColor = '#000000';
  const separatorMarginBottom = 32; // px

  // padding header
  const headerPaddingTop = 0;   // px
  const headerPaddingBottom = 0;// px

  // -------------------------
  // CÁLCULOS (no necesitas tocar)
  // -------------------------
  const logoSizePx = `${logoSize}px`;
  const logoImageTranslate = `${logoImageOffsetX * UNIT}px, ${logoImageOffsetY * UNIT}px`;
  const logoBlockTranslate = `${logoBlockOffsetX * UNIT}px, ${logoBlockOffsetY * UNIT}px`;
  const textTranslate = `${textOffsetX * UNIT}px, ${textOffsetY * UNIT}px`;

  return (
    <header
      style={{
        transform: `translateY(${headerOffsetY}px)`,
      }}
    >
      <div
        className="flex flex-row justify-between items-center gap-6 mb-8"
        style={{
          paddingTop: `${headerPaddingTop}px`,
          paddingBottom: `${headerPaddingBottom}px`,
        }}
      >
        {/* Bloque movible: logo + NEWS */}
        <div
          className="flex items-center gap-4 shrink-0"
          style={{
            transform: `translate(${logoBlockTranslate})`,
          }}
        >
          <img
            src="/assets/isotopo.png"
            alt="BPCC"
            style={{
              width: logoSizePx,
              height: logoSizePx,
              objectFit: 'contain',
              transform: `translate(${logoImageTranslate})`,
              display: 'block',
            }}
          />

          <h2 className="text-4xl md:text-[56px] font-libre font-normal tracking-tight text-gray-950 whitespace-nowrap">
            NEWS
          </h2>
        </div>

        {/* Texto descripción — lado derecho */}
        <p
          style={{
            fontSize: `${textFontSize}px`,
            transform: `translate(${textTranslate})`,
            maxWidth: `${textMaxWidth}px`,
            display: '-webkit-box',
            WebkitLineClamp: textLineClamp,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.4',
            textAlign: 'right',
            fontWeight: 'normal',
            color: '#0a0a0a',
            fontFamily: 'var(--font-libre)',
            margin: 0,
          }}
        >
          Actualidad, análisis y novedades sobre la relación empresarial entre Perú y Reino Unido
        </p>
      </div>

      {/* Separador independiente — usa 100% pero con maxWidth igual al contenedor */}
      <div
        style={{
          width: '100%',
          maxWidth: `${separatorMaxWidth}px`,
          height: `${separatorHeight}px`,
          backgroundColor: separatorColor,
          margin: `0 auto ${separatorMarginBottom}px auto`,
        }}
      />
    </header>
  );
}

/**
 * Ajuste global para mover verticalmente el bloque de contenido (px).
 * Negativo = subir, Positivo = bajar.
 */
const CONTENT_OFFSET_Y = -10; // px

/**
 * Featured Opinion — artículo grande con imagen de fondo
 */
function FeaturedOpinion({ article }: { article: any }) {
  if (!article) return null;

  const overlayOpacity = 0.64; // opacidad del overlay

  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-sm min-h-[480px]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay en la parte inferior */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[60%] md:h-[52%] flex items-center"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="md:flex-1">
              <span className="text-[9px] font-inter font-bold text-white uppercase tracking-[0.2em] mb-2 inline-block -translate-y-5">
                {article.category}
              </span>

              <h3 className="text-3xl md:text-[48px] lg:text-[28px] font-libre font-bold text-white leading-tight mt-2 max-w-3xl -translate-y-5">
                {article.title}
              </h3>

              {/* META (autor + fecha) debajo del título */}
              <div className="mt-3 text-white text-[12px] font-inter uppercase tracking-wider">
                <div className="font-inter -translate-y-4">ESCRITO POR {article.author}</div>
                <div className="mt-1 -translate-y-1">{article.date}</div>
              </div>
            </div>

            {/* Botón LEER */}
            <div className="mt-4 md:mt-0 md:ml-6 flex justify-end">
              <Link
                href={`/noticias/${article.id}`}
                className="flex items-center gap-2 text-white font-inter text-2xl md:text-[30px] lg:text-[20px] uppercase tracking-[0.05em] hover:opacity-80 transition-transform translate-y-[18px] -translate-x-[10px]"
              >
                LEER
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ width: '32px', height: '32px' }} // Cambia aquí el tamaño en px
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7h-6M17 7v6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Degradado opcional */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </div>
  );
}

/**
 * Artículo secundario 1 - configuración independiente
 */
function OpinionSubArticleSecondary1({ article }: { article: any }) {
  if (!article) return null;

  // Configuración específica para el secundario 1
  const SUB1_OFFSET_Y = -20; // px (negativo => sube)
  const SUB1_SVG_SIZE_PX = 40; // tamaño del SVG en px
  const SUB1_SVG_OFFSET_X_PX = -20; // desplazamiento X del SVG (negativo => izquierda)
  const SUB1_TITLE_RESERVED_PX = 72; // espacio reservado para la flecha

  const title = (article.title || '').trim();

  // Palabras que queremos usar para forzar split en este artículo (e.g. "en")
  const splitWordRegex = /\b(en|del|al)\b/i;
  const splitIndex = title.search(splitWordRegex);

  let titlePrefix = title;
  let titleSuffix = '';

  if (splitIndex > 3 && splitIndex < title.length - 1) {
    titlePrefix = title.slice(0, splitIndex).trim();
    titleSuffix = title.slice(splitIndex).trim();
  } else {
    const words = title.split(/\s+/).filter(Boolean);
    if (words.length >= 4) {
      titlePrefix = words.slice(0, -2).join(' ');
      titleSuffix = words.slice(-2).join(' ');
    } else {
      titlePrefix = title;
      titleSuffix = '';
    }
  }

  return (
    <Link
      href={`/noticias/${article.id}`}
      className="group flex flex-col gap-2 pt-1 h-full transition-all duration-300"
      style={{ transform: `translateY(${SUB1_OFFSET_Y}px)` }}
    >
      <span className="text-[10px] font-inter font-bold text-[#0051F2] uppercase tracking-normal mb-1">
        {article.category}
      </span>

      <div className="flex justify-between items-start gap-4">
        <h4
          className="text-[16px] md:text-[24px] font-libre font-bold text-gray-950 group-hover:text-[#0051F2] transition-colors leading-[1.1] flex-grow"
          style={{ maxWidth: `calc(100% - ${SUB1_TITLE_RESERVED_PX}px)` }}
        >
          {titlePrefix}
          {titleSuffix ? <span className="block">{' '}{titleSuffix}</span> : null}
        </h4>

        <div className="shrink-0 pt-2" style={{ transform: `translateX(${SUB1_SVG_OFFSET_X_PX}px)` }}>
          <svg
            className="text-gray-950 group-hover:text-[#0051F2] group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: `${SUB1_SVG_SIZE_PX}px`, height: `${SUB1_SVG_SIZE_PX}px` }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <span className="text-[14px] font-inter font-bold text-gray-600 uppercase tracking-normal mt-4">
        {article.date}
      </span>
    </Link>
  );
}

/**
 * Artículo secundario 2 - configuración independiente
 */
function OpinionSubArticleSecondary2({
  article,
  offsetY = -20, // px por defecto (más conservador)
}: {
  article: any;
  offsetY?: number;
}) {
  if (!article) return null;

  // Seguridad: no permitir que el elemento suba demasiado (evita "desapariciones")
  const MIN_OFFSET = -40; // no permitir más negativo que esto
  const SUB2_OFFSET_Y = Math.max(offsetY, MIN_OFFSET);

  const SUB2_SVG_SIZE_PX = 36;
  const SUB2_SVG_OFFSET_X_PX = -12;
  const SUB2_TITLE_RESERVED_PX = 72;

  const title = (article.title || '').trim();
  const splitWordRegex = /\b(el|la|los|las|del|al|en)\b/i;
  const splitIndex = title.search(splitWordRegex);

  let titlePrefix = title;
  let titleSuffix = '';

  if (splitIndex > 3 && splitIndex < title.length - 1) {
    titlePrefix = title.slice(0, splitIndex).trim();
    titleSuffix = title.slice(splitIndex).trim();
  } else {
    const words = title.split(/\s+/).filter(Boolean);
    if (words.length >= 4) {
      titlePrefix = words.slice(0, -2).join(' ');
      titleSuffix = words.slice(-2).join(' ');
    } else {
      titlePrefix = title;
      titleSuffix = '';
    }
  }

  // DEBUG útil mientras pruebas (pon false para producción)
  const DEBUG = false;

  return (
    <Link
      href={`/noticias/${article.id}`}
      className="group flex flex-col gap-2 pt-1 transition-all duration-300"
      style={{
        transform: `translateY(${SUB2_OFFSET_Y}px)`,
        ...(DEBUG ? { background: 'rgba(255,0,0,0.05)', outline: '1px dashed rgba(255,0,0,0.2)' } : {}),
      }}
    >
      <span className="text-[10px] font-inter font-bold text-[#0051F2] uppercase tracking-normal mb-1">
        {article.category}
      </span>

      <div className="flex justify-between items-start gap-4">
        <h4
          className="text-[16px] md:text-[24px] font-libre font-bold text-gray-950 group-hover:text-[#0051F2] transition-colors leading-[1.1] flex-grow"
          style={{ maxWidth: `calc(100% - ${SUB2_TITLE_RESERVED_PX}px)` }}
        >
          {titlePrefix}
          {titleSuffix ? <span className="block">{' '}{titleSuffix}</span> : null}
        </h4>

        <div className="shrink-0 pt-2" style={{ transform: `translateX(${SUB2_SVG_OFFSET_X_PX}px)` }}>
          <svg
            className="text-gray-950 group-hover:text-[#0051F2] group-hover:translate-x-1 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: `${SUB2_SVG_SIZE_PX}px`, height: `${SUB2_SVG_SIZE_PX}px` }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      <span className="text-[14px] font-inter font-bold text-gray-600 uppercase tracking-normal mt-4">
        {article.date}
      </span>
    </Link>
  );
}

/**
 * Columna derecha — botón ENTRAR + 2 noticias generales con imagen
 */
// Icono reutilizable — controlar tamaño por píxeles con props
function ArrowIcon({ width = 20, height = 20 }: { width?: number; height?: number }) {
  return (
    <svg
      className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      style={{ width: `${width}px`, height: `${height}px` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function RightNewsColumn({ articles }: { articles: any[] }) {
  return (
    <div className="flex flex-col gap-6" style={{ transform: `translateY(${CONTENT_OFFSET_Y}px)` }}>
      {/* Botón ENTRAR (centrado, sin línea inferior) */}
      <Link
        href="/noticias"
        className="group flex items-center justify-center gap-2 text-gray-950 font-inter  text-[25px] tracking-[0.02em] uppercase hover:text-brand-blue-bright transition-colors py-4"
      >
        ENTRAR
        {/* Usar ArrowIcon y controlar tamaño en px */}
        <ArrowIcon width={30} height={30} />
      </Link>
      {/* 2 noticias generales */}
      {articles.map(article => (
        <Link key={article.id} href={`/noticias/${article.id}`} className="group flex flex-col gap-3">
          <div className="aspect-[16/9] overflow-hidden rounded-sm">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-inter font-bold text-brand-blue-bright uppercase tracking-widest">
              {article.category}
            </span>
            <h4 className="text-base font-libre font-bold text-gray-950 leading-snug group-hover:text-brand-blue-bright transition-colors line-clamp-2">
              {article.title}
            </h4>
            <span className="text-[10px] font-inter font-bold text-gray-400 uppercase tracking-widest">
              {article.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/**
 * Main News Section for Home Page
 */
export function HomeNewsSection() {
  // 1. Tomamos el primer artículo como principal (FeaturedOpinion)
  const opinionFeatured = HOME_NEWS_ARTICLES[0];

  // 2. Tomamos los siguientes 2 artículos como secundarios
  const opinionSubs = HOME_NEWS_ARTICLES.slice(1, 3);

  // 3. Tomamos los restantes para la columna derecha (generalNews)
  const generalNews = HOME_NEWS_ARTICLES.slice(3, 5);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1340px] mx-auto px-6 md:px-12">
        <NewsHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna izquierda — Featured + 2 sub-artículos opinión */}
          <div className="lg:col-span-9 flex flex-col gap-6">
            <FeaturedOpinion article={opinionFeatured} />

            {/* Fila de 2 sub-artículos con divisor vertical */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {opinionSubs.map((article, idx) => (
                <div
                  key={article.id}
                  className={idx === 0 ? 'pr-6 md:border-r border-gray-200' : 'pl-6'}
                >
                  {idx === 0 ? (
                    <OpinionSubArticleSecondary1 article={article} />
                  ) : (
                    <OpinionSubArticleSecondary2 article={article} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — ENTRAR + 2 noticias generales */}
          <div className="lg:col-span-3">
            <RightNewsColumn articles={generalNews} />
          </div>
        </div>
      </div>
    </section>
  );
}