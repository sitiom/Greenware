import { type Metadata } from "next";
import BreadCrumbs from "@/components/BreadCrumbs";
import QuantityButton from "@/components/Quantity";
import Image from "next/image";
import Link from "next/link";
import { Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProductById } from "@/lib/queries";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const metadata: Metadata = {
  title: "Browse",
};

interface ProductPageProps {
  params: {
    id: number;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: product } = await getProductById(supabase, id);

  return (
    <section className="container items-center  gap-8 pb-8 pt-6 md:py-8">
      <BreadCrumbs />
      <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative h-full flex-col bg-muted text-white lg:flex">
          <img
            src={
              product?.url ?? "https://i.ibb.co/sqCJ6xJ/e-waste-recycling.jpg"
            }
            className="inset-0 h-[400px] object-cover"
          />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className="flex flex-col space-y-2 text-start">
              <h1 className="text-2xl font-semibold tracking-tight">
                {product?.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {product?.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "PHP",
                })}
              </p>
            </div>
            <QuantityButton />
            <Button className="inline-flex w-full items-center justify-center">
              Add to Cart
            </Button>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                  Introducing the EcoRecycle Pro, a reliable and efficient
                  solution for managing electronic waste. This compact device is
                  designed to simplify the process of recycling and disposing of
                  your old electronic devices responsibly. With advanced
                  technology and a user-friendly interface, the EcoRecycle Pro
                  ensures that valuable resources are recovered and harmful
                  materials are handled safely. Whether you're an individual or
                  a business, this innovative e-waste product offers a
                  convenient and sustainable way to declutter your space and
                  contribute to a greener future. Embrace responsible electronic
                  waste management with the EcoRecycle Pro today.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
