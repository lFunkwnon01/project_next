'use client';

interface ConstructionViewProps {
  title: string;
}

export default function ConstructionView({ title }: ConstructionViewProps) {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 items-center justify-center font-sans bg-white text-brand-dark">
      <h1 className="text-4xl font-bold text-center px-4">{title}</h1>
      <p className="mt-4 text-gray-500 text-center px-4">Página temporal en construcción.</p>
    </div>
  );
}
