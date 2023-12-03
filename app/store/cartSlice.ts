import { createSlice } from "@reduxjs/toolkit";
import { ProductInt } from "@/app/types/product";

interface CartItem extends ProductInt {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  changed: boolean;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.changed = true;
      state.totalQuantity++;

      const newItem = action.payload;
      state.totalPrice += newItem.price;
      state.items.push(newItem);
    },
    removeItem: (state, action) => {
      state.changed = true;
      state.totalQuantity--;
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item?.price) state.totalPrice -= item.price;
      state.items = state.items.filter((x) => x.id !== id);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.changed = false;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
