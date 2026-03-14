import type { Metadata } from 'next';
import MembresiaView from './MembresiaView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Membresías',
  description: 'Únase a la red empresarial más influyente entre Perú y el Reino Unido.',
};

export default function MembershipPage() {
  return <MembresiaView />;
}
