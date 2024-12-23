import { useEffect, useState } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CryptoTable } from '@/components/crypto/CryptoTable';
import { CryptoDetails } from '@/components/crypto/CryptoDetails';
import { getTopCryptos } from '@/lib/api/coinbase';
import type { Crypto } from '@/lib/api/types';

export function CryptoPage() {
	const [cryptos, setCryptos] = useState<Crypto[]>([]);
	const [search, setSearch] = useState('');
	const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const data = await getTopCryptos();
			setCryptos(data);
			setLoading(false);
		}
		fetchData();
	}, []);

	const filteredCryptos = cryptos.filter(
		(crypto) =>
			crypto.name.toLowerCase().includes(search.toLowerCase()) ||
			crypto.symbol.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<PageHero
				title="Crypto"
				description="Track the top 100 cryptocurrencies in real-time"
			/>
			<div className="container py-8 mb-48">
				<Card className="p-6">
					<div className="flex items-center space-x-4 mb-6">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search cryptocurrencies..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="pl-9"
							/>
						</div>
					</div>

					{selectedCrypto ? (
						<CryptoDetails
							crypto={selectedCrypto}
							onBack={() => setSelectedCrypto(null)}
						/>
					) : (
						<CryptoTable
							cryptos={filteredCryptos}
							loading={loading}
							onSelect={setSelectedCrypto}
						/>
					)}
				</Card>
			</div>
		</div>
	);
}
