import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "@/components/sidebar-nav";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerDemo } from "@/components/DatePicker";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { PlusCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Browse",
};

const sidebarNavItems = [
  {
    title: "Account",
    href: "/examples/forms",
  },
  {
    title: "Stores",
    href: "/examples/forms/account",
  },
  {
    title: "Billings",
    href: "/examples/forms/appearance",
  },
  {
    title: "Purchases",
    href: "/examples/forms/notifications",
  },
];

export default async function UserPage() {
  return (
    <>
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex md:flex">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Full Name</h2>
              </div>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Products</TabsTrigger>
                  <TabsTrigger value="analytics" disabled>
                    Orders
                  </TabsTrigger>
                  <TabsTrigger value="reports" disabled>
                    Payments
                  </TabsTrigger>
                  <TabsTrigger value="notifications" disabled>
                    Analytics
                  </TabsTrigger>
                </TabsList>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <DatePickerDemo />
                  <div className="flex flex-row items-start justify-start space-x-2">
                    <Button>
                      <PlusCircle /> New Product
                    </Button>
                    <Button variant="ghost">Download</Button>
                  </div>
                </div>

                <Separator />
                <div className="relative">
                  <div className="flex space-x-4 pb-4">
                    {/*ProductCard Here */}
                  </div>
                </div>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"></div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </>
  );
}
