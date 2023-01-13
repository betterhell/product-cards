import { Product } from "types/product";
import { ItemOfCart } from "types/cart";

export const getPriceOfProduct = (product: Product): number => {
  return Number(
    (
      product.price -
      (product.price / 100) * (product.discountPercentage || 0)
    ).toFixed()
  );
};

export const getPriceOfCart = (items: ItemOfCart[]): number => {
  return Number(
    items
      .map((item) => getPriceOfProduct(item.product) * item.count)
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0)
      .toFixed()
  );
};
