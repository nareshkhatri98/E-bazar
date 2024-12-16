import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import wishListReducer from './slice/wishListSlice'

// Import reducers and APIs
import counterReducer from './slice/counterSlice';
import authReducer from './slice/authSlice';
import cartReducer from './slice/cartSlice';
import filterReducer from './slice/filterSlice';
import { productApi } from './api/productApi';
import { authApi } from './api/authApi';

// Redux-persist configurations
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'allCart', 'wishList'], // Ensure 'wishList' is in the whitelist
};


const authPersistConfig = {
  key: 'auth',
  storage,
};

const cartPersistConfig = {
  key: 'cart',
  storage,
};
const wishlistPersistConfig = {
  key: 'wishList',
  storage,
};

// Persist individual reducers
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistWishListReducer = persistReducer(wishlistPersistConfig, wishListReducer);

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistedAuthReducer,
  allCart: persistedCartReducer,
  filter: filterReducer,
  wishList:persistWishListReducer,
  [productApi.reducerPath]: productApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

// Persist the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }).concat(productApi.middleware, authApi.middleware),
});

// Persistor for PersistGate
export const persistor = persistStore(store);
