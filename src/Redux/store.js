import { configureStore } from '@reduxjs/toolkit'
import reducer from './slice/counterSlice'
import { productApi } from './api/productApi'
import { authApi } from './api/authApi'
import authReducer from './slice/authSlice'
import cartReducer from './slice/cartSlice'
import filterReducer from './slice/filterSlice' // Added filter slice

// redux-persist imports
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

// Redux-persist configuration
const persistConfig = {
  key: 'root',
  storage,
}

const authPersistConfig = {
  key: 'auth',
  storage,
}

const cartPersistConfig = {
  key: 'cart',
  storage,
}

// Persist specific slices
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

// Combine all reducers
const rootReducer = combineReducers({
  counter: reducer,
  auth: persistedAuthReducer, // Auth with persistence
  allCart: persistedCartReducer, // Cart with persistence
  filter: filterReducer, // Filter slice
  [productApi.reducerPath]: productApi.reducer, // Product API slice
  [authApi.reducerPath]: authApi.reducer, // Auth API slice
})

// Apply persistence to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure store
export const store = configureStore({
  reducer: persistedReducer, // Replace entire reducer with persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(productApi.middleware, authApi.middleware), // Add API middleware
})

