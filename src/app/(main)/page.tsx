import type { Metadata } from 'next';
import HomeView from './HomeView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Inicio',
  description: 'Cámara de Comercio Peruano Británica',
};

export default function HomePage() {
  return <HomeView />;
}
