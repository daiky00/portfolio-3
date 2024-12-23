interface PriceDataPoint {
  date: Date;
  price: number;
  open: number;
  close: number;
  high: number;
  low: number;
}

export function generateMockPriceData(days: number, basePrice = 1000): PriceDataPoint[] {
  const volatility = 0.05; // 5% daily volatility
  const trend = 0.001; // Slight upward trend
  let currentPrice = basePrice;
  
  return Array.from({ length: days }, (_, i) => {
    // Add trend and random walk
    const dailyChange = (Math.random() - 0.5) * 2 * volatility;
    const trendEffect = trend * i;
    currentPrice = currentPrice * (1 + dailyChange + trendEffect);
    
    // Generate realistic OHLC data
    const open = currentPrice * (1 + (Math.random() - 0.5) * volatility * 0.5);
    const close = currentPrice;
    const high = Math.max(open, close) * (1 + Math.random() * volatility * 0.5);
    const low = Math.min(open, close) * (1 - Math.random() * volatility * 0.5);
    
    return {
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
      price: currentPrice,
      open,
      close,
      high,
      low,
    };
  });
}