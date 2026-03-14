import type { Metadata } from 'next';
import EventosView from './EventosView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Eventos',
  description: 'Próximos eventos, webinars y sesiones de networking de la Cámara.',
};

export default function EventsPage() {
  return <EventosView />;
}
