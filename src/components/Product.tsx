import React, { useState } from "react";

import { useProductStore } from "store/product.store";
import { useCartStore } from "store/cart.store";
import AddToCartButton from "UI/AddToCartButton";
import { getPriceOfProduct } from "utils/price";

const Product = () => {
  const { currentProduct } = useProductStore();
  const { addToCart } = useCartStore();

  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  const price = currentProduct ? getPriceOfProduct(currentProduct) : null;

  const selectCurrentSlide = (index: number) => {
    setCurrentSliderIndex(index);
  };

  return (
    <div className="item my-20 flex h-[700px] w-full flex-col items-center p-5 lg:flex-row lg:justify-around lg:border-2">
      <div className="flex gap-3">
        <div className="m mb-10 flex h-[600px] w-[600px] items-center justify-center lg:mb-0">
          <img
            className="max-h-[500px]"
            src={currentProduct!.images[currentSliderIndex]}
            alt={currentProduct?.title}
          />
        </div>
        {currentProduct!.images.length < 2 ? null : (
          <div className="flex h-[60px] w-[60px] flex-col gap-5">
            {currentProduct?.images.map((image, index) => (
              <button
                className="border-2 border-orange-500 transition-all hover:scale-105"
                key={index}
                onClick={() => selectCurrentSlide(index)}
              >
                <img src={image} alt={currentProduct.title} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex max-w-[600px]  flex-col items-center pb-20">
        <h1 className="mb-10 text-center text-6xl font-bold">
          {currentProduct!.title}
        </h1>
        <p className="mb-10 text-center font-medium">
          {currentProduct!.description}
        </p>
        <div className="mb-10 flex justify-center gap-5">
          <h2 className="text-center text-6xl font-bold text-green-500">
            {price}$
          </h2>
          <p className="text-center font-medium text-red-500 line-through">
            {currentProduct!.price}$
          </p>
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
