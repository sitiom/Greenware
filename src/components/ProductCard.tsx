import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard() {
  return (
    <Card className="h-full overflow-hidden rounded-sm border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Electronics Title</CardTitle>
        <CardDescription>₱ 100</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/sqCJ6xJ/e-waste-recycling.jpg"
            alt="Gadget Image"
            className="h-auto max-h-48 w-full object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
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
