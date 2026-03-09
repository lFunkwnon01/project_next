'use client';

import React, { createContext, useContext, useState } from 'react';
import type { NewsArticle } from '@/types';

const INITIAL_ARTICLES: NewsArticle[] = [
  {
    id: 'exportaciones-ru',
    title: 'Exportaciones al Reino Unido incrementaron en 2.3% durante el ultimo trimestre',
    category: 'Comercio Internacional',
    excerpt:
      'El Reino Unido representa aproximadamente el 19% del total de las contribuciones de capital en el país, compitiendo con España (18%) y Estados Unidos (11%) por el primer puesto. Este crecimiento sostenido refleja la solidez de las relaciones bilaterales y abre nuevas oportunidades para diversos sectores económicos. Las autoridades esperan que estas cifras continúen en ascenso a lo largo del próximo año, diversificando la cartera de productos peruanos en el extranjero de manera sustancial.',
    time: 'HACE 2 HORAS',
    date: 'HACE 2 HORAS',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    author: 'EQUIPO DE INVESTIGACIÓN',
    content: `
      <p>El Reino Unido representa aproximadamente el 19% del total de las contribuciones de capital en el país, compitiendo con España (18%) y Estados Unidos (11%) por el primer puesto. Este notable incremento interanual resalta la importancia estratégica y las fuertes relaciones bilaterales entre ambas naciones.</p>
      <p>Durante los últimos tres meses, el volumen de exportaciones en el sector agroindustrial, así como de minerales tradicionales, ha visto un repunte significativo. Las condiciones climáticas favorables y las nuevas políticas de exportación han jugado un rol crucial en esta mejora.</p>
      <h3>Impacto en la Economía Local</h3>
      <p>Se espera que este incremento no solo beneficie a las grandes corporaciones, sino que también tenga un efecto multiplicador en la economía local, generando miles de empleos directos e indirectos en las regiones productoras.</p>
      <p>Continuaremos monitoreando estos indicadores clave para evaluar el impacto a largo plazo de estos desarrollos. Las proyecciones sugieren que si esta tendencia se mantiene, podríamos ver un cierre de año histórico en términos de balance comercial.</p>
    `,
  },
  {
    id: 'social-37-anos',
    category: 'Social',
    title: '37 años de la Camara de Comercio Peruano Britanica',
    time: '15 DE DICIEMBRE',
    date: '15 DE DICIEMBRE',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'REDACCIÓN BPCC',
  },
  {
    id: 'comercio-10-marcas',
    category: 'Comercio Internacional',
    title: 'Top 10 marcas Britanicas importadas al Peru',
    time: '26 DE ABRIL',
    date: '26 DE ABRIL',
    image:
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'REDACCIÓN BPCC',
  },
];

interface NewsContextType {
  newsQueue: NewsArticle[];
  addArticle: (article: NewsArticle) => void;
  getArticle: (id: string) => NewsArticle | undefined;
}

const NewsContext = createContext<NewsContextType>({
  newsQueue: INITIAL_ARTICLES,
  addArticle: () => {},
  getArticle: () => undefined,
});

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [newsQueue, setNewsQueue] = useState<NewsArticle[]>(INITIAL_ARTICLES);

  const addArticle = (article: NewsArticle) => {
    setNewsQueue((prev) => [article, ...prev]);
  };

  const getArticle = (id: string) => newsQueue.find((a) => a.id === id);

  return (
    <NewsContext.Provider value={{ newsQueue, addArticle, getArticle }}>
      {children}
    </NewsContext.Provider>
  );
}

export const useNews = () => useContext(NewsContext);
