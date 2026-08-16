export type GoldPurity = '18K' | '21K' | '22K' | '24K';

export interface GoldPrice {
  currency: string;
  fetchedAt: string;
  price: number;
  purity: GoldPurity;
  sourceName: string;
  unit: string;
}
