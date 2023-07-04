import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StoreCard() {
  return (
    <Card className="h-full overflow-hidden rounded-sm border bg-card text-card-foreground shadow-sm">
      <CardHeader>
        <CardTitle>Electronics Title</CardTitle>
        <CardDescription>₱ 100</CardDescription>
      </CardHeader>
      <CardFooter className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Button className="inline-flex w-full items-center justify-center">
          View product
        </Button>
      </CardFooter>
    </Card>
  );
}
