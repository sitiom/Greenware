import { type Metadata } from "next";
import Carousel from "./components/Carousel";
import CardWithForm from "./components/card";
import FeaturedStore from "./components/featured";
import { Button } from "@/components/ui/button";
import Categories from "./components/categories";

export const metadata: Metadata = {
  title: "Browse",
};

export default function HomePage() {
  return (
    <>
      <Carousel />
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          </div>
          <Categories />
        </div>
      </section>
      <div className="mt-4 grid place-items-center gap-5 rounded-lg border bg-card px-6 py-20 text-center text-card-foreground shadow-sm">
        <h2 className="text-2xl font-medium">
          Do you want to sell your products on our website?
        </h2>
        <Button>Create a Store</Button>
      </div>
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Products
            </h2>
            <div className="flex items-center space-x-2">
              <Button>View All</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
            <CardWithForm />
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Store
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <FeaturedStore />
            <FeaturedStore />
            <FeaturedStore />
            <FeaturedStore />
          </div>
        </div>
      </section>
    </>
  );
}
