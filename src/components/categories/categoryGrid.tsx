
import { Category } from "@/interfaces/category.interface";
import { CategoryItem } from "./categoryItem";

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {categories.map((category) => (
        <CategoryItem key={category.title} category={category} />
      ))}
    </div>
  );
};
