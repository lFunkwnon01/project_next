import type { Metadata } from 'next';
import ServiciosView from './ServiciosView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Servicios',
  description: 'Desbloqueamos el potencial de su negocio mediante servicios de consultoria estrategica y eventos de alto perfil',
};

export default function ServiciosPage() {
  return <ServiciosView />;
}
