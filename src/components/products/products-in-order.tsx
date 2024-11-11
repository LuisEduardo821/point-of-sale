import { CircleDollarSign, CreditCard, QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const productsInOrder = [
  {
    description: "Roast beef",
    price: "$ 10.50",
  },
  {
    description: "Buffalo wings",
    price: "$ 8.85",
  },
];
export const ProductsInOrder = () => {
  return (
    <div className="col-span-1">
      <div className="grid gap-2 mb-2">
        {productsInOrder.map((product) => (
          <Card key={product.description}>
            <CardContent className="p-2 flex justify-between h-full">
              <div className="flex items-center">
                <div className="flex border-2 rounded-full w-5 h-5 justify-center items-center mr-2 text-sm">
                  2
                </div>
                <p className="mr-2">{product.description}</p>
                <span className="text-black/50">x3</span>
              </div>
              <p>{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="bg-white p-2 rounded-xl border shadow-sm h-full ">
        <div className="grid grid-cols-2 ">
          <span>Subtotal</span>
          <span>$ 62.40</span>
          <span>Tax 10%</span>
          <span>$ 6.24</span>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2">
          <span>Subtotal</span>
          <span>$ 62.40</span>
        </div>
        <p>Payment method</p>
        <div className="flex gap-2">
          <Button variant="outline" className="w-full h-12">
            <CircleDollarSign />
          </Button>
          <Button variant="outline" className="w-full h-12">
            <CreditCard />
          </Button>
          <Button variant="outline" className="w-full h-12">
            <QrCode />
          </Button>
        </div>
        <Button className="w-full rounded-full">Place Order</Button>
      </div>
    </div>
  );
};
