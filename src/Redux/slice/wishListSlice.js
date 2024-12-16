import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-hot-toast';

const initialState = {
  wishlist: [],  // Assuming wishlist is an array of product IDs or objects
  items: [],      // Array to hold all product items
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      
      // Check if the product already exists in the wishlist
      const existingItem = state.wishlist.find((item) => item.id === product.id);

      // If the product doesn't exist, add it to the wishlist
      if (!existingItem) {
        state.wishlist.push({
          ...product, // Add the entire product object
        });
        toast.success('Item added successfully')
      }
      else if (existingItem){
        toast.error('Item already exists in your wishlist')
      }
    },
    removeFromWishlist: (state, action) => {
      // Filter out the product based on its id
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload // Compare by 'id'
       
      );
      toast.success('item removed successfully')
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishListSlice.actions;

export default wishListSlice.reducer;
