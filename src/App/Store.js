import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from '../Features/Crypto/CryptoSlice'

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer
  },
})