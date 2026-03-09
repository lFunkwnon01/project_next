import type { Metadata } from 'next';
import { MOCK_REPORTS } from '@/lib/data/mockData';

export const metadata: Metadata = {
  title: 'BritCham Peru | Reporte Económico',
  description: 'Análisis macroeconómico y reportes de crecimiento bilateral.',
};

export default function EconomicReportPage() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <header className="mb-20 space-y-4 max-w-3xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase border-b-2 border-accent pb-1">Economic Report</span>
          <h1 className="text-5xl md:text-7xl font-sans font-light text-gray-900 tracking-tight mt-6">
            Análisis Macro<span className="font-bold">económico</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed pt-4">
            Un diseño minimalista y moderno para acceder a nuestros últimos reportes económicos y proyecciones de crecimiento.
          </p>
        </header>

        <section className="space-y-8">
          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-10">
            {MOCK_REPORTS.map((report) => (
              <div key={report.id} className="flex flex-col md:flex-row gap-10 items-start group hover:bg-gray-50 p-6 rounded-2xl transition-all">
                <div className="w-full md:w-64 h-48 shrink-0 rounded-xl overflow-hidden shadow-sm">
                  <img src={report.imageUrl} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt={report.title} />
                </div>
                <div className="space-y-4 flex-1 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-accent font-bold text-[10px] uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">{report.period}</span>
                    <span className="text-gray-400 text-xs">Publicado recientemente</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors">{report.title}</h3>
                  <p className="text-base text-gray-600 font-light leading-relaxed max-w-2xl">{report.description}</p>
                  <div className="flex gap-6 pt-4">
                    <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider hover:text-accent transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      Leer Reporte
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-wider hover:text-gray-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
