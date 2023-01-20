import React from "react";
import { NavLink } from "react-router-dom";

import { getPriceOfProduct } from "utils/price";
import { Product, ProductState } from "types/product";
import AddToCartButton from "../UI/AddToCartButton";
import { useCartStore } from "../store/cart.store";
import Slider from "../UI/Slider";
import { Card } from "@mui/material";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  const price = getPriceOfProduct(product);

  return (
    <Card
      variant="outlined"
      className="item h-max-[300px] relative m-1 flex w-[280px] flex-col justify-between border-2 p-4 transition-all hover:shadow-lg "
    >
      <Slider product={product} />

      <div className="flex h-fit flex-col justify-end">
        <NavLink to={`/product/${product.id}`}>
          <h1 className="text-center text-lg font-bold">{product.title}</h1>
        </NavLink>
        <div className="flex justify-center gap-3">
          <h2 className="text-xl font-bold text-green-500">{price} $</h2>
          <h3 className="text-red-500 line-through">{product.price} $</h3>
        </div>
        <div className="mt-5">
          <AddToCartButton addToCart={addToCart} currentProduct={product} />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
