'use client';

import Link from 'next/link';

export default function NosotrosView() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-white font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[65vh] md:h-[75vh] min-h-[500px] overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        className="w-full h-full object-cover brightness-[0.5] grayscale-[20%]"
                        alt="Nosotros Hero"
                    />
                </div>

                {/* SUB NAV BAR OVERLAY */}
                <div className="absolute bottom-0 right-0 w-full z-10 p-6 md:p-12 md:pb-16 flex justify-end">
                    <nav className="flex flex-wrap items-center gap-6 md:gap-10 text-white font-inter text-sm md:text-base font-semibold tracking-wide drop-shadow-md">
                        <Link href="/nosotros" className="relative group text-white">
                            Nuestro Rol
                            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-white"></span>
                        </Link>
                        <Link href="/nosotros/directorio" className="relative group text-white/80 hover:text-white transition-colors">
                            Directorio
                        </Link>
                        <Link href="/nosotros/equipo" className="relative group text-white/80 hover:text-white transition-colors">
                            Equipo
                        </Link>
                        <Link href="/nosotros/impacto" className="relative group text-white/80 hover:text-white transition-colors">
                            Impacto
                        </Link>
                    </nav>
                </div>
            </section>

            {/* 2. TEXT SECTION (MISION & VISION) */}
            <section className="bg-white py-24 md:py-32 px-6 md:px-12 w-full flex flex-col items-center">
                <div className="max-w-[1000px] text-center w-full">
                    <h2 className="text-[#6c6c6c] text-3xl md:text-4xl lg:text-[44px] font-bold font-libre leading-tight mb-16">
                        37 años fortaleciendo la relación empresarial entre el Perú y el Reino Unido
                    </h2>

                    <div className="w-full h-px bg-gray-300 mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left">
                        <div>
                            <h3 className="text-gray-700 font-inter font-bold text-lg mb-4">Misión</h3>
                            <p className="text-[#6c6c6c] font-inter text-base md:text-lg leading-relaxed font-light">
                                Conectar y articular empresas del Perú y el Reino Unido, impulsando oportunidades de negocio, inversión y colaboración.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-inter font-bold text-lg mb-4">Visión</h3>
                            <p className="text-[#6c6c6c] font-inter text-base md:text-lg leading-relaxed font-light">
                                Ser el principal puente empresarial bilateral, reconocido por generar impacto en el comercio, la inversión y el desarrollo económico.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COASTLINE PANORAMIC IMAGE */}
            <section className="w-full h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    className="w-full h-full object-cover"
                    alt="Costa Verde Panoramic"
                />
            </section>

            {/* 4. BLUE PARTNERSHIP SECTION */}
            <section className="w-full bg-[#0151F2] py-20 px-6 md:px-16 flex items-center min-h-[300px]">
                <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-white max-w-lg">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                            Impulsamos la colaboración empresarial para abrir nuevas oportunidades entre el Perú y el Reino Unido.
                        </h2>
                    </div>
                    <div className="flex flex-col md:items-end text-white">
                        <span className="font-sans font-medium text-lg mb-6">In partnership:</span>
                        <div className="flex items-center gap-6 md:gap-10">
                            <img src="/assets/embajada_logo.png" alt="British Embassy" className="h-[70px] md:h-[90px] w-auto brightness-0 invert" />
                            <img src="/assets/british_council.png" alt="British Council" className="h-[60px] md:h-[70px] w-auto brightness-0 invert" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. BOTTOM IMAGE (LONDON) WITH PLACEHOLDER FEEL */}
            <section className="w-full h-[50vh] md:h-[600px] relative overflow-hidden flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="London Skyline"
                />
                {/* Subtle overlay for contrast */}
                <div className="absolute inset-0 bg-black/10"></div>

            </section>

        </div>
    );
}
