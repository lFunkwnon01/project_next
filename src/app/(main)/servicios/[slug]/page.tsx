'use client';

import { useParams } from 'next/navigation';

const serviceDetails: Record<string, { title: string; subtitle: string; description: string; items: { title: string; desc: string }[]; img1: string; img2: string }> = {
  'estudio-de-mercado': {
    title: 'Estudio de Mercado',
    subtitle: 'Análisis estratégicos y estudios de viabilidad para facilitar su ingreso exitoso al mercado peruano o británico.',
    description: 'Nuestro servicio de inteligencia de mercado le proporciona la base analítica necesaria para tomar decisiones de expansión seguras.',
    items: [
      { title: 'Análisis de Competencia', desc: 'Mapeo detallado de actores clave y cuotas de mercado.' },
      { title: 'Marco Regulatorio', desc: 'Identificación de barreras de entrada y normativas aplicables.' },
      { title: 'Comportamiento del Consumidor', desc: 'Tendencias de consumo y preferencias locales.' },
      { title: 'Oportunidades Sectoriales', desc: 'Detección de nichos no explotados con alto potencial.' }
    ],
    img1: 'https://picsum.photos/seed/market1/800/1000',
    img2: 'https://picsum.photos/seed/market2/800/600'
  },
  'organizacion-de-eventos': {
    title: 'Organización de Eventos',
    subtitle: 'Diseño y ejecución de eventos corporativos de alto nivel, desde lanzamientos hasta conferencias bilaterales.',
    description: 'Transformamos sus objetivos corporativos en experiencias memorables. Nuestro equipo gestiona integralmente simposios y cócteles de networking.',
    items: [
      { title: 'Logística Integral', desc: 'Coordinación completa de sedes, catering y tecnología.' },
      { title: 'Convocatoria VIP', desc: 'Acceso a nuestra extensa base de datos de tomadores de decisión.' },
      { title: 'Branding Institucional', desc: 'Visibilidad de marca en plataformas físicas y digitales.' },
      { title: 'Networking Estratégico', desc: 'Sesiones estructuradas para maximizar conexiones de valor.' }
    ],
    img1: 'https://picsum.photos/seed/events1/800/1000',
    img2: 'https://picsum.photos/seed/events2/800/600'
  },
  'comercio-exterior': {
    title: 'Comercio Exterior',
    subtitle: 'Asesoría especializada en procesos aduaneros, aprovechamiento del TLC Perú-UK, y optimización de operaciones.',
    description: 'Facilitamos el flujo de bienes y servicios a través de las fronteras. Nuestros expertos analizan su cadena de suministro.',
    items: [
      { title: 'Gestión Aduanera', desc: 'Agilización de trámites y cumplimiento normativo.' },
      { title: 'Beneficios Arancelarios TLC', desc: 'Maximización de ventajas del tratado bilateral.' },
      { title: 'Logística Internacional', desc: 'Optimización de rutas y costos de fletes.' },
      { title: 'Agentes Comerciales', desc: 'Búsqueda e identificación de distribuidores locales.' }
    ],
    img1: 'https://picsum.photos/seed/trade1/800/1000',
    img2: 'https://picsum.photos/seed/trade2/800/600'
  },
  'asesoria-regulatoria': {
    title: 'Asesoría Regulatoria',
    subtitle: 'Orientación experta sobre normativas comerciales, fiscales y laborales aplicables a empresas británicas en Perú.',
    description: 'Mitigue riesgos legales y asegure el cumplimiento normativo. Trabajamos con firmas legales de primer nivel.',
    items: [
      { title: 'Constitución de Empresas', desc: 'Asesoría legal para establecer operaciones locales.' },
      { title: 'Legislación Laboral', desc: 'Cumplimiento de normativas de contratación y beneficios.' },
      { title: 'Estructuración Fiscal', desc: 'Optimización tributaria y convenios de doble imposición.' },
      { title: 'Propiedad Intelectual', desc: 'Registro y protección de marcas y patentes.' }
    ],
    img1: 'https://picsum.photos/seed/legal1/800/1000',
    img2: 'https://picsum.photos/seed/legal2/800/600'
  },
  'networking-empresarial': {
    title: 'Networking Empresarial',
    subtitle: 'Acceso exclusivo a nuestra red de socios corporativos, eventos de alto perfil y conexiones estratégicas.',
    description: 'El valor de la BPCC radica en el calibre de su membresía. Conectamos la oferta británica con la demanda peruana.',
    items: [
      { title: 'Matchmaking B2B', desc: 'Reuniones uno-a-uno con socios potenciales pre-evaluados.' },
      { title: 'Misiones Comerciales', desc: 'Delegaciones empresariales a ferias internacionales clave.' },
      { title: 'Mesas Redondas Sectoriales', desc: 'Diálogos exclusivos con líderes de la industria y gobierno.' },
      { title: 'Plataforma BPCC Connect', desc: 'Directorio y oportunidades de negocio.' }
    ],
    img1: 'https://picsum.photos/seed/network1/800/1000',
    img2: 'https://picsum.photos/seed/network2/800/600'
  }
};

export default function ServicioDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const detail = serviceDetails[slug];

  if (!detail) {
    return (
      <div className="py-20 min-h-screen bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="bg-white p-20 rounded-3xl shadow-2xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8 italic">Servicio no encontrado</h2>
            <p className="text-gray-500">Por favor, seleccione un servicio válido desde el menú.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 min-h-screen bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="space-y-16">
          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-12 md:p-16 lg:p-24 shadow-2xl flex flex-col lg:flex-row items-center gap-16 border border-gray-100">
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-accent font-bold text-[10px] uppercase tracking-widest border-l-4 border-accent pl-4">Soluciones Corporativas</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary italic leading-tight">{detail.title}</h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">{detail.subtitle}</p>
              <button className="bg-primary text-white px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase shadow-xl hover:brightness-110 transition-all">Solicitar Presupuesto</button>
            </div>
            <div className="w-full lg:w-1/2 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={detail.img1} alt={detail.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Secondary Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-secondary/50 p-12 lg:p-20 rounded-3xl">
            <div className="space-y-8 order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-primary">Nuestra Metodología</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{detail.description}</p>
              <div className="space-y-6 pt-4">
                {detail.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>{item.title}
                    </h4>
                    <p className="text-sm text-gray-500 pl-4 border-l-2 border-gray-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src={detail.img2} alt="Metodología" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <section className="mt-24 text-center space-y-6 bg-white p-12 rounded-3xl border border-gray-200">
          <h2 className="text-3xl font-serif font-bold text-primary italic">¿Necesita una solución personalizada?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nuestro equipo de desarrollo empresarial está listo para diseñar servicios a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-accent text-white px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase shadow-xl hover:brightness-110 transition-all">Agendar Reunión</button>
            <button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all">Contactar Equipo</button>
          </div>
        </section>
      </div>
    </div>
  );
}
