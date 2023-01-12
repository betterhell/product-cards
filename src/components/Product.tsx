import { useProductStore } from "../store/product.store";
import React, { useState } from "react";

const Product = () => {
  const { currentProduct } = useProductStore();
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
  } = currentProduct!;

  const discountPrice =
    discountPercentage !== null
      ? (price - (price / 100) * discountPercentage).toFixed()
      : price;

  const selectCurrentSlide = (index: number) => {
    setCurrentSliderIndex(index);
  };

  return (
    <div className="item my-20 flex h-[700px] w-full justify-around border-2 p-5">
      <div className="flex gap-3">
        <div className="flex w-[600px]">
          <img src={images[currentSliderIndex]} alt={currentProduct?.title} />
        </div>

        {images.length < 2 ? null : (
          <div className="flex h-[60px] w-[60px] flex-col gap-5">
            {currentProduct?.images.map((image, index) => (
              <button
                className="border-2 border-orange-500 transition-all hover:scale-105"
                key={index}
                onClick={() => selectCurrentSlide(index)}
              >
                <img src={image} alt={title} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex max-w-[600px] flex-col items-center justify-center">
        <h1 className="mb-10 text-center text-6xl font-bold">{title}</h1>
        <p className="mb-10 text-center font-medium">{description}</p>
        <div className="mb-10 flex justify-center gap-5">
          <h2 className="text-center text-6xl font-bold">{discountPrice}$</h2>
          <p className="text-center font-medium line-through">{price}$</p>
        </div>
        <button className="h-[60px] w-[300px] bg-amber-300 text-xl font-semibold text-white transition-all hover:bg-blue-700">
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
