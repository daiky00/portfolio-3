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

export interface CoinApiResponse {
	id: string;
	name: string;
	symbol: string;
	current_price: number;
	price_change_percentage_24h: number;
	market_cap: number;
	total_volume: number;
	sparkline_in_7d?: {
		price?: number[];
	};
}
