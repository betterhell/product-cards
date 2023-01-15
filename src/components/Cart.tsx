import React, { useMemo } from "react";

import { useCartStore } from "store/cart.store";
import CartItem from "UI/CartItem";
import { getPriceOfCart } from "utils/price";

interface CartProps {
  visible: boolean;
}

const Cart: React.FC<CartProps> = ({ visible }) => {
  const { items } = useCartStore();

  const totalPrice = useMemo(() => getPriceOfCart(items), [items]);

  return (
    <div
      className={`${
        items.length !== 0 && visible ? "right-5 " : "right-[-1000px]"
      } fixed top-[60px] z-10 flex h-[400px] w-[500px] flex-col overflow-auto border-2 bg-white p-2 shadow-lg transition-all`}
    >
      <h3 className="mb-5 text-center text-2xl">Shopping Cart</h3>
      <div className="flex flex-col gap-3 ">
        {items.length !== 0 ? (
          items.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              count={item.count}
            />
          ))
        ) : (
          <h1 className="text-center text-black">Cart is empty :(</h1>
        )}
        <p className="px-4 font-bold">Total: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
