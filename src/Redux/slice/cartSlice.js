import { createSlice } from "@reduxjs/toolkit";
import { allProudcts } from "@/assets/products";

const initialState = {
  cart: [],
  items: allProudcts,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // Check if the product already exists in the cart
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity
      } else {
        state.cart.push({ ...product, quantity: 1 }); // Add new item
      }

      // Update totalQuantity and totalPrice
      state.totalQuantity += 1;
      state.totalPrice += parseFloat(product.price.replace("$", ""));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
