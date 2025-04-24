# 📈 Real-Time Crypto Price Tracker

A responsive, real-time cryptocurrency price tracker built with **React**, **Redux Toolkit**, and **TypeScript**, inspired by CoinMarketCap. This app fetches and displays live crypto prices using the **Binance WebSocket API**, managing all state through Redux.

---

## 🚀 Features

- 📊 Live-updating table of 5 crypto assets (BTC, ETH, BNB, SOL, USDT)
- ⚡ Real-time price and volume updates via Binance WebSocket API
- 🧠 State managed globally using Redux Toolkit
- 🎨 Color-coded % changes (green for gain, red for loss)
- 📉 Static 7D chart for visual reference
- 📱 Fully responsive design (mobile-first)

---

## 🛠️ Tech Stack

- **React** + **Vite**
- **Redux Toolkit**
- **TypeScript**
- **Binance WebSocket API**
- **Tailwind CSS**
- **Static/SVG charts** for 7D chart preview

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/KartikAmbupe/crypto-tracker.git
cd crypto-tracker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

🧠 State Management
Redux Toolkit manages all app state through cryptoSlice.

WebSocketManager connects to Binance streams for live price updates.

Selectors are used to prevent unnecessary re-renders.

No local component state is used for crypto data.

🖼️ UI Preview

![image](https://github.com/user-attachments/assets/fcbfd119-dd82-4713-94c8-c4d9f7f7f6d2)

📄 License
Licensed under the MIT License.

🙌 Acknowledgements
Binance WebSocket API

Redux Toolkit

React + TypeScript Cheatsheets
