import { signIn } from "@/actions";
import { Menu, ShoppingCart } from "lucide-react";
import NavProfile from "./NavProfile";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";
import Link from "next/link";
import { getUserById } from "@/lib/queries";

export default async function Navbar() {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: user } = await getUserById(supabase, session?.user.id ?? "");

  return (
    <header className="sticky top-0 z-40 border-b bg-background py-4">
      <div className="container flex items-center gap-6">
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
        <Link href="/">
          <img
            src="/images/logo-banner.png"
            className="hidden w-24 md:inline"
            alt="Greenware logo"
          />
        </Link>
        <nav className="hidden space-x-5 font-medium md:flex">
          {navLinks.map(({ name, href }) => (
            <Link className="text-muted-foreground" key={name} href={href}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-3">
          {session && user ? (
            <>
              <Button size="icon" variant="outline">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <NavProfile session={session} profile={user} />
            </>
          ) : (
            <form>
              <Button className="text-white" formAction={signIn}>
                Login
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
