export interface ProductState {
  currentProduct: Product | null;
  status: Status;
  getCurrentProduct: (id: number) => void;
}

export interface ProductsState {
  allProducts: Product[] | null;
  status: Status;
  getAllProducts: () => void;
}

export interface CartState {
  cart: Product[] | [];
  counter: number;
  status: Status;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number | null;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  images: string[];
  quantity: number;
}

export enum Status {
  SUCCESS = "success",
  PENDING = "pending",
  FAILURE = "failure",
  NONE = "none",
}
