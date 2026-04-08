import type { Metadata } from 'next';
import NosotrosView from './NosotrosView';

export const metadata: Metadata = {
  title: 'Nosotros | BPCC',
  description: 'Conozca nuestro rol en la comunidad de negocios peruana y británica.',
};

export default function NosotrosPage() {
  return <NosotrosView />;
}
