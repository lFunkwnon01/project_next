import type { Metadata } from 'next';
import MaintenanceView from "./MaintenanceView";

export const metadata: Metadata = {
  title: 'BPCC | CÁMARA DE COMERCIO PERUANO BRITÁNICA',
  description: 'Organización sin fines de lucro fundada en 1988 para promover relaciones comerciales y culturales entre Reino Unido y Perú',
  keywords: 'cámara de comercio, Perú, Reino Unido, comercio internacional, networking',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
