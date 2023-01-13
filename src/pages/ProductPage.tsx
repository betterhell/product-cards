import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useProductStore } from "store/product.store";
import Product from "components/Product";
import { Status } from "types/status";

const ProductsPage = () => {
  const { status, getCurrentProduct } = useProductStore();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getCurrentProduct(Number(id));
    }
  }, [getCurrentProduct, id]);

  return (
    <div className="container mx-auto flex justify-center pt-5">
      {status === Status.PENDING && <h1>Loading...</h1>}
      {status === Status.SUCCESS && <Product />}
      {status === Status.FAILURE && <h1>Something wrong, try again later</h1>}
    </div>
  );
};

export default ProductsPage;
