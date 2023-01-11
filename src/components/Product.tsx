import { useProductStore } from "../store/product.store";

const Product = () => {
  const { currentProduct } = useProductStore();

  return (
    <div className="item m-1 flex flex-col justify-center border-2 p-4">
      <div className="flex">
        {/*<img*/}
        {/*  className="max-h-[300px] max-h-[300px]"*/}
        {/*  src={currentProduct!.images[0]}*/}
        {/*  alt={currentProduct!.title}*/}
        {/*/>*/}
        <h1 className="text-center text-lg font-bold">
          {currentProduct!.title}
        </h1>
        <p className="text-center font-medium">{currentProduct!.description}</p>
      </div>
    </div>
  );
};

export default Product;
