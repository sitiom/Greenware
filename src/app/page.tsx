import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Footer from "@/components/footer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home = () => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Pricing", href: "/pricing" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="bg-stone-100 dark:bg-background">
        <header className="container flex items-center gap-6 px-5 pt-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 md:hidden">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-screen bg-stone-100 dark:bg-gray-900 md:hidden">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.map(({ name, href }) => (
                <Link key={name} href={href}>
                  <DropdownMenuItem>{name}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <img
            src="/images/logo-banner.png"
            className="hidden w-28 md:inline"
            alt="Greenware logo"
          />
          <nav className="hidden space-x-5 font-medium md:flex">
            {navLinks.map(({ name, href }) => (
              <Link className="text-muted-foreground" key={name} href={href}>
                {name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 justify-end gap-1">
            <Button className="text-white">Login</Button>
            <Button variant="ghost">Sign up</Button>
            <ThemeToggle />
          </div>
        </header>
        <section className="container flex flex-col items-center gap-12 px-14 pb-14 pt-8 text-center md:flex-row md:text-left">
          <div className="my-8 flex-1">
            <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Promotes <br />
              <span className="text-green-800">
                recycling and sustainability.
              </span>
            </h1>
            <Button className="px-5 py-6 text-lg text-white">
              Get started
            </Button>
            <Button className="ml-1 px-5 py-6 text-lg" variant="ghost">
              Learn more
            </Button>
          </div>
          <div className="flex-1">
            <div className="m-auto max-w-sm">
              <img src="/images/hero.png" />
            </div>
          </div>
        </section>
        <img
          src="/images/wave.png"
          alt="separator"
          className="relative top-[4.5rem] h-36 w-full"
        />
      </div>
      <section className="h-full pb-12 pt-44 dark:bg-black">
        <div className="container mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">Testimonials</h2>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
