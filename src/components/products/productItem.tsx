import { Product } from "@/interfaces/product.interface";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, MoveRight, Plus } from "lucide-react";

interface ProductItemProps {
  product: Product;
}
export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Card>
      <CardContent className="flex-col p-4">
        <p className="text-xs text-black/50 mb-4 flex items-center">
          Orders
          <MoveRight className="w-4 h-4 mx-2" />
          Chitcken
        </p>
        <p>{product.description}</p>
        <p className="text-sm text-slate-500 mb-6">{product.price}</p>
        <div className="flex justify-end">
          <div>
            <Button variant="outline" size="icon">
              <Minus />
            </Button>
            <span className="mx-4">0</span>
            <Button variant="outline" size="icon">
              <Plus />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
