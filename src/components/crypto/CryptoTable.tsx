import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useEffect } from 'react';
import { LineChart, Line } from 'recharts';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import type { Crypto } from '@/lib/api/types';

interface CryptoTableProps {
	cryptos: Crypto[];
	loading: boolean;
	onSelect: (crypto: Crypto) => void;
}

const ensureBitcoinFirst = (cryptos: Crypto[]) => {
	const bitcoinIndex = cryptos.findIndex(
		(crypto) =>
			crypto.symbol.toUpperCase() === 'BTC' ||
			crypto.name.toLowerCase() === 'bitcoin'
	);

	if (bitcoinIndex > 0) {
		const newCryptos = [...cryptos];
		const [bitcoin] = newCryptos.splice(bitcoinIndex, 1);
		newCryptos.unshift(bitcoin);
		return newCryptos;
	}

	return cryptos;
};

const generateChartData = (crypto: Crypto) => {
	if (!crypto.sparkline?.length) return [];

	// Get the starting price
	const startPrice = crypto.sparkline[0];

	// Calculate percentage changes relative to the starting price
	return crypto.sparkline.map((price: number) => ({
		value: ((price - startPrice) / startPrice) * 100,
	}));
};

export function CryptoTable({ cryptos, loading, onSelect }: CryptoTableProps) {
	const parentRef = useRef<HTMLDivElement>(null);
	const sortedCryptos = ensureBitcoinFirst(cryptos);

	// Ensure scroll container starts at top
	useEffect(() => {
		if (parentRef.current) {
			parentRef.current.scrollTop = 0;
		}
	}, [cryptos]);

	const rowVirtualizer = useVirtualizer({
		count: loading ? 10 : sortedCryptos.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 50,
		overscan: 10, // Increased overscan for smoother scrolling
		initialOffset: 0, // Ensure we start at the top
	});

	if (loading) {
		return (
			<div className="space-y-4">
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton key={i} className="h-12 w-full" />
				))}
			</div>
		);
	}

	return (
		<div className="relative">
			<div ref={parentRef} className="h-[100vh] overflow-auto">
				<Table>
					<TableHeader className="sticky top-0 bg-background z-10">
						<TableRow>
							<TableHead className="w-[80px] text-center">Rank</TableHead>
							<TableHead className="w-[250px]">Name</TableHead>
							<TableHead className="w-[200px]">Chart</TableHead>
							<TableHead className="w-[150px] text-center">Price</TableHead>
							<TableHead className="w-[150px] text-center">
								24h Change
							</TableHead>
							<TableHead className="w-[150px] text-center">
								Market Cap
							</TableHead>
							<TableHead className="w-[150px] text-center">
								Volume (24h)
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="relative">
						<tr style={{ height: `${rowVirtualizer.getTotalSize()}px` }} />
						{rowVirtualizer.getVirtualItems().map((virtualRow) => {
							const crypto = sortedCryptos[virtualRow.index];
							return (
								<TableRow
									key={virtualRow.index}
									style={{
										height: `${virtualRow.size}px`,
										transform: `translateY(${virtualRow.start}px)`,
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										display: 'grid',
										gridTemplateColumns:
											'80px 250px 200px 150px 150px 150px 150px',
										alignItems: 'center',
									}}
									className="cursor-pointer hover:bg-muted/50"
									onClick={() => onSelect(crypto)}
								>
									<TableCell className="flex items-center justify-center">
										{virtualRow.index + 1}
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-3">
											<img
												src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
												alt={crypto.name}
												className="w-8 h-8"
												onError={(e) => {
													(e.target as HTMLImageElement).src =
														'https://assets.coincap.io/assets/icons/generic@2x.png';
												}}
											/>
											<div>
												<div className="font-medium">{crypto.name}</div>
												<div className="text-sm text-muted-foreground">
													{crypto.symbol}
												</div>
											</div>
										</div>
									</TableCell>
									<TableCell>
										<div className="w-[120px] h-[40px]">
											<LineChart
												width={120}
												height={40}
												data={generateChartData(crypto)}
												margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
											>
												<Line
													type="monotone"
													dataKey="value"
													stroke={
														crypto.price_change_24h >= 0 ? '#22c55e' : '#ef4444'
													}
													strokeWidth={1.5}
													dot={false}
													isAnimationActive={false}
												/>
											</LineChart>
										</div>
									</TableCell>
									<TableCell className="text-right">
										${parseFloat(crypto.price).toFixed(2)}
									</TableCell>
									<TableCell
										className={`text-right ${
											crypto.price_change_24h >= 0
												? 'text-green-600'
												: 'text-red-600'
										}`}
									>
										{crypto.price_change_24h.toFixed(2)}%
									</TableCell>
									<TableCell className="text-right">
										${(parseFloat(crypto.market_cap) / 1e9).toFixed(2)}B
									</TableCell>
									<TableCell className="text-right">
										${(parseFloat(crypto.volume_24h) / 1e6).toFixed(2)}M
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
