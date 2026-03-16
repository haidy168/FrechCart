import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartResponse } from "../type/cart.type";

interface CartState {
  numOfCartItems: number;
  cartId: string;
  products: CartItem[];
  totalCartPrice: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: CartState = {
  numOfCartItems: 0,
  cartId: '',
  products: [],
  totalCartPrice: 0,
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartInfo: (state, action: PayloadAction<CartResponse>) => {
      state.cartId = action.payload.cartId;
      state.numOfCartItems = action.payload.numOfCartItems;
      state.products = action.payload.data.products;
      state.totalCartPrice = action.payload.data.totalCartPrice;
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      const productId = action.payload.id;
      const removedItem = state.products.find(item => item._id === productId);

      if (removedItem) {
        state.products = state.products.filter(item => item._id !== productId);
        state.numOfCartItems = state.products.reduce((sum, item) => sum + item.count, 0);
        state.totalCartPrice -= removedItem.price * removedItem.count;
      }
    },
    clearCart: (state) => {
      state.cartId = '';
      state.numOfCartItems = 0;
      state.products = [];
      state.totalCartPrice = 0;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const { setCartInfo, removeProduct, clearCart } = cartSlice.actions;