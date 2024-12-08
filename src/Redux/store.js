import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice/counterSlice'
import { productApi } from './api/productApi'
import { authApi } from './api/authApi'
import authReducer from './slice/authSlice'



export const store = configureStore({
  reducer: {
    counter: reducer,
    auth:authReducer,

    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
})