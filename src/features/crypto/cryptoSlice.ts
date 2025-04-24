import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset, CryptoState } from '../../types/crypto';
import { initialCryptoData } from '../../mock/cryptoData';

const initialState: CryptoState = {
  assets: initialCryptoData,
  status: 'idle',
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload;
    },
    updateAsset: (state, action: PayloadAction<CryptoAsset>) => {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { updateAssets, updateAsset, setLoading, setError } = cryptoSlice.actions;

export default cryptoSlice.reducer;