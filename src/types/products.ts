import { Status } from "./status";
import { Product } from "./product";

export interface ProductsState {
  allProducts: Product[] | null;
  status: Status;
  getAllProducts: () => void;
}
