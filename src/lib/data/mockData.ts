import type {
  NewsItem,
  EventItem,
  Partner,
  ReportItem,
  Committee,
  BilateralHito,
  ServiceItem,
  MembershipTier,
} from '@/types';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    category: 'Comercio',
    title: 'Análisis del Tratado de Libre Comercio post-Brexit: Impacto en Agroexportaciones',
    excerpt: 'Descubra cómo las nuevas regulaciones están moldeando el flujo comercial entre el Puerto del Callao y Liverpool...',
    date: '24 May, 2024',
    imageUrl: 'https://picsum.photos/seed/brexit/800/500',
    isExclusive: true,
    language: 'es',
  },
  {
    id: '2',
    category: 'Institucional',
    title: 'Nombramiento del nuevo Directorio 2024-2025',
    excerpt: 'Liderazgo renovado para los próximos retos bilaterales.',
    date: '22 Oct, 2023',
    imageUrl: 'https://picsum.photos/seed/dir/200/200',
    language: 'es',
  },
  {
    id: '3',
    category: 'Networking',
    title: 'Éxito total en el Cóctel de Embajadores UK-Perú',
    excerpt: 'Fomentando lazos diplomáticos y comerciales.',
    date: '18 Oct, 2023',
    imageUrl: 'https://picsum.photos/seed/event/200/200',
    language: 'es',
  },
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: '1',
    day: '14',
    month: 'NOV',
    type: 'Virtual',
    title: 'Webinar: Sostenibilidad en la Cadena de Suministros',
    description: 'Estrategias prácticas para cumplir con los estándares ESG británicos.',
    location: 'Zoom Meetings',
    slug: 'webinar-sostenibilidad',
    time: '09:00 AM',
  },
  {
    id: '2',
    day: '23',
    month: 'NOV',
    type: 'Presencial',
    title: 'Business After Hours: Edición Especial',
    description: 'Networking de alto nivel en la Residencia del Embajador Británico.',
    location: 'Residencia Británica, Lima',
    slug: 'business-after-hours-special',
    time: '07:30 PM',
  },
];

export const MOCK_REPORTS: ReportItem[] = [
  {
    id: '1',
    title: 'Economic Report Q4 2023',
    period: 'Diciembre 2023',
    description: 'Análisis exhaustivo del crecimiento regional y proyecciones trimestrales.',
    imageUrl: 'https://picsum.photos/seed/report1/300/400',
    type: 'Economic Report',
  },
  {
    id: '2',
    title: 'Magazine Opportunities #42',
    period: 'Enero 2024',
    description: 'Casos de éxito y entrevistas con líderes del sector minero.',
    imageUrl: 'https://picsum.photos/seed/mag/300/400',
    type: 'Opportunities',
  },
];

export const MOCK_PARTNERS: Partner[] = [
  { id: '1', name: 'Shell', sector: 'Energía', logoUrl: 'https://picsum.photos/seed/shell/100/100', tier: 'Premium Plus' },
  { id: '2', name: 'AstraZeneca', sector: 'Farmacéutico', logoUrl: 'https://picsum.photos/seed/astra/100/100', tier: 'Premium Plus' },
  { id: '3', name: 'HSBC', sector: 'Banca', logoUrl: 'https://picsum.photos/seed/hsbc/100/100', tier: 'Premium Plus' },
  { id: '4', name: 'PwC', sector: 'Consultoría', logoUrl: 'https://picsum.photos/seed/pwc/100/100', tier: 'Premium' },
  { id: '5', name: 'Anglo American', sector: 'Minería', logoUrl: 'https://picsum.photos/seed/anglo/100/100', tier: 'Premium Plus' },
];

export const MOCK_COMMITTEES: Committee[] = [
  { id: '1', name: 'Educación', slug: 'educacion', description: 'Promoviendo el intercambio académico y la capacitación técnica entre Perú y UK.', membersCount: 24, objectives: ['Certificaciones', 'Alianzas Universitarias'] },
  { id: '2', name: 'Desarrollo Sostenible', slug: 'sostenibilidad', description: 'Implementación de criterios ESG y transición energética.', membersCount: 18, objectives: ['Economía Circular', 'Neutralidad Carbono'] },
  { id: '3', name: 'Infraestructura', slug: 'infraestructura', description: 'Apoyo en modelos G2G para grandes proyectos nacionales.', membersCount: 32, objectives: ['Proyectos Viales', 'Modernización Portuaria'] },
];

export const MOCK_BILATERAL_HITOS: BilateralHito[] = [
  { id: '1', year: '2023', title: 'Adhesión del Reino Unido al CPTPP', description: 'Perú dio la bienvenida oficial a UK como nuevo integrante del bloque comercial.', tag: 'CPTPP' },
  { id: '2', year: '2022', title: 'Vigencia del Acuerdo Comercial Perú-UK', description: 'Continuidad de los beneficios arancelarios post-Brexit.', tag: 'TLC' },
  { id: '3', year: '2019', title: 'Convenio de Doble Imposición', description: 'Optimización de la carga fiscal para inversiones bilaterales.', tag: 'Impuestos' },
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Estudio de Mercado',
    slug: 'estudio-de-mercado',
    description: 'Análisis estratégicos y estudios de viabilidad para facilitar su ingreso exitoso al mercado peruano o británico, con datos actualizados y perspectivas comerciales exclusivas.',
    icon: '📊',
    bullets: ['Análisis de Competencia', 'Marco Regulatorio', 'Comportamiento del Consumidor', 'Oportunidades Sectoriales'],
  },
  {
    id: '2',
    title: 'Organización de Eventos',
    slug: 'organizacion-de-eventos',
    description: 'Diseño y ejecución de eventos corporativos de alto nivel, desde lanzamientos de productos hasta conferencias bilaterales con participación de autoridades británicas y peruanas.',
    icon: '📅',
    bullets: ['Logística Integral', 'Convocatoria VIP', 'Branding Institucional', 'Networking Estratégico'],
  },
  {
    id: '3',
    title: 'Comercio Exterior',
    slug: 'comercio-exterior',
    description: 'Asesoría especializada en procesos aduaneros, aprovechamiento del TLC Perú-UK, y optimización de operaciones de importación y exportación entre ambos países.',
    icon: '🚢',
    bullets: ['Gestión Aduanera', 'Beneficios Arancelarios TLC', 'Logística Internacional', 'Agentes Comerciales'],
  },
  {
    id: '4',
    title: 'Asesoría Regulatoria',
    slug: 'asesoria-regulatoria',
    description: 'Orientación experta sobre normativas comerciales, fiscales y laborales aplicables a empresas británicas operando en Perú y viceversa, incluyendo tratados bilaterales vigentes.',
    icon: '⚖️',
    bullets: ['Cumplimiento Normativo', 'Tratados Bilaterales', 'Due Diligence', 'Propiedad Intelectual'],
  },
  {
    id: '5',
    title: 'Networking Empresarial',
    slug: 'networking-empresarial',
    description: 'Acceso exclusivo a nuestra red de socios corporativos, eventos de alto perfil y conexiones estratégicas con tomadores de decisión en sectores clave de ambas economías.',
    icon: '🤝',
    bullets: ['Eventos Exclusivos', 'Misiones Comerciales', 'Conexiones Estratégicas', 'Comités Sectoriales'],
  },
];

export const MOCK_MEMBERSHIPS: MembershipTier[] = [
  {
    id: '1',
    name: 'Standard',
    tagline: 'Ideal para PyMEs y emprendedores',
    price: '1,200',
    currency: 'USD',
    billingPeriod: 'annual',
    features: [
      'Networking regional básico',
      'Acceso a boletines mensuales',
      'Directorio de socios',
      'Descuentos en eventos (10%)',
      'Certificado de membresía',
      'Acceso a webinars trimestrales',
    ],
    ctaText: 'Aplicar Ahora',
    color: 'gray',
  },
  {
    id: '2',
    name: 'Premium',
    tagline: 'Para empresas en expansión',
    price: '3,500',
    currency: 'USD',
    billingPeriod: 'annual',
    features: [
      'Acceso total a comités sectoriales',
      'Invitaciones VIP a eventos exclusivos',
      'Publicidad destacada en web y newsletter',
      'Matchmaking comercial personalizado',
      'Descuentos en eventos (25%)',
      'Reuniones 1-on-1 con equipo BPCC',
      'Acceso prioritario a misiones comerciales',
      'Logo en materiales institucionales',
    ],
    highlighted: true,
    ctaText: 'Ser Socio Premium',
    color: 'primary',
  },
  {
    id: '3',
    name: 'Premium Plus',
    tagline: 'Líderes corporativos y misiones',
    price: '8,500',
    currency: 'USD',
    billingPeriod: 'annual',
    features: [
      'Networking VIP exclusivo con embajada',
      'Branding corporativo premium',
      'Asesoría estratégica personalizada',
      'Participación en misiones comerciales UK',
      'Mesa VIP en eventos corporativos',
      'Publicaciones en Economic Report',
      'Acceso a sala de reuniones BPCC',
      'Entradas ilimitadas a eventos',
      'Representación en directorio ejecutivo',
      'Conexión directa con DIT UK',
    ],
    ctaText: 'Contactar Ahora',
    color: 'gold',
  },
];
