'use client';

import { useState } from 'react';

export default function ComercioBilateralPage() {
  const [filter, setFilter] = useState('Todos');
  const tags = ['Todos', 'TLC', 'CPTPP', 'Impuestos', 'Infraestructura', 'Educación'];

  return (
    <div className="pb-20 bg-white min-h-screen">
      {/* Hero with Image Background */}
      <section className="relative pt-32 pb-40 px-10 bg-navy-900 border-b border-navy-900 w-full mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://picsum.photos/seed/bilateralhero/1920/1080')" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <span className="text-white/80 font-bold text-[11px] uppercase tracking-widest drop-shadow-md">Diplomacia Comercial</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mt-4 drop-shadow-2xl">Comercio Bilateral</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mt-6 drop-shadow-lg font-light">
            El marco jurídico y diplomático que sustenta el éxito de su inversión. Explore los tratados, acuerdos y la profunda colaboración entre Perú y el Reino Unido.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-10">
        <div className="space-y-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/tlc/800/600" alt="TLC" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-accent font-bold text-xs uppercase tracking-[0.3em]">Tratado de Libre Comercio</span>
              <h2 className="text-4xl font-serif font-bold text-primary leading-tight">Acceso preferencial y aranceles reducidos</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                El Acuerdo Comercial entre el Perú y el Reino Unido garantiza la continuidad operativa y preferencias arancelarias, blindando sus exportaciones e importaciones bajo un marco legal estable y predecible.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent"></span> Eliminación del 95% de aranceles industriales
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent"></span> Protección integral a la Propiedad Intelectual
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent"></span> Facilitación del comercio de servicios
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-32 bg-secondary/50 border border-gray-100 p-12 md:p-20 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-serif font-bold text-primary italic">¿Necesita asistencia legal o comercial especializada?</h2>
            <p className="text-gray-600 text-lg">Nuestro equipo técnico ofrece consultoría estratégica sobre la aplicación de tratados y beneficios arancelarios vigentes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-accent text-white px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-xl">SOLICITAR CONSULTORÍA</button>
              <button className="bg-white text-primary px-10 py-5 rounded-sm font-bold text-xs tracking-widest uppercase border border-gray-200 hover:bg-gray-50 transition-all shadow-sm">CONTACTAR AL COMITÉ TÉCNICO</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
