import type { Metadata } from 'next';
import SociosView from './SociosView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Directorio de Socios',
  description: 'Conozca a las empresas líderes en el intercambio comercial Perú-Reino Unido.',
};

export default function PartnersPage() {
  return <SociosView />;
}
