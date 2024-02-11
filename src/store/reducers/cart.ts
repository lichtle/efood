import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../../components/Restaurant";

type CartState = {
  items: MenuItem[];
  isCartOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isCartOpen: false,
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
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, openCart, closeCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
