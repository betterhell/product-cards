import React, { useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import { useCartStore } from "store/cart.store";
import Cart from "./Cart";
import { IconButton } from "@mui/material";

const Navigation = () => {
  const { items } = useCartStore();

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
          <IconButton className="relative" onClick={() => setIsOpen(!isOpen)}>
            {items.length !== 0 ? (
              <>
                <RiShoppingCartFill color="white" size={25} />
                <p className="absolute right-[-3px] top-0 w-5 rounded-3xl border-2 bg-red-400 text-xs font-thin text-white">
                  {items.length}
                </p>
              </>
            ) : null}
          </IconButton>
        </div>
      </div>
      {isOpen ? <Cart visible={isOpen} /> : <Cart visible={isOpen} />}
    </>
  );
};

export default Navigation;
