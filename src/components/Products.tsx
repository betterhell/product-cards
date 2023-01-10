import { useProductsStore } from "../store/products.store";
import ProductCard from "./ProductCard";
import { Product } from "../models/models";

const Products = () => {
  const { allProducts } = useProductsStore();

  return (
    <div className="container grid grid-cols-5 gap-3">
      {allProducts?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
