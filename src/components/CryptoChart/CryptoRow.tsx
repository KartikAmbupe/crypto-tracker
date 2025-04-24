import React, { useEffect, useRef } from 'react';
import PercentageChange from '../UI/PercentageChange';
import { 
  formatCurrency, 
  formatLargeNumber, 
  formatSupply 
} from '../../utils/formatters';
import { CryptoAsset } from '../../types/crypto';

interface CryptoRowProps {
  asset: CryptoAsset;
}

const CryptoRow: React.FC<CryptoRowProps> = ({ asset }) => {
  const priceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (asset.prevPrice && priceRef.current) {
      const priceElement = priceRef.current;
      const isIncrease = asset.price > asset.prevPrice;
      
      priceElement.classList.add(isIncrease ? 'bg-success/10' : 'bg-danger/10');
      
      setTimeout(() => {
        priceElement.classList.remove(isIncrease ? 'bg-success/10' : 'bg-danger/10');
      }, 1000);
    }
  }, [asset.price, asset.prevPrice]);

  return (
    <>
      {/* Desktop/Tablet View */}
      <div className="hidden lg:grid grid-cols-12 gap-4 py-5 px-6 text-sm border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors duration-200">
        <div className="col-span-1 flex items-center text-neutral-400">
          {asset.rank}
        </div>
        <div className="col-span-2 flex items-center">
          <img 
            src={asset.logo} 
            alt={`${asset.name} logo`} 
            className="w-6 h-6 mr-3" 
          />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-neutral-400 text-xs">{asset.symbol}</div>
          </div>
        </div>
        <div 
          ref={priceRef}
          className="col-span-1 flex items-center justify-end font-medium transition-colors duration-300 rounded-md px-2"
        >
          {formatCurrency(asset.price)}
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <PercentageChange value={asset.change1h} />
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <PercentageChange value={asset.change24h} />
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <PercentageChange value={asset.change7d} />
        </div>
        <div className="col-span-1 flex items-center justify-end text-neutral-300">
          {formatLargeNumber(asset.marketCap)}
        </div>
        <div className="col-span-1 flex items-center justify-end text-neutral-300">
          {formatLargeNumber(asset.volume24h)}
        </div>
        <div className="col-span-1 flex items-center justify-end text-neutral-300">
          {formatSupply(asset.circulatingSupply)}
        </div>
        <div className="col-span-1 flex items-center justify-end text-neutral-300">
          {asset.maxSupply ? formatSupply(asset.maxSupply) : '∞'}
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img 
            src={asset.sparkline} 
            alt={`${asset.name} 7-day chart`} 
            className={`h-10 ${asset.change7d >= 0 ? 'text-success' : 'text-danger'}`} 
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden p-4 border border-neutral-800 rounded-lg mb-3 bg-background-card hover:shadow-lg transition-all duration-200">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <img 
              src={asset.logo} 
              alt={`${asset.name} logo`} 
              className="w-8 h-8 mr-3" 
            />
            <div>
              <div className="font-medium text-base">{asset.name}</div>
              <div className="text-neutral-400 text-xs">{asset.symbol}</div>
            </div>
          </div>
          <div className="text-xs text-neutral-400">#{asset.rank}</div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="text-lg font-semibold" ref={priceRef}>
            {formatCurrency(asset.price)}
          </div>
          <PercentageChange value={asset.change24h} className="text-sm" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
          <div className="flex flex-col">
            <span className="text-neutral-400 text-xs">Market Cap</span>
            <span>{formatLargeNumber(asset.marketCap)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-400 text-xs">Volume (24h)</span>
            <span>{formatLargeNumber(asset.volume24h)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2 text-xs">
            <PercentageChange value={asset.change1h} className="bg-neutral-800/50 px-2 py-1 rounded" />
            <PercentageChange value={asset.change7d} className="bg-neutral-800/50 px-2 py-1 rounded" />
          </div>
          <img 
            src={asset.sparkline} 
            alt={`${asset.name} 7-day chart`} 
            className="h-7" 
          />
        </div>
      </div>
    </>
  );
};

export default CryptoRow;