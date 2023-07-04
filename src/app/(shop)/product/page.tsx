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

export const metadata: Metadata = {
  title: "Browse",
};

export default function ProductPage() {
  return (
    <>
      <section className="container items-center  gap-8 pb-8 pt-6 md:py-8">
        <BreadCrumbs />
        <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative h-full flex-col bg-muted text-white lg:flex">
            <div
              className="inset-0"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/sqCJ6xJ/e-waste-recycling.jpg')",
                backgroundSize: "cover",
                height: "400px",
              }}
            />
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6">
              <div className="flex flex-col space-y-2 text-start">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Electronics Title
                </h1>
                <p className="text-sm text-muted-foreground">₱999</p>
              </div>
              <QuantityButton />
              <Button className="inline-flex w-full items-center justify-center">
                Add to Cart
              </Button>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>Hello World</AccordionContent>
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
    </>
  );
}
