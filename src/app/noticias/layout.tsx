import { NewsProvider } from '@/contexts/NewsContext';

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NewsProvider>{children}</NewsProvider>;
}
