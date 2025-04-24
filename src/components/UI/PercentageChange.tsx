import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { formatPercentage } from '../../utils/formatters';

interface PercentageChangeProps {
  value: number;
  className?: string;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ value, className = '' }) => {
  const isPositive = value >= 0;
  const colorClass = isPositive ? 'text-success' : 'text-danger';
  
  return (
    <div className={`flex items-center ${colorClass} ${className}`}>
      {isPositive ? (
        <ArrowUpRight className="w-4 h-4 mr-1" />
      ) : (
        <ArrowDownRight className="w-4 h-4 mr-1" />
      )}
      <span>{formatPercentage(value)}</span>
    </div>
  );
};

export default PercentageChange;