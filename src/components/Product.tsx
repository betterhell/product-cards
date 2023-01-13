import { useProductStore } from "../store/product.store";
import React, { useState } from "react";
import { useCartStore } from "../store/cart.store";
import CartItem from "../UI/CartItem";
import AddToCartButton from "../UI/AddToCartButton";

const Product = () => {
  const { currentProduct } = useProductStore();
  const { addToCart, counter } = useCartStore();

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
    <div className="item my-20 flex h-[700px] w-full flex-col items-center p-5 lg:flex-row lg:justify-around lg:border-2">
      <div className="flex gap-3">
        <div className="mb-10 flex max-w-[600px] lg:mb-0">
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

      <div className="flex max-w-[600px] flex-col items-center justify-center pb-20">
        <h1 className="mb-10 text-center text-6xl font-bold">{title}</h1>
        <p className="mb-10 text-center font-medium">{description}</p>
        <div className="mb-10 flex justify-center gap-5">
          <h2 className="text-center text-6xl font-bold">{discountPrice}$</h2>
          <p className="text-center font-medium line-through">{price}$</p>
        </div>
        <AddToCartButton
          addToCart={addToCart}
          currentProduct={currentProduct!}
        />
      </div>
    </div>
  );
};

export default Product;
