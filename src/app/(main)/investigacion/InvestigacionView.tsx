'use client';

export default function InvestigacionView() {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white">

      {/* 0. Subtle dark gradient overlay to ensure white navbar text is visible over light layout */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent z-[5] pointer-events-none"></div>

      {/* 1. SPLIT HERO */}
      <section className="w-full flex-1 flex flex-col bg-white">
        <div className="w-full flex-1 relative flex flex-col lg:flex-row shadow-sm min-h-[85vh]">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-[45%] bg-[#f4f4f4] py-20 lg:py-32 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] leading-tight font-bold text-[#444] mb-8">
              Dashboard<br />
              Económico Bilateral<br />
              Perú–Reino Unido
            </h1>
            <p className="text-[#555] text-lg font-sans leading-relaxed mb-6">
              Permite explorar de manera visual la evolución del comercio, la inversión y otros indicadores relevantes.
            </p>
            <p className="text-[#555] text-lg font-sans leading-relaxed mb-12">
              La información se presenta de forma accesible para facilitar su consulta, y seguimiento a lo largo del tiempo.
            </p>
            <div className="flex gap-4">
              <div className="w-40 h-10 bg-[#e0e0e0] rounded-sm"></div>
              <div className="w-40 h-10 bg-[#e0e0e0] rounded-sm"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Port and shipping containers"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
