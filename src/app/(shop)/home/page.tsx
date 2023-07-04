import { type Metadata } from "next";
import Carousel from "@/components/Carousel";
import StoreCard from "@/components/StoreCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse",
};

export default function HomePage() {
  const categories = [
    {
      image:
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
      text: "Your Text Here 1",
    },
    {
      image:
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
      text: "Your Text Here 2",
    },
    {
      image:
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
      text: "Your Text Here 3",
    },
    {
      image:
        "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
      text: "Your Text Here 4",
    },
  ];

  return (
    <>
      <Carousel />
      <section className="container grid items-center gap-8 pb-8 pt-6 md:py-8">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                className="group relative block h-full w-full overflow-hidden object-cover object-center p-0"
                href={`/categories/${index + 1}`}
              >
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center brightness-50 filter transition-transform group-hover:scale-125"
                  src={category.image}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {category.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
              <Button>View all</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
            <StoreCard />
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>
      </section>
    </>
  );
}