import { Category } from "@/interfaces/category.interface";
import { Card, CardContent } from "../ui/card";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Card>
      <CardContent
        className="flex-col p-4 hover:cursor-pointer shadow-sm"
        onClick={() => console.log(category.title)}
      >
        <category.icon className="w-5 h-5 mb-7" />
        <p>{category.title}</p>
        <p className="text-sm text-slate-500">13 Items</p>
      </CardContent>
    </Card>
  );
};
