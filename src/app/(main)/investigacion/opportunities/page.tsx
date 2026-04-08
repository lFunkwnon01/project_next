'use client';

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans">

      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#1b1b1b] pt-28 lg:pt-36 pb-20 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col text-white">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-6">
            Revista Opportunities
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-[90%]">
            Perspectivas, iniciativas y experiencias de los distintos actores que forman parte de esta comunidad empresarial, destacando temas clave para el fortalecimiento del vínculo bilateral.
          </p>

          <div className="w-48 h-12 bg-[#c4c4c4] rounded-sm mb-12 cursor-pointer hover:bg-white transition-colors duration-300"></div>

          <div className="flex flex-wrap items-center gap-6 md:gap-8 text-white/70 text-sm font-medium">
            <span>Edicion: No. 100</span>
            <span>Fecha de Publicacion: 20 de Abril 2026</span>
          </div>
        </div>

        {/* Right Content / Cover Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[450px] aspect-[3/4] shadow-2xl transition-transform hover:scale-[1.02] duration-300">
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Opportunities Magazine Cover"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* 2. EDICIONES PASADAS */}
      <section className="w-full bg-[#f4f4f4] py-20 px-8 md:px-16 lg:px-24">

        {/* Header with line */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl font-bold text-[#444] whitespace-nowrap">
            Ediciones pasadas
          </h2>
          <div className="h-[2px] flex-grow bg-[#d1d5db]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[99, 98, 97, 96].map((edicion) => (
            <div key={edicion} className="flex flex-col group cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full aspect-[3/4] bg-[#e0e0e0] mb-6 relative overflow-hidden rounded-sm transition-all duration-300 group-hover:shadow-lg">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#444] leading-tight mb-2">
                  Opportunities<br />
                  Innovation & Sustainability
                </h3>
                <p className="text-[#666] text-sm">
                  Edición no. {edicion}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
