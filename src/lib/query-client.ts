import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 0,
    },
    queries: {
      gcTime: 1000 * 60 * 30,
      networkMode: 'offlineFirst',
      refetchOnReconnect: true,
      retry: 1,
      staleTime: 1000 * 60,
    },
  },
});
