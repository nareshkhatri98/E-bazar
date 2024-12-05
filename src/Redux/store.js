import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice/counterSlice'
import { productApi } from './api/productApi'
import { authApi } from './api/authApi'



export const store = configureStore({
  reducer: {
    counter: reducer,

    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
})