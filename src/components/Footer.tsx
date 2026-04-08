import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const FOOTER_HEIGHT = '340px'; // altura fija del footer (cámbiala si necesitas)
  const NAV_CONTACT_OFFSET_PX = 24; // <- Mueve NAV + CONTACT hacia abajo en px (ajusta aquí)

  return (
    <footer
      className="text-white pt-12 pb-8 font-sans"
      style={{
        height: FOOTER_HEIGHT,
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #003399 33%, #0051F2 73%)',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-0">

          {/* LOGO & PARTNERSHIP */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logotipo_white.png"
                alt="Cámara de Comercio Peruano Británica | BritCham Peru"
                width={260}
                height={260}
                className="brightness-0 invert opacity-90"
                style={{ width: '260px', height: 'auto' }}
              />
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-100">In partnership with:</p>
              <div className="flex items-center gap-6 space-x-8">
                <Image
                  src="/assets/emabajada.png"
                  alt="Embajada Británica en Lima - Aliado Estratégico"
                  width={70}
                  height={70}
                  className="brightness-0 invert opacity-80"
                  style={{ width: 'auto', height: '70px' }}
                />

                <Image
                  src="/assets/council_1.png"
                  alt="British Council - Aliado Institucional"
                  width={38}
                  height={38}
                  className="brightness-0 invert opacity-100"
                  style={{ width: 'auto', height: '38px' }}
                />
              </div>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div
            className="lg:col-span-2"
            style={{ transform: `translateY(${NAV_CONTACT_OFFSET_PX}px)` }} // <-- control por px
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Nosotros</h5>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Rol e Historia</Link>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Directorio</Link>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Gobernanza</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Investigación</h5>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Economic Report</Link>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Opportunities</Link>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Data Hub</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Servicios</h5>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Comercio Exterior</Link>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Networking</Link>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Certificaciones</Link>
              </div>
            </div>
          </div>

          {/* CONTACT & SOCIAL */}
          <div
            className="flex flex-col gap-4"
            style={{ transform: `translateY(${NAV_CONTACT_OFFSET_PX}px)` }} // <-- mismo offset para mantener alineación
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm opacity-60 leading-relaxed">
                Av. José Larco 1301, Miraflores<br />
                Lima, Perú (GMT-5)<br />
                bpcc@bpcc.org.pe
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <Link
                href="https://www.facebook.com/CamaraPeruanoBritanica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Seguir a BritCham Peru en Facebook"
                title="Facebook BritCham"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Link>
              <Link
                href="https://www.instagram.com/britcham.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Seguir a BritCham Peru en Instagram"
                title="Instagram BritCham"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44z" /></svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/camaraperuanobritanica/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Seguir a BritCham Peru en LinkedIn"
                title="LinkedIn BritCham"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] opacity-40 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} BRITISH PERUVIAN CHAMBER OF COMMERCE. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;