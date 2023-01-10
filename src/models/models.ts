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

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export enum Status {
  SUCCESS = "success",
  PENDING = "pending",
  FAILURE = "failure",
  NONE = "none",
}