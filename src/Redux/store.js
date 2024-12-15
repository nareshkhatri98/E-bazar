import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice/counterSlice'
import { productApi } from './api/productApi'
import { authApi } from './api/authApi'
import authReducer from './slice/authSlice'
import cartReducer from './slice/cartSlice'

// redux-persist imports
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

// Redux-persist configuration
const persistConfig = {
  key: 'root',
  storage,
}

// Persist specific slices (optional)
const authPersistConfig = {
  key: 'auth',
  storage,
}

const cartPersistConfig = {
  key: 'cart',
  storage,
}

// Persisted reducers for auth and cart slices
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

// Combine all reducers
const rootReducer = combineReducers({
  counter: reducer,
  auth: persistedAuthReducer,  
  allCart: persistedCartReducer, 
  [productApi.reducerPath]: productApi.reducer,
})

// Apply persistence to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]), // Add API middleware
})
