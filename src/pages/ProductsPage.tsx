import React, { useEffect } from "react";

import Products from "components/Products";
import { useProductsStore } from "store/products.store";
import { Status } from "types/status";

const ProductsPage = () => {
  const { status, getAllProducts } = useProductsStore();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className="container mx-auto flex grid flex-wrap justify-items-center py-20 ">
      {status === Status.PENDING && <h1>Loading...</h1>}
      {status === Status.SUCCESS && <Products />}
      {status === Status.FAILURE && <h1>Something wrong, try again later</h1>}
    </div>
  );
};

export default ProductsPage;
