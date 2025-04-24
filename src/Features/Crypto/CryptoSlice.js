import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async () => {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
    );
    const data = await response.json();
    return data;
  }
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.assets = action.payload;
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
