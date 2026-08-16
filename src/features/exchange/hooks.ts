import { useQuery } from '@tanstack/react-query';

import { fetchExchangeRates } from '@/services/exchange/exchange-service';

export const exchangeQueryKey = ['exchange-rates'] as const;

export function useExchangeRates(enabled = false) {
  return useQuery({
    enabled,
    queryFn: fetchExchangeRates,
    queryKey: exchangeQueryKey,
  });
}
