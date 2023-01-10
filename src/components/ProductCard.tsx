import React from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../models/models";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, image, title, price } = product;

  return (
    <div className="item m-1 flex cursor-pointer flex-col justify-center border-2 p-4 transition-all hover:scale-105 hover:shadow-xl">
      <img className="max-h-[300px] max-h-[300px]" src={image} alt="" />
      <NavLink to={`/product/${id}`}>
        <h1 className="text-center text-lg font-bold">{title}</h1>
      </NavLink>
      <h3 className="text-center font-medium">{price} $</h3>
    </div>
  );
};

export default ProductCard;
