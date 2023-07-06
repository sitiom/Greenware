import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle } from "lucide-react";
import { getProductsByUserId, getUserById } from "@/lib/queries";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import ProductCard from "@/components/ProductCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: "Browse",
};

interface UserPageProps {
  params: {
    id: string;
  };
}

export default async function UserPage({ params: { id } }: UserPageProps) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: user } = await getUserById(supabase, id);
  const { data: products } = await getProductsByUserId(supabase, id);

  const description = `Situated in a modern, minimalist building, ${user?.full_name} \
invites visitors into the world of sustainable electronics. The facade boasts a striking \
display of reclaimed wood and recycled metal, reflecting the brand's commitment to \
environmental stewardship. Large, floor-to-ceiling windows are lined with a diverse array \
of cutting-edge, eco-friendly devices, from energy-efficient appliances to solar-powered \
gadgets, all bathed in natural sunlight that further accentuates their clean, sleek designs. \
The green wall of potted plants that forms the backdrop creates a refreshing contrast, embodying \
the store's harmonious blend of technology and nature. Softly glowing LED signage provides subtle \
illumination, symbolizing the low-energy ethos at the core of the store's mission. This storefront \
is more than a retail space; it's an unequivocal declaration of its dedication towards fostering a sustainable future.`;

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const { data: currentUser } = await getUserById(
    supabase,
    session?.user.id ?? ""
  );

  return (
    <div className="container space-y-4 p-10">
      <div className="flex items-center gap-2 space-y-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user?.avatar_url ?? ""} />
          <AvatarFallback>
            {user?.full_name
              ?.split(" ")
              .map((name) => name.charAt(0))
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold tracking-tight">{user?.full_name}</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Products</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {currentUser?.id === user?.id && (
            <div className="flex justify-end">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> New Product
              </Button>
            </div>
          )}
        </TabsContent>
        <Separator />
        <TabsContent value="overview">
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="about">
          <p>{description}</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
