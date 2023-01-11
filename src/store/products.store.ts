import create from "zustand";
import axios from "axios";
import { ProductsState, Status } from "../models/models";

export const useProductsStore = create<ProductsState>()((set) => ({
  allProducts: null,
  status: Status.NONE,

  getAllProducts: () => {
    set({ status: Status.PENDING });
    axios
      .get<any>("https://dummyjson.com/products")
      .then(({ data }) => {
        set({ allProducts: data.products, status: Status.SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        set({ status: Status.FAILURE });
      });
  },
}));
