// Using public API endpoints instead of authenticated ones
export const COINBASE_CONFIG = {
  BASE_URL: 'https://api.coinbase.com/v2',
  ALTERNATIVE_URL: 'https://api.coingecko.com/api/v3', // Fallback to CoinGecko's public API
} as const;