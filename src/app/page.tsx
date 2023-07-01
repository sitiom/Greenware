import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Footer from "@/components/footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { signIn } from "@/actions";
import NavProfile from "@/components/NavProfile";

export default async function LandingPage() {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company XYZ",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum lacus in urna aliquam, sed elementum velit mattis.",
      avatarSrc: "https://github.com/shadcn.png",
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager, Company ABC",
      quote:
        "Nullam cursus rhoncus massa, eu ultrices arcu tempus vitae. Cras convallis, nibh at iaculis pharetra, diam turpis finibus orci, et convallis turpis enim nec arcu.",
      avatarSrc: "https://github.com/janesmith.png",
    },
    {
      name: "David Johnson",
      role: "CTO, Company 123",
      quote:
        "Vestibulum eu tristique risus. Nunc mattis consectetur lectus ac lobortis. Fusce id urna eget turpis suscipit interdum.",
      avatarSrc: "https://github.com/davidjohnson.png",
    },
  ];
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: userData } = await supabase
    .from("profiles")
    .select("full_name, avatar_url")
    .match({ id: session?.user.id });
  const user = userData?.[0];

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
          <div className="flex flex-1 items-center justify-end gap-1">
            {session && user ? (
              <NavProfile session={session} profile={user} />
            ) : (
              <form>
                <Button className="text-white" formAction={signIn}>
                  Login
                </Button>
              </form>
            )}
          </div>
        </header>
        <section className="container flex flex-col items-center gap-12 px-14 pb-14 pt-8 text-center md:flex-row md:text-left">
          <div className="my-8 flex-1">
            <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Promote <br />
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
        <div className="grid gap-6 p-4 md:grid-cols-3 md:p-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mx-auto max-w-md md:max-w-xl">
              <CardHeader className="flex flex-col items-center">
                <Avatar>
                  <AvatarImage src={testimonial.avatarSrc} />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
