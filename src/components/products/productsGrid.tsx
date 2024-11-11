import { Product } from "@/interfaces/product.interface";
import { ProductItem } from "./productItem";

interface ProductsGridProps {
  products: Product[];
}
export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {products.map((product) => (
        <ProductItem product={product} key={product.description} />
      ))}
    </div>
  );
};
