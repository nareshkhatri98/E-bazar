import { createSlice } from "@reduxjs/toolkit";
import { allProudcts } from "@/assets/products";
import { toast } from "react-hot-toast";

const initialState = {
  cart: [],
  items: allProudcts,
  totalQuantity: 0,
  subTotalPrice: 0,
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

      if (!existingItem) {
        // Add new product to cart
        state.cart.push({
          ...product,
          quantity: 1,
          subtotal: parseFloat(product.price.replace("$", "")),
        });
        state.totalQuantity += 1;
        state.totalPrice += parseFloat(product.price.replace("$", ""));
        toast.success("Item added to cart successfully!");
      } else {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * parseFloat(existingItem.price.replace("$", ""));
        state.totalQuantity += 1;
        state.totalPrice += parseFloat(existingItem.price.replace("$", ""));
        toast.success("Item quantity updated!");
      }
    },

    removeItem: (state, action) => {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);

      if (itemToRemove) {
        // Update totalQuantity and totalPrice
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= itemToRemove.subtotal;

        // Remove the item from the cart
        state.cart = state.cart.filter((item) => item.id !== action.payload);
        toast.success("Item remove successfully");
      }

      // Ensure totalPrice and totalQuantity are 0 when cart is empty
      if (state.cart.length === 0) {
        state.totalQuantity = 0;
        state.totalPrice = 0;
      }
    },

    increaseItemQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((item) => item.id === productId);

      if (product) {
        product.quantity += 1;
        product.subtotal = product.quantity * parseFloat(product.price.replace("$", ""));
        state.totalQuantity += 1;
        state.totalPrice += parseFloat(product.price.replace("$", ""));
        toast.success("Item quantity increased!");
      }
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          const price = parseFloat(item.price.replace("$", ""));
          const newSubtotal = newQuantity * price;

          // Update totalQuantity and totalPrice
          state.totalQuantity -= 1;
          state.totalPrice -= price;
          toast.success("Item quantity decreased!");

          return {
            ...item,
            quantity: newQuantity,
            subtotal: newSubtotal, // Update subtotal
          };
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeItem, decreaseItemQuantity, increaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
