import { z } from 'zod';

export const cryptoSchema = z.object({
  id: z.string(),
  name: z.string(),
  symbol: z.string(),
  price: z.string(),
  price_change_24h: z.number(),
  market_cap: z.string(),
  volume_24h: z.string(), 
  sparkline: z.array(z.number()).optional(),
});

export type Crypto = z.infer<typeof cryptoSchema>;

export interface PriceDataPoint {
  date: Date;
  price: number;
  open: number;
  close: number;
  high: number;
  low: number;
}