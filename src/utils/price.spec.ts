import { getPriceOfCart, getPriceOfProduct } from "./price";
import { ItemOfCart } from "types/cart";

describe("price", () => {
  describe("getPriceOfProduct", () => {
    const tempProduct = {
      id: 123,
      title: "title",
      price: 12312312,
      rating: 5,
      stock: 51,
      brand: "kek",
      discountPercentage: null,
      category: "oapsdopas",
      description: "descr",
      images: [],
    };

    it("should be right price with discount", function () {
      const product = {
        ...tempProduct,
        price: 100,
        discountPercentage: 10,
      };

      const price = getPriceOfProduct(product);
      expect(price).toBe(90);
    });
    it("should be right price without discount", function () {
      const product = {
        ...tempProduct,
        price: 100,
      };

      const price = getPriceOfProduct(product);
      expect(price).toBe(100);
    });
  });

  describe("getPriceOfCart", () => {
    const tempProduct = {
      id: 123,
      title: "title",
      price: 12312312,
      rating: 5,
      stock: 51,
      brand: "kek",
      discountPercentage: null,
      category: "oapsdopas",
      description: "descr",
      images: [],
    };
    it("should be right price", function () {
      const items: ItemOfCart[] = [
        {
          product: {
            ...tempProduct,
            price: 100,
            discountPercentage: 10,
          },
          count: 1,
        },
        {
          product: {
            ...tempProduct,
            price: 100,
          },
          count: 2,
        },
      ];

      const price = getPriceOfCart(items);
      expect(price).toBe(290);
    });
    it("should be zero", function () {
      const items: ItemOfCart[] = [];

      const price = getPriceOfCart(items);
      expect(price).toBe(0);
    });
  });
});
