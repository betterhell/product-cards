import React from "react";
import { TiDelete } from "react-icons/ti";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

import { useCartStore } from "store/cart.store";
import { getPriceOfProduct } from "utils/price";
import { Product } from "types/product";

interface CartItemProps {
  product: Product;
  count: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, count }) => {
  const { deleteFromCart, increaseItemCount, decreaseItemCount } =
    useCartStore();

  const price = getPriceOfProduct(product);

  return (
    <div className="item-center relative mx-2 flex justify-between gap-5 border-2 p-2">
      <img
        className="max-h-[80px] max-w-[80px]"
        src={product.images[0]}
        alt=""
      />
      <div>
        <h2 className="text-md">{product.title}</h2>
        <h2 className="text-lg font-bold">{price}$</h2>
      </div>
      <div className="flex items-center">
        <p className="rounded-3xl bg-gray-200 px-2">{count}</p>
        <div className="flex flex-col">
          <button onClick={() => increaseItemCount(product.id)}>
            <GoArrowSmallUp size={30} />
          </button>
          <button onClick={() => decreaseItemCount(product.id)}>
            <GoArrowSmallDown size={30} />
          </button>
        </div>
      </div>
      <div className="absolute right-[-15px] top-[-15px]">
        <button onClick={() => deleteFromCart(product.id)}>
          <TiDelete size={30} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
