import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import { getPriceOfProduct } from "utils/price";
import { Product } from "types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <div className="item relative m-1 flex h-[500px] max-w-[280px] flex-col border-2 p-4 transition-all hover:shadow-xl ">
      <div className="flex justify-center overflow-hidden">
        <div style={styles} className="flex">
          {product.images?.map((image, index) => (
            <img key={index} className="h-[250px]" src={image} alt="" />
          ))}
        </div>

        {product.images.length < 2 ? null : (
          <div className="absolute bottom-[230px] top-4 flex w-full justify-center px-4">
            {product.images.map((button, index) => (
              <button
                onMouseEnter={() => selectCurrentSlide(index)}
                key={index}
                className="w-full border-orange-500 bg-transparent transition-all hover:border-b-4"
              ></button>
            ))}
          </div>
        )}
      </div>

      <NavLink to={`/product/${product.id}`}>
        <h1 className="mt-5 text-center text-lg font-bold">{product.title}</h1>
      </NavLink>
      <div className="flex justify-center gap-3">
        <h2 className="text-xl font-bold">{price}</h2>
        <h3 className="line-through">{product.price}$</h3>
      </div>

      <p className="">{product.description}</p>

      {product.images.length < 2 ? null : (
        <div className="bg-black ">
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
