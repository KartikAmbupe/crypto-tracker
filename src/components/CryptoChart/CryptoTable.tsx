import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAssets } from '../../features/crypto/cryptoSelectors';
import CryptoTableHeader from './CryptoTableHeader';
import CryptoRow from './CryptoRow';

const CryptoTable: React.FC = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-background-card">
      <CryptoTableHeader />
      <div className="divide-y divide-neutral-800">
        {assets.map(asset => (
          <CryptoRow key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
};

export default CryptoTable;