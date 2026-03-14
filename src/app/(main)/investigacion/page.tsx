import type { Metadata } from 'next';
import InvestigacionView from './InvestigacionView';

export const metadata: Metadata = {
  title: 'BritCham Peru | Investigación',
  description: 'Centro de conocimiento e inteligencia comercial bilateral.',
};

export default function InvestigacionPage() {
  return <InvestigacionView />;
}
