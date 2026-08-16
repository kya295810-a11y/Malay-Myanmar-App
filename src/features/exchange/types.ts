import { SupportedCurrency } from '@/constants/app';

export interface ExchangeRate {
  baseCurrency: SupportedCurrency;
  changeDirection?: 'down' | 'flat' | 'up';
  fetchedAt: string;
  quoteCurrency: SupportedCurrency;
  rate: number;
  sourceName: string;
}

export interface ExchangeRateSnapshot {
  rates: ExchangeRate[];
  stale: boolean;
}
