import { useProductsStore } from "store/products.store";
import { Product } from "types/product";
import ProductCard from "./ProductCard";

const Products = () => {
  const { allProducts } = useProductsStore();

  console.log(allProducts);

  return (
    <div className="container flex flex-wrap justify-center gap-5">
      {allProducts?.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
