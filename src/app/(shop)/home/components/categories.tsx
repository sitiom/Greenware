import * as React from "react";

import { Button } from "@/components/ui/button";

export default function Categories() {
  return (
    <>
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 1</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 2</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 3</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 4</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 5</span>
            </div>
          </Button>

          <Button
            variant="ghost"
            className="relative p-0 block h-full w-full object-cover object-center"
          >
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center filter brightness-50"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Your Text Here 6</span>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
