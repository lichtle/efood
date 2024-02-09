import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  isOpen: boolean;
};

const initialState: CartState = {
  isOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    showCheckout: (state) => {
      state.isOpen = true;
    },
    hideCheckout: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showCheckout, hideCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
