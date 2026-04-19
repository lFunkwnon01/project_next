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
   2) SECTION_STYLES
========================================================= */

const SECTION_STYLES = {

  shared: {
    containerMaxWidth: '1440px',
    containerPx: 'clamp(20px, 3.5vw, 48px)',
  },

  hero: {
    titleFont: 'clamp(22px, 3.5vw, 50px)',
    descFont: 'clamp(13px, 1.2vw, 17px)',
    heroHeight: '84vh',
    heroMinHeight: 'clamp(300px, 60vh, 700px)',
    contentPb: 'clamp(80px, 8vw, 128px)',
    titleMaxWidth: 'clamp(500px, 60vw, 860px)',
    descMaxWidth: 'clamp(300px, 45vw, 672px)',
    controlsBottom: 'clamp(20px, 2.5vw, 32px)',
    controlsLeft: 'clamp(20px, 3vw, 48px)',
  },

  events: {
    // TIPOGRAFÍA
    titleFont: 'clamp(20px, 2.5vw, 28px)',
    eventMonthFont: 'clamp(11px, 0.9vw, 13px)',   // ← corregido: eliminada duplicación
    eventDayFont: 'clamp(32px, 3vw, 44px)',
    eventTitleFont: 'clamp(12px, 1vw, 15px)',
    eventMetaFont: 'clamp(10px, 0.7vw, 12px)',

    // ESPACIADO / ESTRUCTURA
    sectionPy: 'clamp(14px, 1.5vw, 22px)',
    titleGap: 'clamp(20px, 4.5vw, 64px)',
    tickerGap: 'clamp(24px, 2vw, 40px)',
    articleGap: 'clamp(12px, 1.4vw, 18px)',
    articleBorder: '2px',
    articlePl: 'clamp(16px, 1.8vw, 24px)',
    articlePy: 'clamp(8px, 1vw, 12px)',

    articleMinWidth: 'clamp(320px, 30vw, 440px)',
    articleMinHeight: 'clamp(56px, 5vw, 70px)',
    dateColWidth: 'clamp(44px, 4vw, 56px)',
    titleMaxWidth: 'clamp(180px, 18vw, 260px)',
    titleMinHeight: '0px',

    monthLineHeight: '2',
    dayLineHeight: '0.85',
    titleLineHeight: '1.15',
  },

  trajectory: {
    sectionTitleFont: 'clamp(18px, 1.8vw, 28px)',
    bodyFont: 'clamp(20px, 2.2vw, 36px)',
    numberFont: 'clamp(32px, 3vw, 48px)',
    sectionHeight: 'clamp(380px, 35vw, 430px)',
    leftColumnPy: 'clamp(32px, 3.5vw, 40px)',
    lineHeight: 'clamp(80px, 9vw, 128px)',
    dotsOffsetY: 'clamp(24px, 3vw, 40px)',
    imageWidthDesktop: '55%',
    imageHeight: '100%',
    blockOffsetX: '0px',
    blockOffsetY: '0px',
    lineOffsetX: '0px',
    lineOffsetY: '0px',
    textOffsetX: '0px',
    textOffsetY: '0px',
  },

  partners: {
    titleFont: 'clamp(26px, 3vw, 40px)',
    sectionPy: 'clamp(30px, 3vw, 80px)',
    titleMb: 'clamp(16px, 2vw, 24px)',
    gridGap: '12px',
    logoCardPadding: 'clamp(8px, 0.7vw, 14px)',
  },

  membership: {
    labelFont: 'clamp(12px, 1.5vw, 26px)',
    titleFont: 'clamp(22px, 3vw, 50px)',
    buttonFont: 'clamp(12px, 0.9vw, 16px)',
    sectionHeight: 'clamp(360px, 32vw, 430px)',
    contentPy: 'clamp(32px, 3.5vw, 48px)',
    rowGap: '16px',
    titleMaxWidth: '90%',
    buttonPx: 'clamp(28px, 3vw, 40px)',
    buttonPy: 'clamp(12px, 1.2vw, 16px)',
  },

  servicesImage: {
    height: 'clamp(280px, 35vw, 580px)',
  },

  servicesBar: {
    titleFont: 'clamp(16px, 1.6vw, 24px)',
    bodyFont: 'clamp(13px, 1vw, 16px)',
    ctaFont: 'clamp(16px, 1.5vw, 24px)',
    minHeight: 'clamp(180px, 15vw, 220px)',
    sectionPy: 'clamp(40px, 4vw, 48px)',
    contentGap: 'clamp(40px, 6vw, 80px)',
    ctaMr: 'clamp(0px, 2vw, 25px)',
  },

  faq: {
    titleFont: 'clamp(20px, 2vw, 30px)',
    questionFont: 'clamp(14px, 1vw, 18px)',
    answerFont: 'clamp(13px, 0.9vw, 16px)',
    sectionPy: 'clamp(56px, 7vw, 96px)',
    titleMb: 'clamp(28px, 3vw, 40px)',
    articleSpacing: 'clamp(20px, 2vw, 28px)',
    contentMaxWidth: '896px',
  },
};

/* =========================================================
   3) VARIABLES CSS
========================================================= */

const SHARED_VARS: CSSProperties = {
  ['--container-max-width' as string]: SECTION_STYLES.shared.containerMaxWidth,
  ['--container-px' as string]: SECTION_STYLES.shared.containerPx,
};

const HERO_VARS: CSSProperties = {
  ['--hero-title-font' as string]: SECTION_STYLES.hero.titleFont,
  ['--hero-desc-font' as string]: SECTION_STYLES.hero.descFont,
  ['--hero-height' as string]: SECTION_STYLES.hero.heroHeight,
  ['--hero-min-height' as string]: SECTION_STYLES.hero.heroMinHeight,
  ['--hero-content-pb' as string]: SECTION_STYLES.hero.contentPb,
  ['--hero-title-max-w' as string]: SECTION_STYLES.hero.titleMaxWidth,
  ['--hero-desc-max-w' as string]: SECTION_STYLES.hero.descMaxWidth,
  ['--hero-controls-bottom' as string]: SECTION_STYLES.hero.controlsBottom,
  ['--hero-controls-left' as string]: SECTION_STYLES.hero.controlsLeft,
};

const EVENTS_VARS: CSSProperties = {
  ['--events-title-font' as string]: SECTION_STYLES.events.titleFont,
  ['--events-month-font' as string]: SECTION_STYLES.events.eventMonthFont,
  ['--events-day-font' as string]: SECTION_STYLES.events.eventDayFont,
  ['--events-event-title-font' as string]: SECTION_STYLES.events.eventTitleFont,
  ['--events-meta-font' as string]: SECTION_STYLES.events.eventMetaFont,
  ['--events-section-py' as string]: SECTION_STYLES.events.sectionPy,
  ['--events-title-gap' as string]: SECTION_STYLES.events.titleGap,
  ['--events-ticker-gap' as string]: SECTION_STYLES.events.tickerGap,
  ['--events-article-gap' as string]: SECTION_STYLES.events.articleGap,
  ['--events-article-border' as string]: SECTION_STYLES.events.articleBorder,
  ['--events-article-pl' as string]: SECTION_STYLES.events.articlePl,
  ['--events-article-py' as string]: SECTION_STYLES.events.articlePy,
  ['--events-article-min-width' as string]: SECTION_STYLES.events.articleMinWidth,
  ['--events-article-min-height' as string]: SECTION_STYLES.events.articleMinHeight,
  ['--events-date-col-width' as string]: SECTION_STYLES.events.dateColWidth,
  ['--events-title-max-width' as string]: SECTION_STYLES.events.titleMaxWidth,
  ['--events-title-min-height' as string]: SECTION_STYLES.events.titleMinHeight,
  ['--events-month-line-height' as string]: SECTION_STYLES.events.monthLineHeight,
  ['--events-day-line-height' as string]: SECTION_STYLES.events.dayLineHeight,
  ['--events-title-line-height' as string]: SECTION_STYLES.events.titleLineHeight,
};

const TRAJECTORY_VARS: CSSProperties = {
  ['--trajectory-section-title-font' as string]: SECTION_STYLES.trajectory.sectionTitleFont,
  ['--trajectory-body-font' as string]: SECTION_STYLES.trajectory.bodyFont,
  ['--trajectory-number-font' as string]: SECTION_STYLES.trajectory.numberFont,
  ['--trajectory-section-height' as string]: SECTION_STYLES.trajectory.sectionHeight,
  ['--trajectory-left-column-py' as string]: SECTION_STYLES.trajectory.leftColumnPy,
  ['--trajectory-block-offset-x' as string]: SECTION_STYLES.trajectory.blockOffsetX,
  ['--trajectory-block-offset-y' as string]: SECTION_STYLES.trajectory.blockOffsetY,
  ['--trajectory-line-height' as string]: SECTION_STYLES.trajectory.lineHeight,
  ['--trajectory-line-offset-x' as string]: SECTION_STYLES.trajectory.lineOffsetX,
  ['--trajectory-line-offset-y' as string]: SECTION_STYLES.trajectory.lineOffsetY,
  ['--trajectory-text-offset-x' as string]: SECTION_STYLES.trajectory.textOffsetX,
  ['--trajectory-text-offset-y' as string]: SECTION_STYLES.trajectory.textOffsetY,
  ['--trajectory-dots-offset-y' as string]: SECTION_STYLES.trajectory.dotsOffsetY,
  ['--trajectory-image-width' as string]: SECTION_STYLES.trajectory.imageWidthDesktop,
  ['--trajectory-image-height' as string]: SECTION_STYLES.trajectory.imageHeight,
};

const PARTNERS_VARS: CSSProperties = {
  ['--partners-title-font' as string]: SECTION_STYLES.partners.titleFont,
  ['--partners-section-py' as string]: SECTION_STYLES.partners.sectionPy,
  ['--partners-title-mb' as string]: SECTION_STYLES.partners.titleMb,
  ['--partners-grid-gap' as string]: SECTION_STYLES.partners.gridGap,
  ['--partners-logo-card-padding' as string]: SECTION_STYLES.partners.logoCardPadding,
};

const MEMBERSHIP_VARS: CSSProperties = {
  ['--membership-label-font' as string]: SECTION_STYLES.membership.labelFont,
  ['--membership-title-font' as string]: SECTION_STYLES.membership.titleFont,
  ['--membership-button-font' as string]: SECTION_STYLES.membership.buttonFont,
  ['--membership-section-height' as string]: SECTION_STYLES.membership.sectionHeight,
  ['--membership-content-py' as string]: SECTION_STYLES.membership.contentPy,
  ['--membership-row-gap' as string]: SECTION_STYLES.membership.rowGap,
  ['--membership-title-max-w' as string]: SECTION_STYLES.membership.titleMaxWidth,
  ['--membership-button-px' as string]: SECTION_STYLES.membership.buttonPx,
  ['--membership-button-py' as string]: SECTION_STYLES.membership.buttonPy,
};

const SERVICES_IMAGE_VARS: CSSProperties = {
  ['--services-image-height' as string]: SECTION_STYLES.servicesImage.height,
};

const SERVICES_BAR_VARS: CSSProperties = {
  ['--services-bar-title-font' as string]: SECTION_STYLES.servicesBar.titleFont,
  ['--services-bar-body-font' as string]: SECTION_STYLES.servicesBar.bodyFont,
  ['--services-bar-cta-font' as string]: SECTION_STYLES.servicesBar.ctaFont,
  ['--services-bar-min-height' as string]: SECTION_STYLES.servicesBar.minHeight,
  ['--services-bar-py' as string]: SECTION_STYLES.servicesBar.sectionPy,
  ['--services-bar-gap' as string]: SECTION_STYLES.servicesBar.contentGap,
  ['--services-bar-cta-mr' as string]: SECTION_STYLES.servicesBar.ctaMr,
};

const FAQ_VARS: CSSProperties = {
  ['--faq-title-font' as string]: SECTION_STYLES.faq.titleFont,
  ['--faq-question-font' as string]: SECTION_STYLES.faq.questionFont,
  ['--faq-answer-font' as string]: SECTION_STYLES.faq.answerFont,
  ['--faq-section-py' as string]: SECTION_STYLES.faq.sectionPy,
  ['--faq-title-mb' as string]: SECTION_STYLES.faq.titleMb,
  ['--faq-article-spacing' as string]: SECTION_STYLES.faq.articleSpacing,
  ['--faq-content-max-width' as string]: SECTION_STYLES.faq.contentMaxWidth,
};

/* =========================================================
   4) CLASE CONTENEDOR
========================================================= */

const CONTAINER_CLASS =
  'max-w-[var(--container-max-width)] mx-auto w-full px-[var(--container-px)]';

/* =========================================================
   5) SECTION: HERO
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
      className="relative w-full overflow-hidden bg-brand-dark h-[var(--hero-height)] min-h-[var(--hero-min-height)]"
    >
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
          <div className="absolute inset-0 bg-black/65 md:bg-black/60 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
      ))}

      <div className={`${CONTAINER_CLASS} relative z-10 h-full flex flex-col justify-end pb-[var(--hero-content-pb)]`}>
        <div className="w-full max-w-[var(--hero-title-max-w)] space-y-4 md:space-y-6 animate-fade-up">
          <h2
            style={{ fontSize: 'var(--hero-title-font)' }}
            className="font-inter font-bold text-white leading-[1.15]"
          >
            {HERO_SLIDES[currentHeroSlide].title}
          </h2>
          <p
            style={{ fontSize: 'var(--hero-desc-font)' }}
            className="hidden sm:block text-white/100 font-inter font-normal leading-relaxed max-w-[var(--hero-desc-max-w)]"
          >
            {HERO_SLIDES[currentHeroSlide].description}
          </p>
        </div>

        <div className="absolute flex items-center gap-6 md:gap-12 bottom-[var(--hero-controls-bottom)] left-[var(--hero-controls-left)]">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="text-white hover:opacity-50 transition-opacity"
              aria-label="Slide anterior"
            >
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
          <div className="flex items-center gap-2 md:gap-3">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentHeroSlide ? 'bg-white w-6 md:w-8' : 'bg-white/40 w-2'}`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...EVENTS_VARS }}
      className="bg-gradient-to-tr from-brand-blue-deep to-brand-blue-bright overflow-hidden relative group py-[var(--events-section-py)]"
    >
      <div className={`${CONTAINER_CLASS} relative z-10 flex flex-col items-start lg:flex-row lg:items-center gap-[var(--events-title-gap)]`}>
        <h2
          style={{ fontSize: 'var(--events-title-font)' }}
          className="text-white font-inter font-bold whitespace-nowrap shrink-0"
        >
          Próximos Eventos
        </h2>

        <div className="w-full relative overflow-hidden">
          <div
            className="flex animate-ticker-slow gap-[var(--events-ticker-gap)] group-hover:pause"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            {[...MOCK_EVENTS, ...MOCK_EVENTS].map((event, i) => (
              <article
                key={i}
                className="
                  grid
                  grid-cols-[var(--events-date-col-width)_1px_minmax(0,1fr)]
                  items-center
                  shrink-0
                  min-w-[var(--events-article-min-width)]
                  min-h-[var(--events-article-min-height)]
                  gap-[var(--events-article-gap)]
                  border-l-[var(--events-article-border)]
                  border-white
                  pl-[var(--events-article-pl)]
                  py-[var(--events-article-py)]
                "
              >
                {/* FECHA */}
                <div className="flex flex-col justify-center items-center text-white font-inter font-semibold">
                  <span
                    style={{
                      fontSize: 'var(--events-month-font)',
                      lineHeight: 'var(--events-month-line-height)',
                    }}
                    className="uppercase tracking-[0.18em] text-center w-full block"
                  >
                    {event.month}
                  </span>
                  <span
                    style={{
                      fontSize: 'var(--events-day-font)',
                      lineHeight: 'var(--events-day-line-height)',
                    }}
                    className="text-center w-full block"
                  >
                    {event.day}
                  </span>
                </div>

                {/* LÍNEA SEPARADORA */}
                <div className="w-[1.5px] self-stretch bg-white my-2" />

                {/* CONTENIDO */}
                <div className="min-w-0 grid content-center gap-2">
                  <h3
                    style={{
                      fontSize: 'var(--events-event-title-font)',
                      lineHeight: 'var(--events-title-line-height)',
                    }}
                    className="
                      text-white
                      font-inter
                      font-bold
                      uppercase
                      line-clamp-2
                      max-w-[var(--events-title-max-width)]
                    "
                  >
                    {event.title}
                  </h3>
                  <div
                    style={{ fontSize: 'var(--events-meta-font)' }}
                    className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-inter font-normal"
                  >
                    <span className="flex items-center gap-1.5 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
   7) SECTION: TRAYECTORIA
========================================================= */

function TrajectorySection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...TRAJECTORY_VARS }}
      className="bg-[#232323] overflow-hidden flex items-center relative min-h-[var(--trajectory-section-height)]"
    >
      <div className={`${CONTAINER_CLASS} h-full flex flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-between py-[var(--trajectory-left-column-py)] lg:py-0`}>
        <div className="flex flex-col justify-center lg:w-1/2 relative z-10 w-full">
          <div
            className="relative"
            style={{ transform: 'translate(var(--trajectory-block-offset-x), var(--trajectory-block-offset-y))' }}
          >
            <h2
              style={{ fontSize: 'var(--trajectory-section-title-font)' }}
              className="text-white font-inter font-bold mb-6 md:mb-8"
            >
              Britcham Peru: 37 Años de Trayectoria
            </h2>
            <div className="flex gap-6 md:gap-8 items-start">
              <div
                className="w-[3px] h-[var(--trajectory-line-height)] bg-white shrink-0 mt-2"
                style={{ transform: 'translate(var(--trajectory-line-offset-x), var(--trajectory-line-offset-y))' }}
              />
              <div style={{ transform: 'translate(var(--trajectory-text-offset-x), var(--trajectory-text-offset-y))' }} className="max-w-xl">
                <p
                  style={{ fontSize: 'var(--trajectory-body-font)' }}
                  className="text-white font-libre font-bold leading-[1.2]"
                >
                  <span style={{ fontSize: 'var(--trajectory-number-font)' }} className="font-libre font-bold mr-2">37</span>
                  años impulsando el comercio institucional entre el Perú y el Reino Unido.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-8 lg:translate-y-[var(--trajectory-dots-offset-y)]">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>
        </div>

        <div className="hidden md:flex lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[var(--trajectory-image-width)] items-center justify-end mt-8 lg:mt-0">
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
========================================================= */

function CorporatePartnersSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...PARTNERS_VARS }}
      className="bg-white py-[var(--partners-section-py)]"
    >
      <div className={CONTAINER_CLASS}>
        <div className="text-center mb-[var(--partners-title-mb)]">
          <h2
            style={{ fontSize: 'var(--partners-title-font)' }}
            className="text-[#555555] font-inter font-bold mb-4 tracking-[-0.02em]"
          >
            Socios Corporativos
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[var(--partners-grid-gap)] items-center">
          {CORPORATE_LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center p-[var(--partners-logo-card-padding)]">
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: `${Math.round(logo.height * 1)}px`, width: 'auto', display: 'block' }}
                className="object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9) SECTION: MEMBRESÍA
========================================================= */

function MembershipSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...MEMBERSHIP_VARS }}
      className="bg-[#0151F2] flex items-start relative overflow-hidden min-h-[var(--membership-section-height)]"
    >
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className={`${CONTAINER_CLASS} relative z-10 h-full flex flex-col justify-between py-[var(--membership-content-py)] gap-8`}>
        <div className="flex items-center gap-[var(--membership-row-gap)]">
          <h2
            style={{ fontSize: 'var(--membership-label-font)' }}
            className="text-white font-inter font-bold whitespace-nowrap"
          >
            Membresía Cámara de Comercio
          </h2>
          <div className="hidden sm:block h-[3px] bg-white/90 flex-1" />
        </div>
        <h3
          style={{ fontSize: 'var(--membership-title-font)' }}
          className="text-white font-libre font-bold leading-[1.2] max-w-[var(--membership-title-max-w)]"
        >
          Únase a la mayor red de oportunidades entre Perú y el Reino Unido.
        </h3>
        <div className="flex items-center justify-between w-full">
          <Link
            href="/contacto"
            style={{ fontSize: 'var(--membership-button-font)' }}
            className="inline-flex items-center justify-center bg-white text-[#0151F2] font-inter font-bold uppercase tracking-[0.1em] hover:bg-white/95 transition-all hover:-translate-y-1 w-full sm:w-auto px-[var(--membership-button-px)] py-[var(--membership-button-py)]"
          >
            ASÓCIATE AQUÍ
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   10) SECTION: IMAGEN FULL WIDTH
========================================================= */

function ServicesImageSection() {
  return (
    <section
      style={SERVICES_IMAGE_VARS}
      className="w-full overflow-hidden h-[var(--services-image-height)]"
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
========================================================= */

function ServicesBarSection() {
  return (
    <section
      style={{ ...SHARED_VARS, ...SERVICES_BAR_VARS }}
      className="bg-[#212121] flex items-center min-h-[var(--services-bar-min-height)] py-[var(--services-bar-py)]"
    >
      <div className={`${CONTAINER_CLASS} flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left gap-[var(--services-bar-gap)]`}>
        <div className="space-y-3 w-full lg:max-w-4xl">
          <h2
            style={{ fontSize: 'var(--services-bar-title-font)' }}
            className="text-white font-inter font-bold tracking-tight uppercase"
          >
            Servicios Comerciales Perú-UK
          </h2>
          <p
            style={{ fontSize: 'var(--services-bar-body-font)' }}
            className="text-white/90 font-libre leading-relaxed"
          >
            Brindamos consultoría estratégica, networking institucional y acceso a mercados clave para potenciar las inversiones bilaterales.
          </p>
        </div>
        <div className="shrink-0 mr-[var(--services-bar-cta-mr)]">
          <Link href="/servicios" className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <span
              style={{ fontSize: 'var(--services-bar-cta-font)' }}
              className="font-inter font-bold tracking-widest uppercase text-white"
            >
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
========================================================= */

function FaqSection() {
  return (
    <section
      style={FAQ_VARS}
      className="bg-gray-50 border-t border-gray-100 py-[var(--faq-section-py)]"
    >
      <div className="max-w-[var(--faq-content-max-width)] mx-auto px-5 md:px-6">
        <h2
          style={{ fontSize: 'var(--faq-title-font)' }}
          className="text-brand-blue-deep font-inter font-bold mb-[var(--faq-title-mb)] text-center"
        >
          Preguntas Frecuentes sobre BritCham Peru
        </h2>
        <div className="space-y-[var(--faq-article-spacing)]">
          {FAQ_ITEMS.map((item, index) => (
            <article key={index}>
              <h3
                style={{ fontSize: 'var(--faq-question-font)' }}
                className="font-bold text-gray-900 mb-2"
              >
                {item.question}
              </h3>
              <p
                style={{ fontSize: 'var(--faq-answer-font)' }}
                className="text-gray-600 leading-relaxed"
              >
                {item.answer}
              </p>
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
      <HeroSection currentHeroSlide={currentHeroSlide} setCurrentHeroSlide={setCurrentHeroSlide} />
      <EventsSection />
      <TrajectorySection />
      <CorporatePartnersSection />
      <MembershipSection />
      <ServicesImageSection />
      <ServicesBarSection />
      <HomeNewsSection />
      <FaqSection />
    </main>
  );
}