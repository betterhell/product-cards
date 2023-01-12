import React, { useState } from "react";
import { useCartStore } from "../store/cart.store";
import { Product } from "../models/models";

const Cart = () => {
  const { cart, counter } = useCartStore();

  return (
    <div className="fixed top-[60px] right-5 z-10 flex h-[600px] w-[300px] flex-col border-2 bg-white">
      <h3 className=" text-center text-2xl">Shopping Cart</h3>
      <div className="flex flex-col gap-3 ">
        {cart !== null ? (
          cart.map((product, index) => (
            <div
              className="mx-2 flex items-center justify-between border-2"
              key={index}
            >
              <img
                className="max-h-[80px] max-w-[80px]"
                src={product.images[0]}
                alt=""
              />
              <h2 className="text-lg">{product.title}</h2>
              <p>{counter}</p>
              <button>+</button>
              <button>-</button>
            </div>
          ))
        ) : (
          <h1 className="text-black">Корзина пуста</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
