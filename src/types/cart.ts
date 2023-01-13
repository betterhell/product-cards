import { Product } from "./product";

export interface ItemOfCart {
  product: Product;
  count: number;
}

export interface CartState {
  items: ItemOfCart[];
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  increaseItemCount: (productId: number) => void;
  decreaseItemCount: (productId: number) => void;
}
