import create from "zustand";
import { CartState, Status } from "../models/models";

export const useCartStore = create<CartState>()((set, get) => ({
  cart: [],
  status: Status.NONE,
  counter: 1,

  addToCart: (product) => {
    const itemInCart = get().cart.find((item) => item.id === product.id);
    if (itemInCart) {
      set((state) => ({ counter: state.counter + 1 }));
    } else {
      set((state) => ({
        cart: [...state.cart, product],
      }));
    }
  },
}));
