'use client';

import { useParams } from 'next/navigation';
import ConstructionView from '@/components/ConstructionView';

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

  // Se muestra la página de construcción para todos los servicios por solicitud
  return <ConstructionView title={detail.title} />;
}

