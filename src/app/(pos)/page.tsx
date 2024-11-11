"use client";
import { CategoryGrid, ProductsGrid, ProductsInOrder } from "@/components";
import { Separator } from "@/components/ui/separator";
import {
  CakeSlice,
  Coffee,
  CoffeeIcon,
  HandPlatter,
  Martini,
  Salad,
  Shell,
  Soup,
} from "lucide-react";

const categories = [
  {
    title: "Breakfast",
    icon: CoffeeIcon,
  },
  {
    title: "Soup",
    icon: Soup,
  },
  {
    title: "Pasta",
    icon: Salad,
  },
  {
    title: "Sushi",
    icon: Shell,
  },
  {
    title: "Main course",
    icon: HandPlatter,
  },
  {
    title: "Desserts",
    icon: CakeSlice,
  },
  {
    title: "Drinks",
    icon: Coffee,
  },
  {
    title: "Alcohol",
    icon: Martini,
  },
];

const products = [
  {
    description: "Fish and chips",
    price: "$ 7.50",
  },
  {
    description: "Roast chicken",
    price: "$ 12.75",
  },
  {
    description: "Fillet steak",
    price: "$ 11.60",
  },
  {
    description: "Beefsteak",
    price: "$ 10.20",
  },
  {
    description: "Roast beef",
    price: "$ 10.50",
  },
  {
    description: "Buffalo wings",
    price: "$ 8.85",
  },
  {
    description: "Lobster",
    price: "$ 13.40",
  },
  {
    description: "Red caviar",
    price: "$ 12.30",
  },
];

export default function Home() {
  return (
    <div className="flex-col md:grid md:grid-cols-4 gap-2 min-h-full">
      <div className="col-span-3">
        <CategoryGrid categories={categories} />
        <Separator className="my-4" />
        <ProductsGrid products={products} />
        <Separator className="my-4" />
      </div>
      {/* <div className="cols-span-1 bg-white">products in cart</div> */}
      <ProductsInOrder />
    </div>
  );
}
