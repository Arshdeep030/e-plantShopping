import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // cart will store { name, price, quantity, ... }
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // { name, price, etc. }
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        existingItem.quantity += 1; // If already in cart, just increase quantity
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // Add new with quantity = 1
      }
    },

    removeItem: (state, action) => {
      const nameToRemove = action.payload; // expects item.name
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // { name, quantity }
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity = quantity; // directly set new quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
