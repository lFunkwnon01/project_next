import type { Metadata } from 'next';
import { MOCK_COMMITTEES } from '@/lib/data/mockData';

export const metadata: Metadata = {
  title: 'BritCham Peru | Comité',
  description: 'Detalle del comité sectorial.',
};

export default function CommitteeDetailPage() {
  return (
    <div className="py-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20 space-y-6">
          <span className="text-primary font-bold text-[11px] uppercase tracking-widest">Colaboración Sectorial</span>
          <h1 className="text-6xl font-serif font-bold text-primary italic">Comités Sectoriales</h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Los Comités son el corazón de la Cámara. Espacios exclusivos donde los socios debaten, influyen y generan propuestas de valor para sus respectivos sectores.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_COMMITTEES.map(committee => (
            <div key={committee.id} className="group bg-secondary/20 p-12 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-serif font-bold text-primary italic group-hover:text-accent transition-colors">{committee.name}</h3>
                <span className="text-[10px] font-bold text-gray-400 bg-white px-3 py-1 rounded shadow-sm uppercase tracking-tighter">{committee.membersCount} Integrantes</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">{committee.description}</p>
              <div className="space-y-4 mb-10">
                <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Objetivos Estratégicos</h4>
                <div className="flex flex-wrap gap-2">
                  {committee.objectives.map((obj, i) => (
                    <span key={i} className="bg-white px-4 py-2 rounded-full text-xs font-semibold text-gray-500 shadow-sm">{obj}</span>
                  ))}
                </div>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-sm font-bold text-[10px] tracking-widest uppercase hover:bg-navy-800 transition-all">Quiero Participar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
