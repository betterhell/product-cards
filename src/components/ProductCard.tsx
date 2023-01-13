import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { getPriceOfProduct } from "utils/price";
import { Product } from "types/product";
import AddToCartButton from "../UI/AddToCartButton";
import { useCartStore } from "../store/cart.store";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const nextSlideToggle = () => {
    if (currentSliderIndex === product.images.length - 1) {
      setCurrentSliderIndex(0);
    } else {
      setCurrentSliderIndex(currentSliderIndex + 1);
    }
  };

  const selectCurrentSlide = (index: number) => {
    setCurrentSliderIndex(index);
  };

  const prevSlideToggle = () => {
    if (currentSliderIndex === 0) {
      setCurrentSliderIndex(product.images.length - 1);
    } else {
      setCurrentSliderIndex(currentSliderIndex - 1);
    }
  };

  const price = getPriceOfProduct(product);

  const styles = {
    transform: `translate3d(-${currentSliderIndex * 100}%, 0, 0)`,
    transitionDuration: `1000ms`,
  };

  return (
    <div className="item justify h-max-[300px] relative m-1 flex w-[280px] flex-col border-2 p-4 transition-all hover:shadow-xl ">
      <div className="flex justify-center overflow-hidden">
        <div
          style={styles}
          className="flex h-[250px] items-center align-baseline"
        >
          {product.images?.map((image, index) => (
            <img key={index} className="w-[250px]" src={image} alt="" />
          ))}
        </div>

        {product.images.length < 2 ? null : (
          <div className="absolute bottom-[230px] top-4 flex h-[250px] w-full justify-center px-4">
            {product.images.map((button, index) => (
              <button
                onMouseEnter={() => selectCurrentSlide(index)}
                key={index}
                className="w-[500px] border-orange-500 bg-transparent transition-all hover:border-b-4"
              ></button>
            ))}
          </div>
        )}
      </div>

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
      {product.images.length < 2 ? null : (
        <div className="bg-black">
          <button
            onClick={prevSlideToggle}
            className="absolute top-4 left-0 h-[250px] w-4 cursor-pointer bg-gray-100 transition-all hover:bg-gray-300"
          >
            <IoMdArrowDropleft size={20} />
          </button>
          <button
            onClick={nextSlideToggle}
            className="absolute top-4 right-0 h-[250px] w-4 cursor-pointer bg-gray-100 transition-all hover:bg-gray-300"
          >
            <IoMdArrowDropright size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
