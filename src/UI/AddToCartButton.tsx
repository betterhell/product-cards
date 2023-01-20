import React from "react";

import { Product } from "types/product";
import { Button } from "@mui/material";

interface addToCartButton {
  addToCart: (currentProduct: Product) => void;
  currentProduct: Product;
}

const AddToCartButton: React.FC<addToCartButton> = ({
  addToCart,
  currentProduct,
}) => {
  return (
    <Button
      variant="contained"
      onClick={() => addToCart(currentProduct!)}
      className="h-[60px] w-full bg-amber-300 text-xl font-semibold text-white drop-shadow-lg transition-all hover:bg-blue-700"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
