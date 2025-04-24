import React, { useEffect } from 'react';
import CryptoTable from '../CryptoChart/CryptoTable';
import { Coins } from 'lucide-react';
import websocketSimulator from '../../services/websocketSimulator';

const Dashboard: React.FC = () => {
  useEffect(() => {
    websocketSimulator.connect();
    
    return () => {
      websocketSimulator.disconnect();
    };
  }, []);

  return (
    <main className="mt-20 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Cryptocurrency Prices</h1>
          <p className="text-neutral-400">
            Real-time prices of top cryptocurrencies by market capitalization
          </p>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 bg-background-card rounded-lg py-2 px-4 border border-neutral-800">
          <Coins className="w-5 h-5 text-primary mr-2" />
          <span className="text-sm">Prices update in real-time</span>
        </div>
      </div>
      
      <CryptoTable />
      
      <div className="mt-8 text-sm text-neutral-400 text-center">
        <p>
          Built with ❤️ by <a href="https://github.com/KartikAmbupe" className="text-primary hover:underline">Kartik Ambupe</a>
        </p>
      </div>
    </main>
  );
};

export default Dashboard;