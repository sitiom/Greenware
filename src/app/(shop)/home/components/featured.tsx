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


export default function FeaturedStore() {
  return (
    <>
      <Card className="border bg-card text-card-foreground shadow-sm h-full overflow-hidden rounded-sm">
      <CardHeader>
        <CardTitle>Electronics Title</CardTitle>
        <CardDescription>₱ 100</CardDescription>
      </CardHeader>
      <CardFooter className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <Button className="inline-flex items-center justify-center w-full">View product</Button>
      </CardFooter>
    </Card>
  </>

  );
}
