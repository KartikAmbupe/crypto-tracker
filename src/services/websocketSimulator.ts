import { store } from '../store';
import { updateAsset } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../types/crypto';

class WebSocketSimulator {
  private sockets: WebSocket[] = [];
  private klinesSockets: WebSocket[] = [];
  private isConnected: boolean = false;
  private symbolMap: { [key: string]: string } = {
    'bitcoin': 'BTCUSDT',
    'ethereum': 'ETHUSDT',
    'bnb': 'BNBUSDT',
    'solana': 'SOLUSDT',
    'tether': 'USDT', 
  };

  connect(): void {
    if (this.isConnected) return;
    
    this.isConnected = true;
    
    Object.entries(this.symbolMap).forEach(([id, symbol]) => {
      // Special handling for Tether since it's a stablecoin
      if (id === 'tether') {
        setInterval(() => {
          const state = store.getState();
          const asset = state.crypto.assets.find(a => a.id === id);
          
          if (asset) {
            const prevPrice = asset.price;
            const newPrice = 1 + (Math.random() - 0.5) * 0.001;
            const change1h = ((newPrice - 1) * 100);
            const change24h = ((newPrice - 1) * 100);
            
            const updatedAsset: CryptoAsset = {
              ...asset,
              prevPrice,
              price: newPrice,
              change1h,
              change24h,
              change7d: ((newPrice - 1) * 100),
              volume24h: asset.volume24h * (1 + (Math.random() - 0.5) * 0.1),
            };
            
            store.dispatch(updateAsset(updatedAsset));
          }
        }, 2000);
        
        return;
      }

      const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);
      
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const state = store.getState();
        const asset = state.crypto.assets.find(a => a.id === id);
        
        if (asset) {
          const prevPrice = asset.price;
          const newPrice = parseFloat(data.c); 
          const change1h = parseFloat(data.P);
          const change24h = (parseFloat(data.c) - parseFloat(data.o)) / parseFloat(data.o) * 100; 
          const volume24h = parseFloat(data.q);
          
          const updatedAsset: CryptoAsset = {
            ...asset,
            prevPrice,
            price: newPrice,
            change1h,
            change24h,
            volume24h,
          };
          
          store.dispatch(updateAsset(updatedAsset));
        }
      };
      
      const klinesWs = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1w`);
      
      klinesWs.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const state = store.getState();
        const asset = state.crypto.assets.find(a => a.id === id);
        
        if (asset && data.k) {
          const openPrice = parseFloat(data.k.o); 
          const currentPrice = parseFloat(data.k.c);
          const change7d = ((currentPrice - openPrice) / openPrice) * 100;
          
          const updatedAsset: CryptoAsset = {
            ...asset,
            change7d,
          };
          
          store.dispatch(updateAsset(updatedAsset));
        }
      };
      
      ws.onerror = (error) => {
        console.error(`WebSocket error for ${symbol}:`, error);
      };

      klinesWs.onerror = (error) => {
        console.error(`Klines WebSocket error for ${symbol}:`, error);
      };
      
      this.sockets.push(ws);
      this.klinesSockets.push(klinesWs);
    });
    
    console.log('WebSocket connections established');
  }

  disconnect(): void {
    if (!this.isConnected) return;
    
    [...this.sockets, ...this.klinesSockets].forEach(socket => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    });
    
    this.sockets = [];
    this.klinesSockets = [];
    this.isConnected = false;
    console.log('WebSocket connections closed');
  }

  isActive(): boolean {
    return this.isConnected;
  }
}

const websocketSimulator = new WebSocketSimulator();

export default websocketSimulator;