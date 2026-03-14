import NoticiaDetalleView from './NoticiaDetalleView';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export const metadata = {
  title: 'Noticia | BPCC',
  description: 'Detalle de la noticia de la Cámara de Comercio Peruano Británica',
};

export default function NoticiaPage({ params }: { params: { id: string } }) {
  return <NoticiaDetalleView id={params.id} />;
}
