'use client';

import React, { createContext, useContext, useState } from 'react';
import type { NewsArticle } from '@/types';

const INITIAL_ARTICLES: NewsArticle[] = [];

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
