import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

const Navigation = () => {
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
          <button onClick={() => setIsOpen(!isOpen)}>
            <RiShoppingCartLine size={20} color="white" />
          </button>
        </div>
      </div>
      {isOpen ? <Cart visible={isOpen} /> : <Cart visible={isOpen} />}
    </>
  );
};

export default Navigation;
