import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductsResponseItem } from "@/lib/queries";

interface ProductCardProps {
  product: ProductsResponseItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-sm border bg-card text-card-foreground shadow-sm">
      <CardHeader className="flex-1">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
          {product.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "PHP",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center">
        <img
          src={product.url ?? "https://i.ibb.co/sqCJ6xJ/e-waste-recycling.jpg"}
          alt="Gadget Image"
          className="h-auto max-h-48 w-full object-contain"
        />
      </CardContent>
      <CardFooter className="flex w-full flex-1 flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Button
          variant="outline"
          className="inline-flex w-full items-center justify-center"
        >
          Preview
        </Button>
        <Button className="inline-flex w-full items-center justify-center">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
