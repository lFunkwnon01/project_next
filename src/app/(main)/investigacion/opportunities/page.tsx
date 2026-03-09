import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BritCham Peru | Oportunidades Estratégicas',
  description: 'Oportunidades de inversión y crecimiento bilateral Perú-Reino Unido.',
};

const opportunities = [
  { title: "Energías Renovables", img: "https://picsum.photos/seed/renew/600/400", desc: "Proyectos eólicos y solares a gran escala." },
  { title: "Tecnología Minera", img: "https://picsum.photos/seed/mine/600/400", desc: "Innovación y sostenibilidad en el sector extractivo." },
  { title: "Infraestructura", img: "https://picsum.photos/seed/infra/600/400", desc: "Desarrollo de puertos, carreteras y aeropuertos." },
  { title: "Educación & EdTech", img: "https://picsum.photos/seed/edtech/600/400", desc: "Colaboración académica y plataformas digitales." },
  { title: "Agroexportación", img: "https://picsum.photos/seed/agro/600/400", desc: "Potencial de superalimentos en el mercado británico." },
  { title: "Salud & Life Sciences", img: "https://picsum.photos/seed/health/600/400", desc: "Equipamiento médico y soluciones biotecnológicas." },
];

export default function OpportunitiesPage() {
  return (
    <div className="bg-[#0a1a3d] min-h-screen text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <header className="mb-24 text-center">
          <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Business Opportunities</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold italic drop-shadow-lg mb-8">Oportunidades Estratégicas</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Descubra nichos de mercado, sectores en crecimiento y proyectos clave que fortalecerán su expansión internacional.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-xl">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold font-serif mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
