import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../models/models";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const {
    id,
    images,
    title,
    price,
    category,
    brand,
    description,
    rating,
    stock,
    discountPercentage,
  } = product;

  const nextSlideToggle = () => {
    if (currentSliderIndex === images.length - 1) {
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
      setCurrentSliderIndex(images.length - 1);
    } else {
      setCurrentSliderIndex(currentSliderIndex - 1);
    }
  };

  const styles = {
    transform: `translate3d(-${currentSliderIndex * 100}%, 0, 0)`,
    transitionDuration: `1000ms`,
  };

  return (
    <div className="item relative m-1 flex h-[500px] flex-col border-2 p-4 transition-all hover:shadow-xl ">
      <div className="flex justify-center overflow-hidden">
        <div style={styles} className="flex">
          {images?.map((image, index) => (
            <img key={index} className="h-[250px]" src={image} alt="" />
          ))}
        </div>

        {images.length < 2 ? null : (
          <div className="absolute bottom-[230px] top-4 flex w-full justify-center px-4">
            {images.map((button, index) => (
              <button
                onMouseEnter={() => selectCurrentSlide(index)}
                key={index}
                className="w-full border-orange-500 bg-transparent transition-all hover:border-b-4"
              ></button>
            ))}
          </div>
        )}
      </div>

      <NavLink to={`/product/${id}`}>
        <h1 className="text-center text-lg font-bold">{title}</h1>
      </NavLink>
      <h3 className="text-center font-medium">{price} $</h3>
      <p>{description}</p>

      {images.length < 2 ? null : (
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
