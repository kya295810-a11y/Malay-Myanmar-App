import { useInfiniteQuery } from '@tanstack/react-query';

import { PaginatedNewsResponse } from '@/features/news/types';
import { fetchNews } from '@/services/news/news-service';

export const newsQueryKey = ['news'] as const;

export function useNewsFeed(enabled = false) {
  return useInfiniteQuery<PaginatedNewsResponse, Error, PaginatedNewsResponse, typeof newsQueryKey, string | null>({
    enabled,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }) => fetchNews(pageParam),
    queryKey: newsQueryKey,
  });
}
