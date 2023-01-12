import create from "zustand";
import axios from "axios";
import { ProductState, Status } from "../models/models";

export const useProductStore = create<ProductState>()((set, get) => ({
  currentProduct: null,
  status: Status.NONE,

  getCurrentProduct: (productId: number) => {
    set({ status: Status.PENDING });

    axios
      .get<any>(`https://dummyjson.com/products/${productId}`)
      .then(({ data }) => {
        set({ currentProduct: data, status: Status.SUCCESS });
      })
      .catch((error) => {
        set({ status: Status.FAILURE });
        console.log(error);
      });
  },
}));
