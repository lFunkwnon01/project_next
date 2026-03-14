import NosotrosView from './NosotrosView';

export function generateStaticParams() {
  return [
    { section: 'rol' },
    { section: 'historia' },
    { section: 'directorio' },
    { section: 'equipo' },
  ];
}

export const metadata = {
  title: 'Nosotros | BPCC',
  description: 'Conozca sobre la Cámara de Comercio Peruano Británica',
};

export default function NosotrosPage() {
  return <NosotrosView />;
}
