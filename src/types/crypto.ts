export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  prevPrice?: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  sparkline: string;
}

export type CryptoState = {
  assets: CryptoAsset[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};