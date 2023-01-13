import React from "react";
import { Product } from "../models/models";

interface addToCartButton {
  addToCart: (currentProduct: Product) => void;
  currentProduct: Product;
}

const AddToCartButton: React.FC<addToCartButton> = ({
  addToCart,
  currentProduct,
}) => {
  return (
    <button
      onClick={() => addToCart(currentProduct!)}
      className="h-[60px] w-full bg-amber-300 text-xl font-semibold text-white drop-shadow-lg transition-all hover:bg-blue-700"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
