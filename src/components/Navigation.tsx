import React, { useState } from "react";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useCartStore } from "../store/cart.store";

const Navigation = () => {
  const { cart } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed z-10 flex h-[40px] w-full items-center justify-between bg-gray-500 px-5 text-2xl font-semibold text-white">
        <NavLink to="/">
          <button>
            <h1>Store</h1>
          </button>
        </NavLink>
        <div>
          <button className="relative" onClick={() => setIsOpen(!isOpen)}>
            {cart.length !== 0 ? (
              <>
                <RiShoppingCartFill size={30} />
                <p className="absolute right-[-8px] top-0 w-5 rounded-3xl border-2 bg-red-600 text-xs font-thin">
                  {cart.length}
                </p>
              </>
            ) : (
              <RiShoppingCartLine size={30} />
            )}
          </button>
        </div>
      </div>
      {isOpen ? <Cart visible={isOpen} /> : <Cart visible={isOpen} />}
    </>
  );
};

export default Navigation;
