import Image from 'next/image';

export default function MaintenanceView() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left blue section */}
      <section className="w-full md:w-[40%] xl:w-[35%] bg-gradient-to-br from-[#003399] to-[#0051F2] flex flex-col px-8 py-12 md:px-16 md:py-20 text-white min-h-[50vh] md:min-h-screen">
        {/* Logo */}
        <div className="relative w-56 h-20 md:w-64 md:h-24 mb-16 self-start ml-[50px] -mt-[20px]">
          <Image
            src="/assets/logotipo_white.png"
            alt="BPCC Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col font-ibm text-sm md:text-base pr-4">
          <p className="font-bold mb-8 text-base">Estimados,</p>

          <p className="mb-6 leading-relaxed">
            Les informamos que nuestra página web se
            encuentra temporalmente en mantenimiento
            desde las 8:00 p.m. del viernes 3 de abril
            hasta las 9:00 a.m. del lunes 6 de abril.
            Durante este periodo, el sitio no estará
            disponible.
          </p>

          <p className="mb-6">
            Agradecemos su comprensión.
          </p>

          <p className="mb-6">
            Camara de Comercio Peruano Britanica
          </p>

          <p className="mb-12">
            Lunes 1 de Abril 2026
          </p>

          <div className="mt-8">
            <p className="font-bold mb-1 text-sm">Contacto</p>
            <a href="mailto:bpcc@bpcc.org.pe" className="text-white hover:text-gray-200 transition-colors text-sm">
              bpcc@bpcc.org.pe
            </a>
          </div>
        </div>
      </section>

      {/* Right image section */}
      <section className="w-full md:w-[60%] xl:w-[65%] relative min-h-[50vh] md:min-h-screen">
        <Image
          src="/assets/mantenimiendo.jpeg"
          alt="Página en mantenimiento - Construcción"
          fill
          className="object-cover object-center"
          priority
        />
      </section>
    </div>
  );
}
