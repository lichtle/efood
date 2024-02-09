import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../components/Restaurant";

type CartState = {
  items: MenuItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.find((item) => item.id === action.payload.id);
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, openCart, closeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
