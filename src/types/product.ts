import { Status } from "./status";

export interface ProductState {
  currentProduct: Product | null;
  status: Status;
  getCurrentProduct: (id: number) => void;
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
}
