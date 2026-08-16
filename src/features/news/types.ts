export interface NewsCategory {
  id: string;
  label: string;
  slug: string;
}

export interface NewsSource {
  id: string;
  name: string;
}

export interface NewsArticle {
  category: NewsCategory;
  id: string;
  imageUrl?: string | null;
  publishedAt: string;
  source: NewsSource;
  summary: string;
  title: string;
  url: string;
}

export interface PaginatedNewsResponse {
  items: NewsArticle[];
  nextCursor?: string | null;
}
