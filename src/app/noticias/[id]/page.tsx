import NoticiaDetalleView from './NoticiaDetalleView';

export function generateStaticParams() {
  return [
    { id: 'exportaciones-ru' },
    { id: 'cuidado-rin' },
    { id: 'social-37-anos' },
    { id: 'comercio-10-marcas' }
  ];
}

export const metadata = {
  title: 'Noticia | BPCC',
  description: 'Detalle de la noticia de la Cámara de Comercio Peruano Británica',
};

export default async function NoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <NoticiaDetalleView id={resolvedParams.id} />;
}
