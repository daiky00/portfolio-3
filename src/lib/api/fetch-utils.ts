interface FetchOptions extends RequestInit {
  baseDelay?: number;
  maxDelay?: number;
  useCache?: boolean;
}

const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 300000; // 5 minutes cache for price data
const HISTORY_CACHE_DURATION = 3600000; // 1 hour cache for historical data
const MAX_RETRIES = 2; // Maximum number of retries

export async function fetchWithRetry(
  url: string, 
  options: FetchOptions = {}, 
  retries = MAX_RETRIES
): Promise<Response> {
  const isHistoricalData = url.includes('market_chart');
  const cacheDuration = isHistoricalData ? HISTORY_CACHE_DURATION : CACHE_DURATION;

  const baseDelay = options.baseDelay || 1000;
  const maxDelay = options.maxDelay || 5000;
  const useCache = options.useCache ?? true;

  // Check cache first
  if (useCache) {
    const cached = cache.get(url);
    if (cached && Date.now() - cached.timestamp < cacheDuration) {
      return new Response(JSON.stringify(cached.data), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  let lastError: Error | null = null;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        // Cache the successful response
        if (useCache) {
          const data = await response.clone().json();
          cache.set(url, { data, timestamp: Date.now() });
        }
        return response;
      }
      
      if (response.status === 429) {
        lastError = new Error('Rate limit exceeded');
        const delay = Math.min(baseDelay * Math.pow(2, i), maxDelay);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      lastError = new Error(`HTTP error! status: ${response.status}`);
      throw lastError;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error occurred');
      if (i === retries - 1) {
        console.error(`Failed after ${retries} retries:`, lastError);
        throw lastError;
      }
      const delay = Math.min(baseDelay * Math.pow(2, i), maxDelay);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw lastError || new Error('Max retries reached');
}