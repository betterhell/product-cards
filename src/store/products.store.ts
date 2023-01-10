import create from "zustand";
import axios from "axios";
import { ProductsState, Status } from "../models/models";

export const useProductsStore = create<ProductsState>()((set, get) => ({
  allProducts: null,
  status: Status.NONE,

  getAllProducts: () => {
    set({ status: Status.PENDING });
    axios
      .get<any>("https://fakestoreapi.com/products")
      .then(({ data }) => {
        set({ allProducts: data, status: Status.SUCCESS });
      })
      .catch((error) => {
        console.log(error);
        set({ status: Status.FAILURE });
      });
  },
}));
