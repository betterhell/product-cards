import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Product } from "../types/product";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface SliderProps {
  product: Product;
}

const Slider: React.FC<SliderProps> = ({ product }) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const styles = {
    transform: `translate3d(-${currentSliderIndex * 100}%, 0, 0)`,
    transitionDuration: `500ms`,
  };

  const nextSlideToggle = () => {
    if (currentSliderIndex === product.images.length - 1) {
      setCurrentSliderIndex(0);
    } else {
      setCurrentSliderIndex(currentSliderIndex + 1);
    }
  };

  const prevSlideToggle = () => {
    if (currentSliderIndex === 0) {
      setCurrentSliderIndex(product.images.length - 1);
    } else {
      setCurrentSliderIndex(currentSliderIndex - 1);
    }
  };

  const selectCurrentSlide = (index: number) => {
    setCurrentSliderIndex(index);
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <NavLink to={`/product/${product.id}`}>
        <div
          style={styles}
          className="flex h-[250px] items-center align-baseline"
        >
          {product.images?.map((image, index) => (
            <img
              key={index}
              className="object-contain"
              src={image}
              alt="product"
            />
          ))}
        </div>

        {product.images.length < 2 ? null : (
          <div className="absolute bottom-[230px] top-4 flex h-[250px] w-[244px] justify-center transition-none">
            {product.images.map((button, index) => (
              <button
                onMouseEnter={() => selectCurrentSlide(index)}
                onMouseLeave={() => selectCurrentSlide(0)}
                key={index}
                className="w-[500px] bg-transparent transition-all hover:border-b-4 hover:border-orange-500"
              ></button>
            ))}
          </div>
        )}
      </NavLink>

      {product.images.length < 2 ? null : (
        <div>
          <button
            onClick={prevSlideToggle}
            className="absolute top-4 left-0 h-[250px] cursor-pointer bg-gray-100 transition-all hover:bg-gray-300"
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

export default Slider;
