import { GoldPrice } from '@/features/gold/types';
import { apiRequest } from '@/services/api/client';

export async function fetchGoldPrices() {
  return apiRequest<GoldPrice[]>('/gold-prices');
}
