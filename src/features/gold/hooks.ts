import { useQuery } from '@tanstack/react-query';

import { fetchGoldPrices } from '@/services/gold/gold-service';

export const goldQueryKey = ['gold-prices'] as const;

export function useGoldPrices(enabled = false) {
  return useQuery({
    enabled,
    queryFn: fetchGoldPrices,
    queryKey: goldQueryKey,
  });
}
