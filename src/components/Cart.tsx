import React, { useEffect, useState } from "react";
import { useCartStore } from "../store/cart.store";
import CartItem from "../UI/CartItem";
import { Product } from "../models/models";

interface CartProps {
  visible: boolean;
}

const Cart: React.FC<CartProps> = ({ visible }) => {
  const { cart } = useCartStore();
  // const [total, setTotal] = useState({
  //   price: cart.reduce((acc: number, value: Product) => {
  //     return acc + value.price;
  //   }, 0),
  //   count: 5,
  // });

  return (
    <div
      className={`${
        visible ? "right-5" : "right-[-1000px]"
      } fixed top-[60px] z-10 flex h-[400px] w-[300px] ${
        cart.length > 3 && "overflow-y-auto"
      } flex-col overflow-hidden border-2 bg-white transition-all`}
    >
      <h3 className="mb-5 text-center text-2xl">Shopping Cart</h3>
      <div className="flex flex-col gap-3 ">
        <p>total:</p>
        {cart.length !== 0 ? (
          cart.map((product, index) => (
            <CartItem
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              stock={product.stock}
              images={product.images}
              quantity={product.quantity}
            />
          ))
        ) : (
          <h1 className="text-center text-black">Cart is empty :(</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
