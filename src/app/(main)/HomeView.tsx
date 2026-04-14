'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import Link from 'next/link';
import { HomeNewsSection } from '@/components/home/HomeNewsSection';

/* =========================================================
   1) DATA DEL HOME
========================================================= */

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
  },
];

const MOCK_EVENTS = [
  { month: 'ABR', day: '7', title: 'PERU: MINING SUMMIT 2026', time: '13:00', location: 'Hotel Westin, San Isidro' },
  { month: 'MAR', day: '18', title: 'DISRUPTIVE TECHNOLOGY AND CORPORATE SUMMIT 2026', time: '13:00', location: 'Hotel Westin, San Isidro' },
  { month: 'MAY', day: '12', title: 'UK-PERU BUSINESS FORUM', time: '09:00', location: 'Sede BritCham' },
];

const CORPORATE_LOGOS = [
  { src: '/assets/gca_logo.png', alt: 'GCA - Socio de Britcham', height: 100 },
  { src: '/assets/anglo_americano.png', alt: 'Anglo American - Socio Corporativo', height: 80 },
  { src: '/assets/upc.png', alt: 'UPC - Alianza Educativa', height: 76 },
  { src: '/assets/diageo.png', alt: 'Diageo - Socio de Britcham', height: 40 },
  { src: '/assets/britanico_logo.jpg', alt: 'Británico - Alianza Cultural', height: 80 },
  { src: '/assets/belmond_logo.png', alt: 'Belmond - Socio de Britcham', height: 100 },
];

const FAQ_ITEMS = [
  {
    question: '¿Cómo formar parte de la Cámara de Comercio Peruano Británica?',
    answer: 'Para ser socio de BritCham Peru, las empresas deben completar una solicitud y pasar por un proceso de revisión. Ofrecemos networking, asesoría comercial y acceso a eventos exclusivos entre Perú y Reino Unido.',
  },
  {
    question: '¿Qué servicios ofrece Britcham para el comercio entre Perú y Reino Unido?',
    answer: 'Brindamos consultoría estratégica, estudios de mercado, networking de alto nivel y apoyo institucional para fortalecer la inversión y el comercio bilateral.',
  },
];

/* =========================================================
   2) VARIABLES DE ESTILO / CONTROL DE PIXELES
   =========================================================
   Cada sección tiene 3 niveles:
   - mobile:  < 768px  (teléfonos)
   - tablet:  768–1023px (tablets, iPads)
   - desktop: ≥ 1024px (laptops, monitores)

   Cambia los números aquí para ajustar por dispositivo.
   NO toques el JSX para cambiar dimensiones.
========================================================= */

const SECTION_STYLES = {

  /* -----------------------------------------
     SHARED — contenedor global
     containerMaxWidth  -> ancho máximo del contenido
     containerPx...     -> padding horizontal lateral
  ----------------------------------------- */
  shared: {
    containerMaxWidth: '1440px',
    containerPxMobile: '20px',   // padding lateral en móvil
    containerPxTablet: '32px',   // padding lateral en tablet
    containerPxDesktop: '48px',   // padding lateral en desktop
  },

  /* -----------------------------------------
     HERO
     heroHeight...      -> altura del hero por dispositivo
     heroMinHeight      -> altura mínima absoluta
     contentPb...       -> padding-bottom del texto hero
     titleMaxWidth      -> ancho máximo del título
     descMaxWidth       -> ancho máximo del párrafo
     controlsBottom     -> distancia controles desde abajo
     controlsLeft...    -> distancia controles desde la izquierda
  ----------------------------------------- */
  hero: {
    heroHeightMobile: '100svh',  // ocupa toda la pantalla en móvil (svh = safe viewport height)
    heroHeightTablet: '90vh',
    heroHeightDesktop: '90vh',
    heroMinHeight: '560px',
    contentPbMobile: '100px',   // espacio para que los controles no tapen el texto
    contentPbTablet: '96px',
    contentPbDesktop: '128px',
    titleMaxWidth: '980px',
    descMaxWidth: '672px',
    controlsBottom: '32px',
    controlsLeftMobile: '20px',
    controlsLeftDesktop: '48px',
  },

  /* -----------------------------------------
     EVENTOS
     sectionPy...    -> padding vertical de la banda
     titleGap...     -> espacio entre título y ticker
     tickerGap       -> espacio entre cards del ticker
     articleGap      -> gap interno de cada evento
     articleBorder   -> grosor del borde izquierdo
     articlePl       -> padding-left de cada evento
  ----------------------------------------- */
  events: {
    sectionPyMobile: '28px',
    sectionPyTablet: '36px',
    sectionPyDesktop: '42px',
    titleGapMobile: '20px',   // en mobile el título va arriba, gap vertical
    titleGapDesktop: '64px',   // en desktop va al lado, gap horizontal
    tickerGap: '80px',
    articleGap: '24px',
    articleBorder: '2px',
    articlePl: '24px',
  },

  /* -----------------------------------------
     TRAYECTORIA
     sectionHeight...   -> altura total de la sección
     leftColumnPt/Pb    -> padding top/bottom columna izquierda
     blockOffsetX/Y     -> mueve TODO el bloque de texto (X=derecha, Y=abajo)
     lineHeight         -> altura de la línea vertical
     lineOffsetX/Y      -> mueve solo la línea
     textOffsetX/Y      -> mueve solo el texto grande
     dotsOffsetY        -> mueve los puntitos inferiores
     imageWidthDesktop  -> ancho imagen derecha en desktop
     imageHeight        -> altura de la imagen del mundo
  ----------------------------------------- */
  trajectory: {
    sectionHeightMobile: 'auto',   // en mobile crece con el contenido
    sectionHeightTablet: 'auto',
    sectionHeightDesktop: '430px',
    leftColumnPt: '40px',
    leftColumnPb: '40px',
    blockOffsetX: '0px',
    blockOffsetY: '0px',
    lineHeight: '128px',
    lineOffsetX: '0px',
    lineOffsetY: '0px',
    textOffsetX: '0px',
    textOffsetY: '0px',
    dotsOffsetY: '40px',
    imageWidthDesktop: '55%',
    imageHeight: '110%',
  },

  /* -----------------------------------------
     SOCIOS CORPORATIVOS
     sectionPy...       -> padding vertical
     titleMb            -> margen inferior del título
     gridGap            -> separación entre logos
     logoCardPadding    -> padding del contenedor de cada logo
  ----------------------------------------- */
  partners: {
    sectionPyMobile: '56px',
    sectionPyTablet: '80px',
    sectionPyDesktop: '128px',
    titleMb: '48px',
    gridGap: '16px',
    logoCardPadding: '16px',
  },

  /* -----------------------------------------
     MEMBRESÍA
     sectionHeight...   -> altura total del bloque azul
     contentPy...       -> padding vertical interno
     rowGap             -> gap entre título y línea decorativa
     titleMaxWidth      -> ancho máximo del texto principal
     buttonPxX/Y        -> padding interno del botón CTA
  ----------------------------------------- */
  membership: {
    sectionHeightMobile: 'auto',   // en mobile crece con el contenido
    sectionHeightTablet: 'auto',
    sectionHeightDesktop: '430px',
    contentPyMobile: '40px',
    contentPyTablet: '48px',
    contentPyDesktop: '48px',
    rowGap: '16px',
    titleMaxWidth: '90%',    // en mobile ocupa más ancho
    buttonPxX: '40px',
    buttonPxY: '16px',
  },

  /* -----------------------------------------
     IMAGEN FULL WIDTH SERVICIOS
     height...  -> altura del bloque imagen por dispositivo
  ----------------------------------------- */
  servicesImage: {
    heightMobile: '280px',
    heightTablet: '420px',
    heightDesktop: '580px',
  },

  /* -----------------------------------------
     BARRA DE SERVICIOS
     minHeight...       -> altura mínima
     sectionPy...       -> padding vertical en mobile/tablet
     contentGapDesktop  -> separación entre texto y CTA
     ctaMrDesktop       -> margen derecho del CTA
  ----------------------------------------- */
  servicesBar: {
    minHeightMobile: '180px',
    minHeightDesktop: '220px',
    sectionPyMobile: '40px',
    sectionPyTablet: '48px',
    contentGapDesktop: '80px',
    ctaMrDesktop: '25px',
  },

  /* -----------------------------------------
     FAQ
     sectionPy...    -> padding vertical
     titleMb         -> margen inferior título
     articleSpacing  -> separación entre preguntas
     contentMaxWidth -> ancho máximo del bloque FAQ
  ----------------------------------------- */
  faq: {
    sectionPyMobile: '56px',
    sectionPyDesktop: '96px',
    titleMb: '40px',
    articleSpacing: '28px',
    contentMaxWidth: '896px',
  },
};

/* =========================================================
   3) HELPERS DE VARIABLES CSS
   =========================================================
   Convierte los valores de SECTION_STYLES en variables CSS
   que se aplican con style={} en cada sección.
   Esto mantiene el JSX limpio.
========================================================= */

const SHARED_VARS: CSSProperties = {
  ['--container-max-width' as string]: SECTION_STYLES.shared.containerMaxWidth,
  ['--container-px-mobile' as string]: SECTION_STYLES.shared.containerPxMobile,
  ['--container-px-tablet' as string]: SECTION_STYLES.shared.containerPxTablet,
  ['--container-px-desktop' as string]: SECTION_STYLES.shared.containerPxDesktop,
};

const HERO_VARS: CSSProperties = {
  ['--hero-height-mobile' as string]: SECTION_STYLES.hero.heroHeightMobile,
  ['--hero-height-tablet' as string]: SECTION_STYLES.hero.heroHeightTablet,
  ['--hero-height-desktop' as string]: SECTION_STYLES.hero.heroHeightDesktop,
  ['--hero-min-height' as string]: SECTION_STYLES.hero.heroMinHeight,
  ['--hero-content-pb-mobile' as string]: SECTION_STYLES.hero.contentPbMobile,
  ['--hero-content-pb-tablet' as string]: SECTION_STYLES.hero.contentPbTablet,
  ['--hero-content-pb-desktop' as string]: SECTION_STYLES.hero.contentPbDesktop,
  ['--hero-title-max-width' as string]: SECTION_STYLES.hero.titleMaxWidth,
  ['--hero-desc-max-width' as string]: SECTION_STYLES.hero.descMaxWidth,
  ['--hero-controls-bottom' as string]: SECTION_STYLES.hero.controlsBottom,
  ['--hero-controls-left-mobile' as string]: SECTION_STYLES.hero.controlsLeftMobile,
  ['--hero-controls-left-desktop' as string]: SECTION_STYLES.hero.controlsLeftDesktop,
};

const EVENTS_VARS: CSSProperties = {
  ['--events-section-py-mobile' as string]: SECTION_STYLES.events.sectionPyMobile,
  ['--events-section-py-tablet' as string]: SECTION_STYLES.events.sectionPyTablet,
  ['--events-section-py-desktop' as string]: SECTION_STYLES.events.sectionPyDesktop,
  ['--events-title-gap-mobile' as string]: SECTION_STYLES.events.titleGapMobile,
  ['--events-title-gap-desktop' as string]: SECTION_STYLES.events.titleGapDesktop,
  ['--events-ticker-gap' as string]: SECTION_STYLES.events.tickerGap,
  ['--events-article-gap' as string]: SECTION_STYLES.events.articleGap,
  ['--events-article-border' as string]: SECTION_STYLES.events.articleBorder,
  ['--events-article-pl' as string]: SECTION_STYLES.events.articlePl,
};

const TRAJECTORY_VARS: CSSProperties = {
  ['--trajectory-section-height-mobile' as string]: SECTION_STYLES.trajectory.sectionHeightMobile,
  ['--trajectory-section-height-tablet' as string]: SECTION_STYLES.trajectory.sectionHeightTablet,
  ['--trajectory-section-height-desktop' as string]: SECTION_STYLES.trajectory.sectionHeightDesktop,
  ['--trajectory-left-column-pt' as string]: SECTION_STYLES.trajectory.leftColumnPt,
  ['--trajectory-left-column-pb' as string]: SECTION_STYLES.trajectory.leftColumnPb,
  ['--trajectory-block-offset-x' as string]: SECTION_STYLES.trajectory.blockOffsetX,
  ['--trajectory-block-offset-y' as string]: SECTION_STYLES.trajectory.blockOffsetY,
  ['--trajectory-line-height' as string]: SECTION_STYLES.trajectory.lineHeight,
  ['--trajectory-line-offset-x' as string]: SECTION_STYLES.trajectory.lineOffsetX,
  ['--trajectory-line-offset-y' as string]: SECTION_STYLES.trajectory.lineOffsetY,
  ['--trajectory-text-offset-x' as string]: SECTION_STYLES.trajectory.textOffsetX,
  ['--trajectory-text-offset-y' as string]: SECTION_STYLES.trajectory.textOffsetY,
  ['--trajectory-dots-offset-y' as string]: SECTION_STYLES.trajectory.dotsOffsetY,
  ['--trajectory-image-width-desktop' as string]: SECTION_STYLES.trajectory.imageWidthDesktop,
  ['--trajectory-image-height' as string]: SECTION_STYLES.trajectory.imageHeight,
};

const PARTNERS_VARS: CSSProperties = {
  ['--partners-section-py-mobile' as string]: SECTION_STYLES.partners.sectionPyMobile,
  ['--partners-section-py-tablet' as string]: SECTION_STYLES.partners.sectionPyTablet,
  ['--partners-section-py-desktop' as string]: SECTION_STYLES.partners.sectionPyDesktop,
  ['--partners-title-mb' as string]: SECTION_STYLES.partners.titleMb,
  ['--partners-grid-gap' as string]: SECTION_STYLES.partners.gridGap,
  ['--partners-logo-card-padding' as string]: SECTION_STYLES.partners.logoCardPadding,
};

const MEMBERSHIP_VARS: CSSProperties = {
  ['--membership-section-height-mobile' as string]: SECTION_STYLES.membership.sectionHeightMobile,
  ['--membership-section-height-tablet' as string]: SECTION_STYLES.membership.sectionHeightTablet,
  ['--membership-section-height-desktop' as string]: SECTION_STYLES.membership.sectionHeightDesktop,
  ['--membership-content-py-mobile' as string]: SECTION_STYLES.membership.contentPyMobile,
  ['--membership-content-py-tablet' as string]: SECTION_STYLES.membership.contentPyTablet,
  ['--membership-content-py-desktop' as string]: SECTION_STYLES.membership.contentPyDesktop,
  ['--membership-row-gap' as string]: SECTION_STYLES.membership.rowGap,
  ['--membership-title-max-width' as string]: SECTION_STYLES.membership.titleMaxWidth,
  ['--membership-button-px-x' as string]: SECTION_STYLES.membership.buttonPxX,
  ['--membership-button-px-y' as string]: SECTION_STYLES.membership.buttonPxY,
};

const SERVICES_IMAGE_VARS: CSSProperties = {
  ['--services-image-height-mobile' as string]: SECTION_STYLES.servicesImage.heightMobile,
  ['--services-image-height-tablet' as string]: SECTION_STYLES.servicesImage.heightTablet,
  ['--services-image-height-desktop' as string]: SECTION_STYLES.servicesImage.heightDesktop,
};

const SERVICES_BAR_VARS: CSSProperties = {
  ['--services-bar-min-height-mobile' as string]: SECTION_STYLES.servicesBar.minHeightMobile,
  ['--services-bar-min-height-desktop' as string]: SECTION_STYLES.servicesBar.minHeightDesktop,
  ['--services-bar-py-mobile' as string]: SECTION_STYLES.servicesBar.sectionPyMobile,
  ['--services-bar-py-tablet' as string]: SECTION_STYLES.servicesBar.sectionPyTablet,
  ['--services-bar-gap-desktop' as string]: SECTION_STYLES.servicesBar.contentGapDesktop,
  ['--services-bar-cta-mr-desktop' as string]: SECTION_STYLES.servicesBar.ctaMrDesktop,
};

const FAQ_VARS: CSSProperties = {
  ['--faq-section-py-mobile' as string]: SECTION_STYLES.faq.sectionPyMobile,
  ['--faq-section-py-desktop' as string]: SECTION_STYLES.faq.sectionPyDesktop,
  ['--faq-title-mb' as string]: SECTION_STYLES.faq.titleMb,
  ['--faq-article-spacing' as string]: SECTION_STYLES.faq.articleSpacing,
  ['--faq-content-max-width' as string]: SECTION_STYLES.faq.contentMaxWidth,
};

/* =========================================================
   4) CLASE CONTENEDOR REUTILIZABLE
   =========================================================
   Aplica max-width + centrado + padding lateral
   en los 3 breakpoints.
   Se usa en todas las secciones.
========================================================= */

const CONTAINER_CLASS =
  'max-w-[var(--container-max-width)] mx-auto w-full ' +
  'px-[var(--container-px-mobile)] ' +
  'md:px-[var(--container-px-tablet)] ' +
  'lg:px-[var(--container-px-desktop)]';

/* =========================================================
   5) SECTION: HERO
   =========================================================
   RESPONSIVE:
   - mobile:  ocupa 100svh, texto más pequeño, controles abajo
   - tablet:  90vh, texto mediano
   - desktop: 90vh, texto grande, controles a la izquierda
========================================================= */

function HeroSection({
  currentHeroSlide,
  setCurrentHeroSlide,
}: {
  currentHeroSlide: number;
  setCurrentHeroSlide: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <section
      style={{ ...SHARED_VARS, ...HERO_VARS }}
      className={[
        'relative w-full overflow-hidden bg-brand-dark',
        // Altura por breakpoint usando variables CSS
        'h-[var(--hero-height-mobile)]',
        'md:h-[var(--hero-height-tablet)]',
        'lg:h-[var(--hero-height-desktop)]',
        'min-h-[var(--hero-min-height)]',
      ].join(' ')}
    >
      {/* H1 oculto — solo para SEO, no afecta el diseño */}
      <h1 className="sr-only">Cámara de Comercio Peruano Británica | BritCham Peru</h1>

      {/* Slides de fondo */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 animate-[slow-zoom_20s_infinite]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay oscuro — más opaco en mobile para legibilidad */}
          <div className="absolute inset-0 bg-black/65 md:bg-black/60 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Contenido del hero */}
      <div
        className={[
          CONTAINER_CLASS,
          'relative z-10 h-full flex flex-col justify-end',
          // Padding bottom por breakpoint
          'pb-[var(--hero-content-pb-mobile)]',
          'md:pb-[var(--hero-content-pb-tablet)]',
          'lg:pb-[var(--hero-content-pb-desktop)]',
        ].join(' ')}
      >
        <div className="w-full max-w-[var(--hero-title-max-width)] space-y-4 md:space-y-6 animate-fade-up">
          {/* Título — escala de texto por breakpoint */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-inter font-bold text-white leading-[1.15]">
            {HERO_SLIDES[currentHeroSlide].title}
          </h2>

          {/* Descripción — oculta en mobile muy pequeño, visible desde sm */}
          <p className="hidden sm:block text-base md:text-lg lg:text-xl text-white/80 font-inter font-normal leading-relaxed max-w-[var(--hero-desc-max-width)]">
            {HERO_SLIDES[currentHeroSlide].description}
          </p>
        </div>

        {/* Controles del slider */}
        <div
          className={[
            'absolute flex items-center gap-6 md:gap-12',
            'bottom-[var(--hero-controls-bottom)]',
            'left-[var(--hero-controls-left-mobile)]',
            'md:left-[var(--hero-controls-left-desktop)]',
          ].join(' ')}
        >
          {/* Flechas prev/next */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() =>
                setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
              }
              className="text-white hover:opacity-50 transition-opacity"
              aria-label="Slide anterior"
            >
              {/* Icono más pequeño en mobile */}
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="text-white hover:opacity-50 transition-opacity"
              aria-label="Slide siguiente"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicadores */}
          <div className="flex items-center gap-2 md:gap-3">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-6 md:w-8' : 'bg-white/40 w-2'
                  }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   6) SECTION: PRÓXIMOS EVENTOS
   =========================================================
   RESPONSIVE:
   - mobile:  título arriba, ticker abajo (columna)
   - tablet:  igual que mobile pero más espacio
   - desktop: título a la izquierda, ticker a la derecha (fila)
========================================================= */

function EventsSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...EVENTS_VARS }}
      className={[
        'bg-gradient-to-tr from-brand-blue-deep to-brand-blue-bright overflow-hidden relative group',
        // Padding vertical por breakpoint
        'py-[var(--events-section-py-mobile)]',
        'md:py-[var(--events-section-py-tablet)]',
        'lg:py-[var(--events-section-py-desktop)]',
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div
        className={[
          CONTAINER_CLASS,
          'relative z-10 flex flex-col items-start',
          // En desktop: fila con gap horizontal
          'lg:flex-row lg:items-center',
          'gap-[var(--events-title-gap-mobile)]',
          'lg:gap-[var(--events-title-gap-desktop)]',
        ].join(' ')}
      >
        {/* Título — tamaño de texto por breakpoint */}
        <h2 className="text-white font-inter text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap shrink-0">
          Próximos Eventos
        </h2>

        {/* Ticker de eventos */}
        <div className="w-full relative overflow-hidden">
          <div className="flex animate-ticker-slow gap-[var(--events-ticker-gap)] group-hover:pause">
            {[...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
              <article
                key={i}
                className={[
                  'flex items-center shrink-0 h-full',
                  'gap-[var(--events-article-gap)]',
                  'border-l-[var(--events-article-border)] border-white',
                  'pl-[var(--events-article-pl)]',
                ].join(' ')}
              >
                {/* Fecha */}
                <div className="flex flex-col leading-none text-white font-inter font-semibold opacity-90">
                  <span className="text-[12px] md:text-[14px] uppercase tracking-widest">{event.month}</span>
                  <span className="text-3xl md:text-4xl">{event.day}</span>
                </div>

                {/* Info del evento */}
                <div className="flex flex-col gap-1.5 pr-6 md:pr-8">
                  <h3 className="text-white font-inter font-bold text-sm md:text-base tracking-wide uppercase line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-4 md:gap-6 text-white/70 text-[11px] md:text-[12px] font-inter font-normal">
                    <span className="flex items-center gap-1.5 shrink-0">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>

                    <span className="flex items-center gap-1.5 shrink-0">
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
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
  );
}

/* =========================================================
   7) SECTION: BRITCHAM EN PERÚ / TRAYECTORIA
   =========================================================
   RESPONSIVE:
   - mobile:  columna, imagen oculta (no cabe bien)
   - tablet:  columna, imagen visible pero reducida
   - desktop: fila, imagen a la derecha en absoluto
========================================================= */

function TrajectorySection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...TRAJECTORY_VARS }}
      className={[
        'bg-[#232323] overflow-hidden flex items-center relative',
        // Altura auto en mobile/tablet, fija en desktop
        'h-[var(--trajectory-section-height-mobile)]',
        'md:h-[var(--trajectory-section-height-tablet)]',
        'lg:h-[var(--trajectory-section-height-desktop)]',
      ].join(' ')}
    >
      <div
        className={[
          CONTAINER_CLASS,
          'h-full flex flex-col items-start justify-center',
          // En desktop: fila con imagen a la derecha
          'lg:flex-row lg:items-center lg:justify-between',
          // Padding vertical en mobile/tablet
          'py-[var(--trajectory-left-column-pt)]',
          'lg:py-0',
        ].join(' ')}
      >
        {/* Columna izquierda — texto */}
        <div className="flex flex-col justify-center lg:w-1/2 relative z-10 w-full">
          {/*
            blockOffsetX / blockOffsetY
            Mueve TODO el bloque (título + línea + texto + dots)
            Solo aplica en desktop para no romper mobile
          */}
          <div
            className="relative"
            style={{
              transform: 'translate(var(--trajectory-block-offset-x), var(--trajectory-block-offset-y))',
            }}
          >
            {/* Título de sección */}
            <h2 className="text-white font-inter text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8">
              Britcham Peru: 37 Años de Trayectoria
            </h2>

            <div className="flex gap-6 md:gap-8 items-start">
              {/*
                lineOffsetX / lineOffsetY
                Mueve SOLO la línea vertical
              */}
              <div
                className="w-[3px] h-[var(--trajectory-line-height)] bg-white shrink-0 mt-2"
                style={{
                  transform: 'translate(var(--trajectory-line-offset-x), var(--trajectory-line-offset-y))',
                }}
              />

              {/*
                textOffsetX / textOffsetY
                Mueve SOLO el bloque del texto grande
              */}
              <div
                className="max-w-xl"
                style={{
                  transform: 'translate(var(--trajectory-text-offset-x), var(--trajectory-text-offset-y))',
                }}
              >
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-libre font-bold leading-[1.2]">
                  {/* Número grande — escala por breakpoint */}
                  <span className="font-libre font-bold text-[36px] md:text-[40px] lg:text-[45px] mr-2">37</span>
                  años impulsando el comercio institucional entre el Perú y el Reino Unido.
                </p>
              </div>
            </div>

            {/* Dots decorativos inferiores */}
            <div className="flex gap-2 mt-8 lg:mt-auto lg:pb-4 lg:translate-y-[var(--trajectory-dots-offset-y)]">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        {/*
          Imagen derecha
          - mobile: oculta (hidden) para no romper el layout
          - tablet: visible pero no absoluta
          - desktop: absoluta a la derecha
        */}
        <div className="hidden md:flex lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[var(--trajectory-image-width-desktop)] items-center justify-end mt-8 lg:mt-0">
          <img
            src="/assets/mundo.png"
            alt="Mapa de red global de la Cámara de Comercio Peruano Británica"
            className="h-auto lg:h-[var(--trajectory-image-height)] w-full lg:w-auto max-h-[300px] lg:max-h-none object-contain object-right opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   8) SECTION: SOCIOS CORPORATIVOS
   =========================================================
   RESPONSIVE:
   - mobile:  1 columna
   - tablet:  2 columnas
   - desktop: 3 columnas
========================================================= */

function CorporatePartnersSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...PARTNERS_VARS }}
      className={[
        'bg-white',
        'py-[var(--partners-section-py-mobile)]',
        'md:py-[var(--partners-section-py-tablet)]',
        'lg:py-[var(--partners-section-py-desktop)]',
      ].join(' ')}
    >
      <div className={CONTAINER_CLASS}>
        {/* Título */}
        <div className="text-center mb-[var(--partners-title-mb)]">
          <h2 className="text-[#555555] font-inter text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Socios Corporativos
          </h2>
        </div>

        {/* Grid de logos — 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[var(--partners-grid-gap)] items-center">
          {CORPORATE_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-[var(--partners-logo-card-padding)]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  // En mobile reducimos la altura para que quepan bien
                  height: `${Math.round(logo.height * 0.8)}px`,
                  width: 'auto',
                  display: 'block',
                }}
                className="object-contain transition-all duration-300 hover:scale-105 md:h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9) SECTION: CTA MEMBRESÍA
   =========================================================
   RESPONSIVE:
   - mobile:  altura auto, texto más pequeño, botón full-width
   - tablet:  altura auto, texto mediano
   - desktop: altura fija 430px
========================================================= */

function MembershipSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...MEMBERSHIP_VARS }}
      className={[
        'bg-[#0151F2] flex items-start relative overflow-hidden',
        // Altura auto en mobile/tablet, fija en desktop
        'h-[var(--membership-section-height-mobile)]',
        'md:h-[var(--membership-section-height-tablet)]',
        'lg:h-[var(--membership-section-height-desktop)]',
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div
        className={[
          CONTAINER_CLASS,
          'relative z-10 h-full flex flex-col justify-between',
          'py-[var(--membership-content-py-mobile)]',
          'md:py-[var(--membership-content-py-tablet)]',
          'lg:py-[var(--membership-content-py-desktop)]',
          'gap-8 lg:gap-0', // gap en mobile para separar los bloques
        ].join(' ')}
      >
        {/* Fila superior: título + línea decorativa */}
        <div className="flex items-center gap-[var(--membership-row-gap)]">
          <h2 className="text-white font-inter text-sm md:text-xl lg:text-3xl font-bold whitespace-nowrap">
            Membresía Cámara de Comercio
          </h2>
          {/* Línea decorativa — se oculta en mobile para no quedar muy apretada */}
          <div className="hidden sm:block h-[3px] bg-white/90 flex-1" />
        </div>

        {/* Texto principal */}
        <h3 className="text-white font-libre text-2xl md:text-4xl lg:text-[50px] font-bold leading-[1.2] lg:leading-[1.15] max-w-[var(--membership-title-max-width)]">
          Únase a la mayor red de oportunidades entre Perú y el Reino Unido.
        </h3>

        {/* Botón CTA */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/contacto"
            className={[
              'inline-flex items-center justify-center bg-white text-[#0151F2]',
              'font-inter font-bold uppercase tracking-[0.1em]',
              'hover:bg-white/95 transition-all hover:-translate-y-1',
              // Botón full-width en mobile, auto en desktop
              'w-full sm:w-auto',
              'text-sm md:text-[16px]',
              'px-[var(--membership-button-px-x)] py-[var(--membership-button-px-y)]',
            ].join(' ')}
          >
            ASÓCIATE AQUÍ
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   10) SECTION: IMAGEN FULL WIDTH DE SERVICIOS
   =========================================================
   RESPONSIVE:
   - mobile:  280px de alto
   - tablet:  420px de alto
   - desktop: 580px de alto
========================================================= */

function ServicesImageSection() {
  return (
    <section
      style={SERVICES_IMAGE_VARS}
      className={[
        'w-full overflow-hidden',
        'h-[var(--services-image-height-mobile)]',
        'md:h-[var(--services-image-height-tablet)]',
        'lg:h-[var(--services-image-height-desktop)]',
      ].join(' ')}
    >
      <img
        src="/assets/image_99.png"
        alt="Servicios de la Cámara de Comercio Peruano Británica"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
}

/* =========================================================
   11) SECTION: BARRA DE SERVICIOS
   =========================================================
   RESPONSIVE:
   - mobile:  columna, texto centrado, CTA centrado
   - tablet:  columna, texto centrado
   - desktop: fila, texto a la izquierda, CTA a la derecha
========================================================= */

function ServicesBarSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...SERVICES_BAR_VARS }}
      className={[
        'bg-[#212121] flex items-center',
        'min-h-[var(--services-bar-min-height-mobile)]',
        'lg:min-h-[var(--services-bar-min-height-desktop)]',
        'py-[var(--services-bar-py-mobile)]',
        'md:py-[var(--services-bar-py-tablet)]',
        'lg:py-0',
      ].join(' ')}
    >
      <div
        className={[
          CONTAINER_CLASS,
          'flex flex-col items-center text-center',
          // En desktop: fila con texto a la izquierda
          'lg:flex-row lg:items-center lg:justify-between lg:text-left',
          'gap-8',
          'lg:gap-[var(--services-bar-gap-desktop)]',
        ].join(' ')}
      >
        {/* Texto */}
        <div className="space-y-3 md:space-y-4 w-full lg:max-w-4xl">
          <h2 className="text-white font-inter text-xl md:text-2xl font-bold tracking-tight uppercase">
            Servicios Comerciales Perú-UK
          </h2>
          <p className="text-white/90 font-libre text-sm md:text-base leading-relaxed">
            Brindamos consultoría estratégica, networking institucional y acceso a mercados clave para potenciar las inversiones bilaterales.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0 lg:mr-[var(--services-bar-cta-mr-desktop)]">
          <Link
            href="/servicios"
            className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <span className="font-inter font-bold text-lg md:text-xl lg:text-2xl tracking-widest uppercase text-white">
              Ver Servicios
            </span>
            <img
              src="/assets/Arrow_right.png"
              alt="Ver todos los servicios de Britcham"
              className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 transition-transform group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   12) SECTION: FAQ
   =========================================================
   RESPONSIVE:
   - mobile:  padding reducido, texto más pequeño
   - desktop: padding completo
========================================================= */

function FaqSection() {
  return (
    <section
      style={FAQ_VARS}
      className={[
        'bg-gray-50 border-t border-gray-100',
        'py-[var(--faq-section-py-mobile)]',
        'lg:py-[var(--faq-section-py-desktop)]',
      ].join(' ')}
    >
      <div className="max-w-[var(--faq-content-max-width)] mx-auto px-5 md:px-6">
        <h2 className="text-brand-blue-deep font-inter text-2xl md:text-3xl font-bold mb-[var(--faq-title-mb)] text-center">
          Preguntas Frecuentes sobre BritCham Peru
        </h2>

        <div className="space-y-[var(--faq-article-spacing)]">
          {FAQ_ITEMS.map((item, index) => (
            <article key={index}>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   13) COMPONENTE PRINCIPAL HOMEVIEW
========================================================= */

export default function HomeView() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SECTION 1 — HERO */}
      <HeroSection
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
      />

      {/* SECTION 2 — PRÓXIMOS EVENTOS */}
      <EventsSection />

      {/* SECTION 3 — TRAYECTORIA */}
      <TrajectorySection />

      {/* SECTION 4 — SOCIOS CORPORATIVOS */}
      <CorporatePartnersSection />

      {/* SECTION 5 — CTA MEMBRESÍA */}
      <MembershipSection />

      {/* SECTION 6 — IMAGEN FULL WIDTH */}
      <ServicesImageSection />

      {/* SECTION 7 — BARRA DE SERVICIOS */}
      <ServicesBarSection />

      {/* SECTION 8 — NEWS (componente externo, sin cambios) */}
      <HomeNewsSection />

      {/* SECTION 9 — FAQ */}
      <FaqSection />
    </main>
  );
}