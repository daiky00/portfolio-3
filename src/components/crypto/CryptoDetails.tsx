import { useEffect, useState } from 'react';
import {
	ArrowLeft,
	LineChart as LineChartIcon,
	CandlestickChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { getCryptoHistory } from '@/lib/api/coinbase';
import type { Crypto, PriceDataPoint } from '@/lib/api/types';
import {
	LineChart,
	Line,
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const TIME_RANGES = [
	{ label: '24H', value: '1', interval: 'hourly' },
	{ label: '7D', value: '7', interval: 'daily' },
	{ label: '1M', value: '30', interval: 'daily' },
	{ label: '3M', value: '90', interval: 'montly' },
	{ label: '6M', value: '180', interval: 'montly' },
	{ label: '1Y', value: '365', interval: 'montly' },
	{ label: 'ALL', value: 'max', interval: 'montly' },
] as const;

type ChartType = 'line' | 'candlestick';

interface CryptoDetailsProps {
	crypto: Crypto;
	onBack: () => void;
}

export function CryptoDetails({ crypto, onBack }: CryptoDetailsProps) {
	const [history, setHistory] = useState<PriceDataPoint[]>([]);
	const [timeRange, setTimeRange] = useState('30');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [chartType, setChartType] = useState<ChartType>('line');

	useEffect(() => {
		async function fetchHistory() {
			try {
				setLoading(true);
				setError(null);
				const data = await getCryptoHistory(crypto.id, timeRange);
				setHistory(data);
			} catch (error) {
				setError('Failed to load price history. Please try again later.');
				console.error(error);
			} finally {
				setLoading(false);
			}
		}
		fetchHistory();
	}, [crypto.id, timeRange]);

	const renderChart = () => {
		if (chartType === 'line') {
			return (
				<LineChart data={history}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="date"
						tickFormatter={(date) => new Date(date).toLocaleDateString()}
					/>
					<YAxis />
					<Tooltip
						labelFormatter={(date) => new Date(date).toLocaleDateString()}
						formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
						wrapperClassName="!bg-popover"
						contentStyle={{
							backgroundColor: 'hsl(var(--popover))',
							borderColor: 'hsl(var(--border))',
							borderRadius: 'var(--radius)',
							padding: '0.5rem',
						}}
						itemStyle={{ color: 'hsl(var(--popover-foreground))' }}
						labelStyle={{ color: 'hsl(var(--popover-foreground))' }}
						cursor={{ stroke: 'hsl(var(--muted-foreground))' }}
					/>
					<Line
						type="monotone"
						dataKey="price"
						stroke="hsl(var(--primary))"
						dot={false}
						strokeWidth={2}
					/>
				</LineChart>
			);
		}

		return (
			<ComposedChart data={history}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis
					dataKey="date"
					tickFormatter={(date) => new Date(date).toLocaleDateString()}
				/>
				<YAxis />
				<Tooltip
					labelFormatter={(date) => new Date(date).toLocaleDateString()}
					formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
					wrapperClassName="!bg-background !border-border"
					contentStyle={{
						backgroundColor: 'hsl(var(--background))',
						borderColor: 'hsl(var(--border))',
					}}
					itemStyle={{ color: 'hsl(var(--foreground))' }}
					labelStyle={{ color: 'hsl(var(--foreground))' }}
					cursor={{ stroke: 'hsl(var(--muted-foreground))' }}
				/>
				<Bar
					dataKey="high"
					fill="transparent"
					stroke="hsl(var(--primary))"
					strokeWidth={2}
				/>
				<Bar
					dataKey="low"
					fill="transparent"
					stroke="hsl(var(--primary))"
					strokeWidth={2}
				/>
				<Line
					type="monotone"
					dataKey="close"
					stroke="hsl(var(--primary))"
					dot={false}
					strokeWidth={2}
				/>
			</ComposedChart>
		);
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<Button variant="ghost" onClick={onBack}>
					<ArrowLeft className="h-4 w-4 mr-2" />
					Back
				</Button>
				<h2 className="text-2xl font-bold">
					{crypto.name}
					<span className="ml-2 text-muted-foreground text-lg">
						{crypto.symbol}
					</span>
				</h2>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				<Card className="p-6">
					<h3 className="text-sm font-medium text-muted-foreground mb-2">
						Price
					</h3>
					<p className="text-2xl font-bold">
						${parseFloat(crypto.price).toFixed(2)}
					</p>
				</Card>
				<Card className="p-6">
					<h3 className="text-sm font-medium text-muted-foreground mb-2">
						24h Change
					</h3>
					<p
						className={`text-2xl font-bold ${
							crypto.price_change_24h >= 0 ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{crypto.price_change_24h.toFixed(2)}%
					</p>
				</Card>
				<Card className="p-6">
					<h3 className="text-sm font-medium text-muted-foreground mb-2">
						Market Cap
					</h3>
					<p className="text-2xl font-bold">
						${(parseFloat(crypto.market_cap) / 1e9).toFixed(2)}B
					</p>
				</Card>
			</div>

			<Card className="p-6">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
					<h3 className="text-lg font-medium">Price History</h3>
					{error && <div className="text-sm text-destructive">{error}</div>}
					<div className="flex flex-wrap items-center gap-4 sm:gap-6">
						<ToggleGroup
							type="single"
							value={chartType}
							onValueChange={(value) =>
								value && setChartType(value as ChartType)
							}
							className="bg-muted rounded-md p-1"
						>
							<ToggleGroupItem
								value="line"
								aria-label="Line chart"
								className="data-[state=on]:bg-background data-[state=on]:text-foreground rounded-sm px-3 py-2 transition-all"
							>
								<LineChartIcon className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem
								value="candlestick"
								aria-label="Candlestick chart"
								className="data-[state=on]:bg-background data-[state=on]:text-foreground rounded-sm px-3 py-2 transition-all"
							>
								<CandlestickChart className="h-4 w-4" />
							</ToggleGroupItem>
						</ToggleGroup>
						<ToggleGroup
							type="single"
							value={timeRange}
							onValueChange={(value) => value && setTimeRange(value)}
							className="bg-muted rounded-md p-1"
						>
							{TIME_RANGES.map((range) => (
								<ToggleGroupItem
									key={range.value}
									value={range.value}
									aria-label={range.label}
									className="data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm rounded-sm px-3 py-2 text-sm font-medium transition-all hover:bg-background/50"
								>
									{range.label}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
					</div>
				</div>
				<div className="h-[400px]">
					<ResponsiveContainer width="100%" height="100%">
						{loading ? (
							<div className="flex items-center justify-center h-full">
								<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
							</div>
						) : (
							renderChart()
						)}
					</ResponsiveContainer>
				</div>
			</Card>
		</div>
	);
}
