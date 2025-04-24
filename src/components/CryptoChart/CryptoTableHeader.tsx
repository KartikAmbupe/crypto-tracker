import React from 'react';

const CryptoTableHeader: React.FC = () => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-4 py-4 px-6 text-neutral-400 text-sm font-medium border-b border-neutral-800">
      <div className="col-span-1">#</div>
      <div className="col-span-2">Name</div>
      <div className="col-span-1 text-right">Price</div>
      <div className="col-span-1 text-right">1h %</div>
      <div className="col-span-1 text-right">24h %</div>
      <div className="col-span-1 text-right">7d %</div>
      <div className="col-span-1 text-right">Market Cap</div>
      <div className="col-span-1 text-right">Volume (24h)</div>
      <div className="col-span-1 text-right">Circulating Supply</div>
      <div className="col-span-1 text-right">Max Supply</div>
      <div className="col-span-1 text-center">Last 7 Days</div>
    </div>
  );
};

export default CryptoTableHeader;