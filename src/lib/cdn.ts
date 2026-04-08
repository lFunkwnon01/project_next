import {
    CDNPageResponse,
    CDNNewsItem,
    CDNNewsDetail,
    CDNPaginationMeta,
    CDNArticleItem,
    CDNArticleDetail,
    CDNEventItem,
    CDNEventDetail,
    CDNCompanyLogo
} from '@/types/cdn';

// Using relative paths to leverage Next.js rewrites and avoid CORS issues
const CDN_BASE = process.env.NEXT_PUBLIC_CDN_BASE!;

/**
 * Generic fetch for CDN content
 */
async function fetchCDN<T>(path: string): Promise<T> {
    const url = `${path.startsWith('/') ? '' : '/'}${path}`;
    const response = await fetch(url, {
        next: { revalidate: 3600 } // Cache for 1 hour by default
    });

    if (!response.ok) {
        throw new Error(`CDN Error: ${response.status} ${response.statusText} at ${url}`);
    }

    return response.json();
}

/**
 * News Services
 */
export const newsService = {
    getMeta: () => fetchCDN<CDNPaginationMeta>('content/indexes/news/meta.json'),

    getPage: (page: number = 1) =>
        fetchCDN<CDNPageResponse<CDNNewsItem>>(`content/indexes/news/page-${page}.json`),

    getDetail: (id: string) =>
        fetchCDN<CDNNewsDetail>(`content/news/${id}.json`),

    // Helper to full URL mapping
    getImageUrl: (path: string | null) => path ? `${CDN_BASE}${path}` : null,
};

/**
 * Articles Services
 */
export const articlesService = {
    getMeta: () => fetchCDN<CDNPaginationMeta>('content/indexes/articles/meta.json'),

    getPage: (page: number = 1) =>
        fetchCDN<CDNPageResponse<CDNArticleItem>>(`content/indexes/articles/page-${page}.json`),

    getDetail: (id: string) =>
        fetchCDN<CDNArticleDetail>(`content/articles/${id}.json`),
};

/**
 * Events Services
 */
export const eventsService = {
    getMeta: () => fetchCDN<CDNPaginationMeta>('content/indexes/events/meta.json'),

    getPage: (page: number = 1) =>
        fetchCDN<CDNPageResponse<CDNEventItem>>(`content/indexes/events/page-${page}.json`),

    getDetail: (id: string) =>
        fetchCDN<CDNEventDetail>(`content/events/${id}.json`),
};

/**
 * Global Index Services
 */
export const indexService = {
    getCompaniesLogos: () =>
        fetchCDN<CDNCompanyLogo[]>('content/indexes/companies-logos.json'),
};
