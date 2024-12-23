import { COINBASE_CONFIG } from './coinbase-config';
import { fetchWithRetry } from './fetch-utils';
import { cryptoSchema } from './types';
import type { Crypto, PriceDataPoint, CoinApiResponse } from './types';
import { z } from 'zod';

const headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
};

const RATE_LIMIT_DELAY = 3000; // 3 seconds between requests
let lastRequestTime = 0;

async function enforceRateLimit() {
	const now = Date.now();
	const timeSinceLastRequest = now - lastRequestTime;
	if (timeSinceLastRequest < RATE_LIMIT_DELAY) {
		const waitTime = RATE_LIMIT_DELAY - timeSinceLastRequest;
		console.log(`Rate limiting: waiting ${waitTime}ms before next request`);
		await new Promise((resolve) => setTimeout(resolve, waitTime));
	}
	lastRequestTime = Date.now();
}

export async function getTopCryptos(): Promise<Crypto[]> {
	await enforceRateLimit();

	const url = `${COINBASE_CONFIG.ALTERNATIVE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
	const response = await fetchWithRetry(
		url,
		{
			headers,
			useCache: true,
		},
		5
	);

	const data = await response.json();

	if (!Array.isArray(data)) {
		throw new Error('Invalid API response format');
	}

	const cryptos = data.map((coin: CoinApiResponse) => ({
		id: coin.id,
		name: coin.name,
		symbol: coin.symbol.toUpperCase(),
		price: (coin.current_price || 0).toString(),
		price_change_24h: coin.price_change_percentage_24h || 0,
		market_cap: (coin.market_cap || 0).toString(),
		volume_24h: (coin.total_volume || 0).toString(),
		sparkline: coin.sparkline_in_7d?.price || [],
	}));

	return z.array(cryptoSchema).parse(cryptos);
}

export async function getCryptoHistory(
	coinId: string,
	days: string
): Promise<PriceDataPoint[]> {
	await enforceRateLimit();

	try {
		// Handle 'max' case for all-time data
		const daysParam = days === 'max' ? 'max' : days;
		const url = `${COINBASE_CONFIG.ALTERNATIVE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${daysParam}`;
		const response = await fetchWithRetry(
			url,
			{
				headers: {
					...headers,
				},
				useCache: true,
			},
			5 // Increase retries
		);

		const data = await response.json();

		if (!data?.prices?.length) {
			throw new Error('No price data available');
		}

		return data.prices.map((price: [number, number], index: number) => {
			const prevPrice = index > 0 ? data.prices[index - 1][1] : price[1];
			const currentPrice = price[1];

			return {
				date: new Date(price[0]),
				price: currentPrice,
				open: prevPrice,
				close: currentPrice,
				high: Math.max(prevPrice, currentPrice),
				low: Math.min(prevPrice, currentPrice),
			};
		});
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch price history: ${error.message}`);
		}
		throw new Error('Failed to fetch price history');
	}
}
