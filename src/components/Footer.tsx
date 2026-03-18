import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue-deep text-white pt-20 pb-12 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          
          {/* LOGO & PARTNERSHIP */}
          <div className="flex flex-col gap-10">
            <Link href="/" className="flex items-center gap-3">
              <svg className="w-12 h-12 lg:w-14 lg:h-14" fill="white" viewBox="0 0 48 48">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl lg:text-3xl font-bold tracking-tight">BritCham</span>
                <span className="text-[10px] font-bold uppercase tracking-widest pl-0.5 opacity-70">Peru</span>
              </div>
            </Link>
            
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">In partnership with:</p>
              <div className="flex items-center gap-6">
                <img src="/assets/embajada_logo.png" alt="British Embassy" className="h-10 w-auto brightness-0 invert opacity-80" />
                <img src="/assets/british_council.png" alt="British Council" className="h-8 w-auto brightness-0 invert opacity-80" />
              </div>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Nosotros</h5>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Rol e Historia</Link>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Directorio</Link>
                <Link href="/nosotros" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Gobernanza</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Investigación</h5>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Economic Report</Link>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Opportunities</Link>
                <Link href="/investigacion" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Data Hub</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Servicios</h5>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Comercio Exterior</Link>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Networking</Link>
                <Link href="/servicios" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Certificaciones</Link>
              </div>
            </div>
          </div>

          {/* CONTACT & SOCIAL */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm opacity-60 leading-relaxed">
                Av. José Larco 1301, Miraflores<br />
                Lima, Perú (GMT-5)<br />
                bpcc@bpcc.org.pe
              </p>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.164.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.164-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.164-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.164 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07z"/></svg>
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] opacity-40 uppercase tracking-[0.2em]">
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
