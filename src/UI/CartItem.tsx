import React, { useState } from "react";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import { useCartStore } from "../store/cart.store";

const CartItem = ({
  id,
  title,
  price,
  discountPercentage,
  stock,
  images,
  quantity,
}: any) => {
  const [count, setCount] = useState(1);

  const { deleteFromCart } = useCartStore();

  const ItemCountIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const ItemCountDecrease = () => {
    setCount(count - 1);
  };

  const discountPrice =
    discountPercentage !== null
      ? (price - (price / 100) * discountPercentage).toFixed()
      : price;

  if (count < 1) {
    deleteFromCart(id);
  }

  return (
    <div className="gap-x- relative mx-2 flex items-center justify-center border-2">
      <img className="max-h-[80px] max-w-[80px]" src={images[0]} alt="" />
      <div>
        <h2 className="text-md">{title}</h2>
        <h2 className="text-lg font-bold">{discountPrice}$</h2>
      </div>
      <div className="flex items-center">
        <p className="rounded-3xl bg-gray-200 px-2">{count}</p>
        <div className="flex flex-col">
          <button onClick={ItemCountIncrease}>
            <GoArrowSmallUp size={30} />
          </button>
          <button onClick={ItemCountDecrease}>
            <GoArrowSmallDown size={30} />
          </button>
        </div>
      </div>
      <div className="absolute right-[-15px] top-[-15px]">
        <button onClick={() => deleteFromCart(id)}>
          <TiDelete size={30} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
