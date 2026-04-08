/**
 * BPCC CDN Types
 * Based on CloudFront (CDN) documentation for www.bpcc.org.pe
 */

export interface CDNPaginationMeta {
    total_items: number;
    page_size: number;
    total_pages: number;
}

export interface CDNPageResponse<T> {
    page: number;
    page_size: number;
    total_pages: number;
    items: T[];
}

export interface CDNNewsItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    image: string | null;
}

export interface CDNNewsDetail {
    id: string;
    title: string;
    date: string;
    body: string;
    images: string[];
}

export interface CDNArticleItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    image: string;
}

export interface CDNArticleDetail {
    id: string;
    title: string;
    date: string;
    body: string;
    images: string[];
}

export interface CDNEventItem {
    id: string;
    title: string;
    date: string;
    cover: string;
    banner: string;
}

export interface CDNEventDetail {
    id: string;
    title: string;
    date: string;
    description: string;
    cover: string;
    banner: string;
}

export interface CDNCompanyLogo {
    id: string;
    name: string;
    logo: string;
}
